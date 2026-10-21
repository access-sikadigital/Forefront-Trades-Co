import Link from "next/link";
import { DragScroller } from "@/components/motion/DragScroller";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitLines } from "@/components/motion/SplitLines";
import type { ServiceExtra } from "@/content/service-extras";
import { cn } from "@/lib/utils";

/**
 * Service-specific sections. Each service page combines different ones, so no two
 * pages share a layout below the hero (client: service pages looked the same).
 */
export function ServiceExtras({ extras }: { extras: ServiceExtra[] }) {
  return extras.map((extra) => {
    switch (extra.type) {
      case "cards":
        return <CardsSection key={extra.title} extra={extra} />;
      case "mosaic":
        return <MosaicSection key={extra.title} extra={extra} />;
      case "steps":
        return <StepsSection key={extra.title} extra={extra} />;
      case "split":
        return <SplitSection key={extra.title} extra={extra} />;
      case "feature":
        return <FeatureSection key={extra.title} extra={extra} />;
      case "tour":
        return <TourSection key={extra.title} extra={extra} />;
      case "checks":
        return <ChecksSection key={extra.title} extra={extra} />;
    }
  });
}

type Of<T extends ServiceExtra["type"]> = Extract<ServiceExtra, { type: T }>;

/**
 * Photo cards (layouts, room types). Sections without photos for every item get a
 * compact text layout instead; no empty image blocks (client feedback).
 */
