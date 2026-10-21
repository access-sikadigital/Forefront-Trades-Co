/**
 * Suburb pages (Sitemap "Suburb Pages" sheet): 92 pages across 42 suburbs, read
 * straight from routes.ts so the URL list has one source. Local detail lives in
 * suburb-local.ts; the service angle and price factors come from the pillar page.
 */
import { routes } from "@/config/routes";
import { publicProjects } from "@/content/projects";
import { suburbLocal, type SuburbService } from "@/content/suburb-local";
import { servicePages, type ServiceSlug } from "@/content/services";

export type SuburbPageRef = { service: SuburbService; suburb: string; path: string; keyword: string | null; tier: 1 | 2 | 3 };

export const suburbPages: SuburbPageRef[] = routes
  .filter((r) => r.section === "Suburbs")
  .map((r) => {
    const [service, suburb] = r.path.split("/").filter(Boolean) as [SuburbService, string];
    return { service, suburb, path: r.path, keyword: r.keyword, tier: r.tier };
  });

/** Which pillar each suburb page type belongs to. */
export const pillarFor: Record<SuburbService, ServiceSlug> = {
  "home-renovations": "home",
  "home-extensions": "extensions",
  "bathroom-renovations": "bathroom",
  "kitchen-renovations": "kitchen",
  "laundry-renovations": "laundry",
};

export const serviceLabel: Record<SuburbService, string> = {
  "home-renovations": "Home Renovations & Extensions",
  "home-extensions": "Home extensions",
  "bathroom-renovations": "Bathroom renovations",
  "kitchen-renovations": "Kitchen renovations",
  "laundry-renovations": "Laundry renovations",
};

export const pillarPage = (service: SuburbService) => servicePages[pillarFor[service]];

export const titleCase = (slug: string) => slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
export const suburbName = (slug: string) => suburbLocal[slug]?.name ?? titleCase(slug);

export const pagesForSuburb = (suburb: string) => suburbPages.filter((p) => p.suburb === suburb);
export const suburbHubPath = (suburb: string) => `/home-renovations/${suburb}/`;
export const findSuburbPage = (service: SuburbService, suburb: string) => suburbPages.find((p) => p.service === service && p.suburb === suburb);

/**
 * Nearest photographed jobs, by council. Said plainly on the page ("our nearest
 * photographed jobs"), never presented as work in that suburb (Page Blueprint §2).
 */
const nearestByCouncil: Record<string, string[]> = {
  Maribyrnong: ["footscray", "west-footscray"],
  "Moonee Valley": ["footscray", "west-footscray"],
  "Merri-bek": ["footscray", "west-footscray"],
  "Hobsons Bay": ["altona", "footscray"],
  Brimbank: ["west-footscray", "footscray"],
  "City of Melbourne": ["footscray", "west-footscray"],
};

export const nearestProjects = (suburb: string) => {
  const council = suburbLocal[suburb]?.council ?? "Maribyrnong";
  const slugs = (nearestByCouncil[council] ?? ["footscray"]).filter((s) => s !== suburb);
  return slugs.map((s) => publicProjects.find((p) => p.slug === s)).filter((p) => p !== undefined);
};
