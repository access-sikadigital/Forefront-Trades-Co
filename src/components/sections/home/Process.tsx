"use client";

import { useRef, type CSSProperties } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process, processHeading } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

/** Faint drafting grid — the section reads like a sheet of plans. */
const blueprint: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgb(61 17 82 / 0.06) 1px, transparent 1px), linear-gradient(90deg, rgb(61 17 82 / 0.06) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  backgroundPosition: "-1px -1px",
};

/**
 * The five steps step down the page as a staircase, read top-left to bottom-right.
 * On scroll an orange line draws down the stairs (riser, then tread), and each
 * step brightens and lifts as the line reaches it. Mobile: a vertical rail.
 */
export function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      const steps = q("[data-step]");
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1280px)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: q("[data-stairs]")[0], start: "top 88%", end: "bottom 55%", scrub: 0.8 },
        });
        steps.forEach((step, i) => {
          const sel = gsap.utils.selector(step);
          const at = i * 1;
          if (i > 0) tl.fromTo(sel("[data-riser]"), { scaleY: 0 }, { scaleY: 1, duration: 0.35 }, at);
          tl.fromTo(sel("[data-tread]"), { scaleX: 0 }, { scaleX: 1, duration: 0.65 }, at + (i > 0 ? 0.35 : 0))
            .fromTo(sel("[data-node]"), { scale: 0 }, { scale: 1, duration: 0.2, ease: "back.out(3)" }, at + (i > 0 ? 0.3 : 0))
            .fromTo(sel("[data-body]"), { opacity: 0.18, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, at + 0.25);
        });
      });

      mm.add("(max-width: 1279px)", () => {
        gsap.fromTo(
          q("[data-rail]"),
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: { trigger: q("[data-stairs]")[0], start: "top 88%", end: "bottom 60%", scrub: 0.6 } },
        );
        steps.forEach((step) =>
          gsap.fromTo(
            step.querySelector("[data-body]"),
            { opacity: 0.2, y: 20 },
            { opacity: 1, y: 0, ease: "power2.out", scrollTrigger: { trigger: step, start: "top 92%", end: "top 65%", scrub: true } },
          ),
        );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-white py-section" style={blueprint}>
      <div className="container-x">
        <SectionHeading
          label={processHeading.label}
          title={processHeading.title}
          intro={processHeading.intro}
        />

        <ol data-stairs className="relative mt-16 grid gap-12 pl-8 xl:mt-24 xl:grid-cols-5 xl:items-start xl:gap-0 xl:pl-0">
          {/* Mobile rail */}
          <span aria-hidden className="absolute top-2 bottom-2 left-[5px] w-0.5 bg-purple/12 xl:hidden" />
          <span aria-hidden data-rail className="absolute top-2 bottom-2 left-[5px] w-0.5 origin-top bg-orange xl:hidden" />

          {process.map((s, i) => (
            <li
              key={s.step}
              data-step
              className="relative xl:mt-[calc(var(--lift)*4.5rem)] xl:pt-10 xl:pr-8"
              style={{ "--lift": i } as CSSProperties}
            >
              {/* Stair lines (desktop): faint track + orange draw */}
              <span aria-hidden className="absolute top-0 left-0 hidden h-0.5 w-full bg-purple/12 xl:block" />
              <span aria-hidden data-tread className="absolute top-0 left-0 hidden h-0.5 w-full origin-left bg-orange xl:block" />
              {i > 0 && (
                <>
                  <span aria-hidden className="absolute -top-[4.5rem] left-0 hidden h-[4.5rem] w-0.5 bg-purple/12 xl:block" />
                  <span aria-hidden data-riser className="absolute -top-[4.5rem] left-0 hidden h-[4.5rem] w-0.5 origin-top bg-orange xl:block" />
                </>
              )}
              <span
                aria-hidden
                data-node
                className="absolute top-2 -left-8 block size-3 bg-orange xl:-top-[5px] xl:left-[-5px]"
              />

              <div data-body>
                <span className="font-display text-[clamp(3rem,2rem+2.5vw,4.5rem)] leading-none font-bold tracking-[-0.05em] text-purple/12 tabular">
                  {s.step}
                </span>
                <p className="label mt-4 text-orange">{s.time}</p>
                <h3 className="mt-2 text-h3 text-purple">{s.title}</h3>
                <p className="mt-3 max-w-xs text-base leading-snug text-ink/70">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <Reveal className="mt-14 xl:mt-20">
          <TextLink href={processHeading.link.href}>{processHeading.link.label}</TextLink>
        </Reveal>
      </div>
    </section>
  );
}
