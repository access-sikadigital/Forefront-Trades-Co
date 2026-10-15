/**
 * Service pillar pages — kitchen, bathroom, laundry and full home renovations.
 * Written with the Copy Machine (direct-response-copy → copy-chief). Section order
 * follows the Page Blueprint in the Keyword Map & Sitemap v2.
 *
 * Every fact traces to the homepage proof ledger (see home.ts): fixed price, finish
 * date in the contract, 4–6 weeks on site per room, 3–6 months per full home, the
 * named projects and the clients' own video words. TODO(client) marks anything
 * still to confirm. No prices are published until the client supplies ranges.
 */

type Img = { src: string; alt: string };

export type ServiceSlug = "kitchen" | "bathroom" | "laundry" | "home" | "extensions" | "heritage";

export type ServicePage = {
  slug: string;
  path: string;
  name: string;
  keyword: string;
  meta: { title: string; description: string };
  hero: { h1: string; title: string[]; intro: string; image?: Img; facts: { label: string; value: string }[] };
  focus: { label: string; title: string; intro: string; image?: Img; points: { title: string; text: string }[] };
  proof: {
    label: string;
    title: string;
    items: { image: Img; suburb: string; caption: string; href?: string }[];
    quotes: { text: string; name: string; project: string }[];
  };
  cost: { label: string; title: string; intro: string; factors: { title: string; text: string }[] };
  faqs: { q: string; a: string }[];
};

// Quotes are verbatim from the clients' own video testimonials (see home.ts).
const quotes = {
  cassandra: {
    text: "We were just hoping for a safe and dry home and what we got was a really beautiful home that we're very proud of.",
    name: "Cassandra Fraser",
    project: "Bathrooms, laundry & drainage · West Footscray",
  },
  cassandraShort: {
    text: "They took an absolute disaster and turned it into something really beautiful.",
    name: "Cassandra Fraser",
    project: "Bathrooms, laundry & drainage · West Footscray",
  },
  gary: { text: "They put up with my questions and delivered what they said they were going to deliver.", name: "Gary", project: "Internal renovation · Point Cook" },
  sabanaOam: { text: "When we encountered challenges, there was always a solution.", name: "Sabana & Oam", project: "Home renovation" },
  // Verbatim excerpt from Chris Williams's Google review (content/reviews.ts).
  chris: {
    text: "Demolition of existing laundry, and then as required, they had a Plumber, Electrician, Plasterer, Painter, Cabinet Maker and a Tiler to perform the renovation.",
    name: "Chris Williams",
    project: "Laundry renovation · Google review",
  },
};

const fixedPriceFaq = {
  q: "Is the price fixed?",
  a: "Yes. The price you sign covers the agreed scope. If you change the scope, we price the change and you approve it before we do it. Nothing goes on your bill until you've said yes.",
};

// TODO(client): confirm the interior design offer (Open Question #5) before launch.
const designFaq = {
  q: "Do you help with the design?",
  a: "Yes. On design & construct projects, up to $10,000 of interior design is included: layouts, finishes and selections, worked through with the interior designers we partner with and priced into your fixed price.",
};

