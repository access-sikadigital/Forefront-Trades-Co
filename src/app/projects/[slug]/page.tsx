import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { BeforeAfterPairs, ProjectGallery, ProjectStory, ProjectVideo, RelatedServices } from "@/components/sections/projects/ProjectSections";
import { PageHero } from "@/components/sections/shared/PageHero";
import { projectBySlug, publicProjects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return publicProjects.map((pr) => ({ slug: pr.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const pr = projectBySlug((await props.params).slug);
  if (!pr) return {};
  const path = `/projects/${pr.slug}/`;
  return {
    title: `${pr.title}, ${pr.suburb}`,
    description: `${pr.summary} ${pr.scope.replace(/ · /g, ", ")} in ${pr.suburb}, by Forefront Trades Co.`,
    alternates: { canonical: path },
    openGraph: { url: path, images: [{ url: pr.cover.src, alt: pr.cover.alt }] },
  };
}

/** Case study: hero, what was built, before/after, gallery, related services, then the offer. */
export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const pr = projectBySlug((await props.params).slug);
  if (!pr) notFound();
  return (
    <>
      <PageHero hero={{ h1: `${pr.scope.replace(/ · /g, ", ")} in ${pr.suburb}`, title: [pr.title], intro: pr.summary, image: pr.cover, facts: pr.facts }} />
      <ProjectStory project={pr} />
      {pr.video && <ProjectVideo video={pr.video} quote={pr.quote} />}
      {pr.beforeAfter && <BeforeAfterPairs pairs={pr.beforeAfter} />}
      {pr.gallery.length > 0 && <ProjectGallery images={pr.gallery} suburb={pr.suburb} />}
      <RelatedServices hrefs={pr.services} />
      <FinalCta />
    </>
  );
}
