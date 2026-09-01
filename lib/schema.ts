import { SITE_NAME, SITE_URL, absoluteUrl, toAbsoluteImage, truncateDescription } from "@/lib/seo";
import { parsePriceAed } from "@/lib/luxuryProjectDetail";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type ListingSchemaInput = {
  name: string;
  description?: string;
  path: string;
  image?: string | string[];
  location?: string;
  price?: string | number | null;
  priceCurrency?: string;
  propertyType?: string;
  beds?: number | null;
  baths?: number | null;
  sqft?: number | null;
  availability?: string;
};

export type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "RealEstateAgent"],
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: "G P G GLOBAL REAL ESTATE BROKERAGE L.L.C",
    url: SITE_URL,
    logo: absoluteUrl("/favicon.png"),
    image: absoluteUrl("/images/gpg-awards-banner.png"),
    email: "enquiries@globalpropertygroup.co",
    telephone: "+971542068414",
    address: {
      "@type": "PostalAddress",
      streetAddress: "#1109, Regal Tower",
      addressLocality: "Business Bay",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    sameAs: [
      "https://www.facebook.com/gpgluxuryrealestate/",
      "https://www.instagram.com/xgpg.luxury/",
      "https://www.linkedin.com/company/gpgluxuryrealestate/",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  image,
  datePublished,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: truncateDescription(description, 300),
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    image: image ? [toAbsoluteImage(image)] : undefined,
    datePublished,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  if (!faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

function listingPrice(price?: string | number | null) {
  if (price == null || price === "") return null;
  if (typeof price === "number") {
    return Number.isFinite(price) && price > 0 ? price : null;
  }
  if (price === "Call Us") return null;
  return parsePriceAed({ price });
}

export function realEstateListingSchema(input: ListingSchemaInput) {
  const images = (Array.isArray(input.image) ? input.image : [input.image])
    .filter((src): src is string => Boolean(src))
    .map((src) => toAbsoluteImage(src));
  const price = listingPrice(input.price);
  const url = absoluteUrl(input.path);

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: input.name,
    url,
    description: input.description
      ? truncateDescription(input.description, 300)
      : undefined,
    image: images.length ? images : undefined,
    additionalType: input.propertyType || undefined,
    address: input.location
      ? {
          "@type": "PostalAddress",
          streetAddress: input.location,
          addressCountry: "AE",
        }
      : undefined,
    numberOfRooms: input.beds ?? undefined,
    numberOfBathroomsTotal: input.baths ?? undefined,
    floorSize:
      input.sqft != null
        ? {
            "@type": "QuantitativeValue",
            value: input.sqft,
            unitCode: "FTK",
          }
        : undefined,
    offers:
      price != null
        ? {
            "@type": "Offer",
            url,
            price,
            priceCurrency: input.priceCurrency ?? "AED",
            seller: { "@id": ORGANIZATION_ID },
          }
        : undefined,
  };
}

export function placeSchema({
  name,
  description,
  path,
  image,
}: {
  name: string;
  description?: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name,
    description: description ? truncateDescription(description, 300) : undefined,
    url: absoluteUrl(path),
    image: image ? toAbsoluteImage(image) : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: name,
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
  };
}
