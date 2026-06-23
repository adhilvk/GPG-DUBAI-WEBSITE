import { LUXURY_LISTING_PROJECTS } from "@/data/luxuryListingProjects";

const GALLERY_FALLBACKS = [
  "/images/palmcentral.jpg",
  "/images/Riverside.jpg",
  "/images/grandpolo.webp",
  "/images/heightsbyemaar.webp",
  "/images/prop4.jpeg",
  "/images/prop5.webp",
];

export const DEFAULT_AMENITIES = [
  "Central A/C",
  "Balcony",
  "Shared Pool",
  "Shared Gym",
  "Security",
  "Concierge",
  "Covered Parking",
  "Built-in Wardrobes",
  "Kitchen Appliances",
  "View of Landmark",
  "Children's Play Area",
  "Pets Allowed",
];

export function parsePriceAed(project) {
  if (project.price === "Call Us" || project.priceDisplay === "Call Us") return null;

  const raw = String(project.price).replace(/,/g, "").trim().toLowerCase();
  if (raw.endsWith("m")) return parseFloat(raw.slice(0, -1)) * 1_000_000;
  if (raw.endsWith("k")) return parseFloat(raw.slice(0, -1)) * 1_000;
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

export function formatAedPrice(project) {
  const parsed = parsePriceAed(project);
  if (parsed != null) return `AED ${parsed.toLocaleString("en-AE")}`;
  return project.priceDisplay ?? `From AED ${project.price}`;
}

export function getLuxuryProjectBySlug(slug) {
  return LUXURY_LISTING_PROJECTS.find((p) => p.id === slug) ?? null;
}

export function getRelatedLuxuryProjects(currentId, limit = 3) {
  const current = getLuxuryProjectBySlug(currentId);
  const others = LUXURY_LISTING_PROJECTS.filter((p) => p.id !== currentId);

  if (!current) return others.slice(0, limit);

  const areaToken = current.location?.split(",")[0]?.trim().toLowerCase() ?? "";
  const scored = others
    .map((p) => {
      let score = 0;
      if (areaToken && p.location?.toLowerCase().includes(areaToken)) score += 2;
      if (p.propertyType === current.propertyType) score += 1;
      if (p.status === current.status) score += 1;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(({ p }) => p);
}

export function getProjectGallery(project) {
  const base = project.images?.length ? [...project.images] : [project.image];
  let i = 0;
  while (base.length < 3) {
    const fallback = GALLERY_FALLBACKS[i % GALLERY_FALLBACKS.length];
    if (!base.includes(fallback)) base.push(fallback);
    i += 1;
    if (i > GALLERY_FALLBACKS.length * 2) break;
  }
  return base.slice(0, 3);
}

export function getProjectDescription(project) {
  if (project.description) return project.description;

  const type = project.propertyType ?? "Property";
  const status = project.status ?? "Off-plan";
  const beds = project.beds != null ? `${project.beds}-bedroom` : "premium";

  return [
    `Discover ${project.title} — a ${beds} ${type.toLowerCase()} in ${project.location}.`,
    `This ${status.toLowerCase()} listing represents an exceptional opportunity in one of the UAE's most sought-after addresses, combining architectural distinction with strong long-term investment potential.`,
    `Contact GPG Real Estate for floor plans, payment schedules, and a private viewing of this exclusive property.`,
  ].join("\n\n");
}

export function getProjectAmenities(project) {
  return project.amenities?.length ? project.amenities : DEFAULT_AMENITIES;
}
