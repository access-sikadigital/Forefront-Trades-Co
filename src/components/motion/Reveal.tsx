"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, MOTION } from "@/lib/gsap";
import { onIntroComplete } from "@/lib/intro";
import { prefersReducedMotion } from "@/lib/utils";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Animate direct children one after another instead of the wrapper. */
  stagger?: number | false;
  y?: number;
  delay?: number;
  afterIntro?: boolean;
  start?: string;
};

/** Fade-and-rise reveal on scroll. The workhorse for copy, buttons and cards. */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  stagger = false,
  y = 28,
  delay = 0,
  afterIntro = false,
  start = MOTION.start,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger === false ? el : Array.from(el.children);

      if (prefersReducedMotion()) {
        gsap.set(el, { autoAlpha: 1 });
        return;
      }

      gsap.set(el, { autoAlpha: 1 });
      const tween = gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: MOTION.reveal,
          delay,
          stagger: stagger === false ? 0 : stagger,
          ease: "ftc.out",
          paused: afterIntro,
          scrollTrigger: afterIntro ? undefined : { trigger: el, start: `clamp(${start})`, once: true },
        },
      );
      if (afterIntro) return onIntroComplete(() => tween.play());
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} data-reveal className={className}>
      {children}
    </Tag>
  );
}
