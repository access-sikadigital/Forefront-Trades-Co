/**
 * Projects hub and case studies. Only projects with real handover photography are
 * published (Footscray, Craigieburn, Altona). Facts come from the proof ledger
 * (Tony's walkthrough videos, the content library) and what the photos show.
 * TODO(client): Bentleigh, West Footscray, Brookfield and Clifton Hill are in the
 * sitemap but have no photos yet.
 */
import type { HeroData } from "@/components/sections/shared/PageHero";

type Img = { src: string; alt: string };
const p = (path: string, alt: string): Img => ({ src: `/images/projects/${path}`, alt });
const c = (path: string, alt: string): Img => ({ src: `/images/compare/${path}`, alt });

export type Project = {
  slug: string;
  /** Publicly approved by the owner. Unapproved projects never reach a public page, list or sitemap. */
  approved: boolean;
  suburb: string;
  title: string;
  scope: string;
  summary: string;
  keyword?: string;
  cover: Img;
  facts: { label: string; value: string }[];
  /** What was built, as short paragraphs. */
  story: string[];
  highlights: string[];
  beforeAfter?: { label: string; before: Img; after: Img }[];
  gallery: Img[];
  services: string[];
  quote?: { text: string; name: string; project: string };
  /** The client's own video testimonial, if there is one. */
  video?: { src: string; poster: string; name: string };
};

export const projectsHub = {
  meta: {
    title: "Projects: Renovations & Extensions",
    description:
      "Recent Renovations & Extensions in Footscray, Craigieburn and Altona, photographed after handover. Kitchens, bathrooms, laundries and full homes.",
  },
  hero: {
    h1: "Recent Renovations & Extensions in Melbourne",
    title: ["Every home here", "is one we built."],
    intro: "Three recent jobs, from a bathroom, kitchen and laundry in Altona to a whole house and pool in Footscray.",
    image: p("footscray/pool-extension.jpg", "Rear extension and plunge pool, Footscray"),
  } satisfies HeroData,
};

