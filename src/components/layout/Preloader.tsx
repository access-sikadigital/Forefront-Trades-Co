"use client";

import { useRef } from "react";
import { WordmarkLine } from "@/components/ui/Logo";
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
        // Official logomark: outline draws in, then the solid artwork fills over it.
        .fromTo(q("[data-mark='outline']"), { drawSVG: "0%" }, { drawSVG: "100%", duration: 1.3 })
        .fromTo(q("[data-mark='fill']"), { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
        .to(q("[data-mark='outline']"), { opacity: 0, duration: 0.3 }, "<")
        .from(q("[data-word]"), { yPercent: 110, duration: 0.9, stagger: 0.08, ease: "ftc.out" }, "-=0.6")
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
        {/* Official primary lockup proportions: wordmark lines together match the mark height. */}
        <div className="flex items-center gap-[1.4rem] sm:gap-7">
          <Logomark animated className="size-16 sm:size-20" />
          <div className="flex h-16 flex-col justify-between sm:h-20">
            <span className="block overflow-hidden">
              <span data-word className="block">
                <WordmarkLine line={1} className="h-[1.8rem] w-auto sm:h-[2.25rem]" color="#fff" />
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-word className="block">
                <WordmarkLine line={2} className="h-[1.84rem] w-auto sm:h-[2.3rem]" color="#fff" />
              </span>
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
