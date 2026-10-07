"use client";

import { useRef } from "react";
import { Counter } from "@/components/motion/Counter";
import { TextLink } from "@/components/ui/Button";
import { Icon, type BrandIcon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { guarantees, guaranteesHeading } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn, prefersReducedMotion } from "@/lib/utils";

const [fixedPrice, onTime, construction, maintenance, insurance] = guarantees;

/**
 * Guarantees as a bento: the two contract promises (fixed price, finish date)
 * share a large photo card with client proof; the two warranties get giant
 * count-up numerals in brand colours; builder-collapse protection runs as a
 * wide strip. Cards open upward in sequence; ticks draw; numbers count.
 */
export function Guarantees() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      gsap.fromTo(
        q("[data-tile]"),
        { clipPath: "inset(100% 0% 0% 0% round 6px)", y: 40 },
        {
          clipPath: "inset(0% 0% 0% 0% round 6px)",
          y: 0,
          duration: 1.2,
          ease: "ftc.inOut",
          stagger: 0.12,
          scrollTrigger: { trigger: q("[data-bento]")[0], start: "top 88%", once: true },
        },
      );
      gsap.fromTo(
        q("[data-tick]"),
        { drawSVG: "0%" },
        { drawSVG: "100%", duration: 0.6, ease: "power2.out", stagger: 0.2, delay: 0.7, scrollTrigger: { trigger: q("[data-bento]")[0], start: "top 88%", once: true } },
      );
      gsap.fromTo(
        q("[data-bento-img]"),
        { scale: 1.2 },
        { scale: 1, ease: "none", scrollTrigger: { trigger: q("[data-bento]")[0], start: "top bottom", end: "bottom top", scrub: 0.8 } },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-cream py-section">
      <div className="container-x">
        <SectionHeading
          label={guaranteesHeading.label}
          title={guaranteesHeading.title}
          intro={guaranteesHeading.intro}
          action={<TextLink href={guaranteesHeading.link.href}>{guaranteesHeading.link.label}</TextLink>}
        />

        <div data-bento className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-5">
          {/* A — the contract promises, over a finished kitchen */}
          <article data-tile className="relative min-h-[520px] overflow-hidden rounded-[6px] bg-purple-950 text-white md:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-[640px]">
            <div data-bento-img className="absolute inset-0">
              <Photo src="/images/projects/footscray/kitchen.jpg" alt="" frame={1} vw={{ desktop: 56, mobile: 100 }} bleed={1.2} />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-purple-950 via-purple-950/80 to-purple-950/25" />
            <div className="relative flex h-full flex-col justify-end gap-8 p-6 sm:p-9 lg:p-11">
              <span className="label w-fit rounded-full bg-orange px-3.5 py-2 !text-[0.66rem] !tracking-[0.14em] text-white">In your contract</span>
              <ul className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                {[fixedPrice, onTime].map((g) => (
                  <li key={g.title}>
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-orange">
                        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path data-tick d="M4.5 12.5l5 5L19.5 7" />
                        </svg>
                      </span>
                      <h3 className="font-display text-[clamp(1.6rem,1.2rem+1.4vw,2.4rem)] leading-none font-bold tracking-[-0.025em]">{g.title}</h3>
                    </div>
                    <p className="mt-3 max-w-sm text-lg leading-snug text-white/80">{g.text}</p>
                  </li>
                ))}
              </ul>
              <figure className="border-t border-white/15 pt-6">
                <blockquote className="font-display text-xl leading-snug font-medium sm:text-2xl">&ldquo;{guaranteesHeading.proof.text}&rdquo;</blockquote>
                <figcaption className="label mt-3 !text-[0.66rem] !tracking-[0.14em] text-white/60">
                  {guaranteesHeading.proof.name} · {guaranteesHeading.proof.source}
                </figcaption>
              </figure>
            </div>
          </article>

          {/* B / C — the warranties, as giant numerals */}
          <WarrantyTile g={construction} value={7} tone="orange" />
          <WarrantyTile g={maintenance} value={3} tone="purple" />

          {/* D — builder-collapse protection */}
          <article
            data-tile
            className="relative grid items-center gap-6 overflow-hidden rounded-[6px] bg-cream-50 p-6 text-purple ring-1 ring-purple/10 sm:p-9 md:col-span-2 md:grid-cols-[auto_1fr_auto] md:gap-10 lg:col-span-12 lg:px-11"
          >
            <p className="font-display text-[clamp(3.5rem,2.4rem+3vw,5.5rem)] leading-none font-bold tracking-[-0.05em] text-orange tabular">
              $<Counter value={16} />k<span className="text-purple">+</span>
            </p>
            <div>
              <h3 className="font-display text-[clamp(1.5rem,1.2rem+1vw,2.1rem)] leading-none font-bold tracking-[-0.02em]">{insurance.title}</h3>
              <p className="mt-3 max-w-2xl text-lg leading-snug text-ink/75">{insurance.text}</p>
            </div>
            <span className="flex size-16 items-center justify-center rounded-full bg-purple text-white">
              <Icon name={insurance.icon as BrandIcon} className="size-8" />
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}

function WarrantyTile({ g, value, tone }: { g: (typeof guarantees)[number]; value: number; tone: "orange" | "purple" }) {
  const orange = tone === "orange";
  return (
    <article
      data-tile
      className={cn(
        "relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[6px] p-6 sm:p-9 lg:col-span-5",
        orange ? "bg-orange text-purple-950" : "bg-purple text-white",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="max-w-[12ch] font-display text-[clamp(1.5rem,1.2rem+1vw,2.1rem)] leading-[1.02] font-bold tracking-[-0.02em]">{g.title}</h3>
        <span className={cn("flex size-12 shrink-0 items-center justify-center rounded-full", orange ? "bg-purple-950 text-orange" : "bg-orange text-white")}>
          <Icon name={g.icon as BrandIcon} className="size-6" />
        </span>
      </div>
      <div className="flex items-end justify-between gap-4">
        <p className={cn("max-w-[24ch] text-lg leading-snug", orange ? "text-purple-950/85" : "text-white/80")}>{g.text}</p>
        <p
          aria-hidden
          className={cn(
            "-mb-4 font-display text-[clamp(7rem,5rem+8vw,12rem)] leading-[0.8] font-bold tracking-[-0.06em] tabular",
            orange ? "text-white" : "text-orange",
          )}
        >
          <Counter value={value} />
          <span className="text-[0.32em] tracking-[-0.02em]">yr</span>
        </p>
      </div>
    </article>
  );
}
