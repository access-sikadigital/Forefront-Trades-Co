/**
 * Blog posts. Topics and keywords from the Content Plan sheet (Keyword Map &
 * Sitemap v2). Written with the Copy Machine; facts about Forefront trace to the
 * proof ledger (see home.ts), and planning notes are general Victorian guidance.
 * TODO(client): the three cost guides need real price ranges before they're written.
 */
type Img = { src: string; alt: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: { title: string; text: string }[] }
  | { type: "note"; text: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  keyword: string;
  excerpt: string;
  metaDescription: string;
  readMinutes: number;
  image?: Img;
  related: { label: string; href: string };
  body: Block[];
};

export const blogHub = {
  meta: {
    title: "Renovation Blog",
    description: "Straight answers on renovating in Melbourne: timelines, layout ideas and heritage overlay rules, from the team at Forefront Trades Co.",
  },
  hero: {
    h1: "Renovation blog",
    image: { src: "/images/projects/footscray/living.jpg", alt: "Styled living room with herringbone floors, Footscray" },
    title: ["Straight answers", "before you renovate."],
    intro: "Timelines, layout ideas and planning rules for Melbourne homes, from the team that builds them.",
  },
};

export const posts: Post[] = [
  {
    slug: "how-long-does-a-bathroom-renovation-take",
    title: "How long does a bathroom renovation take?",
    category: "Bathrooms",
    keyword: "how long does a bathroom renovation take",
    excerpt: "Most bathrooms take 4–6 weeks on site. Here's what happens in that time, what comes before it, and what makes it run longer.",
    metaDescription: "Most bathroom renovations take 4–6 weeks on site. What happens at each stage, what comes before the build, and what makes a bathroom take longer.",
    readMinutes: 4,
    image: { src: "/images/projects/footscray/bathroom-family.jpg", alt: "Bathroom with freestanding bath and frameless shower, Footscray" },
    related: { label: "Bathroom renovations", href: "/bathroom-renovations/" },
    body: [
      { type: "h2", text: "The short answer" },
      { type: "p", text: "Most bathrooms we build take 4–6 weeks on site, from the first day of demolition to the day you can use the room. Design, selections and any permits come before that, and your finish date is set in the contract before demolition starts." },
      { type: "h2", text: "What comes before the build" },
      { type: "p", text: "Most of the waiting happens before the build, and so do most of the time savings. You choose the layout, tiles, tapware, vanity and mirrors at design stage, so nothing on site waits for a decision." },
      { type: "p", text: "If the job touches the structure or needs a permit, we tell you at the first visit and lodge it ourselves." },
      { type: "h2", text: "What happens on site, in order" },
      {
        type: "ol",
        items: [
          { title: "Demolition", text: "The noisiest days. Everything comes out back to the frame, and anything hidden behind the old tiles shows up now." },
          { title: "Plumbing and electrical", text: "New pipes, drains and wiring are run to the new layout while the walls are still open." },
          { title: "Waterproofing", text: "The wet areas are sealed and left to cure. It's quiet on site, but nothing can be tiled until it's done." },
          { title: "Tiling", text: "Often the longest stage, especially with tiles floor to ceiling. The floor goes down first, then the walls." },
          { title: "Fit-off", text: "The room starts to look finished: vanity, toilet, tapware, screen, mirrors and lights." },
          { title: "Handover", text: "A final clean, a walkthrough with you, and the room is yours to use." },
        ],
      },
      { type: "h2", text: "What makes it take longer" },
      {
        type: "ul",
        items: [
          "Moving plumbing. A toilet or shower in a new spot needs new pipes run through the floor or wall.",
          "What's behind the walls. Rot, old pipes or failing drains only show once the room is opened, and fixing them adds days.",
          "Made-to-measure pieces. A custom vanity or stone top is made to order, so it's ordered early.",
          "More than one room. Two or three bathrooms take longer overall, but one job is usually quicker than the same rooms done one after another.",
        ],
      },
      { type: "h2", text: "How long you'll be without a bathroom" },
      { type: "p", text: "Usually the real question. If it's your only bathroom, you'll be without it for most of the build, so work out early where you'll shower for those weeks. If there's a second toilet or shower in the house, ask us at the first visit whether it can stay in use." },
      { type: "note", text: "Planning a bathroom? Book a free home visit and we'll tell you how long yours would take, and how long you'd be without it." },
    ],
  },
  {
    slug: "laundry-renovation-ideas",
    title: "Laundry renovation ideas that actually work",
    category: "Laundries",
    keyword: "laundry renovation ideas",
    excerpt: "Seven laundry ideas from the ones we build, from a fold-away ironing board to where the mop actually goes.",
    metaDescription: "Seven laundry renovation ideas that work in real Melbourne homes: built-in ironing boards, full-length benches, tiled walls and more.",
    readMinutes: 4,
    image: { src: "/images/projects/footscray/laundry-tap.jpg", alt: "Brushed brass tap over a white sink with sage green tiles, Footscray" },
    related: { label: "Laundry renovations", href: "/laundry-renovations/" },
    body: [
      { type: "p", text: "Most laundries go wrong the same way: the machines fit, and everything else ends up on the floor. These are the ideas that make the biggest difference in the laundries we build." },
      { type: "h2", text: "1. Plan it around your routine" },
      { type: "p", text: "Before choosing a single tile, work out what happens in the room: where the basket lands, where you fold, where things dry. The cupboards and bench go where those jobs happen." },
      { type: "h2", text: "2. Build the ironing board in" },
      { type: "p", text: "A fold-away ironing board inside the joinery saves a cupboard and a trip down the hallway. We've drawn one into a recent laundry." },
      { type: "h2", text: "3. Give the tall things a home" },
      { type: "p", text: "A full-height cupboard for the mop, broom and vacuum stops them leaning in a corner." },
      { type: "h2", text: "4. Choose the machines before the joinery" },
      { type: "p", text: "A front loader can sit under a bench or take a dryer stacked on top. A top loader can do neither. Pick the machines first, so the cupboards are built to their real sizes, door swing included." },
      { type: "h2", text: "5. Run the bench the full length" },
      { type: "p", text: "A benchtop along the whole wall gives you somewhere to fold and room for cupboards underneath, like the long white bench in our Footscray laundry." },
      { type: "h2", text: "6. Tile up the wall" },
      { type: "p", text: "Tiles behind the tub and bench take the splashes, and they're the easiest place to add colour to a small room." },
      { type: "h2", text: "7. Do it with another room" },
      { type: "p", text: "A laundry often sits next to the kitchen or bathroom, so doing them together means one round of trades and disruption instead of two. Nicole in Brookfield did her laundry with her kitchen." },
      { type: "h2", text: "Before you start" },
      { type: "p", text: "Moving the washer or tub means moving water and waste pipes, which adds to the price. If they can stay where they are, more of your budget goes into the joinery." },
      { type: "note", text: "Planning a laundry? Book a free home visit, and bring the list of everything it has to hold." },
    ],
  },
  {
    slug: "renovating-under-a-heritage-overlay",
    title: "Renovating under a heritage overlay in Melbourne",
    category: "Planning",
    keyword: "heritage overlay renovation melbourne",
    excerpt: "What a heritage overlay is, how to check if your home has one, what it usually controls, and what it means for your renovation or extension.",
    metaDescription: "Renovating a home under a heritage overlay in Melbourne: how to check for one, what usually needs a planning permit, and how it affects extensions.",
    readMinutes: 5,
    // Generated atmosphere image of a period streetscape (not a Forefront project).
    image: { src: "/images/generated/heritage-streetscape.jpg", alt: "Edwardian red-brick villas on a tree-lined Melbourne street" },
    related: { label: "Heritage restorations", href: "/heritage-renovations/" },
    body: [
      { type: "h2", text: "What a heritage overlay is" },
      { type: "p", text: "A heritage overlay is a planning control your council applies to a property, a street or a whole precinct. It protects how a place looks and why it matters, mostly what you can see from the street." },
      { type: "h2", text: "How to check if your home has one" },
      { type: "p", text: "Look up your address on VicPlan, the Victorian Government's free planning property report. It lists every overlay on your land, including any heritage overlay, shown as HO and a number. Your council's planning department can confirm it too." },
      { type: "h2", text: "What usually needs a planning permit" },
      {
        type: "ul",
        items: [
          "Demolishing all or part of the house.",
          "External changes, such as new windows, a verandah or a new roof.",
          "Extensions and new buildings on the land.",
          "Painting a surface that has never been painted, and under some overlays any external painting.",
          "Front fences, under some overlays.",
        ],
      },
      { type: "p", text: "Every overlay has its own schedule, which says exactly what's controlled for your property. That's the document to check before any drawing starts." },
      { type: "h2", text: "What usually doesn't" },
      { type: "p", text: "Most changes inside the house, such as a new kitchen, bathroom or laundry within the existing walls, don't need a heritage permit, unless the schedule turns on interior controls for your property. Like-for-like repairs that don't change how the house looks are usually exempt too." },
      { type: "h2", text: "Extensions under a heritage overlay" },
      { type: "p", text: "Councils generally look for extensions that sit behind the original house and don't dominate it from the street. A rear extension, or a second storey set well back, is usually easier to get through than a change to the front." },
      { type: "h2", text: "How it affects your timeline" },
      { type: "p", text: "A planning permit adds time before the build can start, and how long depends on your council and how complete the application is. That's why the overlay shapes our first drawings, rather than sending us back to redraw after council replies." },
      { type: "h2", text: "Check the house, not just the overlay" },
      { type: "p", text: "The overlay tells you what council will allow. It says nothing about what's under the floor or behind the walls, and in a Victorian or Edwardian house that can need as much planning as the permit." },
      { type: "note", text: "Renovating under an overlay? Book a free home visit and we'll look up your overlay and tell you what it's likely to mean for your plans." },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((x) => x.slug === slug);
