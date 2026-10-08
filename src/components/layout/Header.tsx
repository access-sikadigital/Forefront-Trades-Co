"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button, PhoneButton } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { mainNav, site } from "@/config/site";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { onIntroComplete } from "@/lib/intro";
import { cn, prefersReducedMotion } from "@/lib/utils";

/**
 * Transparent over the hero, solid cream once you scroll. Slides away while
 * scrolling down and returns on the way up.
 */
export function Header() {
  const ref = useRef<HTMLElement>(null);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu on navigation.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reacting to route change
    setOpen(false);
  }, [pathname]);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      // Intro: header drops in with the hero.
      if (!prefersReducedMotion()) {
        gsap.set(el, { yPercent: -100 });
        const stop = onIntroComplete(() => gsap.to(el, { yPercent: 0, duration: 1, delay: 0.5, ease: "ftc.out" }));

        let hidden = false;
        const st = ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            const y = self.scroll();
            setSolid(y > 60);
            const shouldHide = self.direction === 1 && y > 400;
            if (shouldHide !== hidden) {
              hidden = shouldHide;
              gsap.to(el, { yPercent: hidden ? -100 : 0, duration: 0.6, ease: hidden ? "power3.in" : "ftc.out", overwrite: true });
            }
          },
        });
        return () => {
          stop();
          st.kill();
        };
      }

      const onScroll = () => setSolid(window.scrollY > 60);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    },
    { scope: ref },
  );

  // The close button lives in the header — bring it back if it had slid away on scroll.
  useEffect(() => {
    if (open && ref.current) gsap.to(ref.current, { yPercent: 0, duration: 0.5, ease: "ftc.out", overwrite: true });
  }, [open]);

  const light = !solid && !open;

  return (
    <>
      <header
        ref={ref}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500",
          open
            ? "bg-purple text-white shadow-[0_1px_0_rgb(255_255_255/0.12)]"
            : solid
              ? "bg-cream-50/90 text-purple shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
              : "text-white",
        )}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6 lg:h-24">
          <Link href="/" aria-label={`${site.name} — home`} className="relative z-[60] shrink-0">
            <Logo className="w-[150px] lg:w-[178px]" wordColor={light || open ? "#fff" : "var(--color-purple)"} />
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="label relative inline-flex h-11 items-center px-3.5 !text-[0.74rem] !tracking-[0.14em] opacity-90 transition-opacity hover:opacity-100"
                  >
                    {item.label}
                    <span className="absolute inset-x-3.5 bottom-2 h-px origin-right scale-x-0 bg-orange transition-transform duration-500 ease-[var(--ease-expo)] group-hover:origin-left group-hover:scale-x-100" />
                  </Link>
                  {item.children && (
                    <div className="invisible absolute top-full left-0 pt-3 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className="min-w-64 translate-y-2 rounded-[3px] bg-white p-2 text-purple shadow-[0_20px_60px_-20px_rgb(29_7_40/0.35)] transition-transform duration-300 group-hover:translate-y-0">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="flex items-center justify-between rounded-[2px] px-4 py-3 font-display text-[0.95rem] font-medium transition-colors hover:bg-cream"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-[60] flex items-center gap-3 sm:gap-5">
            <PhoneButton variant={light ? "glass" : "dark"} size="sm" magnetic={false} className="hidden md:inline-flex" />
            <Button href="/book-a-consultation/" className="hidden h-12 px-5 sm:inline-flex sm:h-12 sm:px-5" arrow={false} magnetic={false}>
              Book a free consultation
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="group relative flex size-12 items-center justify-center xl:hidden"
            >
              <span className="relative block h-3 w-7">
                <span className={cn("absolute left-0 h-[2px] w-full bg-current transition-transform duration-500 ease-[var(--ease-expo)]", open ? "top-[5px] rotate-45" : "top-0")} />
                <span className={cn("absolute left-0 h-[2px] bg-current transition-all duration-500 ease-[var(--ease-expo)]", open ? "top-[5px] w-full -rotate-45" : "top-[10px] w-4/6")} />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
