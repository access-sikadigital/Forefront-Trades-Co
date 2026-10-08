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
  title: ["Melbourne's Premier Home", "Renovations & Extensions"],
  intro:
    "Kitchens, bathrooms, laundries, full renovations and extensions across Melbourne's inner west and north. One fixed-price contract covers design, permits and build, with the finish date written in.",
  primaryCta: { label: "Book a free consultation", href: "/book-a-consultation/" },
  secondaryCta: { label: "View our projects", href: "/projects/" },
  // TODO(client): confirm 4.9★ (public widget shows 39 reviews) and 30+ years.
  proof: ["4.9★ from 39 Google reviews", "Registered Builder CDBU76389", "\u201CCompleted on time\u201D \u2014 Nicole, Brookfield"],
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
  title: "Achieve Your Dream Renovation. On-Time & On-Budget.",
  text: [
    "Quotes that blow out. A final price that only exists in an email. Tradies who don't show, and nobody who can say when they will.",
    "We work the other way: a fixed price, and a finish date agreed up front.",
  ],
  quote: { text: "We were kept in the loop as to the day and time each tradie would be onsite.", name: "Chris Williams", source: "Google review" },
  link: { label: "Read our story", href: "/about/" },
  image: { src: "/images/team/team-van.jpg", alt: "The Forefront Trades Co. team outside a completed renovation in Footscray" },
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
  // TODO(client): add ballpark price ranges per service (biggest gap vs competitors).
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
      image: { src: "/images/projects/footscray/facade-angle.jpg", alt: "Weatherboard period home facade" },
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
  label: "How it works",
  title: "What happens after our free consultation call",
  intro: "Five steps from first visit to handover. You see the fixed price and finish date before you sign anything to build.",
  link: { label: "Book a free consultation", href: "/book-a-consultation/" },
};

export const process = [
  { step: "01", title: "Home visit", time: "First visit, free", text: "We walk your home with you and talk budget and timing honestly, including when the numbers don't stack up." },
  // TODO(client): state the design fee (or that it's free / credited to the build) — answers "paying for plans is a gamble".
  { step: "02", title: "Design", time: "Plans & pricing", text: "Concepts, interior selections and a fixed-price proposal. You see the build price and the finish date before you commit to the build." },
  { step: "03", title: "Permits", time: "Depends on council", text: "We lodge and chase engineering, planning and building permits. If your street is under a heritage overlay, we plan for it from the first drawing." },
  // TODO(client): confirm a project WhatsApp group runs on every job.
  { step: "04", title: "Build", time: "4 weeks – 6 months", text: "We book and run every trade on site. Nicole in Brookfield had a WhatsApp group with our team and called it \u201Cvery, very important\u201D." },
  { step: "05", title: "Handover", time: "Final walkthrough", text: "A final walkthrough, a clean home and your warranty documents." },
];

/**
 * Masonry gallery: real handover photography, laid out in three columns
 * (column 2 sits lower). "ratio" is the frame aspect (w/h) — images crop to fit.
 */
export const projects = {
  label: "Recent projects",
  title: "Recent work in Footscray, Altona and Craigieburn.",
  intro: "Real projects, photographed after handover.",
  link: { label: "All projects", href: "/projects/" },
  columns: [
    [
      {
        suburb: "Footscray",
        title: "Five bedrooms, a pool and a studio",
        scope: "Full renovation · Extension · Pool",
        image: { src: "/images/projects/footscray/pool-extension.jpg", alt: "Rear extension and plunge pool, Footscray" },
        ratio: 4 / 5,
        href: "/projects/footscray/",
      },
      {
        suburb: "Altona",
        title: "Black vanity, terrazzo floor",
        scope: "Bathroom · Powder room",
        image: { src: "/images/projects/altona/vanity.jpg", alt: "Black curved vanity with terrazzo, Altona" },
        ratio: 3 / 4,
        href: "/projects/altona/",
      },
      {
        suburb: "Footscray",
        title: "Herringbone floors, open-plan kitchen",
        scope: "Kitchen · Living",
        image: { src: "/images/projects/footscray/kitchen.jpg", alt: "Kitchen and dining with herringbone timber floor" },
        ratio: 4 / 3,
        href: "/projects/footscray/",
      },
    ],
    [
      {
        suburb: "Craigieburn",
        title: "Two kitchens and an indoor pool",
        scope: "Renovation & extension",
        image: { src: "/images/compare/craigieburn-kitchen-after.jpg", alt: "Stone island kitchen, Craigieburn" },
        ratio: 4 / 3,
        href: "/projects/craigieburn/",
      },
      {
        suburb: "Footscray",
        title: "Brushed brass and sage tile",
        scope: "Main bathroom · Ensuite",
        image: { src: "/images/projects/footscray/bathroom-vanity.jpg", alt: "Bathroom vanity with brushed brass tapware, Footscray" },
        ratio: 4 / 5,
        href: "/projects/footscray/",
      },
      {
        suburb: "Altona",
        title: "A shower lit like a gallery",
        scope: "Ensuite · Feature lighting",
        image: { src: "/images/projects/altona/feature-lights.jpg", alt: "Vertical LED feature lights in a white tiled shower, Altona" },
        ratio: 2 / 3,
        href: "/projects/altona/",
      },
    ],
    [
      {
        suburb: "Footscray",
        title: "Living that opens to the garden",
        scope: "Living · Alfresco",
        image: { src: "/images/projects/footscray/open-living.jpg", alt: "Light-filled open-plan living, Footscray" },
        ratio: 1,
        href: "/projects/footscray/",
      },
      {
        suburb: "Footscray",
        title: "The weatherboard front, restored",
        scope: "Facade · Landscaping",
        image: { src: "/images/projects/footscray/facade.jpg", alt: "Restored weatherboard facade with picket fence, Footscray" },
        ratio: 4 / 5,
        href: "/projects/footscray/",
      },
    ],
  ],
};

export const beforeAfter = {
  label: "Before / After",
  title: "Craigieburn, mid-build and finished.",
  text: "The whole job included two kitchens, two butler's pantries, three bathrooms, an indoor pool and a six-person cedar sauna. Drag the handle to compare.",
  before: { src: "/images/compare/craigieburn-dining-before.jpg", alt: "Craigieburn dining and kitchen during construction" },
  after: { src: "/images/compare/craigieburn-dining-after.jpg", alt: "Craigieburn dining and kitchen after renovation" },
  link: { label: "See the Craigieburn project", href: "/projects/craigieburn/" },
};

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
  text: "Our base is in Maribyrnong. Most of our work is in 42 suburbs across six councils: Maribyrnong, Moonee Valley, Brimbank, Hobsons Bay, Merri-bek and Melbourne. We take on larger jobs further out too, like Craigieburn and Point Cook.",
  link: { label: "Check your suburb", href: "/areas/" },
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
      image: { src: "/images/projects/footscray/alfresco.jpg", alt: "Extension bifold doors opening onto an outdoor dining area, Footscray" },
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
  title: ["See the price", "before you build."],
  // TODO(client): say what happens after booking (who confirms, how fast).
  text: "The first visit is free. We walk the house with you and talk budget, and if what you want won't fit, we say so then. You only sign once you've seen the fixed price and the finish date.",
  primaryCta: { label: "Book a free consultation", href: "/book-a-consultation/" },
};
