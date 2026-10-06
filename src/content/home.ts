/**
 * Home page content. Structure follows the Page Blueprint (Sitemap v2):
 * Hero → Proof → Services → Design & Construct → Process → Projects →
 * Guarantees → Reviews → Areas → Guides → Enquiry.
 * Primary keyword for "/": "renovation builders melbourne" (720/mo, KD 22).
 * Voice — Say: lifestyle alignment, breathtaking transformations, uncompromising
 * quality, seamless design, pride of ownership. Never: cheap, affordable, best price.
 */

export const hero = {
  eyebrow: "Renovation & extension builders · Melbourne",
  // Rendered as the page <h1>
  title: ["Homes, extended", "& transformed."],
  intro:
    "Melbourne's design & construct builder for luxury extensions and renovations. One team from first sketch to handover, at a fixed price, on time.",
  primaryCta: { label: "Book a consultation", href: "/book-a-consultation/" },
  secondaryCta: { label: "View our projects", href: "/projects/" },
  video: {
    sources: [
      { src: "/videos/hero-720.mp4", media: "(max-width: 900px)" },
      { src: "/videos/hero-1080.mp4" },
    ],
    poster: "/images/hero-poster.jpg",
  },
};

export const statement = {
  label: "Since the 1990s",
  title: "Three decades. One team.",
  text: "For over thirty years we've been reshaping Melbourne homes — Victorian cottages, Californian bungalows, post-war brick — into places that fit the way their owners live now. Design, permits and construction, handled by one team who answer for all of it.",
  link: { label: "Our story", href: "/about/" },
  image: { src: "/images/team/team-van.jpg", alt: "The Forefront Trades Co. team outside a completed renovation in Footscray" },
  detail: { src: "/images/projects/altona/kitchen.jpg", alt: "Galley kitchen with integrated oven, Altona" },
  badge: "Since the 1990s · Design · Construct · ",
};

export const stats = [
  { value: 30, suffix: "+", label: "Years building in Melbourne" },
  { value: 7, suffix: "yr", label: "Construction warranty" },
  { value: 4.9, suffix: "★", decimals: 1, label: "Google rating" },
  { value: 42, suffix: "", label: "Suburbs across Melbourne's west & north" },
];

export const services = [
  {
    index: "01",
    title: "Home extensions",
    href: "/home-extensions/",
    summary:
      "Second storey and ground floor extensions designed around how you live — engineered, permitted and built by one team.",
    tags: ["Second storey", "Ground floor", "Rear extensions"],
    image: { src: "/images/projects/footscray/rear-extension.jpg", alt: "Rear extension with pool in Footscray" },
    tone: "purple",
  },
  {
    index: "02",
    title: "Full home renovations",
    href: "/home-renovations/",
    summary:
      "Whole-home transformations staged with care, so the result feels effortless and the process never overwhelms.",
    tags: ["Period homes", "Open-plan living", "Staged builds"],
    image: { src: "/images/projects/footscray/open-living.jpg", alt: "Light-filled open-plan living room" },
    tone: "ink",
  },
  {
    index: "03",
    title: "Kitchen renovations",
    href: "/kitchen-renovations/",
    summary: "Open-plan kitchens, butler's pantries and joinery detailed to the millimetre — the heart of the home, done properly.",
    tags: ["Butler's pantry", "Custom joinery", "Open plan"],
    image: { src: "/images/projects/footscray/kitchen-dining.jpg", alt: "White kitchen with timber dining setting" },
    tone: "amethyst",
  },
  {
    index: "04",
    title: "Bathroom renovations",
    href: "/bathroom-renovations/",
    summary: "Main bathrooms, ensuites and powder rooms with waterproofing done right and finishes that age beautifully.",
    tags: ["Ensuites", "Freestanding baths", "Waterproofing"],
    image: { src: "/images/projects/footscray/bathroom-vanity.jpg", alt: "Bathroom vanity with brushed brass tapware" },
    tone: "coral",
  },
  {
    index: "05",
    title: "Heritage renovations",
    href: "/heritage-renovations/",
    summary: "Period homes renovated with respect for what's there — and the planning know-how heritage overlays demand.",
    tags: ["Heritage overlays", "Victorian & Edwardian", "Restorations"],
    image: { src: "/images/projects/footscray/facade.jpg", alt: "Restored weatherboard facade with picket fence" },
    tone: "orange",
  },
] as const;

