import { faqs } from '@/data/content';
import Heading from '@/components/ui/Heading';
const ld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
export default function Faq() {
  return (<section id="faq" className="mx-auto max-w-3xl px-5 py-16">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <Heading eyebrow="Transparency" title="Questions." sub="Everything you need to know about working with an integrated creative operator." />
    <div className="mt-8 grid gap-3">{faqs.map(([q, a], i) => (
      <details key={q} open={i === 0} className="panel group open:border-brand/60"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-bold">{q}<span className="text-brand group-open:hidden">+</span><span className="hidden text-brand group-open:inline">−</span></summary>
        <p className="border-t border-line p-5 text-sm leading-relaxed text-white/70">{a}</p></details>))}</div>
  </section>);
}
