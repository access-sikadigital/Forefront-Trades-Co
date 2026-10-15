import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { Button, PhoneButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { hero as homeHero } from "@/content/home";
import { HeroBackdrop } from "@/components/sections/shared/HeroBackdrop";

export type HeroData = {
  /** Keyword line, rendered as the page <h1>. */
  h1: string;
  /** Selling headline, joined into one flowing sentence. */
  title: string[];
  intro: string;
  image?: { src: string; alt: string };
  /** Qualifying strip under the CTAs (Page Blueprint §2). */
  facts?: { label: string; value: string }[];
};

/**
 * Inner-page hero, shared by every page below the home page: keyword H1 as the
 * eyebrow (same pattern as the home hero), a selling headline, both CTAs and a
 * real project photo.
 *
 * One photo layer. Phones & tablets: it's the whole background under an even
 * charcoal veil. Desktop: it bleeds off the right edge, full height, and the
 * charcoal fades in from the left so copy and photo read as one surface.
 * No relevant photo yet: plain charcoal rather than an unrelated image.
 */
export function PageHero({ hero, children }: { hero: HeroData; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {hero.image && <HeroBackdrop src={hero.image.src} />}

      <div className="container-x relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-28">
        <div className="lg:max-w-[60%]">
          <Reveal>
            <Eyebrow light as="h1" className="!text-[0.8rem] !tracking-[0.16em] text-white/90 sm:!text-[0.9rem]">
              {hero.h1}
            </Eyebrow>
          </Reveal>
          {/* One flowing sentence that fills the 60% column, with the last two words kept together so
              no word sits alone. On phones the size follows the screen width so that pair always fits. */}
          <SplitLines as="p" className="mt-6 font-display text-h2 font-bold text-pretty text-white max-sm:text-[length:min(2.5rem,9.2vw)]">
            {hero.title.join(" ").replace(/ (\S+)$/, " $1")}
          </SplitLines>
          <Reveal className="mt-7">
            <p className="text-lead text-white/80">{hero.intro}</p>
          </Reveal>

          {children ?? (
            <Reveal stagger={0.08} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <div>
                <Button href={homeHero.primaryCta.href}>{homeHero.primaryCta.label}</Button>
              </div>
              <div>
                <PhoneButton variant="glass" />
              </div>
            </Reveal>
          )}

          {hero.facts && (
            <Reveal as="dl" stagger={0.06} className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(7.5rem,1fr))] gap-x-4 gap-y-5 border-t border-white/15 pt-6">
              {hero.facts.map((f) => (
                <div key={f.label}>
                  <dt className="label !text-[0.6rem] !tracking-[0.14em] text-white/60">{f.label}</dt>
                  <dd className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">{f.value}</dd>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
