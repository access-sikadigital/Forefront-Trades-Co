import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { Testimonial } from "@/components/sections/home/Testimonial";
import { ProjectGrid } from "@/components/sections/projects/ProjectSections";
import { PageHero } from "@/components/sections/shared/PageHero";
import { publicProjects, projectsHub } from "@/content/projects";

export const metadata: Metadata = {
  title: projectsHub.meta.title,
  description: projectsHub.meta.description,
  alternates: { canonical: "/projects/" },
  openGraph: { url: "/projects/", images: [{ url: projectsHub.hero.image.src, alt: projectsHub.hero.image.alt }] },
};

/** Projects hub: every photographed job, then the clients' own videos and reviews. */
export default function ProjectsPage() {
  return (
    <>
      <PageHero hero={projectsHub.hero} />
      <ProjectGrid projects={publicProjects} />
      <Testimonial />
      <FinalCta />
    </>
  );
}
