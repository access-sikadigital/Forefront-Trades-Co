import type { Metadata } from "next";
import { BlogList } from "@/components/sections/blog/BlogSections";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { blogHub, posts } from "@/content/blog";

export const metadata: Metadata = {
  title: blogHub.meta.title,
  description: blogHub.meta.description,
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero hero={blogHub.hero}>{null}</PageHero>
      <BlogList posts={posts} />
      <FinalCta />
    </>
  );
}
