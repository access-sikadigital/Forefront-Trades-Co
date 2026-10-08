/**
 * Google reviews for Forefront Trades Co., copied verbatim from the client's own
 * Trustindex widget (id fff4f38167c297683e363b3b1b7, which pulls from Google).
 * Snapshot taken 8 Oct 2026 — refresh this list when new reviews come in, or swap
 * for a live feed (Google Places API) once an API key is available.
 */
export const GOOGLE_PLACE_ID = "ChIJndT4bCtf1moR-PgVhl7p7qE";

export const googleReviews = {
  summary: { label: "Excellent", count: 39 },
  readAllUrl: `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`,
  writeUrl: `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`,
  items: [
    {
      name: "Gokce Kizilcik",
      date: "3 September 2026",
      rating: 5,
      text: "Tony and his team were very precise and did most of the thinking for me",
    },
    {
      name: "Eray Can",
      date: "2 July 2026",
      rating: 5,
      text: "The team are truly awesome! Could not recommend highly enough, they helped me out in a pinch. Went above & beyond to ensure everything went smoothly without hiccups. They were persistent & hardworking. Some of the most kind, generous & caring tradies I've met who genuinely went out of their way to help me out.",
    },
    {
      name: "Chris Williams",
      date: "11 September 2025",
      rating: 5,
      text: "A highly recommended company. We employed Forefront Trades Co to design a complete laundry renovation. This firm project manages renovations from start to finish and what a professional team they have on board. Demolition of existing laundry, and then as required, they had a Plumber, Electrician, Plasterer, Painter, Cabinet Maker and a Tiler to perform the renovation. We were kept in the loop as to the day and time each tradie would be onsite. We are now considering an ensuite renovation and look forward to once again dealing with Forefront Trades Co.",
    },
    {
      name: "Pat Iliopoulos",
      date: "29 March 2025",
      rating: 5,
      text: "I recently had my shower renovated by forefront traders and couldn't be more thrilled with the results, from start to finish, the entire process was smooth, professional and exceeded my expectations. The team was incredibly knowledgeable, taking time to explain the design options and material available. The quality of work is evident in every detail, installation was done on schedule and the crew were respectful of my home keeping the area clean and minimizing disruption. Overall I highly recommend Forefront Traders for any shower/bathroom renovation, project. Truly outstanding customer service made the entire experience a great one. Thankyou Anthony and Co…..",
    },
    {
      // Reviewer's Google display name is "x0 x0".
      name: "Google reviewer",
      date: "4 July 2024",
      rating: 5,
      text: "A dedicated team of professionals who completed the job on time with nothing being too much trouble for them. Highly recommend this business and will definitely use them again in future - thanks to all involved!",
    },
  ],
} as const;
