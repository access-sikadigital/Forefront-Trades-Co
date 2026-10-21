/**
 * About and Design & Construct pages. Written with the Copy Machine
 * (direct-response-copy → copy-chief). Facts trace to the homepage proof ledger
 * (see home.ts); TODO(client) marks anything still to confirm.
 */
import type { Faq } from "@/components/sections/shared/FaqSection";
import type { HeroData } from "@/components/sections/shared/PageHero";

type Img = { src: string; alt: string };

const fixedPriceFaq: Faq = {
  q: "Can the price change after I sign?",
  a: "Only with your approval. If you change the scope, or we find a problem once the walls are open, we price it and you say yes or no before the work is done.",
};

export const about = {
  meta: {
    title: "About Us",
    description:
      "A Maribyrnong design & construct builder doing Renovations & Extensions across Melbourne's inner west and north on a fixed price. Registered Builder CDBU76389.",
  },
  hero: {
    h1: "About Forefront Trades Co.",
    title: ["Builders who sign", "up to a finish date."],
    intro:
      "We design and build Renovations & Extensions across Melbourne's inner west and north, on a fixed-price contract.",
    image: { src: "/images/team/builders-van.jpg", alt: "Two Forefront Trades Co. builders beside the company van" },
    // TODO(client): confirm 30+ years.
    facts: [
      { label: "Based in", value: "Maribyrnong" },
      { label: "Registered Builder", value: "CDBU76389" },
      { label: "Building in Melbourne", value: "30+ years" },
    ],
  } satisfies HeroData,
  story: {
    label: "Why we work this way",
    title: "Renovations go wrong in two places: the price and the date.",
    text: [
      "One client came to us after years in court with their last builder. Most renovations go wrong more quietly: a price that grows once the walls are open, and a finish that slides a week at a time.",
      "So both go in the contract you sign: a fixed price for the agreed scope, and the completion date. Then we book every trade to that date ourselves.",
    ],
    // Verbatim excerpt from Pat Iliopoulos's Google review (content/reviews.ts); the home page uses Chris Williams.
    quote: { text: "Installation was done on schedule and the crew were respectful of my home keeping the area clean and minimizing disruption.", name: "Pat Iliopoulos", source: "Google review" },
    image: { src: "/images/team/founders-bw.jpg", alt: "The founders of Forefront Trades Co." },
  },
  team: {
    label: "Who you'll deal with",
    title: "Builders and designers on the same job.",
    intro: "We run the build and every trade on it. You work through layouts and finishes with the interior design studios we partner with.",
    // TODO(client): add names and roles for each photo.
    people: [
      { role: "Construction", image: { src: "/images/team/founder.jpg", alt: "Forefront Trades Co. founder" } },
      { role: "Interior design", image: { src: "/images/team/interior-designer-portrait.jpg", alt: "Interior designer" } },
    ] satisfies { role: string; image: Img }[],
  },
};

export const designAndConstruct = {
  path: "/design-and-construct/",
  meta: {
    title: "Design & Construct Builders Melbourne",
    description:
      "Design and construct Renovations & Extensions across Melbourne's inner west and north. Design, engineering, permits and build on one fixed-price contract.",
  },
  hero: {
    h1: "Design and construct builders in Melbourne",
    title: ["Designed and built", "on one contract."],
    intro:
      "We design your renovation knowing we'll be the ones building it. The plans you approve are plans we've already worked out how to build.",
    // Generated atmosphere image (not a Forefront project).
    image: { src: "/images/generated/design-construct-hero.jpg", alt: "Renovation plans with tile, timber, stone and tapware samples on a design table" },
    // TODO(client): confirm the interior design offer (Open Question #5).
    facts: [
      { label: "Interior design", value: "Up to $10k included" },
      { label: "Contract", value: "Fixed price" },
      { label: "Finish date", value: "In writing" },
    ],
  } satisfies HeroData,
  pillarsHeading: {
    label: "What's included",
    title: "Four jobs, one contract.",
    intro: "On most renovations these jobs are split between separate firms, and you're the one in the middle.",
  },
  compare: {
    label: "Why it matters",
    title: "Plans drawn with the build in mind.",
    intro: "When one firm draws the plans and another builds them, you can pay for a full design before anyone tells you what it will cost to build.",
    columns: ["Separate designer and builder", "Design & construct with us"],
    rows: [
      { topic: "The build price", them: "Quoted after the plans are finished", us: "Worked out as the design develops, by the people who'll build it" },
      { topic: "Finishes and fittings", them: "Often chosen later and priced as extras", us: "Picked with the interior designers before you sign" },
      { topic: "Engineering and permits", them: "Another firm to brief and follow up", us: "Ours to arrange and chase, on the same contract" },
      { topic: "When something needs deciding", them: "Two firms to get on the same page", us: "One call, to us" },
    ],
  },
  faqs: [
    {
      q: "What is design and construct?",
      a: "One builder is responsible for both the design and the build, under one contract. If something in the drawings doesn't work on site, it's our problem to solve, not an argument between two firms.",
    },
    {
      q: "How long does design and construct take?",
      a: "Two stages. Design and permits come first, and their length depends mostly on your council. Then the build: usually 4–6 weeks on site for a single room and 3–6 months for a full home, to a finish date in your contract.",
    },
    {
      // TODO(client): confirm the offer and its exact inclusions.
      q: "What does the interior design include?",
      a: "On new design & construct projects, we include up to $10,000 of interior design: space planning, materials and finishes, and your fixtures and fittings, chosen with the design studios we partner with.",
    },
    {
      q: "Do you handle council and permits?",
      a: "Yes. We brief the structural engineer, prepare the planning and building permit applications and deal with council for you.",
    },
    fixedPriceFaq,
  ] satisfies Faq[],
};
