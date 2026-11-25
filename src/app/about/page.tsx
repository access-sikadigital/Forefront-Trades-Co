import type { Metadata } from "next";
import { CopySections } from "@/components/sections/shared/CopySections";
import { copyFor } from "@/content/page-copy";
import { withCopyMeta } from "@/lib/copy-meta";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { AboutTeam } from "@/components/sections/pages/AboutSections";
import { ServiceReviews } from "@/components/sections/service/ServiceReviews";
import { PageHero } from "@/components/sections/shared/PageHero";
import { about } from "@/content/pages";

export const metadata: Metadata = withCopyMeta("/about/", {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: "/about/" },
  openGraph: { url: "/about/", images: [{ url: about.hero.image.src, alt: about.hero.image.alt }] },
});

const copy = copyFor("/about/")!;

export default function AboutPage() {
  return (
    <>
      <PageHero hero={{ ...about.hero, title: [copy.h1], intro: copy.intro.join(" ") }} />
      <CopySections sections={copy.sections} />
      <AboutTeam />
      <ServiceReviews />
      <FinalCta title={copy.cta?.title} text={copy.cta?.text} />
    </>
  );
}
