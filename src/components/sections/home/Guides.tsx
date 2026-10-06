import Link from "next/link";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon, TextLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { guides } from "@/content/home";

/** Cost & planning guides — the content moat from the content plan. */
export function Guides() {
  return (
    <section className="relative bg-cream-50 pb-section">
      <div className="container-x">
        <SectionHeading label={guides.label} title={guides.title} action={<TextLink href={guides.link.href}>{guides.link.label}</TextLink>} />
        <Reveal as="ul" stagger={0.12} className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6 lg:mt-20 lg:gap-8">
          {guides.items.map((g, i) => (
            <li key={g.href} className={i === 1 ? "md:mt-16" : undefined}>
              <Link href={g.href} data-cursor="Read" className="group block">
                <ImageReveal src={g.image.src} alt={g.image.alt} frame={4 / 5} vw={{ desktop: 31, breakpoint: 768 }} className="aspect-[4/5] rounded-[3px]" imageClassName="transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.05]" />
                <p className="label mt-6 text-orange">{g.tag}</p>
                <h3 className="mt-3 flex items-start justify-between gap-6 text-[1.5rem] leading-[1.15] tracking-[-0.015em] text-purple">
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-700 ease-[var(--ease-expo)] group-hover:bg-[length:100%_1px]">
                    {g.title}
                  </span>
                  <ArrowIcon className="mt-2 size-5 shrink-0 text-orange transition-transform duration-500 group-hover:translate-x-1" />
                </h3>
              </Link>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
