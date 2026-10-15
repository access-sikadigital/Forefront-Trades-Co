"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneButton } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Logomark } from "@/components/ui/Logomark";
import { accreditations, footerNav, legalNav, site } from "@/config/site";
import { useLenis } from "@/components/providers/SmoothScroll";

/** Site footer (static — no scroll-linked motion). */
export function Footer() {
  const lenis = useLenis();

  const toTop = () => (lenis ? lenis.scrollTo(0, { duration: 1.8 }) : window.scrollTo({ top: 0, behavior: "smooth" }));

  return (
    <footer className="relative overflow-hidden bg-purple-950 text-white">
      <div data-inner className="relative">
        <div data-arc className="pointer-events-none absolute -top-[18vw] -right-[18vw] origin-center text-orange/[0.07]">
          <Logomark className="size-[60vw] max-w-[820px]" />
        </div>

        <div className="container-x relative grid gap-14 pt-24 pb-10 lg:grid-cols-12 lg:pt-32">
          <div className="lg:col-span-5">
            <Logo className="mb-8 w-52 sm:w-60" wordColor="#fff" />
            <p className="max-w-md font-display text-h3 font-semibold text-white">
              Renovation and extension builders for Melbourne&rsquo;s inner west and north, with the price and the finish date in writing.
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

        {/* Accreditations: each mark on its own white tile, as the logos are designed to sit */}
        <div className="container-x relative mb-14">
          <div className="flex flex-col gap-5 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:gap-10">
            <div className="shrink-0">
              <p className="label !text-[0.66rem] !tracking-[0.16em] text-orange">Registered &amp; accredited</p>
              <p className="mt-2 font-display text-lg font-semibold text-white">Registered Builder {site.registeredBuilder}</p>
            </div>
            <ul className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              {accreditations.map((a) => (
                <li key={a.name} className="flex h-24 items-center justify-center rounded-[6px] bg-white px-5 sm:h-28">
                  <Image src={a.src} alt={a.name} width={a.width} height={a.height} sizes="220px" className={`${a.h} w-auto max-w-full object-contain`} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container-x relative mt-10 flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1.5 lg:flex-row lg:items-center lg:gap-3">
            <p>
              © {new Date().getFullYear()} {site.name} · Registered Builder {site.registeredBuilder}
            </p>
            <span aria-hidden className="hidden lg:inline">
              ·
            </span>
            <p>
              Designed & developed by{" "}
              <a href="https://sikadigital.com" target="_blank" rel="noopener" className="text-white/80 underline-offset-4 transition-colors hover:text-orange hover:underline">
                Sika Digital
              </a>
            </p>
          </div>
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
