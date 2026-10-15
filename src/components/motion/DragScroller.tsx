"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { cn, prefersReducedMotion } from "@/lib/utils";

/**
 * Horizontal row you drag with the mouse (touch keeps native swipe). No visible
 * scrollbar: on hover-capable devices a round "Drag" cursor follows the pointer,
 * and a release carries on with eased momentum so the row glides to a stop.
 */
export function DragScroller({ children, className, label = "Drag" }: { children: ReactNode; className?: string; label?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    const box = wrap.current;
    const cur = cursor.current;
    if (!el || !box || !cur) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    gsap.set(cur, { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0.4 });
    const xTo = gsap.quickTo(cur, "x", { duration: 0.45, ease: "power3" });
    const yTo = gsap.quickTo(cur, "y", { duration: 0.45, ease: "power3" });

    let down = false;
    let moved = 0;
    let startX = 0;
    let startScroll = 0;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0;
    let raf = 0;

    const follow = (e: PointerEvent) => {
      const r = box.getBoundingClientRect();
      xTo(e.clientX - r.left);
      yTo(e.clientY - r.top);
    };
    const onEnter = (e: PointerEvent) => {
      const r = box.getBoundingClientRect();
      gsap.set(cur, { x: e.clientX - r.left, y: e.clientY - r.top });
      gsap.to(cur, { autoAlpha: 1, scale: 1, duration: 0.35, ease: "power3.out" });
    };
    const onLeave = () => gsap.to(cur, { autoAlpha: 0, scale: 0.4, duration: 0.3, ease: "power3.out" });

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      cancelAnimationFrame(raf);
      down = true;
      moved = 0;
      startX = lastX = e.clientX;
      startScroll = el.scrollLeft;
      lastT = performance.now();
      velocity = 0;
      el.setPointerCapture(e.pointerId);
      gsap.to(cur, { scale: 0.8, duration: 0.25, ease: "power3.out" });
    };
    const onMove = (e: PointerEvent) => {
      follow(e);
      if (!down) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      el.scrollLeft = startScroll - dx;
      const now = performance.now();
      velocity = (e.clientX - lastX) / Math.max(1, now - lastT);
      lastX = e.clientX;
      lastT = now;
    };
    const onUp = (e: PointerEvent) => {
      if (!down) return;
      down = false;
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      gsap.to(cur, { scale: 1, duration: 0.35, ease: "power3.out" });
      if (prefersReducedMotion()) return;
      // Momentum: keep the release speed and ease it out frame by frame.
      let v = velocity * 16;
      const glide = () => {
        v *= 0.95;
        el.scrollLeft -= v;
        if (Math.abs(v) > 0.4) raf = requestAnimationFrame(glide);
      };
      raf = requestAnimationFrame(glide);
    };
    // A drag must not also follow a link inside the row.
    const onClick = (e: MouseEvent) => {
      if (moved > 6) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const noNativeDrag = (e: DragEvent) => e.preventDefault();

    box.addEventListener("pointerenter", onEnter);
    box.addEventListener("pointerleave", onLeave);
    box.addEventListener("pointermove", onMove);
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    el.addEventListener("click", onClick, true);
    el.addEventListener("dragstart", noNativeDrag);
    return () => {
      cancelAnimationFrame(raf);
      box.removeEventListener("pointerenter", onEnter);
      box.removeEventListener("pointerleave", onLeave);
      box.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      el.removeEventListener("click", onClick, true);
      el.removeEventListener("dragstart", noNativeDrag);
    };
  }, []);

  return (
    <div ref={wrap} className="relative">
      <ul
        ref={track}
        className={cn(
          "flex overflow-x-auto overscroll-x-contain select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [@media(hover:hover)_and_(pointer:fine)]:cursor-none",
          className,
        )}
      >
        {children}
      </ul>
      <div
        ref={cursor}
        aria-hidden
        className="pointer-events-none invisible absolute top-0 left-0 z-10 hidden size-24 items-center justify-center gap-1.5 rounded-full bg-orange font-display text-sm font-semibold tracking-[0.08em] text-white uppercase opacity-0 shadow-[0_18px_40px_-14px_rgb(255_80_0/0.7)] [@media(hover:hover)_and_(pointer:fine)]:flex"
      >
        <span>&larr;</span>
        {label}
        <span>&rarr;</span>
      </div>
    </div>
  );
}
