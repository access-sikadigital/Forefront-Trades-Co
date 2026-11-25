/**
 * Page copy from the client's copywriting set (Forefront Trades Co | V2 Copy,
 * one Google Doc per URL, Nov 2026), keyed by path. Generated from the docs;
 * internal notes and form specs were removed and a few lines that referred to
 * internal planning documents were rewritten. Edit the copy here.
 *
 * Not used yet: privacy policy and terms (docs flagged for legal review),
 * knock-down rebuild and granny flats (held for service confirmation),
 * renovation cost calculator (needs the tool built).
 */
export type CopyItem = { title: string; text: string };
export type CopySection = {
  title: string;
  paras: string[];
  items: CopyItem[];
  steps: string[];
};
export type PageCopy = {
  seoTitle: string;
  meta: string;
  h1: string;
  intro: string[];
  sections: CopySection[];
  faqs: { q: string; a: string }[];
  cta?: { title: string; text: string; label: string };
};

export const pageCopy: Record<string, PageCopy> = {
  "/": {
    seoTitle: "Renovation Builders Melbourne | Forefront Trades Co.",
    meta: "Planning a home renovation or extension in Melbourne? Explore Forefront Trades Co.’s design-and-construct approach and discuss your project.",
    h1: "Renovation Builders in Melbourne for Homes Worth Staying In",
    intro: [
      "Love where you live, but need your home to work harder? Forefront Trades Co. helps Melbourne homeowners rethink, renovate and extend existing spaces—from one important room to a more substantial transformation.",
      "Thoughtful design, practical construction advice and a clear project plan. So the home you already know can better suit the way you want to live.",
    ],
    sections: [
      {
        title: "Make the most of the home you have",
        paras: [
          "There are many reasons to renovate. Your family might need another bedroom. The kitchen may no longer suit a busy household. An older floor plan might feel closed off, or a tired bathroom could be holding back the rest of your home. The answer is not always to move. Sometimes it is to see what your existing home could become.",
          "The right project starts with understanding which spaces need to change, what can realistically be altered and where your budget will have the greatest impact. We help you work through those decisions before the build begins.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Home renovations and extensions, planned as one project",
        paras: [],
        items: [
          {
            title: "Home extensions",
            text: "Create the extra space you need while considering how the new rooms connect to your existing home. Explore rear, ground-floor and second-storey options subject to your property's structure and planning requirements.",
          },
          {
            title: "Full home renovations",
            text: "Improve the flow, function and feel of several spaces together. Consider layout, structural changes, services, finishes and construction sequencing as part of one coordinated scope.",
          },
          {
            title: "Bathroom renovations",
            text: "Plan a bathroom around everyday routines, storage, ventilation and water-resistant detailing—not just the tiles you like.",
          },
          {
            title: "Kitchen renovations",
            text: "Create a kitchen that supports cooking, gathering and the way your household moves through the home. Explore storage, lighting, appliances, cabinetry and adjoining living spaces.",
          },
          {
            title: "Laundry renovations",
            text: "Put awkward corners and limited floor space to better use with practical storage, durable materials and a layout that makes daily tasks easier.",
          },
        ],
        steps: [],
      },
      {
        title: "Design decisions should make building decisions easier",
        paras: [
          "A renovation is easier to manage when ideas, measurements, budgets and construction constraints are considered together. Early conversations should explore what you want to achieve and what the property will allow. Depending on the scope, that can include design development, engineering, planning considerations, material selections and a realistic build sequence.",
          "Our design-and-construct approach brings those conversations into one coordinated process, so the project is not treated as a collection of disconnected tasks.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Built for Melbourne homes",
        paras: [
          "Forefront Trades Co. is based in Maribyrnong and works across its defined Melbourne service area, including neighbourhoods such as Footscray, Yarraville, Essendon, Brunswick and Newport. Older homes, changing family needs and site constraints call for decisions that suit the individual property.",
          "We consider the existing building, access, structural requirements and any applicable planning controls before suggesting a way forward. Visit our Areas We Service page for the full suburb list.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See the work, not just the promises",
        paras: [
          "Explore our project gallery to get a feel for the types of spaces and finishes we work with. Project photographs are most useful when paired with a clear explanation of the original brief, the construction scope and the outcome.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "How a renovation conversation begins",
        paras: [],
        items: [
          {
            title: "Tell us what needs to change",
            text: "Share the property location, the rooms involved, what is not working and the result you are hoping to achieve.",
          },
          {
            title: "Explore what is practical",
            text: "We discuss priorities, the likely scope, access, design considerations and the next information needed to assess the job.",
          },
          {
            title: "Plan the next step",
            text: "Where the project is a fit, the next stage is to develop the scope and work through design, approvals, costing and construction requirements.",
          },
        ],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Do you take on both room renovations and larger projects?",
        a: "Yes. We take on bathrooms, kitchens and laundries as well as full home renovations and extensions. Whether we're the right fit for a job depends on its location, scope and timing.",
      },
      {
        q: "Can I discuss an extension before I have drawings?",
        a: "Yes. An initial conversation can help clarify the spaces you need and what information will be required to assess design and construction options.",
      },
    ],
    cta: {
      title: "Ready to make your home work better?",
      text: "Whether you are comparing ideas or ready to plan an extension, start with a conversation about your home. Tell us the suburb, the type of project and what you would like to change.",
      label: "Discuss Your Project",
    },
  },
  "/about/": {
    seoTitle: "About Forefront Trades Co. | Melbourne Renovation Builders",
    meta: "Get to know Forefront Trades Co., a Maribyrnong-based renovation and extension business focused on thoughtful planning and quality residential work.",
    h1: "A Melbourne Building Team That Starts by Listening",
    intro: [
      "A successful renovation changes more than the appearance of a home. It changes how rooms connect, how a household uses the space and how easily everyday life runs.",
      "Forefront Trades Co. approaches renovation and extension projects with that bigger picture in mind. Before talking finishes and fixtures, we want to understand what you are trying to improve, what matters most to you and what the existing building allows.",
    ],
    sections: [
      {
        title: "Established in Melbourne's Inner West",
        paras: [
          "Based in Maribyrnong, Forefront Trades Co. works with homeowners across Melbourne's inner west and north, and has been building in Melbourne for more than 30 years.",
          "Homes across the inner west can differ greatly in age, construction, access and planning constraints. A considered approach means understanding the house in front of us rather than forcing every renovation into the same formula.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "What guides the work",
        paras: [],
        items: [
          {
            title: "Start with the home, not a catalogue",
            text: "An attractive design is only one part of the decision. We look at how people use the space, what can be retained, what needs to change and how new work will meet the existing building.",
          },
          {
            title: "Make the scope understandable",
            text: "Homeowners deserve to know what is included, what requires further investigation and which choices affect price or timing. A clear scope helps prevent different expectations later.",
          },
          {
            title: "Bring design and construction together",
            text: "The strongest plans make sense on paper and on site. Coordinating design thinking with construction considerations helps resolve layout, access, engineering and finish decisions in a sensible order.",
          },
          {
            title: "Respect the details",
            text: "Waterproofing, drainage, services, structural connections and careful preparation are not the glamorous parts of a renovation. They are often the parts that make the finished space work well for years.",
          },
        ],
        steps: [],
      },
      {
        title: "The projects we focus on",
        paras: [
          "Most of our work is full home renovations and extensions, along with bathroom, kitchen and laundry renovations. Heritage and period homes are a specialty.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "What to expect when you enquire",
        paras: [
          "Tell us the address or suburb, the type of renovation, your timeframe and any plans or ideas you already have. From there, the conversation can move toward what is feasible, what documentation may be needed and whether the project is a suitable fit.",
          "No two homes have the same starting point. Our job is to help you reach a clearer understanding of yours.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See our approach in real projects",
        paras: [
          "Browse our projects for completed work in Footscray, Altona and West Footscray, photographed after handover.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Have a renovation in mind?",
      text: "Tell us what you want to improve and where the property is located. We can discuss the project and the most useful next step.",
      label: "Discuss Your Project",
    },
  },
  "/areas/": {
    seoTitle: "Melbourne Renovation Service Areas | Forefront Trades Co.",
    meta: "Find Forefront Trades Co.’s renovation and extension service areas across Melbourne’s west and inner north, organised by municipality.",
    h1: "Where we renovate and extend",
    intro: [
      "Forefront Trades Co. is based in Maribyrnong. Use this directory to find planning considerations and renovation options for your area. Tell us your project address when you enquire so we can confirm the property and scope.",
    ],
    sections: [
      {
        title: "Maribyrnong",
        paras: [
          "Maribyrnong, Footscray, West Footscray, Yarraville, Seddon, Kingsville, Maidstone, Braybrook and Tottenham",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Moonee Valley",
        paras: [
          "Essendon, Essendon North, Essendon West, Moonee Ponds, Ascot Vale, Flemington, Aberfeldie, Travancore, Niddrie, Airport West, Keilor East, Avondale Heights, Strathmore and Strathmore Heights",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Brimbank",
        paras: ["Sunshine, Sunshine North, Sunshine West and Albion"],
        items: [],
        steps: [],
      },
      {
        title: "Hobsons Bay",
        paras: [
          "Newport, Spotswood, South Kingsville, Brooklyn and Altona North",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Merri-bek",
        paras: ["Brunswick, Brunswick West, Pascoe Vale and Pascoe Vale South"],
        items: [],
        steps: [],
      },
      {
        title: "City of Melbourne",
        paras: [
          "Melbourne CBD, Kensington, North Melbourne, West Melbourne, Parkville and Docklands",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Check your project with us",
      text: "",
      label: "Check your project with us",
    },
  },
  "/bathroom-renovations/": {
    seoTitle: "Bathroom Renovations Melbourne | Forefront Trades Co.",
    meta: "Plan a bathroom renovation in Melbourne with Forefront Trades Co., from layout and storage to wet-area details and construction.",
    h1: "A bathroom that works through the morning rush",
    intro: [
      "A bathroom earns its keep every morning and every night. Start with who uses it, what needs to be within reach and which parts of the layout make it harder to get ready.",
    ],
    sections: [
      {
        title: "Use the floor plan to solve the daily problems",
        paras: [
          "Check how the door, shower screen and vanity drawers move when someone is in the room. A longer vanity may give you the storage you want, while a better shower entry may free up more floor area. If you’re weighing up a bath, think about how often it’s used and what it takes to clean around it.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Plan behind the finishes",
        paras: [
          "The position of wastes, the condition of the floor and the way the room is ventilated all affect the work. Bring those questions into the early design so the tile, screen and cabinetry choices suit the space and the waterproofing details.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Compare scopes carefully",
        paras: [
          "Moving plumbing, changing the floor and replacing damaged substrates involve different work from retaining a good layout. Ask what the scope covers from strip-out through fit-off and where allowances still apply.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See the details in a finished room",
        paras: [
          "Use the Altona gallery to get a sense of how the finishes and fittings meet. Make a note of what you want to use as a reference and bring a photo of the space you have now.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Do I need to move the plumbing?",
        a: "Often you can explore a design that keeps the main fixtures close to their current positions. We can assess access, existing conditions and whether changes would make the room easier to use.",
      },
      {
        q: "Can you renovate a bathroom and ensuite together?",
        a: "Talk to us about both rooms and which facilities need to stay usable. The scope and work sequence can then be discussed together.",
      },
    ],
    cta: {
      title: "Discuss your bathroom renovation",
      text: "",
      label: "Discuss your bathroom renovation",
    },
  },
  "/bathroom-renovations/albion/": {
    seoTitle: "Bathroom Renovations Albion | Forefront",
    meta: "Give an older wet area a plan that starts beneath the tiles. Plan a bathroom renovation in Albion with Forefront Trades Co.",
    h1: "Bathroom Renovations in Albion",
    intro: [
      "If the bathroom in your Albion home is showing signs of age, take photos of the areas that concern you and note any changes you’ve seen. The position of new fixtures should be considered alongside the condition of the floor and walls.",
    ],
    sections: [
      {
        title: "Keep the home’s existing levels in mind",
        paras: [
          "Check the step from the hallway and whether you want to keep the existing door and trim. Discuss how the proposed shower waste and floor finish would work with the retained parts before ordering tiles.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Albion",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Brimbank planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the wet areas into the same discussion",
        paras: [
          "The Footscray project library includes bathroom and laundry footage. It can help you think about the work you’d like to consider together and what you need each room to do afterwards.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I keep original bathroom fittings?",
        a: "Bring details of what you want to keep. Condition, compatibility with new work and the ability to service the fitting help determine what can be reused.",
      },
    ],
    cta: {
      title: "Discuss your Albion bathroom renovation",
      text: "",
      label: "Discuss your Albion bathroom renovation",
    },
  },
  "/bathroom-renovations/ascot-vale/": {
    seoTitle: "Bathroom Renovations Ascot Vale | Forefront",
    meta: "Use the available width carefully. Plan a bathroom renovation in Ascot Vale with Forefront Trades Co.",
    h1: "Bathroom Renovations in Ascot Vale",
    intro: [
      "If your Ascot Vale bathroom is narrow, get the real dimensions before choosing fittings. Wall thickness, an inward-opening door and the depth of a vanity can all change how much standing room you have.",
    ],
    sections: [
      {
        title: "Draw where you’ll stand",
        paras: [
          "Mark the space in front of the basin, beside the bath and just outside the shower. Then try opening drawers and doors on the same drawing. Keep enough room to clean and reach fixtures comfortably.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Ascot Vale",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the wet areas into the same discussion",
        paras: [
          "The Footscray project library includes bathroom and laundry footage. It can help you think about the work you’d like to consider together and what you need each room to do afterwards.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Is wall-hung cabinetry suitable for my bathroom?",
        a: "It can be considered where the wall and fixing details suit it. Check the storage and cleaning space you gain against any structural or service constraints.",
      },
    ],
    cta: {
      title: "Discuss your Ascot Vale bathroom renovation",
      text: "",
      label: "Discuss your Ascot Vale bathroom renovation",
    },
  },
  "/bathroom-renovations/avondale-heights/": {
    seoTitle: "Bathroom Renovations Avondale Heights | Forefront",
    meta: "Make the shower entry easier to use. Plan a bathroom renovation in Avondale Heights with Forefront Trades Co.",
    h1: "Bathroom Renovations in Avondale Heights",
    intro: [
      "If an older Avondale Heights bathroom has a high shower step or a narrow screen opening, sketch the route from the door to the shower. Identify where more room or a simpler entry would help.",
    ],
    sections: [
      {
        title: "Check levels on both sides of the door",
        paras: [
          "A change inside the bathroom can affect the transition to the hall. The existing structure, drainage and finish thickness all matter. Ask what can be achieved before specifying a level entry or changing door positions.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Avondale Heights",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the wet areas into the same discussion",
        paras: [
          "The Footscray project library includes bathroom and laundry footage. It can help you think about the work you’d like to consider together and what you need each room to do afterwards.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I plan for future mobility needs now?",
        a: "Yes. Describe the access and clearances you want, then have the options assessed for the room and the people who use it.",
      },
    ],
    cta: {
      title: "Discuss your Avondale Heights bathroom renovation",
      text: "",
      label: "Discuss your Avondale Heights bathroom renovation",
    },
  },
  "/bathroom-renovations/brooklyn/": {
    seoTitle: "Bathroom Renovations Brooklyn | Forefront",
    meta: "Give the bathroom a clear layout that suits the existing structure. Plan a bathroom renovation in Brooklyn with Forefront Trades Co.",
    h1: "Bathroom Renovations in Brooklyn",
    intro: [
      "If the bathroom in your Brooklyn home has a layout you can live with, start by checking which parts are worn or hard to use. Retaining the main fixture positions may leave room in the brief for better lighting and storage.",
    ],
    sections: [
      {
        title: "Plan how everything comes in and goes out",
        paras: [
          "Large screens and vanities need a route through the house. Measure the turns and doorways, then consider where removed material can go. Bring access and floor conditions into the first scope discussion.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Brooklyn",
        paras: [
          "Use the property address to check the responsible council and planning controls. Brooklyn crosses council boundaries. If your bathroom renovation changes an outside opening or involves structural work, bring those details to the approvals discussion.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Take a closer look at a completed wet area",
        paras: [
          "In the Altona gallery, consider the relationship between the fittings and the wall and floor finishes. Bring an image if there’s a detail you’d like to discuss against the conditions in your own room.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I choose a larger shower before the floor is checked?",
        a: "Start with the size you’d like, then confirm what the floor, waste and door clearances allow before committing to fixtures.",
      },
    ],
    cta: {
      title: "Discuss your Brooklyn bathroom renovation",
      text: "",
      label: "Discuss your Brooklyn bathroom renovation",
    },
  },
  "/bathroom-renovations/brunswick/": {
    seoTitle: "Bathroom Renovations Brunswick | Forefront",
    meta: "Find space and privacy in a compact bathroom. Plan a bathroom renovation in Brunswick with Forefront Trades Co.",
    h1: "Bathroom Renovations in Brunswick",
    intro: [
      "A bathroom tucked into the back of a Brunswick terrace may be close to both the kitchen and the yard. If privacy or the route through the house feels awkward, look at how the room is entered before deciding where the fixtures belong.",
    ],
    sections: [
      {
        title: "Look at the room from the hallway",
        paras: [
          "Check what you see when the door is open. A screen, a change in the door position or different vanity proportions can help. Consider the window and ventilation together, especially if you want more daylight without a direct view from outside.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Brunswick",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Merri-bek planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Take a closer look at a completed wet area",
        paras: [
          "In the Altona gallery, consider the relationship between the fittings and the wall and floor finishes. Bring an image if there’s a detail you’d like to discuss against the conditions in your own room.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I use a skylight to bring daylight in?",
        a: "It may be worth exploring. Check how it would fit the roof, what ventilation is needed and whether any planning controls affect the proposed change.",
      },
    ],
    cta: {
      title: "Discuss your Brunswick bathroom renovation",
      text: "",
      label: "Discuss your Brunswick bathroom renovation",
    },
  },
  "/bathroom-renovations/ensuites/": {
    seoTitle: "Ensuite Renovations Melbourne | Forefront Trades Co.",
    meta: "Make more of the space in your ensuite with a considered shower layout, task lighting, storage and a clear plan for wet-area work.",
    h1: "An ensuite that makes the most of a small footprint",
    intro: [
      "An ensuite sits close to the spaces where you sleep and dress. That makes the position of the door, the sound of the fan and the type of light you use just as important as the finishes.",
    ],
    sections: [
      {
        title: "Give each movement enough room",
        paras: [
          "Draw the path from bed to basin, then try opening the door, getting into the shower and reaching for a towel. If the room is tight, compare a vanity with shallower storage, a screen with a different opening or a door arrangement that frees up standing room.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Keep the bedroom in the brief",
        paras: [
          "A low-level light can be worth exploring for early starts. Consider privacy if the ensuite opens directly to a bedroom, and plan extraction to suit the room. Choose storage that keeps the things you use daily within reach.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Check floor and service options early",
        paras: [
          "An ensuite next to existing plumbing may still need a closer look at the waste route and floor construction. If you want to create an ensuite in a former wardrobe or other dry space, ask what needs to be assessed before committing to the layout.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I add an ensuite where there isn’t one now?",
        a: "Possibly. Space, ventilation, drainage, waterproofing and the impact on adjacent rooms need to be considered at your property.",
      },
    ],
    cta: {
      title: "Discuss your ensuite layout",
      text: "",
      label: "Discuss your ensuite layout",
    },
  },
  "/bathroom-renovations/essendon/": {
    seoTitle: "Bathroom Renovations Essendon | Forefront",
    meta: "Make the family bathroom easier to share. Plan a bathroom renovation in Essendon with Forefront Trades Co.",
    h1: "Bathroom Renovations in Essendon",
    intro: [
      "If the main bathroom in your Essendon home has to serve the whole household, start with where the queues form. A separate spot for teeth and hair can matter more than squeezing another fitting into the room.",
    ],
    sections: [
      {
        title: "Keep a bath that earns its space",
        paras: [
          "Think through whether you need a full-size bath, who uses it and what clearance it takes to step out and dry off. If you retain it, compare a compact vanity and a wider shower opening before shifting the waste points.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Essendon",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look at how the room fits together",
        paras: [
          "Use our Altona project gallery to see a completed bathroom context. Compare the wide view with the close-ups, then save the details that speak to the priorities in your brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we work on the ensuite and family bathroom together?",
        a: "Ask us to compare the scope and sequence. Keeping one room usable can influence when the work to the other room starts.",
      },
    ],
    cta: {
      title: "Discuss your Essendon bathroom renovation",
      text: "",
      label: "Discuss your Essendon bathroom renovation",
    },
  },
  "/bathroom-renovations/flemington/": {
    seoTitle: "Bathroom Renovations Flemington | Forefront",
    meta: "Plan a bathroom update with the property in view. Plan a bathroom renovation in Flemington with Forefront Trades Co.",
    h1: "Bathroom Renovations in Flemington",
    intro: [
      "If an older Flemington bathroom feels cold or dark, start with where light enters and where moisture goes. Use that information when deciding what to do with the existing window, wall linings and fan.",
    ],
    sections: [
      {
        title: "Consider how a new finish meets what stays",
        paras: [
          "A renovation can expose differences in floor levels or wall thickness between the bathroom and hall. Decide how the new finish will meet the doorway and whether the existing window and trims can remain in place.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Flemington",
        paras: [
          "Use the property address to check the responsible council and planning controls. Flemington crosses council boundaries. If your bathroom renovation changes an outside opening or involves structural work, bring those details to the approvals discussion.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the wet areas into the same discussion",
        paras: [
          "The Footscray project library includes bathroom and laundry footage. It can help you think about the work you’d like to consider together and what you need each room to do afterwards.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Do I need to check the council for internal changes?",
        a: "Start with the actual address and proposed work. Flemington crosses council areas, and approvals depend on the work and controls that apply.",
      },
    ],
    cta: {
      title: "Discuss your Flemington bathroom renovation",
      text: "",
      label: "Discuss your Flemington bathroom renovation",
    },
  },
  "/bathroom-renovations/footscray/": {
    seoTitle: "Bathroom Renovations Footscray | Forefront",
    meta: "Keep what works in a well-used wet area. Plan a bathroom renovation in Footscray with Forefront Trades Co.",
    h1: "Bathroom Renovations in Footscray",
    intro: [
      "If the bathroom and laundry sit side by side at your Footscray home, put both rooms on the plan before you change either. It can help you spot decisions about pipes, doorways and storage that affect both spaces.",
    ],
    sections: [
      {
        title: "Read the Footscray project as a set of rooms",
        paras: [
          "Our Footscray project library records the bathroom and laundry together. Ask which details you can apply to your own layout, such as the way you want the doorways to meet or the amount of storage you need in each room.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Footscray",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Maribyrnong planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring your plans into the conversation",
        paras: [
          "Take a picture of the floor at the entry and the wall behind the main fixtures. If you want to keep a fitting or fixture, tell us how it is used and what condition it’s in.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Does neighbouring laundry work affect bathroom timing?",
        a: "It can. Shared service work and the need to keep a working bathroom or washing machine should be discussed before agreeing on the order of work.",
      },
    ],
    cta: {
      title: "Discuss your Footscray bathroom renovation",
      text: "",
      label: "Discuss your Footscray bathroom renovation",
    },
  },
  "/bathroom-renovations/keilor-east/": {
    seoTitle: "Bathroom Renovations Keilor East | Forefront",
    meta: "Make a bathroom ready for changing needs. Plan a bathroom renovation in Keilor East with Forefront Trades Co.",
    h1: "Bathroom Renovations in Keilor East",
    intro: [
      "A Keilor East bathroom can be planned around the things you expect to need for years, such as a comfortable shower entry or storage that’s easy to reach. Start with the people using the room and the route they take.",
    ],
    sections: [
      {
        title: "Allow for support before the walls close",
        paras: [
          "If you want to consider future rails or different fittings, raise that before the wall details are fixed. It can affect the position of fixtures, backing and the space you leave to move around.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Keilor East",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look at how the room fits together",
        paras: [
          "Use our Altona project gallery to see a completed bathroom context. Compare the wide view with the close-ups, then save the details that speak to the priorities in your brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can a family bathroom suit children and older adults?",
        a: "Work through both routines at the layout stage. Discuss access, where towels and products sit and whether a bath still serves the household.",
      },
    ],
    cta: {
      title: "Discuss your Keilor East bathroom renovation",
      text: "",
      label: "Discuss your Keilor East bathroom renovation",
    },
  },
  "/bathroom-renovations/kensington/": {
    seoTitle: "Bathroom Renovations Kensington | Forefront",
    meta: "Keep a wet-room update in scale with the house. Plan a bathroom renovation in Kensington with Forefront Trades Co.",
    h1: "Bathroom Renovations in Kensington",
    intro: [
      "In a compact Kensington home, every centimetre a bathroom borrows may come from a room you use often. Decide what needs to fit and compare a more efficient layout before making the footprint larger.",
    ],
    sections: [
      {
        title: "Choose fittings by the clearance they need",
        paras: [
          "Take the vanity depth and shower opening into account, then stand in the room and imagine using them. If the bathroom is tucked under part of the roof, check headroom at the shower and where you stand at the mirror.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Kensington",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. City of Melbourne planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Take a closer look at a completed wet area",
        paras: [
          "In the Altona gallery, consider the relationship between the fittings and the wall and floor finishes. Bring an image if there’s a detail you’d like to discuss against the conditions in your own room.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can an older bathroom be updated without losing character?",
        a: "Yes, where existing features suit the work. Bring photos of what you’d like to retain, then discuss the condition and detailing needed in the wet area.",
      },
    ],
    cta: {
      title: "Discuss your Kensington bathroom renovation",
      text: "",
      label: "Discuss your Kensington bathroom renovation",
    },
  },
  "/bathroom-renovations/kingsville/": {
    seoTitle: "Bathroom Renovations Kingsville | Forefront",
    meta: "Make room for the movements that matter. Plan a bathroom renovation in Kingsville with Forefront Trades Co.",
    h1: "Bathroom Renovations in Kingsville",
    intro: [
      "If your Kingsville bathroom opens directly from a compact hall, measure where people turn and pass. A sensible plan should make it easy to get from the door to the basin and to reach a towel from the shower.",
    ],
    sections: [
      {
        title: "Think about the usable wall area",
        paras: [
          "Place a mirror, towel rail and storage on a wall drawing before choosing a screen and vanity. The wall that looks spare on a floor plan may already be needed for a switch, door swing or existing window.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Kingsville",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Maribyrnong planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Take a closer look at a completed wet area",
        paras: [
          "In the Altona gallery, consider the relationship between the fittings and the wall and floor finishes. Bring an image if there’s a detail you’d like to discuss against the conditions in your own room.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I add more storage without a larger vanity?",
        a: "Yes. A mirrored cabinet or storage outside the bathroom may suit the layout. Check wall depth and clearances before fixing positions.",
      },
    ],
    cta: {
      title: "Discuss your Kingsville bathroom renovation",
      text: "",
      label: "Discuss your Kingsville bathroom renovation",
    },
  },
  "/bathroom-renovations/maidstone/": {
    seoTitle: "Bathroom Renovations Maidstone | Forefront",
    meta: "Plan the bathroom and the adjoining rooms together. Plan a bathroom renovation in Maidstone with Forefront Trades Co.",
    h1: "Bathroom Renovations in Maidstone",
    intro: [
      "If your Maidstone bathroom backs onto a laundry or sits in a later addition, record where the services go before deciding on a new layout. Check which rooms need to stay usable and when.",
    ],
    sections: [
      {
        title: "Keep household storage within reach",
        paras: [
          "Think about what lives in the hallway, laundry and bathroom now. A recessed cabinet or a better place for linen can free up floor space without taking room from the shower. Compare storage options on a drawing with the doors open.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Maidstone",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Maribyrnong planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look at how the room fits together",
        paras: [
          "Use our Altona project gallery to see a completed bathroom context. Compare the wide view with the close-ups, then save the details that speak to the priorities in your brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we replace the shower and keep the rest of the room?",
        a: "Ask what a partial scope would involve. The condition of retained surfaces, junctions and waterproofing affects what can be done.",
      },
    ],
    cta: {
      title: "Discuss your Maidstone bathroom renovation",
      text: "",
      label: "Discuss your Maidstone bathroom renovation",
    },
  },
  "/bathroom-renovations/maribyrnong/": {
    seoTitle: "Bathroom Renovations Maribyrnong | Forefront",
    meta: "Make a small bathroom feel better organised. Plan a bathroom renovation in Maribyrnong with Forefront Trades Co.",
    h1: "Bathroom Renovations in Maribyrnong",
    intro: [
      "If the Maribyrnong bathroom has enough floor space but nowhere for toiletries, towels and washing, work out what needs to live in the room. Choose a shower and vanity layout once you know where that storage should go.",
    ],
    sections: [
      {
        title: "Account for the services you can’t see",
        paras: [
          "Before moving a shower or toilet, ask where the wastes and supply lines run. If the room sits in a unit, check which services or walls belong to the lot and which need a discussion with the owners corporation.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Maribyrnong",
        paras: [
          "Check the planning property report and the building requirements that apply at the address. If you share services or common property with other lots, talk to the owners corporation about the proposed work before finalising your layout.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Take a closer look at a completed wet area",
        paras: [
          "In the Altona gallery, consider the relationship between the fittings and the wall and floor finishes. Bring an image if there’s a detail you’d like to discuss against the conditions in your own room.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we keep the wet area in the same place?",
        a: "Yes, that can be a useful option to price. We can discuss where a new screen, fittings and cabinetry would improve the room while retaining the main service positions.",
      },
    ],
    cta: {
      title: "Discuss your Maribyrnong bathroom renovation",
      text: "",
      label: "Discuss your Maribyrnong bathroom renovation",
    },
  },
  "/bathroom-renovations/moonee-ponds/": {
    seoTitle: "Bathroom Renovations Moonee Ponds | Forefront",
    meta: "Make the bathroom work around a busy morning. Plan a bathroom renovation in Moonee Ponds with Forefront Trades Co.",
    h1: "Bathroom Renovations in Moonee Ponds",
    intro: [
      "If the Moonee Ponds bathroom you use every day doubles as the guest bathroom, give each use a place in the plan. Good light around the mirror and a clear spot for guests’ towels can improve the room without taking up much floor area.",
    ],
    sections: [
      {
        title: "Put storage where it can be reached",
        paras: [
          "Separate the things you reach for daily from the bulk supplies. Put everyday storage near the mirror and keep the drawers clear of the door. If you want a longer vanity, check how far the shower screen and doorway need to move.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Moonee Ponds",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the wet areas into the same discussion",
        paras: [
          "The Footscray project library includes bathroom and laundry footage. It can help you think about the work you’d like to consider together and what you need each room to do afterwards.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I keep a separate toilet?",
        a: "Yes, if it serves your routine. Compare the value of a second usable room during the morning with the floor area a combined plan could give you.",
      },
    ],
    cta: {
      title: "Discuss your Moonee Ponds bathroom renovation",
      text: "",
      label: "Discuss your Moonee Ponds bathroom renovation",
    },
  },
  "/bathroom-renovations/newport/": {
    seoTitle: "Bathroom Renovations Newport | Forefront",
    meta: "Build around the bathroom’s existing light. Plan a bathroom renovation in Newport with Forefront Trades Co.",
    h1: "Bathroom Renovations in Newport",
    intro: [
      "If your Newport bathroom has a window that makes the space feel bigger, keep it in the conversation when you draw the new layout. Think about what you can see from outside, what needs privacy and where light falls at the basin.",
    ],
    sections: [
      {
        title: "Leave the floor plan open before moving services",
        paras: [
          "Test the positions of shower, bath and vanity against the window and entry. Then consider the existing wastes and how moving them could affect the floor. Ask how the sill, shower and wall finish would meet if the window sits near a wet area.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Newport",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Hobsons Bay planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the wet areas into the same discussion",
        paras: [
          "The Footscray project library includes bathroom and laundry footage. It can help you think about the work you’d like to consider together and what you need each room to do afterwards.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should we replace the bathroom window as part of the work?",
        a: "That depends on its condition, privacy and how it fits the layout. Confirm property controls and construction details if the external opening is changing.",
      },
    ],
    cta: {
      title: "Discuss your Newport bathroom renovation",
      text: "",
      label: "Discuss your Newport bathroom renovation",
    },
  },
  "/bathroom-renovations/north-melbourne/": {
    seoTitle: "Bathroom Renovations North Melbourne | Forefront",
    meta: "Make a compact bathroom easier to live with. Plan a bathroom renovation in North Melbourne with Forefront Trades Co.",
    h1: "Bathroom Renovations in North Melbourne",
    intro: [
      "If the bathroom in your North Melbourne terrace or apartment is working with limited wall space, look at the door and mirror before expanding the layout. Decide where you want to stand, what needs daylight and what should stay within reach.",
    ],
    sections: [
      {
        title: "Identify what belongs to the property",
        paras: [
          "For an apartment, establish the lot boundaries and shared services before proposing changes. For an older house, consider the condition of the existing floor and check property controls if the work affects external openings.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in North Melbourne",
        paras: [
          "Check the planning property report and the building requirements that apply at the address. If you share services or common property with other lots, talk to the owners corporation about the proposed work before finalising your layout.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Take a closer look at a completed wet area",
        paras: [
          "In the Altona gallery, consider the relationship between the fittings and the wall and floor finishes. Bring an image if there’s a detail you’d like to discuss against the conditions in your own room.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we improve the bathroom without changing a shared stack?",
        a: "Often a layout that keeps major fixtures close to their existing positions is worth testing. Check the building requirements and site conditions first.",
      },
    ],
    cta: {
      title: "Discuss your North Melbourne bathroom renovation",
      text: "",
      label: "Discuss your North Melbourne bathroom renovation",
    },
  },
  "/bathroom-renovations/parkville/": {
    seoTitle: "Bathroom Renovations Parkville | Forefront",
    meta: "Update a bathroom around the parts worth retaining. Plan a bathroom renovation in Parkville with Forefront Trades Co.",
    h1: "Bathroom Renovations in Parkville",
    intro: [
      "An older Parkville home may have trims, windows or a door you want to keep even as the bathroom changes. Take a photo from the hallway and inside the room so the transition can be considered as part of the design.",
    ],
    sections: [
      {
        title: "Balance privacy, daylight and extraction",
        paras: [
          "Consider where you stand at the basin and what the window faces. A fitting layout can preserve useful natural light while giving the shower and fan a clearer purpose. Ask how any change to an external opening would be treated.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Parkville",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. City of Melbourne planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look at how the room fits together",
        paras: [
          "Use our Altona project gallery to see a completed bathroom context. Compare the wide view with the close-ups, then save the details that speak to the priorities in your brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should I check heritage before moving the window?",
        a: "Yes. Use the current address-level planning report and ask council how it would assess the proposed change.",
      },
    ],
    cta: {
      title: "Discuss your Parkville bathroom renovation",
      text: "",
      label: "Discuss your Parkville bathroom renovation",
    },
  },
  "/bathroom-renovations/pascoe-vale/": {
    seoTitle: "Bathroom Renovations Pascoe Vale | Forefront",
    meta: "Give the bathroom a clear place in the morning routine. Plan a bathroom renovation in Pascoe Vale with Forefront Trades Co.",
    h1: "Bathroom Renovations in Pascoe Vale",
    intro: [
      "In a Pascoe Vale home with separate toilet and bathroom, think about which facilities people need at the same time. Joining the rooms can give you more room for the shower, while separation can keep the toilet available during busy mornings.",
    ],
    sections: [
      {
        title: "Test the alternative before moving fixtures",
        paras: [
          "Sketch both layouts and compare the usable clearances and storage. Then ask whether the existing wastes, floor and ventilation suit the change. Factor in what may need to be assessed after strip-out.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Pascoe Vale",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Merri-bek planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look at how the room fits together",
        paras: [
          "Use our Altona project gallery to see a completed bathroom context. Compare the wide view with the close-ups, then save the details that speak to the priorities in your brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I remove the bath to make room for a larger shower?",
        a: "It’s an option if the bath gets little use. Discuss the drainage, floor build-up and shower screen before selecting the new fittings.",
      },
    ],
    cta: {
      title: "Discuss your Pascoe Vale bathroom renovation",
      text: "",
      label: "Discuss your Pascoe Vale bathroom renovation",
    },
  },
  "/bathroom-renovations/seddon/": {
    seoTitle: "Bathroom Renovations Seddon | Forefront",
    meta: "Make the most of a bathroom with a tight entry. Plan a bathroom renovation in Seddon with Forefront Trades Co.",
    h1: "Bathroom Renovations in Seddon",
    intro: [
      "A tight doorway off a Seddon hallway can shape the whole room. Start with what happens just inside the entrance. A better place to hang towels or open a vanity drawer can make a small bathroom easier to share.",
    ],
    sections: [
      {
        title: "Check which wall should carry storage",
        paras: [
          "An existing window or pipe may take up part of the best wall. Compare recessed storage and a shallower cabinet, then ask what the wall construction will allow. Keep the route from the entry to the shower easy to use.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Seddon",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Maribyrnong planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look at how the room fits together",
        paras: [
          "Use our Altona project gallery to see a completed bathroom context. Compare the wide view with the close-ups, then save the details that speak to the priorities in your brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can a different door give the room more space?",
        a: "It’s worth testing the door options. Check the adjacent wall, privacy and clearances with the proposed fixtures in place.",
      },
    ],
    cta: {
      title: "Discuss your Seddon bathroom renovation",
      text: "",
      label: "Discuss your Seddon bathroom renovation",
    },
  },
  "/bathroom-renovations/spotswood/": {
    seoTitle: "Bathroom Renovations Spotswood | Forefront",
    meta: "Fit a bathroom around wet gear and quick showers. Plan a bathroom renovation in Spotswood with Forefront Trades Co.",
    h1: "Bathroom Renovations in Spotswood",
    intro: [
      "If people come in from the yard and head straight to the bathroom at your Spotswood home, pay attention to the route and the wet things they carry. Give the room somewhere for towels and clothes that stays out of the way of the shower.",
    ],
    sections: [
      {
        title:
          "Separate the places that get wet from the places that need to stay dry",
        paras: [
          "Picture stepping out of the shower and reaching the towel and clothes. The screen position, fall of the floor and a little extra bench space can all change how comfortable that movement feels. Check floor structure and drainage before changing the wet area.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Spotswood",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Hobsons Bay planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look at how the room fits together",
        paras: [
          "Use our Altona project gallery to see a completed bathroom context. Compare the wide view with the close-ups, then save the details that speak to the priorities in your brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I make the shower easier to step into?",
        a: "Discuss the entry and the clear opening. What can be achieved depends on the existing floor, drainage and how the waterproofing can be detailed.",
      },
    ],
    cta: {
      title: "Discuss your Spotswood bathroom renovation",
      text: "",
      label: "Discuss your Spotswood bathroom renovation",
    },
  },
  "/bathroom-renovations/strathmore/": {
    seoTitle: "Bathroom Renovations Strathmore | Forefront",
    meta: "Plan a main bathroom people can share comfortably. Plan a bathroom renovation in Strathmore with Forefront Trades Co.",
    h1: "Bathroom Renovations in Strathmore",
    intro: [
      "If your Strathmore bathroom serves several bedrooms, make a note of who uses it and when. You may find that the biggest improvement comes from somewhere to get ready without blocking the way to the shower.",
    ],
    sections: [
      {
        title: "Give the room a way to dry out",
        paras: [
          "Think about ventilation, wet towels and how you clean the shower area. Give damp items somewhere to hang away from the vanity. Consider where the fan can discharge before changing the ceiling or room layout.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Strathmore",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the wet areas into the same discussion",
        paras: [
          "The Footscray project library includes bathroom and laundry footage. It can help you think about the work you’d like to consider together and what you need each room to do afterwards.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Do I need a double vanity?",
        a: "Check the morning routine first. Two basins can help some households, while extra bench and drawer space might be used more often by others.",
      },
    ],
    cta: {
      title: "Discuss your Strathmore bathroom renovation",
      text: "",
      label: "Discuss your Strathmore bathroom renovation",
    },
  },
  "/bathroom-renovations/sunshine/": {
    seoTitle: "Bathroom Renovations Sunshine | Forefront",
    meta: "Build a bathroom around a clear set of priorities. Plan a bathroom renovation in Sunshine with Forefront Trades Co.",
    h1: "Bathroom Renovations in Sunshine",
    intro: [
      "If you’re updating a Sunshine bathroom that’s been changed over time, identify which parts work well and which need attention. Decide whether the main aim is better access, more storage or an easier shower to use.",
    ],
    sections: [
      {
        title: "Resolve the floor before choosing the tile",
        paras: [
          "Where earlier work has changed the levels, look at how the new floor would meet the hallway. The substrate, drainage and wet-area design matter for both the layout and the finished entry.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Sunshine",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Brimbank planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Take a closer look at a completed wet area",
        paras: [
          "In the Altona gallery, consider the relationship between the fittings and the wall and floor finishes. Bring an image if there’s a detail you’d like to discuss against the conditions in your own room.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "What if water damage is found during removal?",
        a: "Ask how it will be assessed, documented and scoped. Existing conditions can affect the work needed before new finishes go in.",
      },
    ],
    cta: {
      title: "Discuss your Sunshine bathroom renovation",
      text: "",
      label: "Discuss your Sunshine bathroom renovation",
    },
  },
  "/bathroom-renovations/yarraville/": {
    seoTitle: "Bathroom Renovations Yarraville | Forefront",
    meta: "Fit a better bathroom into a narrow plan. Plan a bathroom renovation in Yarraville with Forefront Trades Co.",
    h1: "Bathroom Renovations in Yarraville",
    intro: [
      "If the bathroom in your Yarraville cottage sits off a side passage, look at what the doorway takes from the usable floor. Show us which fittings feel crowded and where a cleaner route from the hall would help.",
    ],
    sections: [
      {
        title: "Get the shower and door working together",
        paras: [
          "Draw both door swings before choosing a screen. Consider how the bathroom opens onto the hallway and whether a vanity can give you storage without cutting across that route. Check floor condition and waste positions before moving the shower.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Yarraville",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Maribyrnong planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Take a closer look at a completed wet area",
        paras: [
          "In the Altona gallery, consider the relationship between the fittings and the wall and floor finishes. Bring an image if there’s a detail you’d like to discuss against the conditions in your own room.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Is it worth moving a wall for more bathroom space?",
        a: "Compare what you gain with the effect on the next room. If the space can work with better clearances and storage, a change to the wall may be unnecessary.",
      },
    ],
    cta: {
      title: "Discuss your Yarraville bathroom renovation",
      text: "",
      label: "Discuss your Yarraville bathroom renovation",
    },
  },
  "/book-a-consultation/": {
    seoTitle: "Request a Renovation Consultation | Forefront Trades Co.",
    meta: "Tell Forefront Trades Co. what you want to renovate or extend, where you’re based and what stage your plans are at.",
    h1: "Let’s work through your renovation plans",
    intro: [
      "Tell us what you would like to change and what you already know about the project. It’s fine if you’re deciding between two ideas or haven’t drawn anything yet.",
    ],
    sections: [
      {
        title: "1. Choose what you’re planning",
        paras: [
          "Home extension · Full-home renovation · Bathroom · Kitchen · Laundry · I’m still deciding",
        ],
        items: [],
        steps: [],
      },
      {
        title: "2. Tell us where you’re up to",
        paras: [
          "Enter the project suburb, budget range and preferred timing. Under plans, choose No plans yet, Early sketches, Design in progress or Drawings ready. Choose Still deciding wherever you need more time to work through an answer.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "3. Leave your details",
        paras: [
          "Name · Email · Phone · Brief description",
          "Tell us what feels hardest to use now and what you want to change. If you have plans, tell us what stage they’ve reached so we can ask for the relevant drawings.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I enquire if I have no plans?",
        a: "Yes. Tell us which rooms or parts of the property you want to change and why. If you already have sketches, let us know what they cover.",
      },
    ],
    cta: {
      title: "Request my consultation",
      text: "",
      label: "Request my consultation",
    },
  },
  "/contact/": {
    seoTitle: "Contact Forefront Trades Co. | Melbourne Renovations",
    meta: "Tell Forefront Trades Co. about your Melbourne renovation or extension. Call 1300 909 808 or send a project enquiry to get the conversation started.",
    h1: "Let’s talk about your home project",
    intro: [
      "If your home is ready for a different layout, a room update or a bigger change, tell us what you’d like it to do. Forefront Trades Co. is based in Maribyrnong and works with homeowners across Melbourne’s west and inner north.",
    ],
    sections: [
      {
        title: "Talk to the team",
        paras: [
          "Call 1300 909 808 or email admin@forefronttrades.com.au. If you’re sharing plans or photos, tell us which rooms or parts of the property you want us to look at.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Tell us what you have in mind",
        paras: [
          "Start with your suburb, the type of work and the part of the house that’s causing the most frustration. If you have a budget range, a rough timeframe or drawings, add those too. A short description is enough to start the conversation.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Looking for a first project conversation?",
        paras: [
          "If you already know the type of work you’re considering, use the project consultation form to give us the details in one place. If you’re still deciding how much to change, browse completed projects for a starting point.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: { title: "Send my enquiry", text: "", label: "Send my enquiry" },
  },
  "/design-and-construct/": {
    seoTitle: "Design & Construct Melbourne | Forefront Trades Co.",
    meta: "Explore a coordinated design-and-construct approach to home renovations and extensions in Melbourne, from early ideas to building documentation and delivery.",
    h1: "One Connected Plan for Design and Construction",
    intro: [
      "Good renovation ideas need to work in a real house, on a real site and within a real budget. Design and construction should be part of the same conversation from the beginning.",
      "Forefront Trades Co. takes a coordinated approach to residential renovation and extension projects in Melbourne, bringing planning, design decisions and build considerations together as the project develops.",
    ],
    sections: [
      {
        title: "Why the early decisions matter",
        paras: [
          "Moving a wall might create the open-plan living area you want, but it can also affect structural support, plumbing, heating, flooring and the project sequence. A second-storey extension may create extra bedrooms, yet it depends on the condition of the existing structure, access, planning controls and engineering requirements.",
          "Decisions like these are easier to evaluate when the build implications are considered alongside the layout. A joined-up process helps reveal trade-offs before work begins rather than once the walls are open.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "What a coordinated project can involve",
        paras: [],
        items: [
          {
            title: "Understanding your brief",
            text: "We start with how the property works today, what you want to change and which outcomes are most important. This includes conversations about your timing, budget and how much disruption your household can accommodate.",
          },
          {
            title: "Investigating the property",
            text: "Measurements, existing services, structural conditions, site access and any planning overlays can shape the design. The level of investigation depends on the renovation or extension being considered.",
          },
          {
            title: "Developing a workable design",
            text: "Layouts, finishes, construction methods and room connections are considered together. Some choices can be made early; others need drawings, specialist reports or engineering input.",
          },
          {
            title: "Approvals and documentation",
            text: "Depending on the scope and property, the project may require planning approval, a building permit, engineering documents or other supporting information. Requirements must be checked for the specific site rather than assumed.",
          },
          {
            title: "Construction and handover",
            text: "Once the scope, documentation and applicable approvals are settled, work can progress through a planned sequence. Clear communication about decisions, site conditions and changes matters through to completion.",
          },
        ],
        steps: [],
      },
      {
        title: "Useful for more than extensions",
        paras: [
          "A design-and-construct mindset is valuable across full home renovations, kitchen reconfigurations, bathroom upgrades and laundry improvements. Coordinating the work helps consider the entire house, not just the room being changed.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "A clearer way to assess cost",
        paras: [
          "The total cost depends on the scope of building work, site conditions, structural changes, finishes, specialist requirements and approvals. That is why a meaningful estimate needs more context than a square-metre figure or a list of fixtures.",
          "When discussing your project, it helps to separate essential changes from optional upgrades so decisions can be made against an understandable scope.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Questions homeowners ask",
        paras: [],
        items: [
          {
            title: "Do I need drawings before I contact you?",
            text: "Not necessarily. An initial discussion can establish what you want to achieve and what plans or assessments may be needed to progress.",
          },
          {
            title: "Will a home extension need council approval?",
            text: "Some projects require planning permission, and many structural building works require a building permit. Requirements depend on the property's location, overlays and proposed work. They should be assessed for the specific site.",
          },
          {
            title: "Can we renovate and extend at the same time?",
            text: "Sometimes a combined project makes sense, particularly when new space needs to connect with existing rooms. The right sequencing depends on the scope and how the household will use the property during works.",
          },
        ],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Start with the right questions",
      text: "Bring your ideas, photos or existing plans. We can discuss what needs to change, what information is missing and the logical next step.",
      label: "Discuss Your Project",
    },
  },
  "/faqs/": {
    seoTitle: "Melbourne Renovation & Extension FAQs | Forefront",
    meta: "Answers to common renovation questions about getting started, plans, costs, permits, living at home during work and handover.",
    h1: "Questions to ask before you renovate",
    intro: [
      "There’s a lot to work out before a renovation. These answers can help you prepare for a first conversation and identify the decisions that need a closer look at your home.",
    ],
    sections: [
      {
        title: "Getting started",
        paras: [
          "Make a short list of what you want the house to do differently. Identify anything you need to keep, then consider timing and how much you want to invest. Drawings and photos are useful if you have them.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Understanding the scope",
        paras: [
          "Ask what an estimate is based on, when selections need to be made and what happens if the scope changes. If you’re talking to several builders, compare the inclusions and exclusions alongside the total.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Do I need drawings before getting in touch?",
        a: "You can start with photos, a brief or plans you already have. Tell us what stage your drawings are at so we can discuss the next step.",
      },
      {
        q: "Can you help with design and approvals?",
        a: "We can discuss the design-and-construct pathway and what consultant input or approvals your scope may need. Requirements depend on the property and the work.",
      },
      {
        q: "Can we live at home during the work?",
        a: "That depends on access, the construction stages and whether essential rooms remain usable. Bring up children, pets, work and access needs when we first discuss staging.",
      },
      {
        q: "How long will the work take?",
        a: "The time on site depends on the extent of the work, selections and the sequence of trades. Allow for design and any approvals before construction. Ask for a programme based on your scope.",
      },
      {
        q: "What happens if something unexpected is found?",
        a: "The team assesses the issue and explains the effect on the scope. Ask how a variation would be documented and how any change to cost or time would be agreed.",
      },
      {
        q: "What should I keep after handover?",
        a: "Keep relevant certificates, product and care information, records of agreed variations and the handover documentation together.",
      },
    ],
    cta: {
      title: "Ask us about your home",
      text: "",
      label: "Ask us about your home",
    },
  },
  "/guides/": {
    seoTitle: "Melbourne Renovation Planning Guides | Forefront Trades Co.",
    meta: "Start planning your Melbourne renovation with guidance on layout, costs, approvals and questions to ask a builder.",
    h1: "A practical starting point for your renovation",
    intro: [
      "A useful renovation brief starts with a few well-chosen decisions. Read about the questions that matter before you price the work, choose finishes or commit to a floor plan.",
    ],
    sections: [
      {
        title: "Start with scope and budget",
        paras: [
          "Decide which rooms you want to change, whether the layout can stay and what needs to happen at the same time. Compare a smaller scope and a larger scope against the same priorities. For each option, ask what the allowance covers.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Check planning and building requirements",
        paras: [
          "Bring your address and a description of the proposed work. Use the Victorian planning property report to find the applicable controls. If you are unsure about approvals, discuss the scope with council or the relevant building professional.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Think through the room you use most",
        paras: [
          "In a kitchen, trace the route from fridge to bench to table. In a bathroom, think about how many people need to use it and what needs to stay dry. In a laundry, trace the path from basket to washing line. Those small journeys make useful starting points for a design.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Choose the questions to take to a builder",
        paras: [
          "Ask who will prepare the scope, what happens when drawings change and how you’ll receive updates on site. Compare written inclusions and ask when you’ll need to make selections.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Talk through the decisions you’re making",
      text: "",
      label: "Talk through the decisions you’re making",
    },
  },
  "/heritage-renovations/": {
    seoTitle: "Heritage & Period Home Renovations Melbourne | Forefront",
    meta: "Plan a period home renovation in Melbourne. Think through heritage controls, original features and how new spaces can sit alongside old ones.",
    h1: "Renovate a period home without losing what drew you to it",
    intro: [
      "There may be parts of your house you’d never want to change. A front room with beautiful proportions, an original fireplace or a familiar roofline can give the renovation a place to begin.",
    ],
    sections: [
      {
        title: "Work out what deserves to stay",
        paras: [
          "Photograph the elements you value and record their condition. Some can be retained as they are, others may need attention, and some may shape where you put the new work. Make those decisions with the layout in view.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Check the address early",
        paras: [
          "Use a Victorian planning property report and ask the relevant council how controls apply to the work you’re considering. If your property has a heritage overlay, discuss the proposed scope before settling on demolition, a new opening or an addition.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Think about the transition from old to new",
        paras: [
          "A rear addition can change how you use the entire house. Look at the roof junction, the route through the original rooms and the places where old and new materials meet. Good drawings let you discuss those details before construction.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Allow for what you can only see on site",
        paras: [
          "The age and condition of floors, walls and concealed services can influence the work. Talk through what can be assessed up front and how a newly discovered issue would be recorded.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Does every period home have a heritage overlay?",
        a: "No. Check the property by address and ask council which controls apply. Age and appearance alone do not establish the planning requirements.",
      },
      {
        q: "Can I add a contemporary extension?",
        a: "A contemporary addition can be considered as part of the design. The site, the existing house and any planning controls will shape what can be proposed.",
      },
    ],
    cta: {
      title: "Discuss your period home",
      text: "",
      label: "Discuss your period home",
    },
  },
  "/home-extensions/": {
    seoTitle: "Home Extensions Melbourne | Forefront Trades Co.",
    meta: "Need more room without moving? Explore ground-floor and second-storey home extensions in Melbourne, with practical design and building guidance.",
    h1: "Home Extensions in Melbourne, Planned Around Your Existing Home",
    intro: [
      "Your home may be in the right neighbourhood but no longer have the space or layout your household needs. A thoughtfully planned extension can create room to grow while keeping the parts of the property you already love.",
      "Forefront Trades Co. helps Melbourne homeowners explore extension options with attention to existing structure, room connections, site constraints and the decisions that influence the build.",
    ],
    sections: [
      {
        title: "Make more room without starting again",
        paras: [
          "An extension can create space for a larger kitchen and family area, another bedroom, a home office or a more functional connection to the garden. But more floor area is only valuable if it improves how the home works.",
          "We look at circulation, daylight, privacy, practical access and the relationship between old and new spaces before treating extra square metres as the answer.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Which type of extension suits your home?",
        paras: [],
        items: [
          {
            title: "Ground-floor extensions",
            text: "A rear or side addition may help open up living areas, make better use of the garden outlook or create new ground-level rooms. The design needs to respond to available land, boundary setbacks, drainage and access.",
          },
          {
            title: "Second-storey extensions",
            text: "Building upwards can preserve outdoor space and create bedrooms or private areas above the existing footprint. Structural capacity, stairs, roof changes, privacy and planning controls need particular attention.",
          },
        ],
        steps: [],
      },
      {
        title: "Before you commit to a layout",
        paras: [],
        items: [
          {
            title: "Check the building you have",
            text: "The condition of foundations, walls, framing and existing services can affect what is possible and how much work is required. Engineering and site investigation may be needed to confirm the preferred approach.",
          },
          {
            title: "Understand approvals early",
            text: "Planning overlays, setbacks, building heights and neighbourhood character requirements can influence the design. A building permit is also commonly required for extension work. The actual pathway depends on the property and scope.",
          },
          {
            title: "Think beyond the new rooms",
            text: "An extension often changes the way adjoining rooms are used. A new family area may leave the original kitchen in the wrong place. Consider the entire floor plan, not just the proposed addition.",
          },
          {
            title: "Plan for living arrangements",
            text: "Some extension projects can be staged while occupants remain at home; others make temporary accommodation more practical. This depends on safety, access to essential facilities and the construction programme.",
          },
        ],
        steps: [],
      },
      {
        title: "What affects the cost of a Melbourne extension?",
        paras: [
          "Size matters, but it is not the only cost driver. The existing structure, foundation conditions, roof integration, bathroom or kitchen additions, access constraints, material selections, engineering and permit requirements can all change the scope.",
          "Early conversations should establish what is essential, where there is flexibility and what needs investigation before relying on a price expectation.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "How an extension project takes shape",
        paras: [],
        items: [],
        steps: [
          "Understand your brief and the space you need.",
          "Review the property and design constraints.",
          "Develop a practical scope and the required plans.",
          "Work through approvals, documentation and costing.",
          "Plan construction, site access and handover.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it better to extend up or out?",
        a: "That depends on the land available, the existing structure, the rooms you need and local planning requirements. A comparison of layout, cost and disruption is more useful than a blanket answer.",
      },
      {
        q: "Do I need a planning permit for a home extension?",
        a: "Not every project follows the same approval pathway. The zoning, overlays and proposed changes must be checked, and building permits are commonly required for structural extensions.",
      },
      {
        q: "How long does a home extension take?",
        a: "Timeframes depend on design complexity, approvals, site conditions, project size and material availability. A realistic programme should be developed for the specific job rather than promised before the scope is known.",
      },
    ],
    cta: {
      title: "Let's see what your home could accommodate",
      text: "Tell us your suburb, the space you want to add and whether you have plans. We can talk through the project and identify the next practical step.",
      label: "Discuss Your Extension",
    },
  },
  "/home-extensions/albion/": {
    seoTitle: "Home Extensions Albion | Forefront",
    meta: "Add space without losing the room or garden you value. Plan a home extension in Albion with Forefront Trades Co.",
    h1: "Home Extensions in Albion",
    intro: [
      "A rear addition can make an older Albion home easier to live in, especially when the rooms you want to keep sit towards the front. Start by looking at what happens between them and the garden.",
    ],
    sections: [
      {
        title: "Plan the opening and roof junction together",
        paras: [
          "A wider connection can change the floor, walls and light in the room you keep. Compare where the new roof and ceiling will meet the original home. Check what access you’ll need to build it, and whether the property is subject to a heritage control before settling on exterior changes.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Use a finished home as a visual reference",
        paras: [
          "The Footscray renovation shows how the main living spaces can relate to the garden. Consider where you want your own extension to meet the outdoors and what you want the rooms you keep to do.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "How can we tell if an existing rear addition can stay?",
        a: "Check its condition, levels and structure and whether it suits the proposed layout. A measured site assessment can help you compare adapting it with replacing it.",
      },
    ],
    cta: {
      title: "Discuss your Albion home extension",
      text: "",
      label: "Discuss your Albion home extension",
    },
  },
  "/home-extensions/ascot-vale/": {
    seoTitle: "Home Extensions Ascot Vale | Forefront",
    meta: "Decide where another level or a rear room would help most. Plan a home extension in Ascot Vale with Forefront Trades Co.",
    h1: "Home Extensions in Ascot Vale",
    intro: [
      "An Ascot Vale extension should start with what the extra space needs to do. A family room needs a good route to the garden and kitchen. A bedroom, study or retreat may suit a quieter part of the house.",
    ],
    sections: [
      {
        title: "Show where the new space meets the existing house",
        paras: [
          "For a rear room, check the opening, floor levels and side access. For a second storey, mark where the stairs would take space and how the existing roof and structure would be affected. Consider nearby windows and outdoor areas as you test daylight and privacy.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look at the connection to the outdoors",
        paras: [
          "In the Footscray project gallery, see how the outlook and glazing carry the living space towards the outdoor area. Bring photographs of the opening or view you want to create in your own home.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "What if the block changes level?",
        a: "Have the levels measured. The fall can affect the height of the extension, its foundations, the way you reach the garden and the route for drainage.",
      },
    ],
    cta: {
      title: "Discuss your Ascot Vale home extension",
      text: "",
      label: "Discuss your Ascot Vale home extension",
    },
  },
  "/home-extensions/brunswick/": {
    seoTitle: "Home Extensions Brunswick | Forefront",
    meta: "Make an extension earn its place on the plan. Plan a home extension in Brunswick with Forefront Trades Co.",
    h1: "Home Extensions in Brunswick",
    intro: [
      "On a narrow Brunswick property, an extension can use space that currently gives light and air to the existing house. Start by asking which rooms need more light and how much garden you want to keep for daily use.",
    ],
    sections: [
      {
        title: "Look at the middle room after the extension goes in",
        paras: [
          "A window that faces outside today could end up behind a new room. Compare a smaller addition, a light well or a different roof opening. If you’re considering a second storey, show where the stair could land and how the upper rooms would sit in relation to neighbours.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Use a finished home as a visual reference",
        paras: [
          "The Footscray renovation shows how the main living spaces can relate to the garden. Consider where you want your own extension to meet the outdoors and what you want the rooms you keep to do.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "What do I check before drawing up the rear extension?",
        a: "Use the address to check the planning controls. Bring the existing plan, access route and photos of the roof and neighbouring boundaries to the design discussion.",
      },
    ],
    cta: {
      title: "Discuss your Brunswick home extension",
      text: "",
      label: "Discuss your Brunswick home extension",
    },
  },
  "/home-extensions/ground-floor/": {
    seoTitle: "Ground-Floor Extensions Melbourne | Forefront Trades Co.",
    meta: "Plan a ground-floor extension in Melbourne around your kitchen, living areas and garden. Explore layout, site access and approvals before you build.",
    h1: "Make room where you already spend your day",
    intro: [
      "A ground-floor extension can give the kitchen, dining and living areas room to work together. The best starting point is often the doorway you use every day or the corner of the house where everyone ends up.",
    ],
    sections: [
      {
        title: "Start at the old back wall",
        paras: [
          "The point where old meets new shapes the whole design. Think about which rooms will lose an outside wall, where they’ll get light from afterwards and whether the existing floor level meets the garden the way you want. Those decisions matter as much as how far the extension reaches.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Give the garden a role",
        paras: [
          "Mark the part of the yard you want to keep. Think about winter sun, privacy and the path from the house to outdoor seating or a clothesline. If there’s a trade-off between a larger living room and more open space, test it on paper while there are options.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Work through access and structure",
        paras: [
          "An opening in the existing house may need structural design. Check where materials can come in and what existing drainage or services could affect the layout. Our design-and-construct approach brings those questions into the early conversation.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Discuss the scope before pricing",
        paras: [
          "The cost is shaped by the work to the existing house as well as the new floor area. Tell us whether you want to include a new kitchen, changes to the laundry or work to connect the new room to the garden.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I add space without moving the kitchen?",
        a: "Depending on how the rooms meet, you may be able to keep the kitchen or adapt part of it. We can compare both options against the way you use the house.",
      },
      {
        q: "Will a ground-floor extension need approvals?",
        a: "Requirements depend on the address and scope. Check the property’s controls and discuss the work with the relevant council or building surveyor.",
      },
    ],
    cta: {
      title: "Discuss a ground-floor extension",
      text: "",
      label: "Discuss a ground-floor extension",
    },
  },
  "/home-extensions/maribyrnong/": {
    seoTitle: "Home Extensions Maribyrnong | Forefront",
    meta: "Give extra space the right relationship to the site. Plan a home extension in Maribyrnong with Forefront Trades Co.",
    h1: "Home Extensions in Maribyrnong",
    intro: [
      "If you need another living room or bedroom in Maribyrnong, think about how it would connect to the existing house and outside areas. A ground-floor addition and an upper level change the property in different ways.",
    ],
    sections: [
      {
        title: "Bring the ground levels and services into the design",
        paras: [
          "If the site falls towards the yard, compare the floor height and the route down to the garden before choosing a footprint. Discuss the likely material route, drainage and any mapped overlays. If you want to build up, check how the structure and a stair could fit into the rooms below.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look at the connection to the outdoors",
        paras: [
          "In the Footscray project gallery, see how the outlook and glazing carry the living space towards the outdoor area. Bring photographs of the opening or view you want to create in your own home.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we begin before choosing ground floor or second storey?",
        a: "Yes. Tell us what the extra space has to do and which parts of the home and garden you use most. Those priorities give us a way to compare options.",
      },
    ],
    cta: {
      title: "Discuss your Maribyrnong home extension",
      text: "",
      label: "Discuss your Maribyrnong home extension",
    },
  },
  "/home-extensions/second-storey/": {
    seoTitle: "Second-Storey Extensions Melbourne | Forefront Trades Co.",
    meta: "Explore second-storey home extensions in Melbourne, including structural checks, stair placement, approvals, layouts and building considerations.",
    h1: "Second-Storey Extensions in Melbourne That Make Space Where You Need It",
    intro: [
      "When you love your street and want to keep the backyard, building up may be worth exploring. A second-storey extension can add bedrooms, a retreat or a quieter place to work while leaving more of the ground-level footprint intact.",
      "The best solution is not simply another level. It is a plan that connects naturally with the existing house and works structurally, practically and financially.",
    ],
    sections: [
      {
        title: "What could you do with another level?",
        paras: [
          "An upstairs addition may create a bedroom zone away from busy living areas, an extra bathroom, a study or a flexible room that changes as the family grows. The right mix depends on the home and the spaces that already work well downstairs.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "The questions to answer before designing upstairs",
        paras: [],
        items: [
          {
            title: "Can the existing structure carry the load?",
            text: "Second-storey work may require an assessment of foundations, load-bearing walls and framing. Some homes need reinforcement or a different structural arrangement before a new level is practical.",
          },
          {
            title: "Where will the staircase go?",
            text: "Stair positioning affects circulation, usable floor space and the rooms below. A poor stair location can compromise the very space the extension is meant to create.",
          },
          {
            title: "What happens to the roof?",
            text: "The existing roof must be carefully considered as part of the design and construction sequence. Weather protection, new framing and the junction between old and new work matter throughout the build.",
          },
          {
            title: "How will the new level affect neighbours?",
            text: "Height, overlooking, shading and neighbourhood character controls can influence the design. Planning requirements must be reviewed for the specific property.",
          },
        ],
        steps: [],
      },
      {
        title: "Design the two levels together",
        paras: [
          "An upstairs bedroom suite may allow the ground floor to become more open, while moving bedrooms can create opportunities for a larger family room or better kitchen layout. A second storey makes most sense when it improves the entire home.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Cost and disruption need an honest assessment",
        paras: [
          "Structural upgrades, stairs, roof alterations, new wet areas, access for materials and the complexity of the existing house can materially affect costs. So can the need to protect or temporarily vacate parts of the home during works.",
          "Rather than comparing broad online price estimates, define the scope, investigate the house and understand which changes are essential.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "A considered build sequence",
        paras: [
          "Project steps can include feasibility and measurements, concept design, engineering, planning checks, working drawings, permits, preparation of the existing house, structural work, weatherproofing, fit-out and inspections. The exact sequence varies by property.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Common questions",
        paras: [],
        items: [
          {
            title: "Can we stay in the house during a second-storey extension?",
            text: "Sometimes, but not always. Access, safety, noise, weather protection and availability of essential rooms all affect whether remaining at home is practical.",
          },
          {
            title: "Will every house support a second level?",
            text: "No. The existing structure, site constraints, planning requirements and project budget must be reviewed before feasibility can be confirmed.",
          },
          {
            title: "Do I need a building permit?",
            text: "A second-storey extension generally involves regulated structural building work. The required approvals and documentation must be confirmed for your project.",
          },
        ],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Explore the potential above your current floor plan",
      text: "Tell us what extra space you need and where the property is located. We can discuss the questions worth resolving before you commit to a design.",
      label: "Discuss Your Extension",
    },
  },
  "/home-extensions/yarraville/": {
    seoTitle: "Home Extensions Yarraville | Forefront",
    meta: "Add living space while keeping a useful yard. Plan a home extension in Yarraville with Forefront Trades Co.",
    h1: "Home Extensions in Yarraville",
    intro: [
      "For a Yarraville extension, start with the garden you want to use and the rooms that need more space. In a cottage with a long side hall, think about the light at the end of that route and how a rear addition would be seen from the street.",
    ],
    sections: [
      {
        title: "Compare a rear addition with a room upstairs",
        paras: [
          "A single-storey addition can make the kitchen, dining room and garden work together. Building up may keep more of the yard, although the stairs and new structure can affect rooms below. Draw both against the existing plan and check the planning controls at your address before settling on either.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Use a finished home as a visual reference",
        paras: [
          "The Footscray renovation shows how the main living spaces can relate to the garden. Consider where you want your own extension to meet the outdoors and what you want the rooms you keep to do.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I keep the roofline at the front?",
        a: "Make it a design priority and bring street photos. A designer and council can help you understand how the new roof would sit behind the part you want to retain.",
      },
    ],
    cta: {
      title: "Discuss your Yarraville home extension",
      text: "",
      label: "Discuss your Yarraville home extension",
    },
  },
  "/home-renovations/": {
    seoTitle: "Home Renovations Melbourne | Forefront Trades Co.",
    meta: "Rethink the layout, finishes and flow of your Melbourne home with Forefront Trades Co. Discuss a full-home renovation or staged project.",
    h1: "Renovate the home you already want to stay in",
    intro: [
      "When several rooms fall short at once, it can be worth taking a fresh look at the whole floor plan. Forefront Trades Co. helps Melbourne homeowners explore how to make the most of the home they already have.",
    ],
    sections: [
      {
        title: "Find the changes that make the biggest difference",
        paras: [
          "Follow the busiest route through the house. You might find that the kitchen has enough space but opens into the wrong room, or that a laundry and bathroom compete for the same stretch of hallway. Put those observations into the brief before choosing finishes.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Decide what to keep",
        paras: [
          "An original floor, a useful separate room or a favourite view can anchor the new design. Make an inventory of the features that deserve to stay and compare what can be achieved by moving walls, reworking services or adding space.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Consider doing related work together",
        paras: [
          "If plumbing, electrical work or floors run through multiple rooms, it may be worth working through them in a single plan. Ask which parts of the house can stay usable and which stages would affect daily routines.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring design, scope and cost into the same discussion",
        paras: [
          "The design-and-construct pathway gives the layout, buildability and budget a chance to inform each other. We can discuss the scope and what needs to be established before a detailed proposal makes sense.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we plan a full renovation in stages?",
        a: "Staging can make sense when each phase has a clear stopping point. Discuss shared services and finishes up front so early work supports the later stages.",
      },
      {
        q: "How do I know whether to extend?",
        a: "First test whether the existing rooms can give you the space and connections you need. If the floor plan still falls short, compare an addition with the changes you would make inside.",
      },
    ],
    cta: {
      title: "Discuss your home renovation",
      text: "",
      label: "Discuss your home renovation",
    },
  },
  "/home-renovations/aberfeldie/": {
    seoTitle: "Home Renovations & Extensions Aberfeldie | Forefront",
    meta: "Create a connection without crowding the existing home. Explore renovations and extensions for your Aberfeldie home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Aberfeldie",
    intro: [
      "If the rooms in your Aberfeldie home have good proportions, consider how a new living area would connect to them without taking over their role. A separate place to work or read may still be useful once the main rooms are open.",
    ],
    sections: [
      {
        title: "Walk the route you’d take to the garden",
        paras: [
          "Decide what you want to see as you move from the front of the house into a new rear space. Compare a framed view with a wider opening. If the ground falls away, bring the garden levels and steps into the discussion early.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Aberfeldie property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can the existing dining room stay separate?",
        a: "Yes, if it suits your household. Give it a clear role in the plan and compare the way people move through the house with and without a direct opening.",
      },
    ],
    cta: {
      title: "Discuss your Aberfeldie renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Aberfeldie renovation or extension",
    },
  },
  "/home-renovations/airport-west/": {
    seoTitle: "Home Renovations & Extensions Airport West | Forefront",
    meta: "Make the everyday entrances part of the renovation. Explore renovations and extensions for your Airport West home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Airport West",
    intro: [
      "In an Airport West renovation, the door you actually use is a useful starting point. If you come in with groceries, sports gear or a wet dog, check whether there is somewhere to put everything before you reach the kitchen.",
    ],
    sections: [
      {
        title: "Keep work and living routes clear",
        paras: [
          "If you want to use a garage or utility space differently, discuss what happens to storage and access first. Consider natural light, existing services and how the room would connect to the main house. Get the proposed use checked before setting the scope.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Airport West property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can the laundry double as a place to come in from outside?",
        a: "It can be worth testing. Put both uses on the drawing and allow for baskets, wet gear and a clear passage when an appliance door is open.",
      },
    ],
    cta: {
      title: "Discuss your Airport West renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Airport West renovation or extension",
    },
  },
  "/home-renovations/albion/": {
    seoTitle: "Home Renovations & Extensions Albion | Forefront",
    meta: "Keep the useful rooms and give the back of the house a purpose. Explore renovations and extensions for your Albion home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Albion",
    intro: [
      "If you’re renovating an older Albion home, make a note of the rooms with the best light and the original features you value. Then look at where an enclosed rear porch or a separate service room might affect the route to the garden.",
    ],
    sections: [
      {
        title: "Consider what an addition would change",
        paras: [
          "Draw the part of the yard you want to use and check where you’d get morning and afternoon light. If you want a larger kitchen and dining area, see whether it can sit close to the current services or whether the whole rear layout needs to move.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Albion property",
        paras: [
          "Brimbank City Council provides guidance on heritage places and proposed work. Check the specific address before assuming what may be retained, removed or extended.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Hear from a West Footscray homeowner",
        paras: [
          "The West Footscray project testimonial gives you a homeowner’s perspective. As you listen, note what you’d like to ask about site access, communication and the way changes are documented.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "How can I check an older property in Albion?",
        a: "Look up the address in the Victorian planning property report. Brimbank’s heritage information can help you identify the places and precincts it has studied. Ask council which controls affect your scope.",
      },
    ],
    cta: {
      title: "Discuss your Albion renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Albion renovation or extension",
    },
  },
  "/home-renovations/altona-north/": {
    seoTitle: "Home Renovations & Extensions Altona North | Forefront",
    meta: "Make space for a different way to use the house. Explore renovations and extensions for your Altona North home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Altona North",
    intro: [
      "If you’re renovating an Altona North home with room for an addition, compare that possibility with changes inside first. A new doorway, better storage or a different position for the kitchen can change how the main rooms work together.",
    ],
    sections: [
      {
        title: "Decide which outdoor uses need to stay",
        paras: [
          "Lay out the car access, garden, drying area and main entry before choosing the new footprint. If the laundry is being moved, check how the basket gets from the bedrooms to outside and where you can keep the floor clear.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Altona North property",
        paras: [
          "Hobsons Bay’s housing and neighbourhood character guidance can help you frame questions about an addition. Check the property report for the relevant council, zones and overlays.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Visit the Altona project gallery",
        paras: [
          "For a close look at the details of a renovation, start with the Altona gallery. If you’re planning changes to several rooms, note any materials or fittings you would want to use in more than one space.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Does the Altona project show what can be done at my address?",
        a: "It gives you a visual reference for discussing finishes and layout. Your own scope depends on the house, condition, services and site requirements.",
      },
    ],
    cta: {
      title: "Discuss your Altona North renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Altona North renovation or extension",
    },
  },
  "/home-renovations/ascot-vale/": {
    seoTitle: "Home Renovations & Extensions Ascot Vale | Forefront",
    meta: "An extension that fits the way you move through home. Explore renovations and extensions for your Ascot Vale home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Ascot Vale",
    intro: [
      "If the kitchen is where everyone meets in your Ascot Vale home, consider what will happen when that room has more space. The route from the front door, the view outside and the position of the stairs can matter just as much as the new floor area.",
    ],
    sections: [
      {
        title: "Leave room for both daylight and privacy",
        paras: [
          "Try different places for the dining table and living area before choosing the size of the addition. An opening towards the garden can change how a room feels. Side windows, raised floors and neighbouring outlooks should be considered together.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Ascot Vale property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Is it worth looking at a second storey on a tight block?",
        a: "It may be. Compare where the stairs would land with the area you’d lose to a ground-floor addition. Check the site, existing structure and relevant planning controls with the project team.",
      },
    ],
    cta: {
      title: "Discuss your Ascot Vale renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Ascot Vale renovation or extension",
    },
  },
  "/home-renovations/avondale-heights/": {
    seoTitle: "Home Renovations & Extensions Avondale Heights | Forefront",
    meta: "Work with the levels and views you already have. Explore renovations and extensions for your Avondale Heights home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Avondale Heights",
    intro: [
      "If your Avondale Heights property has a fall across the site, stand in the main rooms and note which outlooks you want to keep. Put those sightlines and existing levels into the brief before deciding where new space should sit.",
    ],
    sections: [
      {
        title: "Bring the outside steps into the design",
        paras: [
          "A rear room can feel disconnected when the way down to the garden is awkward. Compare a landing, a series of steps or another route while the floor levels are still being discussed. Ask how any change would affect drainage and site access.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Avondale Heights property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Hear from a West Footscray homeowner",
        paras: [
          "The West Footscray project testimonial gives you a homeowner’s perspective. As you listen, note what you’d like to ask about site access, communication and the way changes are documented.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Will a slope make an extension more involved?",
        a: "It can affect foundations, access and drainage. A measure of the site and discussion with the design and building team can help establish which options are realistic.",
      },
    ],
    cta: {
      title: "Discuss your Avondale Heights renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Avondale Heights renovation or extension",
    },
  },
  "/home-renovations/braybrook/": {
    seoTitle: "Home Renovations & Extensions Braybrook | Forefront",
    meta: "Plan the renovation around the household you have now. Explore renovations and extensions for your Braybrook home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Braybrook",
    intro: [
      "If bedrooms, work areas and living space are competing for the same rooms in your Braybrook home, make a plan for a normal weekday. Look at what needs privacy and which activities can share a space.",
    ],
    sections: [
      {
        title: "Check whether the existing footprint can do more",
        paras: [
          "Try reshaping storage and doorways before adding another room. If an extension is still useful, compare what it would mean for yard access, light to the existing house and the position of the laundry.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Braybrook property",
        paras: [
          "Check the property in the City of Maribyrnong’s planning scheme. The council’s precinct statements explain the features valued in designated areas. The address-level report shows whether any overlay applies to your site.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Hear from a West Footscray homeowner",
        paras: [
          "The West Footscray project testimonial gives you a homeowner’s perspective. As you listen, note what you’d like to ask about site access, communication and the way changes are documented.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can the renovation support family members with different needs?",
        a: "Build those needs into the brief. Tell us about preferred door widths, routes and levels, and which facilities you need on the ground floor. The design can then be assessed against those priorities.",
      },
    ],
    cta: {
      title: "Discuss your Braybrook renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Braybrook renovation or extension",
    },
  },
  "/home-renovations/brooklyn/": {
    seoTitle: "Home Renovations & Extensions Brooklyn | Forefront",
    meta: "Check the home and the site before committing to a layout. Explore renovations and extensions for your Brooklyn home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Brooklyn",
    intro: [
      "For a Brooklyn renovation, get a clear picture of the parts of the house you’ll keep and the space available to work around them. If you’re changing more than one room, map the existing wet areas and how people move between them.",
    ],
    sections: [
      {
        title: "Make access visible on the plan",
        paras: [
          "Mark the driveway, gates, side passage and the route from the street to the work. If you need the yard to stay accessible or want to keep a car space, include that before deciding how far to extend.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Brooklyn property",
        paras: [
          "Brooklyn spans council areas. Use the Victorian property report to identify the correct municipality and controls for your address, then ask the relevant council about the scope you are considering.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Visit the Altona project gallery",
        paras: [
          "For a close look at the details of a renovation, start with the Altona gallery. If you’re planning changes to several rooms, note any materials or fittings you would want to use in more than one space.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Where do we check which council applies?",
        a: "Start with the Victorian planning property report using your exact address. It identifies the relevant municipality and the controls mapped to the property.",
      },
    ],
    cta: {
      title: "Discuss your Brooklyn renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Brooklyn renovation or extension",
    },
  },
  "/home-renovations/brunswick-west/": {
    seoTitle: "Home Renovations & Extensions Brunswick West | Forefront",
    meta: "Make the narrow parts of the plan easier to use. Explore renovations and extensions for your Brunswick West home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Brunswick West",
    intro: [
      "If circulation takes up too much of a Brunswick West home, mark the places where people need to pass, pause or carry things. Think about the doors and storage before choosing to remove a wall or extend.",
    ],
    sections: [
      {
        title: "Use the roof to bring light in",
        paras: [
          "For a room with little outlook, look at where daylight could reach the middle of the plan. A roof opening, internal glazing or a clearer route to a brighter room may be worth testing. Ask how each change fits the existing roof and site controls.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Brunswick West property",
        paras: [
          "Merri-bek’s heritage guidance explains how overlays can affect work to a property. Check the address first and get advice on the scope you’re considering, especially where it changes the exterior.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "How do I approach a party wall or close boundary?",
        a: "Identify the actual boundary and wall conditions early. Discuss any proposed structural change, access or approvals with the relevant professionals before settling on a layout.",
      },
    ],
    cta: {
      title: "Discuss your Brunswick West renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Brunswick West renovation or extension",
    },
  },
  "/home-renovations/brunswick/": {
    seoTitle: "Home Renovations & Extensions Brunswick | Forefront",
    meta: "Keep the character, make the middle of the house work. Explore renovations and extensions for your Brunswick home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Brunswick",
    intro: [
      "If the rooms at the front of your Brunswick home already feel right, start with what happens behind them. An older terrace or cottage may have a dark middle room or a narrow route to the back door. Show us where you lose light or space as you move through the house.",
    ],
    sections: [
      {
        title: "Give the centre of the house a job",
        paras: [
          "Test whether the middle room should stay separate, become a study or open to a new living area. Consider how daylight will reach it once a rear addition covers the wall that currently faces the yard. Keep an eye on storage along the route from the front door.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Brunswick property",
        paras: [
          "Merri-bek’s heritage guidance explains how overlays can affect work to a property. Check the address first and get advice on the scope you’re considering, especially where it changes the exterior.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "What if we want to keep the front rooms intact?",
        a: "Put them on the measured plan as rooms to retain. Check the address for a heritage overlay and use the rear layout and roof junction to test where change could happen.",
      },
    ],
    cta: {
      title: "Discuss your Brunswick renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Brunswick renovation or extension",
    },
  },
  "/home-renovations/docklands/": {
    seoTitle: "Home Renovations & Extensions Docklands | Forefront",
    meta: "Start an apartment renovation with the building rules. Explore renovations and extensions for your Docklands home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Docklands",
    intro: [
      "In a Docklands apartment, renovations need to fit the way the building operates. Think about the route from loading bay to lift, who manages access and where the existing plumbing and ventilation run.",
    ],
    sections: [
      {
        title: "Plan the rooms around shared services",
        paras: [
          "A new kitchen or bathroom layout may rely on service positions that cannot easily move. Gather any apartment plans you have and ask about approvals, notice and protection of common areas before fixing dates or ordering large items.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Docklands property",
        paras: [
          "For work in Docklands, check the property report and the building’s own renovation requirements. The planning controls and permissions relating to individual lots or common property address different aspects of the proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the building requirements with your plan",
        paras: [
          "Consumer Affairs Victoria explains what to consider before renovating an individual lot. Bring the applicable building rules and information about shared services when we discuss your plans.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can a renovation change the look without moving service points?",
        a: "Often there are useful options to explore through joinery, lighting and finishes. An assessment of the apartment and building requirements can help define what can be changed.",
      },
    ],
    cta: {
      title: "Discuss your Docklands renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Docklands renovation or extension",
    },
  },
  "/home-renovations/essendon-north/": {
    seoTitle: "Home Renovations & Extensions Essendon North | Forefront",
    meta: "Decide what a different layout could do first. Explore renovations and extensions for your Essendon North home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Essendon North",
    intro: [
      "If your Essendon North home feels short on storage or quiet work areas, note where people cross paths throughout the day. A smaller reconfiguration can show you what’s possible before you design a larger addition.",
    ],
    sections: [
      {
        title: "Choose which rooms should borrow space",
        paras: [
          "A spare room can absorb coats and shoes, become a study or give a bathroom more room. Draw each use on the plan and consider the windows and services before committing. A useful plan makes the change easy to reverse on paper while options are open.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Essendon North property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "What if we need another bedroom as well as a bigger living space?",
        a: "List the areas that could move, then consider whether to add on the ground floor or build up. A stair and a new room both change the layout you already have.",
      },
    ],
    cta: {
      title: "Discuss your Essendon North renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Essendon North renovation or extension",
    },
  },
  "/home-renovations/essendon-west/": {
    seoTitle: "Home Renovations & Extensions Essendon West | Forefront",
    meta: "Give the living area a place to look out. Explore renovations and extensions for your Essendon West home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Essendon West",
    intro: [
      "If you’d like more room in Essendon West, start by finding the best outlook you already have. The way an addition frames a garden or gives access to it may influence where you put the main living space.",
    ],
    sections: [
      {
        title: "Check changes in height from the inside out",
        paras: [
          "A new room needs to meet the original floor, garden and side boundary. Have a look at those levels together before deciding whether to step down, stay level or build up. Think about where you could retain an outdoor place to sit.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Essendon West property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should we choose the size of the extension first?",
        a: "Choose what you need the extension to do. A design can then compare how different sizes affect existing rooms, outdoor space and the work needed to build it.",
      },
    ],
    cta: {
      title: "Discuss your Essendon West renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Essendon West renovation or extension",
    },
  },
  "/home-renovations/essendon/": {
    seoTitle: "Home Renovations & Extensions Essendon | Forefront",
    meta: "Room for a household that’s grown. Explore renovations and extensions for your Essendon home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Essendon",
    intro: [
      "If you’re running out of quiet rooms in your Essendon home, consider how the house is used at different times of day. A room at the front may suit work, while a bigger change at the rear could give the family more space to be together.",
    ],
    sections: [
      {
        title: "Keep the rooms with the best proportions",
        paras: [
          "In a period home, generous front rooms can carry a lot of the character. Draw furniture to scale before deciding whether a bedroom needs to move or a new living area is the better place to spend floor area. Check what a change would mean for the bathroom and laundry.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Essendon property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should we renovate inside before considering an extension?",
        a: "Test the existing floor plan first. If you still can’t fit the rooms, storage and circulation you need, compare a ground-floor addition and building up against the same brief.",
      },
    ],
    cta: {
      title: "Discuss your Essendon renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Essendon renovation or extension",
    },
  },
  "/home-renovations/flemington/": {
    seoTitle: "Home Renovations & Extensions Flemington | Forefront",
    meta: "Keep the street-facing character in view. Explore renovations and extensions for your Flemington home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Flemington",
    intro: [
      "If your Flemington renovation starts with an older house, note which elements make it recognisable from the street. Inside, mark the spaces that need more light or a different layout. These two views help you explain where you want to preserve character and where change would help.",
    ],
    sections: [
      {
        title: "Give the back of the home a clear purpose",
        paras: [
          "For a tight floor plan, decide what the rear rooms need to do through the week. A larger opening can make the garden more accessible. A smaller, well-positioned one may leave room for storage and keep a sheltered spot outside.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Flemington property",
        paras: [
          "Flemington spans council areas. Use the Victorian property report to identify the correct municipality and controls for your address, then ask the relevant council about the scope you are considering.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Which council should I check in Flemington?",
        a: "Flemington crosses municipal boundaries. Use the property address to identify the relevant council and the planning controls for the site before deciding on work to the exterior.",
      },
    ],
    cta: {
      title: "Discuss your Flemington renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Flemington renovation or extension",
    },
  },
  "/home-renovations/footscray/": {
    seoTitle: "Home Renovations & Extensions Footscray | Forefront",
    meta: "Rethink the rooms behind the front door. Explore renovations and extensions for your Footscray home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Footscray",
    intro: [
      "An older Footscray home can have front rooms you want to keep and a rear layout you’d like to change. Identify what is working, then trace where you lose daylight, storage or a clear route to the outside.",
    ],
    sections: [
      {
        title: "Look at the transition to the garden",
        paras: [
          "In our Footscray project, the flooring and generous glazing carry a quiet palette through the open living area and draw the outside into view. The project gallery is a useful reference if you’re planning where to open up the back of your own home.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Footscray property",
        paras: [
          "Check the property in the City of Maribyrnong’s planning scheme. The council’s precinct statements explain the features valued in designated areas. The address-level report shows whether any overlay applies to your site.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I renovate while retaining period details?",
        a: "Make a list of what you’d keep, with photographs and notes on condition. Use the address to check heritage controls and discuss how those elements can shape the design.",
      },
    ],
    cta: {
      title: "Discuss your Footscray renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Footscray renovation or extension",
    },
  },
  "/home-renovations/keilor-east/": {
    seoTitle: "Home Renovations & Extensions Keilor East | Forefront",
    meta: "Plan for changing routines over the life of the house. Explore renovations and extensions for your Keilor East home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Keilor East",
    intro: [
      "When you expect to stay in your Keilor East home, think about where you’ll want a bedroom, a bathroom or a quiet room in a few years. Give the renovation a brief that covers those needs as well as today’s layout.",
    ],
    sections: [
      {
        title: "Work out what belongs on one level",
        paras: [
          "If a change to the ground floor could make daily routines easier, map the route between the entry, main rooms and bathroom. If an extension is needed, test the room positions against the outside levels and the connection back into the house.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Keilor East property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Hear from a West Footscray homeowner",
        paras: [
          "The West Footscray project testimonial gives you a homeowner’s perspective. As you listen, note what you’d like to ask about site access, communication and the way changes are documented.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we plan for easier access without deciding all the fittings now?",
        a: "Yes. Record the routes and clearances you want to improve first. Fittings and finishes can then be selected to suit the agreed layout.",
      },
    ],
    cta: {
      title: "Discuss your Keilor East renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Keilor East renovation or extension",
    },
  },
  "/home-renovations/kensington/": {
    seoTitle: "Home Renovations & Extensions Kensington | Forefront",
    meta: "Find light and space within the existing plan. Explore renovations and extensions for your Kensington home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Kensington",
    intro: [
      "If a Kensington terrace or cottage feels narrow, start with what divides the rooms and where the light comes from. The position of a doorway can make an existing room easier to use before you consider adding floor area.",
    ],
    sections: [
      {
        title: "Put the join between rooms on paper",
        paras: [
          "Draw the route from the front door to the place you eat. Try moving one opening or relocating storage to see whether the centre of the house can work better. If you’re looking at an addition, check how the change would affect light to retained rooms.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Kensington property",
        paras: [
          "Check your Kensington address in the Victorian property report. Use the mapped zones and overlays to identify which parts of your proposal to discuss with City of Melbourne or the relevant authority.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should I check flood and heritage controls together?",
        a: "Use the property report to see the overlays at your address, then ask the responsible authority about the work you’re considering. Different controls may apply to different aspects of the same proposal.",
      },
    ],
    cta: {
      title: "Discuss your Kensington renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Kensington renovation or extension",
    },
  },
  "/home-renovations/kingsville/": {
    seoTitle: "Home Renovations & Extensions Kingsville | Forefront",
    meta: "Give a compact home a clearer plan. Explore renovations and extensions for your Kingsville home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Kingsville",
    intro: [
      "When the front rooms of a Kingsville home have the character you want, consider how the back can do more of the day-to-day work. A route to the garden that doesn’t pass the cooktop can make as much difference as a bigger bench.",
    ],
    sections: [
      {
        title: "Use the edges of the house carefully",
        paras: [
          "On a compact block, keep a clear note of the side access you use for bins, bikes or building access. Compare where an addition could meet the house with the space needed to maintain it after the work.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Kingsville property",
        paras: [
          "Check the property in the City of Maribyrnong’s planning scheme. The council’s precinct statements explain the features valued in designated areas. The address-level report shows whether any overlay applies to your site.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Hear from a West Footscray homeowner",
        paras: [
          "The West Footscray project testimonial gives you a homeowner’s perspective. As you listen, note what you’d like to ask about site access, communication and the way changes are documented.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I keep the floorboards through a new opening?",
        a: "That depends on condition, levels and the work to the wall. Bring a photograph of both sides and say whether a visible transition between old and new flooring would suit you.",
      },
    ],
    cta: {
      title: "Discuss your Kingsville renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Kingsville renovation or extension",
    },
  },
  "/home-renovations/maidstone/": {
    seoTitle: "Home Renovations & Extensions Maidstone | Forefront",
    meta: "Use a whole-home plan to get more from the back rooms. Explore renovations and extensions for your Maidstone home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Maidstone",
    intro: [
      "If you’ve inherited a series of changes at the rear of your Maidstone home, find out which walls, levels and services belong to each stage. It’s easier to decide what to keep when you understand how the rooms fit together.",
    ],
    sections: [
      {
        title: "Find one clear way through the house",
        paras: [
          "Mark where you bring in shopping, take out washing and get to the garden. If all three routes pass through the same tight room, see whether the existing door positions can improve before increasing the footprint.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Maidstone property",
        paras: [
          "Check the property in the City of Maribyrnong’s planning scheme. The council’s precinct statements explain the features valued in designated areas. The address-level report shows whether any overlay applies to your site.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Hear from a West Footscray homeowner",
        paras: [
          "The West Footscray project testimonial gives you a homeowner’s perspective. As you listen, note what you’d like to ask about site access, communication and the way changes are documented.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "How do we plan around an older addition?",
        a: "Include it in the site assessment. Ask about the structure, drainage and floor levels and how any retained parts will connect to the renovation.",
      },
    ],
    cta: {
      title: "Discuss your Maidstone renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Maidstone renovation or extension",
    },
  },
  "/home-renovations/maribyrnong/": {
    seoTitle: "Home Renovations & Extensions Maribyrnong | Forefront",
    meta: "More space without giving up the parts of home you use most. Explore renovations and extensions for your Maribyrnong home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Maribyrnong",
    intro: [
      "If you’re weighing up a larger living area against the garden or outlook you already enjoy in Maribyrnong, put both on the plan. It helps to see what each addition takes as well as what it gives you.",
    ],
    sections: [
      {
        title: "Make the levels work together",
        paras: [
          "On a site with a change in level, think through the route from the existing floor to the new rooms and outdoor area. Check where drainage can go and how materials would get to the work. Ask early whether the property has overlays that affect the design.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Maribyrnong property",
        paras: [
          "Check the property in the City of Maribyrnong’s planning scheme. The council’s precinct statements explain the features valued in designated areas. The address-level report shows whether any overlay applies to your site.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I talk to a builder before deciding how much to change?",
        a: "Yes. Bring your address and your list of priorities. Forefront is based in Maribyrnong and can discuss which options are worth taking further.",
      },
    ],
    cta: {
      title: "Discuss your Maribyrnong renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Maribyrnong renovation or extension",
    },
  },
  "/home-renovations/melbourne-cbd/": {
    seoTitle: "Home Renovations & Extensions Melbourne CBD | Forefront",
    meta: "Renovate around the building as well as the floor plan. Explore renovations and extensions for your Melbourne CBD home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Melbourne CBD",
    intro: [
      "For a Melbourne CBD apartment, the building’s access and service layout can affect the work from the outset. Gather the owners corporation information and check the route from the loading area to your front door before making decisions about demolition or delivery.",
    ],
    sections: [
      {
        title: "Decide which changes need building input",
        paras: [
          "A kitchen or bathroom change can touch shared services or common property. Find out what needs notice, permission or review before you agree to a scope. Work through lift bookings, protection and allowed hours as part of the programme.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Melbourne CBD property",
        paras: [
          "For work in Melbourne CBD, check the property report and the building’s own renovation requirements. The planning controls and permissions relating to individual lots or common property address different aspects of the proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the building requirements with your plan",
        paras: [
          "Consumer Affairs Victoria explains what to consider before renovating an individual lot. Bring the applicable building rules and information about shared services when we discuss your plans.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we start with finishes while approvals are being checked?",
        a: "You can collect references. Leave final dimensions, quantities and installation dates open until the layout, building requirements and services have been assessed.",
      },
    ],
    cta: {
      title: "Discuss your Melbourne CBD renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Melbourne CBD renovation or extension",
    },
  },
  "/home-renovations/moonee-ponds/": {
    seoTitle: "Home Renovations & Extensions Moonee Ponds | Forefront",
    meta: "Make space for separate routines. Explore renovations and extensions for your Moonee Ponds home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Moonee Ponds",
    intro: [
      "A home can have enough rooms and still feel crowded if everyone uses them at once. For a Moonee Ponds renovation, start by marking where you work, cook and unwind. Give quiet activities some distance from the rooms that need to stay busy.",
    ],
    sections: [
      {
        title: "Decide where to keep the separation",
        paras: [
          "Opening up a rear kitchen may improve the way the house gathers. Keeping a door to a study or front sitting room can give you another place to go when the living area is busy. Test both choices on the plan before moving walls.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Moonee Ponds property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "How should I check a property near an activity centre?",
        a: "Use the actual address and the proposed work to check which planning controls apply. Council’s activity-centre and heritage information provides context, and the property report identifies controls mapped to the site.",
      },
    ],
    cta: {
      title: "Discuss your Moonee Ponds renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Moonee Ponds renovation or extension",
    },
  },
  "/home-renovations/newport/": {
    seoTitle: "Home Renovations & Extensions Newport | Forefront",
    meta: "A house that opens up where you need it. Explore renovations and extensions for your Newport home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Newport",
    intro: [
      "If the main rooms of your Newport home turn away from the garden, work out where you’d like to sit, cook and go outside. An extension may help, but the shape and position of the openings often decide how much you’ll use the space.",
    ],
    sections: [
      {
        title: "Keep a dry route through the busy part of the house",
        paras: [
          "Consider the path from the back door to the laundry, kitchen and bathroom. If the entry does several jobs, give wet shoes and shopping separate landing places. Then compare where a new dining room or larger opening might fit.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Newport property",
        paras: [
          "Hobsons Bay’s housing and neighbourhood character guidance can help you frame questions about an addition. Check the property report for the relevant council, zones and overlays.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Visit the Altona project gallery",
        paras: [
          "For a close look at the details of a renovation, start with the Altona gallery. If you’re planning changes to several rooms, note any materials or fittings you would want to use in more than one space.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Where do I check heritage constraints?",
        a: "Use the planning property report for your Newport address. Hobsons Bay’s heritage studies are useful context, and council can advise how the controls apply to your proposed work.",
      },
    ],
    cta: {
      title: "Discuss your Newport renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Newport renovation or extension",
    },
  },
  "/home-renovations/niddrie/": {
    seoTitle: "Home Renovations & Extensions Niddrie | Forefront",
    meta: "Give a busy family a more useful centre to the home. Explore renovations and extensions for your Niddrie home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Niddrie",
    intro: [
      "If the kitchen sits apart from the rooms you use most in your Niddrie home, check where a clear connection would help. A bigger opening might be enough, or you may want a wider change to the kitchen, dining and laundry layout.",
    ],
    sections: [
      {
        title: "Draw in the furniture and the doors",
        paras: [
          "Put the dining table, fridge and seating on the plan at their real size. Check whether the doors to the garden can be used while someone is at the bench. If a wall moves, ask what else that changes for the floor and ceiling.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Niddrie property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "What should we have ready for a first conversation?",
        a: "A basic plan, a few photos and a list of the parts of the house you want to keep. Include the areas where you don’t yet know whether you need more space.",
      },
    ],
    cta: {
      title: "Discuss your Niddrie renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Niddrie renovation or extension",
    },
  },
  "/home-renovations/north-melbourne/": {
    seoTitle: "Home Renovations & Extensions North Melbourne | Forefront",
    meta: "Make careful changes to a home with a tight footprint. Explore renovations and extensions for your North Melbourne home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in North Melbourne",
    intro: [
      "If your North Melbourne home has narrow rooms or a short rear yard, a useful renovation brief identifies what needs to become easier before adding anything. Measure the route through the house and note where you depend on borrowed light.",
    ],
    sections: [
      {
        title: "Keep street character in view when drawing an addition",
        paras: [
          "Photograph the roofline, front windows and side boundary. Check the address against the City of Melbourne planning controls before choosing changes that can be seen from the street. Think about how new openings will change the rooms you keep.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a North Melbourne property",
        paras: [
          "Check your address against the City of Melbourne planning scheme. For external work, use the property report and seek advice about the controls and proposed scope.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can a terrace feel bigger without a larger footprint?",
        a: "A clearer connection between rooms, better storage and useful daylight can help. Test those changes alongside an addition to see what each option achieves.",
      },
    ],
    cta: {
      title: "Discuss your North Melbourne renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your North Melbourne renovation or extension",
    },
  },
  "/home-renovations/parkville/": {
    seoTitle: "Home Renovations & Extensions Parkville | Forefront",
    meta: "Make the changes your home needs while keeping its character. Explore renovations and extensions for your Parkville home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Parkville",
    intro: [
      "If you’re considering a Parkville renovation, look closely at the parts of the property you want to retain. An original window, a well-proportioned front room or a useful entry can stay in the design while other rooms take on new roles.",
    ],
    sections: [
      {
        title: "Record the details before drawing changes",
        paras: [
          "Keep photos of the street elevation and the features that matter to you. The City of Melbourne’s Parkville heritage review gives local context. Check the current planning report for the address and discuss what controls apply to the work you’re considering.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Parkville property",
        paras: [
          "Check your address against the City of Melbourne planning scheme. For external work, use the property report and seek advice about the controls and proposed scope.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "What if we want to update the rear of an older home?",
        a: "Bring the rear layout and a view of the roof from the street or lane. The design discussion can consider how new work would meet the existing building and what approvals may be needed.",
      },
    ],
    cta: {
      title: "Discuss your Parkville renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Parkville renovation or extension",
    },
  },
  "/home-renovations/pascoe-vale-south/": {
    seoTitle: "Home Renovations & Extensions Pascoe Vale South | Forefront",
    meta: "Give existing rooms a better relationship to the garden. Explore renovations and extensions for your Pascoe Vale South home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Pascoe Vale South",
    intro: [
      "If your Pascoe Vale South home has rooms added at different times, look at what each one does. You might be able to retain a useful older room while changing the threshold or opening that separates it from the living area.",
    ],
    sections: [
      {
        title: "Make a plan for what happens between floors",
        paras: [
          "Check whether steps between rooms or down to the yard suit the people who use them. Test where to retain a level and where a change makes sense, then consider how joinery, windows and doors can work with those decisions.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Pascoe Vale South property",
        paras: [
          "Merri-bek’s heritage guidance explains how overlays can affect work to a property. Check the address first and get advice on the scope you’re considering, especially where it changes the exterior.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should we keep an existing rear room?",
        a: "Assess its condition, light and relationship to the rest of the house. A room that looks awkward on its own may work better once the adjoining layout is resolved.",
      },
    ],
    cta: {
      title: "Discuss your Pascoe Vale South renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Pascoe Vale South renovation or extension",
    },
  },
  "/home-renovations/pascoe-vale/": {
    seoTitle: "Home Renovations & Extensions Pascoe Vale | Forefront",
    meta: "Make better use of the space between rooms. Explore renovations and extensions for your Pascoe Vale home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Pascoe Vale",
    intro: [
      "For a Pascoe Vale home renovation, start with the spaces that connect everything else. A wide entry can take coats and shoes. A hallway can borrow light from an adjoining room. A tight route around the dining table may point to a change in the layout.",
    ],
    sections: [
      {
        title: "Balance the floor plan with the site",
        paras: [
          "If your block has a slope, compare the level of a new room with the rest of the house and the outdoor space. Where there are steps now, decide which routes you want to make easier before choosing where to extend.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Pascoe Vale property",
        paras: [
          "Merri-bek’s heritage guidance explains how overlays can affect work to a property. Check the address first and get advice on the scope you’re considering, especially where it changes the exterior.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Could the same plan cover a kitchen and bathroom later?",
        a: "Yes. Plan shared services and the floor layout together first. A staged build makes more sense when later work can connect to what you do now.",
      },
    ],
    cta: {
      title: "Discuss your Pascoe Vale renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Pascoe Vale renovation or extension",
    },
  },
  "/home-renovations/seddon/": {
    seoTitle: "Home Renovations & Extensions Seddon | Forefront",
    meta: "Use the footprint carefully. Explore renovations and extensions for your Seddon home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Seddon",
    intro: [
      "When an existing Seddon home has a narrow layout, a small change to the connection between rooms can do a lot. Start with which rooms feel dark or isolated, and where furniture leaves too little space to get through.",
    ],
    sections: [
      {
        title: "Make the side boundary part of the drawing",
        paras: [
          "A new window or opening needs somewhere to look. On a compact site, check where the closest neighbouring rooms sit and whether light can come from above or from the garden. Work through material access at the same time.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Seddon property",
        paras: [
          "Check the property in the City of Maribyrnong’s planning scheme. The council’s precinct statements explain the features valued in designated areas. The address-level report shows whether any overlay applies to your site.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we keep a closed front room and still open the back?",
        a: "Yes, that is worth testing. A front room can provide quiet while the kitchen and dining area open to the garden. Check the heritage status of the address before planning changes to original features.",
      },
    ],
    cta: {
      title: "Discuss your Seddon renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Seddon renovation or extension",
    },
  },
  "/home-renovations/south-kingsville/": {
    seoTitle: "Home Renovations & Extensions South Kingsville | Forefront",
    meta: "Give the house and outdoor areas a plan together. Explore renovations and extensions for your South Kingsville home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in South Kingsville",
    intro: [
      "If you want another living area at your South Kingsville home, start by showing how you use the garden and the side passage now. A new room affects the way you store bikes, reach bins and come in from outside.",
    ],
    sections: [
      {
        title: "Keep the layout flexible at the rear",
        paras: [
          "Compare an addition that spans the back of the house with one that leaves a side route open. Think about light to the middle rooms and where you’d set down muddy shoes or a washing basket on the way inside.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a South Kingsville property",
        paras: [
          "Hobsons Bay’s housing and neighbourhood character guidance can help you frame questions about an addition. Check the property report for the relevant council, zones and overlays.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Visit the Altona project gallery",
        paras: [
          "For a close look at the details of a renovation, start with the Altona gallery. If you’re planning changes to several rooms, note any materials or fittings you would want to use in more than one space.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Does every extension need to take up more of the garden?",
        a: "A second-storey option may keep more ground area, while internal changes may make the existing footprint work harder. Compare what each would mean for the rooms and site.",
      },
    ],
    cta: {
      title: "Discuss your South Kingsville renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your South Kingsville renovation or extension",
    },
  },
  "/home-renovations/spotswood/": {
    seoTitle: "Home Renovations & Extensions Spotswood | Forefront",
    meta: "Open the rear of the home around the space you want to keep. Explore renovations and extensions for your Spotswood home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Spotswood",
    intro: [
      "When you’re updating a Spotswood house, draw the garden and side access as part of the home. Adding living space can affect where you dry washing, park a bike or let children play. Decide which outdoor uses matter before you settle on a footprint.",
    ],
    sections: [
      {
        title: "Use a section drawing to check the connection",
        paras: [
          "A floor plan shows how rooms meet from above. A section drawing can show the step into the garden, headroom at the new opening and whether a change to the roof will shade an existing room. Ask to see both early.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Spotswood property",
        paras: [
          "Hobsons Bay’s housing and neighbourhood character guidance can help you frame questions about an addition. Check the property report for the relevant council, zones and overlays.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Visit the Altona project gallery",
        paras: [
          "For a close look at the details of a renovation, start with the Altona gallery. If you’re planning changes to several rooms, note any materials or fittings you would want to use in more than one space.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can a kitchen renovation be part of the extension?",
        a: "It can be worth designing them together. Share the position of the current kitchen, the doors to outside and any appliances or joinery you’d like to keep.",
      },
    ],
    cta: {
      title: "Discuss your Spotswood renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Spotswood renovation or extension",
    },
  },
  "/home-renovations/strathmore-heights/": {
    seoTitle: "Home Renovations & Extensions Strathmore Heights | Forefront",
    meta: "Make the plan work from street to back fence. Explore renovations and extensions for your Strathmore Heights home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Strathmore Heights",
    intro: [
      "If there are steps between the street, your Strathmore Heights home and the yard, record the levels on your first sketch. The connection between them will affect how you use an addition and how it could be built.",
    ],
    sections: [
      {
        title: "Find where a room can meet the site comfortably",
        paras: [
          "A bigger living space may work best where you can keep a useful path to the garden. Compare that option with internal changes and check how a new floor level would affect access, outlook and drainage.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Strathmore Heights property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "What if the site is difficult to reach?",
        a: "Bring photos of the driveway, side access and any steps. The design and build discussion should consider the route for people, materials and equipment early.",
      },
    ],
    cta: {
      title: "Discuss your Strathmore Heights renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Strathmore Heights renovation or extension",
    },
  },
  "/home-renovations/strathmore/": {
    seoTitle: "Home Renovations & Extensions Strathmore | Forefront",
    meta: "Connect retained rooms to the way you want to live. Explore renovations and extensions for your Strathmore home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Strathmore",
    intro: [
      "For a Strathmore renovation, start with the rooms you want to keep using and those you’d use more if they had better light, a different door or a clearer connection to the rest of the house.",
    ],
    sections: [
      {
        title: "Draw the junction in detail",
        paras: [
          "A new family room should feel comfortable next to what’s already there. Look at where the ceiling height changes, whether flooring can continue and what happens to the adjoining room once the outside wall is opened up. That junction may drive the scope more than the size of the addition.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Strathmore property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should we choose finishes to match the original house?",
        a: "Bring examples of what you like about the original finishes. You can discuss where continuity matters and where a change in material could make the transition easy to read.",
      },
    ],
    cta: {
      title: "Discuss your Strathmore renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Strathmore renovation or extension",
    },
  },
  "/home-renovations/sunshine-north/": {
    seoTitle: "Home Renovations & Extensions Sunshine North | Forefront",
    meta: "Plan the changes that can share the same work. Explore renovations and extensions for your Sunshine North home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Sunshine North",
    intro: [
      "If a new kitchen, laundry or family bathroom is on your list in Sunshine North, draw all three on the same plan. That makes it easier to see where they use the same walls, services or access route.",
    ],
    sections: [
      {
        title: "Look at the work that crosses room boundaries",
        paras: [
          "Replacing old floors or revising the power and plumbing may affect rooms outside the immediate renovation. Decide where each stage can finish neatly and which connections should be allowed for before joinery goes in.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Sunshine North property",
        paras: [
          "Brimbank City Council provides guidance on heritage places and proposed work. Check the specific address before assuming what may be retained, removed or extended.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Hear from a West Footscray homeowner",
        paras: [
          "The West Footscray project testimonial gives you a homeowner’s perspective. As you listen, note what you’d like to ask about site access, communication and the way changes are documented.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should I wait until I can do everything?",
        a: "It depends on how tightly the work is linked. A plan for the final layout can help you weigh a larger first stage against the disruption of doing related work later.",
      },
    ],
    cta: {
      title: "Discuss your Sunshine North renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Sunshine North renovation or extension",
    },
  },
  "/home-renovations/sunshine-west/": {
    seoTitle: "Home Renovations & Extensions Sunshine West | Forefront",
    meta: "Give an established home a layout that suits today. Explore renovations and extensions for your Sunshine West home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Sunshine West",
    intro: [
      "Think about whether the front living room, garage entry and rear yard are still serving the people who use your Sunshine West home. An extension makes sense when you can show what the existing rooms cannot comfortably do.",
    ],
    sections: [
      {
        title: "Make the entry from the outside work harder",
        paras: [
          "If you usually enter through a side door or garage, put storage and a place to drop bags along that route. See whether a laundry can take some of that load without blocking access to the garden.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Sunshine West property",
        paras: [
          "Brimbank City Council provides guidance on heritage places and proposed work. Check the specific address before assuming what may be retained, removed or extended.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Hear from a West Footscray homeowner",
        paras: [
          "The West Footscray project testimonial gives you a homeowner’s perspective. As you listen, note what you’d like to ask about site access, communication and the way changes are documented.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can an unused room become part of the living area?",
        a: "It’s worth exploring. Check floor levels, wall structure and how heating, cooling and light would work if the room became part of a larger space.",
      },
    ],
    cta: {
      title: "Discuss your Sunshine West renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Sunshine West renovation or extension",
    },
  },
  "/home-renovations/sunshine/": {
    seoTitle: "Home Renovations & Extensions Sunshine | Forefront",
    meta: "Start with the rooms that could work harder. Explore renovations and extensions for your Sunshine home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Sunshine",
    intro: [
      "If the rooms in a Sunshine home are useful on their own but awkward together, put their relationship at the centre of the brief. A kitchen might suit the people who cook in it while the route to the dining table still needs work.",
    ],
    sections: [
      {
        title: "Make a plan for shared services",
        paras: [
          "When you’re considering work to the kitchen, laundry and bathroom, mark the locations of existing fixtures. If the rooms share plumbing or flooring, it can help to scope those changes at the same time, even if you intend to build in stages.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Sunshine property",
        paras: [
          "Brimbank City Council provides guidance on heritage places and proposed work. Check the specific address before assuming what may be retained, removed or extended.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Hear from a West Footscray homeowner",
        paras: [
          "The West Footscray project testimonial gives you a homeowner’s perspective. As you listen, note what you’d like to ask about site access, communication and the way changes are documented.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Do I need to consider heritage for an older Sunshine house?",
        a: "Check the specific address. Brimbank identifies heritage places and precincts and explains how to make an enquiry about proposed work.",
      },
    ],
    cta: {
      title: "Discuss your Sunshine renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Sunshine renovation or extension",
    },
  },
  "/home-renovations/tottenham/": {
    seoTitle: "Home Renovations & Extensions Tottenham | Forefront",
    meta: "Work out what can be retained before adding more. Explore renovations and extensions for your Tottenham home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Tottenham",
    intro: [
      "Start a Tottenham renovation by checking the existing rooms, roof and access route. If the property has been altered over time, an assessment of the join between the original structure and later work can help you decide where to invest.",
    ],
    sections: [
      {
        title: "Give the layout a clear front and back",
        paras: [
          "Consider how people enter, where wet gear and work bags go, and how you get to the garden without crossing the work area in the kitchen. If an addition is being considered, include the location of existing services and access on the first plan.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Tottenham property",
        paras: [
          "Check the property in the City of Maribyrnong’s planning scheme. The council’s precinct statements explain the features valued in designated areas. The address-level report shows whether any overlay applies to your site.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Hear from a West Footscray homeowner",
        paras: [
          "The West Footscray project testimonial gives you a homeowner’s perspective. As you listen, note what you’d like to ask about site access, communication and the way changes are documented.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we tell what needs replacing from the photos?",
        a: "Photos help describe the scope. An on-site assessment is needed where structure, concealed damage or the condition of services could change the plan.",
      },
    ],
    cta: {
      title: "Discuss your Tottenham renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Tottenham renovation or extension",
    },
  },
  "/home-renovations/travancore/": {
    seoTitle: "Home Renovations & Extensions Travancore | Forefront",
    meta: "Plan carefully around the features that give the home character. Explore renovations and extensions for your Travancore home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Travancore",
    intro: [
      "If your Travancore home has an original entry or a façade you want to retain, photograph those details and make them part of the renovation brief. Then mark where you’d like to bring in more light or create privacy at the back.",
    ],
    sections: [
      {
        title: "Look at windows from both sides",
        paras: [
          "A new opening can change an interior and the way the outside of the building is seen. Put the elevations beside the floor plan and consider which features and views are worth keeping. Check the address for heritage controls early.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Travancore property",
        paras: [
          "Moonee Valley City Council publishes heritage information. Use the property report to check the controls at your address, then confirm with council how they apply to your proposal.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the building requirements with your plan",
        paras: [
          "Consumer Affairs Victoria explains what to consider before renovating an individual lot. Bring the applicable building rules and information about shared services when we discuss your plans.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "What if we’re renovating a unit rather than a house?",
        a: "Bring the owners corporation rules and the lot plan to the discussion. Ask which parts of the proposal may need notice, consent or assessment before you settle the scope.",
      },
    ],
    cta: {
      title: "Discuss your Travancore renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Travancore renovation or extension",
    },
  },
  "/home-renovations/west-footscray/": {
    seoTitle: "Home Renovations & Extensions West Footscray | Forefront",
    meta: "Keep the character that makes the house yours. Explore renovations and extensions for your West Footscray home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in West Footscray",
    intro: [
      "West Footscray’s heritage precinct documentation includes interwar and post-war places. If your property retains details from an earlier era, choose which ones you want to live with and work them into the brief before drawing a larger living area.",
    ],
    sections: [
      {
        title: "Think through where the family will go during the work",
        paras: [
          "Decide which rooms and exits you need to keep using. A rear addition can change access to the yard even when most of the original rooms are retained. Bring those details into the discussion about the sequence of the build.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a West Footscray property",
        paras: [
          "Check the property in the City of Maribyrnong’s planning scheme. The council’s precinct statements explain the features valued in designated areas. The address-level report shows whether any overlay applies to your site.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Hear from a West Footscray homeowner",
        paras: [
          "The West Footscray project testimonial gives you a homeowner’s perspective. As you listen, note what you’d like to ask about site access, communication and the way changes are documented.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Does the heritage study settle what I can build?",
        a: "The current property report and council advice are the places to check. A precinct description can explain why features matter, while the controls and your scope shape what is required.",
      },
    ],
    cta: {
      title: "Discuss your West Footscray renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your West Footscray renovation or extension",
    },
  },
  "/home-renovations/west-melbourne/": {
    seoTitle: "Home Renovations & Extensions West Melbourne | Forefront",
    meta: "Make space for the way you live inside the city. Explore renovations and extensions for your West Melbourne home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in West Melbourne",
    intro: [
      "Whether you’re planning work to a West Melbourne house or an apartment, start with the layout you can actually use. Mark where you need privacy, how you bring things inside and which services or structure would constrain a change.",
    ],
    sections: [
      {
        title: "Identify who needs to be involved",
        paras: [
          "For an apartment, get the lot plan and owners corporation information. For a house with character features, check the planning report and whether there are controls over the exterior. These are different questions and belong in the brief before details are fixed.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a West Melbourne property",
        paras: [
          "Check your address against the City of Melbourne planning scheme. For external work, use the property report and seek advice about the controls and proposed scope.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the building requirements with your plan",
        paras: [
          "Consumer Affairs Victoria explains what to consider before renovating an individual lot. Bring the applicable building rules and information about shared services when we discuss your plans.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we combine room updates with a wider layout change?",
        a: "Yes, where the building and approvals allow it. Identify any shared services and let the layout discussion inform which rooms should be done together.",
      },
    ],
    cta: {
      title: "Discuss your West Melbourne renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your West Melbourne renovation or extension",
    },
  },
  "/home-renovations/yarraville/": {
    seoTitle: "Home Renovations & Extensions Yarraville | Forefront",
    meta: "A better route from the front door to the garden. Explore renovations and extensions for your Yarraville home with Forefront Trades Co.",
    h1: "Home Renovations & Extensions in Yarraville",
    intro: [
      "A Yarraville renovation can start with the path through the house. If a side hallway carries bags, shoes and everyone on their way to the kitchen, look at where the traffic can be given more space. Protect the rooms and details you already enjoy.",
    ],
    sections: [
      {
        title: "Plan the threshold between old and new",
        paras: [
          "Decide whether a kitchen and dining addition should share one level with the original home or step down towards the garden. Either choice affects the back wall, outlook and where you can store things. Think about what you’ll see as you move down the hall.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Planning checks for a Yarraville property",
        paras: [
          "Check the property in the City of Maribyrnong’s planning scheme. The council’s precinct statements explain the features valued in designated areas. The address-level report shows whether any overlay applies to your site.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See how the Footscray rooms connect",
        paras: [
          "Our Footscray renovation gallery shows how flooring, glazing and a quiet palette can connect the main living area to the garden. Use it to decide what you want to bring into your own brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can the front of the house stay as it is?",
        a: "Keeping the front can be part of the design brief. Check whether the address is in a heritage precinct and discuss how the rear roof and addition would be seen from outside.",
      },
    ],
    cta: {
      title: "Discuss your Yarraville renovation or extension",
      text: "Tell us where you want the home to work differently and what you’d like to retain. Bring an address and any drawings you already have.",
      label: "Discuss your Yarraville renovation or extension",
    },
  },
  "/kitchen-renovations/": {
    seoTitle: "Kitchen Renovations Melbourne | Forefront Trades Co.",
    meta: "Plan a Melbourne kitchen renovation around the way you cook, store and gather. Discuss joinery, appliances and the layout with Forefront.",
    h1: "A kitchen designed around the way you use it",
    intro: [
      "A good kitchen gives you room to put down the shopping, prepare dinner and sit down with someone while the kettle boils. We start with those everyday moments to work out what the layout needs to do.",
    ],
    sections: [
      {
        title: "Decide how people will move",
        paras: [
          "Trace the route from the fridge to the sink and from the oven to a clear bench. If more than one person uses the kitchen at once, check the gaps around an island and the paths to the dining room. An open dishwasher should have a place in that drawing.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Design the joinery around what you own",
        paras: [
          "Count the drawers you want within easy reach and measure the appliances you intend to keep. If you’re considering a butler’s pantry, decide what happens in it. Hiding small appliances and running a second prep space have different requirements.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Consider the rooms around the kitchen",
        paras: [
          "A new opening or relocated kitchen can change the floor, lighting and services outside the immediate space. Discuss what will happen to the rest of the room, including any existing finishes you want to retain.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Use the Footscray gallery as a reference",
        paras: [
          "Look at the way the kitchen relates to the wider living area. Bring your own plan or photographs and tell us which aspects of that connection you’d like to explore.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I keep some existing appliances?",
        a: "Bring the model details and dimensions. Their condition and installation requirements will help determine how they can fit into the new design.",
      },
      {
        q: "Should I select appliances before joinery is finalised?",
        a: "It helps to identify the appliances early. The dimensions, ventilation and connections can affect both the cabinetry and the services plan.",
      },
    ],
    cta: {
      title: "Discuss your kitchen plans",
      text: "",
      label: "Discuss your kitchen plans",
    },
  },
  "/kitchen-renovations/ascot-vale/": {
    seoTitle: "Kitchen Renovations Ascot Vale | Forefront",
    meta: "Put the family’s route past the kitchen on the plan. Plan a kitchen renovation in Ascot Vale with Forefront Trades Co.",
    h1: "Kitchen Renovations in Ascot Vale",
    intro: [
      "If the back door of your Ascot Vale home is a main entrance, think about the traffic before moving the kitchen. You’ll want a place to bring in shopping and a way for people to pass while meals are being made.",
    ],
    sections: [
      {
        title: "Choose where to open up",
        paras: [
          "A wall opening can give the cook a view to the table or garden. Draw the existing opening, the proposed one and the joinery next to it. Check what the opening means for structure, lighting and floor finishes beyond the kitchen.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Ascot Vale",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See the kitchen in the context of the home",
        paras: [
          "Look through our Footscray renovation for a view of the kitchen beside the living area. Note where you’d like the connections between rooms in your home to feel different.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should the kitchen and extension be designed together?",
        a: "If they share the same wall or floor area, bring them into one plan. Compare how the kitchen works with and without the extra space.",
      },
    ],
    cta: {
      title: "Discuss your Ascot Vale kitchen renovation",
      text: "",
      label: "Discuss your Ascot Vale kitchen renovation",
    },
  },
  "/kitchen-renovations/avondale-heights/": {
    seoTitle: "Kitchen Renovations Avondale Heights | Forefront",
    meta: "Give a kitchen with a garden outlook a better working layout. Plan a kitchen renovation in Avondale Heights with Forefront Trades Co.",
    h1: "Kitchen Renovations in Avondale Heights",
    intro: [
      "If your Avondale Heights kitchen has a view you’d like to keep, mark the place where you want to stand for prep and washing up. Check where the light lands before adding tall units or moving the dining area.",
    ],
    sections: [
      {
        title: "Think about the garden route at the same time",
        paras: [
          "Where the outdoor area sits lower than the house, consider how food moves from the kitchen to outside. Look at the door, steps and place to set things down as part of the kitchen plan.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Avondale Heights",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look beyond the kitchen joinery",
        paras: [
          "In the Footscray project gallery, look at the transitions between the main rooms as well as the cabinetry. Save a view that shows the kind of connection you’d like to discuss.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can the existing floor level affect a kitchen change?",
        a: "Yes. Floor construction and levels can affect how new joinery meets adjoining rooms and where services can run. Have them checked before finalising the layout.",
      },
    ],
    cta: {
      title: "Discuss your Avondale Heights kitchen renovation",
      text: "",
      label: "Discuss your Avondale Heights kitchen renovation",
    },
  },
  "/kitchen-renovations/brooklyn/": {
    seoTitle: "Kitchen Renovations Brooklyn | Forefront",
    meta: "Make prep, storage and garden access fit together. Plan a kitchen renovation in Brooklyn with Forefront Trades Co.",
    h1: "Kitchen Renovations in Brooklyn",
    intro: [
      "If the kitchen in your Brooklyn house sits on the route from the driveway or back door, decide where to set down shopping and where it can be unpacked. Give both actions space before putting another appliance in the room.",
    ],
    sections: [
      {
        title: "Check the access for large pieces early",
        paras: [
          "Measure the route for benchtops, tall cabinets and appliances. If the room has tight turns, consider how the pieces can be delivered and fitted. That may affect the joinery design and timing of the work.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Brooklyn",
        paras: [
          "Use the property address to check the responsible council and planning controls. Brooklyn crosses council boundaries. If your kitchen renovation changes an outside opening or involves structural work, bring those details to the approvals discussion.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See the kitchen in the context of the home",
        paras: [
          "Look through our Footscray renovation for a view of the kitchen beside the living area. Note where you’d like the connections between rooms in your home to feel different.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I reuse the sink and cooktop positions?",
        a: "Often that’s an option worth exploring. Check their condition, installation requirements and how they fit into the bench space you want.",
      },
    ],
    cta: {
      title: "Discuss your Brooklyn kitchen renovation",
      text: "",
      label: "Discuss your Brooklyn kitchen renovation",
    },
  },
  "/kitchen-renovations/brunswick/": {
    seoTitle: "Kitchen Renovations Brunswick | Forefront",
    meta: "Make a narrow kitchen easier to move through. Plan a kitchen renovation in Brunswick with Forefront Trades Co.",
    h1: "Kitchen Renovations in Brunswick",
    intro: [
      "If your Brunswick kitchen sits in a long room, give people a way through while someone is cooking. Before adding an island, see whether the oven, fridge and dishwasher can open without blocking the path to the back door.",
    ],
    sections: [
      {
        title: "Find a place for the appliances that stay out",
        paras: [
          "List what lives on your bench and what you’d actually put away. A deep drawer, an appliance cupboard or a tall pantry can each solve a different problem. Decide how they’ll be used before taking space from the working aisle.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Brunswick",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Merri-bek planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See the kitchen in the context of the home",
        paras: [
          "Look through our Footscray renovation for a view of the kitchen beside the living area. Note where you’d like the connections between rooms in your home to feel different.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Will a galley kitchen feel cramped?",
        a: "Test it with the appliance and drawer swings drawn in. Two well-planned runs can work when there is enough room to pass and a clear place to put things down.",
      },
    ],
    cta: {
      title: "Discuss your Brunswick kitchen renovation",
      text: "",
      label: "Discuss your Brunswick kitchen renovation",
    },
  },
  "/kitchen-renovations/essendon/": {
    seoTitle: "Kitchen Renovations Essendon | Forefront",
    meta: "Give cooking, eating and homework their own spaces. Plan a kitchen renovation in Essendon with Forefront Trades Co.",
    h1: "Kitchen Renovations in Essendon",
    intro: [
      "In an Essendon home where the kitchen doubles as a place to catch up or work, decide how those activities can happen at the same time. A person sitting at the island needs a route out that doesn’t cross the oven.",
    ],
    sections: [
      {
        title: "Design the pantry to suit the rest of the room",
        paras: [
          "A walk-in pantry works best when its doorway and contents are easy to reach. Compare it with a wall of cupboards. If you want a place to use appliances or prep food, consider light, ventilation, power and bench space.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Essendon",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look beyond the kitchen joinery",
        paras: [
          "In the Footscray project gallery, look at the transitions between the main rooms as well as the cabinetry. Save a view that shows the kind of connection you’d like to discuss.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I have an island with seats and still keep prep space?",
        a: "Test the depth, access and seat positions together. A clear place to work may need to sit away from the main route through the room.",
      },
    ],
    cta: {
      title: "Discuss your Essendon kitchen renovation",
      text: "",
      label: "Discuss your Essendon kitchen renovation",
    },
  },
  "/kitchen-renovations/flemington/": {
    seoTitle: "Kitchen Renovations Flemington | Forefront",
    meta: "Plan a kitchen update around the existing footprint. Plan a kitchen renovation in Flemington with Forefront Trades Co.",
    h1: "Kitchen Renovations in Flemington",
    intro: [
      "If your Flemington kitchen is in a compact house or unit, start with where it needs to do more. Decide whether the problem is a shortage of prep space, too little storage or a route to the table that cuts between the fridge and cooktop.",
    ],
    sections: [
      {
        title: "Fit the tall pieces before planning the rest",
        paras: [
          "Try the fridge and pantry in different positions and see where each blocks light or creates a corner that’s hard to reach. Then place the sink and cooktop so you have room to set things down on either side.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Flemington",
        paras: [
          "Use the property address to check the responsible council and planning controls. Flemington crosses council boundaries. If your kitchen renovation changes an outside opening or involves structural work, bring those details to the approvals discussion.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look beyond the kitchen joinery",
        paras: [
          "In the Footscray project gallery, look at the transitions between the main rooms as well as the cabinetry. Save a view that shows the kind of connection you’d like to discuss.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I use the existing floor while changing the joinery?",
        a: "Check what is under the cupboards now and whether old edges or fixing holes will be visible. Your proposed layout and the condition of the floor will guide the options.",
      },
    ],
    cta: {
      title: "Discuss your Flemington kitchen renovation",
      text: "",
      label: "Discuss your Flemington kitchen renovation",
    },
  },
  "/kitchen-renovations/footscray/": {
    seoTitle: "Kitchen Renovations Footscray | Forefront",
    meta: "Give the kitchen a connection to the rest of the home. Plan a kitchen renovation in Footscray with Forefront Trades Co.",
    h1: "Kitchen Renovations in Footscray",
    intro: [
      "Our Footscray project shows the kitchen in the context of the main living spaces. If you’re planning your own kitchen, consider what you’d like to see while you cook and what should be within reach from the dining table.",
    ],
    sections: [
      {
        title: "Follow the view from the island",
        paras: [
          "Use the project gallery to follow the finishes through the open living area towards the outdoors. Then map your own route from the front door to the fridge and from the bench to the table. Those paths can help decide where an island or wall of storage belongs.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Footscray",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Maribyrnong planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring your plans into the conversation",
        paras: [
          "If you want your new kitchen to feel part of the main living area, share a plan or photo that shows both rooms at once. Include windows and the way you get outside.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we update the kitchen without reworking the whole living area?",
        a: "Often it’s worth comparing both scopes. Check what happens where the joinery, lighting and flooring meet the rooms you’re retaining.",
      },
    ],
    cta: {
      title: "Discuss your Footscray kitchen renovation",
      text: "",
      label: "Discuss your Footscray kitchen renovation",
    },
  },
  "/kitchen-renovations/keilor-east/": {
    seoTitle: "Kitchen Renovations Keilor East | Forefront",
    meta: "Plan a kitchen around reach, movement and storage. Plan a kitchen renovation in Keilor East with Forefront Trades Co.",
    h1: "Kitchen Renovations in Keilor East",
    intro: [
      "If you’re renovating a Keilor East kitchen for the long term, make sure the things you use often are easy to reach. Check how far you carry hot pans and whether the main path through the room stays clear.",
    ],
    sections: [
      {
        title: "Check the heights that suit you",
        paras: [
          "Think about the reach to the microwave, oven and overhead cupboards. A lower or shallower storage option may make a bigger difference than extra cabinet volume. Test appliance doors, seating and drawers on the same plan.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Keilor East",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See the kitchen in the context of the home",
        paras: [
          "Look through our Footscray renovation for a view of the kitchen beside the living area. Note where you’d like the connections between rooms in your home to feel different.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we plan an easier-to-use kitchen without changing all the walls?",
        a: "Yes. Bring the existing measurements. Layout, appliance placement, lighting and cabinet choices can be assessed before considering wider structural work.",
      },
    ],
    cta: {
      title: "Discuss your Keilor East kitchen renovation",
      text: "",
      label: "Discuss your Keilor East kitchen renovation",
    },
  },
  "/kitchen-renovations/kensington/": {
    seoTitle: "Kitchen Renovations Kensington | Forefront",
    meta: "Make a compact kitchen feel clear and easy to use. Plan a kitchen renovation in Kensington with Forefront Trades Co.",
    h1: "Kitchen Renovations in Kensington",
    intro: [
      "When the kitchen in a Kensington home shares space with dining or a hallway, draw the way people get around the table before committing to an island. A different bench shape may solve more than additional cabinetry.",
    ],
    sections: [
      {
        title: "Choose what stays visible",
        paras: [
          "Put everyday items close to the spot where you use them. Decide whether open shelves will hold things you reach for or whether drawers and tall cupboards would give you a quieter view from the living area.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Kensington",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. City of Melbourne planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See the kitchen in the context of the home",
        paras: [
          "Look through our Footscray renovation for a view of the kitchen beside the living area. Note where you’d like the connections between rooms in your home to feel different.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Is a peninsula a better fit than an island?",
        a: "Compare both on your plan with appliance doors open. A peninsula can give more bench with one end fixed, while an island can leave a route around both sides if the space allows.",
      },
    ],
    cta: {
      title: "Discuss your Kensington kitchen renovation",
      text: "",
      label: "Discuss your Kensington kitchen renovation",
    },
  },
  "/kitchen-renovations/maidstone/": {
    seoTitle: "Kitchen Renovations Maidstone | Forefront",
    meta: "Make an updated kitchen fit the house you’ve inherited. Plan a kitchen renovation in Maidstone with Forefront Trades Co.",
    h1: "Kitchen Renovations in Maidstone",
    intro: [
      "If your Maidstone kitchen has been moved or altered in the past, put the existing walls, doors and services on a measured plan. Find out what can stay before moving the room or changing the connection to the living area.",
    ],
    sections: [
      {
        title: "Plan the scope around the areas you’ll see",
        paras: [
          "Ask what the new layout will reveal at the floor and wall edges. If a run of joinery comes out, consider which finishes need to continue and whether any adjoining surfaces should be included in the scope.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Maidstone",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Maribyrnong planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See the kitchen in the context of the home",
        paras: [
          "Look through our Footscray renovation for a view of the kitchen beside the living area. Note where you’d like the connections between rooms in your home to feel different.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we do cabinetry now and open a wall later?",
        a: "You can discuss staging. First identify how the future opening would affect the cabinetry, floor and services so the early work can support the later plan.",
      },
    ],
    cta: {
      title: "Discuss your Maidstone kitchen renovation",
      text: "",
      label: "Discuss your Maidstone kitchen renovation",
    },
  },
  "/kitchen-renovations/maribyrnong/": {
    seoTitle: "Kitchen Renovations Maribyrnong | Forefront",
    meta: "Make the best view part of the kitchen. Plan a kitchen renovation in Maribyrnong with Forefront Trades Co.",
    h1: "Kitchen Renovations in Maribyrnong",
    intro: [
      "If the kitchen in your Maribyrnong home looks onto a garden or has good light, test where you stand for prep and how that position relates to the window. Think about where you can keep the busy parts of the bench clear.",
    ],
    sections: [
      {
        title: "Coordinate joinery with the existing building",
        paras: [
          "In a townhouse or unit, get the service locations and any building requirements before confirming a different layout. In a house, check what happens to the floor and ceiling if you open the kitchen to the rest of the room.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Maribyrnong",
        paras: [
          "Check the planning property report and the building requirements that apply at the address. If you share services or common property with other lots, talk to the owners corporation about the proposed work before finalising your layout.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Use a finished kitchen to test the brief",
        paras: [
          "Start with the wider photos of the Footscray kitchen and living area. Note the relationship between joinery, flooring and daylight. Then consider which of those ideas would suit your rooms and what would need to change.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I move a sink onto an island?",
        a: "It depends on the route for supply and drainage, the floor and how you want to use the island. Discuss those details before ordering the cabinetry.",
      },
    ],
    cta: {
      title: "Discuss your Maribyrnong kitchen renovation",
      text: "",
      label: "Discuss your Maribyrnong kitchen renovation",
    },
  },
  "/kitchen-renovations/moonee-ponds/": {
    seoTitle: "Kitchen Renovations Moonee Ponds | Forefront",
    meta: "Make the kitchen work whether you’re hosting or cooking alone. Plan a kitchen renovation in Moonee Ponds with Forefront Trades Co.",
    h1: "Kitchen Renovations in Moonee Ponds",
    intro: [
      "If your Moonee Ponds kitchen opens straight onto dining, give everyday prep and serving different places to happen. A clear spot to set down hot dishes matters as much as the view across the room.",
    ],
    sections: [
      {
        title: "Give the mess somewhere practical to go",
        paras: [
          "An appliance cupboard or deeper clean-up zone can make the room easier to reset. Plan its position in relation to the sink, bin and dishwasher, and ask where a smaller appliance can be used comfortably.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Moonee Ponds",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Use a finished kitchen to test the brief",
        paras: [
          "Start with the wider photos of the Footscray kitchen and living area. Note the relationship between joinery, flooring and daylight. Then consider which of those ideas would suit your rooms and what would need to change.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Do I need a butler’s pantry for entertaining?",
        a: "Think about which task you’d move there. If it’s simply where you store appliances, compare a dedicated cupboard before giving up floor area to a second room.",
      },
    ],
    cta: {
      title: "Discuss your Moonee Ponds kitchen renovation",
      text: "",
      label: "Discuss your Moonee Ponds kitchen renovation",
    },
  },
  "/kitchen-renovations/newport/": {
    seoTitle: "Kitchen Renovations Newport | Forefront",
    meta: "Let the kitchen work with the garden entry. Plan a kitchen renovation in Newport with Forefront Trades Co.",
    h1: "Kitchen Renovations in Newport",
    intro: [
      "If you come in through the back of your Newport home, draw the path from the door to the fridge, bench and place you leave your keys. Keeping that route out of the prep area makes the room easier to use when everyone arrives together.",
    ],
    sections: [
      {
        title: "Place the sink and bench with the outlook in mind",
        paras: [
          "Think about where you spend the most time standing and what you’d like to see from there. Test the sink and prep surface against the existing windows and doors, then see what the services allow.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Newport",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Hobsons Bay planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Use a finished kitchen to test the brief",
        paras: [
          "Start with the wider photos of the Footscray kitchen and living area. Note the relationship between joinery, flooring and daylight. Then consider which of those ideas would suit your rooms and what would need to change.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we keep a good window when the layout changes?",
        a: "Usually it’s worth designing around a window you like. Consider sill height, fittings and what the new joinery would cover or leave clear.",
      },
    ],
    cta: {
      title: "Discuss your Newport kitchen renovation",
      text: "",
      label: "Discuss your Newport kitchen renovation",
    },
  },
  "/kitchen-renovations/parkville/": {
    seoTitle: "Kitchen Renovations Parkville | Forefront",
    meta: "Plan a kitchen that sits comfortably in an older home. Plan a kitchen renovation in Parkville with Forefront Trades Co.",
    h1: "Kitchen Renovations in Parkville",
    intro: [
      "If your Parkville kitchen is in a terrace or period house, consider what you want to see from the next room. Retained windows, architraves or doorways can help set the proportions for the new joinery.",
    ],
    sections: [
      {
        title: "Use a floor plan and an elevation together",
        paras: [
          "The plan will show where you walk and cook. An elevation shows how tall cupboards meet a window or ceiling. Use both if you want to keep a feature or alter an outside opening, and check the planning controls for the address.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Parkville",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. City of Melbourne planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look beyond the kitchen joinery",
        paras: [
          "In the Footscray project gallery, look at the transitions between the main rooms as well as the cabinetry. Save a view that shows the kind of connection you’d like to discuss.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we change a kitchen window on a heritage property?",
        a: "Check the address and discuss the proposed external change with council. The answer depends on the controls and the work.",
      },
    ],
    cta: {
      title: "Discuss your Parkville kitchen renovation",
      text: "",
      label: "Discuss your Parkville kitchen renovation",
    },
  },
  "/kitchen-renovations/pascoe-vale/": {
    seoTitle: "Kitchen Renovations Pascoe Vale | Forefront",
    meta: "Give the kitchen enough storage for the way you shop and cook. Plan a kitchen renovation in Pascoe Vale with Forefront Trades Co.",
    h1: "Kitchen Renovations in Pascoe Vale",
    intro: [
      "If groceries and appliances keep collecting on the bench of your Pascoe Vale kitchen, count what needs to fit before choosing cabinetry. Make a place for the bulky items as well as the things you grab every day.",
    ],
    sections: [
      {
        title: "Use your storage where it saves a step",
        paras: [
          "Put dry goods near a clear prep area. Keep pans where they can be reached from the cooktop and plan space for a bin beside the place you unpack or chop food. Test tall cupboards against daylight from existing windows.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Pascoe Vale",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Merri-bek planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See the kitchen in the context of the home",
        paras: [
          "Look through our Footscray renovation for a view of the kitchen beside the living area. Note where you’d like the connections between rooms in your home to feel different.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can deep drawers replace some overhead cupboards?",
        a: "They can help if they fit what you own. Compare access, load and clearances with the drawers open before fixing the layout.",
      },
    ],
    cta: {
      title: "Discuss your Pascoe Vale kitchen renovation",
      text: "",
      label: "Discuss your Pascoe Vale kitchen renovation",
    },
  },
  "/kitchen-renovations/seddon/": {
    seoTitle: "Kitchen Renovations Seddon | Forefront",
    meta: "Spend the footprint where the kitchen needs it. Plan a kitchen renovation in Seddon with Forefront Trades Co.",
    h1: "Kitchen Renovations in Seddon",
    intro: [
      "In a Seddon home with a compact rear plan, a deeper island can leave less space for moving around the table. Draw the furniture and main routes before making the joinery larger.",
    ],
    sections: [
      {
        title: "Use one wall for the jobs that need height",
        paras: [
          "Consider placing the fridge, pantry and ovens where they don’t block natural light or make the entrance feel tight. Leave a useful bench between the sink and cooktop and account for the way each appliance opens.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Seddon",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Maribyrnong planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Use a finished kitchen to test the brief",
        paras: [
          "Start with the wider photos of the Footscray kitchen and living area. Note the relationship between joinery, flooring and daylight. Then consider which of those ideas would suit your rooms and what would need to change.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we make space for two people to cook?",
        a: "Draw the two positions you use most and test the space between them. You may get more from a clearer aisle and a second prep spot than from increasing the overall footprint.",
      },
    ],
    cta: {
      title: "Discuss your Seddon kitchen renovation",
      text: "",
      label: "Discuss your Seddon kitchen renovation",
    },
  },
  "/kitchen-renovations/spotswood/": {
    seoTitle: "Kitchen Renovations Spotswood | Forefront",
    meta: "Draw the kitchen and back door as one space. Plan a kitchen renovation in Spotswood with Forefront Trades Co.",
    h1: "Kitchen Renovations in Spotswood",
    intro: [
      "When a Spotswood kitchen sits on the way to the yard, the shape of the circulation matters. Show us where people walk with washing, groceries or a tray of food before deciding how much space the joinery should take.",
    ],
    sections: [
      {
        title: "Leave a useful landing spot beside the door",
        paras: [
          "Give incoming items somewhere to sit that doesn’t interrupt prep. An entry shelf or short bench can make a difference. If you’re opening the back wall, consider how the layout and access would work while an addition is built.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Spotswood",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Hobsons Bay planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look beyond the kitchen joinery",
        paras: [
          "In the Footscray project gallery, look at the transitions between the main rooms as well as the cabinetry. Save a view that shows the kind of connection you’d like to discuss.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should I pick the kitchen layout before planning an extension?",
        a: "Keep the decisions together if they share the rear wall, door or services. One measured plan can show how each option affects the other.",
      },
    ],
    cta: {
      title: "Discuss your Spotswood kitchen renovation",
      text: "",
      label: "Discuss your Spotswood kitchen renovation",
    },
  },
  "/kitchen-renovations/strathmore/": {
    seoTitle: "Kitchen Renovations Strathmore | Forefront",
    meta: "Let new joinery work with the rooms next to it. Plan a kitchen renovation in Strathmore with Forefront Trades Co.",
    h1: "Kitchen Renovations in Strathmore",
    intro: [
      "In a Strathmore home with a separate dining room, decide whether you want to keep that separation or bring dining into the kitchen. The way you clear the table may tell you more than a photograph of an open plan.",
    ],
    sections: [
      {
        title: "Make the kitchen comfortable at different times of day",
        paras: [
          "Plan light for food prep and softer light for the evening. Check whether a tall cupboard or larger opening would affect light to an existing room. Keep the material palette in view as the kitchen meets the rest of the house.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Strathmore",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Use a finished kitchen to test the brief",
        paras: [
          "Start with the wider photos of the Footscray kitchen and living area. Note the relationship between joinery, flooring and daylight. Then consider which of those ideas would suit your rooms and what would need to change.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can new joinery sit alongside an older interior?",
        a: "Yes. Bring examples of the existing timber, trims and finishes you like. Decide where you want continuity and where the new cabinetry can have its own character.",
      },
    ],
    cta: {
      title: "Discuss your Strathmore kitchen renovation",
      text: "",
      label: "Discuss your Strathmore kitchen renovation",
    },
  },
  "/kitchen-renovations/sunshine/": {
    seoTitle: "Kitchen Renovations Sunshine | Forefront",
    meta: "Plan a kitchen that makes use of the rooms around it. Plan a kitchen renovation in Sunshine with Forefront Trades Co.",
    h1: "Kitchen Renovations in Sunshine",
    intro: [
      "If your Sunshine kitchen is separated from a room you use for meals, decide where a better opening or a different position for the table would help. Start by testing the existing footprint.",
    ],
    sections: [
      {
        title: "Bring the floor and lighting into the scope",
        paras: [
          "A layout change can leave a strip of floor that used to sit under joinery. It may also shift the places that need task lighting and power. Look at those changes before treating the project as new cupboards alone.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Sunshine",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Brimbank planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look beyond the kitchen joinery",
        paras: [
          "In the Footscray project gallery, look at the transitions between the main rooms as well as the cabinetry. Save a view that shows the kind of connection you’d like to discuss.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we keep the dining room separate?",
        a: "Yes. Draw the route for carrying meals and clearing dishes, then see whether the layout can give the two rooms a useful connection.",
      },
    ],
    cta: {
      title: "Discuss your Sunshine kitchen renovation",
      text: "",
      label: "Discuss your Sunshine kitchen renovation",
    },
  },
  "/kitchen-renovations/yarraville/": {
    seoTitle: "Kitchen Renovations Yarraville | Forefront",
    meta: "Give the kitchen a useful place at the back of the house. Plan a kitchen renovation in Yarraville with Forefront Trades Co.",
    h1: "Kitchen Renovations in Yarraville",
    intro: [
      "In a Yarraville home where the rear kitchen sits between a hall and the garden, mark the main through-route before drawing the benches. Decide how you’ll use the kitchen when people are coming and going.",
    ],
    sections: [
      {
        title: "Use the retained walls well",
        paras: [
          "A period house can have wall lengths, openings and ceiling details worth keeping. Consider where tall storage would block daylight and where low joinery can give the room more useful bench. Draw the dining table before setting the cabinetry dimensions.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Yarraville",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Maribyrnong planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Use a finished kitchen to test the brief",
        paras: [
          "Start with the wider photos of the Footscray kitchen and living area. Note the relationship between joinery, flooring and daylight. Then consider which of those ideas would suit your rooms and what would need to change.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I open the kitchen to the garden and keep the front rooms?",
        a: "That’s worth exploring. Bring the existing plan and photos of the back wall. Check the property controls and ask what the work would mean for light and structure.",
      },
    ],
    cta: {
      title: "Discuss your Yarraville kitchen renovation",
      text: "",
      label: "Discuss your Yarraville kitchen renovation",
    },
  },
  "/laundry-renovations/": {
    seoTitle: "Laundry Renovations Melbourne | Forefront Trades Co.",
    meta: "Create a Melbourne laundry with room for sorting, drying and storage. Discuss layout, appliance clearances and cabinetry with Forefront.",
    h1: "A laundry with room to do the work",
    intro: [
      "A laundry can be a hardworking room or a narrow cupboard. Either way, it needs somewhere for wet things to go, a practical route from the rest of the house and enough space for the appliances you use.",
    ],
    sections: [
      {
        title: "Start with a load of washing",
        paras: [
          "Picture carrying a basket in, sorting it, loading the machine and getting the washing out to dry. Note where you currently turn sideways or set things on the floor. Those moments tell you where the design should spend its space.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Set aside space for more than appliances",
        paras: [
          "A rail for drip-drying, a reachable shelf for detergents or a tall cupboard for a vacuum can free up the benchtop. Bring the measurements for your washer and dryer, including door swing and access for connections.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Plan water and ventilation together",
        paras: [
          "The sink, appliance connections and ventilation influence where things can sit. If you’d like to move the laundry or share it with a mudroom, discuss the existing services and what else that area needs to handle.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Does stacking the washer and dryer always save room?",
        a: "It can free floor area. Check appliance compatibility, installation clearances and whether you’ll still be able to load, reach and service both machines comfortably.",
      },
      {
        q: "Can you combine a laundry and bathroom project?",
        a: "We can discuss the rooms together, including the order of work and which facilities your household needs to retain.",
      },
    ],
    cta: {
      title: "Discuss your laundry renovation",
      text: "",
      label: "Discuss your laundry renovation",
    },
  },
  "/laundry-renovations/brunswick/": {
    seoTitle: "Laundry Renovations Brunswick | Forefront",
    meta: "Make a small laundry fit a daily routine. Plan a laundry renovation in Brunswick with Forefront Trades Co.",
    h1: "Laundry Renovations in Brunswick",
    intro: [
      "If your Brunswick laundry is a cupboard off the kitchen or a tight room at the back of the house, decide where a full basket can go while the machines are open. Give folding, drying and storage the space you’ll actually use.",
    ],
    sections: [
      {
        title: "Plan the cupboard from the appliance doors out",
        paras: [
          "For a stacked arrangement, check the reach to the dryer, service access and the space needed behind and around the machines. If doors conceal the laundry, check how the space will ventilate and whether you can open everything without blocking the hall.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Brunswick",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Merri-bek planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Start a brief with the room you use",
        paras: [
          "Our Footscray project includes dedicated laundry footage. Bring the dimensions and model details for your own appliances and show us where you’d like storage or a clearer path through the room.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we put the laundry in a different part of the house?",
        a: "It’s an option to assess. Look at the route to the bedrooms and drying area and check the water, waste, power and ventilation requirements before choosing a location.",
      },
    ],
    cta: {
      title: "Discuss your Brunswick laundry renovation",
      text: "",
      label: "Discuss your Brunswick laundry renovation",
    },
  },
  "/laundry-renovations/essendon/": {
    seoTitle: "Laundry Renovations Essendon | Forefront",
    meta: "Give the laundry a role beyond washing. Plan a laundry renovation in Essendon with Forefront Trades Co.",
    h1: "Laundry Renovations in Essendon",
    intro: [
      "If your Essendon laundry sits near a side door or garage entry, decide what you need to put down as you come in. Wet jackets, school bags and shoes can share the room if each has somewhere to go and the floor stays clear.",
    ],
    sections: [
      {
        title: "Lay out washing and household storage together",
        paras: [
          "Leave space to stand with the appliance doors open. Put laundry supplies close to the sink, then work out where to hang damp items and store things that need to stay dry. If the room is a passage, draw the route through before making the bench deeper.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Property checks in Essendon",
        paras: [
          "Check the property address and scope before assuming what approvals are needed. Moonee Valley planning information is a useful starting point if your plans affect the outside of the building or an existing heritage feature.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "See the Footscray laundry in context",
        paras: [
          "The Footscray project library includes the laundry and bathroom together. If those spaces are part of one renovation for you, use the footage to decide which functions and finishes you want to carry between them.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should I keep the sink if I mostly use the machine?",
        a: "List the jobs you’d still want to do by hand. A smaller sink could free up bench space while leaving somewhere to rinse or soak things.",
      },
    ],
    cta: {
      title: "Discuss your Essendon laundry renovation",
      text: "",
      label: "Discuss your Essendon laundry renovation",
    },
  },
  "/lp/bathroom-renovations/": {
    seoTitle: "Plan a Melbourne Bathroom Renovation | Forefront Trades Co.",
    meta: "Tell Forefront Trades Co. what you’d like to change in your Melbourne bathroom, from the shower layout to storage and lighting.",
    h1: "Start with the bathroom you use every day",
    intro: [
      "An awkward shower, a vanity with too little storage or a bathroom shared by the whole family can make every morning feel harder. Tell us which changes would matter most to your household.",
    ],
    sections: [
      {
        title: "Find room for the way you get ready",
        paras: [
          "Think about how the doors, shower and drawers move. Consider where towels and toiletries sit, whether you need a bath and where you want better light.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Talk through the work behind the finishes",
        paras: [
          "Tell us if you want to keep fixtures where they are or move them. Existing plumbing, ventilation and floor condition help shape the design and the work needed.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Tell us what needs to stay usable",
        paras: [
          "If it’s your only bathroom, say so in the enquiry. We can discuss what the work might mean for the household and which arrangements need to be planned.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can I discuss a layout before choosing tiles?",
        a: "Yes. The layout is a good place to start. Tell us what you want from the room and share photos or a plan if you have them.",
      },
    ],
    cta: {
      title: "Discuss my bathroom renovation",
      text: "",
      label: "Discuss my bathroom renovation",
    },
  },
  "/lp/full-home-renovation/": {
    seoTitle: "Plan a Melbourne Full-Home Renovation | Forefront Trades Co.",
    meta: "Tell Forefront Trades Co. how you’d like your Melbourne home to work. Discuss a renovation that brings several rooms and decisions together.",
    h1: "Rethink the rooms you use as a whole",
    intro: [
      "If you keep making the same compromises in several parts of the house, it’s time to look at how the rooms fit together. Tell us what you need from the home and what you’d like to retain.",
    ],
    sections: [
      {
        title: "Choose the change that will matter most",
        paras: [
          "Walk through your busiest part of the day. If traffic crosses the cook’s workspace or a dark middle room rarely gets used, show us where that happens. A change in the connections between rooms can have an effect beyond any one room.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Decide what should be planned together",
        paras: [
          "Work to flooring, lighting or plumbing may reach beyond the room where it begins. Discuss the order of work before choosing which rooms you want to tackle first.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Include the people who live there",
        paras: [
          "List the routines that need to continue, including work, school and care. A discussion about access and temporary arrangements belongs in the brief alongside the layout and finishes.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Should we start with one room?",
        a: "Sometimes. It helps to plan the bigger picture first so any work you do now can fit with later changes.",
      },
    ],
    cta: {
      title: "Discuss my home renovation",
      text: "",
      label: "Discuss my home renovation",
    },
  },
  "/lp/home-extensions/": {
    seoTitle: "Plan a Melbourne Home Extension | Forefront Trades Co.",
    meta: "Tell us where your Melbourne home is running out of room. Explore a ground-floor or second-storey extension with Forefront Trades Co.",
    h1: "More room, at the address you want to keep",
    intro: [
      "You know where the house falls short. Maybe you need another bedroom, somewhere to work or living space that opens to the garden. Tell us what needs to change and we can discuss where the extra room might go.",
    ],
    sections: [
      {
        title: "Build out or build up?",
        paras: [
          "If you want the kitchen and living areas to open onto the yard, look at what can happen at ground level. If bedrooms are the priority, a second storey could leave more of the garden in place. The existing structure, site and planning controls affect both options.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring what you know",
        paras: [
          "Add your suburb, the rooms you need and the stage your plans have reached. Mention if there are rooms you want to keep, a part of the yard you need or an access issue we should understand.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "What we’ll discuss",
        paras: [
          "We can talk about which option is worth exploring, what needs to be checked and what information would help define the scope.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Do I need an architect before I enquire?",
        a: "You can enquire at the idea stage or bring drawings you already have. Tell us where you are in the process so we can discuss the next step.",
      },
    ],
    cta: {
      title: "Discuss my extension",
      text: "",
      label: "Discuss my extension",
    },
  },
  "/lp/kitchen-renovations/": {
    seoTitle: "Plan a Melbourne Kitchen Renovation | Forefront Trades Co.",
    meta: "Talk to Forefront Trades Co. about a Melbourne kitchen renovation. Share your layout, storage and appliance plans to get started.",
    h1: "Give your kitchen a better way to work",
    intro: [
      "Think about what happens between arriving with the shopping and sitting down to dinner. That’s where a new kitchen can make the biggest difference.",
    ],
    sections: [
      {
        title: "Put prep space where you need it",
        paras: [
          "Decide where groceries get unpacked and which bench stays clear for cooking. If you want an island, check how people would move around it while the dishwasher or oven is open.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Make a place for the things you use",
        paras: [
          "List the appliances you want to keep and the things you want off the benchtop. If you’re interested in a pantry, decide whether it’s mainly for food storage or needs space for prep as well.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look beyond the cabinetry",
        paras: [
          "If you want to open the kitchen to dining or living areas, share a photo of the adjoining room or a floor plan. We can discuss how that change might affect the wider scope.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Do I need to have chosen appliances?",
        a: "You can begin without final selections. Bring the details of anything you intend to keep and flag any appliances that will shape the layout.",
      },
    ],
    cta: {
      title: "Discuss my kitchen renovation",
      text: "",
      label: "Discuss my kitchen renovation",
    },
  },
  "/lp/laundry-renovations/": {
    seoTitle: "Plan a Melbourne Laundry Renovation | Forefront Trades Co.",
    meta: "Plan a laundry with usable bench space, storage and room to move. Tell Forefront Trades Co. what your Melbourne laundry needs to do.",
    h1: "Make washing day easier to get through",
    intro: [
      "Your laundry has to handle wet clothes, bottles, baskets and appliances in the same space. Tell us where the routine breaks down and what would make the room easier to use.",
    ],
    sections: [
      {
        title: "Find a place for each step",
        paras: [
          "From bringing in a basket to hanging up a wet shirt, every step takes space. If you’d like a folding bench, decide which items can move into a cupboard or onto a hanging rail.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Fit the design around your appliances",
        paras: [
          "Bring the sizes and model details for the washer and dryer. Ask about the clearance to open doors, reach connections and service the appliances.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Consider adjoining rooms",
        paras: [
          "If the laundry shares a wall with a bathroom or opens straight onto the back door, show us how the spaces meet. That can affect storage, routes through the room and where the fixtures fit.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Can we make the laundry part of a larger renovation?",
        a: "Yes. Tell us which rooms you’re considering so we can discuss how their scope and timing fit together.",
      },
    ],
    cta: {
      title: "Discuss my laundry renovation",
      text: "",
      label: "Discuss my laundry renovation",
    },
  },
  "/projects/": {
    seoTitle: "Melbourne Renovation Projects | Forefront Trades Co.",
    meta: "See Forefront Trades Co.’s renovation work in Footscray and Altona, with project photography and ideas to take into your own brief.",
    h1: "Renovation projects across Melbourne",
    intro: [
      "A finished room tells you how someone wanted their home to feel. Look a little longer and you can see the decisions that make it work, from the route out to the garden to the position of a basin or a bank of drawers.",
    ],
    sections: [
      {
        title: "Footscray · Light through the living areas",
        paras: [
          "In Footscray, a quiet material palette and wide timber boards connect the living spaces. Follow the project through the kitchen and out towards the private outdoor area to see how those spaces relate.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Altona · A closer look at a bathroom renovation",
        paras: [
          "Use the Altona gallery to think about how a wet area comes together. Look across the room, then at the junctions around cabinetry, fittings and wall finishes. Those details can help you explain what you want from your own bathroom.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "What to take from the gallery",
        paras: [
          "Save a photo for a specific reason. It might be the way the kitchen joins the living room, the amount of bench space beside a basin or the balance of light and privacy. A few examples with a short note on each are useful when we discuss the brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Talk to us about your project",
      text: "",
      label: "Talk to us about your project",
    },
  },
  "/projects/altona/": {
    seoTitle: "Altona Bathroom Renovation Project | Forefront Trades Co.",
    meta: "Browse the Forefront Trades Co. project gallery in Altona and see what to look for as you plan your own bathroom renovation.",
    h1: "Altona bathroom renovation gallery",
    intro: [
      "A bathroom can look very different from one viewpoint to the next. Start with the wider images from our Altona project, then move in close to see how the fittings and finishes sit together.",
    ],
    sections: [
      {
        title: "Start with the layout",
        paras: [
          "As you look through the images, think about your own morning routine. Where would you put a towel as you step out of the shower? Do you need the mirror and basin to work for two people? Those questions are useful when you start talking about dimensions and clearances.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Look closely at the junctions",
        paras: [
          "Bathroom finishes sit against hard-working edges. Notice how wall finishes meet cabinetry and where fittings sit in relation to joints. If you save an image, make a note of the exact detail you’d like to discuss so it can be tested against your layout.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the practical questions with the photos",
        paras: [
          "Let us know if you’re working around an existing bath, tight doorway or plumbing you’d prefer to retain. We can discuss the condition of the room, what the layout might allow and which choices need a closer look.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Discuss your bathroom project",
      text: "",
      label: "Discuss your bathroom project",
    },
  },
  "/projects/bentleigh/": {
    seoTitle: "Bentleigh Renovation Project | Forefront Trades Co.",
    meta: "Follow the before and after walkthrough from Forefront Trades Co.’s Bentleigh renovation and see how to read a whole-home transformation.",
    h1: "Bentleigh renovation in before and after views",
    intro: [
      "A before-and-after walkthrough lets you get your bearings before looking at the finished rooms. Our Bentleigh project is recorded at several stages, with a separate walkthrough for a wider look at the property.",
    ],
    sections: [
      {
        title: "Follow the same route through each stage",
        paras: [
          "Watch the footage once for orientation. On the second viewing, follow a doorway, corner or window through the sequence. A fixed point makes it easier to understand what has moved, how one room relates to the next and how the same area looks once the surfaces are in place.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Think about which changes you want to feel",
        paras: [
          "Consider what would make the biggest difference in your own house. It could be seeing into the garden from the room you use most, finding somewhere for school bags or giving the kitchen a clear route to the dining table.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Discuss the brief behind your own renovation",
        paras: [
          "Bring a plan or a few images that explain where you get held up at home. If there are rooms or features you want to keep, include those too.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Discuss a whole-home renovation",
      text: "",
      label: "Discuss a whole-home renovation",
    },
  },
  "/projects/brookfield/": {
    seoTitle: "Brookfield Homeowner Project Story | Forefront Trades Co.",
    meta: "Hear a Brookfield homeowner’s perspective on working with Forefront Trades Co. and consider what you want from your own building project.",
    h1: "Brookfield project · the homeowner’s perspective",
    intro: [
      "The Brookfield project is told through the homeowner’s recorded testimonial. Their account sits alongside the project gallery so you can consider the experience of having building work done at home.",
    ],
    sections: [
      {
        title: "Watch with your own project in mind",
        paras: [
          "Before viewing the testimonial, write down the questions you’d want to ask someone who has been through a build. You might be interested in when decisions needed to be made, how the team communicated or what they learnt after the work was finished.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Make the details of your site part of the conversation",
        paras: [
          "A room-by-room wish list is a starting point. An equally useful list describes the site as it is today. Add notes about access, existing drawings, things you’re keeping and work that might need to happen together.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Find more project examples",
        paras: [
          "If you’d like to see how finishes and layouts come together, move from this homeowner story to the Footscray renovation gallery.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Ask about your renovation",
      text: "",
      label: "Ask about your renovation",
    },
  },
  "/projects/clifton-hill/": {
    seoTitle: "Clifton Hill Renovation Project | Forefront Trades Co.",
    meta: "Visit Forefront Trades Co.’s Clifton Hill project page and see how to start planning a renovation for an existing Melbourne home.",
    h1: "Clifton Hill project",
    intro: [
      "Clifton Hill has a place in our project gallery. If you arrived here from our earlier site and are looking for renovation ideas, the Footscray and Altona galleries are a good place to start.",
    ],
    sections: [
      {
        title: "Renovating an existing home",
        paras: [
          "Start with the rooms you want to change and the features you want to keep. Look at how you move through the house during the day. If a rear room is dark or a hallway does too much work, show us the part of the floor plan where that happens.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Check what may affect the design",
        paras: [
          "If you’re exploring changes to an older property, check the planning report for the specific address before settling on an addition or changes to its street-facing appearance. Take photos of the existing façade and roofline as part of your initial brief.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Ask us about your plans",
      text: "",
      label: "Ask us about your plans",
    },
  },
  "/projects/craigieburn/": {
    seoTitle: "Craigieburn Project | Forefront Trades Co.",
    meta: "Forefront Trades Co.’s Craigieburn project page with links to completed project galleries and help planning a renovation brief.",
    h1: "Craigieburn project",
    intro: [
      "The Craigieburn project is part of our planned project gallery. In the meantime, see the completed Footscray and Altona galleries for examples you can use when planning your own renovation.",
    ],
    sections: [
      {
        title: "See other completed work",
        paras: [
          "For an example of how a home’s living areas connect to the outdoors, view the Footscray renovation. If you’re planning a bathroom, start with the Altona gallery and note the details you’d like to discuss.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Bring the parts of your home that matter",
        paras: [
          "If you have ideas you’d like to explore, include photographs of the rooms as they are today, the layout if you have it and the reasons you want to make changes. This gives the first conversation a starting point.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Talk through your plans",
      text: "",
      label: "Talk through your plans",
    },
  },
  "/projects/footscray/": {
    seoTitle: "Footscray Home Renovation Project | Forefront Trades Co.",
    meta: "Explore a Forefront Trades Co. renovation in Footscray with timber floors, soft finishes and a connection from living areas to the outdoors.",
    h1: "A Footscray renovation with a quieter palette",
    intro: [
      "Daylight and a restrained set of finishes give this Footscray home a relaxed feel. Wide timber floorboards carry the eye through the open living spaces, with soft neutral tones and timber accents warming the rooms.",
    ],
    sections: [
      {
        title: "From the kitchen to the garden",
        paras: [
          "The home’s kitchen and living areas are worth viewing together. In the project photography, the flooring and palette connect the rooms, while generous glazing brings the outdoor area into view. The transition is part of the experience of the living room even when the doors are closed.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "A closer look at the rooms people use every day",
        paras: [
          "The project library includes dedicated views of the kitchen, bathroom and laundry. Start with the wide shots to see how each room is organised, then look more closely at the junctions between the joinery, fixtures and finishes.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Ideas to take into your own brief",
        paras: [
          "If the light is what draws you to this project, note where you’d like more of it in your home and when you use that room. If it’s the outlook, trace the path you take from the kitchen to the garden. Those observations give your designer a place to start.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Discuss your Footscray renovation",
      text: "",
      label: "Discuss your Footscray renovation",
    },
  },
  "/projects/west-footscray/": {
    seoTitle: "West Footscray Renovation Story | Forefront Trades Co.",
    meta: "Hear the homeowner’s perspective on a Forefront Trades Co. project in West Footscray and prepare questions for your own renovation.",
    h1: "A West Footscray homeowner’s renovation story",
    intro: [
      "You can see the finish in a photograph. Hearing from the person who lived through the work gives you a different way to judge what matters before you start your own renovation.",
    ],
    sections: [
      {
        title: "Hear directly from the homeowner",
        paras: [
          "Watch the West Footscray testimonial for the owner’s own account. As you listen, think about what you would want to know on your own job. Ask who you’ll speak to about site progress, how a change in scope is documented and what happens at handover.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Plan around your household",
        paras: [
          "Think through which areas you need to keep using, from a second bathroom to the route to the back door. Share any work-from-home arrangements or times when access matters. It helps to bring those details into the first project discussion.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Next steps for a West Footscray home",
        paras: [
          "If you’re looking at a wider change to your property, start with our West Footscray renovations and extensions page for the design and planning questions to consider.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Tell us about your West Footscray project",
      text: "",
      label: "Tell us about your West Footscray project",
    },
  },
  "/reviews/": {
    seoTitle: "Homeowner Reviews | Forefront Trades Co.",
    meta: "Read homeowner feedback and watch project testimonials about working with Forefront Trades Co. on Melbourne home renovations and extensions.",
    h1: "Hear from the people who live in the finished homes",
    intro: [
      "When you choose a builder, it helps to hear what the experience was like for the people who had work going on in their home. Read the reviews alongside the project galleries and make a note of the things you’d want to ask about your own build.",
    ],
    sections: [
      {
        title: "Read homeowner reviews",
        paras: [
          "Look for feedback on the details that matter to you, such as the way changes were communicated, how the house was treated during the work or the attention paid to the final finishes.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Watch the homeowner stories",
        paras: [
          "The Footscray, West Footscray and Brookfield project footage gives homeowners a chance to describe their experience in their own words. Watch the story that’s closest to the kind of work you’re considering, then look at the wider project gallery.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Ask how your project would be handled",
        paras: [
          "Every project has its own decisions. Tell us what you’re concerned about, from living at home during the works to working with drawings you already have. We can discuss how the build could be planned and what would need to be confirmed.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [],
    cta: {
      title: "Talk with the Forefront team",
      text: "",
      label: "Talk with the Forefront team",
    },
  },
  "/warranty-and-insurance/": {
    seoTitle: "Building Warranties & Insurance in Victoria | Forefront",
    meta: "Understand Victoria’s Home Warranty and Domestic Building Insurance schemes and the documents to ask about for your renovation.",
    h1: "Warranties and insurance for your renovation",
    intro: [
      "A renovation involves several kinds of protection. Before work starts, ask which protections apply to the contract, which documents you’ll receive and where to turn if you need help after handover.",
    ],
    sections: [
      {
        title: "Start with your contract",
        paras: [
          "Read the scope, inclusions, payment schedule and procedure for variations. Ask about any written workmanship or maintenance commitments and what the handover pack will include. Where products carry their own warranties, keep the product paperwork with the rest of your project records.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Home Warranty and Domestic Building Insurance",
        paras: [
          "Victoria introduced Home Warranty for new eligible contracts signed on or after 1 July 2026. The Building and Plumbing Commission states it applies to eligible domestic building work valued at more than $20,000. Existing Domestic Building Insurance policies continue under their own terms. Your contract date and the eligibility of your project matter, so ask which evidence of cover you should receive and check the regulator’s current guidance.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "Your rights under the law",
        paras: [
          "Consumer Affairs Victoria explains the implied warranties that apply to domestic building work. The Australian Consumer Law also provides consumer guarantees. Keep your contract, correspondence, variations and certificates together so you can refer to them if an issue comes up.",
        ],
        items: [],
        steps: [],
      },
      {
        title: "After handover",
        paras: [
          "Contact us with a clear description of the issue, when you noticed it and any relevant photos or documents. We can refer to the project records and discuss the next step.",
        ],
        items: [],
        steps: [],
      },
    ],
    faqs: [
      {
        q: "Where can I check the cover for my project?",
        a: "Start with the Building and Plumbing Commission’s current guidance. Check the address and details on the notice or certificate you receive for your own project.",
      },
    ],
    cta: {
      title: "Ask about your project documents",
      text: "",
      label: "Ask about your project documents",
    },
  },
};

/** The copy for a path, if the set has one. */
export const copyFor = (path: string): PageCopy | undefined => pageCopy[path];