export const projectList: Project[] = [
  {
    slug: "footscray",
    approved: true,
    suburb: "Footscray",
    title: "Pool out the back",
    scope: "Full renovation · Extension · Pool",
    summary: "Whole house renovated, plus a two-storey extension, plunge pool and studio.",
    cover: p("footscray/rear-extension.jpg", "Two-storey weatherboard rear extension beside a plunge pool, Footscray"),
    facts: [
      { label: "Suburb", value: "Footscray" },
      { label: "Extension", value: "Two storeys" },
      { label: "Bedrooms", value: "Five" },
    ],
    story: [
      "From the street it's a weatherboard house with a picket fence, restored. Inside, every room was renovated, and at the back the extension opens onto a covered alfresco and the pool.",
      "Inside: an island kitchen open to the dining area, two living areas, a main bathroom with a freestanding bath, an ensuite, a walk-in robe and a laundry.",
    ],
    highlights: ["Two-storey rear extension", "Plunge pool and covered alfresco", "Island kitchen with herringbone floors", "Main bathroom, ensuite and laundry", "Restored weatherboard front"],
    gallery: [
      p("footscray/kitchen.jpg", "White island kitchen with round dining table"),
      p("footscray/kitchen-island-run.jpg", "Island kitchen with gas cooktop"),
      p("footscray/living-wide.jpg", "Open-plan living with herringbone floor"),
      p("footscray/second-living.jpg", "Second living area with glass doors"),
      p("footscray/main-bathroom.jpg", "Main bathroom with freestanding bath"),
      p("footscray/ensuite.jpg", "Ensuite with backlit round mirrors"),
      p("footscray/robe-to-bedroom.jpg", "Walk-in robe leading to the main bedroom"),
      p("footscray/laundry-wide.jpg", "Laundry with a long white benchtop"),
      p("footscray/pool-rear.jpg", "Plunge pool beside the rear extension"),
      p("footscray/alfresco.jpg", "Bifold doors to the outdoor dining area"),
      p("footscray/facade.jpg", "Restored weatherboard front with picket fence"),
      p("footscray/bedroom-3.jpg", "Bedroom with jute rug and rattan chair"),
    ],
    services: ["/home-renovations/", "/home-extensions/", "/kitchen-renovations/", "/bathroom-renovations/"],
  },
  {
    slug: "craigieburn",
    approved: false, // private preview only (owner's brief, Oct 2026): photos and scope awaiting approval
    suburb: "Craigieburn",
    title: "Two kitchens",
    scope: "Renovations & Extensions",
    summary: "Three bathrooms, two butler's pantries, an indoor pool and a six-person cedar sauna.",
    cover: c("craigieburn-kitchen-after.jpg", "Stone island kitchen with timber cabinetry, Craigieburn"),
    facts: [
      { label: "Suburb", value: "Craigieburn" },
      { label: "Pool", value: "Indoor" },
      { label: "Bathrooms", value: "Three" },
    ],
    story: [
      "One of our larger jobs, and further out than most of our work. The house now has two kitchens, each with its own butler's pantry.",
      "The photos below show the kitchen and dining area mid-build, and the same rooms finished.",
    ],
    highlights: ["Two kitchens", "Two butler's pantries", "Three bathrooms", "Indoor pool", "Six-person cedar sauna", "Home theatre"],
    beforeAfter: [
      {
        label: "Kitchen",
        before: c("craigieburn-kitchen-before.jpg", "Craigieburn kitchen during construction"),
        after: c("craigieburn-kitchen-after.jpg", "Craigieburn kitchen after renovation"),
      },
      {
        label: "Dining",
        before: c("craigieburn-dining-before.jpg", "Craigieburn dining area during construction"),
        after: c("craigieburn-dining-after.jpg", "Craigieburn dining area after renovation"),
      },
    ],
    // Stills from the Craigieburn walkthrough video (content library).
    gallery: [
      p("craigieburn/indoor-pool.jpg", "Indoor pool under a timber-lined cathedral ceiling"),
      p("craigieburn/sauna.jpg", "Cedar sauna with lit benches"),
      p("craigieburn/kitchen.jpg", "Kitchen and dining with a marble splashback"),
      p("craigieburn/cooktop.jpg", "Black gas cooktop in a marble-look benchtop"),
      p("craigieburn/theatre.jpg", "Home theatre with recliners and a lit ceiling"),
      p("craigieburn/bathroom.jpg", "Bathroom with freestanding bath and lit vanity"),
      p("craigieburn/vanity.jpg", "Double vanity with timber cabinetry and round mirrors"),
      p("craigieburn/basin.jpg", "Green vessel basin with terracotta finger tiles"),
      p("craigieburn/shower.jpg", "Walk-in shower with a lit niche"),
      p("craigieburn/laundry.jpg", "Laundry with stacked washer and dryer in timber joinery"),
      p("craigieburn/lounge.jpg", "Lounge with curved sofas and panelled walls"),
      p("craigieburn/exterior.jpg", "Two-storey rendered home from the street"),
    ],
    services: ["/home-renovations/", "/home-extensions/", "/kitchen-renovations/"],
    quote: undefined,
  },
  {
    slug: "altona",
    approved: true,
    suburb: "Altona",
    title: "Black curved vanity",
    scope: "Kitchen · Bathroom · Laundry",
    keyword: "bathroom renovation altona",
    summary: "A terrazzo and finger-tile bathroom, separate toilet, galley kitchen and laundry.",
    // TODO(client): confirm the Altona scope (kitchen, bathroom, toilet and laundry are all in the shoot).
    cover: p("altona/vanity.jpg", "Black curved vanity with vessel basin and white finger tiles, Altona"),
    facts: [
      { label: "Suburb", value: "Altona" },
      { label: "Bathroom", value: "Terrazzo & finger tiles" },
      { label: "Also", value: "Kitchen & laundry" },
    ],
    story: [
      "In the bathroom, the black vanity sits against white finger tiles, with terrazzo, dark tapware, a bath, a walk-in shower and a mirrored cabinet.",
      "The separate toilet has its own terrazzo wall. The galley kitchen has an induction cooktop under an integrated rangehood, and the laundry fits the front loader under the bench beside a deep black sink.",
    ],
    highlights: ["Bath and walk-in shower", "Terrazzo and white finger tiles", "Separate toilet", "Galley kitchen with induction cooktop", "Laundry with a deep black sink"],
    gallery: [
      p("altona/vanity.jpg", "Black curved vanity with vessel basin"),
      p("altona/bathroom-wide.jpg", "Bathroom with terrazzo, bath and mirrored cabinet"),
      p("altona/shower.jpg", "Walk-in shower with dark tapware"),
      p("altona/bath.jpg", "Bath with terrazzo surround"),
      p("altona/toilet-terrazzo.jpg", "Toilet with a terrazzo feature wall"),
      p("altona/feature-lights.jpg", "Wall lights over white finger tiles"),
      p("altona/kitchen-galley.jpg", "Galley kitchen with induction cooktop"),
      p("altona/laundry.jpg", "Laundry with front loader under the bench"),
    ],
    services: ["/bathroom-renovations/", "/kitchen-renovations/", "/laundry-renovations/"],
  },
  {
    slug: "bentleigh",
    approved: false, // private preview only (owner's brief, Oct 2026): photos and scope awaiting approval
    suburb: "Bentleigh",
    title: "Kitchen, pantry and a double shower",
    scope: "Kitchen · Bathroom · Robe",
    summary: "A stone kitchen with a butler's pantry and wine fridges, a double shower and a fitted walk-in robe.",
    // Stills from the Bentleigh before/after and real estate videos (content library).
    // TODO(client): confirm the Bentleigh scope and stages (the video covers stages 1, 2 and 3).
    cover: p("bentleigh/kitchen.jpg", "Stone island bench with a built-in wine fridge, Bentleigh"),
    facts: [
      { label: "Suburb", value: "Bentleigh" },
      { label: "Kitchen", value: "Stone & pantry" },
      { label: "Built in", value: "Stages" },
    ],
    story: [
      "Built in stages. The kitchen has a stone island with a wine fridge built into the end, flat-front drawers and a black gas cooktop, with a butler's pantry and a second wine fridge behind it.",
      "Down the hall, a double shower with two rain heads and a lit niche, a curved vanity with black tapware, and a walk-in robe fitted out with lit shelving.",
    ],
    highlights: ["Stone island with built-in wine fridge", "Butler's pantry", "Double shower with lit niche", "Curved vanity, black tapware", "Fitted walk-in robe"],
    gallery: [
      p("bentleigh/kitchen.jpg", "Stone island bench with a built-in wine fridge"),
      p("bentleigh/pantry.jpg", "Butler's pantry with marble splashback and a wine fridge"),
      p("bentleigh/cooktop.jpg", "Black gas cooktop in a stone benchtop"),
      p("bentleigh/mixer.jpg", "Pull-down kitchen mixer by the window"),
      p("bentleigh/shower.jpg", "Double shower with two rain heads and a lit niche"),
      p("bentleigh/vanity.jpg", "Curved basin with black wall tapware"),
      p("bentleigh/robe.jpg", "Walk-in robe with lit shelving and hanging space"),
      p("bentleigh/hallway.jpg", "Hallway through to the living area"),
    ],
    services: ["/kitchen-renovations/", "/bathroom-renovations/", "/home-renovations/"],
  },
  {
    slug: "brookfield",
    approved: true, // TODO(client): confirm (stills from Nicole's published testimonial video)
    suburb: "Brookfield",
    title: "Nicole's laundry and kitchen",
    scope: "Laundry · Kitchen",
    summary: "A laundry with the machines side by side under timber-look joinery, done with the kitchen. Finished on time.",
    // Stills from Nicole Brown's 4K testimonial video (content library).
    cover: p("brookfield/laundry-wide.jpg", "Laundry with front loaders, timber-look cupboards and grey floor tiles, Brookfield"),
    facts: [
      { label: "Suburb", value: "Brookfield" },
      { label: "Rooms", value: "Laundry & kitchen" },
      { label: "Finished", value: "On time" },
    ],
    story: [
      "Nicole's laundry has the washer and dryer side by side, a stainless sink with a gooseneck tap, and timber-look cupboards with open shelving above for baskets.",
      "The laundry was done together with her kitchen. In her words, the job was completed on time and really quickly, and the project WhatsApp group with our team was “very, very important”.",
    ],
    highlights: ["Washer and dryer side by side", "Stainless sink and gooseneck tap", "Timber-look joinery and open shelves", "Done with the kitchen", "Finished on time"],
    gallery: [
      p("brookfield/laundry-wide.jpg", "Laundry with front loaders and timber-look cupboards"),
      p("brookfield/laundry-sink.jpg", "Stainless laundry sink with a gooseneck tap and white tiles"),
      p("brookfield/laundry-machines.jpg", "Washer and dryer side by side by the back door"),
      p("brookfield/laundry-shelves.jpg", "Open shelving with woven baskets above the cupboards"),
    ],
    services: ["/laundry-renovations/", "/kitchen-renovations/"],
    quote: { text: "The project was completed on time and really quickly.", name: "Nicole Brown", project: "Laundry & kitchen · Brookfield" },
    video: { src: "/videos/testimonial-brookfield.mp4", poster: "/images/testimonial-nicole-poster.jpg", name: "Nicole Brown" },
  },
  {
    slug: "west-footscray",
    approved: true, // TODO(client): confirm (from Cassandra's published testimonial video)
    suburb: "West Footscray",
    title: "Three bathrooms, a laundry and the drains",
    scope: "Bathrooms · Laundry · Drainage",
    summary: "Three bathrooms, the laundry and new drainage in one job, in a period weatherboard home.",
    // Only a low-resolution copy of Cassandra's video exists, so this page leads with her video, not a gallery.
    // TODO(client): supply photos of the West Footscray bathrooms and laundry.
    cover: { src: "/images/projects/west-footscray/front.jpg", alt: "Period weatherboard home with a verandah and fretwork, West Footscray" },
    facts: [
      { label: "Suburb", value: "West Footscray" },
      { label: "Bathrooms", value: "Three" },
      { label: "Also", value: "Laundry & drains" },
    ],
    story: [
      "Cassandra's period weatherboard needed more than new tiles. We renovated three bathrooms and the laundry, and replaced the drainage, in one job.",
      "Her words: “We were just hoping for a safe and dry home and what we got was a really beautiful home that we're very proud of.”",
    ],
    highlights: ["Three bathrooms", "Laundry", "Drainage replaced", "Period weatherboard home", "One job, one contract"],
    gallery: [],
    services: ["/bathroom-renovations/", "/laundry-renovations/", "/heritage-renovations/"],
    quote: { text: "They took an absolute disaster and turned it into something really beautiful.", name: "Cassandra Fraser", project: "Bathrooms, laundry & drainage · West Footscray" },
    video: { src: "/videos/testimonial-cassandra.mp4", poster: "/images/testimonial-cassandra-poster.jpg", name: "Cassandra Fraser" },
  },
];

/** Only owner-approved projects are listed, linked or given a page. */
export const publicProjects = projectList.filter((x) => x.approved);

export const projectBySlug = (slug: string) => publicProjects.find((x) => x.slug === slug);
