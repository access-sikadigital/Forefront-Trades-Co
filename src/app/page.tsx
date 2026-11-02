import type { Metadata } from "next";
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

// Primary keyword: "renovation builders melbourne" (Sitemap v2)
// Title 52/60 chars · description 153/155 chars (counted). Keyword first; the hero promise is the click reason.
const title = "Renovation Builders Melbourne | Forefront Trades Co.";
const description =
  "Renovation & extension builders for Melbourne's inner west & north. Your fixed price and finish date go in the contract. 4.9★ on Google. Free first call.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Melbourne's Premier Home Renovations & Extensions | Forefront Trades Co.",
    description:
      "Kitchens, bathrooms, full renovations and extensions across Melbourne's inner west & north — on a fixed-price contract with the finish date written in.",
    url: "/",
  },
  twitter: {
    title: "Melbourne's Premier Home Renovations & Extensions | Forefront Trades Co.",
    description: "Renovation & extension builders for Melbourne's inner west & north. Fixed price, finish date in the contract, free first call.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Order follows client feedback: shorter page, service area higher up. */}
      {/* Order follows the owner's preview r5.2 (process up top, completed projects after services, prices, questions, enquiry). */}
      <Hero />
      <Process />
      <Statement />
      <Services />
      <CompletedProjects />
      <PriceGuide />
      <Areas />
      <Guarantees />
      <Testimonial />
      <FaqSection faqs={commonFaqs} title="Common questions." />
      <FinalCta />
    </>
  );
}
