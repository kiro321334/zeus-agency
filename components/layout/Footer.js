import Image from 'next/image';
export default function Footer() {
  return (<footer className="mx-auto max-w-5xl border-t border-line px-5 py-10 text-center">
    <Image src="/logo.jpg" alt="ZEUS logo" width={96} height={96} className="mx-auto rounded-2xl border border-line" />
    <p className="mt-5 text-[11px] uppercase tracking-[.15em] text-white/50">© 2026 ZEUS Digital Marketing Agency. All rights reserved.</p>
    <p lang="ar" dir="rtl" className="mt-2 text-xs text-white/50">زيوس للتسويق الرقمي — أحمد مارية</p>
    <a href="#top" className="mt-4 inline-block text-[11px] tracking-widest text-brand">BACK TO TOP ↑</a>
  </footer>);
}
