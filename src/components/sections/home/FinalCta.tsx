import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { Button, PhoneButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { finalCta, offer } from "@/content/home";

const money = (n: number) => n.toLocaleString("en-AU");

/**
 * Closing section — the free home visit and the $10,000 interior design offer
 * in one light section (client feedback: the separate purple offer band and dark
 * CTA stacked three dark blocks into the footer). Static, same fade-up as the rest.
 */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-section">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* Left: the ask */}
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>{finalCta.label}</Eyebrow>
          </Reveal>
          <SplitLines as="h2" className="mt-6 text-display text-purple">
            {finalCta.title.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </SplitLines>
          <Reveal className="mt-6">
            <p className="max-w-lg text-lead text-ink/75">{finalCta.text}</p>
          </Reveal>
          <Reveal stagger={0.08} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <div>
              <Button href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</Button>
            </div>
            <div>
              <PhoneButton variant="dark" />
            </div>
          </Reveal>

          {/* The offer, as a highlighted inclusion */}
          <Reveal className="mt-12 rounded-[6px] border border-purple/10 bg-white p-6 sm:p-7">
            <p className="label !text-[0.66rem] !tracking-[0.16em] text-purple/60">{offer.label}</p>
            <p className="mt-3 font-display text-[clamp(1.5rem,1.1rem+1.4vw,2.25rem)] leading-tight font-bold tracking-[-0.02em] text-purple">
              Up to <span className="text-orange">${money(offer.amount)}</span> {offer.title}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
              {offer.inclusions.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-base text-ink/80">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-orange text-white">
                    <Icon name="check" className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="label mt-5 !text-[0.62rem] !tracking-[0.14em] text-ink/45">{offer.note}</p>
          </Reveal>
        </div>

        {/* Right: the interior designer */}
        <Reveal className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:col-start-8 lg:max-w-none">
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-tr-[46%] border-2 border-orange sm:translate-x-6 sm:translate-y-6" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-tr-[46%] bg-purple/10">
            <Photo src={offer.image.src} alt={offer.image.alt} frame={4 / 5} vw={{ desktop: 36, mobile: 90 }} className="object-[32%_center]" />
            <p className="label absolute bottom-5 left-5 rounded-full bg-purple-950/85 px-4 py-2.5 !text-[0.66rem] text-white backdrop-blur">{offer.caption}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
