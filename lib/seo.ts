import type { Metadata } from "next";

export const SITE_URL = "https://www.globalpropertygroup.co";
export const SITE_NAME = "GPG Global Real Estate";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/gpg-awards-banner.png`;
export const DEFAULT_OG_ALT = "GPG Global Real Estate — luxury properties in Dubai";

export type OgType = "website" | "article";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: OgType;
  noIndex?: boolean;
  publishedTime?: string;
};

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

export function toAbsoluteImage(src?: string | null) {
  if (!src) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(src)) return src;
  return absoluteUrl(src);
}

export function truncateDescription(text: string, max = 158) {
  const compact = text.replace(/\s+/g, " ").trim();
  if (compact.length <= max) return compact;
  const sliced = compact.slice(0, max);
  const lastSpace = sliced.lastIndexOf(" ");
  let out = (lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced).trim();
  out = out.replace(/[,:;–—-]+$/, "").replace(/\s+[a-zA-Z]$/, "");
  return `${out}…`;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  noIndex = false,
  publishedTime,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = toAbsoluteImage(image);
  const desc = truncateDescription(description);

  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type,
      ...(publishedTime && type === "article" ? { publishedTime } : {}),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
  };
}

export const HOME_TITLE = "GPG Global Real Estate | Luxury Properties in Dubai";
export const HOME_DESCRIPTION =
  "GPG Global Real Estate helps investors and homeowners find luxury properties, off-plan projects, and investment opportunities across Dubai and the UAE.";

export const STATIC_PAGE_SEO = {
  "/": {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  "/about": {
    title: "About GPG Global Real Estate | Dubai Real Estate Experts",
    description:
      "Learn about GPG Global Real Estate, a Dubai brokerage led by CEO Chirag Goyal, advising clients on luxury and off-plan property investments.",
  },
  "/contact-us": {
    title: "Contact GPG Global Real Estate | Dubai Real Estate",
    description:
      "Contact GPG Global Real Estate in Business Bay, Dubai to discuss luxury properties, off-plan projects, and investment advisory with our team.",
  },
  "/our-teams": {
    title: "Our Team | GPG Global Real Estate Dubai Advisors",
    description:
      "Meet the GPG Global Real Estate team in Dubai, including CEO Chirag Goyal and licensed advisors helping clients buy and invest in property.",
  },
  "/awards": {
    title: "Awards & Recognition | GPG Global Real Estate Dubai",
    description:
      "See awards and recognition earned by GPG Global Real Estate, including broker honours from leading Dubai developers.",
  },
  "/luxury-properties": {
    title: "Luxury Properties for Sale in Dubai | GPG Global Real Estate",
    description:
      "Browse luxury villas, penthouses, apartments, and branded residences listed by GPG Global Real Estate across Dubai and the UAE.",
  },
  "/trending-projects": {
    title: "Trending Off-Plan Projects in the UAE | GPG Global Real Estate",
    description:
      "Explore trending off-plan projects in Dubai, Abu Dhabi, and Ras Al Khaimah, with pricing, locations, and developer details from GPG.",
  },
  "/guides": {
    title: "Off-Plan Property in Dubai: A Beginner’s Guide | GPG",
    description:
      "A practical GPG guide to off-plan property in Dubai, covering how purchases work, due diligence, and links to buy, resell, and invest guides.",
  },
  "/HOWTOBUYOFFPLAN": {
    title: "How to Buy Off-Plan Property in Dubai | GPG Guides",
    description:
      "Learn how to buy off-plan property in Dubai, including what it means, typical steps, due diligence, and questions to ask before you purchase.",
  },
  "/HOWTORESELL": {
    title: "How to Resell Off-Plan Property in Dubai | GPG Guides",
    description:
      "Learn how reselling off-plan property in Dubai works, including assignment sales, developer NOCs, fees, and timing considerations.",
  },
  "/HOWTORENTAL": {
    title: "Dubai Rental Yield Guide for Investors | GPG Guides",
    description:
      "Learn how to evaluate rental yield in Dubai, including gross versus net income, typical costs, and what income-focused investors should review.",
  },
  "/HOWTOINVEST": {
    title: "How to Buy Commercial Property in Dubai | GPG Guides",
    description:
      "A GPG guide to buying commercial property in Dubai, covering property types, purchase steps, costs, due diligence, and key areas.",
  },
  "/apartments": {
    title: "Apartments for Sale in Dubai | GPG Global Real Estate",
    description:
      "Browse apartments for sale in Dubai with GPG Global Real Estate, including off-plan and ready homes across established communities.",
  },
  "/villas": {
    title: "Villas for Sale in Dubai | GPG Global Real Estate",
    description:
      "Browse luxury villas for sale in Dubai with GPG Global Real Estate, across golf estates, waterfront addresses, and gated communities.",
  },
  "/townhouses": {
    title: "Townhouses for Sale in Dubai | GPG Global Real Estate",
    description:
      "Browse townhouses for sale in Dubai with GPG Global Real Estate, including family homes in established master communities.",
  },
  "/offices": {
    title: "Office Spaces for Sale in Dubai | GPG Global Real Estate",
    description:
      "Browse office spaces for sale in Dubai with GPG Global Real Estate, including fitted and Grade A units in key business districts.",
  },
  "/retails": {
    title: "Retail Properties for Sale in Dubai | GPG Global Real Estate",
    description:
      "Browse retail properties for sale in Dubai with GPG Global Real Estate, including community, high-street, and mixed-use units.",
  },
  "/ready-properties": {
    title: "Ready Properties for Sale in Dubai | GPG Global Real Estate",
    description:
      "Browse ready-to-move apartments, villas, townhouses, and offices available now through GPG Global Real Estate in Dubai.",
  },
  "/areas": {
    title: "Dubai Communities | GPG Global Real Estate",
    description:
      "Explore Dubai communities covered by GPG Global Real Estate, including Emirates Hills, Dubai Hills Estate, Arabian Ranches, and more.",
  },
  "/terms": {
    title: "Terms & Conditions | GPG Global Real Estate",
    description:
      "Read the terms and conditions for using the GPG Global Real Estate website and brokerage services in Dubai, United Arab Emirates.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | GPG Global Real Estate",
    description:
      "Read how GPG Global Real Estate collects, uses, and protects personal information when you enquire about properties or use our website.",
  },
} as const;

export function staticPageMetadata(path: keyof typeof STATIC_PAGE_SEO, image?: string) {
  const page = STATIC_PAGE_SEO[path];
  return buildMetadata({
    ...page,
    path,
    image,
    type: path.startsWith("/HOW") || path === "/guides" ? "article" : "website",
  });
}

export function propertyMetadata({
  name,
  location,
  description,
  path,
  image,
}: {
  name: string;
  location?: string;
  description?: string;
  path: string;
  image?: string;
}) {
  const locationLabel = location?.trim();
  const title = locationLabel ? `${name} | ${locationLabel}` : `${name} | ${SITE_NAME}`;
  const fallback = locationLabel
    ? `View ${name} in ${locationLabel}. Contact GPG Global Real Estate for details and a private viewing.`
    : `View ${name} with GPG Global Real Estate. Contact our Dubai team for details and a private viewing.`;

  return buildMetadata({
    title,
    description: description?.trim() || fallback,
    path,
    image,
    imageAlt: locationLabel ? `${name} in ${locationLabel}` : name,
  });
}

export function communityMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description?: string;
  path: string;
  image?: string;
}) {
  return buildMetadata({
    title: `${title} | Dubai Communities | GPG Global Real Estate`,
    description:
      description?.trim() ||
      `Explore ${title} in Dubai with GPG Global Real Estate, including lifestyle, housing types, and nearby community amenities.`,
    path,
    image,
    imageAlt: `${title}, Dubai`,
  });
}
