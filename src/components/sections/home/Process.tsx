"use client";

import { useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process, processHeading } from "@/content/home";
import { cn } from "@/lib/utils";

/** Faint drafting grid — the section reads like a sheet of plans. */
const blueprint: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgb(61 17 82 / 0.06) 1px, transparent 1px), linear-gradient(90deg, rgb(61 17 82 / 0.06) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  backgroundPosition: "-1px -1px",
};

/**
 * The four stages as tabs (owner preview r5.2): 1 Design → 2 Contract and
 * pre-construction readiness → 3 Construct → 4 Handover. One stage shows at a time.
 */
export function Process() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const stage = process[active];

  function onKey(e: KeyboardEvent<HTMLButtonElement>) {
    const next = e.key === "ArrowRight" ? active + 1 : e.key === "ArrowLeft" ? active - 1 : e.key === "Home" ? 0 : e.key === "End" ? process.length - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const i = (next + process.length) % process.length;
    setActive(i);
    tabs.current[i]?.focus();
  }

  return (
    <section className="relative overflow-hidden bg-white py-section" style={blueprint}>
      <div className="container-x">
        <SectionHeading label={processHeading.label} title={processHeading.title} intro={processHeading.intro} />

        <Reveal className="mt-10 lg:mt-14">
          <div role="tablist" aria-label="Process stages" className="flex flex-wrap items-center gap-2 sm:gap-3">
            {process.map((s, i) => (
              <div key={s.step} className="flex items-center gap-2 sm:gap-3">
                {i > 0 && (
                  <span aria-hidden className="hidden text-purple/40 sm:inline">
                    &rarr;
                  </span>
                )}
                <button
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${id}-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls={`${id}-panel`}
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onKey}
                  className={cn(
                    "flex items-center gap-2.5 rounded-full py-2 pr-4 pl-2 text-left font-sans text-[0.95rem] font-semibold transition-colors sm:text-base",
                    i === active ? "bg-purple text-white" : "bg-white text-purple ring-1 ring-purple/20 hover:ring-purple/50",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-full text-sm tabular",
                      i === active ? "bg-white text-purple" : "bg-purple/8 text-purple",
                    )}
                  >
                    {s.step}
                  </span>
                  {s.title}
                </button>
              </div>
            ))}
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`${id}-panel`}
          aria-labelledby={`${id}-tab-${active}`}
          className="mt-6 grid gap-8 rounded-[6px] bg-white p-5 ring-1 ring-purple/10 sm:p-7 lg:grid-cols-12 lg:gap-10"
        >
          <figure className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-purple/10">
              <Photo
                key={stage.image.src + active}
                src={stage.image.src}
                alt={stage.image.alt}
                frame={4 / 3}
                vw={{ desktop: 45, mobile: 90 }}
                className={"position" in stage.image ? "object-[50%_42%]" : undefined}
              />
            </div>
            <figcaption className="mt-3 font-display text-sm font-normal text-ink/65">{stage.caption}</figcaption>
          </figure>

          <div className="lg:col-span-6">
            <p className="label !text-[0.66rem] !tracking-[0.16em] text-purple/60">
              0{active + 1} / 0{process.length} · {stage.title}
            </p>
            <h3 className="mt-3 font-display text-[clamp(1.5rem,1.2rem+1vw,2.1rem)] leading-tight font-bold text-purple">{stage.heading}</h3>
            <ul className="mt-6 space-y-4">
              {stage.points.map((pt) => (
                <li key={pt.title} className="border-l-[3px] border-orange pl-4">
                  <p className="font-display text-xl leading-snug font-semibold text-purple">{pt.title}</p>
                  <p className="mt-1.5 font-display text-[1.0625rem] leading-relaxed font-normal text-ink/75 sm:text-lg">{pt.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal className="mt-10">
          <TextLink href={processHeading.link.href}>{processHeading.link.label}</TextLink>
        </Reveal>
      </div>
    </section>
  );
}
