import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { ArrowIcon, PhoneButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your enquiry has been received.",
  robots: { index: false, follow: false },
};

// TODO(client): confirm who calls back and how quickly (speed to lead).
// TODO: fire the GA4 / Google Ads / Meta "Lead" conversion on this page once tracking is set up.
const next = [
  { title: "We read your enquiry", text: "Your details and the job you described come straight to our team." },
  { title: "We call to book a visit", text: "We'll arrange a time that suits you to come and see the house." },
  { title: "Free home visit", text: "We walk the house with you and talk budget and timing honestly." },
];

const reading = [
  { label: "See our projects", href: "/projects/", text: "Real jobs, photographed after handover." },
  { label: "Read client reviews", href: "/reviews/", text: "In our clients' own words." },
  { label: "How design & construct works", href: "/design-and-construct/", text: "One contract from design to handover." },
];

/** Shown after a successful enquiry. noindex; a clean URL for conversion tracking. */
export default function ThankYouPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div aria-hidden className="absolute inset-0">
          <Photo src="/images/projects/footscray/living-wide.jpg" alt="" frame={16 / 9} vw={{ desktop: 100, mobile: 100 }} quality={75} />
          <div className="absolute inset-0 bg-ink-950/80" />
          <div className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/85 to-ink-950/60" />
        </div>
        <div className="container-x relative grid gap-12 pt-24 pb-16 sm:pt-28 lg:grid-cols-12 lg:gap-12 lg:pt-32 lg:pb-24">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="flex size-14 items-center justify-center rounded-full bg-orange text-2xl text-white" aria-hidden>
                ✓
              </span>
              <Eyebrow light as="h1" className="mt-8 !text-[0.8rem] !tracking-[0.16em] text-white/90 sm:!text-[0.9rem]">
                Enquiry received
              </Eyebrow>
            </Reveal>
            <SplitLines as="p" className="mt-6 font-display text-h2 font-bold text-pretty text-white max-sm:text-[length:min(2.5rem,9.2vw)]">
              {"Thanks. We'll be in touch soon."}
            </SplitLines>
            <Reveal className="mt-6">
              <p className="text-lead text-white/80">Want to talk sooner? Call us now.</p>
              <PhoneButton variant="glass" className="mt-8" />
            </Reveal>
          </div>
          <Reveal as="ol" stagger={0.08} className="space-y-5 self-end border-t border-white/15 pt-8 lg:col-span-5 lg:col-start-8 lg:border-t-0 lg:pt-0">
            <li className="label !text-[0.66rem] !tracking-[0.14em] text-white/60">What happens next</li>
            {next.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-3">
                <span className="flex size-10 items-center justify-center rounded-full border border-white/20 font-display text-sm font-semibold text-orange tabular">{String(i + 1).padStart(2, "0")}</span>
                <div className="pt-1.5">
                  <p className="font-display text-lg font-semibold">{s.title}</p>
                  <p className="mt-1 text-base leading-relaxed text-white/70">{s.text}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white py-section">
        <div className="container-x">
          <Reveal>
            <Eyebrow>While you wait</Eyebrow>
          </Reveal>
          <Reveal as="ul" stagger={0.08} className="mt-8 grid gap-4 md:grid-cols-3 lg:gap-6">
            {reading.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="group flex h-full flex-col justify-between gap-6 rounded-[6px] bg-cream-50 p-7 ring-1 ring-purple/8 transition-colors hover:bg-cream">
                  <span>
                    <span className="block font-display text-2xl leading-tight font-bold text-purple">{r.label}</span>
                    <span className="mt-2 block text-base text-ink/70">{r.text}</span>
                  </span>
                  <ArrowIcon className="size-5 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
