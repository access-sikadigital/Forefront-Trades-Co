import { site } from "@/config/site";

/** LocalBusiness / GeneralContractor schema for every page. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/brand/logo/primary-dark.svg`,
    image: `${site.url}/images/projects/footscray/pool-extension.jpg`,
    description: site.description,
    telephone: site.phone.display,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: "AU",
    },
    areaServed: ["Maribyrnong", "Moonee Valley", "Brimbank", "Hobsons Bay", "Merri-bek", "City of Melbourne"].map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    hasCredential: { "@type": "EducationalOccupationalCredential", name: `Victorian Registered Builder ${site.registeredBuilder}` },
    sameAs: Object.values(site.socials),
  };
}
