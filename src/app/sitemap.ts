import type { MetadataRoute } from "next";
import { routes } from "@/config/routes";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes
    .filter((r) => r.built && !r.noindex)
    .map((r) => ({
      url: `${site.url}${r.path}`,
      changeFrequency: r.section === "Content" ? "weekly" : "monthly",
      priority: r.path === "/" ? 1 : r.tier === 1 ? 0.8 : 0.6,
    }));
}
