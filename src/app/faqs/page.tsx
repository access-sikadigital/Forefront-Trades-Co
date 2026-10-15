import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ArrowIcon } from "@/components/ui/Button";
import { designAndConstruct } from "@/content/pages";
import { servicePages, type ServiceSlug } from "@/content/services";

export const metadata: Metadata = {
  title: "Renovation FAQs",
  description: "Answers to the questions Melbourne homeowners ask Forefront Trades Co. most: timelines, fixed prices, permits, design and living through a renovation.",
  alternates: { canonical: "/faqs/" },
};

const order: ServiceSlug[] = ["kitchen", "bathroom", "laundry", "home", "extensions", "heritage"];

// Every FAQ on the site, grouped by the page it belongs to; repeated questions appear once.
const seen = new Set<string>();
const groups = [
  { id: "design-and-construct", title: "Design & construct", href: designAndConstruct.path, faqs: designAndConstruct.faqs },
  ...order.map((slug) => ({ id: servicePages[slug].path.replace(/\//g, ""), title: servicePages[slug].name, href: servicePages[slug].path, faqs: servicePages[slug].faqs })),
].map((g) => ({ ...g, faqs: g.faqs.filter((f) => (seen.has(f.q) ? false : (seen.add(f.q), true))) }));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((g) => g.faqs).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

/** FAQ hub: every question on the site, grouped by service, each group linking to its page. */
export default function FaqsPage() {
  return (
    <>
      <PageHero
        hero={{
          h1: "Renovation FAQs",
          title: ["Asked at every", "first visit."],
          intro: "Timelines, fixed prices, permits and living through the build, grouped by the kind of job.",
          image: { src: "/images/projects/footscray/kitchen-island-run.jpg", alt: "White island kitchen with gas cooktop and herringbone floor, Footscray" },
        }}
      />

      <section className="relative bg-white py-section">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Topic nav */}
          <nav aria-label="FAQ topics" className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <p className="label !text-[0.66rem] !tracking-[0.14em] text-purple/60">Topics</p>
              <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                {groups.map((g) => (
                  <li key={g.id}>
                    <a href={`#${g.id}`} className="inline-flex rounded-full border border-purple/15 px-4 py-2 font-display text-sm font-semibold text-purple transition-colors hover:border-orange hover:text-orange lg:rounded-none lg:border-0 lg:px-0 lg:py-1.5 lg:text-base">
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="space-y-16 lg:col-span-8 lg:col-start-5">
            {groups.map((g) => (
              <section key={g.id} id={g.id} className="scroll-mt-32">
                <div className="flex items-end justify-between gap-6">
                  <h2 className="font-display text-[clamp(1.6rem,1.3rem+1vw,2.4rem)] leading-tight font-bold tracking-[-0.02em] text-purple">{g.title}</h2>
                  <Link href={g.href} className="label group inline-flex shrink-0 items-center gap-2 !text-[0.66rem] !tracking-[0.14em] text-purple hover:text-orange">
                    See the page
                    <ArrowIcon className="size-3.5 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </div>
                <Reveal as="div" stagger={0.05} className="mt-6 border-b border-purple/15">
                  {g.faqs.map((f) => (
                    <details key={f.q} className="group border-t border-purple/15">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-display text-[1.1rem] leading-snug font-semibold text-purple sm:text-[1.25rem] [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <span aria-hidden className="relative mt-1.5 size-4 shrink-0 text-orange">
                          <span className="absolute top-1/2 left-0 h-0.5 w-4 -translate-y-1/2 bg-current" />
                          <span className="absolute top-0 left-1/2 h-4 w-0.5 -translate-x-1/2 bg-current transition-transform duration-300 group-open:scale-y-0" />
                        </span>
                      </summary>
                      <p className="pb-6 text-base leading-relaxed text-ink/75 sm:text-lg">{f.a}</p>
                    </details>
                  ))}
                </Reveal>
              </section>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
