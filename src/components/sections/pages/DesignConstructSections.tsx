import { Reveal } from "@/components/motion/Reveal";
import { Icon, type BrandIcon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { designConstruct } from "@/content/home";
import { designAndConstruct } from "@/content/pages";

/** Design & Construct: the four jobs on one contract, as photo cards. */
export function DcPillars() {
  const heading = designAndConstruct.pillarsHeading;
  return (
    <section className="relative bg-white py-section">
      <div className="container-x">
        <SectionHeading label={heading.label} title={heading.title} intro={heading.intro} />
        <Reveal as="ol" stagger={0.08} className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {designConstruct.pillars.map((p, i) => (
            <li key={p.title} className="flex flex-col overflow-hidden rounded-[6px] bg-cream-50 ring-1 ring-purple/8">
              <div className="relative aspect-[4/3] overflow-hidden bg-purple/10">
                <Photo src={p.image.src} alt={p.image.alt} frame={4 / 3} vw={{ desktop: 24, breakpoint: 1024, mobile: 92 }} />
                <span className="absolute top-4 left-4 flex size-11 items-center justify-center rounded-full bg-orange text-white">
                  <Icon name={p.icon as BrandIcon} className="size-5" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <span className="font-display text-sm font-semibold text-orange tabular">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-h3 text-purple">{p.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink/75">{p.text}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** Design & Construct vs a separate designer and builder, row by row. */
export function DcCompare() {
  const { compare } = designAndConstruct;
  return (
    <section className="relative bg-cream py-section">
      <div className="container-x">
        <SectionHeading label={compare.label} title={compare.title} intro={compare.intro} />

        {/* Header row (desktop); on phones each row labels its own columns */}
        <div className="mt-12 lg:mt-16">
          <div aria-hidden className="hidden grid-cols-12 gap-6 px-7 pb-4 lg:grid">
            <span className="col-span-4" />
            <span className="label col-span-4 !text-[0.66rem] !tracking-[0.14em] text-ink/55">{compare.columns[0]}</span>
            <span className="label col-span-4 !text-[0.66rem] !tracking-[0.14em] text-orange">{compare.columns[1]}</span>
          </div>
          <Reveal as="ul" stagger={0.08} className="space-y-3">
            {compare.rows.map((r) => (
              <li key={r.topic} className="grid gap-4 rounded-[6px] bg-white p-6 ring-1 ring-purple/8 lg:grid-cols-12 lg:items-center lg:gap-6 lg:p-7">
                <h3 className="font-display text-xl leading-tight font-semibold text-purple lg:col-span-4">{r.topic}</h3>
                <p className="text-base leading-relaxed text-ink/60 lg:col-span-4">
                  <span className="label mb-1 block !text-[0.6rem] !tracking-[0.14em] text-ink/45 lg:hidden">{compare.columns[0]}</span>
                  {r.them}
                </p>
                <p className="flex items-start gap-3 text-base leading-relaxed font-medium text-purple lg:col-span-4">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange text-white">
                    <Icon name="check" className="size-3" />
                  </span>
                  <span>
                    <span className="label mb-1 block !text-[0.6rem] !tracking-[0.14em] text-orange lg:hidden">{compare.columns[1]}</span>
                    {r.us}
                  </span>
                </p>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
