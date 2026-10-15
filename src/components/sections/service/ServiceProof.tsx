import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon, TextLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { ServicePage } from "@/content/services";

/**
 * Proof (Page Blueprint §4): real handover photos with suburb and scope, then the
 * clients' own words. Pages without enough photography show the quotes only.
 */
export function ServiceProof({ page }: { page: ServicePage }) {
  const { proof } = page;
  return (
    <section className="relative bg-cream-50 py-section">
      <div className="container-x">
        <SectionHeading label={proof.label} title={proof.title} action={<TextLink href="/projects/">All projects</TextLink>} />

        {proof.items.length > 0 && (
          <Reveal as="ul" stagger={0.08} className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-3 lg:gap-6">
            {proof.items.map((p, i) => (
              <li key={p.image.src} className={cn(i === 0 && "col-span-2 lg:col-span-1")}>
                <Link href={p.href ?? "/projects/"} className="group block">
                  <div className={cn("relative overflow-hidden rounded-[6px] bg-purple/10", i === 0 ? "aspect-[4/3] lg:aspect-[4/5]" : "aspect-[4/5]")}>
                    <Photo
                      src={p.image.src}
                      alt={p.image.alt}
                      frame={4 / 5}
                      vw={{ desktop: 31, breakpoint: 1024, mobile: i === 0 ? 92 : 46 }}
                      className="transition-transform duration-[1.2s] ease-[var(--ease-expo)] group-hover:scale-[1.05]"
                    />
                    <span className="label absolute top-3 left-3 rounded-full bg-cream-50/90 px-3 py-1.5 !text-[0.6rem] !tracking-[0.12em] text-purple backdrop-blur sm:top-4 sm:left-4">
                      {p.suburb}
                    </span>
                  </div>
                  <p className="mt-4 flex items-start justify-between gap-3 font-display text-[1.05rem] leading-snug font-semibold text-purple sm:text-[1.2rem]">
                    {p.caption}
                    <ArrowIcon className="mt-1.5 hidden size-4 shrink-0 text-orange transition-transform duration-500 group-hover:translate-x-1 sm:block" />
                  </p>
                </Link>
              </li>
            ))}
          </Reveal>
        )}

        <Reveal as="ul" stagger={0.08} className={cn("grid gap-4 lg:gap-6", proof.items.length > 0 ? "mt-10 lg:mt-14" : "mt-12 lg:mt-16", proof.quotes.length > 1 && "lg:grid-cols-2")}>
          {proof.quotes.map((q) => (
            <li key={q.text}>
              <figure className="flex h-full flex-col justify-between gap-8 rounded-[6px] bg-purple p-7 text-white sm:p-9 lg:p-10">
                <blockquote className="font-display text-[clamp(1.35rem,1.05rem+1.1vw,2.1rem)] leading-snug font-semibold tracking-[-0.015em]">
                  <span aria-hidden className="text-orange">&ldquo;</span>
                  {q.text}
                  <span aria-hidden className="text-orange">&rdquo;</span>
                </blockquote>
                <figcaption className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-base font-semibold">{q.name}</span>
                  <span className="label !text-[0.62rem] !tracking-[0.14em] text-white/60">{q.project}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
