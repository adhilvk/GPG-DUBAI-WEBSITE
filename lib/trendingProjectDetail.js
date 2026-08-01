import { TRENDING_PROJECTS } from "@/data/trendingProjects";

export {
  parsePriceAed,
  formatAedPrice,
  getProjectImages,
  getProjectGallery,
  getProjectDescription,
  getProjectAmenities,
  getMortgageDefaults,
  getProjectRegulatory,
  getRegulatoryQrSrc,
  getListingAgent,
} from "@/lib/luxuryProjectDetail";

export function getTrendingProjectBySlug(slug) {
  return TRENDING_PROJECTS.find((project) => project.id === slug) ?? null;
}

export function getRelatedTrendingProjects(currentId, limit = 3) {
  const current = getTrendingProjectBySlug(currentId);
  const others = TRENDING_PROJECTS.filter(
    (project) => project.id !== currentId && !project.hiddenFromListing
  );

  if (!current) return others.slice(0, limit);

  const areaToken = current.location?.split(",")[0]?.trim().toLowerCase() ?? "";
  const scored = others
    .map((project) => {
      let score = 0;
      if (areaToken && project.location?.toLowerCase().includes(areaToken)) score += 2;
      if (project.propertyType === current.propertyType) score += 1;
      if (project.category === current.category) score += 1;
      if (project.status === current.status) score += 1;
      return { project, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map(({ project }) => project);
}
