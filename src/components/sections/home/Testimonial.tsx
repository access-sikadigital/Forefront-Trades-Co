"use client";

import { useCallback, useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { GoogleRatingBadge, GoogleReviews } from "@/components/sections/home/GoogleReviews";
import { googleReviews } from "@/content/reviews";
import { VideoLightbox } from "@/components/sections/home/VideoLightbox";
import { site } from "@/config/site";
import { testimonial } from "@/content/home";
import { gsap, useGSAP, MOTION } from "@/lib/gsap";
import { cn, prefersReducedMotion } from "@/lib/utils";

type Video = (typeof testimonial.videos)[number];

/**
 * Client stories — every review is a real video.
 *
 * Desktop: four tall "reel" cards start gathered as a fanned deck in the middle
 * and deal out into a row as you scroll. Hovering a card plays a silent 6-second
 * preview; clicking opens the full video with sound in a lightbox (arrows step
 * through the others). Mobile: a swipeable row of the same cards.
 */
export function Testimonial() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const count = testimonial.videos.length;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback((dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + count) % count)), [count]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      // Site-wide motion: one fade-up, same ease and timing everywhere.
      gsap.fromTo(
        q("[data-reel]"),
        { autoAlpha: 0, y: MOTION.rise },
        { autoAlpha: 1, y: 0, duration: MOTION.reveal, ease: "ftc.out", stagger: 0.1, scrollTrigger: { trigger: q("[data-deck]")[0], start: MOTION.start, once: true } },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-purple-950 py-section text-white">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow light>{testimonial.label}</Eyebrow>
            </Reveal>
            <SplitLines as="h2" className="mt-6 text-h2 text-white">
              {testimonial.title}
            </SplitLines>
            <Reveal className="mt-5">
              <p className="text-lead text-white/70">{testimonial.intro}</p>
            </Reveal>
          </div>
          <Reveal className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9 lg:items-end lg:text-right">
            <GoogleRatingBadge score={site.rating.score} href={googleReviews.readAllUrl} />
            <TextLink href={testimonial.link.href} light>
              {testimonial.link.label}
            </TextLink>
          </Reveal>
        </div>
      </div>

      {/* The deck — full-bleed swipe row on mobile, 4-up grid from lg */}
      <ul
        data-deck
        className="relative mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--spacing-gutter)] pb-2 [scrollbar-width:none] lg:mx-auto lg:mt-20 lg:grid lg:max-w-[1680px] lg:grid-cols-4 lg:gap-6 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {testimonial.videos.map((v, i) => (
          <ReelCard key={v.src} v={v} index={i} onOpen={() => setActive(i)} />
        ))}
      </ul>

      {/* Google reviews carousel */}
      <div className="container-x mt-20 border-t border-white/10 pt-14 lg:mt-28 lg:pt-20">
        <GoogleReviews />
      </div>

      <VideoLightbox videos={testimonial.videos} index={active} onClose={close} onStep={step} />
    </section>
  );
}

function ReelCard({ v, index, onOpen }: { v: Video; index: number; onOpen: () => void }) {
  const preview = useRef<HTMLVideoElement>(null);
  const [previewing, setPreviewing] = useState(false);

  const start = () => {
    if (prefersReducedMotion() || !window.matchMedia("(hover: hover)").matches) return;
    const el = preview.current;
    if (!el) return;
    setPreviewing(true);
    el.currentTime = 0;
    void el.play().catch(() => {});
  };
  const stop = () => {
    setPreviewing(false);
    preview.current?.pause();
  };

  return (
    <li data-reel className="relative w-[78vw] max-w-[340px] shrink-0 snap-center sm:w-[46vw] lg:w-auto lg:max-w-none">
      <button
        type="button"
        onClick={onOpen}
        onPointerEnter={start}
        onPointerLeave={stop}
        onFocus={start}
        onBlur={stop}
        data-cursor="Play"
        aria-label={`Play video: ${v.name}, ${v.project}`}
        className="group relative block aspect-[9/16] w-full lg:aspect-[4/5] overflow-hidden rounded-[6px] bg-purple-950 text-left shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)] transition-transform duration-700 ease-[var(--ease-expo)] lg:hover:-translate-y-2"
      >
        <Photo src={v.poster} alt="" frame={9 / 16} vw={{ desktop: 24, mobile: 78 }} className="transition-transform duration-[1.6s] ease-[var(--ease-expo)] group-hover:scale-[1.04]" />
        {/* Silent hover preview (only fetched when hovered) */}
        <video
          ref={preview}
          src={v.preview}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          className={cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-500", previewing ? "opacity-100" : "opacity-0")}
        />
        <span className="absolute inset-0 bg-linear-to-t from-purple-950 via-purple-950/30 to-transparent" />

        {/* Top row: number + duration */}
        <span className="absolute inset-x-4 top-4 flex items-center justify-between sm:inset-x-5 sm:top-5">
          <span className="font-display text-sm font-semibold text-white/70 tabular">{String(index + 1).padStart(2, "0")}</span>
          <span className="label flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1.5 !text-[0.62rem] !tracking-[0.12em] text-white backdrop-blur tabular">
            <span aria-hidden className="size-1.5 rounded-full bg-orange" />
            {v.duration}
          </span>
        </span>

        {/* Play button */}
        <span className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-orange group-hover:bg-orange">
          <svg viewBox="0 0 12 12" className="ml-0.5 size-5" fill="currentColor" aria-hidden>
            <path d="M2.5 1v10l8.5-5z" />
          </svg>
        </span>

        {/* Quote + who */}
        <span className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
          <span className="block font-display text-[1.15rem] leading-snug font-medium text-white xl:text-[1.25rem]">&ldquo;{v.quote}&rdquo;</span>
          <span className="mt-4 block border-t border-white/15 pt-3 font-display text-base font-semibold text-white">{v.name}</span>
          <span className="label mt-1 block !text-[0.6rem] !tracking-[0.12em] text-white/60">{v.project}</span>
        </span>
      </button>
    </li>
  );
}
