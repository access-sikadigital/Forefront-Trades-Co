import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { SuburbChecker } from "@/components/sections/areas/SuburbChecker";
import { Button, PhoneButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { outsideArea, serviceArea, suburbCount } from "@/content/areas";

export const metadata: Metadata = {
  title: "Areas We Service | Renovation Builders Melbourne",
  description:
    "Forefront Trades Co. builds across 42 suburbs in Melbourne's inner west and north — Maribyrnong, Moonee Valley, Merri-bek, Hobsons Bay, Brimbank and the City of Melbourne. Check your suburb.",
  alternates: { canonical: "/areas/" },
};

export default function AreasPage() {
  return (
    <>
      {/* Top band (dark, so the transparent header reads) */}
      <section className="bg-purple-950 pt-36 pb-20 text-white lg:pt-44 lg:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow light as="p">
                Areas we service
              </Eyebrow>
            </Reveal>
            <Reveal className="mt-6">
              <h1 className="text-h2 text-white">Do we build in your suburb?</h1>
            </Reveal>
            <Reveal className="mt-6 max-w-xl">
              <p className="text-lead text-white/75">
                Our base is in Maribyrnong. We build across {suburbCount} suburbs in Melbourne&rsquo;s inner west and north, in six councils.
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5">
            <SuburbChecker />
          </Reveal>
        </div>
      </section>

      {/* Full list by council */}
      <section className="bg-cream-50 py-section">
        <div className="container-x">
          <Reveal as="ul" stagger={0.06} className="grid gap-px overflow-hidden rounded-[6px] bg-purple/10 sm:grid-cols-2 lg:grid-cols-3">
            {serviceArea.map((c) => (
              <li key={c.council} className="bg-white p-7 lg:p-8">
                <div className="flex items-baseline justify-between gap-4 border-b border-purple/10 pb-4">
                  <h2 className="font-display text-xl font-semibold text-purple">{c.council}</h2>
                  <span className="label !text-[0.62rem] !tracking-[0.14em] text-orange tabular">{c.suburbs.length} suburbs</span>
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                  {c.suburbs.map((s) => (
                    <li key={s} className="text-base text-ink/80">
                      {s}
                    </li>
                  ))}
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
