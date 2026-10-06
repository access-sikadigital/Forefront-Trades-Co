"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Brand cursor for fine pointers: a small orange square that trails the
 * pointer and expands into a labelled disc over [data-cursor="Label"].
 * The native cursor stays visible — this is decoration, not a replacement.
 */
export function Cursor() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = root.current;
    if (!el || prefersReducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const dot = el.querySelector<HTMLElement>("[data-dot]")!;
    const label = el.querySelector<HTMLElement>("[data-label]")!;
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });
    let current = "";

    const move = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      const next = target?.dataset.cursor ?? "";
      if (next === current) return;
      current = next;
      label.textContent = next;
      gsap.to(dot, { scale: next ? 1 : 0.14, borderRadius: next ? "50%" : "0%", duration: 0.5, ease: "ftc.out", overwrite: true });
      gsap.to(label, { autoAlpha: next ? 1 : 0, duration: 0.3, delay: next ? 0.12 : 0, overwrite: true });
    };
    const hide = () => gsap.to(el, { autoAlpha: 0, duration: 0.3 });
    const show = () => gsap.to(el, { autoAlpha: 1, duration: 0.3 });

    gsap.set(dot, { scale: 0.14 });
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", hide);
    document.addEventListener("pointerenter", show);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", hide);
      document.removeEventListener("pointerenter", show);
    };
  });

  return (
    <div ref={root} aria-hidden className="pointer-events-none fixed top-0 left-0 z-[90] hidden [@media(hover:hover)_and_(pointer:fine)]:block">
      <div data-dot className="absolute -top-12 -left-12 flex size-24 items-center justify-center bg-orange">
        <span data-label className="label invisible !text-[0.7rem] text-white" />
      </div>
    </div>
  );
}
