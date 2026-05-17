import { APARTMENT_LISTINGS } from "@/data/apartmentListings";
import { TOWNHOUSE_LISTINGS } from "@/data/townhouseListings";
import { VILLA_LISTINGS } from "@/data/villaListings";
import { getRelatedListings as getRelatedApartments } from "@/data/apartmentListings";
import { getRelatedTownhouses } from "@/data/townhouseListings";
import { getRelatedVillas } from "@/data/villaListings";

export const apartmentsListingConfig = {
  basePath: "/apartments",
  heroImage: "/images/palmcentral.jpg",
  heroId: "apartments-hero-heading",
  eyebrow: "Our Properties · Residential · Apartments",
  heroTitle: "Apartments in Dubai",
  heroSubtitle:
    "Browse off-plan and ready apartments across Dubai's most popular communities and developments.",
  breadcrumbCurrent: "Apartments",
  resultsLabel: "Off Plan Properties in Dubai",
  totalCount: 835,
  listings: APARTMENT_LISTINGS,
  propertyTypeOptions: [
    { value: "", label: "Property Type" },
    { value: "studio", label: "Studio" },
    { value: "apartment", label: "Apartment" },
    { value: "penthouse", label: "Penthouse" },
  ],
};

export const townhousesListingConfig = {
  basePath: "/townhouses",
  heroImage: "/images/grandpolo.webp",
  heroId: "townhouses-hero-heading",
  eyebrow: "Our Properties · Residential · Townhouses",
  heroTitle: "Townhouses in Dubai",
  heroSubtitle:
    "Browse townhouses and semi-detached homes across Dubai's family-friendly communities and master developments.",
  breadcrumbCurrent: "Townhouses",
  resultsLabel: "Townhouses for Sale in Dubai",
  totalCount: 420,
  listings: TOWNHOUSE_LISTINGS,
  propertyTypeOptions: [
    { value: "", label: "Property Type" },
    { value: "townhouse", label: "Townhouse" },
    { value: "semi-detached", label: "Semi-Detached" },
    { value: "corner", label: "Corner Unit" },
  ],
};

export const apartmentsDetailConfig = {
  basePath: "/apartments",
  searchLabel: "Apartments in Dubai",
  getRelated: getRelatedApartments,
};

export const townhousesDetailConfig = {
  basePath: "/townhouses",
  searchLabel: "Townhouses in Dubai",
  getRelated: getRelatedTownhouses,
};

export const villasListingConfig = {
  basePath: "/villas",
  heroImage: "/images/prop2.jpg",
  heroId: "villas-hero-heading",
  eyebrow: "Our Properties · Residential · Villas",
  heroTitle: "Villas in Dubai",
  heroSubtitle:
    "Browse luxury villas and mansions across Dubai's most prestigious communities, golf estates, and waterfront addresses.",
  breadcrumbCurrent: "Villas",
  resultsLabel: "Villas for Sale in Dubai",
  totalCount: 312,
  listings: VILLA_LISTINGS,
  propertyTypeOptions: [
    { value: "", label: "Property Type" },
    { value: "standalone", label: "Standalone Villa" },
    { value: "mansion", label: "Mansion" },
    { value: "beachfront", label: "Beachfront Villa" },
    { value: "golf", label: "Golf Villa" },
  ],
};

export const villasDetailConfig = {
  basePath: "/villas",
  searchLabel: "Villas in Dubai",
  getRelated: getRelatedVillas,
};
