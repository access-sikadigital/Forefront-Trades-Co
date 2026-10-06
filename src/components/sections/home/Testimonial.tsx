"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { site } from "@/config/site";
import { testimonial } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Real client video testimonial. Poster first (no autoplay with sound);
 * the frame grows from an inset window as it scrolls into view.
 */
export function Testimonial() {
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-player]",
        { clipPath: "inset(10% 14% 10% 14% round 8px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 4px)",
          ease: "none",
          scrollTrigger: { trigger: "[data-player]", start: "top bottom", end: "center center", scrub: 0.6 },
        },
      );
    },
    { scope: root },
  );

  const play = () => {
    setStarted(true);
    requestAnimationFrame(() => void video.current?.play());
  };

  return (
    <section ref={root} className="relative bg-ink py-section text-white">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow light>{testimonial.label}</Eyebrow>
            </Reveal>
            <SplitLines as="h2" className="mt-6 text-h2 text-white">
              {testimonial.title}
            </SplitLines>
          </div>
          <Reveal className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9 lg:items-end lg:text-right">
            <div className="flex items-center gap-4">
              <span className="font-display text-6xl leading-none font-bold tracking-[-0.04em]">{site.rating.score}</span>
              <span>
                <span className="block text-lg tracking-[0.2em] text-orange" aria-label={`${site.rating.score} out of 5 stars`}>
                  ★★★★★
                </span>
                <span className="label text-white/60">{site.rating.source} reviews</span>
              </span>
            </div>
            <TextLink href={testimonial.link.href} light>
              {testimonial.link.label}
            </TextLink>
          </Reveal>
        </div>

        <div data-player className="relative mt-14 aspect-video overflow-hidden bg-purple-950 lg:mt-20">
          {started ? (
            <video ref={video} className="h-full w-full object-cover" src={testimonial.video.src} poster={testimonial.video.poster} controls playsInline preload="auto" />
          ) : (
            <button type="button" onClick={play} data-cursor="Play" className="group absolute inset-0 block h-full w-full text-left" aria-label={`Play video: ${testimonial.name}`}>
              <Photo src={testimonial.video.poster} alt="" frame={16 / 9} vw={{ desktop: 94 }} bleed={1.05} className="transition-transform duration-[1.6s] ease-[var(--ease-expo)] group-hover:scale-[1.03]" />
              <span className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
              <span className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-orange group-hover:bg-orange sm:size-20 lg:size-24">
                <svg viewBox="0 0 12 12" className="ml-0.5 size-4 sm:size-5 lg:size-6" fill="currentColor" aria-hidden>
                  <path d="M2.5 1v10l8.5-5z" />
                </svg>
              </span>
              <span className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10">
                <span className="block font-display text-base font-semibold text-white sm:text-h3">{testimonial.name}</span>
                <span className="label !text-[0.62rem] text-white/70 sm:!text-xs">{testimonial.project}</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
