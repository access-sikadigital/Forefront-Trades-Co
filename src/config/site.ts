/**
 * Global site facts. Source: Keyword Map & Sitemap v2 (Sika Digital, 2 Oct 2026)
 * and the Builder FAQs. Anything marked TODO is an open question with the client.
 */
export const site = {
  name: "Forefront Trades Co.",
  shortName: "Forefront",
  url: "https://www.forefronttrades.com.au",
  description:
    "Melbourne's premium design & construct renovation and extension builder. One team from design to handover, at a fixed price, on time. 30+ years of Melbourne building.",
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

export const mainNav: NavItem[] = [
  {
    label: "Extensions",
    href: "/home-extensions/",
    children: [
      { label: "Home extensions", href: "/home-extensions/" },
      { label: "Second storey extensions", href: "/home-extensions/second-storey/" },
      { label: "Ground floor extensions", href: "/home-extensions/ground-floor/" },
    ],
  },
  {
    label: "Renovations",
    href: "/home-renovations/",
    children: [
      { label: "Full home renovations", href: "/home-renovations/" },
      { label: "Kitchen renovations", href: "/kitchen-renovations/" },
      { label: "Bathroom renovations", href: "/bathroom-renovations/" },
      { label: "Laundry renovations", href: "/laundry-renovations/" },
      { label: "Heritage renovations", href: "/heritage-renovations/" },
    ],
  },
  { label: "Design & Construct", href: "/design-and-construct/" },
  { label: "Projects", href: "/projects/" },
  { label: "About", href: "/about/" },
  { label: "Guides", href: "/guides/" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Home extensions", href: "/home-extensions/" },
      { label: "Second storey extensions", href: "/home-extensions/second-storey/" },
      { label: "Home renovations", href: "/home-renovations/" },
      { label: "Kitchen renovations", href: "/kitchen-renovations/" },
      { label: "Bathroom renovations", href: "/bathroom-renovations/" },
      { label: "Laundry renovations", href: "/laundry-renovations/" },
      { label: "Heritage renovations", href: "/heritage-renovations/" },
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

export const legalNav: NavItem[] = [
  { label: "Privacy policy", href: "/privacy-policy/" },
  { label: "Terms", href: "/terms/" },
];
