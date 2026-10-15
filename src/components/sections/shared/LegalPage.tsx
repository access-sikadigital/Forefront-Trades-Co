import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroBackdrop } from "@/components/sections/shared/HeroBackdrop";
import type { LegalDoc } from "@/content/legal";

/** Long-form legal page: a quiet charcoal header, then a readable single column. */
export function LegalPage({ doc, image }: { doc: LegalDoc; image: string }) {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <HeroBackdrop src={image} />
        <div className="container-x relative pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-24">
          <Reveal className="lg:max-w-[60%]">
            <Eyebrow light>Last updated {doc.updated}</Eyebrow>
            <h1 className="mt-6 font-display text-h2 font-bold text-white">{doc.title}</h1>
            <p className="mt-6 text-lead text-white/80">{doc.intro}</p>
          </Reveal>
        </div>
      </section>
      <article className="relative bg-white py-section">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            {doc.sections.map((s) => (
              <section key={s.heading} className="mt-12 first:mt-0">
                <h2 className="font-display text-[clamp(1.4rem,1.2rem+0.8vw,2rem)] leading-tight font-bold tracking-[-0.015em] text-purple">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-4 text-lg leading-relaxed text-ink/80">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-4 space-y-2.5">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink/80">
                        <span aria-hidden className="mt-3 size-1.5 shrink-0 bg-orange" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
