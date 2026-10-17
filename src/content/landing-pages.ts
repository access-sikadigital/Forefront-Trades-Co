/** Paid-traffic landing pages (/lp/*): noindex, one service each, enquiry form above the fold. */
import type { Faq } from "@/components/sections/shared/FaqSection";
import type { HeroData } from "@/components/sections/shared/PageHero";

type Img = { src: string; alt: string };

export type LandingSlug = "home-extensions" | "bathroom-renovations" | "kitchen-renovations" | "laundry-renovations" | "full-home-renovation";

export type LandingPage = {
  slug: LandingSlug;
  /** The matching service pillar, e.g. "/bathroom-renovations/". */
  servicePath: string;
  /** Pre-selects the service in the enquiry form. */
  formService: "Kitchen" | "Bathroom" | "Laundry" | "Full home renovation" | "Extension";
  meta: { title: string; description: string };
  hero: HeroData;
  form: { title: string; intro: string };
  benefits: { title: string; text: string }[];
  proof: { image: Img; caption: string }[];
  quote: { text: string; name: string; project: string };
  faqs: Faq[];
};

/*
 * Written with the Copy Machine (direct-response-copy → copy-chief) for warm,
 * product-aware visitors from Google Ads and Meta. One action per page: book the
 * free first home visit. Each page takes its own angle so no sentence is shared:
 *   extensions  → we carry the drawings, engineering and council
 *   bathroom    → how long you're without it, and the order it's built in
 *   kitchen     → every finish chosen and priced before you sign (design offer)
 *   laundry     → a small room planned around your routine, every trade booked
 *   full home   → a completion date you can plan your life around
 * Facts trace to the proof ledger in home.ts / services.ts / service-extras.ts.
 * Quotes are verbatim (client videos or content/reviews.ts). Photos are real
 * handover shots; alts and captions describe only what's visible.
 */

const img = (path: string, alt: string): Img => ({ src: `/images/${path}`, alt });

