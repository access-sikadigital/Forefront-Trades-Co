/**
 * Home page content — written with the Copy Engine process (research → angles →
 * de-slop → independent 36-check grade). Every claim maps to the proof ledger;
 * anything marked TODO(client) must be confirmed before launch.
 * Primary keyword for "/": "renovation builders melbourne" (720/mo, KD 22).
 * Voice: plain, direct, Australian-practical, "we"; specifics over adjectives.
 * Banned (competitor sameness): premier, transform your home, dream home,
 * quality craftsmanship, stress-free, seamless, end-to-end, under one roof (as a headline).
 */

export const hero = {
  // Rendered as the page <h1> (keyword line); the display headline below sells.
  h1: "Renovation & extension builders in Melbourne",
  // Display headline from the owner's preview r5.2 (Oct 2026).
  title: ["Design & Construct Renovations", "& Extensions Across Melbourne"],
  intro:
    "Kitchens, bathrooms, laundries, full renovations and extensions across Melbourne's inner west and north. One fixed-price contract covers design, permits and build, with the finish date written in.",
  primaryCta: { label: "Explore our services", href: "#services" },
  secondaryCta: { label: "Book a consultation", href: "/book-a-consultation/" },
  // TODO(client): confirm 4.9★ (public widget shows 39 reviews). Master Builders Victoria membership is stated in the owner's preview r5.2.
  proof: ["Registered Builder CDBU76389", "Master Builders Victoria member", "4.9★ from 39 Google reviews"],
  video: {
    sources: [
      { src: "/videos/hero-720.mp4", media: "(max-width: 900px)" },
      { src: "/videos/hero-1080.mp4" },
    ],
    poster: "/images/hero-poster.jpg",
  },
};

export const statement = {
  label: "Why homeowners call us",
  title: "Achieve your dream renovation. On time and on budget.",
  text: [
    "Quotes that blow out. A final price that only exists in an email. Tradies who don't show, and nobody who can say when they will.",
    "We work the other way: a fixed price, and a finish date agreed up front.",
  ],
  quote: { text: "We were kept in the loop as to the day and time each tradie would be onsite.", name: "Chris Williams", source: "Google review" },
  link: { label: "Read our story", href: "/about/" },
  image: { src: "/images/projects/footscray/kitchen-dining.jpg", alt: "Open-plan kitchen and dining with herringbone timber floors, Footscray" },
  detail: { src: "/images/projects/altona/kitchen.jpg", alt: "Galley kitchen with integrated oven, Altona" },
  badge: "30+ years · Design · Construct · ",
};

// TODO(client): confirm 360+ (from the current site's counter) and the 4.9★ rating.
export const stats = [
  { value: 30, suffix: "+", label: "Years building in Melbourne" },
  { value: 360, suffix: "+", label: "Completed projects" },
  { value: 4.9, suffix: "★", decimals: 1, label: "Google rating" },
  { value: 7, suffix: "yr", label: "Construction warranty" },
];

export const servicesHeading = {
  label: "What we build",
  title: "From a new laundry to a second storey.",
  // Starting prices: see PriceGuide / content/pricing.ts (owner preview r5.2).
  intro: "Every job goes on a fixed-price contract. Single rooms take 4–6 weeks on site. Full homes take 3–6 months.",
  link: { label: "All services", href: "/home-renovations/" },
};

