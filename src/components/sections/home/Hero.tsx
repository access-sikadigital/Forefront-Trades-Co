"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero } from "@/content/home";
import { fontsReady } from "@/lib/fonts-ready";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { onIntroComplete } from "@/lib/intro";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Full-bleed film hero.
 *
 * Intro — one orchestrated timeline, played the moment the preloader hands
 * over (or immediately on repeat visits): eyebrow → headline lines rise from
 * their masks → intro copy → CTAs → meta row, while the film settles from 1.15×.
 * Fonts are awaited for at most ~700ms so the copy is never held back; if a
 * font lands later, SplitText re-splits and the timeline keeps its progress.
 *
 * Scroll — the frame insets into a rounded "window" and the copy drifts up.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const [title] = q("[data-hero-title]");
      const revealed = q("[data-reveal]");

      if (prefersReducedMotion()) {
        gsap.set(revealed, { autoAlpha: 1 });
        video.current?.pause();
        setPlaying(false);
        return;
      }

      // ── Intro ──────────────────────────────────────────────
      gsap.set(q("[data-film]"), { scale: 1.15 });

      let split: SplitText | undefined;
      let intro: gsap.core.Timeline | undefined;
      let started = false;
      let cancelled = false;
      let stopWaiting = () => {};

      const build = (lines: Element[]) => {
        gsap.set(revealed, { autoAlpha: 1 });
        return gsap
          .timeline({ paused: !started, defaults: { ease: "ftc.out" } })
          .fromTo(q("[data-hero='eyebrow']"), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0)
          // power3 rather than the house expo curve: a longer, more visible rise for the headline.
          .fromTo(lines, { yPercent: 130 }, { yPercent: 0, duration: 1.5, stagger: 0.14, ease: "power3.out" }, 0.1)
          .fromTo(q("[data-hero='intro']"), { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 1.2 }, 0.6)
          .fromTo(q("[data-hero='cta']"), { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.1 }, 0.75)
          .fromTo(q("[data-hero='proof']"), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 1 }, 0.95)
          .fromTo(q("[data-hero='meta']"), { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 1 }, 1.05);
      };

      void fontsReady().then(() => {
        if (cancelled || !title) return;
        split = SplitText.create(title, {
          type: "lines",
          linesClass: "split-line",
          mask: "lines",
          autoSplit: true,
          // Returning the timeline lets SplitText carry its progress across re-splits.
          onSplit: (self) => (intro = build(self.lines)),
        });
        stopWaiting = onIntroComplete(() => {
          started = true;
          intro?.play();
          gsap.to(q("[data-film]"), { scale: 1, duration: 2.4, ease: "ftc.out" });
        });
      });

      // ── Scroll-out ─────────────────────────────────────────
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.5 },
        })
        .to(q("[data-frame]"), { clipPath: "inset(0% 3% 8% 3% round 16px)" }, 0)
        .to(q("[data-parallax]"), { yPercent: 18 }, 0)
        .to(q("[data-content]"), { yPercent: -22, opacity: 0.2 }, 0)
        .to(q("[data-meta-wrap]"), { opacity: 0, duration: 0.2 }, 0);

      return () => {
        cancelled = true;
        stopWaiting();
        split?.revert();
      };
    },
    { scope: root },
  );

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  // Content starts just under the header at every size; from lg up the film fills the screen behind it.
  return (
    <section ref={root} className="relative overflow-hidden bg-purple-950 text-white lg:flex lg:min-h-svh lg:flex-col">
      <div data-frame className="absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}>
        <div data-parallax className="absolute inset-0">
          <video
            ref={video}
            data-film
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={hero.video.poster}
            aria-hidden
          >
            <source src="/videos/hero-720.mp4" type="video/mp4" media="(max-width: 900px)" />
            <source src="/videos/hero-1080.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Legibility scrims in brand purple rather than black */}
        <div className="absolute inset-0 bg-purple-950/25" />
        <div className="absolute inset-0 bg-linear-to-t from-purple-950 via-purple-950/45 to-purple-950/30" />
        <div className="absolute inset-0 bg-linear-to-r from-purple-950/70 via-purple-950/20 to-transparent" />
      </div>

      <div data-content className="container-x relative flex flex-col justify-start pt-28 pb-14 sm:pt-32 sm:pb-16 lg:flex-1 lg:justify-start lg:pt-40 lg:pb-20">
        <div>
          <div data-hero="eyebrow" data-reveal>
            {/* SEO: the H1 is the keyword line; the large display headline below sells. */}
            <Eyebrow light as="h1" className="gap-3.5 !text-[0.86rem] !tracking-[0.16em] text-white/90 sm:!text-[0.95rem] lg:!text-[1.05rem] [&>span:first-child]:size-2.5">
              {hero.h1}
            </Eyebrow>
          </div>

          <p data-hero-title data-reveal className="mt-6 font-display font-bold text-hero text-white [text-shadow:0_2px_40px_rgb(29_7_40/0.35)]">
            {hero.title.map((line) => (
              <span key={line} className="block lg:whitespace-nowrap">
                {line}
              </span>
            ))}
          </p>

          <p data-hero="intro" data-reveal className="mt-7 max-w-xl text-lead text-white/85 lg:mt-8">
            {hero.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 lg:mt-10">
            <div data-hero="cta" data-reveal>
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            </div>
            <div data-hero="cta" data-reveal>
              <Button href={hero.secondaryCta.href} variant="outline-light">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Proof sits right under the action it supports */}
          <p data-hero="proof" data-reveal className="label mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5 !text-[0.68rem] !tracking-[0.14em] text-white/70 sm:!text-[0.72rem]">
            {hero.proof.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="size-1 bg-orange" />}
                {item}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div data-meta-wrap className="absolute right-gutter bottom-6 hidden lg:block">
        <div data-hero="meta" data-reveal className="flex items-center gap-6">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause background video" : "Play background video"}
            className="flex size-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white"
          >
            {playing ? (
              <svg viewBox="0 0 12 12" className="size-3" fill="currentColor" aria-hidden>
                <rect x="2" y="1.5" width="2.6" height="9" />
                <rect x="7.4" y="1.5" width="2.6" height="9" />
              </svg>
            ) : (
              <svg viewBox="0 0 12 12" className="size-3" fill="currentColor" aria-hidden>
                <path d="M3 1.5v9l7.5-4.5z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
