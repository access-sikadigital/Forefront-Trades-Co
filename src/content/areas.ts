/**
 * Service area — the client's 42 suburbs, grouped by council (Sitemap v2,
 * "Suburb Tiers" sheet). Each suburb has a planned hub page at
 * /home-renovations/<slug>/ (not built yet, so suburbs are not linked).
 */
export type Council = { council: string; suburbs: readonly string[] };

export const serviceArea: readonly Council[] = [
  {
    council: "Maribyrnong",
    suburbs: [
      "Braybrook",
      "Footscray",
      "Kingsville",
      "Maidstone",
      "Maribyrnong",
      "Seddon",
      "Tottenham",
      "West Footscray",
      "Yarraville"
    ]
  },
  {
    council: "Moonee Valley",
    suburbs: [
      "Aberfeldie",
      "Airport West",
      "Ascot Vale",
      "Avondale Heights",
      "Essendon",
      "Essendon North",
      "Essendon West",
      "Flemington",
      "Keilor East",
      "Moonee Ponds",
      "Niddrie",
      "Strathmore",
      "Strathmore Heights",
      "Travancore"
    ]
  },
  {
    council: "Merri-bek",
    suburbs: [
      "Brunswick",
      "Brunswick West",
      "Pascoe Vale",
      "Pascoe Vale South"
    ]
  },
  {
    council: "Hobsons Bay",
    suburbs: [
      "Altona North",
      "Brooklyn",
      "Newport",
      "South Kingsville",
      "Spotswood"
    ]
  },
  {
    council: "Brimbank",
    suburbs: [
      "Albion",
      "Sunshine",
      "Sunshine North",
      "Sunshine West"
    ]
  },
  {
    council: "City of Melbourne",
    suburbs: [
      "Docklands",
      "Kensington",
      "Melbourne CBD",
      "North Melbourne",
      "Parkville",
      "West Melbourne"
    ]
  }
];

export const suburbCount = 42;

export const suburbSlug = (name: string) => name.toLowerCase().replace(/ /g, "-");

// TODO(client): call-out fee / travel policy for jobs outside this list (suggested in client feedback).
export const outsideArea = {
  title: "Outside these suburbs?",
  text: "We take on larger renovations and extensions further out too, like our projects in Craigieburn and Point Cook. Call us and we'll tell you straight away whether we can help.",
};