// Service order is fixed by the client: kitchen → bathroom → laundry → full home → extensions → heritage.
export const services = [
  {
    index: "01",
    title: "Kitchen renovations",
    href: "/kitchen-renovations/",
    summary: "Storage worked out at design stage: butler's pantries like the two we built in Craigieburn, internal bins, spice racks and profiled cabinetry.",
    tags: ["Butler's pantry", "Custom joinery", "Open plan"],
    image: { src: "/images/projects/footscray/kitchen-dining.jpg", alt: "White kitchen with timber dining setting" },
    tone: "purple",
  },
  {
    index: "02",
    title: "Bathroom renovations",
    href: "/bathroom-renovations/",
    summary: "Ensuites, main bathrooms and powder rooms. In West Footscray we redid three bathrooms, the laundry and the drainage in one job.",
    tags: ["Ensuites", "Freestanding baths", "Waterproofing"],
    image: { src: "/images/projects/footscray/bathroom-vanity.jpg", alt: "Bathroom vanity with brushed brass tapware" },
    tone: "cream",
  },
  {
    index: "03",
    title: "Laundry renovations",
    href: "/laundry-renovations/",
    summary: "Joinery built around how you use the room, down to a built-in ironing board.",
    tags: ["Storage", "Stone benchtops", "Tiling"],
    image: { src: "/images/projects/footscray/laundry.jpg", alt: "Laundry with brushed brass tap, sage tiles and white stone bench, Footscray" },
    tone: "deep",
  },
  {
    index: "04",
    title: "Full home renovations",
    href: "/home-renovations/",
    summary: "Period homes and whole-house renovations, staged where it helps. At the first visit we'll tell you how long you'd be without a kitchen or bathroom.",
    tags: ["Period homes", "Open-plan living", "Staged builds"],
    image: { src: "/images/projects/footscray/open-living.jpg", alt: "Light-filled open-plan living room" },
    tone: "orange",
  },
  {
    index: "05",
    title: "Home extensions",
    href: "/home-extensions/",
    summary: "Second storey or ground floor. We handle the engineering, steel and permits on the same contract as the build.",
    tags: ["Second storey", "Ground floor", "Rear extensions"],
    image: { src: "/images/projects/footscray/rear-extension.jpg", alt: "Rear extension with pool in Footscray" },
    tone: "purple",
  },
  {
    index: "06",
    title: "Heritage restorations",
    href: "/heritage-renovations/",
    summary: "Victorian and Edwardian homes under heritage overlays. We keep what council protects and rebuild what's failing behind it.",
    tags: ["Heritage overlays", "Victorian & Edwardian", "Restorations"],
    image: { src: "/images/projects/footscray/facade.jpg", alt: "Restored weatherboard facade with picket fence" },
    tone: "deep",
  },
] as const;

export const designConstruct = {
  label: "Design & Construct",
  title: "One team, from start to finish",
  intro:
    "We manage the interior design, drawings, engineering, permits and build. You get one fixed-price contract, and one team to ask when something needs deciding.",
  pillars: [
    {
      title: "Interior design",
      text: "Finishes and selections settled at design stage and priced into the build.",
      icon: "chair",
      image: { src: "/images/projects/footscray/living.jpg", alt: "Styled living room with herringbone floors" },
    },
    {
      title: "Architecture & drafting",
      text: "Drafting down to the steel-beam details, like the double-storey extension we built in Bundoora.",
      icon: "architecture",
      image: { src: "/images/projects/footscray/facade.jpg", alt: "Weatherboard home facade with picket fence, Footscray" },
    },
    {
      title: "Engineering & permits",
      text: "Structural engineering, planning and building permits, lodged and followed up by us.",
      icon: "license",
      image: { src: "/images/projects/footscray/rear-extension.jpg", alt: "Two-storey weatherboard rear extension, Footscray" },
    },
    {
      title: "Construction",
      text: "Registered Builder CDBU76389, building in Melbourne for more than 30 years.",
      icon: "handyman",
      image: { src: "/images/team/founders.jpg", alt: "Forefront Trades Co. founders" },
    },
  ],
  // TODO(client): "Interior design included" depends on confirming the offer (Open Question #5).
  promise: ["Interior design included", "Changes priced before they're added", "Finish date in the contract"],
  link: { label: "How design & construct works", href: "/design-and-construct/" },
};

export const processHeading = {
  // Absorbs the old Design & Construct section (removed to shorten the page).
  // Stages and wording follow the owner's preview r5.2 (Oct 2026).
  label: "Our process",
  title: "Design, construct, handover",
  intro: "From the first drawings to the final walkthrough, with two checkpoints before building. Choose a stage.",
  link: { label: "See the full process, step by step", href: "/design-and-construct/" },
};

