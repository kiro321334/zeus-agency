import { metrics, miniStats, clients } from '@/data/content';
import Heading from '@/components/ui/Heading';
export default function Numbers() {
  return (<section id="results" className="mx-auto max-w-5xl px-5 py-16">
    <Heading eyebrow="Proven Results" title="Numbers that speak." />
    <div className="mt-8 grid gap-4 md:grid-cols-2">{metrics.map((m) => (
      <article key={m.label} className="panel reveal p-6">
        <div className="flex items-center justify-between"><p className="text-[11px] tracking-[.18em] text-white/50">{m.label}</p><span className="rounded-md bg-ok/10 px-2 py-1 text-[11px] font-semibold text-ok">↗ {m.badge}</span></div>
        <p className="grad-text mt-4 text-6xl font-bold">{m.value}</p><p className="mt-2 text-sm">{m.caption}</p>
        <svg viewBox="0 0 300 48" className="mt-5 h-12 w-full" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id={`g${m.value}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f06bb0" stopOpacity=".35" /><stop offset="1" stopColor="#f06bb0" stopOpacity="0" /></linearGradient></defs>
          <path d={`${m.path} V48 H0Z`} fill={`url(#g${m.value})`} /><path d={m.path} className="draw" fill="none" stroke="#c0409a" strokeWidth="2" /></svg>
      </article>))}</div>
    <div className="mt-4 grid grid-cols-3 gap-3">{miniStats.map(([v, l], i) => <div key={l} className="panel reveal p-4"><p className="text-xl font-bold">{v}{i === 2 && <span className="text-ok"> ↑</span>}</p><p className="mt-1 text-[11px] text-white/60">{l}</p></div>)}</div>
    <div className="mt-12"><p className="flex items-center gap-4 text-[10px] uppercase tracking-[.2em] text-white/50">Selected clientele & luxury partners<span className="h-px flex-1 bg-line" /></p>
      <ul className="mt-5 grid grid-cols-3 gap-x-4 gap-y-6 text-sm font-semibold tracking-[.18em] text-white/70 md:grid-cols-6">{clients.map((c) => <li key={c} className={c === 'Veloce' ? 'italic tracking-normal' : ''}>{c}</li>)}</ul></div>
  </section>);
}
