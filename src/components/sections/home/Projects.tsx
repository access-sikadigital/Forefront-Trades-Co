"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowIcon, TextLink } from "@/components/ui/Button";
import { Logomark } from "@/components/ui/Logomark";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

type Item = (typeof projects.columns)[number][number];

/** Per-column drift (px) for the sheared-masonry effect: outer columns slow, centre fast. */
const DRIFT = [70, 190, 110];

/**
 * Masonry project gallery.
 *
 * Reveal — each frame opens as a quarter-circle growing from its bottom-left
 * corner (the arc in the logomark) while the photo settles from 1.35× and a
 * slight tilt; caption lines follow.
 * Scroll — on desktop the three columns travel at different speeds, so the
 * grid shears and re-settles as you move through it.
 * Hover — the card in focus stays bright while its neighbours recede.
 */
export function Projects() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);

      q("[data-card]").forEach((card) => {
        const sel = gsap.utils.selector(card);
        const tl = gsap
          .timeline({ scrollTrigger: { trigger: card, start: "top 96%", once: true } })
          .fromTo(
            sel("[data-media]"),
            { clipPath: "circle(0% at 0% 100%)" },
            { clipPath: "circle(145% at 0% 100%)", duration: 1.6, ease: "ftc.inOut" },
          )
          .fromTo(sel("[data-img]"), { scale: 1.35, rotate: -2.5 }, { scale: 1, rotate: 0, duration: 2, ease: "ftc.out" }, 0);

        const arc = sel("[data-arc]");
        if (arc.length) tl.fromTo(arc, { drawSVG: "0%" }, { drawSVG: "100%", duration: 0.9, ease: "power2.inOut" }, 0.55);
        const meta = sel("[data-meta] > *");
        if (meta.length) tl.fromTo(meta, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08, ease: "ftc.out" }, 0.65);
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        q("[data-col]").forEach((col, i) => {
          gsap.fromTo(
            col,
            { y: DRIFT[i] },
            {
              y: -DRIFT[i],
              ease: "none",
              scrollTrigger: { trigger: q("[data-grid]")[0], start: "top bottom", end: "bottom top", scrub: 1.2 },
            },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  let n = 0;

  return (
    <section ref={root} className="relative overflow-hidden bg-cream pt-section pb-16 md:pb-8">
      <div className="container-x">
        <SectionHeading
          label={projects.label}
          title={projects.title}
          intro={projects.intro}
          action={<TextLink href={projects.link.href}>{projects.link.label}</TextLink>}
        />

        <div
          data-grid
          className="mt-16 grid items-start gap-12 md:mt-24 md:grid-cols-3 md:gap-6 lg:gap-10 [&:has([data-card]:hover)_[data-card]:not(:hover)]:opacity-55"
        >
          {projects.columns.map((col, c) => (
            <div key={c} data-col className={c === 1 ? "flex flex-col gap-12 md:mt-36 md:gap-16 lg:mt-48" : "flex flex-col gap-12 md:gap-16"}>
              {col.map((item) => (
                <ProjectCard key={item.image.src} item={item} index={++n} />
              ))}
              {c === projects.columns.length - 1 && <AllProjectsCard />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ item, index }: { item: Item; index: number }) {
  return (
    <Link href={item.href} data-card data-cursor="View" className="group block transition-opacity duration-500">
      <div data-media data-clip-reveal className="relative overflow-hidden rounded-[3px] bg-purple/10" style={{ aspectRatio: item.ratio }}>
        <div data-img className="absolute inset-0">
          <Photo
            src={item.image.src}
            alt={item.image.alt}
            frame={item.ratio}
            vw={{ desktop: 31, breakpoint: 768 }}
            bleed={1.1}
            className="transition-transform duration-[1.6s] ease-[var(--ease-expo)] group-hover:scale-[1.06]"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-purple-950/70 via-purple-950/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="label absolute bottom-5 left-5 flex translate-y-3 items-center gap-2 !text-[0.72rem] text-white opacity-0 transition-all duration-500 ease-[var(--ease-expo)] group-hover:translate-y-0 group-hover:opacity-100">
          View project <ArrowIcon className="size-3.5" />
        </span>
        <svg aria-hidden viewBox="0 0 40 40" className="absolute right-4 bottom-4 size-9 text-orange" fill="none" stroke="currentColor" strokeWidth="3">
          <path data-arc d="M2 38A36 36 0 0 1 38 2" />
        </svg>
      </div>
      <div data-meta className="mt-5">
        <div data-reveal className="flex items-center justify-between gap-6">
          <p className="label text-orange">{item.suburb}</p>
          <span className="font-display text-sm font-semibold text-purple/40 tabular">{String(index).padStart(2, "0")}</span>
        </div>
        <h3 data-reveal className="mt-2.5 text-h3 text-purple">{item.title}</h3>
        <p data-reveal className="mt-1.5 text-base text-ink/65">{item.scope}</p>
      </div>
    </Link>
  );
}

function AllProjectsCard() {
  return (
    <Link href={projects.link.href} data-card data-cursor="All" className="group block transition-opacity duration-500">
      <div data-media data-clip-reveal className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[3px] bg-purple p-8 text-white lg:p-10">
        <div
          data-img
          aria-hidden
          className="pointer-events-none absolute -right-1/4 -bottom-1/4 size-[120%] text-orange/25 transition-transform duration-[1.6s] ease-[var(--ease-expo)] group-hover:rotate-12"
        >
          <Logomark className="size-full" strokeWidth={4} />
        </div>
        <span className="label relative text-orange">Portfolio</span>
        <span className="relative font-display text-h2 leading-[0.95] font-bold">
          See every
          <br />
          project
        </span>
        <span className="relative flex size-14 items-center justify-center rounded-full bg-orange transition-transform duration-500 group-hover:translate-x-2">
          <ArrowIcon className="size-5" />
        </span>
      </div>
    </Link>
  );
}
