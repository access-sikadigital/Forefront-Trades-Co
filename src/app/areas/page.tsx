import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { SuburbChecker } from "@/components/sections/areas/SuburbChecker";
import { HeroBackdrop } from "@/components/sections/shared/HeroBackdrop";
import { ArrowIcon, Button, PhoneButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { outsideArea, serviceArea, suburbCount, suburbSlug } from "@/content/areas";
import { pagesForSuburb } from "@/content/suburbs";

export const metadata: Metadata = {
  title: "Areas We Service | Renovation Builders Melbourne",
  description:
    "Forefront Trades Co. builds across 42 suburbs in Melbourne's inner west and north: Maribyrnong, Moonee Valley, Merri-bek, Hobsons Bay, Brimbank and the City of Melbourne.",
  alternates: { canonical: "/areas/" },
};

const short: Record<string, string> = {
  "kitchen-renovations": "Kitchen",
  "bathroom-renovations": "Bathroom",
  "laundry-renovations": "Laundry",
  "home-extensions": "Extensions",
};

export default function AreasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        {/* Generated atmosphere image of a period streetscape (not a Forefront project). */}
        <HeroBackdrop src="/images/generated/heritage-streetscape.jpg" />
        <div className="container-x relative grid gap-12 pt-28 pb-16 sm:pt-32 lg:grid-cols-12 lg:items-end lg:pt-36 lg:pb-24">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow light as="p">
                Areas we service
              </Eyebrow>
            </Reveal>
            <SplitLines as="h1" className="mt-6 font-display text-h2 font-bold text-pretty text-white max-sm:text-[length:min(2.5rem,9.2vw)]">
              {"Do we build in your suburb?"}
            </SplitLines>
            <Reveal className="mt-6">
              <p className="text-lead text-white/80">
                Our base is in Maribyrnong. We build across {suburbCount} suburbs in Melbourne&rsquo;s inner west and north, in six councils.
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5 lg:col-start-8">
            <SuburbChecker />
          </Reveal>
        </div>
      </section>

      {/* Every suburb by council: each name links to its page, with its service pages underneath */}
      <section className="bg-cream-50 py-section">
        <div className="container-x">
          <SectionHeading label="All 42 suburbs" title="Six councils, one team." intro="Pick your suburb to see what homes there are like and what we build nearby." />

          <Reveal as="ul" stagger={0.06} className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:items-start">
            {serviceArea.map((c) => (
              <li key={c.council} className="overflow-hidden rounded-[6px] bg-white ring-1 ring-purple/8">
                <div className="flex items-center justify-between gap-4 bg-purple px-6 py-5 text-white sm:px-8">
                  <div>
                    <p className="label !text-[0.62rem] !tracking-[0.14em] text-white/60">Council</p>
                    <h2 className="mt-1 font-display text-2xl leading-tight font-bold sm:text-[1.75rem]">{c.council}</h2>
                  </div>
                  <span className="rounded-full bg-orange px-4 py-2 font-display text-sm font-semibold whitespace-nowrap tabular">{c.suburbs.length} suburbs</span>
                </div>
                <ul className="grid divide-y divide-purple/8 sm:grid-cols-2 sm:divide-y-0">
                  {c.suburbs.map((s) => {
                    const slug = suburbSlug(s);
                    const services = pagesForSuburb(slug).filter((p) => p.service !== "home-renovations");
                    return (
                      <li key={s} className="px-6 py-4 sm:border-b sm:border-purple/8 sm:px-8 sm:odd:border-r">
                        <Link href={`/home-renovations/${slug}/`} className="group flex items-center justify-between gap-3 font-display text-lg leading-snug font-semibold text-purple hover:text-orange">
                          <span className="flex items-center gap-2.5">
                            <Icon name="location_on" className="size-4 shrink-0 text-orange" />
                            {s}
                          </span>
                          <ArrowIcon className="size-3.5 shrink-0 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                        </Link>
                        {services.length > 0 && (
                          <p className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 pl-[1.625rem] text-[0.9375rem] text-ink/60">
                            {services.map((p) => (
                              <Link key={p.path} href={p.path} className="underline-offset-4 hover:text-orange hover:underline">
                                {short[p.service]}
                              </Link>
                            ))}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </Reveal>

          <Reveal className="-mx-gutter mt-14 flex flex-col gap-6 bg-purple px-gutter py-8 text-white sm:mx-0 sm:rounded-[6px] sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-2xl">
              <h2 className="font-display text-h3 text-white">{outsideArea.title}</h2>
              <p className="mt-3 text-lg text-white/75">{outsideArea.text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PhoneButton variant="light" />
              <Button href="/book-a-consultation/">Book a free consultation</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
