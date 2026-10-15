/**
 * Local detail for each of the 42 service-area suburbs. This is what keeps the
 * suburb pages from being find-and-replace copies (Page Blueprint: anti-thin rule).
 * General local knowledge only, worded conservatively; never claims a job we
 * haven't done or a heritage overlay on a specific street.
 */
export type SuburbService = "home-renovations" | "home-extensions" | "bathroom-renovations" | "kitchen-renovations" | "laundry-renovations";

export type SuburbLocal = {
  name: string;
  council: string;
  /** Hub hero intro: 1–2 sentences unique to this suburb. */
  intro: string;
  /** What homes here are typically like, and what that means for a renovation. */
  housing: { title: string; text: string };
  /** Council and overlays, in general terms. */
  planning: string;
  /** 3–4 neighbouring suburb slugs, all from the 42. */
  nearby: string[];
  /** One paragraph per service page this suburb has, tying local homes to that service. */
  angles: Partial<Record<SuburbService, string>>;
  /** One local question and answer. */
  faq: { q: string; a: string };
};

export const suburbLocal: Record<string, SuburbLocal> = {
  /* ───────────────────────── Maribyrnong ───────────────────────── */

  footscray: {
    name: "Footscray",
    council: "Maribyrnong",
    intro:
      "Footscray has some of the oldest housing in the inner west, with timber cottages and brick terraces a few streets from new apartment towers. We're based next door in Maribyrnong, so a site visit here is a short drive.",
    housing: {
      title: "Cottages, terraces and new towers",
      text: "Many streets here are lined with Victorian and Edwardian cottages, a lot of them weatherboard, on narrow blocks with a lean-to at the back. Closer to the station and the river you'll find newer apartments and townhouses. In the older houses, that rear lean-to usually holds the kitchen, bathroom and laundry, and it's often the part in the worst shape.",
    },
    planning:
      "Footscray is in the City of Maribyrnong, and parts of it sit under heritage overlays, mostly among the older residential streets. You can check your address on VicPlan, and we check it again before any drawing starts.",
    nearby: ["seddon", "west-footscray", "yarraville", "maribyrnong"],
    angles: {
      "home-renovations":
        "A Footscray renovation often keeps the front rooms of a period cottage and rebuilds the tired section behind them. We plan the new kitchen, bathroom and living space as one job, so the old and new parts line up in floor height, ceiling and light.",
      "bathroom-renovations":
        "Bathrooms in older Footscray houses are often squeezed into the back lean-to, sometimes reached through the kitchen or laundry. We check the subfloor and framing before any tile goes down, because timber floors in these cottages move, and a new bathroom needs a solid, waterproofed base.",
      "kitchen-renovations":
        "In a narrow Footscray cottage the kitchen usually sits at the back, and it's often the only room that opens to the yard. A new layout can pull it toward the light and the garden, with storage planned into every wall, since these houses rarely have space to spare.",
    },
    faq: {
      q: "Our house has a sleepout and lean-to added by past owners. Can you work with that?",
      a: "Yes. Plenty of older Footscray houses have a sleepout, lean-to or enclosed verandah added over the years. We check what was built, how it was built and whether it was permitted, then tell you which parts are worth keeping before we draw anything.",
    },
  },

  seddon: {
    name: "Seddon",
    council: "Maribyrnong",
    intro:
      "Seddon packs small timber cottages into tight, narrow streets within walking distance of Footscray and Yarraville. Renovating here means working with small blocks and close neighbours.",
    housing: {
      title: "Small cottages on tight blocks",
      text: "Much of Seddon is Victorian and Edwardian weatherboard cottages, many of them single-fronted, with some brick houses mixed in. Blocks tend to be narrow and shallow, and side access is often a gap you can barely walk down. That shapes everything from how materials get in to where a new room can go.",
    },
    planning:
      "Seddon falls within the City of Maribyrnong, and heritage overlays cover parts of the suburb, particularly streets of intact cottages. VicPlan will show whether your address is one of them, and if it is, we design with the overlay from the first sketch.",
    nearby: ["footscray", "yarraville", "west-footscray"],
    angles: {
      "home-renovations":
        "On a Seddon block, a renovation usually works within the footprint you already have, because the yards are small to begin with. Opening up the rear of the cottage, borrowing light through a skylight and building storage into the walls can make a single-fronted house live much larger than its floor area.",
      "bathroom-renovations":
        "Many Seddon cottages have one bathroom, often at the back and reached through the kitchen or laundry. Moving it, or adding a second toilet, depends on where the pipes can run under a timber floor, so we check the subfloor early and plan the layout around what's there.",
      "kitchen-renovations":
        "Seddon kitchens are often galley-width because the cottages are. A good layout here comes down to clearances and storage: one long run of bench, or a short island if the room allows, with the fridge and pantry placed so they don't block the path to the back door.",
    },
    faq: {
      q: "My cottage has almost no side access. Can you still renovate it?",
      a: "Yes. Tight side access is normal in Seddon. We bring deliveries in smaller loads, carry materials through by hand where we have to, and talk to your neighbours early about anything that affects them.",
    },
  },

  yarraville: {
    name: "Yarraville",
    council: "Maribyrnong",
    intro:
      "Yarraville's period weatherboards are much loved, and most owners want the front of the house left as it is while the back is rebuilt for how they live now.",
    housing: {
      title: "Period weatherboards near the village",
      text: "Many streets around the village have Victorian and Edwardian weatherboard cottages, with interwar bungalows and some post-war homes further out. Blocks are typically narrow and long. A lot of houses carry an older rear addition that was built cheaply and has aged badly.",
    },
    planning:
      "Yarraville is in the City of Maribyrnong, and heritage overlays apply across parts of the suburb, including many streets of period houses. Check your address on VicPlan before you plan anything big.",
    nearby: ["seddon", "footscray", "kingsville", "spotswood"],
    angles: {
      "home-renovations":
        "In Yarraville the usual job is to restore the front rooms of a period cottage and rebuild everything behind them. We plan the kitchen, bathroom and living areas together, so one set of trades moves through the house once and one finish date covers the lot.",
      "home-extensions":
        "A ground-floor extension off the back of a Yarraville weatherboard is the most common way to add space here, because the blocks are long even when they're narrow. If a second storey is on the table, we look at the overlay, the neighbours' outlook and the frame of the existing house before design starts.",
      "bathroom-renovations":
        "Yarraville bathrooms often sit in the old lean-to, with timber floors and walls that were never built for a wet room. We strip back to the frame, repair what needs repairing and waterproof properly, so the new bathroom suits a house that may be more than a hundred years old.",
      "kitchen-renovations":
        "The kitchen in a Yarraville cottage is usually the room that connects the old house to the backyard. We work through three things first: getting it open to the garden, choosing finishes that sit well with the period rooms at the front, and fitting storage into a narrow width.",
    },
    faq: {
      q: "Can I add a second storey to my Yarraville cottage?",
      a: "Sometimes. It depends on any overlay on your property, the size of the block and whether the original frame can take the load. We check all three before design starts, so you know early whether to go up or out.",
    },
  },

  kingsville: {
    name: "Kingsville",
    council: "Maribyrnong",
    intro:
      "Kingsville sits quietly between Yarraville and West Footscray, with Edwardian, interwar and post-war houses that suit a well-planned update.",
    housing: {
      title: "Edwardian to post-war, side by side",
      text: "You'll find Edwardian and interwar weatherboards here alongside post-war homes in timber and brick, and some newer townhouses. Many houses have had a kitchen or bathroom redone at some point, so part of the job is working out which earlier work is worth keeping.",
    },
    planning:
      "Kingsville is in the City of Maribyrnong. A few pockets may be covered by a heritage overlay, and VicPlan is the quickest way to see whether yours is one of them.",
    nearby: ["yarraville", "south-kingsville", "west-footscray"],
    angles: {
      "home-renovations":
        "A Kingsville renovation often deals with a house that has two or three eras in it: an original front, a mid-century addition and a later update. We work out how those parts join, then plan the work so the house reads as one home again.",
      "bathroom-renovations":
        "Kingsville bathrooms range from original 1950s rooms to quick updates that are now failing. We look for signs of past leaks around the shower and floor before we price anything, because water damage in a timber subfloor changes the job and you should know about it up front.",
    },
    faq: {
      q: "A previous owner redid our bathroom. How can we tell if it was done properly?",
      a: "Loose or hollow-sounding tiles, cracked grout along the floor line and stains on the skirting or ceiling nearby are the usual signs. We look for all of them at the free home visit, and if the waterproofing has failed, we tell you before you get a price.",
    },
  },

  maidstone: {
    name: "Maidstone",
    council: "Maribyrnong",
    intro:
      "Maidstone is changing fast, with original post-war houses now sharing streets with new townhouses. For owners of the original homes, a renovation is a way to stay put and get a house that works.",
    housing: {
      title: "Post-war homes and new townhouses",
      text: "Maidstone grew mostly after the Second World War, with weatherboard and cream brick homes on regular suburban blocks. Many blocks have since been split for townhouses, so original houses now sit beside new two-storey builds. The older homes often have one bathroom, a separate kitchen and a large backyard.",
    },
    planning:
      "Heritage overlays are less common in Maidstone than in Footscray or Seddon, though a VicPlan search on your address is still worth doing. The suburb is in the City of Maribyrnong.",
    nearby: ["maribyrnong", "braybrook", "west-footscray"],
    angles: {
      "home-renovations":
        "A Maidstone renovation usually starts with a solid post-war house that needs a new kitchen, a new bathroom and a layout that suits a family today. Insulation, heating and new windows often go in at the same time, since the walls are open anyway.",
      "bathroom-renovations":
        "Maidstone's original bathrooms are usually small and plain, often with a shower over the bath and the toilet in a separate room. We can rebuild on the same footprint or rework the layout to fit a walk-in shower and more storage.",
      "kitchen-renovations":
        "In a post-war Maidstone house, the kitchen is often a small room at the back with a window over the sink. Opening it to the dining area, adding bench space and a pantry, and linking it to the backyard are the usual starting points.",
    },
    faq: {
      q: "New townhouses have gone up next door. Does that change what we can do?",
      a: "It can affect overlooking, light and where new windows or rooms should go. We look at the neighbouring buildings at the first visit and design around them, so your renovation still gets the light and privacy you want.",
    },
  },

  maribyrnong: {
    name: "Maribyrnong",
    council: "Maribyrnong",
    intro:
      "Maribyrnong is where Forefront is based, and the suburb's mix of older homes, post-war houses and newer riverside estates is right on our doorstep.",
    housing: {
      title: "From post-war houses to new estates",
      text: "Older parts of Maribyrnong have interwar and post-war homes in weatherboard and brick, with 1960s and 70s brick veneer nearby. Large newer estates have gone up on former defence and industrial land near the river, adding townhouses and apartments. The older houses often sit on good-sized blocks with room at the rear.",
    },
    planning:
      "Maribyrnong is in the City of Maribyrnong. Some older pockets may sit under heritage overlays, and some newer estates have covenants on title, so check VicPlan and your title before you plan.",
    nearby: ["footscray", "maidstone", "ascot-vale", "avondale-heights"],
    angles: {
      "home-renovations":
        "Many Maribyrnong homes from the 1950s to the 70s have a sound structure and a dated layout. A renovation can open up the living areas, rework the kitchen and bathrooms and improve insulation, and if the block has room, an extension can go on the same contract.",
      "home-extensions":
        "Older Maribyrnong houses on larger blocks suit a rear extension: a new kitchen and family room that opens to the yard. On sloping blocks we look at levels and drainage early, because they shape both the design and the build.",
      "bathroom-renovations":
        "Bathrooms in Maribyrnong's post-war houses often keep their original layout, sometimes with a separate toilet. In the newer townhouses, it's usually an ensuite or main bathroom that needs better storage and finishes. We plan each one to suit the house it's in.",
      "kitchen-renovations":
        "In a post-war Maribyrnong home, the kitchen is often closed off from the living room and the yard. Taking out a wall, rearranging the layout and adding a walk-in pantry or an island can make it the room the family actually uses.",
    },
    faq: {
      q: "You're based in Maribyrnong. Does that make a difference?",
      a: "It makes site visits and meetings easy to fit in. We can get to a Maribyrnong job quickly, and it's simple to meet on site whenever a decision needs making.",
    },
  },

  braybrook: {
    name: "Braybrook",
    council: "Maribyrnong",
    intro:
      "Braybrook's post-war houses are simple in shape, which makes them good candidates for a well-planned renovation.",
    housing: {
      title: "Post-war homes on regular blocks",
      text: "Much of Braybrook was built in the post-war decades, including homes first built as public housing, mostly in weatherboard and cream brick. Newer units and townhouses have been added on subdivided blocks. The original houses tend to have compact rooms and a single bathroom.",
    },
    planning:
      "Braybrook is in the City of Maribyrnong. Heritage overlays are less likely in its post-war streets, but a quick VicPlan check for your address is still worth doing.",
    nearby: ["maidstone", "sunshine", "tottenham", "sunshine-north"],
    angles: {
      "home-renovations":
        "For a Braybrook house, a renovation usually covers the whole interior: new kitchen and bathroom, opened-up living areas, better insulation and updated electrics. Because the floor plans are simple, small changes like moving a doorway or taking out one wall can make the house feel much bigger.",
    },
    faq: {
      q: "Can a renovation make our post-war house warmer in winter?",
      a: "Yes. Many Braybrook homes were built with little or no insulation and single-glazed windows. While walls and ceilings are open, we can insulate, seal draughts and upgrade windows, and you'll feel the difference the first winter.",
    },
  },

  tottenham: {
    name: "Tottenham",
    council: "Maribyrnong",
    intro:
      "Tottenham is mostly industrial, but its small residential pocket holds post-war houses that can be renovated into comfortable family homes.",
    housing: {
      title: "A small residential pocket",
      text: "Tottenham's homes sit in a compact residential area surrounded by industry and the rail line. Most are modest post-war houses in weatherboard or brick, some with additions from later decades, and there are a few newer units.",
    },
    planning:
      "Tottenham is in the City of Maribyrnong. Check VicPlan for any overlays on your address. Living near rail and industry is also worth thinking about when deciding where bedrooms and windows go.",
    nearby: ["braybrook", "west-footscray", "sunshine", "brooklyn"],
    angles: {
      "home-renovations":
        "In Tottenham, the usual renovation brings a post-war home up to date in one go: kitchen, bathroom, flooring, lighting and insulation. Double glazing on the rail or street side and a layout that puts bedrooms at the quieter end of the house are worth planning in from the start.",
    },
    faq: {
      q: "Can a renovation cut down noise from trains and trucks?",
      a: "It can make a real difference. Double-glazed windows, insulated walls and ceilings and solid doors all reduce noise, and moving bedrooms away from the loudest side of the house helps too. We'll suggest what's worth doing for your house at the first visit.",
    },
  },

  "west-footscray": {
    name: "West Footscray",
    council: "Maribyrnong",
    intro:
      "West Footscray's interwar and post-war homes often sit on more generous blocks than the cottages closer to the city, which leaves room to renovate and extend.",
    housing: {
      title: "Bungalows and post-war weatherboards",
      text: "You'll find Edwardian houses, interwar Californian bungalows and plenty of post-war weatherboards here, with newer townhouses scattered through. Many of the bungalows still have their original front rooms, with a later kitchen and bathroom tacked on at the back.",
    },
    planning:
      "West Footscray is in the City of Maribyrnong. If you're changing the front of a bungalow, look up your address on VicPlan first, as some streets may sit under a heritage overlay.",
    nearby: ["footscray", "seddon", "kingsville", "maidstone"],
    angles: {
      "home-renovations":
        "In West Footscray, a renovation often keeps the bungalow's front rooms and replaces the tacked-on back section with a new kitchen and family area. On a deeper block, a rear extension can be built at the same time, so the new space and the updated house are finished together.",
    },
    faq: {
      q: "Should we build out the back or add a second storey?",
      a: "On many West Footscray blocks, building out the back is simpler, and it avoids the stairs, roof and structural work a second storey needs. If the yard is small or you'd lose too much garden, going up can make more sense. We look at both at the first visit.",
    },
  },

  /* ───────────────────────── Moonee Valley ───────────────────────── */

  essendon: {
    name: "Essendon",
    council: "Moonee Valley",
    intro:
      "Essendon has some of the most varied housing in the north-west, from large Victorian and Edwardian homes to interwar bungalows and post-war brick, often on generous blocks.",
    housing: {
      title: "Period homes on generous blocks",
      text: "Many Essendon streets have Victorian and Edwardian homes, some large and ornate, alongside interwar bungalows and post-war brick houses. Blocks are often generous. Some homes have already been renovated once or twice, and earlier work doesn't always suit the original house.",
    },
    planning:
      "Essendon is in the City of Moonee Valley. Heritage overlays cover parts of the suburb, particularly streets with intact period homes, and a VicPlan search on your address shows whether yours is one. We plan for any overlay from the first drawing.",
    nearby: ["moonee-ponds", "aberfeldie", "essendon-north", "strathmore"],
    angles: {
      "home-renovations":
        "An Essendon renovation often means bringing a period home up to date while keeping what makes it worth owning: high ceilings, fireplaces, leadlight and timber floors. We restore the front rooms, rebuild the rear for everyday living and plan the services so the whole house works together.",
      "bathroom-renovations":
        "Bathrooms in Essendon's larger period and interwar homes often have room to work with, enough for a freestanding bath, a separate shower and a double vanity. In a period home we choose tiles and tapware that sit comfortably beside the original rooms.",
      "kitchen-renovations":
        "In many Essendon homes, the kitchen lives in a later rear addition that no longer suits the house. Rebuilding it as part of an open kitchen and living area, with a butler's pantry or a large island where space allows, puts that part of the house to proper use.",
      "laundry-renovations":
        "Laundries in older Essendon homes are often on a back porch or in a small room off the kitchen. We can rebuild them as proper working rooms with bench space, a sink, storage and room to fold, or move the laundry so it stops taking space from the kitchen.",
    },
    faq: {
      q: "Can you match new work to the period details in an Essendon home?",
      a: "Yes. Cornices, skirtings, architraves and timber floors can usually be matched or sourced to suit the original rooms. Where an exact match isn't possible, we show you the options before anything goes in.",
    },
  },

  "essendon-north": {
    name: "Essendon North",
    council: "Moonee Valley",
    intro:
      "Essendon North is a quiet, mostly residential suburb with a strong stock of interwar and post-war homes, many on good-sized family blocks.",
    housing: {
      title: "Interwar bungalows and post-war brick",
      text: "Interwar Californian bungalows and post-war brick homes make up much of the housing here, with some newer units and townhouses. Many houses are solid brick with deep front gardens, and backyards that leave room to extend.",
    },
    planning:
      "Essendon North comes under the City of Moonee Valley. Most streets here are interwar and post-war, and a VicPlan search will tell you whether a heritage overlay covers yours.",
    nearby: ["essendon", "strathmore", "strathmore-heights"],
    angles: {
      "home-renovations":
        "The front rooms of an Essendon North brick bungalow are usually in good order. The work tends to be at the back, where a small kitchen and bathroom can be replaced with an open family area, and the larger yards here leave room for an extension if you need more space.",
    },
    faq: {
      q: "Our house is double brick. Does that make renovating harder?",
      a: "It mainly changes how the work is done. Opening a double-brick wall needs an engineer and a steel beam, and running new pipes and wiring takes more planning. We organise the engineering as part of the job and allow for it in the price.",
    },
  },

  "essendon-west": {
    name: "Essendon West",
    council: "Moonee Valley",
    intro:
      "Small and mostly residential, Essendon West sits on the western side of Essendon, with post-war homes and newer townhouses on quiet streets.",
    housing: {
      title: "Post-war homes and townhouses",
      text: "Most homes here date from the post-war decades, in brick and weatherboard, with interwar houses in places and a growing number of townhouses on subdivided blocks. The original houses usually keep their compact 1950s floor plans.",
    },
    planning:
      "Essendon West sits in the City of Moonee Valley. Its post-war streets are less likely to carry a heritage overlay, and VicPlan will confirm either way for your address.",
    nearby: ["aberfeldie", "essendon", "niddrie"],
    angles: {
      "home-renovations":
        "Essendon West homes often have a sound frame and a compact 1950s layout. A renovation can join the kitchen, dining and living into one room, add an ensuite or second bathroom, and bring the electrics and insulation up to date.",
    },
    faq: {
      q: "Can we stay in the house during a full renovation?",
      a: "For a whole-house job it's usually easier to move out for the main stretch, especially while the kitchen and bathroom are both out of action. For smaller stages, some people stay. We talk through the order of work with you so you can decide what suits your household.",
    },
  },

  aberfeldie: {
    name: "Aberfeldie",
    council: "Moonee Valley",
    intro:
      "Aberfeldie sits beside the Maribyrnong River, and its interwar and post-war homes, often on large blocks, have plenty of room for a substantial renovation.",
    housing: {
      title: "Riverside interwar and post-war",
      text: "Housing in Aberfeldie includes interwar bungalows, post-war brick homes and some larger period houses, with newer homes where older ones have been replaced. Some streets slope toward the river, which affects drainage, access and how an addition sits on the block.",
    },
    planning:
      "Aberfeldie is in the City of Moonee Valley. Some properties may sit under a heritage overlay, so check VicPlan for your address before planning, particularly if your block runs down toward the river.",
    nearby: ["essendon", "essendon-west", "moonee-ponds"],
    angles: {
      "home-renovations":
        "Aberfeldie renovations are often bigger jobs: reworking a large post-war or interwar house, adding a main bedroom suite or opening the rear of the house to the garden. On sloping blocks, we settle levels, steps and drainage at design stage so they don't surprise anyone on site.",
    },
    faq: {
      q: "Our block slopes. Does that make a renovation more complicated?",
      a: "It adds a few things to plan for: drainage, retaining, steps between levels and access for materials. We look at the slope on our first walk-through and allow for it in the design and the fixed price, so it doesn't turn into a variation later.",
    },
  },

  "moonee-ponds": {
    name: "Moonee Ponds",
    council: "Moonee Valley",
    intro:
      "Moonee Ponds combines established period streets with a busy centre of shops and apartments, so homes here range from Victorian villas to modern units.",
    housing: {
      title: "Villas, bungalows and apartments",
      text: "Many residential streets have Victorian and Edwardian homes, alongside interwar bungalows and post-war houses. Around the shopping centre and main roads there are newer apartments and townhouses. The period homes often have high ceilings and original detail worth keeping.",
    },
    planning:
      "The City of Moonee Valley looks after Moonee Ponds, and heritage overlays apply to parts of the suburb. A VicPlan search shows what's on your address, and apartment or townhouse owners will also need owners corporation approval for some work.",
    nearby: ["essendon", "ascot-vale", "travancore", "aberfeldie"],
    angles: {
      "home-renovations":
        "Depending on the street, a Moonee Ponds renovation might mean restoring a Victorian villa, updating an interwar bungalow or reworking a townhouse that's starting to feel dated. For the period homes, we keep the front rooms and their detail, and put the work into a new kitchen, bathroom and living area at the back.",
      "bathroom-renovations":
        "Bathrooms here range from period rooms in the older homes to compact ensuites in townhouses and apartments. In a period home we can fit a larger bathroom by borrowing space from a hallway or a small bedroom. In a townhouse, it's usually about making a small room work harder with better storage and a walk-in shower.",
      "kitchen-renovations":
        "Kitchens in Moonee Ponds' period homes are often small rooms that were never planned for how families cook and eat now. Joining the kitchen to the living area, adding an island or pantry and turning the bench toward the backyard can make the back of the house the main room.",
    },
    faq: {
      q: "Can you renovate a townhouse or apartment in Moonee Ponds?",
      a: "Yes. For apartments and many townhouses, the owners corporation usually needs to approve work that touches plumbing, waterproofing or shared walls. We prepare the information they ask for and work to the building's rules on access and noise.",
    },
  },

  "ascot-vale": {
    name: "Ascot Vale",
    council: "Moonee Valley",
    intro:
      "Ascot Vale's Victorian and Edwardian houses sit beside interwar bungalows, a short walk from the showgrounds and Flemington Racecourse.",
    housing: {
      title: "Victorian, Edwardian and interwar",
      text: "Many Ascot Vale streets are lined with Victorian and Edwardian homes, from single-fronted cottages to larger villas, with interwar bungalows and post-war houses mixed in. Block sizes vary widely, so the right plan depends on how much yard you have and how the house sits on it.",
    },
    planning:
      "Ascot Vale is in the City of Moonee Valley, and heritage overlays cover parts of the suburb, particularly the older period streets. Check VicPlan for your address before planning changes, especially to the front of the house.",
    nearby: ["moonee-ponds", "flemington", "travancore", "maribyrnong"],
    angles: {
      "home-renovations":
        "In Ascot Vale, a renovation usually works around a period house that people want to keep: restoring the front rooms, upgrading the services and rebuilding a tired rear section. We plan the stages so the trades move through in order, and the finish date covers the whole house.",
      "home-extensions":
        "Ascot Vale's period homes often have a rear section that's small, dark or poorly built. Replacing it with an extension gives you a kitchen and family room that open to the yard, and where an overlay applies, we design the addition to sit comfortably behind the original house.",
      "bathroom-renovations":
        "Bathrooms in Ascot Vale's older houses are often in the rear lean-to or a converted back room. We rebuild them from the frame, sort out ventilation and waterproofing, and choose finishes that suit a period home without looking like a reproduction.",
      "kitchen-renovations":
        "In an Ascot Vale period home, the kitchen often sits in a later addition with a low ceiling and a step down from the original house. Rebuilding it lets us fix the levels, lift the ceiling where we can and open the room to the backyard.",
    },
    faq: {
      q: "Will an extension on my Ascot Vale home need a planning permit?",
      a: "It depends on the overlays on your property and the size and position of the extension. We check VicPlan and your property details at the start, then lodge and follow up any permits as part of our contract, so you're not chasing council yourself.",
    },
  },

  flemington: {
    name: "Flemington",
    council: "Moonee Valley",
    intro:
      "Flemington's Victorian terraces and cottages sit close to the city and the racecourse, on small blocks where every square metre counts.",
    housing: {
      title: "Victorian terraces on small blocks",
      text: "Many Flemington homes are Victorian terraces and single-fronted cottages in brick or timber, on narrow, shallow blocks, with post-war houses and apartments in between. In the terraces, the rear wing usually holds the kitchen and bathroom, and it's often the part that needs the most work.",
    },
    planning:
      "In Flemington, which is part of the City of Moonee Valley, heritage overlays are common across the older streets. Look your address up on VicPlan. If there's an overlay, it goes into the design from the start.",
    nearby: ["kensington", "ascot-vale", "travancore"],
    angles: {
      "home-renovations":
        "Renovating a Flemington terrace mostly comes down to the rear wing: rebuilding the kitchen and bathroom, bringing in light with skylights or a courtyard, and fixing years of patched-up work. The front rooms usually just need careful restoring.",
      "bathroom-renovations":
        "In a Flemington terrace, the bathroom is often at the very back of the house, or upstairs in a two-storey terrace. With a narrow footprint to work in, we focus on a layout that fits, a shower that drains properly and ventilation that keeps a small room dry.",
      "kitchen-renovations":
        "Flemington kitchens are usually narrow rooms in the rear wing of a terrace. One run of cabinetry, a long bench and storage up to the ceiling can give a small kitchen far more room, and opening it to a courtyard brings in the light these houses often lack.",
    },
    faq: {
      q: "Our terrace shares a wall with next door. What does that mean for the renovation?",
      a: "Work near a shared wall needs care with structure, noise and damp. We check the wall's condition, let your neighbour know what's planned and handle any paperwork the building permit needs.",
    },
  },

  travancore: {
    name: "Travancore",
    council: "Moonee Valley",
    intro:
      "Travancore is one of the smallest suburbs in the area, a pocket of older homes and apartments between Flemington, Ascot Vale and Moonee Ponds.",
    housing: {
      title: "A small mix of old and new",
      text: "Housing in Travancore is a mix of older houses, including Victorian, Edwardian and interwar homes, and newer apartments and townhouses. Lots tend to be modest, so renovations usually work within the existing footprint.",
    },
    planning:
      "Travancore is part of the City of Moonee Valley. Some older properties may sit under a heritage overlay, which VicPlan will show for your address.",
    nearby: ["flemington", "ascot-vale", "moonee-ponds"],
    angles: {
      "home-renovations":
        "In Travancore, a renovation is often about getting more from a small house or apartment: a better kitchen layout, a bathroom that works for more than one person and storage built into the walls. For older houses with a bit of yard, a compact rear addition can be built at the same time.",
    },
    faq: {
      q: "We have a small house. Is it worth renovating instead of moving?",
      a: "It often is if you like the location. A well-planned layout, better storage and more natural light can make a small Travancore home far easier to live in. We'll tell you honestly at the first visit whether what you want fits the space.",
    },
  },

  "keilor-east": {
    name: "Keilor East",
    council: "Moonee Valley",
    intro:
      "Keilor East is full of 1960s and 70s brick homes on larger blocks, close to the Maribyrnong River parklands.",
    housing: {
      title: "1960s and 70s brick on big blocks",
      text: "Much of Keilor East's housing is brick veneer and double brick from the 1960s and 70s, with some post-war homes and newer townhouses on subdivided blocks. Many houses are large single-storey family homes with formal rooms at the front and a separate kitchen and family area.",
    },
    planning:
      "Keilor East falls within the City of Moonee Valley. Heritage overlays are less common in its 1960s and 70s streets, but check VicPlan for your address before committing to plans.",
    nearby: ["avondale-heights", "niddrie", "airport-west", "essendon-west"],
    angles: {
      "home-renovations":
        "Keilor East homes often have generous floor plans that don't match how families live now: formal lounges that sit unused and kitchens cut off from the yard. A renovation can give those rooms a new job, open up the living areas and update finishes throughout.",
      "bathroom-renovations":
        "Many Keilor East homes still have their original 70s bathrooms, sometimes with coloured tiles, a bath and a separate toilet. We strip them out, check the floor and waterproofing and rebuild with a layout that suits the household, often adding an ensuite to the main bedroom.",
      "kitchen-renovations":
        "Kitchens in Keilor East's 60s and 70s homes are often separate from the family room, with dated cabinets and limited bench space. Taking out a wall, adding an island and a walk-in pantry, and connecting the kitchen to the backyard brings the whole house up to date.",
    },
    faq: {
      q: "Can we turn our formal lounge into something more useful?",
      a: "Yes. In many Keilor East homes the front lounge barely gets used. It can become a home office, a kids' retreat, a guest room or part of a bigger open living area, depending on where it sits and which walls are structural.",
    },
  },

  "avondale-heights": {
    name: "Avondale Heights",
    council: "Moonee Valley",
    intro:
      "Avondale Heights sits above the Maribyrnong River, with streets of 1960s and 70s brick homes and post-war houses, some with views across the valley.",
    housing: {
      title: "Family homes above the river",
      text: "Much of Avondale Heights was built from the 1960s onward, with brick veneer and double-brick homes, some two-storey, alongside post-war weatherboards and newer units. Rooms are often large, and some houses on the sloping streets are split-level.",
    },
    planning:
      "Avondale Heights is in the City of Moonee Valley. Heritage overlays are less common here, but check VicPlan for your address, especially if your block runs down toward the river.",
    nearby: ["keilor-east", "maribyrnong", "maidstone"],
    angles: {
      "home-renovations":
        "Avondale Heights homes are often big brick houses with dated interiors. A renovation can update the kitchen and bathrooms, open up the living areas and rework split levels so the house is easier to move around.",
      "bathroom-renovations":
        "In Avondale Heights homes from the 60s and 70s, bathrooms are often generous in size and dated in finish. That space lets us fit a large shower, a double vanity and proper storage, and we fix any hidden water damage before the new room goes in.",
      "kitchen-renovations":
        "The kitchen in many Avondale Heights homes sits in the middle of the house, closed off from the views and the backyard. Moving it or opening it to the living area and outdoor space is usually the biggest single change a renovation here can make.",
    },
    faq: {
      q: "Our house is split-level. Can you make it easier to live in?",
      a: "Often, yes. Depending on the structure, we can remove some steps, rework the stairs or reorganise rooms so the main living areas sit on one level. We look at the frame and floor levels when we first see the house and tell you what's realistic.",
    },
  },

  niddrie: {
    name: "Niddrie",
    council: "Moonee Valley",
    intro:
      "Niddrie's post-war and 1960s homes sit in a suburb that's filling with new townhouses, and the original houses still have plenty to offer with the right renovation.",
    housing: {
      title: "Post-war homes among new builds",
      text: "Niddrie's housing is mostly post-war and 1960s, in weatherboard, brick veneer and cream brick, on regular suburban blocks. Many blocks have been redeveloped into townhouses. The original houses typically have a simple layout and a good-sized backyard.",
    },
    planning:
      "Niddrie is managed by the City of Moonee Valley. Heritage overlays are less of a factor in its post-war streets, and a two-minute VicPlan search on your address settles it.",
    nearby: ["airport-west", "keilor-east", "essendon-west"],
    angles: {
      "home-renovations":
        "For a post-war Niddrie house, the most useful changes are usually inside: moving the kitchen to the back to face the yard, combining small rooms into one living area and adding a second bathroom for a growing household.",
    },
    faq: {
      q: "Should we renovate or sell to a developer?",
      a: "That's your call, and it depends on your finances and plans. What we can do is show you what a renovation of your house would involve, with a fixed price and a finish date, so you can weigh the options with real numbers.",
    },
  },

  "airport-west": {
    name: "Airport West",
    council: "Moonee Valley",
    intro:
      "Airport West's post-war and 1960s brick homes are practical family houses, and their simple shapes make a renovation easy to plan.",
    housing: {
      title: "Practical post-war family homes",
      text: "Houses in Airport West are mostly post-war and 1960s to 70s brick veneer and weatherboard, with townhouses and units added on subdivided blocks. Plenty still have their original kitchen and bathroom layouts.",
    },
    planning:
      "For Airport West, the council is the City of Moonee Valley. Heritage overlays turn up less often in its post-war streets, though a VicPlan search on your address is still the first step.",
    nearby: ["niddrie", "keilor-east", "strathmore-heights"],
    angles: {
      "home-renovations":
        "In Airport West, a renovation typically brings an original post-war or 1960s house up to date in one project: kitchen, bathroom, flooring, lighting and insulation, with the layout opened up where the walls allow.",
    },
    faq: {
      q: "Can we add a second living area to our house?",
      a: "Usually, yes. A rear family room, a converted garage or a reworked front lounge can all give a household a second living space. Which one suits depends on your block, the structure and how you use the house, and we work through it with you on site.",
    },
  },

  strathmore: {
    name: "Strathmore",
    council: "Moonee Valley",
    intro:
      "Strathmore is a leafy, established suburb of interwar and post-war homes, many of them solid brick on good-sized blocks.",
    housing: {
      title: "Interwar and post-war brick homes",
      text: "Strathmore's streets have many interwar Californian bungalows and brick homes from the 1930s to the 1960s, with some newer houses and townhouses. Blocks are often generous, and plenty of homes have a large backyard with room to extend.",
    },
    planning:
      "Some streets in Strathmore may be covered by a heritage overlay. The suburb is in the City of Moonee Valley, and a VicPlan search on your address will tell you where you stand.",
    nearby: ["essendon", "essendon-north", "strathmore-heights", "pascoe-vale-south"],
    angles: {
      "home-renovations":
        "A Strathmore renovation often reworks a solid interwar or post-war house: opening up the rear for an open kitchen and living area, updating the bathrooms and adding a main bedroom suite. Because many of these homes are brick, structural changes are planned with an engineer from the start.",
      "bathroom-renovations":
        "In many Strathmore homes the original 1950s or 60s bathroom is still in place, with sound walls but tired tiles, fittings and waterproofing. We strip it back, rebuild it with a layout that suits the household and look at whether an ensuite can go off the main bedroom.",
      "kitchen-renovations":
        "Kitchens in Strathmore's older homes are often closed rooms off a central hallway. Moving the kitchen to the back of the house, where it can open to the garden and a new living area, usually makes the biggest difference.",
    },
    faq: {
      q: "Can we extend an interwar bungalow without losing its character?",
      a: "Yes. A rear extension can be designed so the bungalow looks the same from the street, with the new living space behind it. We match the roof pitch, materials or detailing where that suits, or use a clear contrast where that works better.",
    },
  },

  "strathmore-heights": {
    name: "Strathmore Heights",
    council: "Moonee Valley",
    intro:
      "Tucked beside Essendon Fields, Strathmore Heights is made up mostly of post-war and 1960s homes on quiet streets.",
    housing: {
      title: "Quiet post-war streets",
      text: "Housing here is mainly post-war and 1960s brick and weatherboard, with some newer homes and townhouses. Many houses are single-storey on regular blocks, with a separate kitchen and a backyard that leaves room to extend.",
    },
    planning:
      "Strathmore Heights is in the City of Moonee Valley. Heritage overlays are less common here than in older suburbs nearby, but VicPlan will show what applies to your address.",
    nearby: ["strathmore", "essendon-north", "pascoe-vale"],
    angles: {
      "home-renovations":
        "For many Strathmore Heights homes, the plan is to keep the shell and replace almost everything inside it: kitchen, bathroom, floors, lighting and heating. If you need more room, a rear family room or extra bedroom can be added in the same project.",
    },
    faq: {
      q: "Can you renovate in stages if we can't do it all at once?",
      a: "Yes. We can design the whole house now and build it in stages, starting with the rooms that matter most. Planning everything up front means the first stage won't need undoing when the next one starts.",
    },
  },

  /* ───────────────────────── Merri-bek ───────────────────────── */

  brunswick: {
    name: "Brunswick",
    council: "Merri-bek",
    intro:
      "Brunswick's Victorian and Edwardian terraces and workers' cottages sit among converted factories and new apartments, mostly on small, tight blocks.",
    housing: {
      title: "Terraces, cottages and warehouses",
      text: "Many Brunswick streets have Victorian and Edwardian homes: single-fronted cottages, terraces and some larger villas, often in brick. There are also converted factories and plenty of newer apartments along the main roads. Blocks are typically narrow, and some houses have a laneway at the back.",
    },
    planning:
      "Brunswick is part of Merri-bek City Council, and heritage overlays apply across many of its older streets. Look your address up on VicPlan before you start planning; if there's an overlay, we design around it from day one.",
    nearby: ["brunswick-west", "parkville", "pascoe-vale-south"],
    angles: {
      "home-renovations":
        "Brunswick renovations usually work with a narrow period house: keeping the front rooms, rebuilding the rear and finding light where neighbours are close on both sides. Skylights, a small courtyard and a carefully planned layout often do more for these houses than extra floor area.",
      "home-extensions":
        "On a small Brunswick block, an extension has to work hard. A rear addition with a high ceiling and glass to the yard, or a second storey set back from the street, can add the room a family needs while keeping some garden. Where there's a laneway at the back, it can make the build easier.",
      "bathroom-renovations":
        "In a Brunswick cottage, the bathroom is often in a lean-to at the back, sometimes reached through the kitchen or laundry. We can rebuild it where it is, move it somewhere better or add a second bathroom upstairs if you're extending up.",
      "kitchen-renovations":
        "Brunswick kitchens tend to be squeezed into the rear wing. We look at whether the kitchen, dining and laundry can share one rebuilt space at the back, with cabinetry to the ceiling and a bench that looks onto the yard or a courtyard.",
      "laundry-renovations":
        "Laundries in Brunswick's older homes are often a cramped corner of the back porch or a cupboard off the bathroom. We can fit a laundry into a well-planned cupboard with a bench, a sink and stacked machines, or give it a small room of its own with a door out to the clothesline.",
    },
    faq: {
      q: "Our house backs onto a laneway. Can that help with the build?",
      a: "It can. A rear lane can make deliveries and trade access much easier on a tight Brunswick block. We check the lane's width and condition at the first visit and plan the site setup around it.",
    },
  },

  "brunswick-west": {
    name: "Brunswick West",
    council: "Merri-bek",
    intro:
      "Brunswick West mixes Edwardian homes, interwar bungalows and post-war houses, with newer townhouses and apartments in between.",
    housing: {
      title: "Edwardian to post-war, plus infill",
      text: "You'll find Edwardian weatherboard and brick homes, interwar Californian bungalows and post-war cream brick houses here, along with townhouses and apartments on redeveloped sites. Many of the older homes have a rear section that was added later and now needs replacing.",
    },
    planning:
      "Merri-bek City Council covers Brunswick West, and some of its streets sit under heritage overlays. Look up your address on VicPlan before planning big changes.",
    nearby: ["brunswick", "pascoe-vale-south", "parkville"],
    angles: {
      "home-renovations":
        "Brunswick West renovations cover a wide range, from bringing a cream brick post-war house up to date to restoring an Edwardian home and rebuilding its back half. We start by working out which parts of the house are worth keeping, then plan the rest around how you want to live.",
    },
    faq: {
      q: "Our house is 1950s cream brick. Is it worth renovating?",
      a: "Usually. Cream brick homes from that era often have a sound structure, and the layout can be opened up with the right engineering. The first visit is free, and we'll tell you honestly whether a renovation makes sense for your house.",
    },
  },

  "pascoe-vale": {
    name: "Pascoe Vale",
    council: "Merri-bek",
    intro:
      "Pascoe Vale has a mix of interwar bungalows, post-war weatherboards and cream brick homes, many still on regular suburban blocks.",
    housing: {
      title: "Bungalows, weatherboards, cream brick",
      text: "Housing in Pascoe Vale is largely interwar and post-war, including Californian bungalows, weatherboards and cream brick homes, plus units and townhouses where blocks have been split. Many original homes have one bathroom and a separate kitchen, with room at the back to extend.",
    },
    planning:
      "Pascoe Vale is part of Merri-bek City Council. Most of its housing is interwar and post-war, and a VicPlan search will show whether a heritage overlay applies to your address.",
    nearby: ["pascoe-vale-south", "strathmore-heights", "strathmore"],
    angles: {
      "home-renovations":
        "In Pascoe Vale, renovating usually starts at the back of the house, where small rooms and an old kitchen can become one open living area facing the yard. The front bedrooms often just need new floors, lighting and insulation to feel fresh.",
      "bathroom-renovations":
        "Pascoe Vale's post-war houses often keep their original bathroom, with the toilet in a separate room next door. Combining the two can create a larger room with a walk-in shower, while keeping them apart can suit a busy household better. We talk through both before the plans are drawn.",
      "kitchen-renovations":
        "Pascoe Vale kitchens in interwar and post-war homes are usually small and set apart from the living room. Opening a wall, rearranging the cabinetry and adding a pantry can make the kitchen the centre of the house.",
    },
    faq: {
      q: "Will our renovation need a building permit?",
      a: "It depends on the work. Structural changes and extensions generally do, and simple cosmetic updates often don't. We tell you what applies after the first visit and handle any permits as part of the contract.",
    },
  },

  "pascoe-vale-south": {
    name: "Pascoe Vale South",
    council: "Merri-bek",
    intro:
      "Pascoe Vale South has streets of interwar Californian bungalows and Edwardian homes, with post-war houses and newer townhouses mixed in.",
    housing: {
      title: "Interwar bungalows and Edwardians",
      text: "Many homes in Pascoe Vale South are interwar bungalows in brick or weatherboard, often with deep front verandahs, alongside Edwardian houses and post-war homes. The bungalows usually have well-proportioned front rooms, with a kitchen and bathroom at the back that are ready for an update.",
    },
    planning:
      "Pascoe Vale South is in Merri-bek City Council, and some streets may sit under heritage overlays. Check your address on VicPlan before planning changes to the front of the house.",
    nearby: ["pascoe-vale", "brunswick-west", "strathmore"],
    angles: {
      "home-renovations":
        "A Pascoe Vale South renovation often keeps the bungalow's front rooms, with their ceilings, fireplaces and leadlight, and rebuilds the back of the house as a kitchen and family area that opens to the yard. On a bigger block, a rear extension can be part of the same plan.",
    },
    faq: {
      q: "Can we keep the leadlight and fireplaces in our bungalow?",
      a: "Usually, yes. Original leadlight windows, fireplaces and timber details can often be repaired and kept, and we protect them during the build. Where something can't be saved, we show you the options before replacing it.",
    },
  },

  /* ───────────────────────── Hobsons Bay ───────────────────────── */

  newport: {
    name: "Newport",
    council: "Hobsons Bay",
    intro:
      "Newport's tree-lined streets hold a wide spread of housing, from Victorian and Edwardian weatherboards near the station to interwar and post-war homes further out.",
    housing: {
      title: "Period homes and post-war houses",
      text: "The older part of Newport has many Victorian and Edwardian timber homes, some with original verandahs and fretwork still in place. Further from the station you'll see interwar bungalows, post-war weatherboards and 1960s brick houses, many on family-sized blocks.",
    },
    planning:
      "Newport is in Hobsons Bay City Council, and parts of the suburb sit under heritage overlays, particularly among the older period streets. Check VicPlan for your address, and we'll confirm what it means for your plans.",
    nearby: ["spotswood", "south-kingsville", "altona-north"],
    angles: {
      "home-renovations":
        "A Newport renovation can look very different from one street to the next. For a period weatherboard it's often restoring the front and rebuilding the back. For a post-war house it's usually reworking the layout to open up closed-off rooms and bring in more light.",
      "bathroom-renovations":
        "Newport bathrooms range from original period rooms in the older homes to 1960s and 70s bathrooms with coloured tiles further out. Either way, we take the room back to the frame and rebuild it with proper waterproofing, new plumbing where it's needed and storage that suits the household.",
      "kitchen-renovations":
        "Many Newport family homes still have a closed-in kitchen separate from the living room. Opening it up, adding an island where the room allows and connecting the kitchen to the backyard is usually where we start the conversation.",
    },
    faq: {
      q: "We have a long wish list for our Newport home. Where do we start?",
      a: "Start with the free home visit. We walk through the house with you, talk about what isn't working and what you'd like, and give you an honest view of what fits the budget. You don't need plans or a finished brief to get going.",
    },
  },

  spotswood: {
    name: "Spotswood",
    council: "Hobsons Bay",
    intro:
      "Spotswood is small and close-knit, tucked between Yarraville and Newport, with streets of older workers' cottages that suit a careful renovation.",
    housing: {
      title: "Workers' cottages and interwar homes",
      text: "Spotswood's housing grew up around local industry, and many streets have modest Victorian and Edwardian workers' cottages alongside interwar weatherboards. The houses are often small, with a single bathroom and a kitchen at the rear, on blocks with a usable backyard.",
    },
    planning:
      "Spotswood is in Hobsons Bay City Council, and parts of the suburb may be covered by a heritage overlay. VicPlan will show what applies to your address, and we check it at the first visit.",
    nearby: ["newport", "south-kingsville", "yarraville"],
    angles: {
      "home-renovations":
        "Many Spotswood houses were built small, so a renovation is usually about making better use of every room. We look at which walls can come out, how the back of the house meets the yard and whether a modest addition is worth it, then price the whole lot as one job.",
      "bathroom-renovations":
        "A Spotswood cottage often has one bathroom for the whole household. We plan the new room around the people using it: a shower that's easy to clean, storage for more than one person and, where space allows, a separate toilet so mornings run smoother.",
      "kitchen-renovations":
        "Kitchens in Spotswood's older homes are often compact rooms at the back of the house. Removing a wall to join the kitchen to the living area, or turning the bench to face the yard, can change how the whole house works without adding a square metre.",
    },
    faq: {
      q: "We only have one bathroom. Can we live at home while it's renovated?",
      a: "Many people do, with a plan. We agree the timing with you before we start, keep the toilet working wherever we can and give you clear dates for when the bathroom will be out of action. If that doesn't suit, some families stay with relatives for that stretch.",
    },
  },

  "south-kingsville": {
    name: "South Kingsville",
    council: "Hobsons Bay",
    intro:
      "South Kingsville is a small, settled suburb between Spotswood and Altona North, with older timber homes and post-war houses on quiet streets.",
    housing: {
      title: "Small suburb, mixed eras",
      text: "Housing here is a mix of Edwardian and interwar weatherboards, post-war homes and some newer townhouses. Many of the older houses are on single blocks with room at the back, which makes a rear renovation or extension a practical option.",
    },
    planning:
      "South Kingsville comes under Hobsons Bay City Council. Some properties may carry a heritage overlay, and your address on VicPlan will show it before you plan major changes.",
    nearby: ["spotswood", "newport", "kingsville", "altona-north"],
    angles: {
      "home-renovations":
        "Renovations in South Kingsville often cover a full refresh of an interwar or post-war house: new kitchen, new bathroom, updated wiring and plumbing, and better insulation. Where there's room at the back, a single-storey extension can add the living space these houses were built without.",
    },
    faq: {
      q: "Our house still has its original wiring and pipes. Should we replace them during the renovation?",
      a: "If the walls are open anyway, it usually makes sense. Older houses here can still have early wiring or galvanised pipes, and replacing them while the rooms are stripped is far less disruptive than coming back later. We show you what we find before anything is added to the price.",
    },
  },

  "altona-north": {
    name: "Altona North",
    council: "Hobsons Bay",
    intro:
      "Altona North mixes established post-war streets with newer estates on former industrial land, so the right renovation depends a lot on which part of the suburb you're in.",
    housing: {
      title: "Post-war streets and new estates",
      text: "Much of Altona North was built after the war, with weatherboard and cream brick homes and plenty of 1960s and 70s brick veneer. Newer townhouses and estate homes have been added more recently. The older houses often sit on generous blocks, which leaves room to extend.",
    },
    planning:
      "Altona North is in Hobsons Bay City Council. Heritage overlays are less common in its post-war streets than in older suburbs nearby, but it's still worth checking your address on VicPlan.",
    nearby: ["brooklyn", "newport", "south-kingsville"],
    angles: {
      "home-renovations":
        "For a post-war Altona North house, a renovation usually means opening up a closed layout, replacing a dated kitchen and bathroom, and improving insulation and heating. On a larger block, a rear extension can add a family room or main bedroom suite in the same project.",
    },
    faq: {
      q: "Is a brick veneer house worth renovating, or should we rebuild?",
      a: "Many 1960s and 70s brick veneer homes have a sound frame and a layout that opens up well, which makes them good to renovate. We check the frame, roof and footings at the first visit and give you an honest view before you spend anything on drawings.",
    },
  },

  brooklyn: {
    name: "Brooklyn",
    council: "Hobsons Bay",
    intro:
      "Ringed by industry, Brooklyn's small residential pocket has modest post-war homes on quiet streets that respond well to a thorough update.",
    housing: {
      title: "Modest post-war homes",
      text: "Most houses in Brooklyn's residential streets date from the post-war decades, in weatherboard, cream brick and brick veneer. Many are three-bedroom homes with one bathroom and a separate kitchen.",
    },
    planning:
      "Brooklyn is in Hobsons Bay City Council. Heritage overlays are less likely in its post-war streets than in the older suburbs to the east, but check your address on VicPlan to be sure.",
    nearby: ["altona-north", "kingsville", "tottenham", "sunshine-west"],
    angles: {
      "home-renovations":
        "Brooklyn's post-war houses can usually be brought up to date in a single project: a new kitchen, a new bathroom, new floors and better insulation. Because these homes are usually simple in shape, the work is straightforward to plan and price.",
      "bathroom-renovations":
        "The original bathroom in a Brooklyn post-war home is often a small room with a bath and basin, and the toilet in its own room down the hall. We can keep that layout and rebuild it properly, or rework the space to fit a larger shower, a vanity with real storage and better ventilation.",
      "kitchen-renovations":
        "Post-war kitchens in Brooklyn tend to be enclosed rooms with little bench space. Removing a wall to join the kitchen and meals area, adding a pantry and planning the bench around how you cook makes a big difference in a house this size.",
    },
    faq: {
      q: "Can we add a second bathroom to a post-war house?",
      a: "Often, yes. In a Brooklyn post-war home, part of a large main bedroom or a spare room can sometimes become an ensuite or second bathroom. It depends on where the drainage can run, which we check early.",
    },
  },

  /* ───────────────────────── Brimbank ───────────────────────── */

  sunshine: {
    name: "Sunshine",
    council: "Brimbank",
    intro:
      "Sunshine has a long industrial history and a housing mix to match, from interwar and post-war weatherboards to new apartments near the station.",
    housing: {
      title: "Weatherboards, brick and new units",
      text: "Sunshine's older housing grew up around local industry, with many interwar and post-war weatherboard and brick homes, and 1960s and 70s brick veneer further out. Townhouses and units have replaced some original houses, and apartments are going up near the town centre.",
    },
    planning:
      "Sunshine is in Brimbank City Council. Parts of the older area may sit under heritage overlays, so check VicPlan for your address before planning.",
    nearby: ["albion", "sunshine-north", "sunshine-west", "braybrook"],
    angles: {
      "home-renovations":
        "Sunshine's original weatherboard and brick homes are often modest in size, and a renovation is usually about getting more out of them: a better layout, a new kitchen and bathroom, and improved insulation. Where the yard allows, a rear addition can add the living space these houses lack.",
      "bathroom-renovations":
        "Many bathrooms in Sunshine's older houses haven't been touched in decades, with original tiles, a bath and a small vanity. We rebuild them from the frame with proper waterproofing, better ventilation and fittings that suit how you use the room.",
      "kitchen-renovations":
        "In an older Sunshine house, the kitchen is often a separate room with a small window and not much bench. Reworking the layout, removing a wall where the structure allows and adding a pantry gives you a kitchen built for a family that cooks at home.",
    },
    faq: {
      q: "We've bought an older house in Sunshine. What should we fix first?",
      a: "Anything structural, wet or electrical usually comes first: stumps, roof leaks, failed waterproofing and old wiring. Then the kitchen and bathroom. We walk through the house with you at the free first visit and give you an order of work that suits your budget.",
    },
  },

  "sunshine-north": {
    name: "Sunshine North",
    council: "Brimbank",
    intro:
      "Sunshine North is a mostly residential suburb of post-war homes, with industry along its edges and plenty of original houses ready for an update.",
    housing: {
      title: "Original post-war houses",
      text: "The bulk of Sunshine North's housing dates from the 1950s to the 70s, in weatherboard, cream brick and brick veneer, with units and townhouses on some subdivided blocks. Many original homes still have their first kitchen and bathroom, or an update from decades ago.",
    },
    planning:
      "Sunshine North is in Brimbank City Council. Heritage overlays are less likely in its post-war streets, but VicPlan will confirm what applies to your address.",
    nearby: ["sunshine", "albion", "braybrook"],
    angles: {
      "home-renovations":
        "In Sunshine North, a typical renovation is a full interior update of a post-war house. Replacing the kitchen and bathroom, reworking the floor plan and adding insulation and better heating can give an older house decades more life.",
    },
    faq: {
      q: "How do we know if our stumps need replacing?",
      a: "Sloping or bouncy floors, doors that stick and cracks in the plaster above doorways are the common signs. Older weatherboards often sit on ageing stumps, so we get under the floor early and put any restumping first in the plan.",
    },
  },

  "sunshine-west": {
    name: "Sunshine West",
    council: "Brimbank",
    intro:
      "Sunshine West covers a lot of ground, most of it 1960s and 70s brick homes and post-war houses, many on generous blocks with space for a family to grow.",
    housing: {
      title: "Brick veneer on generous blocks",
      text: "Much of Sunshine West was built through the 1960s and 70s, with brick veneer homes, cream brick houses and some post-war weatherboards. Newer townhouses and units have appeared on subdivided blocks. The original homes often have large backyards and a driveway down one side.",
    },
    planning:
      "Sunshine West is in Brimbank City Council. Heritage overlays are less likely in its 1960s and 70s streets, but check VicPlan for your address before planning work.",
    nearby: ["sunshine", "tottenham", "brooklyn"],
    angles: {
      "home-renovations":
        "Plenty of Sunshine West homes from the 1960s and 70s can be reworked for a family today: an open kitchen and family room, renovated bathrooms and better heating and cooling. With big backyards common here, a rear extension or a new main bedroom suite can be part of the same project.",
    },
    faq: {
      q: "Our brick veneer home has a long hallway and small rooms. Can it be opened up?",
      a: "Usually, yes. Some internal walls in a brick veneer home carry roof load and some don't. We work out which is which, bring in an engineer where a beam is needed and plan an open layout that suits the way you live.",
    },
  },

  albion: {
    name: "Albion",
    council: "Brimbank",
    intro:
      "Small and established, Albion sits next to Sunshine, with interwar and post-war homes on blocks that often leave room to extend.",
    housing: {
      title: "Interwar and post-war homes",
      text: "Albion's housing includes interwar weatherboards, post-war homes and some 1960s brick, along with newer units on subdivided lots. Many original houses are modest in size and sit on blocks with a sizeable backyard.",
    },
    planning:
      "Albion is part of Brimbank City Council. A VicPlan search on your address will show whether a heritage overlay applies before any design work starts.",
    nearby: ["sunshine", "sunshine-north", "sunshine-west"],
    angles: {
      "home-renovations":
        "Albion renovations usually update a modest interwar or post-war house, replacing the kitchen and bathroom and reworking the layout. Because many blocks here have space at the rear, renovations and extensions are often planned together.",
      "home-extensions":
        "With room at the back of many Albion blocks, a single-storey rear extension is a practical way to add a family room, a larger kitchen or an extra bedroom and bathroom. We plan the new section to join the original house cleanly, with matching floor levels and a roofline that suits.",
      "bathroom-renovations":
        "Albion's older homes often have a small original bathroom and a separate toilet. We can rebuild them where they are or, if you're extending, put a new bathroom or ensuite in the addition and turn the old one into a laundry or storage.",
    },
    faq: {
      q: "Should we extend now, or renovate first and extend later?",
      a: "Doing both at once usually saves time and money, because the site setup, permits and trades are only paid for once. If the budget doesn't stretch that far, we can design the extension now and build it later, so the first stage doesn't get in its way.",
    },
  },

  /* ───────────────────────── City of Melbourne ───────────────────────── */

  kensington: {
    name: "Kensington",
    council: "City of Melbourne",
    intro:
      "Kensington combines rows of Victorian workers' cottages with townhouses built on old industrial land, close to the city and the Maribyrnong River.",
    housing: {
      title: "Cottages and newer townhouses",
      text: "The older part of Kensington has many Victorian workers' cottages and terraces in timber and brick, on small blocks. Newer townhouses and apartments fill former industrial sites closer to the river. The cottages are usually compact, with the kitchen and bathroom in a rear wing that often needs the most work.",
    },
    planning:
      "Much of older Kensington is covered by heritage overlays in the City of Melbourne's planning scheme, so look your address up on VicPlan. Townhouse owners should check their owners corporation rules as well.",
    nearby: ["flemington", "north-melbourne", "west-melbourne"],
    angles: {
      "home-renovations":
        "Renovating a Kensington cottage usually means restoring the front rooms and rebuilding the rear wing so the kitchen, bathroom and living area work together. For the newer townhouses, it's more often about updating finishes, storage and layouts that are starting to show their age.",
      "bathroom-renovations":
        "In a Kensington cottage the bathroom is usually small and at the back. In the newer townhouses it's often an upstairs bathroom or ensuite with tired finishes and failing seals. We rebuild either kind from the frame and waterproof it properly.",
      "kitchen-renovations":
        "Kensington cottage kitchens are often small and dark, at the very back of the house. Rebuilding the back of the cottage with a skylight, a wider opening to the yard and storage to the ceiling brings light and room into a kitchen that has little of either.",
    },
    faq: {
      q: "Our cottage is cold and dark. What helps most?",
      a: "Skylights, a wider opening at the back, and insulation in the ceiling, walls and under the floor. Kensington cottages are often narrow and close to their neighbours, so light from above usually does more than new side windows.",
    },
  },

  "north-melbourne": {
    name: "North Melbourne",
    council: "City of Melbourne",
    intro:
      "North Melbourne has some of Melbourne's oldest housing, with Victorian terraces and cottages packed into narrow streets close to the city.",
    housing: {
      title: "Victorian terraces near the city",
      text: "Most of North Melbourne's houses are Victorian terraces and cottages, single and double-storey, in brick and timber, many sharing walls with their neighbours. There are also warehouses and apartments. Blocks are small, often with little or no side access.",
    },
    planning:
      "North Melbourne is in the City of Melbourne, and heritage overlays apply across much of the suburb. Check VicPlan for your address, because many renovations here are planned around one.",
    nearby: ["west-melbourne", "kensington", "parkville", "melbourne-cbd"],
    angles: {
      "home-renovations":
        "Renovating a North Melbourne terrace means working carefully inside an old, narrow building: restoring the front rooms, rebuilding the rear wing and upgrading wiring, plumbing and insulation that may be decades out of date. We plan access and material storage early, because many streets have no room to spare.",
      "bathroom-renovations":
        "Bathrooms in North Melbourne terraces are often small rooms at the back or squeezed in upstairs. We work with the space you have, planning the layout around the structure, adding ventilation and waterproofing properly so the new room protects an old building.",
    },
    faq: {
      q: "Our terrace has a narrow staircase. Can you still put a new bathroom upstairs?",
      a: "Yes. We choose a shower base, vanity and fittings that can be carried up the stairs, bring materials in to suit the access, and check the floor structure can take the tiles and fixtures before work starts.",
    },
  },

  "west-melbourne": {
    name: "West Melbourne",
    council: "City of Melbourne",
    intro:
      "Right on the edge of the CBD, West Melbourne mixes Victorian terraces, old warehouses and newer apartments.",
    housing: {
      title: "Terraces, warehouses, apartments",
      text: "Older homes in West Melbourne are mainly Victorian terraces and cottages, many in brick. Former warehouses have been converted into homes, and newer apartment buildings have gone up on many sites. Homes here are compact, so good planning goes a long way.",
    },
    planning:
      "West Melbourne is in the City of Melbourne, where heritage overlays apply to many older buildings. VicPlan shows what's on your address. In apartments and converted warehouses, some work also needs owners corporation approval.",
    nearby: ["north-melbourne", "melbourne-cbd", "docklands", "kensington"],
    angles: {
      "home-renovations":
        "A West Melbourne renovation might be a terrace that needs its rear wing rebuilt, a warehouse conversion that needs a better kitchen and bathroom, or an apartment ready for an update. Each needs careful planning for access, noise and working hours in a dense neighbourhood.",
    },
    faq: {
      q: "Can you renovate inside a converted warehouse?",
      a: "Yes. Warehouse conversions often have high ceilings, exposed structure and services running in unusual places. We check how the plumbing and drainage run before designing a new kitchen or bathroom, and work with the owners corporation where there is one.",
    },
  },

  parkville: {
    name: "Parkville",
    council: "City of Melbourne",
    intro:
      "Parkville is known for intact Victorian terraces and grand homes near the University and Royal Park, where restoration and renovation go hand in hand.",
    housing: {
      title: "Intact Victorian terraces",
      text: "Many Parkville streets are lined with Victorian terraces and larger boom-era homes, often double-storey, with original ironwork, cornices and fireplaces. There are also apartments and university housing. The houses are typically well kept at the front, with rear wings that have been altered over the years.",
    },
    planning:
      "Heritage overlays apply across much of Parkville, which is in the City of Melbourne. VicPlan will confirm what's on your address, and renovations here are usually designed around the overlay from the start.",
    nearby: ["north-melbourne", "brunswick", "brunswick-west", "flemington"],
    angles: {
      "home-renovations":
        "A Parkville renovation usually leaves a period home's front rooms as they are, restoring plaster, joinery and fireplaces, while the rear wing is rebuilt for a new kitchen, bathroom and living space. Original features are protected before any demolition starts.",
      "bathroom-renovations":
        "In Parkville's terraces, bathrooms are often at the back of the house or upstairs, sometimes in rooms never designed for them. We rebuild them with proper waterproofing and ventilation, and choose finishes with the house's age and proportions in mind.",
      "kitchen-renovations":
        "Many Parkville kitchens sit in a rear wing that feels a world away from the grand rooms at the front. A new kitchen can carry some of that character through in its joinery and proportions, while giving you the bench space, storage and light a working kitchen needs.",
    },
    faq: {
      q: "How do you protect original features during the build?",
      a: "We cover floors, wrap fireplaces and mantels, and protect stained glass, cornices and staircases before demolition starts. Rooms outside the work area are closed off, and we agree with you up front which features stay untouched.",
    },
  },

  docklands: {
    name: "Docklands",
    council: "City of Melbourne",
    intro:
      "Docklands is almost entirely apartments and townhouses, so renovating here is about making the most of a modern space within the building's rules.",
    housing: {
      title: "Apartments and waterfront homes",
      text: "Homes in Docklands are mostly apartments in mid and high-rise towers, with some townhouses near the water. Most were built from around 2000 onward, so renovations tend to focus on kitchens, bathrooms, flooring and storage. Structural work is rarely part of the job.",
    },
    planning:
      "Docklands is in the City of Melbourne. Most apartment work also needs owners corporation approval, plus the building manager's sign-off on lift bookings and work hours.",
    nearby: ["melbourne-cbd", "west-melbourne", "north-melbourne"],
    angles: {
      "home-renovations":
        "Most renovation work in Docklands is an apartment refit: a new kitchen, an updated bathroom or ensuite, new flooring and better storage. We plan around the building's rules on lifts, noise and work hours, and prepare the paperwork the owners corporation asks for.",
    },
    faq: {
      q: "What do we need from our building before a renovation starts?",
      a: "Usually approval from the owners corporation, a goods lift booking and the building's rules on work hours and noise. Some buildings also ask for waterproofing details and insurance certificates. We help gather what your building needs so the job can start on time.",
    },
  },

  "melbourne-cbd": {
    name: "Melbourne CBD",
    council: "City of Melbourne",
    intro:
      "Homes in the Melbourne CBD are mostly apartments, from converted older buildings to modern towers, and renovating one takes careful planning around the building.",
    housing: {
      title: "Towers and converted buildings",
      text: "CBD apartments range from units in converted office and warehouse buildings to newer high-rise towers. Many are compact, with the kitchen along one wall and a single bathroom. Space, storage and light are usually the things most worth improving.",
    },
    planning:
      "The CBD is in the City of Melbourne, and many older buildings are covered by heritage overlays. Inside an apartment, owners corporation approval and building rules usually shape the work more than anything else.",
    nearby: ["docklands", "west-melbourne", "north-melbourne"],
    angles: {
      "home-renovations":
        "A CBD apartment renovation usually focuses on the kitchen, bathroom and storage, since every square metre counts. We plan deliveries and waste removal around lift bookings and loading dock times, and schedule noisy work within the building's allowed hours.",
    },
    faq: {
      q: "How do you get materials into a city apartment?",
      a: "We book the building's loading dock and goods lift in advance, bring materials in smaller loads and take waste out the same way. Cabinetry and benchtops are measured to fit the lift and doorways, so nothing arrives that can't reach your floor.",
    },
  },
};
