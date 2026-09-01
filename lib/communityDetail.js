import { COMMUNITIES } from "@/data/communities";
import { LUXURY_LISTING_PROJECTS } from "@/data/luxuryListingProjects";
import { TRENDING_PROJECTS } from "@/data/trendingProjects";

export function getCommunityBySlug(slug) {
  return COMMUNITIES.find((community) => community.id === slug) ?? null;
}

export function getRelatedPropertiesForCommunity(community, limit = 3) {
  if (!community?.title) return [];

  const needle = community.title.toLowerCase();
  const matches = [];

  LUXURY_LISTING_PROJECTS.forEach((project) => {
    const haystack = `${project.title ?? ""} ${project.location ?? ""} ${project.subtitle ?? ""}`.toLowerCase();
    if (haystack.includes(needle)) {
      matches.push({
        id: project.id,
        title: project.title,
        location: project.location,
        image: project.image,
        href: `/luxury-properties/${project.id}`,
      });
    }
  });

  TRENDING_PROJECTS.forEach((project) => {
    if (project.hiddenFromListing) return;
    const haystack = `${project.title ?? ""} ${project.location ?? ""} ${project.subtitle ?? ""}`.toLowerCase();
    if (haystack.includes(needle)) {
      matches.push({
        id: project.id,
        title: project.title,
        location: project.location,
        image: project.image,
        href: `/trending-projects/${project.id}`,
      });
    }
  });

  const unique = [];
  const seen = new Set();
  for (const item of matches) {
    if (seen.has(item.href)) continue;
    seen.add(item.href);
    unique.push(item);
    if (unique.length >= limit) break;
  }

  return unique;
}
