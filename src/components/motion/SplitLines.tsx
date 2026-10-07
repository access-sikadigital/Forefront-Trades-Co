"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION } from "@/lib/gsap";
import { fontsReady } from "@/lib/fonts-ready";
import { onIntroComplete } from "@/lib/intro";
import { cn, prefersReducedMotion } from "@/lib/utils";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Wait for the preloader before playing (above-the-fold copy). */
  afterIntro?: boolean;
  start?: string;
};

/**
 * Line-by-line masked headline reveal (SplitText `mask: "lines"`).
 *
 * With `autoSplit`, SplitText re-splits whenever fonts finish loading or the
 * element resizes. Returning the tween from `onSplit` lets SplitText carry the
 * old tween's progress onto the new lines, so a late font never makes the
 * animation jump — it just continues.
 */
export function SplitLines({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  stagger = MOTION.stagger,
  afterIntro = false,
  start = MOTION.start,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        gsap.set(el, { autoAlpha: 1 });
        return;
      }

      let split: SplitText | undefined;
      let tween: gsap.core.Tween | undefined;
      let started = false;
      let cancelled = false;
      let cleanupTrigger = () => {};

      const play = () => {
        started = true;
        tween?.play();
      };

      void fontsReady().then(() => {
        if (cancelled) return;
        split = SplitText.create(el, {
          type: "lines",
          linesClass: "split-line",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            gsap.set(el, { autoAlpha: 1 });
            tween = gsap.from(self.lines, {
              yPercent: 130,
              duration: MOTION.reveal,
              stagger,
              delay,
              ease: "ftc.out",
              paused: !started,
            });
            return tween;
          },
        });

        if (afterIntro) {
          cleanupTrigger = onIntroComplete(play);
        } else {
          const st = ScrollTrigger.create({ trigger: el, start: `clamp(${start})`, once: true, onEnter: play });
          cleanupTrigger = () => st.kill();
        }
      });

      return () => {
        cancelled = true;
        cleanupTrigger();
        split?.revert();
      };
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} data-reveal className={cn(className)}>
      {children}
    </Tag>
  );
}