// Four stages, as in the owner's preview r5.2: choose a stage to see what it covers.
export const process = [
  {
    step: "1",
    title: "Design",
    heading: "Design: drafted and selected before it\u2019s priced to build",
    points: [
      { title: "Brief and concept", text: "What you want to change, measured and drawn." },
      { title: "Selections", text: "Fixtures, fittings and finishes chosen with you." },
      { title: "Architectural drafting", text: "Plans, elevations and set-out documented." },
      { title: "Final estimate", text: "Priced from the documented scope." },
    ],
    // Generated atmosphere image (not a Forefront project).
    image: { src: "/images/generated/design-construct-hero.jpg", alt: "Renovation plans with tile, timber, stone and tapware samples on a design table" },
    caption: "Illustrative: plans and selections, not a client\u2019s home.",
  },
  {
    step: "2",
    title: "Contract and pre-construction readiness",
    heading: "Contract, then everything ready to start",
    points: [
      { title: "Contract preparation", text: "Scope, drawings, selections and price in one package you review before signing." },
      { title: "Approvals", text: "Building or planning approvals and reports, if the project needs them." },
      { title: "Scheduling", text: "Materials pre-purchased, trades booked, and start and end dates allocated." },
      { title: "Site preparation", text: "Access, parking and protection agreed." },
    ],
    image: { src: "/images/team/builders-van.jpg", alt: "Two of the Forefront team beside the company van", position: "50% 42%" },
    caption: "Contract signed, trades booked: the team ready to start on site.",
  },
  {
    step: "3",
    title: "Construct",
    heading: "Construct: built in stages, each checked before it\u2019s covered",
    // TODO(client): confirm a project WhatsApp group runs on every job.
    points: [
      { title: "Built in stages", text: "Each stage is checked before it\u2019s covered." },
      { title: "Trades run for you", text: "We book and run every trade on site." },
      { title: "Kept in the loop", text: "Nicole in Brookfield had a WhatsApp group with our team and called it \u201Cvery, very important\u201D." },
      { title: "Your timeframe", text: "Your programme, with dates, is set out in your contract." },
    ],
    image: { src: "/images/compare/craigieburn-kitchen-before.jpg", alt: "Kitchen during construction, Craigieburn" },
    caption: "Craigieburn kitchen, during construction.",
  },
  {
    step: "4",
    title: "Handover",
    heading: "Handover: walked through with you",
    points: [
      { title: "Final walkthrough", text: "The finished work inspected together." },
      { title: "Outstanding items", text: "Listed, with how and when they\u2019ll be closed out." },
      { title: "Final clean", text: "Before you move back in." },
      { title: "Handover pack", text: "Certificates that apply, product and care information." },
    ],
    image: { src: "/images/compare/craigieburn-kitchen-after.jpg", alt: "Finished stone island kitchen with timber cabinetry, Craigieburn" },
    caption: "The same Craigieburn kitchen, finished.",
  },
];

export const guaranteesHeading = {
  label: "Our guarantees",
  title: "What's written into your contract.",
  // TODO(client): if both warranties are also in the contract, say so here.
  intro: "The fixed price and the finish date are written into your contract. Ask us to show you where.",
  proof: { text: "The project was completed on time and really quickly.", name: "Nicole Brown", source: "Brookfield" },
  link: { label: "Warranty & insurance", href: "/warranty-and-insurance/" },
};

// TODO(client): confirm on-time guarantee terms and the scope of the 3-year maintenance warranty.
export const guarantees = [
  // TODO(client): list contract exclusions (provisional sums, latent conditions) if any.
  { icon: "attach_money", title: "Fixed price", text: "The price you sign covers the agreed scope. Change the scope and we price it for your approval first." },
  // TODO(client): add the remedy if the date is missed (e.g. $X per day) — strongest possible proof here.
  // Retitled from "On-time guarantee": no remedy is confirmed, and "guarantee" without terms is an ACL risk. Restore once the remedy is in.
  { icon: "timer", title: "Finish date in your contract", text: "Your completion date is written into the contract you sign, not just quoted in an email." },
  // TODO(client): state what each warranty covers (e.g. structural and workmanship defects).
  { icon: "license", title: "7-year construction warranty", text: "Seven years on the construction work, from a Registered Builder." },
  { icon: "handyman", title: "3-year maintenance warranty", text: "Three years of maintenance cover once the job is handed over." },
  { icon: "gavel", title: "If a builder goes under", text: "Jobs over $16,000 carry domestic building insurance, which protects you if a builder dies, disappears or becomes insolvent. Registered Builder CDBU76389." },
];

