import { Reveal } from "@/components/motion/Reveal";
import { PriceTable } from "@/components/sections/shared/PriceTable";
import { TextLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { priceCopy } from "@/content/pricing";

/** Homepage price guide: every published starting price in one table. */
export function PriceGuide() {
  return (
    <section className="relative bg-white py-section">
      <div className="container-x">
        <SectionHeading label="Renovation guide" title="Starting prices at a glance." intro={priceCopy.qualifier} />
        <Reveal className="mt-10 lg:mt-14">
          <PriceTable rooms={["main", "ensuite", "powder", "kitchen", "laundry"]} caption="Starting prices by range, incl. GST" />
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/65">
            All figures include GST; each service page also shows the price before GST. Full-home renovations, extensions and heritage restoration are priced after a
            consultation. {priceCopy.photos}
          </p>
        </Reveal>
        <Reveal stagger={0.08} className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          <div>
            <TextLink href="/design-and-construct/">How design and construct works</TextLink>
          </div>
          <div>
            <TextLink href="/faqs/">Common questions</TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
