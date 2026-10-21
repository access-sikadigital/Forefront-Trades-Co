/**
 * Service-specific sections: each service page gets its own combination, so no two
 * pages look alike below the hero (client feedback). Written with the Copy Machine.
 *
 * Photos are real handover photography from the content library (Footscray and
 * Altona shoots, Aug 2023); captions describe only what is visible. Layout and
 * planning notes are general category knowledge, not claims about past jobs.
 * TODO(client) marks anything still to confirm.
 */
import type { ServiceSlug } from "@/content/services";

type Img = { src: string; alt: string };

export type ServiceExtra =
  | { type: "cards"; label: string; title: string; intro?: string; tone?: "white"; items: { title: string; text: string; image?: Img; tag?: string; href?: string }[] }
  | { type: "mosaic"; label: string; title: string; intro?: string; items: { image: Img; caption: string }[] }
  | { type: "steps"; label: string; title: string; intro?: string; image?: Img; steps: { title: string; text: string }[]; total?: { label: string; value: string }; note?: string }
  | { type: "split"; label: string; title: string; intro?: string; options: { title: string; bestFor: string; image?: Img; points: string[]; href?: string }[] }
  | { type: "feature"; label: string; title: string; text: string; image: Img; points: string[] }
  | { type: "tour"; label: string; title: string; intro?: string; rooms: { room: string; text: string; image: Img }[] }
  | { type: "checks"; label: string; title: string; intro?: string; note?: string; columns: { title: string; items: string[] }[] };

const p = (path: string, alt: string): Img => ({ src: `/images/projects/${path}`, alt });

