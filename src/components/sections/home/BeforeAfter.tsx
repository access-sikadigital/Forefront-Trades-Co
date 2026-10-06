"use client";

import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { beforeAfter } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Drag-to-compare. A transparent native range input spans the image, so
 * mouse, touch, keyboard and screen readers all work without custom
 * handling. GSAP smooths the split and plays a one-off "nudge" hint.
 */
export function BeforeAfter() {
  const root = useRef<HTMLElement>(null);
  const setSplit = useRef<(v: number) => void>(() => {});

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const frame = q("[data-frame]")[0] as HTMLElement;
      const state = { v: 50 };
      const apply = () => frame.style.setProperty("--split", `${state.v}%`);
      const to = gsap.quickTo(state, "v", { duration: 0.45, ease: "power3.out", onUpdate: apply });
      setSplit.current = (v) => (prefersReducedMotion() ? ((state.v = v), apply()) : to(v));
      apply();

      if (prefersReducedMotion()) return;
      gsap.from(frame, {
        clipPath: "inset(12% 12% 12% 12% round 6px)",
        duration: 1.4,
        ease: "ftc.inOut",
        scrollTrigger: { trigger: frame, start: "top 92%", once: true },
      });
      gsap
        .timeline({ scrollTrigger: { trigger: frame, start: "top 70%", once: true }, delay: 0.3 })
        .to(state, { v: 64, duration: 0.7, ease: "power2.inOut", onUpdate: apply })
        .to(state, { v: 40, duration: 0.8, ease: "power2.inOut", onUpdate: apply })
        .to(state, { v: 50, duration: 0.6, ease: "power2.out", onUpdate: apply });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative bg-cream-50 py-section">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{beforeAfter.label}</Eyebrow>
            </Reveal>
            <SplitLines as="h2" className="mt-6 text-h2 text-purple">
              {beforeAfter.title}
            </SplitLines>
          </div>
          <Reveal className="space-y-6 lg:col-span-4 lg:col-start-9">
            <p className="text-lead text-ink/75">{beforeAfter.text}</p>
            <TextLink href={beforeAfter.link.href}>{beforeAfter.link.label}</TextLink>
          </Reveal>
        </div>

        <div
          data-frame
          data-cursor="Drag"
          className="relative mt-14 aspect-[4/3] overflow-hidden rounded-[4px] bg-purple/10 select-none has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-orange has-[input:focus-visible]:ring-offset-4 md:aspect-[16/9] lg:mt-20"
          style={{ ["--split" as string]: "50%" }}
        >
          <Photo src={beforeAfter.after.src} alt={beforeAfter.after.alt} frame={16 / 9} vw={{ desktop: 94, breakpoint: 768 }} />
          <div className="absolute inset-0" style={{ clipPath: "inset(0 calc(100% - var(--split)) 0 0)" }}>
            <Photo src={beforeAfter.before.src} alt={beforeAfter.before.alt} frame={16 / 9} vw={{ desktop: 94, breakpoint: 768 }} />
          </div>

          <span className="label pointer-events-none absolute top-5 left-5 rounded-full bg-purple-950/75 px-3.5 py-2 !text-[0.68rem] text-white backdrop-blur">
            Before
          </span>
          <span className="label pointer-events-none absolute top-5 right-5 rounded-full bg-orange px-3.5 py-2 !text-[0.68rem] text-white">
            After
          </span>

          {/* Handle */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[var(--split)] w-0">
            <span className="absolute inset-y-0 -left-px w-[2px] bg-white" />
            <span className="absolute top-1/2 left-0 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-purple shadow-[0_10px_40px_-10px_rgb(29_7_40/0.5)]">
              <svg viewBox="0 0 28 12" className="w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 1 1 6l5 5M22 1l5 5-5 5" strokeLinecap="square" />
              </svg>
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            step={0.5}
            defaultValue={50}
            aria-label="Compare before and after — slide to reveal"
            onInput={(e) => setSplit.current(Number(e.currentTarget.value))}
            className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none opacity-0 [touch-action:pan-y]"
          />
        </div>
      </div>
    </section>
  );
}
