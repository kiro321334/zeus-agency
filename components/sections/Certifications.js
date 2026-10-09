"use client";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { certs } from "@/data/content";
import Heading from "@/components/ui/Heading";
import Icon from "@/components/ui/Icon";
const ZoomModal = dynamic(() => import("@/components/ui/ZoomModal"), {
  ssr: false,
});

export default function Certifications() {
  const [all, setAll] = useState(false);
  const [zoom, setZoom] = useState(null);
  const shown = all ? certs : certs.slice(0, 4);
  return (
    <section id="certs" className="mx-auto max-w-5xl px-5 py-16">
      <Heading
        eyebrow="Verified Credentials"
        title="Certifications."
        sub="Rigorous industry credentials backing raw creative talent."
      />
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {shown.map(([id, t, s]) => (
          <article key={id} className="panel overflow-hidden">
            <button
              type="button"
              onClick={() =>
                setZoom({
                  src: `/certs/${id}.jpeg`,
                  alt: `${t} certificate – ${s}`,
                })
              }
              aria-label={`Zoom certificate: ${t}`}
              className="relative block aspect-[4/3] w-full cursor-zoom-in"
            >
              <Image
                src={`/certs/${id}.jpeg`}
                alt={`${t} certificate – ${s}`}
                fill
                sizes="(min-width:768px) 25vw, 50vw"
                className="object-contain"
              />
              <span className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-ok text-bg">
                <Icon n="check" size={14} />
              </span>
              <span className="tag absolute bottom-2 left-2">🔍 ZOOM</span>
            </button>
            <div className="p-3">
              <h3 className="text-sm font-bold leading-snug">{t}</h3>
              <p className="mt-1 text-xs text-white/50">{s}</p>
            </div>
          </article>
        ))}
      </div>
      {certs.length > 4 && (
        <button
          type="button"
          aria-expanded={all}
          onClick={() => setAll(!all)}
          className="btn-g mt-6 w-full text-white/70"
        >
          {all ? "Show Less" : "View All Accreditations"}
        </button>
      )}
      {zoom && <ZoomModal {...zoom} onClose={() => setZoom(null)} />}
    </section>
  );
}
