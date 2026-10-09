"use client";
import { useEffect, useRef, useState } from "react";

export default function ZoomModal({ src, alt, onClose }) {
  const ref = useRef(null);
  const [s, setS] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const pts = useRef(new Map());
  const dist = useRef(0);

  useEffect(() => {
    const prev = document.body.style.overflow;
    ref.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const zoom = (v) => {
    const n = Math.min(5, Math.max(1, v));
    setS(n);
    if (n === 1) setPos({ x: 0, y: 0 });
  };

  const down = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    pts.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.current.size === 2) {
      const [a, b] = [...pts.current.values()];
      dist.current = Math.hypot(a.x - b.x, a.y - b.y);
    }
  };
  const move = (e) => {
    const old = pts.current.get(e.pointerId);
    if (!old) return;
    const cur = { x: e.clientX, y: e.clientY };
    pts.current.set(e.pointerId, cur);
    if (pts.current.size === 2) {
      const [a, b] = [...pts.current.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist.current) zoom(s * (d / dist.current));
      dist.current = d;
    } else if (s > 1) {
      setPos((p) => ({ x: p.x + cur.x - old.x, y: p.y + cur.y - old.y }));
    }
  };
  const up = (e) => {
    pts.current.delete(e.pointerId);
    dist.current = 0;
  };

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-label={alt}
      className="m-0 h-svh max-h-none w-screen max-w-none overflow-hidden bg-black/95 p-0 text-white backdrop:bg-black"
    >
      <div className="absolute right-3 top-3 z-10 flex gap-2">
        {[
          ["−", () => zoom(s - 0.5)],
          ["+", () => zoom(s + 0.5)],
          ["1:1", () => zoom(1)],
        ].map(([l, fn]) => (
          <button
            key={l}
            type="button"
            onClick={fn}
            aria-label={`Zoom ${l}`}
            className="grid h-10 min-w-10 place-items-center rounded-lg border border-line bg-panel px-2 text-sm font-bold"
          >
            {l}
          </button>
        ))}
        <button
          type="button"
          autoFocus
          onClick={() => ref.current.close()}
          aria-label="Close"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-panel text-lg"
        >
          ✕
        </button>
      </div>
      <div
        className="grid h-full w-full place-items-center overflow-hidden"
        style={{ touchAction: "none", cursor: s > 1 ? "grab" : "zoom-in" }}
        onWheel={(e) => zoom(s - e.deltaY * 0.002)}
        onDoubleClick={() => zoom(s > 1 ? 1 : 2.5)}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="max-h-svh max-w-full select-none object-contain"
          style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(${s})` }}
        />
      </div>
    </dialog>
  );
}
