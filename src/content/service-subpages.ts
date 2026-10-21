/**
 * Sub-service pages: /home-extensions/second-storey/, /home-extensions/ground-floor/,
 * /bathroom-renovations/ensuites/. Same shape and layout as the service pillars.
 *
 * Written with the Copy Machine (direct-response-copy → copy-chief). Facts trace to the
 * proof ledger (home.ts, services.ts): fixed price, completion date in the contract,
 * 7-year construction and 3-year maintenance warranties, Registered Builder CDBU76389,
 * engineering and permits lodged by us, the Bundoora double-storey extension with steel
 * beams, the Footscray two-storey rear extension and pool, and 4–6 weeks on site for a
 * single room. Structural, planning and layout notes are general guidance, not claims
 * about past jobs. Quotes are verbatim excerpts from Google reviews (content/reviews.ts).
 * Each page uses its own pair of ServiceExtra types, and no sentence is shared with
 * the pillar pages. TODO(client) marks anything still to confirm.
 */
import type { ServiceExtra } from "@/content/service-extras";
import type { ServicePage } from "@/content/services";

export type SubServiceSlug = "second-storey" | "ground-floor" | "ensuites";

type Img = { src: string; alt: string };

const p = (path: string, alt: string): Img => ({ src: `/images/projects/${path}`, alt });

// Verbatim excerpts from Google reviews (content/reviews.ts). None of these lines is used on another page.
const quotes = {
  gokce: { text: "Tony and his team were very precise and did most of the thinking for me", name: "Gokce Kizilcik", project: "Google review" },
  onTime: {
    text: "A dedicated team of professionals who completed the job on time with nothing being too much trouble for them.",
    name: "Google reviewer",
    project: "Google review",
  },
  pat: {
    text: "The team was incredibly knowledgeable, taking time to explain the design options and material available.",
    name: "Pat Iliopoulos",
    project: "Shower renovation · Google review",
  },
  chris: {
    text: "We are now considering an ensuite renovation and look forward to once again dealing with Forefront Trades Co.",
    name: "Chris Williams",
    project: "Laundry renovation · Google review",
  },
};

