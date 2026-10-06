"use client";

import { useRef } from "react";
import { Logomark } from "@/components/ui/Logomark";
import { gsap, useGSAP } from "@/lib/gsap";
import { completeIntro, PRELOADER_SEEN_KEY } from "@/lib/intro";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * First-visit intro (≈2.4s). The logomark draws itself, the name rises in,
 * then the screen breaks into the logomark's four cells, which slide away
 * to reveal the hero. Skipped on repeat visits in the same session and for
 * reduced-motion users (an inline script in <head> hides it before paint).
 */
export function Preloader() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const seen = document.documentElement.classList.contains("preloader-seen");
      if (seen || prefersReducedMotion()) {
        el.style.display = "none";
        completeIntro();
        return;
      }

      document.documentElement.classList.add("is-loading");
      const q = gsap.utils.selector(el);
      const finish = () => {
        try {
          sessionStorage.setItem(PRELOADER_SEEN_KEY, "1");
        } catch {}
        document.documentElement.classList.remove("is-loading");
        el.style.display = "none";
      };

      const tl = gsap.timeline({ defaults: { ease: "ftc.inOut" }, onComplete: finish });
      tl.set(q("[data-content]"), { autoAlpha: 1 })
        .from(q("[data-mark='frame']"), { drawSVG: "0%", duration: 1.0 })
        .from(q("[data-mark='cell']"), { drawSVG: "0%", duration: 0.6 }, "-=0.45")
        .from(q("[data-mark='arc']"), { drawSVG: "0%", duration: 0.7 }, "-=0.35")
        .from(q("[data-word]"), { yPercent: 110, duration: 0.9, stagger: 0.08, ease: "ftc.out" }, "-=0.7")
        .to(q("[data-count]"), { textContent: 100, snap: { textContent: 1 }, duration: 1.6, ease: "power2.inOut" }, 0)
        .to(q("[data-content]"), { autoAlpha: 0, y: -24, duration: 0.5, ease: "power2.in" }, "+=0.15")
        .add(() => completeIntro(), "-=0.05")
        .to(q("[data-cell='tl']"), { yPercent: -100, duration: 1.0 }, "<")
        .to(q("[data-cell='tr']"), { xPercent: 100, duration: 1.0 }, "<0.06")
        .to(q("[data-cell='bl']"), { xPercent: -100, duration: 1.0 }, "<0.06")
        .to(q("[data-cell='br']"), { yPercent: 100, duration: 1.0 }, "<0.06");
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      id="preloader"
      aria-hidden
      className="pointer-events-auto fixed inset-0 z-[100] grid grid-cols-2 grid-rows-2 text-orange"
    >
      {(["tl", "tr", "bl", "br"] as const).map((c) => (
        <div key={c} data-cell={c} className="bg-purple-950" style={{ marginRight: -1, marginBottom: -1 }} />
      ))}

      <div data-content data-reveal className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-5 sm:gap-7">
          <Logomark className="size-16 sm:size-20" strokeWidth={9} />
          <div className="font-display text-[1.65rem] leading-[1.02] font-bold tracking-[-0.01em] text-white sm:text-[2.1rem]">
            <span className="block overflow-hidden">
              <span data-word className="block">FOREFRONT</span>
            </span>
            <span className="block overflow-hidden">
              <span data-word className="block">TRADES CO.</span>
            </span>
          </div>
        </div>
        <p className="label absolute bottom-8 left-[var(--spacing-gutter)] text-white/50">Design · Construct · Since the 90s</p>
        <p className="label tabular absolute right-[var(--spacing-gutter)] bottom-8 text-white/50">
          <span data-count>0</span>%
        </p>
      </div>
    </div>
  );
}
