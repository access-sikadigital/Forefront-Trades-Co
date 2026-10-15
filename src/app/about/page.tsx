import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { AboutStory, AboutTeam } from "@/components/sections/pages/AboutSections";
import { ServiceReviews } from "@/components/sections/service/ServiceReviews";
import { PageHero } from "@/components/sections/shared/PageHero";
import { about } from "@/content/pages";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: "/about/" },
  openGraph: { url: "/about/", images: [{ url: about.hero.image.src, alt: about.hero.image.alt }] },
};

export default function AboutPage() {
  return (
    <>
      <PageHero hero={about.hero} />
      <AboutStory />
      <AboutTeam />
      <ServiceReviews />
      <FinalCta />
    </>
  );
}
