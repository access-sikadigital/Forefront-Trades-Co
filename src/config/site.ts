/**
 * Global site facts. Source: Keyword Map & Sitemap v2 (Sika Digital, 2 Oct 2026)
 * and the Builder FAQs. Anything marked TODO is an open question with the client.
 */
export const site = {
  name: "Forefront Trades Co.",
  shortName: "Forefront",
  url: "https://www.forefronttrades.com.au",
  description:
    "Design & construct renovation and extension builders for Melbourne's inner west and north. Fixed-price contracts with the finish date written in. 30+ years building in Melbourne.",
  // TODO(client): confirm tracked number — 1300 909 808 vs mobile (Open Question #8)
  phone: { display: "1300 909 808", href: "tel:1300909808" },
  email: "hello@forefronttrades.com.au", // TODO(client): confirm enquiry inbox
  address: {
    street: "181 Rosamond Rd",
    suburb: "Maribyrnong",
    state: "VIC",
    postcode: "3032",
    full: "181 Rosamond Rd, Maribyrnong VIC 3032",
    mapUrl: "https://maps.google.com/?q=181+Rosamond+Rd+Maribyrnong+VIC+3032",
  },
  registeredBuilder: "CDBU76389",
  rating: { score: 4.9, source: "Google" },
  socials: {
    instagram: "https://www.instagram.com/forefronttradesco/", // TODO(client): confirm handles
    facebook: "https://www.facebook.com/forefronttradesco/",
  },
} as const;

export type NavItem = { label: string; href: string; children?: NavItem[] };

// Service order is fixed by the client — keep it identical to the home page cards.
export const serviceNav: NavItem[] = [
  { label: "Kitchen renovations", href: "/kitchen-renovations/" },
  { label: "Bathroom renovations", href: "/bathroom-renovations/" },
  { label: "Laundry renovations", href: "/laundry-renovations/" },
  { label: "Full home renovations", href: "/home-renovations/" },
  { label: "Home extensions", href: "/home-extensions/" },
  { label: "Heritage restorations", href: "/heritage-renovations/" },
];

export const mainNav: NavItem[] = [
  { label: "Services", href: "/home-renovations/", children: serviceNav },
  { label: "Design & Construct", href: "/design-and-construct/" },
  { label: "Projects", href: "/projects/" },
  { label: "About", href: "/about/" },
  { label: "Guides", href: "/guides/" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Services",
    links: [
      ...serviceNav,
      { label: "Second storey extensions", href: "/home-extensions/second-storey/" },
      { label: "Ground floor extensions", href: "/home-extensions/ground-floor/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Design & Construct", href: "/design-and-construct/" },
      { label: "Projects", href: "/projects/" },
      { label: "Reviews", href: "/reviews/" },
      { label: "Warranty & insurance", href: "/warranty-and-insurance/" },
      { label: "FAQs", href: "/faqs/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Renovation guides", href: "/guides/" },
      { label: "Cost calculator", href: "/renovation-cost-calculator/" },
      { label: "Areas we service", href: "/areas/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

// Accreditation logos shown in the footer. Files live in public/brand/accreditations.
// TODO(client): confirm current HIA membership and approval to display each mark.
export const accreditations = [
  // h = display height class, tuned so wide and tall marks look the same weight.
  { name: "Registered Building Practitioner", src: "/brand/accreditations/registered-building-practitioner.png", width: 900, height: 326, h: "h-10 sm:h-12 xl:h-14" },
  { name: "Building and Plumbing Commission", src: "/brand/accreditations/bpc-logo.png", width: 822, height: 417, h: "h-12 sm:h-14 xl:h-16" },
  { name: "Housing Industry Association member", src: "/brand/accreditations/hia.png", width: 800, height: 905, h: "h-14 sm:h-16 xl:h-[4.5rem]" },
  { name: "Victorian Building Authority", src: "/brand/accreditations/vba-logo.png", width: 1320, height: 384, h: "h-9 sm:h-11 xl:h-[3.25rem]" },
] as const;

export const legalNav: NavItem[] = [
  { label: "Privacy policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
];
