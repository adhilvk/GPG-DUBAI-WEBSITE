import { APARTMENT_LISTINGS } from "@/data/apartmentListings";
import { TOWNHOUSE_LISTINGS } from "@/data/townhouseListings";
import { VILLA_LISTINGS } from "@/data/villaListings";
import { OFFICE_LISTINGS } from "@/data/officeListings";
import { RETAIL_LISTINGS } from "@/data/retailListings";
import { LUXURY_LISTINGS } from "@/data/luxuryListings";
import { READY_LISTINGS } from "@/data/readyListings";
import { getRelatedListings as getRelatedApartments } from "@/data/apartmentListings";
import { getRelatedTownhouses } from "@/data/townhouseListings";
import { getRelatedVillas } from "@/data/villaListings";
import { getRelatedOffices } from "@/data/officeListings";
import { getRelatedRetails } from "@/data/retailListings";
import { getRelatedLuxury } from "@/data/luxuryListings";
import { getRelatedReady } from "@/data/readyListings";

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

export const officesListingConfig = {
  basePath: "/offices",
  heroImage: "/images/heightsbyemaar.webp",
  heroId: "offices-hero-heading",
  eyebrow: "Our Properties · Commercial · Offices",
  heroTitle: "Offices in Dubai",
  heroSubtitle:
    "Browse fitted, shell-and-core, and Grade A office spaces across Dubai's key business districts.",
  breadcrumbCurrent: "Offices",
  breadcrumbGroup: "Commercial",
  resultsLabel: "Offices for Sale in Dubai",
  totalCount: 268,
  listings: OFFICE_LISTINGS,
  propertyTypeOptions: [
    { value: "", label: "Property Type" },
    { value: "fitted", label: "Fitted Office" },
    { value: "shell-core", label: "Shell & Core" },
    { value: "grade-a", label: "Grade A Office" },
  ],
};

export const officesDetailConfig = {
  basePath: "/offices",
  searchLabel: "Offices in Dubai",
  getRelated: getRelatedOffices,
};

export const retailsListingConfig = {
  basePath: "/retails",
  heroImage: "/images/Riverside.jpg",
  heroId: "retails-hero-heading",
  eyebrow: "Our Properties · Commercial · Retails",
  heroTitle: "Retail Spaces in Dubai",
  heroSubtitle:
    "Browse high-street, community, and mall-adjacent retail properties across Dubai's key demand zones.",
  breadcrumbCurrent: "Retails",
  breadcrumbGroup: "Commercial",
  resultsLabel: "Retail Properties for Sale in Dubai",
  totalCount: 194,
  listings: RETAIL_LISTINGS,
  propertyTypeOptions: [
    { value: "", label: "Property Type" },
    { value: "high-street", label: "High Street Retail" },
    { value: "community", label: "Community Retail" },
    { value: "f-b", label: "F&B Unit" },
  ],
};

export const retailsDetailConfig = {
  basePath: "/retails",
  searchLabel: "Retail Spaces in Dubai",
  getRelated: getRelatedRetails,
};

export const luxuryListingConfig = {
  basePath: "/luxury-properties",
  heroImage: "/images/prop2.jpg",
  heroId: "luxury-hero-heading",
  eyebrow: "Our Properties · Luxury",
  heroTitle: "Luxury Properties in Dubai",
  heroSubtitle:
    "Browse ultra-prime villas, mansions, and branded residences in Dubai's most prestigious addresses.",
  breadcrumbCurrent: "Luxury Properties",
  breadcrumbGroup: "Luxury",
  resultsLabel: "Luxury Properties for Sale in Dubai",
  totalCount: 126,
  listings: LUXURY_LISTINGS,
  propertyTypeOptions: [
    { value: "", label: "Property Type" },
    { value: "mansion", label: "Mansion" },
    { value: "villa", label: "Luxury Villa" },
    { value: "branded", label: "Branded Residence" },
  ],
};

export const luxuryDetailConfig = {
  basePath: "/luxury-properties",
  searchLabel: "Luxury Properties in Dubai",
  getRelated: getRelatedLuxury,
};

export const readyListingConfig = {
  basePath: "/ready-properties",
  heroImage: "/images/prop5.webp",
  heroId: "ready-properties-hero-heading",
  eyebrow: "Our Properties · Ready Properties",
  heroTitle: "Ready Properties in Dubai",
  heroSubtitle:
    "Explore ready-to-move apartments, villas, townhouses, and offices available for immediate handover.",
  breadcrumbCurrent: "Ready Properties",
  breadcrumbGroup: "Ready Properties",
  resultsLabel: "Ready Properties for Sale in Dubai",
  totalCount: 342,
  listings: READY_LISTINGS,
  propertyTypeOptions: [
    { value: "", label: "Property Type" },
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "townhouse", label: "Townhouse" },
    { value: "office", label: "Office" },
  ],
};

export const readyDetailConfig = {
  basePath: "/ready-properties",
  searchLabel: "Ready Properties in Dubai",
  getRelated: getRelatedReady,
};
