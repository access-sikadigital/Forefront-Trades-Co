"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { onIntroComplete } from "@/lib/intro";
import { prefersReducedMotion } from "@/lib/utils";

const LenisContext = createContext<Lenis | null>(null);

/** Access the shared Lenis instance (null when reduced motion is on). */
export const useLenis = () => useContext(LenisContext);

/**
 * One Lenis instance for the app, driven by GSAP's ticker so ScrollTrigger and
 * Lenis share a single RAF loop. Users who prefer reduced motion get native scroll.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Hold scroll while the first-visit preloader plays.
    instance.stop();
    const stopWaiting = onIntroComplete(() => instance.start());

    instance.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    void document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    // Re-measure every trigger when the page height changes (late fonts, re-split
    // text, viewport resizes) so reveals never fire late or not at all.
    let lastHeight = document.body.scrollHeight;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const ro = new ResizeObserver(() => {
      const h = document.body.scrollHeight;
      if (Math.abs(h - lastHeight) < 2) return;
      lastHeight = h;
      clearTimeout(timer);
      timer = setTimeout(refresh, 200);
    });
    ro.observe(document.body);

    // eslint-disable-next-line react-hooks/set-state-in-effect -- the instance only exists client side
    setLenis(instance);

    return () => {
      stopWaiting();
      ro.disconnect();
      clearTimeout(timer);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(raf);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  // New route → jump to top without smoothing.
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname, lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
