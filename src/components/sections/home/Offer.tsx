"use client";

import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { offer } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

const format = (n: number) => n.toLocaleString("en-AU");

/**
 * First-step offer. An oversized figure counts up with scroll, so the value
 * is "built" as you read; the designer's portrait sits in a frame with one
 * quarter-arc corner (from the logomark) and opens upward, while an offset
 * orange outline of the same shape drifts at its own speed.
 */
export function Offer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      const counter = q("[data-count]")[0] as HTMLElement;

      const state = { n: 0 };
      counter.textContent = format(0);
      gsap.to(state, {
        n: offer.amount,
        ease: "power1.out",
        snap: { n: 50 },
        onUpdate: () => {
          counter.textContent = format(state.n);
        },
        scrollTrigger: { trigger: q("[data-amount]")[0], start: "top 95%", end: "top 45%", scrub: 0.8 },
      });

      const frame = q("[data-frame]")[0];
      gsap
        .timeline({ scrollTrigger: { trigger: frame, start: "top 92%", once: true } })
        .fromTo(frame, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "ftc.inOut" })
        .fromTo(q("[data-portrait]"), { scale: 1.3 }, { scale: 1, duration: 2, ease: "ftc.out" }, 0)
        .fromTo(q("[data-outline]"), { autoAlpha: 0, scale: 0.92 }, { autoAlpha: 1, scale: 1, duration: 1.2, ease: "ftc.out" }, 0.6)
        .fromTo(q("[data-caption]"), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: "ftc.out" }, 0.9);

      gsap.fromTo(
        q("[data-outline-drift]"),
        { y: -14, x: -6 },
        { y: 14, x: 6, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 1 } },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-purple text-white">
      <div className="container-x grid max-w-[1440px] gap-14 py-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow light>{offer.label}</Eyebrow>
          </Reveal>

          <div data-amount className="mt-8">
            <p className="label text-white/55">{offer.amountPrefix}</p>
            <p className="mt-1 font-display text-[clamp(3.75rem,1.4rem+6.4vw,8.5rem)] leading-[0.9] font-bold tracking-[-0.05em] whitespace-nowrap text-orange tabular">
              <span className="mr-[0.05em] align-top text-[0.45em] leading-none">$</span>
              <span data-count>{format(offer.amount)}</span>
            </p>
          </div>

          <SplitLines as="h2" className="mt-3 text-[clamp(1.9rem,1.1rem+2.2vw,3.4rem)] leading-[1.02] tracking-[-0.025em] text-white">
            {offer.title}
          </SplitLines>

          <Reveal stagger={0.08} className="mt-6 max-w-xl">
            <p className="text-lg text-white/75">{offer.text}</p>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {offer.inclusions.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-orange text-white">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  <span className="font-display text-[0.98rem] font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button href={offer.cta.href}>{offer.cta.label}</Button>
              <p className="label text-white/50">{offer.note}</p>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-[400px] lg:col-span-5 lg:mr-0 lg:max-w-[460px]">
          {/* Offset lives on its own wrapper: GSAP owns the transforms of the two layers inside. */}
          <div aria-hidden className="absolute inset-0 translate-x-5 translate-y-5 lg:translate-x-7 lg:translate-y-7">
            <div data-outline-drift className="h-full w-full">
              <div data-outline className="h-full w-full rounded-tr-[46%] border-[3px] border-orange" />
            </div>
          </div>
          <div data-frame className="relative aspect-[4/5] overflow-hidden rounded-tr-[46%] bg-purple-950">
            <div data-portrait className="absolute inset-0">
              <Photo src={offer.image.src} alt={offer.image.alt} frame={4 / 5} vw={{ desktop: 26, mobile: 90 }} bleed={1.3} className="object-[32%_center]" />
            </div>
            <p data-caption className="label absolute bottom-5 left-5 rounded-full bg-purple-950/80 px-4 py-2.5 !text-[0.68rem] text-white backdrop-blur">
              {offer.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
