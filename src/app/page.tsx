import type { Metadata } from "next";
import { CopySections } from "@/components/sections/shared/CopySections";
import { copyFor } from "@/content/page-copy";
import { withCopyMeta } from "@/lib/copy-meta";
import { Areas } from "@/components/sections/home/Areas";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Guarantees } from "@/components/sections/home/Guarantees";
import { Hero } from "@/components/sections/home/Hero";
import { PriceGuide } from "@/components/sections/home/PriceGuide";
import { Process } from "@/components/sections/home/Process";
import { CompletedProjects } from "@/components/sections/home/CompletedProjects";
import { Services } from "@/components/sections/home/Services";
import { Statement } from "@/components/sections/home/Statement";
import { Testimonial } from "@/components/sections/home/Testimonial";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { commonFaqs } from "@/content/pricing";

// Title and description from the client's copy set (content/page-copy.ts).
const copy = copyFor("/")!;

export const metadata: Metadata = withCopyMeta("/", { alternates: { canonical: "/" }, openGraph: { url: "/" } });

// Copy sections shown on the home page outside the ones fed into home.ts.
const designSection = copy.sections.filter((x) => x.title === "Design decisions should make building decisions easier");

export default function HomePage() {
  return (
    <>
      {/* Order follows client feedback: shorter page, service area higher up. */}
      {/* Order follows the owner's preview r5.2 (process up top, completed projects after services, prices, questions, enquiry). */}
      <Hero />
      <Process />
      <Statement />
      <Services />
      <CopySections sections={designSection} />
      <CompletedProjects />
      <PriceGuide />
      <Areas />
      <Guarantees />
      <Testimonial />
      <FaqSection faqs={[...copy.faqs, ...commonFaqs]} title="Common questions." />
      <FinalCta title={copy.cta?.title} text={copy.cta?.text} />
    </>
  );
}
