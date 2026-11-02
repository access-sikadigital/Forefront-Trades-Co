import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { DcCompare, DcPillars } from "@/components/sections/pages/DesignConstructSections";
import { DcSteps } from "@/components/sections/pages/DcSteps";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { PageHero } from "@/components/sections/shared/PageHero";
import { designAndConstruct as dc } from "@/content/pages";
import { commonFaqs } from "@/content/pricing";

// The page's own questions, then the shared ones from the owner preview (r5.2), minus the design question it already answers.
const faqs = [...dc.faqs, ...commonFaqs.filter((f) => f.q !== "Can you help with the design?")];

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
      <DcSteps />
      <FaqSection faqs={faqs} title="Questions about design & construct." />
      <FinalCta />
    </>
  );
}
