import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Process } from "@/components/sections/home/Process";
import { DcCompare, DcPillars } from "@/components/sections/pages/DesignConstructSections";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { PageHero } from "@/components/sections/shared/PageHero";
import { designAndConstruct as dc } from "@/content/pages";

export const metadata: Metadata = {
  title: dc.meta.title,
  description: dc.meta.description,
  alternates: { canonical: dc.path },
  openGraph: { url: dc.path, images: [{ url: dc.hero.image.src, alt: dc.hero.image.alt }] },
};

/** Design & Construct: what's on the one contract, why it matters, the process, questions, then the offer. */
export default function DesignAndConstructPage() {
  return (
    <>
      <PageHero hero={dc.hero} />
      <DcPillars />
      <DcCompare />
      <Process />
      <FaqSection faqs={dc.faqs} title="Questions about design & construct." />
      <FinalCta />
    </>
  );
}
