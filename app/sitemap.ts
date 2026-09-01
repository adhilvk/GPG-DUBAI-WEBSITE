import type { MetadataRoute } from "next";
import { APARTMENT_LISTINGS } from "@/data/apartmentListings";
import { COMMUNITIES } from "@/data/communities";
import { LUXURY_LISTING_PROJECTS } from "@/data/luxuryListingProjects";
import { OFFICE_LISTINGS } from "@/data/officeListings";
import { READY_LISTINGS } from "@/data/readyListings";
import { RETAIL_LISTINGS } from "@/data/retailListings";
import { TOWNHOUSE_LISTINGS } from "@/data/townhouseListings";
import { TRENDING_PROJECTS } from "@/data/trendingProjects";
import { VILLA_LISTINGS } from "@/data/villaListings";
import { SITE_URL } from "@/lib/seo";

const STATIC_PATHS: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/our-teams", changeFrequency: "monthly", priority: 0.6 },
  { path: "/awards", changeFrequency: "monthly", priority: 0.6 },
  { path: "/luxury-properties", changeFrequency: "weekly", priority: 0.9 },
  { path: "/trending-projects", changeFrequency: "weekly", priority: 0.9 },
  { path: "/guides", changeFrequency: "monthly", priority: 0.8 },
  { path: "/HOWTOBUYOFFPLAN", changeFrequency: "monthly", priority: 0.7 },
  { path: "/HOWTORESELL", changeFrequency: "monthly", priority: 0.7 },
  { path: "/HOWTORENTAL", changeFrequency: "monthly", priority: 0.7 },
  { path: "/HOWTOINVEST", changeFrequency: "monthly", priority: 0.7 },
  { path: "/apartments", changeFrequency: "weekly", priority: 0.6 },
  { path: "/villas", changeFrequency: "weekly", priority: 0.6 },
  { path: "/townhouses", changeFrequency: "weekly", priority: 0.6 },
  { path: "/offices", changeFrequency: "weekly", priority: 0.6 },
  { path: "/retails", changeFrequency: "weekly", priority: 0.6 },
  { path: "/ready-properties", changeFrequency: "weekly", priority: 0.6 },
  { path: "/areas", changeFrequency: "monthly", priority: 0.7 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
];

function entry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const unique = new Set<string>();
  const urls: MetadataRoute.Sitemap = [];

  const add = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: number
  ) => {
    if (unique.has(path)) return;
    unique.add(path);
    urls.push(entry(path, changeFrequency, priority));
  };

  STATIC_PATHS.forEach((page) => add(page.path, page.changeFrequency, page.priority));

  LUXURY_LISTING_PROJECTS.forEach((project) => {
    add(`/luxury-properties/${project.id}`, "weekly", 0.8);
  });

  TRENDING_PROJECTS.forEach((project) => {
    add(`/trending-projects/${project.id}`, "weekly", 0.8);
  });

  COMMUNITIES.forEach((community) => {
    add(`/areas/${community.id}`, "monthly", 0.7);
  });

  APARTMENT_LISTINGS.forEach((listing) => {
    add(`/apartments/${listing.slug}`, "weekly", 0.5);
  });
  VILLA_LISTINGS.forEach((listing) => {
    add(`/villas/${listing.slug}`, "weekly", 0.5);
  });
  TOWNHOUSE_LISTINGS.forEach((listing) => {
    add(`/townhouses/${listing.slug}`, "weekly", 0.5);
  });
  OFFICE_LISTINGS.forEach((listing) => {
    add(`/offices/${listing.slug}`, "weekly", 0.5);
  });
  RETAIL_LISTINGS.forEach((listing) => {
    add(`/retails/${listing.slug}`, "weekly", 0.5);
  });
  READY_LISTINGS.forEach((listing) => {
    add(`/ready-properties/${listing.slug}`, "weekly", 0.5);
  });

  return urls;
}