export const serviceExtras: Record<ServiceSlug, ServiceExtra[]> = {
  kitchen: [
    {
      type: "cards",
      label: "Kitchen layouts",
      title: "Three layouts, and when each one works.",
      intro: "Most rooms suit one or two of these. At the first visit we'll tell you which.",
      items: [
        { title: "Island kitchen", text: "A bench you can work at and sit at, between the kitchen and the living area. It needs room to walk around on every side.", image: p("footscray/kitchen-island-run.jpg", "White island kitchen with gas cooktop and herringbone floor, Footscray"), tag: "Footscray" },
        { title: "Galley kitchen", text: "One long run, or two facing each other. It gets the most out of a narrow room.", image: p("altona/kitchen-galley.jpg", "Galley kitchen with induction cooktop and white finger tiles, Altona"), tag: "Altona" },
        { title: "Open plan", text: "Kitchen, dining and living in one room, so whoever's cooking is still part of the conversation.", image: p("footscray/kitchen-dining.jpg", "Open-plan kitchen and dining with a round timber table, Footscray"), tag: "Footscray" },
      ],
    },
    {
      type: "mosaic",
      label: "The details",
      title: "Small choices you'll use every day.",
      intro: "Gas or induction, brass or black, shaker or flat: you choose each one before anything is ordered.",
      items: [
        { image: p("footscray/cooktop.jpg", "Five-burner gas cooktop in a white benchtop, Footscray"), caption: "Five-burner gas cooktop, Footscray" },
        { image: p("footscray/kitchen-sink-run.jpg", "Shaker cabinetry with brass tapware and knobs, Footscray"), caption: "Shaker doors and brass tapware, Footscray" },
        { image: p("altona/kitchen-mixer.jpg", "Black and steel pull-down kitchen mixer, Altona"), caption: "Pull-down mixer, Altona" },
        { image: p("altona/kitchen-induction.jpg", "Induction cooktop under an integrated rangehood, Altona"), caption: "Induction cooktop and integrated rangehood, Altona" },
      ],
    },
  ],

  bathroom: [
    {
      type: "cards",
      label: "Which bathroom",
      title: "Planned around who'll use it.",
      intro: "One person getting ready, a family at bath time, or guests passing through.",
      items: [
        { title: "Ensuite", href: "/bathroom-renovations/ensuites/", text: "Off the main bedroom, often with a double vanity so two people can get ready at once.", image: p("footscray/ensuite.jpg", "Ensuite with double basins, backlit round mirrors and a frameless shower, Footscray"), tag: "Footscray" },
        { title: "Main bathroom", text: "The family bathroom, usually with a bath, a separate shower and storage for everyone.", image: p("footscray/main-bathroom.jpg", "Main bathroom with freestanding bath and double vanity, Footscray"), tag: "Footscray" },
        { title: "Powder room", text: "A toilet and basin near the living areas, so guests never need the family bathroom. Small enough to carry a bold finish.", image: p("altona/toilet-terrazzo.jpg", "Toilet with a terrazzo feature wall, Altona"), tag: "Altona" },
      ],
    },
    {
      type: "steps",
      label: "How it's built",
      title: "Six stages, in order.",
      intro: "The order matters: get one stage wrong and everything on top of it comes out.",
      image: p("footscray/shower-tiles.jpg", "Shower with sage green tiles and brushed brass fittings, Footscray"),
      steps: [
        { title: "Demolition", text: "Out come the old fixtures, tiles and linings, and we check what's been hiding behind them." },
        { title: "Plumbing and electrical", text: "Pipes, drains and wiring go where the new layout needs them." },
        // TODO(client): confirm the waterproofing standard wording (AS 3740) and who certifies it.
        { title: "Waterproofing", text: "A membrane goes over the floor and up the wet-area walls, then it's checked before tiling." },
        { title: "Tiling", text: "Floor first, then walls, with the falls set so water runs to the waste." },
        { title: "Fit-off", text: "Vanity, toilet, tapware, shower screen, mirrors and lights go in." },
        { title: "Handover", text: "We walk the finished room with you and hand over your warranty documents." },
      ],
      total: { label: "Most bathrooms, on site", value: "4–6 weeks" },
      // Owner brief: every schedule is a sample, not a quote. TODO(client): confirm weeks (brief drafts 6–7).
      note: "A typical order, not a quote. Your contract sets the real programme.",
    },
  ],

  laundry: [
    {
      type: "cards",
      label: "Laundry layouts",
      title: "Where the washer and dryer go.",
      intro: "It mostly comes down to how wide the room is.",
      tone: "white",
      items: [
        { title: "Under the bench", text: "Washer and dryer side by side under a benchtop, so the top becomes your folding space.", tag: "Most bench space" },
        { title: "Stacked", text: "Dryer on top of the washer. It saves width in a narrow room and leaves space for a tub and cupboards.", tag: "Narrow rooms" },
        { title: "Behind doors", text: "A laundry in a cupboard off the hallway or kitchen, for homes without a separate room.", tag: "No laundry room" },
      ],
    },
    {
      type: "feature",
      label: "Altona",
      title: "A whole laundry in one run.",
      text: "Putting the front loader under the bench keeps this Altona laundry to one tidy run, with the sink beside it and the window above.",
      image: p("altona/laundry.jpg", "Laundry with a front loader under the bench and a black undermount sink, Altona"),
      points: ["Front loader under the bench", "Deep black undermount sink", "Pull-down mixer", "Tiled splashback to the window"],
    },
  ],

  home: [
    {
      type: "checks",
      label: "What's covered",
      title: "From the stumps to the front fence.",
      intro: "Not every house needs all of it, but this is what we look at.",
      columns: [
        { title: "Structure and services", items: ["Walls taken out or moved", "Restumping and levelling floors", "Wiring and plumbing renewed", "Drainage replaced where it's failing"] },
        { title: "Rooms", items: ["Kitchen and butler's pantry", "Bathrooms and ensuite", "Laundry", "Bedrooms and walk-in robes", "Living areas"] },
        { title: "Finishes and outside", items: ["Flooring, joinery and lighting", "Paint inside and out", "Facade and front fence", "Landscaping"] },
      ],
    },
    {
      type: "tour",
      label: "Room by room",
      title: "Inside one full renovation in Footscray.",
      intro: "Eight rooms from one whole-house job. Swipe through.",
      rooms: [
        { room: "Kitchen", text: "Island kitchen opening onto the dining area.", image: p("footscray/kitchen.jpg", "White island kitchen with round dining table, Footscray") },
        { room: "Living", text: "Open-plan living with herringbone floors.", image: p("footscray/living-wide.jpg", "Open-plan living with herringbone floor, Footscray") },
        { room: "Second living", text: "A second living area with doors out to the pool.", image: p("footscray/second-living.jpg", "Second living area with glass doors to the yard, Footscray") },
        { room: "Main bathroom", text: "Freestanding bath and a double vanity.", image: p("footscray/main-bathroom.jpg", "Main bathroom with freestanding bath, Footscray") },
        { room: "Ensuite", text: "Double basins and backlit mirrors.", image: p("footscray/ensuite.jpg", "Ensuite with backlit round mirrors, Footscray") },
        { room: "Walk-in robe", text: "Timber joinery through to the main bedroom.", image: p("footscray/robe-to-bedroom.jpg", "Walk-in robe leading to the main bedroom, Footscray") },
        { room: "Laundry", text: "Long benchtop with storage underneath.", image: p("footscray/laundry-wide.jpg", "Laundry with a long white benchtop, Footscray") },
        { room: "Bedroom", text: "One of five bedrooms.", image: p("footscray/bedroom-3.jpg", "Bedroom with jute rug and rattan chair, Footscray") },
      ],
    },
  ],

  extensions: [
    {
      type: "split",
      label: "Up or out",
      title: "The trade-offs, side by side.",
      intro: "Both add space. What you give up is different.",
      options: [
        {
          title: "Second storey",
          href: "/home-extensions/second-storey/",
          bestFor: "For smaller blocks, or a yard you won't give up.",
          image: p("footscray/extension-rear-wide.jpg", "Two-storey weatherboard rear extension, Footscray"),
          points: ["The backyard stays as it is", "The ground floor has to carry it, so expect an engineer and often steel", "Stairs take space from the rooms below", "You may need to move out while the roof is open"],
        },
        {
          title: "Ground floor",
          href: "/home-extensions/ground-floor/",
          bestFor: "For bigger blocks, and anyone who'd rather skip the stairs.",
          image: p("footscray/alfresco-lounge.jpg", "Covered alfresco off the rear extension, Footscray"),
          points: ["Gives up part of the backyard", "New rooms can sit level with the garden", "Simpler to engineer than going up, as a rule", "Easier to stay in the house while it's built"],
        },
      ],
    },
    {
      type: "feature",
      label: "Footscray",
      title: "Living that opens onto the yard.",
      text: "At the back of the Footscray house, the living areas open through glass doors to the alfresco and the plunge pool.",
      image: p("footscray/pool-rear.jpg", "Plunge pool beside the rear extension, Footscray"),
      points: ["Glass doors from the living area", "Covered alfresco", "Plunge pool with glass fencing", "Weatherboard to match the house"],
    },
  ],

  heritage: [
    {
      type: "checks",
      label: "Heritage overlays",
      title: "What a heritage overlay usually controls.",
      intro: "A general guide. The schedule to your overlay has the final say.",
      note: "Not sure if you're under an overlay? Look up your address on VicPlan, the Victorian Government's free planning property report.",
      columns: [
        { title: "Usually needs a planning permit", items: ["Knocking down any part of the house", "New windows, a verandah or a new roof", "Any extension or new building", "Paint on a surface that's never been painted", "A new front fence, under some overlays"] },
        { title: "Usually doesn't", items: ["Inside work, unless your schedule has interior controls", "Like-for-like repairs", "Repainting already-painted walls, unless your schedule has paint controls"] },
      ],
    },
    {
      type: "cards",
      label: "Period homes",
      title: "Victorian and Edwardian homes in the inner west.",
      tone: "white",
      items: [
        { title: "Victorian", text: "Built before 1901. Cottages and terraces, often with a verandah, cast-iron or timber fretwork and high ceilings. Many have a lean-to kitchen or bathroom at the back, added later and usually the first thing to replace.", tag: "Before 1901" },
        { title: "Edwardian", text: "Built roughly 1901 to the 1910s. Red brick or weatherboard, with gables, leadlight, decorative timberwork and often a return verandah.", tag: "1901 to 1910s" },
      ],
    },
  ],
};
