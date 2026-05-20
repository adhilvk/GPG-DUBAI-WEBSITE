/**
 * Shared data for /ready-properties listing and /ready-properties/[slug] detail pages.
 */

const paragraph = (lines) => lines.join("\n\n");

export const READY_LISTINGS = [
  {
    slug: "downtown-ready-apartment-burj-view",
    id: "rp1",
    images: ["/images/palmcentral.jpg", "/images/heightsbyemaar.webp", "/images/Riverside.jpg"],
    price: 3250000,
    features: "READY TO MOVE | BURJ VIEW | HIGH FLOOR",
    location: "Downtown Dubai, Opera District",
    mapQuery: "Downtown Dubai, Dubai",
    beds: 2,
    baths: 2,
    sqft: 1345,
    dldPermit: "71694209400",
    orn: "28661",
    agentName: "Sarah Al-Mansoori",
    agentPhoto: "https://i.pravatar.cc/320?img=47",
    description: paragraph([
      "A high-floor ready apartment in Downtown Dubai with direct skyline exposure and immediate occupancy availability.",
      "The unit offers strong end-user appeal with premium amenities and proximity to major lifestyle and business hubs.",
      "Well suited for buyers seeking turnkey city living without construction wait times.",
    ]),
  },
  {
    slug: "dubai-hills-ready-villa",
    id: "rp2",
    images: ["/images/prop5.webp", "/images/grandpolo.webp", "/images/palmcentral.jpg"],
    price: 11800000,
    features: "VACANT ON TRANSFER | GOLF COMMUNITY | UPGRADED",
    location: "Dubai Hills Estate, Maple",
    mapQuery: "Dubai Hills Estate, Dubai",
    beds: 5,
    baths: 6,
    sqft: 5920,
    dldPermit: "71694209401",
    orn: "28662",
    agentName: "Elena Vasquez",
    agentPhoto: "https://i.pravatar.cc/320?img=45",
    description: paragraph([
      "An upgraded ready villa in Dubai Hills Estate offered vacant on transfer with modernized interiors and landscaped garden.",
      "Located within a mature golf community with schools, healthcare, and retail at short distance.",
      "Ideal for families and owner-occupiers looking for immediate handover in a prime district.",
    ]),
  },
  {
    slug: "dubai-marina-ready-apartment",
    id: "rp3",
    images: ["/images/Riverside.jpg", "/images/heightsbyemaar.webp", "/images/grandpolo.webp"],
    price: 2870000,
    features: "FULLY FURNISHED | MARINA VIEW | READY NOW",
    location: "Dubai Marina, Marina Gate",
    mapQuery: "Dubai Marina, Dubai",
    beds: 2,
    baths: 3,
    sqft: 1210,
    dldPermit: "71694209402",
    orn: "28663",
    agentName: "James Okonkwo",
    agentPhoto: "https://i.pravatar.cc/320?img=12",
    description: paragraph([
      "A fully furnished ready apartment in Marina Gate with direct marina-facing outlook and strong short- and long-term leasing potential.",
      "The building benefits from premium amenities and established demand from both residents and investors.",
      "A practical purchase for buyers who want immediate rental income or instant occupation.",
    ]),
  },
  {
    slug: "jvc-ready-townhouse-corner",
    id: "rp4",
    images: ["/images/grandpolo.webp", "/images/palmcentral.jpg", "/images/heightsbyemaar.webp"],
    price: 2490000,
    features: "CORNER UNIT | READY TITLE DEED | FAMILY COMMUNITY",
    location: "JVC, District 13",
    mapQuery: "Jumeirah Village Circle, Dubai",
    beds: 3,
    baths: 4,
    sqft: 2280,
    dldPermit: "71694209403",
    orn: "28664",
    agentName: "Sarah Al-Mansoori",
    agentPhoto: "https://i.pravatar.cc/320?img=47",
    description: paragraph([
      "A corner ready townhouse in JVC with immediate transfer readiness and practical multi-level family layout.",
      "Situated in a mature residential district with schools, community retail, and efficient city-wide connectivity.",
      "Strong value option for buyers prioritising immediate possession and affordability.",
    ]),
  },
  {
    slug: "business-bay-ready-office-fitted",
    id: "rp5",
    images: ["/images/heightsbyemaar.webp", "/images/Riverside.jpg", "/images/palmcentral.jpg"],
    price: 2680000,
    features: "FULLY FITTED | READY TO OCCUPY | CANAL PROXIMITY",
    location: "Business Bay, Bay Square",
    mapQuery: "Business Bay, Dubai",
    beds: 1,
    baths: 2,
    sqft: 1470,
    dldPermit: "71694209404",
    orn: "28665",
    agentName: "James Okonkwo",
    agentPhoto: "https://i.pravatar.cc/320?img=12",
    description: paragraph([
      "A fully fitted ready office in Bay Square with practical partitioning and immediate business operation readiness.",
      "The location offers excellent accessibility and sustained demand from SMEs and service firms.",
      "Suitable for both owner-users and investors seeking zero-construction-risk commercial stock.",
    ]),
  },
  {
    slug: "palm-jumeirah-ready-residence",
    id: "rp6",
    images: ["/images/prop2.jpg", "/images/palmcentral.jpg", "/images/prop4.jpeg"],
    price: 21400000,
    features: "READY ULTRA PRIME | PRIVATE BEACH ACCESS | BRANDED",
    location: "Palm Jumeirah, West Crescent",
    mapQuery: "Palm Jumeirah, Dubai",
    beds: 4,
    baths: 5,
    sqft: 4675,
    dldPermit: "71694209405",
    orn: "28666",
    agentName: "Elena Vasquez",
    agentPhoto: "https://i.pravatar.cc/320?img=45",
    description: paragraph([
      "A ready branded residence on Palm Jumeirah with private beach access and premium hospitality-managed lifestyle features.",
      "Delivered and operational, this asset offers immediate luxury occupation without handover uncertainty.",
      "A compelling fit for international buyers requiring turnkey ultra-prime inventory in Dubai.",
    ]),
  },
];

export function getReadyBySlug(slug) {
  return READY_LISTINGS.find((p) => p.slug === slug) ?? null;
}

export function getRelatedReady(currentSlug, limit = 3) {
  return READY_LISTINGS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
