"use client";

import Link from "next/link";
import { useRef } from "react";
import { TextLink, ArrowIcon } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, servicesHeading } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn, prefersReducedMotion } from "@/lib/utils";

// Brand palette only: purple, deep purple, cream, orange.
const tones = {
  purple: { bg: "bg-purple", text: "text-white", muted: "text-white/75", tag: "border-white/25", index: "text-orange" },
  deep: { bg: "bg-purple-950", text: "text-white", muted: "text-white/75", tag: "border-white/25", index: "text-orange" },
  cream: { bg: "bg-cream", text: "text-purple", muted: "text-ink/75", tag: "border-purple/20", index: "text-orange" },
  orange: { bg: "bg-orange", text: "text-purple-950", muted: "text-purple-950/85", tag: "border-purple-950/25", index: "text-white" },
} as const;

/**
 * Sticky stacking service cards. Each card pins under the header; as the
 * next one slides over, the one beneath recedes (scale + shade).
 */
export function Services() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      // Stacking only from md up — on phones the cards are a simple, static list.
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (next) {
            gsap.to(card.querySelector("[data-card-inner]"), {
              scale: 0.9,
              ease: "none",
              scrollTrigger: { trigger: next, start: "top bottom", end: "top 14%", scrub: true },
            });
            gsap.to(card.querySelector("[data-shade]"), {
              opacity: 0.55,
              ease: "none",
              scrollTrigger: { trigger: next, start: "top bottom", end: "top 14%", scrub: true },
            });
          }
          gsap.fromTo(
            card.querySelector("[data-card-img]"),
            { scale: 1.2 },
            { scale: 1, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "top 14%", scrub: true } },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative bg-cream-50 pb-section">
      <div className="container-x">
        <SectionHeading
          label={servicesHeading.label}
          title={servicesHeading.title}
          intro={servicesHeading.intro}
          action={<TextLink href={servicesHeading.link.href}>{servicesHeading.link.label}</TextLink>}
        />

        <ol className="mt-12 space-y-5 md:mt-16 md:space-y-0 lg:mt-24">
          {services.map((s) => {
            const t = tones[s.tone];
            return (
              <li key={s.href} data-card className="md:sticky md:top-[12svh] md:mb-[6svh] md:h-[76svh] md:min-h-[560px] md:last:mb-0">
                <div data-card-inner className={cn("relative h-full origin-top overflow-hidden rounded-[4px] will-change-transform", t.bg, t.text)}>
                  <Link href={s.href} data-cursor="Explore" className="group grid h-full md:grid-cols-12">
                    <div className="relative z-10 flex flex-col justify-between gap-6 p-6 sm:p-8 md:col-span-6 md:p-10 lg:p-12 xl:col-span-5 xl:p-14">
                      <div className="flex items-start justify-between gap-6">
                        <span className={cn("font-display text-sm font-semibold tabular", t.index)}>{s.index} / 0{services.length}</span>
                      </div>
                      <div>
                        <h3 className="text-[clamp(1.85rem,1rem+2.6vw,4.5rem)] leading-[0.98] tracking-[-0.03em]">{s.title}</h3>
                        <p className={cn("mt-4 max-w-md text-lg md:mt-6 md:text-lead", t.muted)}>{s.summary}</p>
                        <ul className="mt-8 hidden flex-wrap gap-2 sm:flex">
                          {s.tags.map((tag) => (
                            <li key={tag} className={cn("label rounded-full border px-3.5 py-2 !text-[0.68rem] !tracking-[0.14em]", t.tag)}>
                              {tag}
                            </li>
                          ))}
                        </ul>
                        <span className="label mt-6 inline-flex items-center gap-3 !text-[0.78rem] !tracking-[0.16em] md:mt-10">
                          <span className="sm:hidden">Explore</span>
                          <span className="hidden sm:inline">Explore {s.title.toLowerCase()}</span>
                          <ArrowIcon className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                        </span>
                      </div>
                    </div>
                    <div className="relative order-first aspect-[4/3] overflow-hidden sm:aspect-[16/9] md:order-last md:col-span-6 md:aspect-auto xl:col-span-7">
                      <div data-card-img className="absolute inset-0">
                        {/* Frame is ~4:3 on desktop; the photo zooms in from 1.2× */}
                        <Photo
                          src={s.image.src}
                          alt={s.image.alt}
                          frame={1.3}
                          vw={{ desktop: 56, mobile: 100 }}
                          bleed={1.2}
                          className="transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                  </Link>
                  <div data-shade className="pointer-events-none absolute inset-0 bg-purple-950 opacity-0" />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
