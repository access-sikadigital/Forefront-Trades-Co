"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Count-up number. The server renders the final value (good for SEO and
 * no-JS), then GSAP counts up from zero when it scrolls into view.
 */
export function Counter({ value, decimals = 0, className }: { value: number; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const state = { n: 0 };
      const format = (n: number) => n.toFixed(decimals);
      el.textContent = format(0);
      gsap.to(state, {
        n: value,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "clamp(top 95%)", once: true },
        onUpdate: () => {
          el.textContent = format(state.n);
        },
      });
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={className}>
      {value.toFixed(decimals)}
    </span>
  );
}
