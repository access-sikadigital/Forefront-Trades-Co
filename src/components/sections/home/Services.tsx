import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon, TextLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, servicesHeading } from "@/content/home";

/**
 * Services as a compact 3 × 2 grid of photo cards (client feedback: the page
 * was too long). Same fade-up as everything else; hover lifts the photo only.
 */
export function Services() {
  return (
    <section className="relative bg-cream-50 pb-section">
      <div className="container-x">
        <SectionHeading
          label={servicesHeading.label}
          title={servicesHeading.title}
          intro={servicesHeading.intro}
          action={<TextLink href={servicesHeading.link.href}>{servicesHeading.link.label}</TextLink>}
        />

        <Reveal as="ul" stagger={0.08} className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="group flex h-full flex-row overflow-hidden rounded-[6px] sm:flex-col bg-white ring-1 ring-purple/8 transition-shadow duration-500 hover:shadow-[0_24px_50px_-28px_rgb(61_17_82/0.45)]"
              >
                <div className="relative aspect-square w-28 shrink-0 overflow-hidden sm:aspect-[16/10] sm:w-auto">
                  <Photo
                    src={s.image.src}
                    alt={s.image.alt}
                    frame={16 / 10}
                    vw={{ desktop: 31, breakpoint: 1024, mobile: 100 }}
                    className="transition-transform duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-4 left-4 hidden rounded-full sm:inline-block bg-white/90 px-3 py-1.5 font-display text-xs font-semibold text-purple tabular backdrop-blur">
                    {s.index}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-center p-4 sm:justify-start sm:p-6 lg:p-7">
                  <h3 className="text-[1.15rem] leading-tight text-purple sm:text-h3">{s.title}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm sm:flex-1 leading-snug text-ink/75 sm:mt-3 sm:line-clamp-none sm:text-base">{s.summary}</p>
                  <span className="label mt-6 hidden items-center sm:inline-flex gap-2.5 !text-[0.72rem] !tracking-[0.14em] text-purple">
                    Learn more
                    <ArrowIcon className="size-3.5 text-orange transition-transform duration-500 group-hover:translate-x-1" />
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
