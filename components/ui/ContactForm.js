'use client';
import { site } from '@/lib/site';
const opts = ['Comprehensive Marketing Campaign', 'Video Editing & Motion', 'Social Media Design', 'Photo Retouching'];
const inp = 'mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-base text-white placeholder:text-white/40 focus:border-brand focus:outline-none';
const lab = 'block text-[10px] font-semibold uppercase tracking-[.18em] text-white/50';
export default function ContactForm() {
  const send = (e) => { e.preventDefault(); const d = new FormData(e.currentTarget);
    const t = `Hi Ahmad, I'm ${d.get('name')}.\nContact: ${d.get('phone')}\nObjective: ${d.get('goal')}\nScope: ${d.get('scope')}`;
    window.open(`${site.whatsapp}?text=${encodeURIComponent(t)}`, '_blank', 'noopener'); };
  return (<form onSubmit={send} className="panel mt-8 grid gap-5 p-5">
    <div><label htmlFor="name" className={lab}>Your Name</label><input id="name" name="name" required autoComplete="name" placeholder="e.g. Julian Vance" className={inp} /></div>
    <div><label htmlFor="phone" className={lab}>WhatsApp / Telegram / Phone</label><input id="phone" name="phone" required type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" className={inp} /></div>
    <div><label htmlFor="goal" className={lab}>Primary Objective</label><select id="goal" name="goal" className={inp}>{opts.map((o) => <option key={o}>{o}</option>)}</select></div>
    <div><label htmlFor="scope" className={lab}>Project Scope & Timeline</label><textarea id="scope" name="scope" rows={3} placeholder="Describe current reach, ad budget, or deadlines..." className={inp} /></div>
    <button type="submit" className="btn-p w-full">Send Growth Request →</button>
  </form>);
}