export const servicePages: Record<ServiceSlug, ServicePage> = {
  kitchen: {
    slug: "kitchen",
    path: "/kitchen-renovations/",
    name: "Kitchen renovations",
    keyword: "kitchen renovations melbourne",
    meta: {
      title: "Kitchen Renovations Melbourne",
      description:
        "Kitchen renovations in Melbourne's inner west and north: butler's pantries, open-plan layouts and custom joinery, on a fixed-price contract. Free home visit.",
    },
    hero: {
      h1: "Kitchen renovations in Melbourne",
      title: ["A kitchen planned", "down to the bin drawer."],
      intro:
        "Butler's pantries, open-plan layouts and custom joinery across Melbourne's inner west and north.",
      image: { src: "/images/projects/footscray/kitchen.jpg", alt: "White kitchen with a long island, herringbone timber floor and round dining table, Footscray" },
      facts: [
        { label: "Time on site", value: "4–6 weeks" },
        { label: "Contract", value: "Fixed price" },
        { label: "Finish date", value: "In writing" },
      ],
    },
    focus: {
      label: "What we plan first",
      title: "Fridge, bins, pantry. Then the benchtop.",
      intro:
        "The kitchens people regret usually look fine. The fridge door hits the island, or the pantry is too shallow to use. We work out the layout at design stage, before a cabinet is made.",
      image: { src: "/images/projects/footscray/kitchen-galley.jpg", alt: "Galley run with gas cooktop, white shaker cabinetry and window splashback, Footscray" },
      points: [
        { title: "Butler's pantries", text: "A working pantry behind the kitchen keeps the appliances and the mess out of sight. In Craigieburn we built two." },
        { title: "Open plan", text: "Taking out a wall means engineering, steel and often a permit. We draw it, get it engineered and lodge it on the same contract as the kitchen." },
        { title: "Storage you can see on the plans", text: "Internal bins, spice racks and profiled cabinetry are drawn in at design stage, so the joiner builds what you chose." },
        { title: "Selections priced up front", text: "Benchtops, splashbacks and tapware are chosen before you sign, so they're in the fixed price, not added at the end." },
      ],
    },
    proof: {
      label: "Recent kitchens",
      title: "Kitchens we've built.",
      items: [
        { image: { src: "/images/compare/craigieburn-kitchen-after.jpg", alt: "Stone island kitchen, Craigieburn" }, suburb: "Craigieburn", caption: "Two kitchens, two butler's pantries", href: "/projects/craigieburn/" },
        { image: { src: "/images/projects/footscray/kitchen-dining.jpg", alt: "White kitchen and timber dining setting, Footscray" }, suburb: "Footscray", caption: "Kitchen and dining, full renovation", href: "/projects/footscray/" },
        { image: { src: "/images/projects/altona/kitchen.jpg", alt: "Galley kitchen with induction cooktop and integrated oven, Altona" }, suburb: "Altona", caption: "Galley kitchen, integrated appliances", href: "/projects/altona/" },
      ],
      quotes: [quotes.sabanaOam],
    },
    cost: {
      label: "Price factors",
      title: "What moves the price of a kitchen.",
      // TODO(client): add ballpark ranges (e.g. "most kitchens we build land between $X and $Y").
      intro: "Two kitchens the same size can be far apart in price. These four things move it most.",
      factors: [
        { title: "Moving plumbing or gas", text: "A sink and cooktop that stay where they are cost less than ones that move across the room." },
        { title: "Walls coming out", text: "A load-bearing wall costs more to take out than one that holds nothing up." },
        { title: "How much joinery", text: "The run of cabinetry, a butler's pantry, and how the doors and panels are finished." },
        { title: "Benchtops and selections", text: "Stone, tapware and appliances can move the price more than the layout does." },
      ],
    },
    faqs: [
      { q: "How long does a kitchen renovation take?", a: "Most kitchens take 4–6 weeks on site. Design and any permits come first, and the finish date is written into your contract before work starts." },
      { q: "How long will we be without a kitchen?", a: "We'll tell you at the first visit, once we've seen the house, and plan the job to keep that window as short as we can." },
      { q: "Can you take out a wall to open up the kitchen?", a: "Yes. We arrange the structural engineering and any permits, and build it on the same contract as the kitchen." },
      designFaq,
      fixedPriceFaq,
    ],
  },

  bathroom: {
    slug: "bathroom",
    path: "/bathroom-renovations/",
    name: "Bathroom renovations",
    keyword: "bathroom renovations melbourne",
    meta: {
      title: "Bathroom Renovations Melbourne",
      description:
        "Bathroom renovations across Melbourne's inner west and north: ensuites, main bathrooms and powder rooms, 4–6 weeks on site, on a fixed-price contract.",
    },
    hero: {
      h1: "Bathroom renovations in Melbourne",
      title: ["Bathrooms built from", "the waterproofing up."],
      intro:
        "Ensuites, main bathrooms and powder rooms, one room at a time or several in the same job.",
      image: { src: "/images/projects/footscray/bathroom.jpg", alt: "Bathroom with freestanding bath, double vanity and pill-shaped mirrors, Footscray" },
      facts: [
        { label: "Time on site", value: "4–6 weeks" },
        { label: "Contract", value: "Fixed price" },
        { label: "Finish date", value: "In writing" },
      ],
    },
    focus: {
      label: "What we get right first",
      title: "The parts of a bathroom you never see.",
      intro:
        "Tiles and tapware are the fun part. Whether a bathroom lasts is decided underneath them: the falls, the waterproofing and the drains. That's where we start.",
      image: { src: "/images/projects/footscray/bathroom-2.jpg", alt: "Walk-in shower with round mirror and white vanity, Footscray" },
      points: [
        // TODO(client): confirm wording of the waterproofing standard and who certifies it.
        { title: "Waterproofing", text: "Done and checked before a single tile goes down, to Australian Standard AS 3740." },
        { title: "Layout", text: "You decide where the toilet, shower and vanity go at design stage, before any pipe moves." },
        { title: "Drains", text: "If the old drains are failing, we replace them in the same job, as we did for Cassandra in West Footscray." },
        { title: "Then the finishes", text: "Tiles, tapware, vanity and mirrors go in last, over work that's already been checked." },
      ],
    },
    proof: {
      label: "Recent bathrooms",
      title: "Bathrooms we've built.",
      items: [
        { image: { src: "/images/projects/footscray/ensuite.jpg", alt: "Ensuite with double basins, backlit round mirrors and frameless shower, Footscray" }, suburb: "Footscray", caption: "Ensuite, double vanity", href: "/projects/footscray/" },
        { image: { src: "/images/projects/altona/vanity.jpg", alt: "Black curved vanity with vessel basin and white finger tiles, Altona" }, suburb: "Altona", caption: "Bathroom and powder room", href: "/projects/altona/" },
        { image: { src: "/images/projects/footscray/bathroom-bath.jpg", alt: "Freestanding bath and frameless shower with brushed brass fittings, Footscray" }, suburb: "Footscray", caption: "Main bathroom, freestanding bath", href: "/projects/footscray/" },
      ],
      quotes: [quotes.cassandraShort],
    },
    cost: {
      label: "Price factors",
      title: "What moves the price of a bathroom.",
      // TODO(client): add ballpark ranges per bathroom type (ensuite / main / powder room).
      intro: "A powder room and a main bathroom are different jobs. Most of the gap in price comes down to these four things.",
      factors: [
        { title: "Moving the plumbing", text: "Every fixture that moves takes its pipes with it, through the floor or the wall." },
        { title: "Tiled area", text: "How many square metres get tiled, and whether it runs floor to ceiling." },
        { title: "Fixtures", text: "A freestanding bath, a wall-hung vanity or a frameless screen each move the number." },
        { title: "What's behind the walls", text: "Old pipes or rot that only show up once the walls are open." },
      ],
    },
    faqs: [
      { q: "How long does a bathroom renovation take?", a: "Most bathrooms take 4–6 weeks on site. Design and any permits come first, and the finish date is written into your contract before work starts." },
      { q: "Can you renovate more than one bathroom at once?", a: "Yes. In West Footscray we renovated three bathrooms and the laundry in one job, on one contract." },
      { q: "What if you find damage behind the tiles?", a: "We show you what we've found, price the fix and wait for your go-ahead." },
      { q: "Do you do ensuites and powder rooms?", a: "Yes. In Altona we built a bathroom and a separate powder room in the same job." },
      fixedPriceFaq,
    ],
  },

  laundry: {
    slug: "laundry",
    path: "/laundry-renovations/",
    name: "Laundry renovations",
    keyword: "laundry renovations melbourne",
    meta: {
      title: "Laundry Renovations Melbourne",
      description:
        "Laundry renovations across Melbourne's inner west and north, on their own or with a kitchen or bathroom. Custom joinery, stone benchtops, fixed price.",
    },
    hero: {
      h1: "Laundry renovations in Melbourne",
      title: ["A laundry built around", "how you do the washing."],
      intro:
        "A laundry on its own, or in the same job as your kitchen or bathroom.",
      image: { src: "/images/projects/footscray/laundry.jpg", alt: "Laundry with brushed brass tap, sage tiles and white stone bench, Footscray" },
      facts: [
        { label: "Time on site", value: "4–6 weeks" },
        { label: "Contract", value: "Fixed price" },
        { label: "Finish date", value: "In writing" },
      ],
    },
    focus: {
      label: "What it has to hold",
      title: "A small room with a long list.",
      intro:
        "A washer, a dryer, a tub, the baskets, the mop and everything you'd rather not look at. A laundry has to hold all of it, so we plan it the way we plan a kitchen.",
      points: [
        { title: "Joinery around your routine", text: "Cupboards and shelves drawn around what you store and where you fold, before anything is ordered." },
        { title: "A built-in ironing board", text: "Folded away inside the joinery, like one we drew into a recent laundry." },
        { title: "Stone and tiles", text: "Stone benchtops and splashback tiles, like the sage tiles and white stone bench in our Footscray laundry." },
        { title: "Water and waste", text: "If the tub or washer moves, the new taps and drain are drawn into the plans with the cupboards." },
      ],
    },
    proof: {
      label: "Recent laundries",
      title: "Laundries we've built.",
      items: [
        { image: { src: "/images/projects/footscray/laundry-wide.jpg", alt: "Laundry with a long white benchtop and storage, Footscray" }, suburb: "Footscray", caption: "Long bench with storage underneath", href: "/projects/footscray/" },
        { image: { src: "/images/projects/altona/laundry-sink.jpg", alt: "Black undermount laundry sink with pull-down mixer, Altona" }, suburb: "Altona", caption: "Black undermount sink and pull-down mixer", href: "/projects/altona/" },
        { image: { src: "/images/projects/footscray/laundry-tap.jpg", alt: "Brushed brass tap over a white sink with sage green tiles, Footscray" }, suburb: "Footscray", caption: "Brushed brass tap and sage green tiles", href: "/projects/footscray/" },
      ],
      quotes: [quotes.chris, quotes.cassandra],
    },
    cost: {
      label: "Price factors",
      title: "What moves the price of a laundry.",
      // TODO(client): add a ballpark range for a laundry on its own.
      intro: "A laundry is a small room, so three choices make most of the difference to the price.",
      factors: [
        { title: "Moving the plumbing", text: "New pipework, if the tub or washer changes spot." },
        { title: "Cupboards", text: "Full-height cupboards, a hanging space or a fold-away ironing board." },
        { title: "Benchtop and tiles", text: "Stone or laminate, and how far the tiles run up the wall." },
      ],
    },
    faqs: [
      { q: "Do you renovate just a laundry?", a: "Yes. We take on laundries on their own, planned and priced like any other room." },
      { q: "How long does a laundry renovation take?", a: "Like our other single-room jobs, 4–6 weeks on site once design is done. The finish date is written into your contract." },
      { q: "Can you do the laundry with a bathroom or kitchen?", a: "Yes. Nicole in Brookfield did her laundry and kitchen together. Cassandra in West Footscray did hers with three bathrooms and new drainage." },
      designFaq,
      fixedPriceFaq,
    ],
  },

  home: {
    slug: "home",
    path: "/home-renovations/",
    name: "Full home renovations",
    keyword: "home renovations melbourne",
    meta: {
      title: "Home Renovations Melbourne",
      description:
        "Full home renovations across Melbourne's inner west and north, including period homes, staged where it helps. One fixed-price contract, finish date in writing.",
    },
    hero: {
      h1: "Home renovations in Melbourne",
      title: ["The whole house,", "on one fixed price."],
      intro:
        "Period homes and whole-house renovations in Melbourne's inner west and north.",
      image: { src: "/images/projects/footscray/open-living.jpg", alt: "Light-filled open-plan living room, Footscray" },
      facts: [
        { label: "Time on site", value: "3–6 months" },
        { label: "Contract", value: "Fixed price" },
        { label: "Finish date", value: "In writing" },
      ],
    },
    focus: {
      label: "Living through it",
      title: "Where you'll live, and for how long.",
      intro:
        "The first question on a full renovation is usually whether you can stay in the house. At the first visit we'll tell you how long you'd be without a kitchen or bathroom, and whether staging the job helps.",
      image: { src: "/images/projects/footscray/facade.jpg", alt: "Restored weatherboard facade with picket fence, Footscray" },
      points: [
        { title: "Staged builds", text: "Where it helps, we build in stages so part of the house stays usable." },
        { title: "Period homes", text: "Victorian and Edwardian homes, common across the inner west. We keep the period details and fix what's failing underneath." },
        { title: "Heritage overlays", text: "Council limits what can change on a street under a heritage overlay. We design to those limits from the first sketch." },
        { title: "Every trade, one schedule", text: "We book every trade ourselves. One client wrote that they were “kept in the loop as to the day and time each tradie would be onsite.”" },
      ],
    },
    proof: {
      label: "Recent renovations",
      title: "Whole homes we've renovated.",
      items: [
        { image: { src: "/images/projects/footscray/living-wide.jpg", alt: "Open-plan living with herringbone floor and two sofas, Footscray" }, suburb: "Footscray", caption: "Five bedrooms, a pool and a studio", href: "/projects/footscray/" },
        { image: { src: "/images/compare/craigieburn-dining-after.jpg", alt: "Dining and kitchen after renovation, Craigieburn" }, suburb: "Craigieburn", caption: "Two kitchens, three bathrooms, an indoor pool", href: "/projects/craigieburn/" },
        { image: { src: "/images/projects/footscray/dining.jpg", alt: "Dining area with round timber table beside the kitchen, Footscray" }, suburb: "Footscray", caption: "Kitchen, dining and living, opened up", href: "/projects/footscray/" },
      ],
      quotes: [quotes.gary],
    },
    cost: {
      label: "Price factors",
      title: "What moves the price of a full renovation.",
      // TODO(client): add a ballpark range per square metre or per typical job.
      intro: "No two houses start in the same condition. Your fixed price is set at design, and these four things move it most.",
      factors: [
        { title: "Structural change", text: "Walls coming out, new openings, floors levelled or restumped." },
        { title: "The state of the house", text: "Old wiring, failing stumps or drains found once we open up. We price any fix and you approve it first." },
        { title: "Permits and overlays", text: "A heritage overlay can add drawings and council time before the build starts." },
        { title: "Selections", text: "The kitchen, the bathrooms and the floors carry most of the finish budget." },
      ],
    },
    faqs: [
      { q: "How long does a full home renovation take?", a: "Most full homes take 3–6 months on site. Design and permits come first, and how long they take depends on your council and whether there's an overlay." },
      { q: "Can we live in the house during the renovation?", a: "Sometimes. It depends on the scope and whether the job can be staged. We'll answer it for your house at the first visit." },
      { q: "Do you renovate period and heritage homes?", a: "Yes. Victorian and Edwardian homes are a specialty, including homes under heritage overlays." },
      { q: "Can you add an extension at the same time?", a: "Yes. Second-storey and ground-floor extensions go on the same contract as the renovation." },
      fixedPriceFaq,
    ],
  },

  extensions: {
    slug: "extensions",
    path: "/home-extensions/",
    name: "Home extensions",
    keyword: "home extensions melbourne",
    meta: {
      title: "Home Extensions Melbourne",
      description:
        "Second-storey and ground-floor home extensions across Melbourne's inner west and north. Drawings, engineering, steel and permits on one fixed-price contract.",
    },
    hero: {
      h1: "Home extensions in Melbourne",
      title: ["Up a storey,", "or out the back."],
      intro:
        "More room on the block you already own. We build both, across Melbourne's inner west and north.",
      image: { src: "/images/projects/footscray/rear-extension.jpg", alt: "Two-storey weatherboard rear extension beside a plunge pool, Footscray" },
      facts: [
        { label: "Engineering & permits", value: "Lodged by us" },
        { label: "Contract", value: "Fixed price" },
        { label: "Finish date", value: "In writing" },
      ],
    },
    focus: {
      label: "Before the first wall goes up",
      title: "Most of an extension is decided on paper.",
      intro:
        "Whether the house can carry a second storey, where the steel goes, what council will allow. We get it all drawn and engineered, and the permits lodged, before anyone picks up a shovel.",
      image: { src: "/images/projects/footscray/alfresco.jpg", alt: "Bifold doors opening from the extension onto an outdoor dining area, Footscray" },
      points: [
        { title: "Second storey or ground floor", text: "A second storey keeps your backyard. If you'd rather keep everything on one level, we build out the back." },
        { title: "Engineering and steel", text: "A structural engineer sizes every beam and footing. On a double-storey extension we built in Bundoora, that meant steel beams." },
        { title: "Permits", text: "We prepare and lodge the planning and building permits. A heritage overlay on your street adds a planning step, and we handle that too." },
        { title: "Joining old to new", text: "We plan the new rooms around the house you already have, so the floor levels, rooflines and finishes meet properly." },
      ],
    },
    proof: {
      label: "Recent extensions",
      title: "Extensions we've built.",
      // TODO(client): add photos of the Bundoora double-storey extension and any other completed extensions.
      items: [
        { image: { src: "/images/projects/footscray/pool-extension.jpg", alt: "Rear extension and plunge pool with potted olive trees, Footscray" }, suburb: "Footscray", caption: "Rear extension, pool and studio", href: "/projects/footscray/" },
        { image: { src: "/images/projects/footscray/rear-alfresco.jpg", alt: "Covered alfresco on the rear extension, looking across the pool, Footscray" }, suburb: "Footscray", caption: "Alfresco off the rear extension", href: "/projects/footscray/" },
        { image: { src: "/images/compare/craigieburn-dining-after.jpg", alt: "Dining and kitchen after renovation, Craigieburn" }, suburb: "Craigieburn", caption: "Renovations & Extensions", href: "/projects/craigieburn/" },
      ],
      quotes: [quotes.sabanaOam],
    },
    cost: {
      label: "Price factors",
      title: "What moves the price of an extension.",
      // TODO(client): add ballpark ranges for ground-floor and second-storey extensions.
      intro: "Each extension is priced from its engineered drawings. These are what move that price.",
      factors: [
        { title: "Up or out", text: "A second storey needs the house below to carry it, which often means steel and new footings." },
        { title: "Size and roofline", text: "How many square metres you add, and how the new roof meets the old one." },
        { title: "Site and access", text: "A sloping block, a tight side path or no rear access adds time and labour." },
        { title: "What goes inside", text: "A new kitchen or bathroom in the extension costs more than bedrooms or living space." },
      ],
    },
    faqs: [
      { q: "Should we go up or build out the back?", a: "It depends on your block, your budget and whether the existing house can carry a second storey. We'll tell you which makes sense at the first visit." },
      { q: "Do you handle the engineering and permits?", a: "Yes. The drawings, engineering and permits are part of your contract with us, so you're not hiring an engineer or chasing council yourself." },
      { q: "Can we stay in the house while you build?", a: "Often, because most of an extension is built outside the rooms you live in. The disruption comes when old and new are joined, and we'll tell you when that is before it starts." },
      { q: "Can you renovate the rest of the house at the same time?", a: "Yes. Renovations & Extensions go on one contract, so the kitchen, bathrooms and new rooms are planned together." },
      fixedPriceFaq,
    ],
  },

  heritage: {
    slug: "heritage",
    path: "/heritage-renovations/",
    name: "Heritage restorations",
    keyword: "period home renovations",
    meta: {
      title: "Period Home Renovations Melbourne",
      description:
        "Victorian and Edwardian home renovations in Melbourne's inner west and north. We keep the period details, fix what's failing and handle the heritage overlay.",
    },
    hero: {
      h1: "Period home renovations in Melbourne",
      title: ["Keep the front.", "Fix what's behind it."],
      intro:
        "Victorian and Edwardian homes across Melbourne's inner west and north, including those under a heritage overlay.",
      // Generated atmosphere image of a period streetscape (not a Forefront project; never caption it as one).
      // TODO(client): replace with a photo of a completed heritage or period home (e.g. the heritage-listed renovation).
      image: { src: "/images/generated/heritage-streetscape.jpg", alt: "Edwardian red-brick villas on a tree-lined Melbourne street" },
      facts: [
        { label: "Specialty", value: "Period homes" },
        { label: "Contract", value: "Fixed price" },
        { label: "Finish date", value: "In writing" },
      ],
    },
    focus: {
      label: "What changes, what stays",
      title: "Council looks hardest at the front.",
      intro:
        "A heritage overlay protects how the street looks. Out of sight at the back, council usually allows more change.",
      // Generated atmosphere image (not a Forefront project). TODO(client): replace with a real period-home detail photo.
      image: { src: "/images/generated/heritage-interior.jpg", alt: "Restored Victorian hallway with a plaster archway and leadlight front door" },
      points: [
        { title: "The street front", text: "Verandahs, windows and fretwork kept or rebuilt to match, so the house still reads as it did from the street." },
        { title: "What's failing behind it", text: "We find and fix failing stumps, damp, old wiring and drains before any new finish goes on." },
        { title: "The rooms inside", text: "Most overlays don't cover interiors, so you choose which period details stay: ceilings, fireplaces, floorboards." },
        { title: "Living space at the back", text: "A modern kitchen, bathrooms or a rear extension behind the original rooms, where council allows it." },
      ],
    },
    proof: {
      label: "Our clients",
      title: "Fixing the basics first.",
      // TODO(client): add photos of completed heritage and period-home projects. None are photographed yet.
      items: [],
      quotes: [quotes.cassandra],
    },
    cost: {
      label: "Price factors",
      title: "What moves the price of a period home renovation.",
      // TODO(client): add a ballpark range for a typical period home renovation.
      intro: "Old houses hide things. Here's what moves the price of yours.",
      factors: [
        { title: "The state of the structure", text: "Subfloors and roof framing in a house this old sometimes need rebuilding." },
        { title: "What council requires", text: "Council may ask for a heritage report and more detailed drawings, and the permit adds time before work starts." },
        { title: "Matching the original", text: "Profiled weatherboards, timber windows and period details cost more to match than to replace with standard parts." },
        { title: "What's found once we open up", text: "Asbestos from past renovations, or damage that only shows once the walls and floors are open." },
      ],
    },
    faqs: [
      { q: "Do I need a permit to renovate a heritage home?", a: "Under a heritage overlay, most changes you can see from the street need a planning permit. We check your property's overlay and lodge what's needed." },
      { q: "Can we add an extension to a period home?", a: "Usually, yes, at the back where the street sees less of it. Council will want the new part to sit quietly behind the original house." },
      { q: "What if you find problems in the old structure?", a: "You see it first. We walk you through the problem and the price to fix it, and the work only starts once you've agreed." },
      { q: "Have you renovated a heritage-listed home?", a: "Yes. As well as period homes under heritage overlays, we've renovated a heritage-listed house." },
      fixedPriceFaq,
    ],
  },
};
