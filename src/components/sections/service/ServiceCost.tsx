import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import type { ServicePage } from "@/content/services";

/**
 * Cost guidance (Page Blueprint §7). No published prices yet (client feedback:
 * don't promise numbers we don't show), so this explains what moves the price.
 */
export function ServiceCost({ page }: { page: ServicePage }) {
  const { cost } = page;
  return (
    <section className="relative bg-cream py-section">
      <div className="container-x">
        <SectionHeading label={cost.label} title={cost.title} intro={cost.intro} />
        <Reveal
          as="ul"
          stagger={0.08}
          className={cn("mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6", cost.factors.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4")}
        >
          {cost.factors.map((f, i) => (
            <li key={f.title} className="flex flex-col rounded-[6px] bg-white p-6 ring-1 ring-purple/8 sm:p-7">
              <span className="font-display text-sm font-semibold text-orange tabular">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-xl leading-tight font-semibold text-purple">{f.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink/75">{f.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
