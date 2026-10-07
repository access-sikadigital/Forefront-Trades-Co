"use client";

import { useRef } from "react";
import { Counter } from "@/components/motion/Counter";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { TextScrub } from "@/components/motion/TextScrub";
import { TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Logomark } from "@/components/ui/Logomark";
import { statement, stats } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

/**
 * Brand statement. Copy on the left (words brighten as they scroll through);
 * a layered collage on the right — the team photo, a detail shot that
 * overlaps its corner and travels faster for depth, and a circular
 * "since the 1990s" badge that turns with the scroll. Count-up stats below.
 */
export function Statement() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const q = gsap.utils.selector(root);
      const collage = q("[data-collage]")[0];
      const scrub = { trigger: collage, start: "top bottom", end: "bottom top", scrub: 1 };

      gsap.fromTo(q("[data-detail]"), { yPercent: 18 }, { yPercent: -18, ease: "none", scrollTrigger: scrub });
      gsap.fromTo(q("[data-badge-ring]"), { rotate: -120 }, { rotate: 120, ease: "none", scrollTrigger: scrub });
      gsap.from(q("[data-badge]"), {
        scale: 0,
        rotate: -90,
        duration: 1.2,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: collage, start: "top 88%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-cream-50 py-section">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{statement.label}</Eyebrow>
            </Reveal>
            <SplitLines as="h2" className="mt-6 text-h2 text-purple">
              {statement.title}
            </SplitLines>
            {statement.text.map((para, i) => (
              <TextScrub
                key={i}
                text={para}
                className={`${i === 0 ? "mt-8" : "mt-5"} max-w-xl font-display text-[clamp(1.2rem,0.95rem+0.75vw,1.6rem)] leading-[1.38] font-medium tracking-[-0.01em] text-purple`}
              />
            ))}
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

          {/* Collage from md up (proportions are % of the box). On phones: the team photo alone. */}
          <div data-collage className="relative aspect-[4/3] md:aspect-[9/7] lg:col-span-7">
            <ImageReveal
              src={statement.image.src}
              alt={statement.image.alt}
              frame={4 / 3}
              vw={{ desktop: 44, mobile: 100 }}
              className="absolute inset-0 rounded-[3px] md:inset-auto md:top-0 md:right-0 md:aspect-[4/3] md:w-[80%]"
            />
            <div data-detail className="absolute bottom-0 left-0 hidden w-[36%] md:block">
              <ImageReveal
                src={statement.detail.src}
                alt={statement.detail.alt}
                frame={3 / 4}
                vw={{ desktop: 20, mobile: 36 }}
                variant="tiles"
                className="aspect-[3/4] w-full rounded-[3px] ring-[6px] ring-cream-50 lg:ring-[10px]"
              />
            </div>

            {/* Position/centring on the wrapper; GSAP spins and scales the badge inside it. */}
            <div className="absolute top-[4%] left-[20%] hidden -translate-x-1/2 md:block">
              <div
                data-badge
                className="relative flex size-[clamp(96px,11vw,168px)] items-center justify-center rounded-full bg-orange text-white shadow-[0_20px_50px_-20px_rgb(255_80_0/0.6)]"
              >
                <svg data-badge-ring viewBox="0 0 120 120" className="absolute inset-0 size-full" aria-hidden>
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

        <Reveal as="dl" stagger={0.1} className="mt-24 grid grid-cols-2 border-t border-line lg:mt-32 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-line py-8 odd:border-r odd:pr-5 even:pl-5 sm:odd:pr-8 sm:even:pl-8 lg:border-r lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:border-r-0">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(3rem,2rem+3.4vw,5.5rem)] leading-none font-bold tracking-[-0.04em] text-purple tabular">
                  <Counter value={s.value} decimals={"decimals" in s ? s.decimals : 0} />
                  <span className="text-orange">{s.suffix}</span>
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
