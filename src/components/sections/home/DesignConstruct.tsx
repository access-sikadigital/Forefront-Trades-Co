"use client";

import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon, type BrandIcon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { designConstruct } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

/** Where each cell starts before it flies into the square (tl, tr, bl, br). */
const SCATTER = [
  { xPercent: -34, yPercent: -26, rotate: -7 },
  { xPercent: 30, yPercent: -34, rotate: 6 },
  { xPercent: -28, yPercent: 30, rotate: 5 },
  { xPercent: 36, yPercent: 24, rotate: -6 },
];

/**
 * Design & Construct — the four disciplines, made literal.
 *
 * Desktop: the section pins. The four disciplines start as scattered photo
 * cards and, as you scroll, fly in one by one and lock into a single square —
 * the logomark's grid. Each discipline in the legend lights up as its cell
 * lands; then the logomark frame and quarter arc draw around the assembled
 * square and the promise line appears.
 * Mobile: a simple 1–2 column grid of the same cards.
 */
export function DesignConstruct() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cells = q("[data-cell]");
        const legend = q("[data-legend]");
        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: { trigger: q("[data-stage]")[0], start: "top top", end: "+=140%", pin: true, scrub: 0.9 },
        });

        cells.forEach((cell, i) => {
          tl.fromTo(
            cell,
            { ...SCATTER[i], scale: 0.78, autoAlpha: 0.35 },
            { xPercent: 0, yPercent: 0, rotate: 0, scale: 1, autoAlpha: 1, duration: 1 },
            i * 0.32,
          ).fromTo(legend[i], { opacity: 0.3 }, { opacity: 1, duration: 0.3 }, i * 0.32 + 0.7);
        });

        tl.fromTo(q("[data-mark='frame']"), { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.8, ease: "none" }, ">-0.1")
          .fromTo(q("[data-mark='cell']"), { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.4, ease: "none" }, ">-0.2")
          .fromTo(q("[data-mark='arc']"), { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.5, ease: "none" }, ">-0.1")
          .fromTo(q("[data-promise] > *"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.12, ease: "power2.out" }, "<")
          .to({}, { duration: 0.3 }); // short hold before unpinning
      });

      mm.add("(max-width: 1023px)", () => {
        q("[data-cell]").forEach((cell) =>
          gsap.from(cell, { autoAlpha: 0, y: 40, duration: 1.1, ease: "ftc.out", scrollTrigger: { trigger: cell, start: "top 95%", once: true } }),
        );
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-purple text-white">
      <div data-stage className="container-x grid max-w-[1560px] gap-14 py-section lg:h-svh lg:grid-cols-12 lg:items-center lg:gap-10 lg:pt-28 lg:pb-12">
        {/* Copy + legend */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow light>{designConstruct.label}</Eyebrow>
          </Reveal>
          {/* Height-aware size: the pinned panel must fit short laptop screens too */}
          <SplitLines as="h2" className="mt-5 text-[length:min(clamp(2.4rem,1.2rem+3.2vw,4.75rem),8.5svh)] leading-[1] tracking-[-0.03em] text-white">
            {designConstruct.title}
          </SplitLines>
          <Reveal className="mt-5">
            <p className="max-w-lg text-lg text-white/75">{designConstruct.intro}</p>
          </Reveal>

          <ol className="mt-8 hidden border-t border-white/15 lg:block short:hidden">
            {designConstruct.pillars.map((p, i) => (
              <li key={p.title} data-legend className="flex items-center gap-4 border-b border-white/15 py-3">
                <span className="font-display text-sm font-semibold text-orange tabular">0{i + 1}</span>
                <span className="font-display text-lg font-semibold">{p.title}</span>
              </li>
            ))}
          </ol>

          <div data-promise className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            {designConstruct.promise.map((line) => (
              <span key={line} className="label flex items-center gap-2.5 text-white">
                <span className="size-1.5 bg-orange" aria-hidden />
                {line}
              </span>
            ))}
          </div>
          <Reveal className="mt-7">
            <TextLink href={designConstruct.link.href} light>
              {designConstruct.link.label}
            </TextLink>
          </Reveal>
        </div>

        {/* The square */}
        <div className="lg:col-span-7 lg:flex lg:justify-end">
          <div className="relative w-full lg:aspect-square lg:w-[min(calc(100svh-11rem),620px)]">
            <ul className="grid gap-4 sm:grid-cols-2 lg:h-full lg:grid-rows-2 lg:gap-2">
              {designConstruct.pillars.map((p, i) => (
                <li key={p.title} data-cell className="relative min-h-[300px] overflow-hidden rounded-[3px] bg-purple-950 will-change-transform lg:min-h-0">
                  <Photo src={p.image.src} alt={p.image.alt} frame={1} vw={{ desktop: 20, mobile: 100 }} />
                  <div className="absolute inset-0 bg-linear-to-t from-purple-950/95 via-purple-950/55 to-purple-950/15" />
                  <div className="relative flex h-full flex-col justify-between p-5 lg:p-6">
                    <div className="flex items-start justify-between">
                      <span className="flex size-11 items-center justify-center rounded-[2px] bg-orange text-white">
                        <Icon name={p.icon as BrandIcon} className="size-6" />
                      </span>
                      <span className="font-display text-sm font-semibold text-white/60 tabular">0{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-[clamp(1.35rem,1rem+0.8vw,1.75rem)] leading-[1.08] tracking-[-0.015em] text-white">{p.title}</h3>
                      <p className="mt-2 text-base leading-snug text-white/75">{p.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Logomark frame + quarter arc, drawn once the square is assembled (board is square, so strokes scale evenly) */}
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              className="pointer-events-none absolute -inset-3 hidden h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] text-orange lg:block"
              fill="none"
              stroke="currentColor"
              strokeWidth={0.5}
            >
              <path data-mark="frame" d="M0.6 0.6 H99.4 V99.4 H0.6 Z" />
              <path data-mark="cell" d="M50 0.6 V50 H0.6" />
              <path data-mark="arc" d="M50 99.4 A49.4 49.4 0 0 1 99.4 50" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
