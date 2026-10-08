"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowIcon, PhoneButton } from "@/components/ui/Button";
import { Logomark } from "@/components/ui/Logomark";
import { useLenis } from "@/components/providers/SmoothScroll";
import { mainNav, site } from "@/config/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Full-screen menu (below xl).
 *
 * Opens with a clip-path wipe; rows rise inside their masks. Sections with
 * children (Extensions, Renovations) are accordions: tap to open, tap again
 * to close, and only one is open at a time. Panels animate with a
 * grid-template-rows transition (0fr → 1fr), so height is never measured
 * in JS and they stay correct when text wraps at 320px.
 */
export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);
  const lenis = useLenis();
  const [expanded, setExpanded] = useState<string | null>(null);
  const uid = useId();

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      tl.current = gsap
        .timeline({ paused: true, defaults: { ease: "ftc.out" } })
        .set(root.current, { visibility: "visible" })
        .fromTo(root.current, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "ftc.inOut" })
        .from(q("[data-row]"), { yPercent: 110, duration: 0.9, stagger: 0.05 }, "-=0.35")
        .from(q("[data-fade]"), { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.06 }, "-=0.6")
        .from(q("[data-mark]"), { rotate: -90, scale: 0.6, autoAlpha: 0, duration: 1.2 }, "<");
    },
    { scope: root },
  );

  useEffect(() => {
    const t = tl.current;
    if (!t) return;
    if (open) {
      lenis?.stop();
      t.timeScale(1).play();
      root.current?.querySelector<HTMLElement>("a, button")?.focus({ preventScroll: true });
    } else if (t.progress() > 0) {
      t.timeScale(1.8).reverse();
      lenis?.start();
      setExpanded(null);
    }
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const rowText = "font-display text-[clamp(1.55rem,1.05rem+2.6vw,2.75rem)] leading-[1.1] font-bold tracking-[-0.02em]";

  return (
    <div
      ref={root}
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      inert={!open}
      data-lenis-prevent
      className="invisible fixed inset-0 z-40 overflow-x-hidden overflow-y-auto overscroll-contain bg-purple text-white"
    >
      {/* Decoration lives in its own clipped layer so it can never widen the menu (no sideways scroll). */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div data-mark className="absolute -right-[18vw] -bottom-[14vw] text-white/[0.04]">
          <Logomark className="size-[80vw] max-w-[900px]" />
        </div>
      </div>

      <div className="container-x relative flex min-h-full flex-col gap-10 pt-24 pb-8 sm:pt-28 md:grid md:grid-cols-12 md:gap-12">
        <nav aria-label="Menu" className="md:col-span-7">
          <ul className="border-t border-white/12">
            {mainNav.map((item, i) => {
              const isOpen = expanded === item.href;
              const panelId = `${uid}-panel-${i}`;
              return (
                <li key={item.href} className="border-b border-white/12">
                  <div className="overflow-hidden">
                    <div data-row className="flex items-center gap-3 sm:gap-4">
                      <span className="label w-7 shrink-0 text-orange tabular">0{i + 1}</span>
                      {item.children ? (
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setExpanded(isOpen ? null : item.href)}
                          className={cn("flex min-h-16 flex-1 items-center justify-between gap-4 py-3 text-left transition-colors sm:min-h-20", rowText, isOpen && "text-orange")}
                        >
                          <span>{item.label}</span>
                          <span
                            aria-hidden
                            className={cn(
                              "relative flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 sm:size-11",
                              isOpen ? "border-orange bg-orange text-white" : "border-white/25 text-white",
                            )}
                          >
                            <span className="absolute h-0.5 w-3.5 bg-current" />
                            <span className={cn("absolute h-3.5 w-0.5 bg-current transition-transform duration-500 ease-[var(--ease-expo)]", isOpen && "rotate-90 scale-y-0")} />
                          </span>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={cn("group flex min-h-16 flex-1 items-center justify-between gap-4 py-3 transition-colors hover:text-orange sm:min-h-20", rowText)}
                        >
                          <span>{item.label}</span>
                          <ArrowIcon className="mr-3 size-5 shrink-0 text-white/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-orange" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {item.children && (
                    <div
                      id={panelId}
                      role="region"
                      aria-label={`${item.label} pages`}
                      inert={!isOpen}
                      className="grid transition-[grid-template-rows] duration-500 ease-[var(--ease-expo)]"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <ul className={cn("pb-5 pl-10 transition-opacity duration-500 sm:pl-11", isOpen ? "opacity-100" : "opacity-0")}>
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="group flex items-center gap-3 py-2.5 text-lg text-white/80 transition-colors hover:text-white"
                              >
                                <span aria-hidden className="size-1.5 shrink-0 bg-orange transition-transform duration-300 group-hover:scale-150" />
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col gap-8 md:col-span-5 md:mt-0 md:justify-end">
          <div data-fade className="grid gap-3">
            <Link
              href="/book-a-consultation/"
              onClick={onClose}
              className="label flex h-14 items-center justify-center rounded-[3px] bg-orange px-6 !text-[0.8rem] !tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-purple"
            >
              Book a free home visit
            </Link>
            <PhoneButton variant="light" magnetic={false} className="w-full justify-center" />
          </div>
          <div data-fade className="space-y-1.5 text-base text-white/65">
            <p>{site.address.full}</p>
            <p>Registered Builder {site.registeredBuilder}</p>
            <div className="flex gap-5 pt-2">
              <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="label text-white/80 hover:text-orange">
                Instagram
              </a>
              <a href={site.socials.facebook} target="_blank" rel="noreferrer" className="label text-white/80 hover:text-orange">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