const secondStorey: { page: ServicePage; extras: ServiceExtra[] } = {
  page: {
    slug: "second-storey",
    path: "/home-extensions/second-storey/",
    name: "Second storey extensions",
    keyword: "second storey extension",
    meta: {
      title: "Second Storey Extensions Melbourne",
      description:
        "Second storey extensions in Melbourne's inner west and north. We arrange the engineer, steel and permits, then build on a fixed price with a set finish date.",
    },
    hero: {
      h1: "Second storey extensions in Melbourne",
      title: ["More house,", "same backyard."],
      intro:
        "Bedrooms, a bathroom or a retreat built upstairs, with the engineering and permits sorted by us before the build begins.",
      image: p("footscray/extension-rear-wide.jpg", "Two-storey weatherboard rear extension above a plunge pool and paved terrace, Footscray"),
      facts: [
        { label: "Structural engineer", value: "Arranged by us" },
        { label: "Contract", value: "Fixed price" },
        { label: "Construction warranty", value: "7 years" },
      ],
    },
    focus: {
      label: "Can your house carry it?",
      title: "Every second storey starts underneath.",
      intro:
        "Your house was built to hold up a roof. A floor of bedrooms is a much heavier load. Before anything is drawn, a structural engineer works out what your footings and walls can carry, and what has to be added so they can carry more.",
      points: [
        { title: "On top, or up at the back", text: "A new floor can sit on the existing house, or rise from a new two-storey section behind it, as it does at our Footscray job. Building at the back often leaves the original roof where it is." },
        { title: "Steel where the engineer says", text: "Beams and posts carry the new floor down to footings that can take it. The double-storey extension we built in Bundoora needed steel beams to do it." },
        { title: "Where the stairs land", text: "The staircase takes floor space downstairs, so it's placed first and the rest of the plan works around it." },
        { title: "Permits, handled", text: "We deal with the building surveyor and council for you, from the first application through to approval." },
      ],
    },
    proof: {
      label: "Built upwards",
      title: "Going up in Footscray and Bundoora.",
      // TODO(client): add photos of the Bundoora double-storey extension (steel beams) and any other second storeys.
      items: [
        {
          image: p("footscray/alfresco-lounge.jpg", "Weatherboard upper storey rising above a single-storey roofline and paved outdoor lounge, Footscray"),
          suburb: "Footscray",
          caption: "Two-storey rear extension",
          href: "/projects/footscray/",
        },
      ],
      quotes: [quotes.gokce],
    },
    cost: {
      label: "Price factors",
      title: "Where the money goes when you build up.",
      intro: "The engineer sizes the structure before we price the job, so the steel is already counted in your fixed price.",
      factors: [
        { title: "What's under the house", text: "Footings that can take the extra load cost less than ones that need new pads or underpinning." },
        { title: "How much roof comes off", text: "A new floor on top means removing the old roof and building a new one higher up." },
        { title: "A bathroom upstairs", text: "Water and waste have to travel up through the house and back down, and the floor under the shower needs waterproofing." },
        { title: "The neighbours' side", text: "Screens, high-sill windows or a bigger setback, where the siting rules ask for them." },
      ],
    },
    faqs: [
      { q: "Can my house take a second storey?", a: "It depends on what's under it. The engineer's assessment tells us what your footings and walls can carry and what has to be added, before you commit to a design." },
      { q: "Will we have to move out?", a: "If the new floor goes on top of the house, usually yes for part of the build, because the roof comes off. A two-storey section at the back can often be built while you stay. We'll tell you which applies to your house before you sign." },
      { q: "Do I need a planning permit for a second storey?", a: "You'll need a building permit. Whether you also need a planning permit depends on your zone, the size of your block and any overlay, such as a heritage overlay. We check which apply and lodge them." },
      { q: "Will the new floor overlook the neighbours?", a: "Victoria's siting rules limit how much a new upper floor can look into next door's yard and windows, and how much it can shade them. We draw the upstairs windows and setbacks to those rules from the first plan." },
      { q: "Does the steel get added to the bill later?", a: "No. The engineering is finished before we price the build, so the beams and footings it calls for are in your fixed price. Anything you change after signing is priced, and you approve it before we do it." },
    ],
  },
  extras: [
    {
      type: "checks",
      label: "Before the drawings",
      title: "What we look at before anyone draws a stair.",
      intro: "General guidance. The engineer's report and your council have the final say.",
      columns: [
        { title: "The structure", items: ["Footings and stumps", "Wall framing and where loads can come down", "The roof, and how much of it has to come off", "Room for steel beams and posts"] },
        { title: "The block and the rules", items: ["Your zone, and any heritage or other overlay", "Overlooking and overshadowing next door", "Height and setbacks from the boundaries"] },
        { title: "Living with it", items: ["How much room the stair takes downstairs", "Whether you can stay home during the build", "Plumbing for a bathroom upstairs"] },
      ],
    },
    {
      type: "steps",
      label: "The build, in order",
      title: "How a second storey goes on.",
      intro: "The usual order for a new upper floor. Your engineer's design can change the details.",
      steps: [
        { title: "Engineer's assessment", text: "The engineer looks at what's holding up the house now and what the new floor will need." },
        { title: "Drawings and permits", text: "Plans and engineering are finished first, then the permit applications go in." },
        { title: "Strengthening below", text: "New footings, steel beams and posts go in wherever the engineer has called for them." },
        { title: "Frame and roof", text: "The upper floor is framed, roofed and closed in with windows, so the weather stays out." },
        { title: "Stairs and services", text: "The stair goes in, and wiring and plumbing are run up to the new rooms." },
        { title: "Linings and finishes", text: "Plaster, flooring, joinery and paint upstairs, then patching where old meets new downstairs." },
      ],
    },
  ],
};

