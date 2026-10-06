"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn, prefersReducedMotion } from "@/lib/utils";

/**
 * Seamless loop that leans into scroll velocity (and reverses with scroll
 * direction). Pauses on hover/focus. The duplicate track is aria-hidden.
 */
export function Marquee({
  children,
  className,
  speed = 40,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds per loop. */
  speed?: number;
  reverse?: boolean;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || prefersReducedMotion()) return;
      const track = el.querySelector<HTMLElement>("[data-track]");
      if (!track) return;

      const loop = gsap.fromTo(
        track,
        { xPercent: reverse ? -50 : 0 },
        { xPercent: reverse ? 0 : -50, ease: "none", duration: speed, repeat: -1 },
      );
      // Start deep in the timeline so a negative timeScale (scrolling up) never hits time 0.
      loop.totalTime(speed * 1000);
      let direction = 1;
      let paused = false;
      let speedTween: gsap.core.Timeline | gsap.core.Tween | undefined;
      const setSpeed = (tween: gsap.core.Timeline | gsap.core.Tween) => {
        speedTween?.kill();
        speedTween = tween;
      };

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          if (paused) return;
          direction = self.direction;
          const boost = gsap.utils.clamp(1, 5, Math.abs(self.getVelocity()) / 220);
          setSpeed(
            gsap
              .timeline()
              .to(loop, { timeScale: boost * direction, duration: 0.25, ease: "power1.out" })
              .to(loop, { timeScale: direction, duration: 1.4, ease: "power2.out" }),
          );
        },
      });

      const pause = () => {
        paused = true;
        setSpeed(gsap.to(loop, { timeScale: 0, duration: 0.6 }));
      };
      const resume = () => {
        paused = false;
        setSpeed(gsap.to(loop, { timeScale: direction, duration: 0.6 }));
      };
      el.addEventListener("pointerenter", pause);
      el.addEventListener("pointerleave", resume);
      el.addEventListener("focusin", pause);
      el.addEventListener("focusout", resume);

      return () => {
        st.kill();
        speedTween?.kill();
        el.removeEventListener("pointerenter", pause);
        el.removeEventListener("pointerleave", resume);
        el.removeEventListener("focusin", pause);
        el.removeEventListener("focusout", resume);
      };
    },
    { scope: root, dependencies: [reverse, speed] },
  );

  return (
    <div ref={root} className={cn("overflow-hidden", className)}>
      <div data-track className="flex w-max">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden inert>
          {children}
        </div>
      </div>
    </div>
  );
}
