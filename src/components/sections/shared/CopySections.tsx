import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import type { CopySection } from "@/content/page-copy";
import { cn } from "@/lib/utils";

type Block = { kind: "short"; sections: CopySection[] } | { kind: "full"; section: CopySection };

/** Short sections (a paragraph or two, no sub-points) read better side by side than one band each. */
const isShort = (s: CopySection) => !s.items.length && !s.steps.length && s.paras.join(" ").split(/\s+/).length <= 110;

function group(sections: CopySection[]): Block[] {
  const out: Block[] = [];
  for (const s of sections) {
    const last = out[out.length - 1];
    if (isShort(s) && last?.kind === "short" && last.sections.length < 3) last.sections.push(s);
    else out.push(isShort(s) ? { kind: "short", sections: [s] } : { kind: "full", section: s });
  }
  return out;
}

/**
 * Renders a page's copy sections (content/page-copy.ts) in the site's style.
 * Runs of short sections sit side by side in one band; longer ones get the
 * heading-left, text-right layout; sub-points become a card grid and steps a
 * numbered row. Backgrounds alternate so long pages keep their rhythm.
 */
export function CopySections({ sections, startTone = "white" }: { sections: CopySection[]; startTone?: "white" | "cream" }) {
  if (!sections.length) return null;
  return (
    <>
      {group(sections).map((b, i) => {
        const cream = (i % 2 === 0) === (startTone === "cream");
        const tone = cream ? "bg-cream-50" : "bg-white";

        if (b.kind === "short") {
          const one = b.sections.length === 1;
          return (
            <section key={b.sections[0].title} className={cn("relative py-section", tone)}>
              <div className={cn("container-x grid gap-10 lg:gap-12", one ? "lg:grid-cols-12" : b.sections.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3")}>
                {b.sections.map((s) =>
                  one ? (
                    <div key={s.title} className="contents">
                      <SplitLines as="h2" className="text-h2 text-pretty text-purple lg:col-span-5">
                        {s.title}
                      </SplitLines>
                      <Reveal stagger={0.06} className="space-y-5 lg:col-span-7 lg:col-start-6 lg:pt-2">
                        {s.paras.map((t) => (
                          <p key={t} className="text-lg leading-relaxed text-ink/80 sm:text-xl">
                            {t}
                          </p>
                        ))}
                      </Reveal>
                    </div>
                  ) : (
                    <Reveal key={s.title} className="border-t-2 border-orange pt-6">
                      <h2 className="font-display text-[clamp(1.5rem,1.2rem+1vw,2.1rem)] leading-tight font-bold tracking-[-0.02em] text-pretty text-purple">{s.title}</h2>
                      <div className="mt-4 space-y-4">
                        {s.paras.map((t) => (
                          <p key={t} className="text-base leading-relaxed text-ink/80 sm:text-lg">
                            {t}
                          </p>
                        ))}
                      </div>
                    </Reveal>
                  ),
                )}
              </div>
            </section>
          );
        }

        const s = b.section;
        return (
          <section key={s.title} className={cn("relative py-section", tone)}>
            <div className="container-x grid gap-8 lg:gap-12">
              <SplitLines as="h2" className="max-w-4xl text-h2 text-pretty text-purple">
                {s.title}
              </SplitLines>
              {s.paras.length > 0 && (
                <Reveal stagger={0.06} className="max-w-3xl space-y-5">
                  {s.paras.map((t) => (
                    <p key={t} className="text-lg leading-relaxed text-ink/80 sm:text-xl">
                      {t}
                    </p>
                  ))}
                </Reveal>
              )}
              {s.items.length > 0 && (
                <Reveal as="ul" stagger={0.06} className={cn("grid gap-4 sm:grid-cols-2 lg:gap-6", s.items.length % 3 === 0 || s.items.length === 5 ? "lg:grid-cols-3" : "lg:grid-cols-2")}>
                  {s.items.map((it, n) => (
                    <li key={it.title} className={cn("flex flex-col rounded-[6px] p-6 ring-1 ring-purple/8 sm:p-7", cream ? "bg-white" : "bg-cream-50")}>
                      <span className="font-display text-sm font-semibold text-orange tabular">{String(n + 1).padStart(2, "0")}</span>
                      <h3 className="mt-3 font-display text-xl leading-tight font-semibold text-purple">{it.title}</h3>
                      {it.text && <p className="mt-2 text-base leading-relaxed text-ink/75 sm:text-lg">{it.text}</p>}
                    </li>
                  ))}
                </Reveal>
              )}
              {s.steps.length > 0 && (
                <Reveal as="ol" stagger={0.06} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                  {s.steps.map((t, n) => (
                    <li key={t} className="border-t-2 border-orange pt-4">
                      <span className="font-display text-sm font-semibold text-orange tabular">{String(n + 1).padStart(2, "0")}</span>
                      <p className="mt-2 text-base leading-relaxed text-ink/80 sm:text-lg">{t}</p>
                    </li>
                  ))}
                </Reveal>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
