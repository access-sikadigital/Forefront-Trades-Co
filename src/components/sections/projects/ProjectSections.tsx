import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SplitLines } from "@/components/motion/SplitLines";
import { ArrowIcon } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/home";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

/** Projects hub: one large card per project, the first spanning two columns. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="relative bg-cream-50 py-section">
      <div className="container-x">
        <Reveal as="ul" stagger={0.1} className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.map((pr, i) => (
            <li key={pr.slug} className={cn(i === 0 && "lg:col-span-2")}>
              <Link href={`/projects/${pr.slug}/`} className="group block">
                <div className={cn("relative overflow-hidden rounded-[6px] bg-purple/10", i === 0 ? "aspect-[4/3] lg:aspect-[21/9]" : "aspect-[4/3]")}>
                  <Photo
                    src={pr.cover.src}
                    alt={pr.cover.alt}
                    frame={i === 0 ? 21 / 9 : 4 / 3}
                    vw={{ desktop: i === 0 ? 92 : 46, mobile: 92 }}
                    className="transition-transform duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-[1.04]"
                  />
                  <span className="label absolute top-4 left-4 rounded-full bg-cream-50/90 px-3 py-1.5 !text-[0.62rem] !tracking-[0.12em] text-purple backdrop-blur">{pr.suburb}</span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h2 className="font-display text-[clamp(1.5rem,1.2rem+1vw,2.25rem)] leading-tight font-bold tracking-[-0.02em] text-purple">{pr.title}</h2>
                    <p className="label mt-2 !text-[0.66rem] !tracking-[0.14em] text-ink/55">{pr.scope}</p>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/75 sm:text-lg">{pr.summary}</p>
                  </div>
                  <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full border border-purple/15 text-orange transition-colors duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-white">
                    <ArrowIcon className="size-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** Case study: what was built, beside the highlights list (50 / 50). */
export function ProjectStory({ project }: { project: Project }) {
  return (
    <section className="relative bg-white py-section">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>The job</Eyebrow>
          </Reveal>
          <SplitLines as="h2" className="mt-6 text-h2 text-purple">
            What we built.
          </SplitLines>
          <Reveal stagger={0.08} className="mt-8 space-y-5">
            {project.story.map((para) => (
              <p key={para} className="text-lead text-ink/80">
                {para}
              </p>
            ))}
          </Reveal>
        </div>
        <Reveal className="self-start rounded-[6px] bg-purple p-7 text-white lg:mt-20 lg:p-10">
          <p className="label !text-[0.66rem] !tracking-[0.14em] text-white/60">Highlights</p>
          <ul className="mt-5 space-y-3.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-lg leading-snug">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange">
                  <Icon name="check" className="size-3" />
                </span>
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** Before / after pairs, side by side (static: one motion language site-wide). */
export function BeforeAfterPairs({ pairs }: { pairs: NonNullable<Project["beforeAfter"]> }) {
  return (
    <section className="relative bg-ink-950 py-section text-white">
      <div className="container-x">
        <SectionHeading light label="Before & after" title="Mid-build, and finished." />
        <div className="mt-12 space-y-10 lg:mt-16 lg:space-y-14">
          {pairs.map((pair) => (
            <Reveal key={pair.label} stagger={0.1} className="grid gap-4 sm:grid-cols-2 lg:gap-6">
              {(["before", "after"] as const).map((k) => (
                <figure key={k}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-white/5">
                    <Photo src={pair[k].src} alt={pair[k].alt} frame={4 / 3} vw={{ desktop: 46, breakpoint: 640, mobile: 92 }} />
                    <span
                      className={cn(
                        "label absolute top-4 left-4 rounded-full px-3 py-1.5 !text-[0.62rem] !tracking-[0.12em]",
                        k === "after" ? "bg-orange text-white" : "bg-ink-950/80 text-white backdrop-blur",
                      )}
                    >
                      {pair.label} · {k}
                    </span>
                  </div>
                </figure>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Photo gallery: a varied grid where every fifth photo runs wide. */
export function ProjectGallery({ images, suburb }: { images: Project["gallery"]; suburb: string }) {
  return (
    <section className="relative bg-cream-50 py-section">
      <div className="container-x">
        <SectionHeading label="Gallery" title={`Around the ${suburb} job.`} />
        <Reveal as="ul" stagger={0.05} className="mt-12 grid grid-cols-2 gap-3 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {images.map((img, i) => {
            const wide = i % 5 === 0;
            return (
              <li key={img.src} className={cn(wide && "col-span-2")}>
                <figure>
                  <div className={cn("relative overflow-hidden rounded-[6px] bg-purple/10", wide ? "aspect-[16/10]" : "aspect-[4/5]")}>
                    <Photo src={img.src} alt={`${img.alt}, ${suburb}`} frame={wide ? 16 / 10 : 4 / 5} vw={{ desktop: wide ? 46 : 23, breakpoint: 1024, mobile: wide ? 92 : 46 }} />
                  </div>
                  <figcaption className="mt-2.5 text-sm leading-snug text-ink/60">{img.alt}</figcaption>
                </figure>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

/** Links from a case study to the services it shows. */
export function RelatedServices({ hrefs }: { hrefs: string[] }) {
  const list = services.filter((s) => hrefs.includes(s.href));
  return (
    <section className="relative bg-white py-section">
      <div className="container-x">
        <SectionHeading label="Services on this job" title="Planning something similar?" />
        <Reveal as="ul" stagger={0.08} className={cn("mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6", list.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
          {list.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="group flex h-full flex-col overflow-hidden rounded-[6px] bg-cream-50 ring-1 ring-purple/8 transition-shadow duration-500 hover:shadow-[0_24px_50px_-28px_rgb(61_17_82/0.45)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Photo src={s.image.src} alt={s.image.alt} frame={16 / 10} vw={{ desktop: 31, breakpoint: 1024, mobile: 92 }} className="transition-transform duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-[1.05]" />
                </div>
                <div className="flex flex-1 items-center justify-between gap-4 p-5 lg:p-6">
                  <span className="font-display text-xl leading-tight font-semibold text-purple">{s.title}</span>
                  <ArrowIcon className="size-4 shrink-0 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                </div>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** The client's own video testimonial, beside their quote. */
export function ProjectVideo({ video, quote }: { video: NonNullable<Project["video"]>; quote?: Project["quote"] }) {
  return (
    <section className="relative bg-purple-950 py-section text-white">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <Reveal className="mx-auto w-full max-w-[420px] lg:col-span-5 lg:mx-0">
          <video
            src={video.src}
            poster={video.poster}
            controls
            playsInline
            preload="none"
            className="aspect-[9/16] w-full rounded-[6px] bg-black object-cover shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)]"
            aria-label={`Video: ${video.name} on their project`}
          />
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <Eyebrow light>In their words</Eyebrow>
          </Reveal>
          {quote && (
            <Reveal className="mt-6">
              <blockquote className="font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.75rem)] leading-tight font-bold tracking-[-0.02em]">
                <span aria-hidden className="text-orange">&ldquo;</span>
                {quote.text}
                <span aria-hidden className="text-orange">&rdquo;</span>
              </blockquote>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-lg font-semibold">{quote.name}</span>
                <span className="label !text-[0.62rem] !tracking-[0.14em] text-white/60">{quote.project}</span>
              </p>
            </Reveal>
          )}
          <Reveal className="mt-8">
            <Link href="/reviews/" className="label group inline-flex items-center gap-2.5 !text-[0.72rem] !tracking-[0.14em] text-white hover:text-orange">
              More client stories
              <ArrowIcon className="size-3.5 text-orange transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
