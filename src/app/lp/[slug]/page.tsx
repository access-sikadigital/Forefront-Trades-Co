import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { ArrowIcon } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingPages, type LandingSlug } from "@/content/landing-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(landingPages).map((slug) => ({ slug }));
}

const pageFor = (slug: string) => landingPages[slug as LandingSlug];

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const lp = pageFor((await props.params).slug);
  if (!lp) return {};
  // Paid traffic only (Sitemap: noindex). The service pillar is the canonical page for search.
  return { title: lp.meta.title, description: lp.meta.description, robots: { index: false, follow: true }, alternates: { canonical: lp.servicePath } };
}

/** Paid landing page: one service, one action. Form beside the headline, proof, questions, form again. */
export default async function LandingPage(props: Props) {
  const lp = pageFor((await props.params).slug);
  if (!lp) notFound();
  const { hero } = lp;
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        {hero.image && (
          <div aria-hidden className="absolute inset-0">
            <Photo src={hero.image.src} alt="" frame={16 / 9} vw={{ desktop: 100, mobile: 100 }} preload />
            <div className="absolute inset-0 bg-ink-950/70" />
            <div className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/85 to-ink-950/50" />
          </div>
        )}
        <div className="container-x relative grid gap-12 pt-24 pb-16 sm:pt-28 lg:grid-cols-12 lg:items-start lg:gap-12 lg:pt-32 lg:pb-24">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow light as="h1" className="!text-[0.8rem] !tracking-[0.16em] text-white/90 sm:!text-[0.9rem]">
                {hero.h1}
              </Eyebrow>
            </Reveal>
            <SplitLines as="p" className="mt-6 font-display text-h2 font-bold text-pretty text-white max-sm:text-[length:min(2.5rem,9.2vw)]">
              {hero.title.join(" ").replace(/ (\S+)$/, " $1")}
            </SplitLines>
            <Reveal className="mt-6">
              <p className="text-lead text-white/80">{hero.intro}</p>
            </Reveal>
            {hero.facts && (
              <Reveal as="dl" stagger={0.06} className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(7.5rem,1fr))] gap-x-4 gap-y-5 border-t border-white/15 pt-6">
                {hero.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="label !text-[0.6rem] !tracking-[0.14em] text-white/60">{f.label}</dt>
                    <dd className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">{f.value}</dd>
                  </div>
                ))}
              </Reveal>
            )}
            <Reveal className="mt-8">
              <Link href={lp.servicePath} className="label group inline-flex items-center gap-2.5 !text-[0.7rem] !tracking-[0.14em] text-white/80 hover:text-white">
                More about this service
                <ArrowIcon className="size-3.5 text-orange transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-6">
            <div className="rounded-t-[6px] bg-purple px-6 py-5 sm:px-8">
              <p className="font-display text-xl leading-tight font-semibold">{lp.form.title}</p>
              <p className="mt-1 text-sm text-white/75">{lp.form.intro}</p>
            </div>
            <EnquiryForm defaultService={lp.formService} compact className="rounded-t-none" />
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white py-section">
        <div className="container-x">
          <Reveal as="ul" stagger={0.08} className="grid gap-4 md:grid-cols-3 lg:gap-6">
            {lp.benefits.map((b, i) => (
              <li key={b.title} className="rounded-[6px] bg-cream-50 p-7 ring-1 ring-purple/8 lg:p-8">
                <span className="font-display text-sm font-semibold text-orange tabular">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 text-h3 text-purple">{b.title}</h2>
                <p className="mt-2 text-base leading-relaxed text-ink/75 sm:text-lg">{b.text}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative bg-cream-50 py-section">
        <div className="container-x">
          <SectionHeading label="Recent work" title="Real jobs, photographed after handover." />
          <Reveal as="ul" stagger={0.08} className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16 lg:gap-6">
            {lp.proof.map((pr) => (
              <li key={pr.image.src}>
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-purple/10">
                    <Photo src={pr.image.src} alt={pr.image.alt} frame={4 / 5} vw={{ desktop: 31, breakpoint: 640, mobile: 92 }} />
                  </div>
                  <figcaption className="mt-3 text-base leading-snug text-ink/70">{pr.caption}</figcaption>
                </figure>
              </li>
            ))}
          </Reveal>
          <Reveal className="mt-10 lg:mt-14">
            <figure className="rounded-[6px] bg-purple p-7 text-white sm:p-10">
              <blockquote className="font-display text-[clamp(1.35rem,1.05rem+1.1vw,2.1rem)] leading-snug font-semibold tracking-[-0.015em]">
                <span aria-hidden className="text-orange">&ldquo;</span>
                {lp.quote.text}
                <span aria-hidden className="text-orange">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-base font-semibold">{lp.quote.name}</span>
                <span className="label !text-[0.62rem] !tracking-[0.14em] text-white/60">{lp.quote.project}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <FaqSection faqs={lp.faqs} path={lp.servicePath} title="Before you book." />

      <section className="relative bg-ink-950 py-section text-white">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-5">
            <SplitLines as="h2" className="text-h2 text-white">
              {lp.form.title}
            </SplitLines>
            <Reveal className="mt-5">
              <p className="text-lead text-white/75">{lp.form.intro}</p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7">
            <EnquiryForm defaultService={lp.formService} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
