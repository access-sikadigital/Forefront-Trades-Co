"use client";

import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { Button, PhoneButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Logomark } from "@/components/ui/Logomark";
import { finalCta } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

/** Closing call to action. The logomark assembles as the section arrives. */
export function FinalCta() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      gsap
        .timeline({ scrollTrigger: { trigger: root.current, start: "top 95%", end: "center center", scrub: 0.8 }, defaults: { ease: "none" } })
        .fromTo(q("[data-mark='frame']"), { drawSVG: "0%" }, { drawSVG: "100%" })
        .fromTo(q("[data-mark='cell']"), { drawSVG: "0%" }, { drawSVG: "100%" }, "-=0.3")
        .fromTo(q("[data-mark='arc']"), { drawSVG: "0%" }, { drawSVG: "100%" }, "-=0.3")
        .fromTo(q("[data-mark-wrap]"), { rotate: -30, scale: 0.8 }, { rotate: 0, scale: 1 }, 0);
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-purple-950 text-white">
      <div data-mark-wrap aria-hidden className="pointer-events-none absolute top-1/2 right-[-8vw] -translate-y-1/2 text-orange/25 lg:text-orange/80">
        <Logomark className="size-[52vw] max-w-[760px] lg:size-[42vw]" strokeWidth={3.2} />
      </div>
      <div className="container-x relative py-section">
        <Reveal>
          <Eyebrow light>{finalCta.label}</Eyebrow>
        </Reveal>
        <SplitLines as="h2" className="mt-8 max-w-[12ch] text-display-xl text-white">
          {finalCta.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </SplitLines>
        <Reveal stagger={0.1} className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
          <p className="max-w-lg text-lead text-white/80 lg:col-span-5">{finalCta.text}</p>
          <div className="flex flex-wrap items-center gap-6 lg:col-span-7 lg:justify-end">
            <Button href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</Button>
            <PhoneButton variant="light" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
