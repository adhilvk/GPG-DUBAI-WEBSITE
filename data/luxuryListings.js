/**
 * Shared data for /luxury-properties listing and /luxury-properties/[slug] detail pages.
 */

const paragraph = (lines) => lines.join("\n\n");

export const LUXURY_LISTINGS = [
  {
    slug: "palm-jumeirah-signature-mansion",
    id: "l1",
    images: ["/images/prop2.jpg", "/images/palmcentral.jpg", "/images/heightsbyemaar.webp"],
    price: 65000000,
    features: "PRIVATE BEACH | BESPOKE INTERIORS | ULTRA PRIME",
    location: "Palm Jumeirah, Frond N",
    mapQuery: "Palm Jumeirah, Dubai",
    beds: 6,
    baths: 8,
    sqft: 14500,
    dldPermit: "71694209300",
    orn: "28641",
    agentName: "Elena Vasquez",
    agentPhoto: "https://i.pravatar.cc/320?img=45",
    description: paragraph([
      "An ultra-prime beachfront mansion on Palm Jumeirah with private shoreline access, bespoke imported finishes, and expansive entertainment spaces.",
      "The residence combines privacy with iconic waterfront positioning, suited to primary occupation or legacy-asset holding.",
      "Designed for UHNW buyers prioritising exclusivity, scale, and long-term value retention in one of Dubai's most recognised luxury enclaves.",
    ]),
  },
  {
    slug: "emirates-hills-lakefront-estate",
    id: "l2",
    images: ["/images/heightsbyemaar.webp", "/images/grandpolo.webp", "/images/Riverside.jpg"],
    price: 78000000,
    features: "LAKEFRONT | CUSTOM BUILT | GOLF DISTRICT",
    location: "Emirates Hills, Sector E",
    mapQuery: "Emirates Hills, Dubai",
    beds: 7,
    baths: 9,
    sqft: 18200,
    dldPermit: "71694209301",
    orn: "28642",
    agentName: "Sarah Al-Mansoori",
    agentPhoto: "https://i.pravatar.cc/320?img=47",
    description: paragraph([
      "A custom-built lakefront estate in Emirates Hills with formal entertaining zones, private wellness suite, and landscaped grounds.",
      "Emirates Hills remains a benchmark for trophy villa ownership with mature greenery, elite privacy, and golf-course adjacency.",
      "A rare institutional-grade acquisition opportunity in one of the city's most tightly held villa districts.",
    ]),
  },
  {
    slug: "district-one-lagoon-villa",
    id: "l3",
    images: ["/images/palmcentral.jpg", "/images/Riverside.jpg", "/images/grandpolo.webp"],
    price: 32000000,
    features: "CRYSTAL LAGOON | SMART HOME | CONTEMPORARY DESIGN",
    location: "District One, MBR City",
    mapQuery: "District One, Mohammed Bin Rashid City, Dubai",
    beds: 5,
    baths: 7,
    sqft: 10250,
    dldPermit: "71694209302",
    orn: "28643",
    agentName: "James Okonkwo",
    agentPhoto: "https://i.pravatar.cc/320?img=12",
    description: paragraph([
      "A contemporary lagoon-facing villa in District One with integrated smart systems, minimalist architecture, and premium interior specifications.",
      "The community offers private security, waterfront living, and quick access to Downtown and DIFC business corridors.",
      "Ideal for buyers seeking modern design language with central connectivity and premium lifestyle infrastructure.",
    ]),
  },
  {
    slug: "jumeirah-bay-island-villa",
    id: "l4",
    images: ["/images/prop4.jpeg", "/images/heightsbyemaar.webp", "/images/palmcentral.jpg"],
    price: 92000000,
    features: "ISLAND ADDRESS | SEA VIEW | LIMITED SUPPLY",
    location: "Jumeirah Bay Island",
    mapQuery: "Jumeirah Bay Island, Dubai",
    beds: 6,
    baths: 8,
    sqft: 16080,
    dldPermit: "71694209303",
    orn: "28644",
    agentName: "Elena Vasquez",
    agentPhoto: "https://i.pravatar.cc/320?img=45",
    description: paragraph([
      "A sea-view island villa on Jumeirah Bay with exceptional privacy, architectural scale, and direct proximity to world-class hospitality.",
      "Jumeirah Bay inventory is highly limited, supporting scarcity-driven long-term capital resilience.",
      "A flagship asset suited to global buyers building a top-tier Dubai residential portfolio.",
    ]),
  },
  {
    slug: "dubai-hills-golf-mansion",
    id: "l5",
    images: ["/images/prop5.webp", "/images/grandpolo.webp", "/images/Riverside.jpg"],
    price: 36500000,
    features: "CHAMPIONSHIP GOLF VIEW | ELEVATOR | HOME CINEMA",
    location: "Dubai Hills Estate, Golf Place",
    mapQuery: "Dubai Hills Estate, Dubai",
    beds: 6,
    baths: 8,
    sqft: 13200,
    dldPermit: "71694209304",
    orn: "28645",
    agentName: "Sarah Al-Mansoori",
    agentPhoto: "https://i.pravatar.cc/320?img=47",
    description: paragraph([
      "A golf-facing mansion in Dubai Hills with elevator access, entertainment basement, and premium family-oriented floor planning.",
      "The location combines luxury villa living with high-quality schools, healthcare, and retail within one integrated masterplan.",
      "An excellent choice for end-users wanting a contemporary mansion in an established prime community.",
    ]),
  },
  {
    slug: "al-barari-forest-villa",
    id: "l6",
    images: ["/images/Riverside.jpg", "/images/prop3.jpg", "/images/heightsbyemaar.webp"],
    price: 28500000,
    features: "BOTANICAL SETTING | PRIVATE POOL | RESORT FEEL",
    location: "Al Barari, The Nest",
    mapQuery: "Al Barari, Dubai",
    beds: 5,
    baths: 7,
    sqft: 9700,
    dldPermit: "71694209305",
    orn: "28646",
    agentName: "James Okonkwo",
    agentPhoto: "https://i.pravatar.cc/320?img=12",
    description: paragraph([
      "A luxury villa in Al Barari surrounded by mature greenery, with private pool terraces and a wellness-focused layout.",
      "Al Barari is known for low-density planning and a resort-style atmosphere that appeals to privacy-focused buyers.",
      "Well suited for lifestyle-led purchasers seeking a distinct alternative to dense urban luxury districts.",
    ]),
  },
];

export function getLuxuryBySlug(slug) {
  return LUXURY_LISTINGS.find((p) => p.slug === slug) ?? null;
}

export function getRelatedLuxury(currentSlug, limit = 3) {
  return LUXURY_LISTINGS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
