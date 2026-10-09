"use client";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { proof } from "@/data/content";
import Heading from "@/components/ui/Heading";
const ZoomModal = dynamic(() => import("@/components/ui/ZoomModal"), {
  ssr: false,
});
const LIMIT = 3;

export default function Proof() {
  const [all, setAll] = useState(false);
  const [zoom, setZoom] = useState(null);
  const items = proof.filter((p) => p.img);
  const shown = all ? items : items.slice(0, LIMIT);
  return (
    <section id="proof" className="mx-auto max-w-3xl px-5 py-16">
      <Heading
        eyebrow="Empirical Architecture"
        title="Results, with receipts."
        sub="Real numbers from verified accounts. Every single artifact is tracked and audited."
      />
      <div className="mt-8 flex flex-col gap-6">
        {shown.map((p) => (
          <article key={p.id} className="panel overflow-hidden">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="flex gap-1" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <i key={i} className="h-2.5 w-2.5 rounded-full bg-line" />
                ))}
              </span>
              <span className="flex-1 truncate text-[10px] tracking-widest text-white/50">
                {p.tool}
              </span>
              <span className="rounded border border-ok/40 bg-ok/10 px-2 py-0.5 text-[9px] font-bold tracking-wider text-ok">
                {p.badge}
              </span>
            </div>
            <button
              type="button"
              onClick={() =>
                setZoom({
                  src: `${p.img}`,
                  alt: `${p.client} ${p.metric} analytics proof`,
                })
              }
              aria-label={`Zoom proof: ${p.client}`}
              className="relative block aspect-video w-full cursor-zoom-in"
            >
              <Image
                src={`${p.img}`}
                alt={`${p.client} ${p.metric} analytics proof`}
                fill
                sizes="(min-width:768px) 768px, 100vw"
                className="object-cover"
              />
              <span className="tag absolute bottom-3 right-3 font-mono text-ok">
                ✓ {p.chip}
              </span>
              <span className="tag absolute left-3 top-3">🔍 TAP TO ZOOM</span>
            </button>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[11px] font-bold tracking-[.15em] text-brand">
                  {p.client}
                </span>
                <span className="text-xl font-bold">{p.metric}</span>
              </div>
              <p className="mt-3 text-sm text-white/70">{p.text}</p>
            </div>
          </article>
        ))}
      </div>
      {items.length > LIMIT && (
        <button
          type="button"
          aria-expanded={all}
          onClick={() => setAll(!all)}
          className="btn-g mt-6 w-full"
        >
          {all ? "Show Less" : `Show More (+${items.length - LIMIT})`}
        </button>
      )}
      {zoom && <ZoomModal {...zoom} onClose={() => setZoom(null)} />}
    </section>
  );
}