const groundFloor: { page: ServicePage; extras: ServiceExtra[] } = {
  page: {
    slug: "ground-floor",
    path: "/home-extensions/ground-floor/",
    name: "Ground floor extensions",
    keyword: "ground floor extension",
    meta: {
      title: "Ground Floor Extensions Melbourne",
      description:
        "Ground floor extensions in Melbourne's inner west and north: a bigger kitchen, living room or bedroom on one level. Permits lodged by us, on a fixed price.",
    },
    hero: {
      h1: "Ground floor extensions in Melbourne",
      title: ["New rooms that open", "onto the garden."],
      intro:
        "Single-level extensions out the back or down the side of the house, across Melbourne's inner west and north.",
      image: p("footscray/alfresco.jpg", "Bifold doors between the living area and a covered outdoor dining table, Footscray"),
      facts: [
        { label: "Permits", value: "Lodged by us" },
        { label: "Finish date", value: "In the contract" },
        { label: "Maintenance warranty", value: "3 years" },
      ],
    },
    focus: {
      label: "Before you give up the yard",
      title: "Decide what the yard is still for.",
      intro:
        "Building out spends backyard to buy floor space. Settle what the outside still has to do, whether that's the washing line, the kids, a pool or the dog, and the shape of the extension follows.",
      points: [
        { title: "Floor levels", text: "Old floors and new ones rarely line up on their own. We set the new floor height at design stage, so any step between old and new, or out to the garden, is one you chose." },
        { title: "Light for the middle rooms", text: "A new room at the back can leave the rooms behind it darker. Skylights, highlight windows or a courtyard between old and new keep the light coming through." },
        { title: "Slab or stumps", text: "The new rooms can sit on a concrete slab, or on stumps with a timber floor to match the house. The soil and the engineer decide which." },
        { title: "Council paperwork", text: "A ground floor extension needs a building permit, and sometimes a planning permit as well. We prepare the drawings council asks for and lodge them for you." },
      ],
    },
    proof: {
      label: "Out the back",
      title: "Living rooms that open to the outside.",
      // TODO(client): add photos of a completed single-storey ground floor extension. Footscray's extension is two storeys;
      // the photos here show its ground-level rooms and are captioned for what they show.
      items: [
        {
          image: p("footscray/second-living.jpg", "Second living area with herringbone floor and sliding doors out to the pool, Footscray"),
          suburb: "Footscray",
          caption: "Second living area with doors to the pool",
          href: "/projects/footscray/",
        },
      ],
      quotes: [quotes.onTime],
    },
    cost: {
      label: "Price factors",
      title: "What sets the price of building out.",
      intro: "Size is the obvious one. These four are the ones people don't see coming.",
      factors: [
        { title: "Soil and footings", text: "The soil report decides how deep the footings go, and a raised timber floor is built differently from a slab." },
        { title: "Opening the back wall", text: "Joining new rooms to old usually means taking out the rear wall and putting in a beam to carry the roof above it." },
        { title: "Pipes under the yard", text: "Sewer and stormwater lines often cross the backyard. Building over or near them can mean rerouting and approval from the water authority or council." },
        { title: "Glass", text: "Wide sliding or bifold doors and skylights add up, and they're where most of the new light comes from." },
      ],
    },
    faqs: [
      { q: "How much backyard will we lose?", a: "As much as the new rooms take, plus the space you want clear around them. Planning rules on site coverage and permeability also limit how much of the block can be built on or paved." },
      { q: "Can we stay home during a ground floor extension?", a: "Usually, for most of it. The new rooms are built outside the house, so daily life carries on until the back wall is opened up to connect them. Before that point, we'll tell you which rooms you'll be without, and for how long." },
      { q: "Is building out cheaper than going up?", a: "Not always. Building out skips strengthening the house for a floor above, but every square metre needs its own footings and roof. We'll talk through both for your block at the first visit." },
      { q: "Can the extension match our period home?", a: "Yes. Weatherboards, roof pitch and window proportions can follow the original house. Under a heritage overlay, council usually wants the new part kept behind the old one, out of the street's view." },
      // TODO(client): confirm the soil report and engineering are always done before the fixed price is set.
      { q: "Will the price change once you start digging?", a: "The engineering and footing design come before your fixed price, so the footings are already in it. If we find something nobody could see, like an old pipe in the way, we show you and price the fix before doing anything." },
    ],
  },
  extras: [
    {
      type: "cards",
      label: "Shapes",
      title: "Three ways to build out.",
      intro: "Which one suits depends on where your block has room to spare.",
      tone: "white",
      items: [
        { title: "Rear extension", text: "Straight out the back, the usual choice when the yard is deep. New living areas can open directly onto what's left of the garden.", tag: "Deep yards" },
        { title: "Side extension", text: "Fills the strip down the side of the house, often on period cottages with a narrow side path. It makes the rooms you already have wider.", tag: "Narrow blocks" },
        { title: "L-shaped", text: "Wraps around a corner of the yard, so the old house and the new rooms frame a courtyard between them.", tag: "Courtyards" },
      ],
    },
    {
      type: "tour",
      label: "Footscray",
      title: "From the sitting room to the pool.",
      intro: "Three ground-level stops at the back of the Footscray house.",
      rooms: [
        { room: "Inside", text: "Sliding doors take you from the sitting room straight out to the pool.", image: p("footscray/living-to-pool.jpg", "Sitting room with herringbone floor, a desk and sliding doors to the pool, Footscray") },
        { room: "Under cover", text: "A gabled alfresco with room for an outdoor dining table.", image: p("footscray/rear-alfresco.jpg", "Covered gabled alfresco with outdoor dining beside a fenced pool, Footscray") },
        { room: "Outside", text: "Plunge pool and paving, with potted trees along the fence.", image: p("footscray/pool-rear.jpg", "Plunge pool with grey paving and potted trees along a timber fence, Footscray") },
      ],
    },
  ],
};

