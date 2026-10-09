import { steps } from '@/data/content';
import Heading from '@/components/ui/Heading';
export default function Process() {
  return (<section id="process" className="mx-auto max-w-3xl px-5 py-16">
    <Heading eyebrow="The Framework" title="How I work." sub="A tested four-stage engineering sprint delivering turnkey certainty." />
    <ol className="relative mt-8 grid gap-7"><span aria-hidden="true" className="absolute bottom-4 left-5 top-4 w-px bg-brand/50" />
      {steps.map(([t, d], i) => (<li key={t} className="reveal relative flex gap-5"><span className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-bold ring-4 ring-bg" style={{ backgroundImage: 'linear-gradient(135deg,#9d3fc4,#e0307f)' }}>{i + 1}</span>
        <div><h3 className="text-lg font-bold">{t}</h3><p className="mt-1 text-sm leading-relaxed text-white/70">{d}</p></div></li>))}</ol>
  </section>);
}
