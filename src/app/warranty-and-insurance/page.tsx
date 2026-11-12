import type { Metadata } from "next";
import { CopySections } from "@/components/sections/shared/CopySections";
import { copyFor } from "@/content/page-copy";
import { withCopyMeta } from "@/lib/copy-meta";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { PageHero } from "@/components/sections/shared/PageHero";
import { warrantyPage as w } from "@/content/warranty";

export const metadata: Metadata = withCopyMeta("/warranty-and-insurance/", {
  title: w.meta.title,
  description: w.meta.description,
  alternates: { canonical: "/warranty-and-insurance/" },
});

const copy = copyFor("/warranty-and-insurance/")!;

/** Warranty & insurance: the page copy (Home Warranty, your contract, your rights), then questions. */
export default function WarrantyPage() {
  return (
    <>
      <PageHero hero={{ ...w.hero, title: [copy.h1], intro: copy.intro.join(" ") }} />
      <CopySections sections={copy.sections} />
      <FaqSection faqs={copy.faqs} title="Questions about warranty and insurance." />
      <FinalCta title={copy.cta?.title} text={copy.cta?.text} />
    </>
  );
}
