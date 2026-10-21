import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { warrantyPage as w } from "@/content/warranty";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: w.meta.title,
  description: w.meta.description,
  alternates: { canonical: "/warranty-and-insurance/" },
};

/** Warranty & insurance: what protects you, item by item, then questions. */
export default function WarrantyPage() {
  return (
    <>
      <PageHero hero={w.hero} />
      <section className="relative bg-white py-section">
        <div className="container-x">
          <SectionHeading label={w.intro.label} title={w.intro.title} intro={w.intro.text} />
          <Reveal as="ul" stagger={0.08} className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:gap-6">
            {w.items.map((item, i) => (
              <li key={item.title} className={cn("rounded-[6px] p-7 lg:p-9", i === 0 ? "bg-purple text-white" : "bg-cream-50 ring-1 ring-purple/8")}>
                <span className={cn("font-display text-sm font-semibold tabular", i === 0 ? "text-orange" : "text-orange")}>{String(i + 1).padStart(2, "0")}</span>
                <h2 className={cn("mt-3 text-h3", i === 0 ? "text-white" : "text-purple")}>{item.title}</h2>
                <p className={cn("mt-3 text-base leading-relaxed sm:text-lg", i === 0 ? "text-white/80" : "text-ink/75")}>{item.summary}</p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((pt) => (
                    <li key={pt} className={cn("flex items-start gap-3 text-base leading-relaxed", i === 0 ? "text-white/85" : "text-ink/80")}>
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange text-white">
                        <Icon name="check" className="size-3" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
      <FaqSection faqs={w.faqs} title="Questions about warranty and insurance." />
      <FinalCta />
    </>
  );
}
