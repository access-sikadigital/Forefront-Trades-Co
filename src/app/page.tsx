import type { Metadata } from "next";
import { Areas } from "@/components/sections/home/Areas";
import { BeforeAfter } from "@/components/sections/home/BeforeAfter";
import { DesignConstruct } from "@/components/sections/home/DesignConstruct";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Guarantees } from "@/components/sections/home/Guarantees";
import { Guides } from "@/components/sections/home/Guides";
import { Hero } from "@/components/sections/home/Hero";
import { Offer } from "@/components/sections/home/Offer";
import { Process } from "@/components/sections/home/Process";
import { Projects } from "@/components/sections/home/Projects";
import { Services } from "@/components/sections/home/Services";
import { Statement } from "@/components/sections/home/Statement";
import { Testimonial } from "@/components/sections/home/Testimonial";

// Primary keyword: "renovation builders melbourne" (Sitemap v2)
// Title 52/60 chars · description 154/155 chars (counted). Keyword first; the hero promise is the click reason.
const title = "Renovation Builders Melbourne | Forefront Trades Co.";
const description =
  "Renovation & extension builders for Melbourne's inner west & north. Your fixed price and finish date go in the contract. 4.9★ on Google. Free first visit.";

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
    description: "Renovation & extension builders for Melbourne's inner west & north. Fixed price, finish date in the contract, free first visit.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Services />
      <DesignConstruct />
      <Process />
      <Projects />
      <BeforeAfter />
      <Guarantees />
      <Offer />
      <Testimonial />
      <Areas />
      <Guides />
      <FinalCta />
    </>
  );
}
