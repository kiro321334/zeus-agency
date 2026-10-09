import Image from 'next/image';
import { skills } from '@/data/content';
export default function Founder() {
  return (<section id="about" className="bg-panel/60 px-5 py-16 text-center"><div className="mx-auto max-w-2xl">
    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-2xl border-[3px] border-brand p-0.5"><Image src="/hero.jpg" alt="Ahmad Maria portrait" fill sizes="96px" className="rounded-xl object-cover object-[50%_30%]" /></div>
    <p className="eyebrow mt-6">Founder & Operator</p><h2 className="mt-2 text-4xl font-bold">Ahmad Maria</h2><p className="mt-2 text-sm">Founder, ZEUS Digital Marketing Agency</p>
    <p className="mt-5 text-sm leading-relaxed text-white/70">For over 7 years, I’ve operated at the intersection of Ruthless Marketing Telemetry and Sovereign Visual Refinement. I don’t believe in vanity metrics—only verified revenue and magnetic brand equity.</p>
    <ul className="mt-5 flex flex-wrap justify-center gap-2">{skills.map((s, i) => <li key={s} className={`rounded-lg border px-3 py-2 text-xs font-semibold ${i % 2 ? 'border-brand/40 text-white' : 'border-brand/40 bg-brand/10 text-brand'}`}>{s}</li>)}</ul>
  </div></section>);
}
