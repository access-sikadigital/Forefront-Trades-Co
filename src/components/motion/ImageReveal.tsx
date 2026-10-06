"use client";

import { useRef } from "react";
import { Photo } from "@/components/ui/Photo";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn, prefersReducedMotion } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  /** Frame aspect ratio (w/h) and width in vw — used to request a sharp enough source. */
  frame: number;
  vw: { desktop: number; mobile?: number; breakpoint?: number };
  className?: string;
  imageClassName?: string;
  /**
   * "wipe"  — clip-path opens from the bottom edge.
   * "tiles" — a grid of brand squares lifts away in random order, echoing
   *           the logomark's modular cells.
   */
  variant?: "wipe" | "tiles";
  tileColor?: string;
  /** Subtle scrubbed parallax on the image inside its frame. */
  parallax?: boolean;
  preload?: boolean;
};

const COLS = 5;
const ROWS = 4;

export function ImageReveal({
  src,
  alt,
  frame,
  vw,
  className,
  imageClassName,
  variant = "wipe",
  tileColor = "var(--color-cream-50)",
  parallax = true,
  preload = false,
}: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const media = el.querySelector("[data-media]");
      const tiles = el.querySelectorAll("[data-tile]");

      if (prefersReducedMotion()) {
        gsap.set(tiles, { autoAlpha: 0 });
        return;
      }

      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "clamp(top 94%)", once: true } });
      if (variant === "tiles") {
        tl.to(tiles, {
          scaleY: 0,
          duration: 0.7,
          ease: "ftc.inOut",
          stagger: { each: 0.035, from: "random" },
        }).fromTo(media, { scale: 1.18 }, { scale: 1, duration: 1.6, ease: "ftc.out" }, 0);
      } else {
        tl.fromTo(el, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.15, ease: "ftc.inOut" }).fromTo(
          media,
          { scale: 1.2 },
          { scale: 1, duration: 1.5, ease: "ftc.out" },
          0,
        );
      }

      if (parallax) {
        gsap.fromTo(
          el.querySelector("[data-parallax]"),
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 },
          },
        );
      }
    },
    { scope: root },
  );

  return (
    <div ref={root} className={cn("relative overflow-hidden", className)}>
      <div data-parallax className="absolute inset-[-7%_0]">
        <div data-media className="relative h-full w-full">
          {/* bleed 1.15: the parallax layer overhangs 7% top and bottom */}
          <Photo src={src} alt={alt} frame={frame} vw={vw} bleed={1.15} preload={preload} className={imageClassName} />
        </div>
      </div>
      {variant === "tiles" && (
        <div aria-hidden className="pointer-events-none absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
          {Array.from({ length: COLS * ROWS }, (_, i) => (
            <span
              key={i}
              data-tile
              className="block origin-top"
              style={{ background: tileColor, transformOrigin: i % 2 ? "top" : "bottom", marginBottom: -1, marginRight: -1 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