export const designConstruct = {
  label: "Design & Construct",
  title: "Every discipline, under one roof.",
  intro:
    "No juggling architects, drafters, engineers and builders. Every discipline sits under one roof and one fixed-price contract — so decisions are joined up and nothing falls between the cracks.",
  pillars: [
    {
      title: "Interior design",
      text: "Layouts, finishes and selections, resolved before a single wall comes down.",
      icon: "chair",
      image: { src: "/images/projects/footscray/living.jpg", alt: "Styled living room with herringbone floors" },
    },
    {
      title: "Architecture & drafting",
      text: "Concept to construction drawings, shaped by what's buildable and what's on budget.",
      icon: "architecture",
      image: { src: "/images/projects/footscray/facade-angle.jpg", alt: "Weatherboard period home facade" },
    },
    {
      title: "Engineering & permits",
      text: "Structural engineering, planning and building permits — lodged and managed for you.",
      icon: "license",
      image: { src: "/images/projects/footscray/rear-extension.jpg", alt: "Two-storey weatherboard rear extension, Footscray" },
    },
    {
      title: "Construction",
      text: "Registered builder, our own site leads, and a schedule we're prepared to guarantee.",
      icon: "handyman",
      image: { src: "/images/team/founders.jpg", alt: "Forefront Trades Co. founders" },
    },
  ],
  promise: ["One team", "One contract", "One point of contact"],
  link: { label: "How design & construct works", href: "/design-and-construct/" },
};

export const process = [
  { step: "01", title: "Consultation", time: "Week 1", text: "We meet on site, listen, and talk honestly about scope, budget and timing." },
  { step: "02", title: "Design", time: "2–6 weeks", text: "Concepts, interior selections and a detailed fixed-price proposal." },
  { step: "03", title: "Permits", time: "Varies by council", text: "Engineering, planning and building permits handled end to end." },
  { step: "04", title: "Build", time: "4 weeks – 6 months", text: "Single rooms in 4–6 weeks; full homes in 3–6 months. One site lead throughout." },
  { step: "05", title: "Handover", time: "Day one of the rest", text: "A walkthrough, a clean home and warranties that keep working after we leave." },
];

/**
 * Masonry gallery: real handover photography, laid out in three columns
 * (column 2 sits lower). "ratio" is the frame aspect (w/h) — images crop to fit.
 */
export const projects = {
  label: "Selected projects",
  title: "Proof, suburb by suburb.",
  intro: "Real homes across Melbourne's west and north — photographed on handover day.",
  link: { label: "All projects", href: "/projects/" },
  columns: [
    [
      {
        suburb: "Footscray",
        title: "Weatherboard reborn",
        scope: "Full renovation · Rear extension · Pool",
        image: { src: "/images/projects/footscray/pool-extension.jpg", alt: "Rear extension and plunge pool, Footscray" },
        ratio: 4 / 5,
        href: "/projects/footscray/",
      },
      {
        suburb: "Altona",
        title: "Monochrome calm",
        scope: "Bathroom · Powder room",
        image: { src: "/images/projects/altona/vanity.jpg", alt: "Black curved vanity with terrazzo, Altona" },
        ratio: 3 / 4,
        href: "/projects/altona/",
      },
      {
        suburb: "Footscray",
        title: "Light, layered living",
        scope: "Kitchen · Living · Herringbone floors",
        image: { src: "/images/projects/footscray/kitchen.jpg", alt: "Kitchen and dining with herringbone timber floor" },
        ratio: 4 / 3,
        href: "/projects/footscray/",
      },
    ],
    [
      {
        suburb: "Craigieburn",
        title: "The resort at home",
        scope: "Full transformation · Indoor pool",
        image: { src: "/images/compare/craigieburn-kitchen-after.jpg", alt: "Stone island kitchen, Craigieburn" },
        ratio: 4 / 3,
        href: "/projects/craigieburn/",
      },
      {
        suburb: "Footscray",
        title: "Soft brass & stone",
        scope: "Main bathroom · Ensuite",
        image: { src: "/images/projects/footscray/bathroom-vanity.jpg", alt: "Bathroom vanity with brushed brass tapware, Footscray" },
        ratio: 4 / 5,
        href: "/projects/footscray/",
      },
      {
        suburb: "Altona",
        title: "Lit like a gallery",
        scope: "Ensuite · Feature lighting",
        image: { src: "/images/projects/altona/feature-lights.jpg", alt: "Vertical LED feature lights in a white tiled shower, Altona" },
        ratio: 2 / 3,
        href: "/projects/altona/",
      },
    ],
    [
      {
        suburb: "Footscray",
        title: "Open to the garden",
        scope: "Living · Alfresco",
        image: { src: "/images/projects/footscray/open-living.jpg", alt: "Light-filled open-plan living, Footscray" },
        ratio: 1,
        href: "/projects/footscray/",
      },
      {
        suburb: "Footscray",
        title: "Street presence",
        scope: "Facade restoration · Landscaping",
        image: { src: "/images/projects/footscray/facade.jpg", alt: "Restored weatherboard facade with picket fence, Footscray" },
        ratio: 4 / 5,
        href: "/projects/footscray/",
      },
    ],
  ],
};

export const beforeAfter = {
  label: "Before / After",
  title: "Same room. Different life.",
  text: "A tired two-storey in Craigieburn, reworked from the frame out — new kitchen, joinery, wall panelling and lighting. Drag to compare.",
  before: { src: "/images/compare/craigieburn-dining-before.jpg", alt: "Craigieburn dining and kitchen during construction" },
  after: { src: "/images/compare/craigieburn-dining-after.jpg", alt: "Craigieburn dining and kitchen after renovation" },
  link: { label: "See the Craigieburn project", href: "/projects/craigieburn/" },
};

