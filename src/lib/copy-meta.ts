import type { Metadata } from "next";
import { copyFor } from "@/content/page-copy";

/**
 * SEO title and description from the page's copy (content/page-copy.ts), over the
 * page's own metadata. The copy titles already end in the brand, so they're absolute.
 */
export function withCopyMeta(path: string, base: Metadata): Metadata {
  const c = copyFor(path);
  if (!c) return base;
  return {
    ...base,
    title: { absolute: c.seoTitle },
    description: c.meta,
    openGraph: { ...base.openGraph, title: c.seoTitle, description: c.meta },
  };
}