function CardsSection({ extra }: { extra: Of<"cards"> }) {
  const withPhotos = extra.items.every((item) => item.image);
  const cols = extra.items.length === 3 ? "lg:grid-cols-3" : extra.items.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-4";
  return (
    <section className={cn("relative py-section", extra.tone === "white" ? "bg-white" : "bg-cream")}>
      <div className="container-x">
        <SectionHeading label={extra.label} title={extra.title} intro={extra.intro} />
        {withPhotos ? (
          <Reveal as="ul" stagger={0.08} className={cn("mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6", cols)}>
            {extra.items.map((item) => (
              <li key={item.title} className="flex flex-col overflow-hidden rounded-[6px] bg-white ring-1 ring-purple/8">
                <div className="relative aspect-[4/3] overflow-hidden bg-purple/10">
                  {item.image && <Photo src={item.image.src} alt={item.image.alt} frame={4 / 3} vw={{ desktop: 31, breakpoint: 1024, mobile: 92 }} />}
                  {item.tag && (
                    <span className="label absolute top-3 left-3 rounded-full bg-cream-50/90 px-3 py-1.5 !text-[0.6rem] !tracking-[0.12em] text-purple backdrop-blur">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <h3 className="text-h3 text-purple">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink/75">{item.text}</p>
                  {item.href && (
                    <Link href={item.href} className="label group mt-5 inline-flex items-center gap-2.5 self-start !text-[0.68rem] !tracking-[0.14em] text-purple hover:text-orange">
                      More on {item.title.toLowerCase()}s
                      <ArrowIcon className="size-3.5 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </Reveal>
        ) : (
          <Reveal as="ol" stagger={0.08} className={cn("mt-12 grid border-t border-purple/15 lg:mt-16", cols)}>
            {extra.items.map((item, i) => (
              <li key={item.title} className="border-b border-purple/15 py-7 lg:border-r lg:border-b-0 lg:px-8 lg:py-9 lg:first:pl-0 lg:last:border-r-0">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-sm font-semibold text-orange tabular">{String(i + 1).padStart(2, "0")}</span>
                  {item.tag && <span className="label !text-[0.62rem] !tracking-[0.14em] text-ink/55">{item.tag}</span>}
                </div>
                <h3 className="mt-4 text-h3 text-purple">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/75 sm:text-lg">{item.text}</p>
              </li>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}

/** Close-up details: one large photo and three smaller ones, each captioned. */
function MosaicSection({ extra }: { extra: Of<"mosaic"> }) {
  const [first, ...rest] = extra.items;
  return (
    <section className="relative bg-white py-section">
      <div className="container-x">
        <SectionHeading label={extra.label} title={extra.title} intro={extra.intro} />
        <Reveal stagger={0.08} className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          <figure className="lg:col-span-6 lg:row-span-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-purple/10 lg:aspect-auto lg:h-full lg:min-h-[640px]">
              <Photo src={first.image.src} alt={first.image.alt} frame={4 / 5} vw={{ desktop: 46, mobile: 92 }} />
              <figcaption className="label absolute bottom-4 left-4 rounded-full bg-ink-950/80 px-4 py-2.5 !text-[0.62rem] !tracking-[0.12em] text-white backdrop-blur">
                {first.caption}
              </figcaption>
            </div>
          </figure>
          <div className="grid grid-cols-2 gap-4 lg:col-span-6 lg:gap-6">
            {rest.map((item, i) => (
              <figure key={item.image.src} className={cn(i === 0 && "col-span-2")}>
                <div className={cn("relative overflow-hidden rounded-[6px] bg-purple/10", i === 0 ? "aspect-[16/9]" : "aspect-square")}>
                  <Photo src={item.image.src} alt={item.image.alt} frame={i === 0 ? 16 / 9 : 1} vw={{ desktop: i === 0 ? 46 : 23, mobile: i === 0 ? 92 : 46 }} />
                </div>
                <figcaption className="mt-3 text-sm leading-snug text-ink/70 sm:text-base">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Numbered build sequence on dark, beside a sticky photo. */
function StepsSection({ extra }: { extra: Of<"steps"> }) {
  return (
    <section className="relative bg-purple-950 py-section text-white">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow light>{extra.label}</Eyebrow>
            </Reveal>
            <SplitLines as="h2" className="mt-6 text-h2 text-white">
              {extra.title}
            </SplitLines>
            {extra.intro && (
              <Reveal className="mt-6">
                <p className="text-lead text-white/75">{extra.intro}</p>
              </Reveal>
            )}
            {extra.image && (
              <Reveal className="relative mt-10 hidden aspect-[4/5] overflow-hidden rounded-[6px] lg:block">
                <Photo src={extra.image.src} alt={extra.image.alt} frame={4 / 5} vw={{ desktop: 36, mobile: 1 }} />
              </Reveal>
            )}
          </div>
        </div>
        <Reveal as="ol" stagger={0.08} className="lg:col-span-6 lg:col-start-7">
          {extra.steps.map((s, i) => (
            <li key={s.title} className="relative grid grid-cols-[3.25rem_1fr] gap-x-5 pb-10 last:pb-0">
              {i < extra.steps.length - 1 && <span aria-hidden className="absolute top-14 bottom-2 left-[1.6rem] w-px bg-white/15" />}
              <span className="flex size-[3.25rem] items-center justify-center rounded-full border border-white/20 font-display text-base font-semibold text-orange tabular">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-2.5">
                <h3 className="font-display text-xl leading-tight font-semibold text-white sm:text-2xl">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-white/70 sm:text-lg">{s.text}</p>
              </div>
            </li>
          ))}
          {extra.total && (
            <li className="mt-10 flex items-center justify-between gap-6 rounded-[6px] bg-white/[0.06] px-6 py-5 ring-1 ring-white/10">
              <span className="label !text-[0.66rem] !tracking-[0.14em] text-white/60">{extra.total.label}</span>
              <span className="font-display text-2xl font-bold text-orange">{extra.total.value}</span>
            </li>
          )}
          {extra.note && <li className="mt-4 text-sm leading-relaxed text-white/55">{extra.note}</li>}
        </Reveal>
      </div>
    </section>
  );
}

/** Two options side by side (e.g. second storey vs ground floor), each with a photo and its trade-offs. */
function SplitSection({ extra }: { extra: Of<"split"> }) {
  return (
    <section className="relative bg-cream py-section">
      <div className="container-x">
        <SectionHeading label={extra.label} title={extra.title} intro={extra.intro} />
        <Reveal as="ul" stagger={0.1} className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {extra.options.map((o, i) => (
            <li key={o.title} className={cn("flex flex-col overflow-hidden rounded-[6px]", i === 0 ? "bg-purple text-white" : "bg-white text-purple ring-1 ring-purple/8")}>
              {o.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Photo src={o.image.src} alt={o.image.alt} frame={16 / 10} vw={{ desktop: 46, mobile: 92 }} />
                </div>
              )}
              <div className="flex flex-1 flex-col p-7 lg:p-9">
                <h3 className={cn("text-h3", i === 0 ? "text-white" : "text-purple")}>{o.title}</h3>
                <p className={cn("mt-2 text-lg", i === 0 ? "text-white/75" : "text-ink/70")}>{o.bestFor}</p>
                {o.href && (
                  <Link href={o.href} className={cn("label group mt-5 inline-flex items-center gap-2.5 self-start !text-[0.68rem] !tracking-[0.14em] hover:text-orange", i === 0 ? "text-white" : "text-purple")}>
                    {o.title} extensions in detail
                    <ArrowIcon className="size-3.5 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                )}
                <ul className="mt-6 space-y-3">
                  {o.points.map((pt) => (
                    <li key={pt} className={cn("flex items-start gap-3 text-base leading-relaxed", i === 0 ? "text-white/85" : "text-ink/80")}>
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange text-white">
                        <Icon name="check" className="size-3" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** Full-bleed photo feature on charcoal: photo left, copy and points right. */
function FeatureSection({ extra }: { extra: Of<"feature"> }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="grid lg:grid-cols-2">
        <Reveal className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[640px]">
          <Photo src={extra.image.src} alt={extra.image.alt} frame={1} vw={{ desktop: 50, mobile: 100 }} />
        </Reveal>
        <div className="px-[var(--spacing-gutter)] py-section lg:py-24 lg:pr-[max(var(--spacing-gutter),calc((100vw-1680px)/2+var(--spacing-gutter)))] lg:pl-16">
          <Reveal>
            <Eyebrow light>{extra.label}</Eyebrow>
          </Reveal>
          <SplitLines as="h2" className="mt-6 text-h2 text-white">
            {extra.title}
          </SplitLines>
          <Reveal className="mt-6">
            <p className="text-lead text-white/75">{extra.text}</p>
          </Reveal>
          <Reveal as="ul" stagger={0.06} className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {extra.points.map((pt) => (
              <li key={pt} className="flex items-start gap-3 border-t border-white/15 pt-4 text-base leading-snug text-white/85">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-orange" />
                {pt}
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Room-by-room tour of one project: a draggable row of tall photos on charcoal. */
function TourSection({ extra }: { extra: Of<"tour"> }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-section text-white">
      <div className="container-x">
        <SectionHeading light label={extra.label} title={extra.title} intro={extra.intro} />
      </div>
      <Reveal className="mt-12 lg:mt-16">
        <DragScroller className="gap-4 px-[var(--spacing-gutter)] pb-2 lg:gap-6 lg:px-[max(var(--spacing-gutter),calc((100vw-1680px)/2+var(--spacing-gutter)))]">
          {extra.rooms.map((r) => (
            <li key={r.image.src} className="w-[72vw] max-w-[380px] shrink-0 sm:w-[40vw] lg:w-[24vw]">
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[6px] bg-white/5">
                  <Photo src={r.image.src} alt={r.image.alt} frame={3 / 4} vw={{ desktop: 24, mobile: 72 }} />
                </div>
                <figcaption className="mt-4">
                  <span className="label block !text-[0.66rem] !tracking-[0.14em] text-orange">{r.room}</span>
                  <span className="mt-1.5 block text-base leading-snug text-white/75">{r.text}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </DragScroller>
      </Reveal>
    </section>
  );
}

/** Two or three checklists side by side (e.g. what an overlay controls, what a renovation covers). */
function ChecksSection({ extra }: { extra: Of<"checks"> }) {
  return (
    <section className="relative bg-cream py-section">
      <div className="container-x">
        <SectionHeading label={extra.label} title={extra.title} intro={extra.intro} />
        <Reveal as="div" stagger={0.08} className={cn("mt-12 grid gap-4 lg:mt-16 lg:gap-6", extra.columns.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2")}>
          {extra.columns.map((c, i) => (
            <div key={c.title} className={cn("rounded-[6px] p-7 lg:p-9", i === 0 ? "bg-purple text-white" : "bg-white ring-1 ring-purple/8")}>
              <h3 className={cn("font-display text-2xl leading-tight font-semibold", i === 0 ? "text-white" : "text-purple")}>{c.title}</h3>
              <ul className="mt-6 space-y-3.5">
                {c.items.map((item) => (
                  <li key={item} className={cn("flex items-start gap-3 text-base leading-relaxed", i === 0 ? "text-white/85" : "text-ink/80")}>
                    <span className={cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full", i === 0 ? "bg-orange text-white" : "bg-purple/10 text-purple")}>
                      <Icon name="check" className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
        {extra.note && (
          <Reveal className="mt-6">
            <p className="text-base text-ink/65">{extra.note}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
