// تشغيل: node scripts/optimize-media.mjs
// بيصغّر الصور ويضغط الفيديوهات (faststart) ويطلّع صورة غلاف لكل فيديو، بنفس الأسماء بدون ما تغيّر أي كود.
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import sharp from 'sharp';
import ffmpeg from 'ffmpeg-static';

const run = promisify(execFile);
const ROOTS = ['public/work', 'public/proof', 'public/certs'];
const MAX_IMG = 1600; // أقصى عرض/ارتفاع للصورة بالبكسل
const MAX_VID = 720; // أقصى عرض للفيديو
const kb = (n) => `${(n / 1024).toFixed(0)}KB`;

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

async function replaceIfSmaller(tmp, file, before) {
  const after = (await stat(tmp)).size;
  if (after < before * 0.95) { await rename(tmp, file); return after; }
  await unlink(tmp); return before;
}

async function image(file) {
  const before = (await stat(file)).size;
  const tmp = `${file}.tmp`;
  const ext = path.extname(file).toLowerCase();
  let img = sharp(file).rotate().resize({ width: MAX_IMG, height: MAX_IMG, fit: 'inside', withoutEnlargement: true });
  img = ext === '.png' ? img.png({ compressionLevel: 9, palette: true }) : img.jpeg({ quality: 78, mozjpeg: true, progressive: true });
  await img.toFile(tmp);
  const after = await replaceIfSmaller(tmp, file, before);
  console.log(`🖼  ${file}  ${kb(before)} → ${kb(after)}`);
}

async function video(file) {
  const poster = file.replace(/\.mp4$/i, '.jpg');
  try { await stat(poster); console.log(`⏭  ${file} (اتعالج قبل كده)`); return; } catch {}
  const before = (await stat(file)).size;
  const tmp = `${file}.tmp.mp4`;
  await run(ffmpeg, ['-y', '-i', file, '-vf', `scale='min(${MAX_VID},iw)':-2`, '-c:v', 'libx264', '-preset', 'slow', '-crf', '27',
    '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', tmp]);
  const after = await replaceIfSmaller(tmp, file, before);
  if (after === before) {
    // حتى لو الحجم مش أصغر، لازم faststart عشان الفيديو يبدأ بسرعة
    await run(ffmpeg, ['-y', '-i', file, '-c', 'copy', '-movflags', '+faststart', tmp]);
    await rename(tmp, file);
  }
  await run(ffmpeg, ['-y', '-ss', '0.5', '-i', file, '-frames:v', '1', '-vf', 'scale=540:-2', '-q:v', '5', poster]);
  console.log(`🎬 ${file}  ${kb(before)} → ${kb((await stat(file)).size)}  (+ poster)`);
}

for (const root of ROOTS) {
  try { await stat(root); } catch { continue; }
  for await (const f of walk(root)) {
    const ext = path.extname(f).toLowerCase();
    if (f.endsWith('.tmp')) continue;
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      // صور الأغلفة اللي بتتولّد للفيديوهات (1.jpg جنب 1.mp4) متتعاملش مرتين
      await image(f);
    } else if (ext === '.mp4') await video(f);
  }
}
console.log('✅ خلاص');
