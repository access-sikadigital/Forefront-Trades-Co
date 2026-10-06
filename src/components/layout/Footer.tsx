"use client";

import Link from "next/link";
import { useRef } from "react";
import { PhoneButton } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Logomark } from "@/components/ui/Logomark";
import { footerNav, legalNav, site } from "@/config/site";
import { gsap, useGSAP } from "@/lib/gsap";
import { useLenis } from "@/components/providers/SmoothScroll";
import { prefersReducedMotion } from "@/lib/utils";

/** Footer that unveils from beneath the page (inner layer counter-scrolls). */
export function Footer() {
  const root = useRef<HTMLElement>(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      // end: "max" = the very bottom of the page, so the unveil always finishes flush
      // (no gap under the footer). Desktop only — on phones the footer simply sits in place.
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          q("[data-inner]"),
          { yPercent: -30 },
          { yPercent: 0, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "max", scrub: true, invalidateOnRefresh: true } },
        );
      });
      gsap.fromTo(
        q("[data-arc]"),
        { rotate: -90 },
        { rotate: 0, ease: "none", scrollTrigger: { trigger: root.current, start: "top bottom", end: "max", scrub: 0.6 } },
      );
      return () => mm.revert();
    },
    { scope: root },
  );

  const toTop = () => (lenis ? lenis.scrollTo(0, { duration: 1.8 }) : window.scrollTo({ top: 0, behavior: "smooth" }));

  return (
    <footer ref={root} className="relative overflow-hidden bg-purple-950 text-white">
      <div data-inner className="relative">
        <div data-arc className="pointer-events-none absolute -top-[18vw] -right-[18vw] origin-center text-orange/[0.07]">
          <Logomark className="size-[60vw] max-w-[820px]" strokeWidth={5} />
        </div>

        <div className="container-x relative grid gap-14 pt-24 pb-10 lg:grid-cols-12 lg:pt-32">
          <div className="lg:col-span-5">
            <p className="max-w-md font-display text-h3 font-semibold text-white">
              Premium design &amp; construct renovations and extensions across Melbourne&rsquo;s inner west and north.
            </p>
            <PhoneButton variant="light" className="mt-10" />
            <div className="mt-8 space-y-2 text-lg text-white/75">
              <a href={`mailto:${site.email}`} className="block transition-colors hover:text-orange">
                {site.email}
              </a>
              <a href={site.address.mapUrl} target="_blank" rel="noreferrer" className="block transition-colors hover:text-orange">
                {site.address.full}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerNav.map((col) => (
              <div key={col.title}>
                <p className="label mb-5 text-orange">{col.title}</p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[1.05rem] text-white/75 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="container-x relative">
          <Logo className="w-full opacity-95" wordColor="#fff" />
        </div>

        <div className="container-x relative mt-10 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · Registered Builder {site.registeredBuilder}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {legalNav.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
              Instagram
            </a>
            <a href={site.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-white">
              Facebook
            </a>
            <button type="button" onClick={toTop} className="label inline-flex items-center gap-2 text-white/80 hover:text-orange">
              Back to top
              <span aria-hidden>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
