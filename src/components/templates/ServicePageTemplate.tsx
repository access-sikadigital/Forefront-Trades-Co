import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { ServiceCost } from "@/components/sections/service/ServiceCost";
import { ServiceExtras } from "@/components/sections/service/ServiceExtras";
import { ServiceFocus } from "@/components/sections/service/ServiceFocus";
import { ServiceHero } from "@/components/sections/service/ServiceHero";
import { ServiceProof } from "@/components/sections/service/ServiceProof";
import { SuburbLinks } from "@/components/sections/service/SuburbLinks";
import type { SuburbService } from "@/content/suburb-local";
import { serviceExtras } from "@/content/service-extras";
import type { ServiceExtra } from "@/content/service-extras";
import { servicePages, type ServicePage, type ServiceSlug } from "@/content/services";
import { serviceJsonLd } from "@/lib/seo";

/** Metadata for a service pillar page (title gets " | Forefront Trades Co." from the layout). */
export function serviceMetadata(slug: ServiceSlug): Metadata {
  return pageMetadata(servicePages[slug]);
}

/** Metadata from any service-shaped page (pillar, sub-service or suburb page). */
export function pageMetadata(page: ServicePage, noindex = false): Metadata {
  return {
    ...(noindex && { robots: { index: false, follow: true } }),
    title: page.meta.title,
    description: page.meta.description,
    alternates: { canonical: page.path },
    openGraph: { url: page.path, ...(page.hero.image && { images: [{ url: page.hero.image.src, alt: page.hero.image.alt }] }) },
  };
}

/**
 * Service pillar page: hero → the service angle → service-specific sections → proof →
 * cost → FAQ → enquiry.
 * Only what is specific to the service, plus one closing offer. The shared process,
 * guarantees and reviews sections were dropped (client: the second half of every
 * service page repeated the same content); the hero facts carry the fixed price
 * and finish date, and each page keeps its own client quote.
 */
const suburbServiceFor: Partial<Record<ServiceSlug, SuburbService>> = {
  kitchen: "kitchen-renovations",
  bathroom: "bathroom-renovations",
  laundry: "laundry-renovations",
  home: "home-renovations",
  extensions: "home-extensions",
};

export function ServicePageTemplate({ slug }: { slug: ServiceSlug }) {
  return <ServicePageView page={servicePages[slug]} extras={serviceExtras[slug]} suburbService={suburbServiceFor[slug]} />;
}

/** The same page layout for any service-shaped page (sub-services, suburb pages). */
export function ServicePageView({ page, extras = [], suburbService }: { page: ServicePage; extras?: ServiceExtra[]; suburbService?: SuburbService }) {
  return (
    <>
      <ServiceHero page={page} />
      <ServiceFocus page={page} />
      <ServiceExtras extras={extras} />
      <ServiceProof page={page} />
      <ServiceCost page={page} />
      {suburbService && <SuburbLinks service={suburbService} />}
      <FaqSection faqs={page.faqs} path={page.path} />
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd({ name: page.name, path: page.path, description: page.meta.description, faqs: page.faqs })) }}
      />
    </>
  );
}
