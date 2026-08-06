import { COMMUNITIES } from "@/data/communities";

export function getCommunityBySlug(slug) {
  return COMMUNITIES.find((community) => community.id === slug) ?? null;
}