export const landingPages: Record<LandingSlug, LandingPage> = {
  "home-extensions": {
    slug: "home-extensions",
    servicePath: "/home-extensions/",
    formService: "Extension",
    meta: {
      title: "Home Extensions Melbourne",
      description:
        "Second-storey and ground-floor extensions in Melbourne's inner west and north. Drawn, engineered, permitted and built on one fixed-price contract.",
    },
    hero: {
      h1: "Home extension builders in Melbourne",
      title: ["More room, and no", "council to chase."],
      intro:
        "Up a storey or out the back. We get your extension drawn, engineered and through council, then we build it. It's all one fixed-price contract, with the finish date written in.",
      image: img("projects/footscray/extension-rear-wide.jpg", "Two-storey weatherboard rear extension, Footscray"),
      facts: [
        { label: "Permits", value: "Lodged by us" },
        { label: "Contract", value: "Fixed price" },
        { label: "Construction warranty", value: "7 years" },
      ],
    },
    form: {
      title: "Book a free visit to your block",
      intro:
        "Tell us what you need more room for. We'll come out, look over the house and the block, and tell you whether going up or out makes more sense. The visit is free.",
    },
    benefits: [
      {
        title: "You don't hire the engineer",
        text: "Drawings, structural engineering and steel are all on our contract. On the double-storey extension we built in Bundoora, the drawings went down to the steel-beam details.",
      },
      {
        title: "We deal with council",
        text: "We prepare the planning and building permits, lodge them and follow them up. If your street sits under a heritage overlay, we design for it from the first drawing.",
      },
      {
        title: "A price and a date before you commit",
        text: "You see the fixed price and the completion date before you sign to build, and both go into the contract. Add something later and we price it for your approval first.",
      },
    ],
    proof: [
      {
        image: img("projects/footscray/living-to-pool.jpg", "Room with herringbone timber floor, a desk and armchairs, and sliding glass doors looking out to a pool, Footscray"),
        caption: "Sliding doors out to the pool, Footscray",
      },
      {
        image: img("projects/footscray/alfresco-lounge.jpg", "Covered alfresco off the rear extension, Footscray"),
        caption: "Covered alfresco at the back of the house, Footscray",
      },
      {
        image: img("projects/footscray/pool-rear.jpg", "Plunge pool beside the rear extension, Footscray"),
        caption: "Plunge pool beside the rear extension, Footscray",
      },
    ],
    quote: { text: "When we encountered challenges, there was always a solution.", name: "Sabana & Oam", project: "Home renovation" },
    faqs: [
      {
        q: "Should we go up or build out the back?",
        a: "That's the main question we answer at the free visit. It comes down to your block, your budget and whether the house can carry a second storey, and we'll tell you which one we'd build.",
      },
      {
        q: "Who handles the engineering and permits?",
        a: "We do. The drawings, engineering and permit applications sit on the same contract as the build, so one business answers for all of it.",
      },
      {
        q: "Can we stay in the house while you build?",
        a: "Often, yes, because most of the work happens outside the rooms you're using. The disruptive stretch is joining old to new, and you'll have those dates before it starts.",
      },
      {
        q: "Can you renovate the rest of the house at the same time?",
        a: "Yes. Renovations & Extensions can go on one contract, so a new kitchen or bathroom gets planned alongside the new rooms.",
      },
    ],
  },

  "bathroom-renovations": {
    slug: "bathroom-renovations",
    servicePath: "/bathroom-renovations/",
    formService: "Bathroom",
    meta: {
      title: "Bathroom Renovations Melbourne",
      description:
        "Bathroom renovations in Melbourne's inner west and north. Most take 4–6 weeks on site, on a fixed price with the finish date in your contract.",
    },
    hero: {
      h1: "Bathroom renovation builders in Melbourne",
      title: ["A new bathroom in", "4–6 weeks on site."],
      intro:
        "Ensuites, main bathrooms and powder rooms. We book every trade in order, check the waterproofing before a tile goes down, and write the finish date into your fixed-price contract.",
      image: img(
        "projects/altona/bathroom-wide.jpg",
        "Bathroom with a white bath, terrazzo floor tiles, white finger tiles and a black curved vanity with a vessel basin, Altona",
      ),
      // TODO(client): confirm the 4.9★ rating (public widget shows 39 reviews).
      facts: [
        { label: "On site", value: "4–6 weeks" },
        { label: "First home visit", value: "Free" },
        { label: "Google rating", value: "4.9★, 39 reviews" },
      ],
    },
    form: {
      title: "Book a free bathroom home visit",
      intro:
        "Tell us which bathroom and what's wrong with it. We'll come and measure up, and tell you how long you'd be without it. The first visit costs nothing.",
    },
    benefits: [
      {
        title: "Know how long you'll be without it",
        text: "At the first visit we'll tell you how long the bathroom will be out of action. Most take 4–6 weeks on site, and the finish date goes into your contract.",
      },
      {
        title: "Waterproofed, then tiled",
        text: "The membrane goes down and gets checked before a single tile is laid. Tiles, tapware and the vanity come last, so nothing pretty covers up a problem.",
      },
      {
        title: "Every trade booked for you",
        text: "Plumber, electrician, tiler, cabinet maker. We book them in the right order, so you aren't chasing anyone to turn up.",
      },
    ],
    proof: [
      {
        image: img(
          "projects/altona/shower.jpg",
          "Frameless shower with a terrazzo floor and white finger tiles, beside a black curved vanity with a vessel basin, Altona",
        ),
        caption: "Terrazzo floor and frameless shower, Altona",
      },
      {
        image: img(
          "projects/footscray/bathroom-family.jpg",
          "Bathroom with a freestanding bath, a brass-framed glass shower and large grey floor tiles, Footscray",
        ),
        caption: "Freestanding bath and brass-framed shower, Footscray",
      },
      {
        image: img("projects/footscray/ensuite.jpg", "Ensuite with double basins, backlit round mirrors and a frameless shower, Footscray"),
        caption: "Double basins and backlit mirrors, Footscray",
      },
    ],
    // Verbatim excerpt from Pat Iliopoulos's Google review (content/reviews.ts).
    quote: {
      text: "Installation was done on schedule and the crew were respectful of my home keeping the area clean and minimizing disruption.",
      name: "Pat Iliopoulos",
      project: "Shower renovation · Google review",
    },
    faqs: [
      {
        q: "How long will we be without a bathroom?",
        a: "Most bathrooms take 4–6 weeks on site. We'll give you the dates at the first visit, and the finish date is written into your contract.",
      },
      {
        q: "What if you find damage once the tiles come off?",
        a: "We stop and show you. You get a price for the fix, and nothing is done until you approve it.",
      },
      {
        q: "Can you do more than one bathroom at once?",
        a: "Yes. In West Footscray we did three bathrooms, the laundry and new drainage as a single job.",
      },
    ],
  },

  "kitchen-renovations": {
    slug: "kitchen-renovations",
    servicePath: "/kitchen-renovations/",
    formService: "Kitchen",
    meta: {
      title: "Kitchen Renovations Melbourne",
      description:
        "Kitchen renovations in Melbourne's inner west and north. Layout, joinery and finishes chosen and priced before you sign, on a fixed price. Free consultation.",
    },
    hero: {
      h1: "Kitchen renovation builders in Melbourne",
      title: ["Choose every finish", "before you sign."],
      intro:
        "Layout, joinery, benchtops and tapware, all settled at design stage and priced into one fixed price. Then 4–6 weeks on site, finishing on the date in your contract.",
      image: img("projects/footscray/kitchen-island-run.jpg", "White island kitchen with gas cooktop and herringbone floor, Footscray"),
      // TODO(client): confirm the interior design offer (Open Question #5) before launch.
      facts: [
        { label: "Interior design", value: "Up to $10,000" },
        { label: "On site", value: "4–6 weeks" },
        { label: "Contract", value: "Fixed price" },
      ],
    },
    form: {
      title: "Book a free kitchen consultation",
      intro:
        "Tell us what isn't working in your kitchen now. We'll come and see it, talk layout and budget, and tell you how long you'd be cooking without it. There's no charge for the visit.",
    },
    benefits: [
      // TODO(client): confirm the interior design offer (Open Question #5) before launch.
      {
        title: "Up to $10,000 of interior design",
        text: "On design & construct projects, you work through layout, finishes and selections with the interior designers we partner with. It's included, and everything you pick goes into your fixed price.",
      },
      {
        title: "Storage on the plans",
        text: "Internal bins, spice racks, a butler's pantry. They're drawn in before a cabinet is made, so the joiner builds exactly what you signed off.",
      },
      {
        title: "Selections already in the number",
        text: "Benchtop, splashback and tapware are chosen before you sign. The price you agree to already includes them.",
      },
    ],
    proof: [
      {
        image: img("projects/footscray/kitchen-island-run.jpg", "White island kitchen with gas cooktop and herringbone floor, Footscray"),
        caption: "Island kitchen with shaker joinery, Footscray",
      },
      {
        image: img("projects/altona/kitchen-galley.jpg", "Galley kitchen with induction cooktop and white finger tiles, Altona"),
        caption: "Galley kitchen with induction cooktop, Altona",
      },
      {
        image: img("projects/footscray/kitchen-sink-run.jpg", "Shaker cabinetry with brass tapware and knobs, Footscray"),
        caption: "Brass tapware and knobs on shaker doors, Footscray",
      },
    ],
    quote: { text: "The project was completed on time and really quickly.", name: "Nicole Brown", project: "Laundry & kitchen · Brookfield" },
    faqs: [
      // TODO(client): confirm the interior design offer (Open Question #5) before launch.
      {
        q: "Is the interior design really included?",
        a: "On design & construct projects, yes. Up to $10,000 of interior design covering layout, finishes and fixture selections, worked through with our partner designers.",
      },
      {
        q: "How long will we be without a kitchen?",
        a: "Most kitchens take 4–6 weeks on site. At the first visit we'll tell you how long you'd be cooking elsewhere, and the finish date goes in your contract.",
      },
      {
        q: "Can you take out a wall to open it up?",
        a: "Yes. We arrange the structural engineering and any permit, and the wall comes out under the same contract as the kitchen.",
      },
      {
        q: "What if we change our minds mid-build?",
        a: "We price the change and wait for your approval before doing it. The rest of your fixed price stays as signed.",
      },
    ],
  },

  "laundry-renovations": {
    slug: "laundry-renovations",
    servicePath: "/laundry-renovations/",
    formService: "Laundry",
    meta: {
      title: "Laundry Renovations Melbourne",
      description:
        "Laundry renovations in Melbourne's inner west and north, alone or with a kitchen or bathroom. Joinery drawn around your routine, every trade booked for you.",
    },
    hero: {
      h1: "Laundry renovation builders in Melbourne",
      title: ["Room for the baskets,", "the mop and the iron."],
      intro:
        "Cupboards drawn around what you store and where you fold. Every trade booked for you, on a fixed price with the finish date in writing.",
      image: img("projects/altona/laundry.jpg", "Laundry with a front loader under the bench and a black undermount sink, Altona"),
      facts: [
        { label: "On site", value: "4–6 weeks" },
        { label: "Finish date", value: "In your contract" },
        { label: "Maintenance warranty", value: "3 years" },
      ],
    },
    form: {
      title: "Book a free laundry home visit",
      intro:
        "Tell us what the laundry has to hold. We'll come out, measure up and talk through layout and budget with you. The first visit is free.",
    },
    benefits: [
      {
        title: "Joinery around your routine",
        text: "Tell us how washing day runs and we draw the cupboards around it: hampers, cleaning gear, a folding spot, and a built-in ironing board if you want one.",
      },
      {
        title: "Every trade on one schedule",
        text: "Demolition, then plumber, electrician, plasterer, painter, cabinet maker and tiler. We line them up and tell you the day each one is coming.",
      },
      {
        title: "Pair it with a kitchen or bathroom",
        text: "Do the laundry alongside another room and it all goes on one contract. Nicole in Brookfield had her laundry and kitchen done together.",
      },
    ],
    proof: [
      {
        image: img(
          "projects/footscray/laundry-bench.jpg",
          "Narrow laundry with a long white benchtop, shaker cupboards, a brass gooseneck tap and a door at the far end, Footscray",
        ),
        caption: "Long bench over shaker cupboards, Footscray",
      },
      {
        image: img("projects/altona/laundry-sink.jpg", "Black undermount laundry sink with pull-down mixer, Altona"),
        caption: "Deep black sink, Altona",
      },
      {
        image: img("projects/footscray/laundry-tap.jpg", "Brushed brass tap over a white sink with sage green tiles, Footscray"),
        caption: "Brass tap against sage tiles, Footscray",
      },
    ],
    // Verbatim excerpt from Chris Williams's Google review (content/reviews.ts).
    quote: {
      text: "We were kept in the loop as to the day and time each tradie would be onsite.",
      name: "Chris Williams",
      project: "Laundry renovation · Google review",
    },
    faqs: [
      {
        q: "Will you take on just a laundry?",
        a: "Yes. A laundry on its own gets the same design work, fixed price and written finish date as a bigger job.",
      },
      {
        q: "How long does a laundry take?",
        a: "Around 4–6 weeks on site, like our other single rooms. Design comes first, and the finish date is in your contract.",
      },
      {
        q: "Can the washer or tub move?",
        a: "Yes. The new pipes and drain are drawn into the plans with the cupboards, and priced before you sign.",
      },
    ],
  },

  "full-home-renovation": {
    slug: "full-home-renovation",
    servicePath: "/home-renovations/",
    formService: "Full home renovation",
    meta: {
      title: "Full Home Renovations Melbourne",
      description:
        "Whole-house renovations in Melbourne's inner west and north, period homes included. 3–6 months on site, fixed price, completion date in your contract.",
    },
    hero: {
      h1: "Full home renovation builders in Melbourne",
      title: ["Plan your life around", "a date in writing."],
      intro:
        "A full renovation takes 3–6 months on site. Before you sign, you get the fixed price, the completion date and a straight answer on where you'll live while we build.",
      image: img("projects/footscray/living-wide.jpg", "Open-plan living with herringbone floor and two sofas, Footscray"),
      facts: [
        { label: "On site", value: "3–6 months" },
        { label: "Completion date", value: "In the contract" },
        { label: "Registered Builder", value: "CDBU76389" },
      ],
    },
    form: {
      title: "Book a free whole-house walk-through",
      intro:
        "Tell us about the house and what you'd change. We'll walk every room with you and talk budget and timing. If the plans and the budget don't match, we'll say so then. That first walk-through costs nothing.",
    },
    benefits: [
      {
        title: "Know where you'll live",
        text: "At the first visit we'll tell you how long you'd be without a kitchen or bathroom, and whether building in stages keeps part of the house usable.",
      },
      // TODO(client): confirm a project WhatsApp group runs on every job.
      {
        title: "A direct line the whole way through",
        text: "We book and run every trade on site, and you can reach our team throughout. Nicole in Brookfield had a WhatsApp group with us and called it “very, very important.”",
      },
      {
        title: "Cover that outlasts the build",
        text: "Seven years on the construction work and three years of maintenance cover after handover, from a Registered Builder.",
      },
    ],
    proof: [
      {
        image: img("projects/footscray/living-wide.jpg", "Open-plan living with herringbone floor and two sofas, Footscray"),
        caption: "Open-plan living, Footscray",
      },
      {
        image: img("projects/footscray/main-bathroom.jpg", "Main bathroom with freestanding bath and double vanity, Footscray"),
        caption: "Main bathroom with freestanding bath, Footscray",
      },
      {
        image: img("projects/footscray/robe-to-bedroom.jpg", "Walk-in robe leading to the main bedroom, Footscray"),
        caption: "Walk-in robe through to the main bedroom, Footscray",
      },
    ],
    quote: {
      text: "They put up with my questions and delivered what they said they were going to deliver.",
      name: "Gary",
      project: "Internal renovation · Point Cook",
    },
    faqs: [
      {
        q: "Can we live in the house while you renovate?",
        a: "It depends on the house and how much is changing. Where staging works, part of the house stays usable. You'll get a straight answer for your home at the first visit.",
      },
      {
        q: "How long will the whole job take?",
        a: "Most whole homes take 3–6 months on site. Design and permits come first, and their timing depends on your council. The completion date goes into your contract before we start.",
      },
      {
        q: "Do you renovate period homes?",
        a: "Yes. Victorian and Edwardian homes are a specialty, including ones under a heritage overlay.",
      },
      // TODO(client): confirm the interior design offer (Open Question #5) before launch.
      {
        q: "Is interior design included?",
        a: "On design & construct projects, up to $10,000 of interior design is included. You choose finishes and fittings room by room with our partner designers, and it's all priced into your fixed price.",
      },
    ],
  },
};
