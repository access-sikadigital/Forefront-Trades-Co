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
export const metadata: Metadata = {
  title: { absolute: "Renovation Builders Melbourne | Extensions & Renovations | Forefront Trades Co." },
  description:
    "Premium design & construct renovation and extension builders in Melbourne. Fixed price, on-time guarantee, 7-year warranty. 30+ years building across Melbourne's inner west & north.",
  alternates: { canonical: "/" },
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
