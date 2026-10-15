import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { GoogleRatingBadge } from "@/components/sections/home/GoogleReviews";
import { HeroBackdrop } from "@/components/sections/shared/HeroBackdrop";
import { ArrowIcon, PhoneButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { site } from "@/config/site";
import { googleReviews } from "@/content/reviews";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description: "Book a free home visit with Forefront Trades Co. Tell us about your renovation or extension and we'll come and see the house. Melbourne's inner west and north.",
  alternates: { canonical: "/book-a-consultation/" },
};

// TODO(client): confirm what happens after an enquiry (who calls, how fast).
const steps = [
  { title: "Send the form", text: "Two minutes. Tell us what you're planning." },
  { title: "We call you", text: "We book a time that suits you, at the house." },
  { title: "Free home visit", text: "We walk the house with you. No cost, no obligation." },
];

// From the site's own copy: what the first visit covers.
const atVisit = [
  "We walk the house with you and look at what you want to change",
  "An honest talk about budget and timing, including when the numbers don't stack up",
  "Whether the job needs engineering or permits",
  "How long you'd be without a kitchen or bathroom, and whether staging helps",
];

const quick = [
  { q: "Is the visit really free?", a: "Yes. The first home visit costs nothing and there's no obligation to go ahead.", href: "/faqs/", link: "More questions" },
  { q: "Do I need plans first?", a: "No. Plenty of people start with an idea. We handle design, drafting and permits.", href: "/design-and-construct/", link: "Design & construct" },
  { q: "Do you build in my suburb?", a: "We build across 42 suburbs in Melbourne's inner west and north.", href: "/areas/", link: "Check your suburb" },
];

/** Enquiry page: every "Book a free consultation" button on the site lands here. */
export default function BookPage() {
  return (
    <>
      {/* Hero: headline + the three steps */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <HeroBackdrop src="/images/projects/footscray/kitchen.jpg" />
        <div className="container-x relative pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-20">
          <div className="lg:max-w-[60%]">
            <Reveal>
              <Eyebrow light as="h1" className="!text-[0.8rem] !tracking-[0.16em] text-white/90 sm:!text-[0.9rem]">
                Book a free consultation
              </Eyebrow>
            </Reveal>
            <SplitLines as="p" className="mt-6 font-display text-h2 font-bold text-pretty text-white max-sm:text-[length:min(2.5rem,9.2vw)]">
              {"Your free home visit starts here."}
            </SplitLines>
            <Reveal className="mt-6">
              <p className="max-w-2xl text-lead text-white/80">Tell us about the job and we&rsquo;ll come and see the house. If what you want won&rsquo;t fit the budget, we&rsquo;ll say so on the day.</p>
            </Reveal>
          </div>

          <Reveal as="ol" stagger={0.08} className="mt-12 grid gap-3 sm:grid-cols-3 lg:mt-16 lg:max-w-[75%] lg:gap-4">
            {steps.map((s, i) => (
              <li key={s.title} className="flex items-start gap-4 rounded-[6px] bg-white/[0.07] p-5 ring-1 ring-white/12 backdrop-blur-md">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange font-display text-base font-bold text-white tabular">{i + 1}</span>
                <span>
                  <span className="block font-sans text-lg font-semibold">{s.title}</span>
                  <span className="mt-1 block font-sans text-[0.9375rem] leading-snug text-white/70">{s.text}</span>
                </span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Form + side panel */}
      <section className="relative bg-cream py-section">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <Reveal className="overflow-hidden rounded-[8px] bg-white shadow-[0_30px_70px_-40px_rgb(61_17_82/0.45)] ring-1 ring-purple/8 lg:col-span-7">
            <div className="border-b border-ink/8 px-6 pt-7 pb-6 sm:px-8 sm:pt-9">
              <p className="font-display text-[clamp(1.6rem,1.3rem+1vw,2.25rem)] leading-tight font-bold text-purple">Tell us about your project</p>
              <p className="mt-2 font-sans text-[1.0625rem] text-ink/65">The more you tell us, the more useful the first visit is.</p>
            </div>
            <EnquiryForm className="rounded-none ring-0" />
          </Reveal>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:col-span-5">
            <Reveal className="overflow-hidden rounded-[8px] bg-purple text-white">
              <div className="relative aspect-[16/10]">
                <Photo src="/images/team/founders.jpg" alt="The founders of Forefront Trades Co." frame={16 / 10} vw={{ desktop: 38, mobile: 92 }} className="object-[50%_35%]" />
                <div className="absolute inset-0 bg-linear-to-t from-purple via-purple/10 to-transparent" />
              </div>
              <div className="px-6 pb-7 sm:px-8">
                <p className="font-display text-2xl leading-tight font-bold">At your free home visit</p>
                <ul className="mt-5 space-y-3.5">
                  {atVisit.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-[1.0625rem] leading-snug text-white/90">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange">
                        <Icon name="check" className="size-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="rounded-[8px] bg-white p-6 ring-1 ring-purple/8 sm:p-8">
              <GoogleRatingBadge score={site.rating.score} href={googleReviews.readAllUrl} />
              <blockquote className="mt-5 font-sans text-[1.0625rem] leading-relaxed text-ink">
                &ldquo;The team was incredibly knowledgeable, taking time to explain the design options and material available.&rdquo;
              </blockquote>
              <p className="mt-3 font-sans text-[0.9375rem] font-semibold text-ink/70">Pat Iliopoulos · Google review</p>
            </Reveal>

            <Reveal className="flex flex-wrap items-center justify-between gap-4 rounded-[8px] bg-ink-950 p-6 text-white sm:p-7">
              <div>
                <p className="font-sans text-lg font-semibold">Rather talk it through?</p>
                <p className="mt-0.5 font-sans text-[0.9375rem] text-white/65">Registered Builder {site.registeredBuilder}</p>
              </div>
              <PhoneButton variant="glass" />
            </Reveal>
          </aside>
        </div>

        {/* Quick answers, each linking on */}
        <div className="container-x mt-16 lg:mt-20">
          <Reveal as="ul" stagger={0.08} className="grid gap-4 md:grid-cols-3 lg:gap-6">
            {quick.map((item) => (
              <li key={item.q} className="flex flex-col rounded-[8px] bg-white p-6 ring-1 ring-purple/8 sm:p-7">
                <p className="font-display text-xl leading-tight font-bold text-purple">{item.q}</p>
                <p className="mt-2 flex-1 font-sans text-[1.0625rem] leading-relaxed text-ink/75">{item.a}</p>
                <Link href={item.href} className="group mt-5 inline-flex items-center gap-2 self-start font-sans text-base font-semibold text-purple hover:text-orange">
                  {item.link}
                  <ArrowIcon className="size-3.5 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
