import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Testimonial } from "@/components/sections/home/Testimonial";
import { PageHero } from "@/components/sections/shared/PageHero";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `What Forefront Trades Co. clients say: video stories filmed in their finished homes, and ${site.rating.score}★ Google reviews. Renovations & Extensions in Melbourne.`,
  alternates: { canonical: "/reviews/" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        hero={{
          h1: "Forefront Trades Co. reviews",
          title: ["In our clients'", "own words."],
          intro: "Filmed in their finished homes, and left on Google. Read them before you call anyone.",
          image: { src: "/images/projects/footscray/dining.jpg", alt: "Dining area with a round timber table beside the kitchen, Footscray" },
          facts: [
            { label: "Google rating", value: `${site.rating.score} out of 5` },
            { label: "Video stories", value: "Four clients" },
            { label: "Registered Builder", value: site.registeredBuilder },
          ],
        }}
      />
      <Testimonial />
      <FinalCta />
    </>
  );
}
