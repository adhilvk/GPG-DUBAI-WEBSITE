/**
 * Shared data for /retails listing and /retails/[slug] detail pages.
 */

const paragraph = (lines) => lines.join("\n\n");

export const RETAIL_LISTINGS = [
  {
    slug: "downtown-boulevard-retail-unit",
    id: "r1",
    images: ["/images/palmcentral.jpg", "/images/Riverside.jpg", "/images/heightsbyemaar.webp"],
    price: 4950000,
    features: "HIGH FOOTFALL | SHELL & CORE | PRIME FRONTAGE",
    location: "Downtown Dubai, Boulevard Retail",
    mapQuery: "Downtown Dubai, Dubai",
    beds: 1,
    baths: 1,
    sqft: 1620,
    dldPermit: "71694209200",
    orn: "28621",
    agentName: "Sarah Al-Mansoori",
    agentPhoto: "https://i.pravatar.cc/320?img=47",
    description: paragraph([
      "A shell-and-core retail unit on Boulevard frontage in Downtown Dubai, positioned for premium brand visibility and sustained walk-in traffic.",
      "The location benefits from year-round tourist flow, nearby hotels, and dense residential catchment within minutes.",
      "Strong opportunity for F&B, boutique retail, or flagship service concepts seeking central district positioning.",
    ]),
  },
  {
    slug: "business-bay-promenade-retail",
    id: "r2",
    images: ["/images/heightsbyemaar.webp", "/images/grandpolo.webp", "/images/palmcentral.jpg"],
    price: 3450000,
    features: "WATERFRONT | FITTED | READY TO OPERATE",
    location: "Business Bay, Canal Promenade",
    mapQuery: "Business Bay, Dubai",
    beds: 1,
    baths: 2,
    sqft: 1385,
    dldPermit: "71694209201",
    orn: "28622",
    agentName: "James Okonkwo",
    agentPhoto: "https://i.pravatar.cc/320?img=12",
    description: paragraph([
      "A fitted waterfront retail unit in Business Bay with excellent street exposure and strong evening/weekend activation potential.",
      "Canal Promenade assets continue to attract wellness, specialty food, and lifestyle occupiers due to dense office-residential mix.",
      "Suitable for owner-operators and investors targeting mid-ticket commercial inventory in a proven micro-market.",
    ]),
  },
  {
    slug: "jvc-community-retail-shop",
    id: "r3",
    images: ["/images/grandpolo.webp", "/images/palmcentral.jpg", "/images/Riverside.jpg"],
    price: 2100000,
    features: "COMMUNITY CENTER | TENANTED | STABLE YIELD",
    location: "JVC, District 15 Retail Strip",
    mapQuery: "Jumeirah Village Circle, Dubai",
    beds: 1,
    baths: 1,
    sqft: 980,
    dldPermit: "71694209202",
    orn: "28623",
    agentName: "Elena Vasquez",
    agentPhoto: "https://i.pravatar.cc/320?img=45",
    description: paragraph([
      "A compact tenanted retail shop in JVC with neighborhood-serving demand and recurring consumer traffic from surrounding apartment clusters.",
      "The unit is positioned in a community strip with convenience-led tenant profile and lower vacancy volatility.",
      "Attractive for buyers seeking cash-flow-oriented retail exposure at accessible entry pricing.",
    ]),
  },
  {
    slug: "dubai-marina-ground-floor-retail",
    id: "r4",
    images: ["/images/Riverside.jpg", "/images/heightsbyemaar.webp", "/images/grandpolo.webp"],
    price: 6250000,
    features: "MARINA WALK | CORNER UNIT | LICENSE READY",
    location: "Dubai Marina, Marina Walk",
    mapQuery: "Dubai Marina, Dubai",
    beds: 1,
    baths: 2,
    sqft: 1840,
    dldPermit: "71694209203",
    orn: "28624",
    agentName: "Sarah Al-Mansoori",
    agentPhoto: "https://i.pravatar.cc/320?img=47",
    description: paragraph([
      "A corner retail unit on Marina Walk with dual-side visibility and a layout suitable for destination F&B or experiential retail.",
      "Dubai Marina continues to perform as one of the citys strongest mixed-use tourism and residential corridors.",
      "Ideal for operators prioritising footfall intensity and all-day consumer demand dynamics.",
    ]),
  },
  {
    slug: "mirdif-avenue-neighborhood-retail",
    id: "r5",
    images: ["/images/palmcentral.jpg", "/images/grandpolo.webp", "/images/heightsbyemaar.webp"],
    price: 1780000,
    features: "NEIGHBORHOOD RETAIL | FITTED | VALUE ENTRY",
    location: "Mirdif, Avenue Mall Cluster",
    mapQuery: "Mirdif, Dubai",
    beds: 1,
    baths: 1,
    sqft: 905,
    dldPermit: "71694209204",
    orn: "28625",
    agentName: "James Okonkwo",
    agentPhoto: "https://i.pravatar.cc/320?img=12",
    description: paragraph([
      "A fitted neighborhood retail unit in Mirdif serving a mature residential catchment with strong daily-needs demand.",
      "The location is suitable for pharmacy, convenience, salon, or service-based concepts with predictable repeat traffic.",
      "A practical option for first-time commercial investors looking for lower ticket size and operational flexibility.",
    ]),
  },
  {
    slug: "expo-city-boulevard-retail",
    id: "r6",
    images: ["/images/heightsbyemaar.webp", "/images/palmcentral.jpg", "/images/Riverside.jpg"],
    price: 2890000,
    features: "NEW DISTRICT | BOULEVARD FACING | GROWTH CORRIDOR",
    location: "Expo City Dubai, Mobility District",
    mapQuery: "Expo City Dubai",
    beds: 1,
    baths: 1,
    sqft: 1210,
    dldPermit: "71694209205",
    orn: "28626",
    agentName: "Elena Vasquez",
    agentPhoto: "https://i.pravatar.cc/320?img=45",
    description: paragraph([
      "A boulevard-facing retail unit in Expo City positioned within one of Dubai's fastest-evolving innovation and events corridors.",
      "The district is attracting office users, institutions, and new residential inventory, supporting medium-term consumer demand growth.",
      "Best suited for investors seeking early positioning in an emerging prime commercial node.",
    ]),
  },
];

export function getRetailBySlug(slug) {
  return RETAIL_LISTINGS.find((p) => p.slug === slug) ?? null;
}

export function getRelatedRetails(currentSlug, limit = 3) {
  return RETAIL_LISTINGS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
