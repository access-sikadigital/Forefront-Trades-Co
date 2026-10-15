"use client";

import { Counter } from "@/components/motion/Counter";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Logomark } from "@/components/ui/Logomark";
import { statement, stats } from "@/content/home";

/** Brand statement: copy and client quote beside the team photo (static brand badge), then count-up stats. */
export function Statement() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-section">
      <div className="container-x">
        {/* 50 / 50: copy | photo (client feedback: the photo took too much width) */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>{statement.label}</Eyebrow>
            </Reveal>
            <SplitLines as="h2" className="mt-6 text-h2 text-purple">
              {statement.title}
            </SplitLines>
            <Reveal stagger={0.08} className="mt-8 space-y-5">
              {statement.text.map((para) => (
                <p key={para} className="max-w-xl font-display text-[clamp(1.15rem,0.95rem+0.6vw,1.45rem)] leading-[1.4] font-medium tracking-[-0.01em] text-purple">
                  {para}
                </p>
              ))}
            </Reveal>
            <Reveal as="figure" className="mt-9 border-l-2 border-orange pl-5">
              <blockquote className="font-display text-lg leading-snug font-medium text-purple">&ldquo;{statement.quote.text}&rdquo;</blockquote>
              <figcaption className="label mt-3 !text-[0.66rem] !tracking-[0.14em] text-ink/60">
                {statement.quote.name} · {statement.quote.source}
              </figcaption>
            </Reveal>
            <Reveal className="mt-9">
              <TextLink href={statement.link.href}>{statement.link.label}</TextLink>
            </Reveal>
          </div>

          {/* Team photo with the static brand badge from md up */}
          <div className="relative aspect-[4/3]">
            <ImageReveal
              src={statement.image.src}
              alt={statement.image.alt}
              frame={4 / 3}
              vw={{ desktop: 46, mobile: 100 }}
              className="absolute inset-0 rounded-[3px]"
            />
            {/* Static brand badge (no motion) */}
            <div className="absolute -bottom-8 -left-6 hidden md:block lg:-left-10">
              <div
                className="relative flex size-[clamp(96px,11vw,168px)] items-center justify-center rounded-full bg-orange text-white shadow-[0_20px_50px_-20px_rgb(255_80_0/0.6)]"
              >
                <svg viewBox="0 0 120 120" className="absolute inset-0 size-full" aria-hidden>
                  <defs>
                    <path id="badge-circle" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
                  </defs>
                  <text className="fill-white font-display text-[10.5px] font-semibold tracking-[0.2em] uppercase">
                    <textPath href="#badge-circle" textLength="270">
                      {statement.badge}
                    </textPath>
                  </text>
                </svg>
                <Logomark className="size-[30%]" />
              </div>
            </div>
          </div>
        </div>

        <Reveal as="dl" stagger={0.1} className="mt-20 grid grid-cols-2 border-t border-line lg:mt-24 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-line py-8 odd:border-r odd:pr-5 even:pl-5 sm:odd:pr-8 sm:even:pl-8 lg:border-r lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:border-r-0">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(3rem,2rem+3.4vw,5.5rem)] leading-none font-bold tracking-[-0.04em] text-purple tabular">
                  <Counter value={s.value} decimals={"decimals" in s ? s.decimals : 0} />
                  <span className={s.suffix === "★" ? "ml-[0.12em] inline-block align-[0.06em] text-[0.8em] text-orange" : "text-orange"}>{s.suffix}</span>
                </span>
                <span aria-hidden className="mt-4 block max-w-[20ch] text-lg leading-snug text-ink/70">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
