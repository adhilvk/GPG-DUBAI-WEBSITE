/**
 * Shared data for /apartments listing and /apartments/[slug] detail pages.
 * Add slug + extended fields for each new property.
 */

const paragraph = (lines) => lines.join("\n\n");

export const APARTMENT_LISTINGS = [
  {
    slug: "hills-park-dubai-hills-estate",
    id: "1",
    images: [
      "/images/heightsbyemaar.webp",
      "/images/palmcentral.jpg",
      "/images/grandpolo.webp",
    ],
    price: 1600000,
    features: "POOL VIEW | MIDDLE FLOOR | HIGH ROI",
    location: "Hills Park, Dubai Hills Estate",
    mapQuery: "Hills Park, Dubai Hills Estate, Dubai",
    beds: 1,
    baths: 1,
    sqft: 673,
    dldPermit: "71694208800",
    orn: "28491",
    agentName: "Sarah Al-Mansoori",
    agentPhoto: "https://i.pravatar.cc/320?img=47",
    description: paragraph([
      "This contemporary apartment in Hills Park offers park-facing views, generous glazing, and a layout suited to end-users and investors alike. The community is known for landscaped walkways, family amenities, and strong connectivity to Dubai Hills Mall and major road links.",
      "The unit is positioned for natural light throughout the day, with a practical kitchen flow and living space that opens visually toward the green belt. Residents enjoy access to pools, fitness facilities, and retail within the wider Dubai Hills Estate masterplan.",
      "Ideal for those seeking a turnkey lifestyle in one of Dubai’s most established master communities, with institutional-grade documentation and a transparent handover pathway.",
    ]),
  },
  {
    slug: "marina-views-dubai-marina",
    id: "2",
    images: [
      "/images/palmcentral.jpg",
      "/images/Riverside.jpg",
      "/images/heightsbyemaar.webp",
    ],
    price: 3950000,
    features: "MARINA VIEW | CORNER UNIT | BRANDED",
    location: "Marina Views, Dubai Marina",
    mapQuery: "Dubai Marina, Dubai",
    beds: 2,
    baths: 2,
    sqft: 1223,
    dldPermit: "71694208801",
    orn: "28492",
    agentName: "James Okonkwo",
    agentPhoto: "https://i.pravatar.cc/320?img=12",
    description: paragraph([
      "A premium two-bedroom residence with marina outlooks and a corner footprint that maximises glazing and natural ventilation. Branded finishes and a well-zoned layout create a strong rental and resale profile in a high-demand micro-market.",
      "Dubai Marina remains a flagship lifestyle district with dining, yachting, and beach access within minutes. The tower’s amenity stack supports both residents and long-stay guests.",
      "Suited to buyers prioritising location, liquidity, and a clear service-charge structure with established building management.",
    ]),
  },
  {
    slug: "south-bay-dubai-south",
    id: "3",
    images: [
      "/images/grandpolo.webp",
      "/images/heightsbyemaar.webp",
      "/images/Riverside.jpg",
    ],
    price: 16000000,
    features: "PRIVATE BEACH | SMART HOME | GOLF",
    location: "South Bay, Dubai South",
    mapQuery: "Dubai South, Dubai",
    beds: 6,
    baths: 7,
    sqft: 11217,
    dldPermit: "71694208802",
    orn: "28493",
    agentName: "Elena Vasquez",
    agentPhoto: "https://i.pravatar.cc/320?img=45",
    description: paragraph([
      "An expansive villa proposition within Dubai South’s emerging luxury cluster, combining private outdoor space, smart-home infrastructure, and proximity to key logistics and aviation corridors.",
      "The layout supports multi-generational living with clear separation between entertainment, service, and bedroom wings. High ceilings and full-height glass reinforce the sense of scale.",
      "For institutional buyers and UHNW end-users seeking long-term optionality alongside Expo District and Al Maktoum International Airport growth themes.",
    ]),
  },
  {
    slug: "emaar-south-dubai-south",
    id: "4",
    images: [
      "/images/Riverside.jpg",
      "/images/grandpolo.webp",
      "/images/palmcentral.jpg",
    ],
    price: 2100000,
    features: "PARK FACING | HIGH CEILINGS | Q4 HANDOVER",
    location: "Emaar South, Dubai South",
    mapQuery: "Emaar South, Dubai",
    beds: 3,
    baths: 3,
    sqft: 1840,
    dldPermit: "71694208803",
    orn: "28494",
    agentName: "Sarah Al-Mansoori",
    agentPhoto: "https://i.pravatar.cc/320?img=47",
    description: paragraph([
      "A three-bedroom townhouse-style product with park-facing orientation and elevated ceiling heights that improve volume and daylight penetration.",
      "Emaar South continues to attract families and investors balancing affordability with Emaar master-developer governance and long-term community planning.",
      "Strong fit for buyers targeting handover in the near term with mortgage-ready structures and predictable payment plans.",
    ]),
  },
  {
    slug: "sobha-hartland-mbr-city",
    id: "5",
    images: [
      "/images/heightsbyemaar.webp",
      "/images/Riverside.jpg",
      "/images/palmcentral.jpg",
    ],
    price: 1800000,
    features: "CANAL VIEW | FULLY FITTED | INVESTOR DEAL",
    location: "Sobha Hartland, MBR City",
    mapQuery: "Sobha Hartland, Mohammed Bin Rashid City, Dubai",
    beds: 2,
    baths: 2,
    sqft: 945,
    dldPermit: "71694208804",
    orn: "28495",
    agentName: "James Okonkwo",
    agentPhoto: "https://i.pravatar.cc/320?img=12",
    description: paragraph([
      "A canal-view apartment in Sobha Hartland with fully fitted specifications and an investor-friendly entry basis relative to comparable MBR City inventory.",
      "The community integrates schools, green spine, and wellness amenities with strong connectivity to Downtown and Business Bay.",
      "Well suited to first-time Dubai investors and end-users prioritising build quality and long-term developer reputation.",
    ]),
  },
  {
    slug: "dubai-hills-estate-apartment",
    id: "6",
    images: [
      "/images/palmcentral.jpg",
      "/images/heightsbyemaar.webp",
      "/images/grandpolo.webp",
    ],
    price: 4500000,
    features: "GOLF VIEW | VASTU | SINGLE ROW",
    location: "Dubai Hills Estate",
    mapQuery: "Dubai Hills Estate, Dubai",
    beds: 4,
    baths: 5,
    sqft: 3420,
    dldPermit: "71694208805",
    orn: "28496",
    agentName: "Elena Vasquez",
    agentPhoto: "https://i.pravatar.cc/320?img=45",
    description: paragraph([
      "A four-bedroom residence with golf-course outlooks, single-row privacy, and a layout aligned to Vastu-informed planning preferences where applicable.",
      "Dubai Hills Estate remains a core institutional allocation for family buyers seeking schools, healthcare, and retail within a single masterplan.",
      "The unit’s scale and finish level position it for both long-term occupation and trophy-asset holding within a diversified real estate book.",
    ]),
  },
];

export function getListingBySlug(slug) {
  return APARTMENT_LISTINGS.find((p) => p.slug === slug) ?? null;
}

export function getRelatedListings(currentSlug, limit = 3) {
  return APARTMENT_LISTINGS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
