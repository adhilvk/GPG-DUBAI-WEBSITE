/**
 * Shared data for /villas listing and /villas/[slug] detail pages.
 */

const paragraph = (lines) => lines.join("\n\n");

export const VILLA_LISTINGS = [
  {
    slug: "emirates-hills-park-villa",
    id: "v1",
    images: ["/images/palmcentral.jpg", "/images/grandpolo.webp", "/images/heightsbyemaar.webp"],
    price: 28500000,
    features: "GOLF VIEW | PRIVATE POOL | BESPOKE FINISHES",
    location: "Emirates Hills, Parkside",
    mapQuery: "Emirates Hills, Dubai",
    beds: 6,
    baths: 7,
    sqft: 12500,
    dldPermit: "71694209000",
    orn: "28511",
    agentName: "Sarah Al-Mansoori",
    agentPhoto: "https://i.pravatar.cc/320?img=47",
    description: paragraph([
      "An exceptional six-bedroom villa in Emirates Hills with golf-facing orientation, private pool, and bespoke interior finishes throughout.",
      "Emirates Hills remains one of Dubai's most exclusive villa districts, offering privacy, mature landscaping, and proximity to Montgomerie golf.",
      "Ideal for UHNW buyers seeking trophy stock with strong long-term capital preservation in a gated community.",
    ]),
  },
  {
    slug: "palm-jumeirah-signature-villa",
    id: "v2",
    images: ["/images/prop2.jpg", "/images/palmcentral.jpg", "/images/grandpolo.webp"],
    price: 42000000,
    features: "BEACH ACCESS | FROND G | UPGRADED",
    location: "Palm Jumeirah, Frond G",
    mapQuery: "Palm Jumeirah, Dubai",
    beds: 5,
    baths: 6,
    sqft: 9800,
    dldPermit: "71694209001",
    orn: "28512",
    agentName: "James Okonkwo",
    agentPhoto: "https://i.pravatar.cc/320?img=12",
    description: paragraph([
      "A fully upgraded five-bedroom signature villa on Palm Jumeirah with direct beach access, expansive terraces, and panoramic sea views.",
      "The Palm continues to command premium liquidity for beachfront living with world-class dining and hospitality at your doorstep.",
      "Suited to international buyers prioritising lifestyle, privacy, and iconic Dubai waterfront positioning.",
    ]),
  },
  {
    slug: "dubai-hills-mansion",
    id: "v3",
    images: ["/images/heightsbyemaar.webp", "/images/prop5.webp", "/images/palmcentral.jpg"],
    price: 15700000,
    features: "GOLF COURSE | SMART HOME | CORNER PLOT",
    location: "Dubai Hills Estate, Parkway",
    mapQuery: "Dubai Hills Estate, Dubai",
    beds: 5,
    baths: 6,
    sqft: 7200,
    dldPermit: "71694209002",
    orn: "28513",
    agentName: "Elena Vasquez",
    agentPhoto: "https://i.pravatar.cc/320?img=45",
    description: paragraph([
      "A five-bedroom corner mansion in Dubai Hills Estate overlooking the championship golf course with smart-home integration and generous plot size.",
      "Residents enjoy Dubai Hills Mall, schools, and hospital assets within the master community, supporting family and investment use cases.",
      "Compelling for buyers seeking newer villa stock with institutional governance and strong rental comparables.",
    ]),
  },
  {
    slug: "arabian-ranches-3-villa",
    id: "v4",
    images: ["/images/grandpolo.webp", "/images/Riverside.jpg", "/images/prop4.jpeg"],
    price: 8900000,
    features: "POOL | MAID'S ROOM | VACANT ON TRANSFER",
    location: "Arabian Ranches 3, Bliss",
    mapQuery: "Arabian Ranches 3, Dubai",
    beds: 4,
    baths: 5,
    sqft: 4100,
    dldPermit: "71694209003",
    orn: "28514",
    agentName: "Sarah Al-Mansoori",
    agentPhoto: "https://i.pravatar.cc/320?img=47",
    description: paragraph([
      "A four-bedroom villa in Arabian Ranches 3 with private pool, maid's quarters, and immediate occupancy on transfer.",
      "The community offers polo fields, schools, and retail within Emaar's established family-oriented masterplan.",
      "Strong hold for end-users seeking community, schools, and proven resale liquidity in a mature district.",
    ]),
  },
  {
    slug: "sobha-hartland-forest-villa",
    id: "v5",
    images: ["/images/prop2.jpg", "/images/heightsbyemaar.webp", "/images/grandpolo.webp"],
    price: 25700000,
    features: "CUSTOM BUILT | PREMIUM FINISHES | 4 BR",
    location: "Forest Villas, Sobha Hartland",
    mapQuery: "Sobha Hartland, Dubai",
    beds: 4,
    baths: 5,
    sqft: 5029,
    dldPermit: "71694209004",
    orn: "28515",
    agentName: "James Okonkwo",
    agentPhoto: "https://i.pravatar.cc/320?img=12",
    description: paragraph([
      "A custom-built four-bedroom villa in Forest Villas, Sobha Hartland, with premium finishes and landscaped private gardens.",
      "Sobha Hartland bridges Downtown and Ras Al Khor Wildlife Sanctuary, offering a green, low-density villa environment.",
      "Attractive for discerning buyers seeking boutique villa stock with quality construction and central connectivity.",
    ]),
  },
  {
    slug: "damac-hills-trump-villa",
    id: "v6",
    images: ["/images/Riverside.jpg", "/images/palmcentral.jpg", "/images/prop3.jpg"],
    price: 11200000,
    features: "GOLF VIEW | PRIVATE GARDEN | HANDOVER 2026",
    location: "Trump Estates, Damac Hills",
    mapQuery: "Damac Hills, Dubai",
    beds: 5,
    baths: 6,
    sqft: 5800,
    dldPermit: "71694209005",
    orn: "28516",
    agentName: "Elena Vasquez",
    agentPhoto: "https://i.pravatar.cc/320?img=45",
    description: paragraph([
      "A five-bedroom villa in Trump Estates, Damac Hills, with golf views, private garden, and a layout designed for indoor-outdoor entertaining.",
      "Damac Hills combines championship golf, community retail, and strong connectivity to Dubai's key employment hubs.",
      "Well suited to investors and end-users targeting golf-community villa exposure with clear handover visibility.",
    ]),
  },
];

export function getVillaBySlug(slug) {
  return VILLA_LISTINGS.find((p) => p.slug === slug) ?? null;
}

export function getRelatedVillas(currentSlug, limit = 3) {
  return VILLA_LISTINGS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
