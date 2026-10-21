import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon, TextLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/home";

/**
 * Recent projects — four real jobs in one row (2 × 2 on phones), same fade-up
 * as the rest of the site. The full portfolio lives on /projects/.
 */
export function Projects() {
  return (
    <section className="relative bg-cream-50 py-section">
      <div className="container-x">
        <SectionHeading
          label={projects.label}
          title={projects.title}
          intro={projects.intro}
          action={<TextLink href={projects.link.href}>{projects.link.label}</TextLink>}
        />

        <Reveal as="ul" stagger={0.08} className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {projects.items.map((p) => (
            <li key={p.image.src}>
              <Link href={p.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-purple/10">
                  <Photo
                    src={p.image.src}
                    alt={p.image.alt}
                    frame={4 / 5}
                    vw={{ desktop: 24, breakpoint: 1024, mobile: 48 }}
                    className="transition-transform duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-[1.05]"
                  />
                  <span className="label absolute top-3 left-3 rounded-full bg-cream-50/90 px-3 py-1.5 !text-[0.6rem] !tracking-[0.12em] text-purple backdrop-blur sm:top-4 sm:left-4">
                    {p.suburb}
                  </span>
                </div>
                <h3 className="mt-4 flex items-start justify-between gap-3 font-display text-[1.05rem] leading-snug font-semibold text-purple sm:text-[1.25rem]">
                  {p.title}
                  <ArrowIcon className="mt-1.5 hidden size-4 shrink-0 text-orange transition-transform duration-500 group-hover:translate-x-1 sm:block" />
                </h3>
                <p className="mt-1 text-sm text-ink/60 sm:text-base">{p.scope}</p>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
