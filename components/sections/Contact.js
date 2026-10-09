import { site } from "@/lib/site";
import Heading from "@/components/ui/Heading";
import Icon from "@/components/ui/Icon";

const msg = "Hi Ahmad, I'd like to grow my brand with ZEUS. Can we talk?";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-5 py-16">
      <Heading
        eyebrow="Get Started"
        title="Ready to scale your brand?"
        sub="Stop guessing. Message me now and get an actionable growth blueprint within 24 hours."
      />

      <a
        href={`${site.whatsapp}?text=${encodeURIComponent(msg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-p mt-8 flex w-full items-center justify-center gap-3 !py-5 text-lg font-extrabold"
      >
        <Icon n="chat" size={24} />
        Chat on WhatsApp Now
      </a>

      <p className="mt-3 text-center text-xs text-white/50">
        Free consultation • Reply within 24 hours • No commitment
      </p>

      <a
        href={site.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ZEUS on Facebook"
        className="btn-g mx-auto mt-6 flex w-14 items-center justify-center !px-0 !py-3.5"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          aria-hidden="true"
          className="text-[#1877F2]"
        >
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
        </svg>
      </a>
    </section>
  );
}
