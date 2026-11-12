import type { Metadata } from "next";
import { CopySections } from "@/components/sections/shared/CopySections";
import { copyFor } from "@/content/page-copy";
import { withCopyMeta } from "@/lib/copy-meta";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Testimonial } from "@/components/sections/home/Testimonial";
import { ProjectGrid } from "@/components/sections/projects/ProjectSections";
import { PageHero } from "@/components/sections/shared/PageHero";
import { publicProjects, projectsHub } from "@/content/projects";

export const metadata: Metadata = withCopyMeta("/projects/", {
  title: projectsHub.meta.title,
  description: projectsHub.meta.description,
  alternates: { canonical: "/projects/" },
  openGraph: { url: "/projects/", images: [{ url: projectsHub.hero.image.src, alt: projectsHub.hero.image.alt }] },
});

const copy = copyFor("/projects/")!;

/** Projects hub: every photographed job, then the clients' own videos and reviews. */
export default function ProjectsPage() {
  return (
    <>
      <PageHero hero={{ ...projectsHub.hero, title: [copy.h1], intro: copy.intro.join(" ") }} />
      <ProjectGrid projects={publicProjects} />
      <CopySections sections={copy.sections} startTone="cream" />
      <Testimonial />
      <FinalCta title={copy.cta?.title} text={copy.cta?.text} />
    </>
  );
}
