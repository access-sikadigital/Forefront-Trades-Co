import type { Metadata } from "next";
import { CopySections } from "@/components/sections/shared/CopySections";
import { copyFor } from "@/content/page-copy";
import { withCopyMeta } from "@/lib/copy-meta";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { DcSteps } from "@/components/sections/pages/DcSteps";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { PageHero } from "@/components/sections/shared/PageHero";
import { designAndConstruct as dc } from "@/content/pages";
import { commonFaqs } from "@/content/pricing";

// Page copy (content/page-copy.ts). Its "Questions homeowners ask" section joins the FAQ instead of the body.
const copy = copyFor(dc.path)!;
const qa = copy.sections.find((x) => x.title === "Questions homeowners ask");
const body = copy.sections.filter((x) => x !== qa);
const own = (qa?.items ?? []).map((i) => ({ q: i.title, a: i.text }));

// The copy's questions, the page's own, then the shared ones from the owner preview (r5.2), minus the design question it already answers.
const faqs = [...own, ...dc.faqs, ...commonFaqs.filter((f) => f.q !== "Can you help with the design?")];

export const metadata: Metadata = withCopyMeta(dc.path, {
  title: dc.meta.title,
  description: dc.meta.description,
  alternates: { canonical: dc.path },
  openGraph: { url: dc.path, images: [{ url: dc.hero.image.src, alt: dc.hero.image.alt }] },
});

/** Design & Construct: what's on the one contract, why it matters, the process, questions, then the offer. */
export default function DesignAndConstructPage() {
  return (
    <>
      <PageHero hero={{ ...dc.hero, title: [copy.h1], intro: copy.intro.join(" ") }} />
      <CopySections sections={body} />
      <DcSteps />
      <FaqSection faqs={faqs} title="Questions about design & construct." />
      <FinalCta title={copy.cta?.title} text={copy.cta?.text} />
    </>
  );
}