export const guarantees = [
  { icon: "attach_money", title: "Fixed price", text: "A detailed, fixed-price contract. No moving goalposts once we start." },
  { icon: "timer", title: "On-time guarantee", text: "A committed completion date — and we stand behind it." },
  { icon: "license", title: "7-year construction warranty", text: "Structural workmanship covered for seven years." },
  { icon: "handyman", title: "3-year maintenance warranty", text: "We come back for the small things, too." },
  { icon: "gavel", title: "Registered Builder", text: "Victorian Registered Builder CDBU76389, fully insured." },
];

export const offer = {
  // TODO(client): confirm primary offer — complimentary interior design vs free consultation (Open Question #5)
  label: "Included with design & construct",
  amount: 10000,
  amountPrefix: "up to",
  title: "of interior design, on us.",
  text: "Build with us and our in-house interior designer shapes the look and feel of your home with you — before a single wall comes down.",
  // Derived from the brief ("layouts, finishes and selections") — TODO(client): confirm exact inclusions.
  inclusions: ["Layouts & space planning", "Finishes & materials", "Fixtures & fittings selections"],
  note: "For new design & construct projects",
  cta: { label: "Claim your design consult", href: "/book-a-consultation/" },
  image: { src: "/images/team/designer.jpg", alt: "Forefront Trades Co. interior designer" },
  caption: "Your interior designer",
};

export const testimonial = {
  label: "Client stories",
  title: "Hear it from the homeowners.",
  video: { src: "/videos/testimonial-brookfield.mp4", poster: "/images/testimonial-brookfield-poster.jpg" },
  name: "Brookfield homeowner",
  project: "28 Moonah Ave, Brookfield",
  link: { label: "Read our Google reviews", href: "/reviews/" },
};

export const areas = {
  label: "Where we build",
  title: "Melbourne's inner west & north.",
  text: "42 suburbs across Maribyrnong, Moonee Valley, Brimbank, Hobsons Bay, Merri-bek and the City of Melbourne — from our base in Maribyrnong.",
  link: { label: "All areas we service", href: "/areas/" },
  // Tier-1 suburb hubs (launch) lead; the rest follow in rollout order.
  suburbs: [
    { name: "Brunswick", href: "/home-renovations/brunswick/" },
    { name: "Yarraville", href: "/home-renovations/yarraville/" },
    { name: "Essendon", href: "/home-renovations/essendon/" },
    { name: "Newport", href: "/home-renovations/newport/" },
    { name: "Maribyrnong", href: "/home-renovations/maribyrnong/" },
    { name: "Moonee Ponds", href: "/home-renovations/moonee-ponds/" },
    { name: "Ascot Vale", href: "/home-renovations/ascot-vale/" },
    { name: "Footscray", href: "/home-renovations/footscray/" },
    { name: "Pascoe Vale", href: "/home-renovations/pascoe-vale/" },
    { name: "Seddon", href: "/home-renovations/seddon/" },
    { name: "Spotswood", href: "/home-renovations/spotswood/" },
    { name: "Kensington", href: "/home-renovations/kensington/" },
    { name: "Flemington", href: "/home-renovations/flemington/" },
    { name: "Sunshine", href: "/home-renovations/sunshine/" },
    { name: "Albion", href: "/home-renovations/albion/" },
    { name: "Kingsville", href: "/home-renovations/kingsville/" },
  ],
};

export const guides = {
  label: "Renovation guides",
  title: "Know the numbers before you start.",
  link: { label: "All guides", href: "/guides/" },
  items: [
    {
      title: "How much does a home extension cost in Melbourne?",
      href: "/guides/home-extension-cost-melbourne/",
      tag: "Cost",
      image: { src: "/images/projects/footscray/rear-alfresco.jpg", alt: "Rear extension and alfresco" },
    },
    {
      title: "Kitchen renovation costs in Melbourne (2026)",
      href: "/guides/kitchen-renovation-cost-melbourne/",
      tag: "Cost",
      image: { src: "/images/projects/footscray/kitchen-galley.jpg", alt: "Galley kitchen with gas cooktop" },
    },
    {
      title: "Renovating under a heritage overlay in Melbourne",
      href: "/guides/renovating-under-a-heritage-overlay/",
      tag: "Planning",
      image: { src: "/images/projects/footscray/facade-angle.jpg", alt: "Weatherboard period home facade" },
    },
  ],
};

export const finalCta = {
  label: "Start your project",
  title: ["Let's build", "what's next."],
  text: "Tell us about your home and what you'd like it to become. We'll come to you for a no-obligation design consultation.",
  primaryCta: { label: "Book a consultation", href: "/book-a-consultation/" },
};