export const offer = {
  // TODO(client): confirm primary offer — complimentary interior design vs free consultation (Open Question #5)
  label: "Included with design & construct",
  amount: 10000,
  amountPrefix: "up to",
  title: "of interior design, on us.",
  // Interior design is delivered with partner studios (AD Lawson Designs / AJL Studio per project reels) — not "in-house".
  text: "Build with us and you'll work through layouts, finishes and selections with the interior designers we partner with. Everything you choose is priced into your fixed price from the start.",
  // Derived from the brief ("layouts, finishes and selections") — TODO(client): confirm exact inclusions.
  inclusions: ["Layouts & space planning", "Finishes & materials", "Fixtures & fittings selections"],
  note: "On new design & construct projects",
  cta: { label: "Book a free consultation", href: "/book-a-consultation/" },
  image: { src: "/images/team/interior-designer-kitchen.jpg", alt: "Interior designer standing in a finished white kitchen with timber dining table" },
  caption: "Interior design, included",
};

// Quotes transcribed verbatim from the clients' own video testimonials (content library reels).
// TODO(client): confirm permission to publish names alongside quotes.
export const testimonial = {
  label: "Client stories",
  title: "What our clients say",
  intro: "Filmed in their finished homes. Press play.",
  link: { label: "Read our Google reviews", href: "/reviews/" },
  // Quotes are verbatim lines from each client's own video.
  // Order set by the client: Nicole first.
  videos: [
    {
      src: "/videos/testimonial-brookfield.mp4",
      preview: "/videos/preview-brookfield.mp4",
      poster: "/images/testimonial-nicole-poster.jpg",
      duration: "0:58",
      name: "Nicole Brown",
      project: "Laundry & kitchen · Brookfield",
      quote: "The project was completed on time and really quickly.",
    },
    {
      src: "/videos/testimonial-sabana-oam.mp4",
      preview: "/videos/preview-sabana-oam.mp4",
      poster: "/images/testimonial-sabana-oam-poster.jpg",
      duration: "1:07",
      name: "Sabana & Oam",
      project: "Home renovation",
      quote: "When we encountered challenges, there was always a solution.",
    },
    {
      src: "/videos/testimonial-gary.mp4",
      preview: "/videos/preview-gary.mp4",
      poster: "/images/testimonial-gary-poster.jpg",
      duration: "0:42",
      name: "Gary",
      project: "Internal renovation · Point Cook",
      quote: "They delivered what they said they were going to deliver.",
    },
    {
      src: "/videos/testimonial-cassandra.mp4",
      preview: "/videos/preview-cassandra.mp4",
      poster: "/images/testimonial-cassandra-poster.jpg",
      duration: "1:31",
      name: "Cassandra Fraser",
      project: "Bathrooms, laundry & drainage · West Footscray",
      quote: "They took an absolute disaster and turned it into something really beautiful.",
    },
  ],
};

export const areas = {
  label: "Where we build",
  title: "Renovation builders for Melbourne's inner west & north.",
  text: "Our base is in Maribyrnong. Most of our work is in 42 suburbs across six councils, and we take on larger jobs further out too, like Craigieburn and Point Cook.",
  link: { label: "Check your suburb", href: "/areas/" },
};

export const finalCta = {
  label: "Enquire",
  title: ["Tell us about", "your project."],
  // Steps and fees from the owner's preview r5.2 (content/pricing.ts).
  text: "A short form to start. Here's what happens next.",
  primaryCta: { label: "Book a free consultation", href: "/book-a-consultation/" },
};
