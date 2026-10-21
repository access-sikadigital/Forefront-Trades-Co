import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostBody, PostHeader } from "@/components/sections/blog/BlogSections";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { site } from "@/config/site";
import { postBySlug, posts } from "@/content/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = postBySlug((await props.params).slug);
  if (!post) return {};
  const path = `/blog/${post.slug}/`;
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, ...(post.image && { images: [{ url: post.image.src, alt: post.image.alt }] }) },
  };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const post = postBySlug((await props.params).slug);
  if (!post) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    ...(post.image && { image: `${site.url}${post.image.src}` }),
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/blog/${post.slug}/`,
  };
  return (
    <>
      <PostHeader post={post} />
      <PostBody post={post} />
      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