const ensuites: { page: ServicePage; extras: ServiceExtra[] } = {
  page: {
    slug: "ensuites",
    path: "/bathroom-renovations/ensuites/",
    name: "Ensuite renovations",
    keyword: "ensuite renovation",
    meta: {
      title: "Ensuite Renovations Melbourne",
      description:
        "Ensuite renovations in Melbourne's inner west and north: double vanities, walk-in showers and new ensuites off the main bedroom. 4–6 weeks on site, fixed price.",
    },
    hero: {
      h1: "Ensuite renovations in Melbourne",
      title: ["Two basins.", "No queue for the mirror."],
      intro:
        "Ensuites off the main bedroom, renovated or fitted into space you already have, across Melbourne's inner west and north.",
      image: p("footscray/ensuite.jpg", "Ensuite with double vessel basins, backlit round mirrors and a frameless shower, Footscray"),
      facts: [
        { label: "Time on site", value: "4–6 weeks" },
        { label: "Contract", value: "Fixed price" },
        { label: "Construction warranty", value: "7 years" },
      ],
    },
    focus: {
      label: "Small room, big decisions",
      title: "An ensuite has less room to get wrong.",
      intro:
        "Many ensuites are carved out of a bedroom or a robe, so the room is tight before you start. The layout decides whether it feels like a bathroom or a cupboard with a shower in it.",
      image: p("footscray/bathroom-2.jpg", "Walk-in shower behind a fixed glass panel, beside a wall-hung vanity and round mirror, Footscray"),
      points: [
        { title: "Double or single vanity", text: "Two basins need a long wall. Where there's room, like the Footscray ensuite, two people can get ready at once." },
        { title: "A shower with no door", text: "A fixed glass panel in place of a hinged door saves the swing space a small room can't spare." },
        { title: "Somewhere for the steam", text: "Plenty of ensuites have no window. Without one, the exhaust fan is ducted outside so the steam doesn't end up in the ceiling." },
        { title: "The shared wall", text: "The ensuite backs onto the bedroom, so we plan where the toilet sits and whether the wall needs sound insulation." },
      ],
    },
    proof: {
      label: "From our clients",
      title: "After a shower and a laundry.",
      // TODO(client): add more ensuite photos (only the Footscray ensuite is photographed so far).
      items: [],
      quotes: [quotes.chris, quotes.pat],
    },
    cost: {
      label: "Price factors",
      title: "What changes the price of an ensuite.",
      intro: "The room is small, so a handful of decisions carry most of the cost.",
      factors: [
        { title: "Finding the space", text: "Turning part of a bedroom or robe into an ensuite means new walls, a door and a waterproofed floor where the carpet was." },
        { title: "Getting the water out", text: "The waste has to fall to the sewer. The further the ensuite sits from the existing pipes, the longer and harder the run." },
        { title: "One basin or two", text: "A double vanity means two sets of tapware, two wastes and a longer top." },
        { title: "Wall-hung fittings", text: "In-wall cisterns and floating vanities need framing built in before the walls are lined." },
      ],
    },
    faqs: [
      { q: "How long does an ensuite renovation take?", a: "Plan on 4–6 weeks of work in the house. Design and selections come before that, and the completion date is set in your contract before we start." },
      { q: "Can you add an ensuite where there isn't one?", a: "Yes, if the plumbing can reach. We look at where the sewer runs and where the main bedroom sits, then work out whether the space comes from the bedroom, a robe or an extension." },
      { q: "Can we keep sleeping in the main bedroom?", a: "Often, yes. The ensuite is closed off from the bedroom while we work. Demolition and tiling days are the noisiest and dustiest, and we'll tell you when they are." },
      { q: "Is the waterproofing any different in an ensuite?", a: "No. It's a wet area like any other bathroom, so the floor and shower walls are waterproofed and checked before the tiles go on." },
      // TODO(client): confirm what's included and excluded in the fixed price (e.g. provisional sums).
      { q: "What does the fixed price include?", a: "The scope you sign: demolition, plumbing, electrical, waterproofing, tiling and the fittings you've selected. Anything you add later is priced and approved by you first." },
    ],
  },
  extras: [
    {
      type: "checks",
      label: "Before the plans",
      title: "What to settle first, and what can wait.",
      intro: "The first list moves pipes and walls, so it's settled before the plans are drawn. The second can wait until selections.",
      columns: [
        { title: "Decide first", items: ["Where the space comes from: the bedroom, a robe or a new wall", "Where the shower goes, so the floor can fall to the drain", "One basin or two", "Whether the toilet sits behind a partition", "A floating vanity or one on the floor"] },
        { title: "Choose later", items: ["Tiles, and how high they run", "Tapware finish", "Mirrors, cabinets and lighting", "A fixed glass panel or a shower door"] },
      ],
    },
    {
      type: "mosaic",
      label: "Details",
      title: "Finishes that suit a smaller room.",
      intro: "From two bathrooms we've built, in Footscray and Altona. Every one of these works at ensuite size.",
      items: [
        { image: p("footscray/shower-tiles.jpg", "Shower with sage green stacked tiles, a frameless glass panel and a brushed brass rail shower, Footscray"), caption: "Sage stacked tiles, brass rail shower, Footscray" },
        { image: p("altona/shower.jpg", "Walk-in shower with white finger tiles around a curved corner, a terrazzo floor and dark tapware, Altona"), caption: "Finger tiles around a curved shower corner, Altona" },
        { image: p("footscray/tapware-detail.jpg", "Brushed brass wall spout and mixer against sage green tiles, Footscray"), caption: "Brushed brass wall spout, Footscray" },
        { image: p("altona/vanity.jpg", "Black curved wall-hung vanity with a white top, vessel basin and mirrored cabinet, Altona"), caption: "Floating vanity, mirrored cabinet, Altona" },
      ],
    },
  ],
};

export const subServicePages: Record<SubServiceSlug, { page: ServicePage; extras: ServiceExtra[] }> = {
  "second-storey": secondStorey,
  "ground-floor": groundFloor,
  ensuites,
};
