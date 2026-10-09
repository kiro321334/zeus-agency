import Image from 'next/image';
import { heroStats } from '@/data/content';
export default function Hero() {
  return (<section className="relative flex h-svh min-h-[600px] items-end overflow-hidden bg-black">
    <Image src="/hero.jpg" alt="Ahmad Maria, founder of ZEUS Digital Marketing Agency" fill priority fetchPriority="high" sizes="100vw" className="hero-img object-cover object-[50%_18%]" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-bg" />
    <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-bg via-bg/90 to-transparent" />
    <div className="relative mx-auto w-full max-w-3xl px-5 pb-8 text-center">
      <p className="fade-up inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-[11px] font-bold uppercase tracking-wider"><span className="blink h-1.5 w-1.5 rounded-full bg-brand" />ZEUS Digital Marketing Agency</p>
      <h1 className="fade-up d1 mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">I turn attention<br /><span className="text-brand">into sales.</span></h1>
      <p className="fade-up d2 mt-3 text-xs text-white/70"><b className="text-brand">3.6M</b> reach in 3 months <span className="mx-1">•</span> <b className="text-brand">1.7M</b> reach in 1 month</p>
      <dl className="fade-up d3 mt-5 grid grid-cols-3 divide-x divide-line">{heroStats.map(([v, l]) => <div key={l} className="px-2"><dt className="text-lg font-bold">{v}</dt><dd className="text-[10px] tracking-widest text-white/50">{l}</dd></div>)}</dl>
      <div className="fade-up d4 mt-6 grid grid-cols-2 gap-3 md:mx-auto md:max-w-md"><a href="#results" className="btn-p glow">Results ↓</a><a href="#contact" className="btn-g">Hire Me</a></div>
    </div>
  </section>);
}
