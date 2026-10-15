/** /warranty-and-insurance/ content. */
import type { Faq } from "@/components/sections/shared/FaqSection";
import type { HeroData } from "@/components/sections/shared/PageHero";

export type WarrantyPage = {
  meta: { title: string; description: string };
  hero: HeroData;
  intro: { label: string; title: string; text: string };
  items: { title: string; summary: string; points: string[] }[];
  faqs: Faq[];
};

/**
 * Written with the Copy Machine (direct-response-copy → copy-chief).
 * Keyword: "domestic building insurance victoria" (140/mo).
 * Known facts only (proof ledger, home.ts): domestic building insurance on jobs over
 * $16,000 under Victorian law, covering the owner if the builder dies, disappears or
 * becomes insolvent; 7-year construction warranty; 3-year maintenance warranty;
 * fixed price and completion date in the contract; Registered Builder CDBU76389;
 * warranty documents handed over at the final walkthrough. How the insurance works
 * is general guidance, not legal advice.
 */
// TODO(client): confirm the insurer (VMIA) and the cover details (limits, defect periods) before adding them here.
// TODO(client): state what the 7-year construction and 3-year maintenance warranties each cover, and when they start.
export const warrantyPage: WarrantyPage = {
  meta: {
    title: "Domestic Building Insurance Victoria",
    description:
      "How domestic building insurance works in Victoria: when it's required, what it covers if a builder goes under, and the 7-year and 3-year warranties on our jobs.",
  },
  hero: {
    h1: "Warranty & domestic building insurance in Victoria",
    title: ["If we ever went under,", "you'd still be covered."],
    intro:
      "Victorian law requires domestic building insurance on building work over $16,000. Our jobs also carry a 7-year construction warranty and a 3-year maintenance warranty.",
    image: { src: "/images/compare/craigieburn-kitchen-before.jpg", alt: "Kitchen mid-build, before benchtops and cabinetry, Craigieburn" },
    facts: [
      { label: "Registered Builder", value: "CDBU76389" },
      { label: "Insurance", value: "Jobs over $16,000" },
      { label: "Construction warranty", value: "7 years" },
    ],
  },
  intro: {
    label: "Why it matters",
    title: "Builders do go broke halfway through a job.",
    text: "When it happens, the homeowner is left with a half-built house, a deposit already paid and nobody to finish the work. Domestic building insurance exists for exactly that, which is why Victoria makes it compulsory on any job over $16,000. Before you pay a deposit to anyone, ask to see their certificate of insurance.",
  },
  items: [
    {
      title: "Domestic building insurance",
      summary: "Required by Victorian law on domestic building work over $16,000, and it's there to protect you.",
      // TODO(client): confirm we supply the certificate of insurance with every contract over $16,000.
      points: [
        "Taken out by the builder before the work goes ahead",
        "Covers incomplete or defective work if the builder dies, disappears or becomes insolvent",
        "Applies to renovations and extensions as well as new homes",
        "Ask for the certificate before you pay a deposit",
      ],
    },
    {
      title: "7-year construction warranty",
      summary: "Seven years on the construction work we carry out.",
      points: ["From Registered Builder CDBU76389", "Your warranty documents are handed over at the final walkthrough"],
    },
    {
      title: "3-year maintenance warranty",
      summary: "Three years of maintenance cover on the finished job.",
      points: ["Starts when the job is handed over", "Runs alongside the 7-year construction warranty"],
    },
    {
      title: "Your contract",
      summary: "The price and the completion date are both written into the contract you sign.",
      points: [
        "A fixed price for the agreed scope",
        "Any change is priced, and you approve it before it's done",
        "A completion date you can point to in the contract",
      ],
    },
  ],
  faqs: [
    {
      q: "What is domestic building insurance?",
      a: "Insurance that protects the homeowner. In Victoria it covers incomplete or defective building work when the builder has died, disappeared or become insolvent, so you can have the job finished or fixed by someone else.",
    },
    {
      q: "When is domestic building insurance required in Victoria?",
      a: "When domestic building work is worth more than $16,000. That includes renovations and extensions, and the builder has to have it in place before the work goes ahead.",
    },
    {
      q: "Does it cover me if I'm unhappy with the work?",
      a: "Not while your builder is still trading. Defects go back to the builder to fix, under your contract and warranties. The insurance steps in when the builder can't be held to that because they've died, disappeared or become insolvent.",
    },
    {
      q: "How do I check a builder is insured?",
      a: "Ask for the certificate of insurance before you pay a deposit. It should name your property and the builder. If a builder can't produce one for a job over $16,000, don't sign.",
    },
    {
      q: "How do I check a builder is registered?",
      a: "Look up their registration number on the Victorian register of building practitioners. Ours is CDBU76389.",
    },
    {
      q: "What do your warranties cover?",
      a: "Seven years on the construction work and three years of maintenance cover from handover. We'll take you through exactly what each one covers before you sign.",
    },
  ],
};
