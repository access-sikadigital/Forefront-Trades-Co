import { Reveal } from "@/components/motion/Reveal";
import { Icon, type BrandIcon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/Button";
import { guarantees } from "@/content/home";
import { cn } from "@/lib/utils";

/** Fixed price, on time, warranties, registration — certainty, in writing. */
export function Guarantees() {
  return (
    <section className="relative bg-cream py-section">
      <div className="container-x">
        <SectionHeading
          label="Our guarantees"
          title="Certainty, in writing."
          intro="Renovating is a big decision. These commitments sit in every contract we sign — not in the fine print."
          action={<TextLink href="/warranty-and-insurance/">Warranty & insurance</TextLink>}
        />
        <Reveal as="ul" stagger={0.08} className="mt-16 grid gap-px overflow-hidden rounded-[4px] bg-purple/12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-6 xl:grid-cols-5">
          {guarantees.map((g, i) => (
            <li
              key={g.title}
              className={cn(
                "group relative flex min-h-[240px] flex-col justify-between gap-10 bg-cream-50 p-6 transition-colors duration-500 hover:bg-purple sm:min-h-[300px] sm:p-7 xl:col-span-1 xl:min-h-[360px]",
                // 6-col grid at lg: three across, then two wider cards; on sm the odd fifth spans both columns
                i < 3 ? "lg:col-span-2" : "lg:col-span-3",
                i === guarantees.length - 1 && "sm:col-span-2 lg:col-span-3",
              )}
            >
              <div className="flex items-start justify-between">
                <span className="flex size-14 items-center justify-center rounded-full bg-orange/10 text-orange transition-colors duration-500 group-hover:bg-orange group-hover:text-white">
                  <Icon name={g.icon as BrandIcon} className="size-7" />
                </span>
                <span className="font-display text-sm font-semibold text-purple/35 tabular transition-colors group-hover:text-white/40">0{i + 1}</span>
              </div>
              <div>
                <h3 className="text-[1.45rem] leading-[1.08] sm:text-[1.6rem] tracking-[-0.015em] text-purple transition-colors duration-500 group-hover:text-white">{g.title}</h3>
                <p className="mt-3 text-base text-ink/70 transition-colors duration-500 group-hover:text-white/75">{g.text}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
