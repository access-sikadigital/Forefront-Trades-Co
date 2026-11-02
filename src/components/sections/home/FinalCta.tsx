import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/config/site";
import { finalCta, offer } from "@/content/home";
import { nextSteps } from "@/content/pricing";

const money = (n: number) => n.toLocaleString("en-AU");

/**
 * Closing enquiry section, laid out as in the owner's preview r5.2: what happens
 * next on the left (free first call, then the paid in-depth consult if you go
 * ahead), the enquiry form on the right, on deep purple.
 */
export function FinalCta() {
  return (
    <section id="enquire" className="relative scroll-mt-24 overflow-hidden bg-purple-900 py-section text-white">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow light>{finalCta.label}</Eyebrow>
          </Reveal>
          <SplitLines as="h2" className="mt-6 text-h2 text-white">
            {finalCta.title.join(" ")}
          </SplitLines>
          <Reveal className="mt-5">
            <p className="max-w-lg text-lead text-white/80">{finalCta.text}</p>
          </Reveal>

          <Reveal as="ol" stagger={0.06} className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {nextSteps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-white/80 font-display text-sm font-semibold text-white tabular">
                  {i + 1}
                </span>
                <div>
                  <p className="font-sans text-[1.0625rem] leading-snug font-semibold text-white">{s.title}</p>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-white/75">{s.text}</p>
                </div>
              </li>
            ))}
          </Reveal>

          <Reveal className="mt-9">
            <p className="text-[1.0625rem] text-white/85">
              Prefer to call?{" "}
              <a href={site.phone.href} className="font-semibold text-white underline underline-offset-4 hover:text-coral">
                {site.phone.display}
              </a>
            </p>
            <p className="mt-6 max-w-md border-t border-white/15 pt-5 text-[0.95rem] leading-relaxed text-white/70">
              Up to <span className="font-semibold text-white">${money(offer.amount)}</span> of interior design included on new design &amp; construct projects.
            </p>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7">
          <EnquiryForm className="shadow-[0_30px_70px_-40px_rgb(0_0_0/0.6)]" />
        </Reveal>
      </div>
    </section>
  );
}
