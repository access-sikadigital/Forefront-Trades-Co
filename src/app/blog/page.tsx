import type { Metadata } from "next";
import { BlogList } from "@/components/sections/blog/BlogSections";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { CopySections } from "@/components/sections/shared/CopySections";
import { PageHero } from "@/components/sections/shared/PageHero";
import { blogHub, posts } from "@/content/blog";
import { copyFor } from "@/content/page-copy";

// The copy set calls this hub /guides/; the site serves it at /blog/.
const copy = copyFor("/guides/")!;

export const metadata: Metadata = {
  title: { absolute: copy.seoTitle },
  description: copy.meta,
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero hero={{ ...blogHub.hero, title: [copy.h1], intro: copy.intro.join(" ") }}>{null}</PageHero>
      <BlogList posts={posts} />
      <CopySections sections={copy.sections} startTone="cream" />
      <FinalCta title={copy.cta?.title} text={copy.cta?.text} />
    </>
  );
}
