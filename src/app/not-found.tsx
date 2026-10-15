import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SuburbChecker } from "@/components/sections/areas/SuburbChecker";
import { ArrowIcon, Button, PhoneButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { serviceNav } from "@/config/site";
import { HeroBackdrop } from "@/components/sections/shared/HeroBackdrop";

const popular = [
  { label: "Projects", href: "/projects/" },
  { label: "Design & Construct", href: "/design-and-construct/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "FAQs", href: "/faqs/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

/** 404 for unknown URLs and notFound() (Next adds noindex automatically). */
export default function NotFound() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <HeroBackdrop src="/images/projects/footscray/alfresco.jpg" />
        <div className="container-x relative grid gap-12 pt-28 pb-16 sm:pt-32 lg:grid-cols-12 lg:items-end lg:pt-40 lg:pb-24">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow light as="h1" className="!text-[0.8rem] !tracking-[0.16em] text-white/90 sm:!text-[0.9rem]">
                Page not found
              </Eyebrow>
              <p aria-hidden className="mt-4 font-display text-[clamp(6rem,3rem+14vw,15rem)] leading-[0.85] font-bold tracking-[-0.05em] text-orange">
                404
              </p>
              <p className="mt-6 font-display text-h3 font-bold text-white">This page has moved, or it was never built.</p>
              <p className="mt-4 max-w-xl text-lead text-white/75">Try one of the pages below, or tell us what you&rsquo;re planning and we&rsquo;ll take it from there.</p>
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
                <Button href="/">Back to home</Button>
                <PhoneButton variant="glass" />
              </div>
            </Reveal>
          </div>
          <Reveal className="rounded-[6px] bg-ink-950/80 p-6 ring-1 ring-white/10 backdrop-blur-md lg:col-span-5 lg:p-8">
            <p className="label !text-[0.66rem] !tracking-[0.14em] text-white/60">Our services</p>
            <ul className="mt-4 border-t border-white/15">
              {serviceNav.map((s) => (
                <li key={s.href} className="border-b border-white/15">
                  <Link href={s.href} className="group flex items-center justify-between gap-4 py-4 font-display text-lg font-semibold hover:text-orange">
                    {s.label}
                    <ArrowIcon className="size-4 shrink-0 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-cream-50 py-section">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Looking for something else?</Eyebrow>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {popular.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="inline-flex rounded-full border border-purple/20 bg-white px-4 py-2.5 font-display text-sm font-semibold text-purple transition-colors hover:border-orange hover:text-orange">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-[6px] bg-white p-7 ring-1 ring-purple/8 lg:col-span-7 lg:p-9">
            <p className="font-display text-2xl leading-tight font-bold text-purple">Do we build in your suburb?</p>
            <div className="mt-5">
              <SuburbChecker />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
