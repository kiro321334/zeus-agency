import { services } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
export default function Services() {
  return (<section id="services" className="mx-auto max-w-5xl px-5 py-16">
    <Heading eyebrow="Capabilities & Deliverables" title="Services." sub="Strategy, creative production, and performance deployment, unified seamlessly under one operator." />
    <div className="mt-8 grid gap-4 md:grid-cols-2">{services.map(([ic, t, s, items]) => (
      <article key={t} className="panel reveal p-6">
        <div className="flex items-center gap-4"><span className="grid h-11 w-11 place-items-center rounded-xl border border-brand/40 bg-brand/10 text-brand"><Icon n={ic} /></span><div><h3 className="text-xl font-bold">{t}</h3><p className="text-[10px] font-bold tracking-[.15em] text-brand">{s}</p></div></div>
        <ul className="mt-5 grid gap-3 text-sm text-white/80">{items.map((i) => <li key={i} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{i}</li>)}</ul>
      </article>))}</div>
    <a href="#contact" className="btn-g mt-6 w-full">Request A Custom Quote</a>
  </section>);
}
