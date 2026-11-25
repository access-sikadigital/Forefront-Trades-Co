/**
 * Starting prices, consult fees, the enquiry steps and the shared FAQ.
 *
 * Source: the owner's private preview r5.2 (Oct 2026) — PRICE_EX, RANGES, FEES and
 * FAQ in that prototype, including the owner changes of 11 Oct (one consult fee
 * description for every service; $350 + GST for full homes and extensions).
 * Prices are stored before GST; incl. GST is calculated at 10%.
 */

export const GST = 0.1;
export const inclGst = (ex: number) => Math.round(ex * (1 + GST));
export const money = (n: number) => `$${n.toLocaleString("en-AU")}`;

export type RangeId = "entry" | "premium" | "signature" | "platinum";

export const ranges: { id: RangeId; name: string; short: string; fit: string }[] = [
  { id: "entry", name: "Entry Range", short: "Entry", fit: "Typically a rental property, or a first-home buyer on a budget." },
  { id: "premium", name: "Premium Range", short: "Premium", fit: "Living there for 3–5 years, an investment property, or renovating with the intention to sell." },
  { id: "signature", name: "Signature Range", short: "Signature", fit: "Living there for 5–10 years, adding space and value as a step towards a forever home." },
  { id: "platinum", name: "Platinum Range", short: "Platinum", fit: "Bespoke, custom work for a forever home." },
];

export const rangeNote = "The years describe the kind of ownership each range suits, not build times or warranties.";

export type PricedRoom = "main" | "ensuite" | "powder" | "kitchen" | "laundry";

/** Starting prices before GST, in range order. null = price on application. */
export const startingPrices: Record<PricedRoom, { label: string; href: string; ex: (number | null)[] }> = {
  main: { label: "Main bathroom", href: "/bathroom-renovations/", ex: [30000, 35000, 45000, null] },
  ensuite: { label: "Ensuite", href: "/bathroom-renovations/ensuites/", ex: [25000, 30000, 35000, null] },
  powder: { label: "Powder room", href: "/bathroom-renovations/", ex: [15000, 20000, 25000, null] },
  kitchen: { label: "Kitchen", href: "/kitchen-renovations/", ex: [30000, 35000, 45000, null] },
  laundry: { label: "Laundry", href: "/laundry-renovations/", ex: [20000, 25000, 30000, null] },
};

export const priceCopy = {
  qualifier: "Guide starting prices, not quotes. Your final price depends on the agreed scope, documented inclusions, your selections and the project’s requirements.",
  inclusions: "Detailed inclusions are confirmed in your project proposal.",
  photos: "Nothing photographed on this site is a list of what a starting price includes.",
  package: "Renovating more than one space? Ask about a tailored package. Starting prices aren’t added together into a quote.",
};

/** Work priced after a consultation rather than from a starting rate. */
export const consultPriced = {
  home: "Whole-home renovations are priced after a consultation, because scope, structure and approvals vary too much for a starting price.",
  extensions: "Extensions are priced after a consultation, because scope, structure and approvals vary too much for a starting price.",
  heritage: "Heritage restoration is priced after a consultation, once we know what needs retaining, repairing and approving.",
} as const;

/** In-depth home consult. The first phone or video conversation is always free. */
export const consult = {
  firstCall: "Initial phone or video conversations are free.",
  standardEx: 250,
  largeEx: 350, // full homes and extensions (owner change, 11 Oct)
  terms: "Subject to distance and scope of works.",
  local: "Free in-depth consults for local homes in postcode 3012.",
  credit: "If you choose Forefront as your builder, the consult fee is credited against your total bill. Terms are confirmed before you book.",
  /** One line for anywhere the fee needs stating in full. */
  summary: "An in-depth home consult is from $250 + GST ($350 + GST for full homes and extensions), subject to distance and scope, and free for local homes in postcode 3012.",
};

/** What happens after someone enquires (shown beside every enquiry form). */
export const nextSteps = [
  { title: "A free phone or video conversation", text: "About the project, the location, where you’re up to and your priorities." },
  { title: "Builder review", text: "The builder reviews the scope and preliminary estimate before talking it through with you." },
  {
    title: "In-depth consult, if you go ahead",
    text: "A consult at your home, from $250 + GST, or $350 + GST for full homes and extensions (subject to distance and scope; free in postcode 3012). If you choose Forefront as your builder, a paid fee is credited against your total bill.",
  },
  { title: "Design, documents and contract", text: "Before anything is built." },
];

export const commonFaqs = [
  {
    q: "What should I prepare before we talk?",
    a: "Nothing is required to enquire. If you have them, photos, rough measurements, inspiration images, existing plans and any relevant correspondence all help us understand the project sooner.",
  },
  {
    q: "Can you help with the design?",
    a: "Yes. Interior design runs from your brief and a concept, to fixtures, fittings and a theme, to a 3D design so you can see it before it is documented.",
  },
  { q: "I already have plans. Do you start again?", a: "No. We review your existing plans first and only add or change what the project needs." },
  {
    q: "What’s the difference between the preliminary and final estimate?",
    a: "The preliminary estimate gives a budget direction so you can decide whether to keep going. The final estimate comes after design and documentation, and the contract price comes from that documented scope.",
  },
  {
    q: "Are there fees before the contract?",
    a: "The first phone or video conversation is free. The in-depth home consult is from $250 + GST ($275 incl. GST), or from $350 + GST ($385 incl. GST) for full homes and extensions, subject to distance and scope of works, and free for local homes in postcode 3012. A paid consult fee is credited against your total bill if you build with us, subject to terms. A contract-preparation fee, based on project value, is credited against the contract price.",
  },
  {
    q: "When do I choose fixtures and finishes?",
    a: "During design, and they are confirmed before ordering so materials can be pre-purchased and trades booked.",
  },
  {
    q: "How is the work scheduled?",
    a: "Planning, design, selection, scheduling and deadlines, in that order. Scheduling covers pre-purchasing materials and booking trades. Deadlines means allocating start and end dates. Your timeframe is set out in your contract.",
  },
  {
    q: "What happens at handover?",
    a: "A final inspection with you, agreed outstanding items, a final clean, and a handover pack with the certificates that apply, product information and care and maintenance information. Professional photos or video are optional.",
  },
];

/** Design & Construct: the eight steps, with the two checkpoints before building. */
export const dcSteps = [
  { phase: "Design", title: "Enquiry and builder review", text: "A free conversation, then the builder reviews the scope and preliminary estimate." },
  { phase: "Design", title: "In-depth consult", text: "A consult at your home once you decide to proceed; free in postcode 3012." },
  { phase: "Design", title: "Interior design", text: "Brief and concept, then fixtures, fittings and theme, then 3D." },
  { phase: "Design", title: "Drafting and final estimate", text: "Architectural drafting and documentation, then the final estimate." },
  { phase: "Design", title: "Contract preparation", text: "Scope, drawings, selections and price in one package you review before signing.", checkpoint: true },
  { phase: "Construct", title: "Ready to start", text: "Approvals if required, materials pre-purchased, trades booked, dates allocated.", checkpoint: true },
  { phase: "Construct", title: "Construction", text: "Built in stages, each checked before it is covered." },
  { phase: "Handover", title: "Handover", text: "Walkthrough, outstanding items, clean and your handover pack." },
];
