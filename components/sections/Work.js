"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { videoFolders, photoFolders, workFilters } from "@/data/content";
import Heading from "@/components/ui/Heading";
const ZoomModal = dynamic(() => import("@/components/ui/ZoomModal"), {
  ssr: false,
});
const LIMIT = 6;

// صورة الغلاف بتتولّد جنب الفيديو: 1.mp4 -> 1.jpg (بسكريبت optimize-media)
const poster = (src) => src.replace(/\.mp4$/i, ".jpg");

const pauseOthers = (e) =>
  document
    .querySelectorAll("#work dialog video")
    .forEach((v) => v !== e.currentTarget && v.pause());

export default function Work() {
  const [f, setF] = useState("video");
  const [all, setAll] = useState(false);
  const [open, setOpen] = useState(null);
  const [zoom, setZoom] = useState(null);
  const ref = useRef(null);
  const list = f === "video" ? videoFolders : photoFolders;
  const shown = all ? list : list.slice(0, LIMIT);
  const isVideo = open?.kind === "video";

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open) {
      if (!d.open) d.showModal();
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="work" className="mx-auto max-w-5xl px-5 py-16">
      <Heading
        eyebrow="Portfolio Index"
        title="Selected work."
        sub="Bespoke video editing, high-end editorial social design, and precision photo retouching."
      />
      <div
        role="tablist"
        className="noscroll -mx-5 mt-6 flex gap-2 overflow-x-auto px-5"
      >
        {workFilters.map(([k, l]) => (
          <button
            key={k}
            role="tab"
            aria-selected={f === k}
            className="chip"
            onClick={() => {
              setF(k);
              setAll(false);
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 items-start gap-3 md:grid-cols-3 md:gap-5">
        {shown.map((w) => (
          <button
            key={w.id}
            type="button"
            onClick={() => setOpen(w)}
            aria-label={`Open ${w.title} folder`}
            className="panel group overflow-hidden text-left transition hover:border-brand/60"
          >
            <span
              className="relative block w-full overflow-hidden bg-black"
              style={{ aspectRatio: w.ratio }}
            >
              {/* صورة خفيفة بدل <video> عشان متحملش الفيديوهات مع فتح الصفحة */}
              <Image
                src={w.kind === "video" ? poster(w.media[0]) : w.media[0]}
                alt={`${w.title} – ${w.sub}`}
                fill
                sizes="(min-width:768px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              {w.kind === "video" && (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white backdrop-blur"
                >
                  ▶
                </span>
              )}
              <span className="tag absolute bottom-2 right-2 text-white/80">
                {w.media.length} {w.kind === "video" ? "VIDEOS" : "FILES"}
              </span>
            </span>
            <span className="block p-3">
              <span className="block text-sm font-bold">{w.title}</span>
              <span className="mt-1 block text-xs text-white/50">{w.sub}</span>
            </span>
          </button>
        ))}
      </div>

      {list.length > LIMIT && (
        <button
          type="button"
          aria-expanded={all}
          onClick={() => setAll(!all)}
          className="btn-g mt-6 w-full"
        >
          {all ? "Show Less" : `Show More (+${list.length - LIMIT})`}
        </button>
      )}

      <dialog
        ref={ref}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === ref.current && ref.current.close()}
        className="m-auto max-h-[92svh] w-[min(94vw,880px)] overflow-hidden rounded-2xl border border-line bg-panel p-0 text-white backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {open && (
          <div className="max-h-[92svh] overflow-y-auto p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">
                  {isVideo ? "Video Editing" : "Photo Editing"} •{" "}
                  {open.media.length} {isVideo ? "videos" : "files"}
                </p>
                <h3 className="mt-1 text-2xl font-bold">{open.title}</h3>
                <p className="text-xs text-white/50">{open.sub}</p>
              </div>
              <button
                type="button"
                autoFocus
                onClick={() => ref.current.close()}
                aria-label="Close"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line text-lg"
              >
                ✕
              </button>
            </div>
            {open.desc && (
              <p className="mt-3 text-sm text-white/70">{open.desc}</p>
            )}

            {isVideo ? (
              <div className="mt-5 grid grid-cols-2 items-start gap-3 sm:grid-cols-3">
                {open.media.map((src, i) => (
                  <div
                    key={src}
                    className="relative w-full overflow-hidden rounded-xl border border-line bg-black"
                    style={{ aspectRatio: open.ratio }}
                  >
                    {/* preload none + poster: الفيديو مش بيتحمّل غير لما تدوس play */}
                    <video
                      src={src}
                      poster={poster(src)}
                      controls
                      playsInline
                      preload="none"
                      onPlay={pauseOthers}
                      aria-label={`${open.title} video ${i + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5 grid grid-cols-2 items-start gap-3 sm:grid-cols-3">
                {open.media.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() =>
                      setZoom({ src, alt: `${open.title} ${i + 1}` })
                    }
                    aria-label={`Zoom image ${i + 1}`}
                    className="relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-line bg-black"
                    style={{ aspectRatio: open.ratio }}
                  >
                    <Image
                      src={src}
                      alt={`${open.title} file ${i + 1}`}
                      fill
                      sizes="(min-width:640px) 280px, 45vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <a
              href="#contact"
              onClick={() => ref.current.close()}
              className="btn-p mt-5 w-full"
            >
              Start a similar project
            </a>
          </div>
        )}
      </dialog>
      {zoom && <ZoomModal {...zoom} onClose={() => setZoom(null)} />}
    </section>
  );
}