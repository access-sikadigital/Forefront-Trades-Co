"use client";

import { useRef } from "react";
import { Photo } from "@/components/ui/Photo";
import { gsap, useGSAP, MOTION } from "@/lib/gsap";
import { cn, prefersReducedMotion } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  /** Frame aspect ratio (w/h) and width in vw — used to request a sharp enough source. */
  frame: number;
  vw: { desktop: number; mobile?: number; breakpoint?: number };
  className?: string;
  imageClassName?: string;
  preload?: boolean;
};

/**
 * Image that rises into place with the same fade-up as every other element on
 * the site (one direction, one ease), with a gentle settle on the photo.
 */
export function ImageReveal({ src, alt, frame, vw, className, imageClassName, preload = false }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;
      gsap
        .timeline({ scrollTrigger: { trigger: el, start: MOTION.start, once: true } })
        .fromTo(el, { autoAlpha: 0, y: MOTION.rise }, { autoAlpha: 1, y: 0, duration: MOTION.reveal, ease: "ftc.out" })
        .fromTo(el.querySelector("[data-media]"), { scale: 1.06 }, { scale: 1, duration: MOTION.reveal + 0.4, ease: "ftc.out" }, 0);
    },
    { scope: root },
  );

  return (
    <div ref={root} className={cn("relative overflow-hidden", className)}>
      <div data-media className="absolute inset-0">
        <Photo src={src} alt={alt} frame={frame} vw={vw} bleed={1.06} preload={preload} className={imageClassName} />
      </div>
    </div>
  );
}
