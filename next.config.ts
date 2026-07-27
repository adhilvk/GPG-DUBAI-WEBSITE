import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      {
        source: "/luxury-properties/california-residences",
        destination: "/luxury-properties/beachgate-by-address-penthouse",
        permanent: true,
      },
      {
        source: "/luxury-properties/karl-lagerfeld-haute-living",
        destination: "/luxury-properties/address-villas-tierra-oasis",
        permanent: true,
      },
      {
        source: "/luxury-properties/karl-lagerfeld-villas-d11",
        destination: "/luxury-properties/mercedes-benz-places-binghatti",
        permanent: true,
      },
      {
        source: "/luxury-properties/karl-lagerfeld-achromatic-grandeur",
        destination: "/luxury-properties/mercedes-benz-places-binghatti-burj-khalifa-view",
        permanent: true,
      },
      {
        source: "/luxury-properties/karl-lagerfeld-branded-mansion",
        destination: "/luxury-properties/bay-residences-dubai-islands-a4",
        permanent: true,
      },
      {
        source: "/luxury-properties/karl-lagerfeld-five-bed",
        destination: "/luxury-properties/saas-hills-dubai-science-park",
        permanent: true,
      },
      {
        source: "/luxury-properties/karl-lagerfeld-special-mansions",
        destination: "/luxury-properties/golf-lane-emaar-south",
        permanent: true,
      },
      {
        source: "/luxury-properties/karl-lagerfeld-luxury-branded",
        destination: "/luxury-properties/jumeirah-residences-emirates-tower-a",
        permanent: true,
      },
      {
        source: "/luxury-properties/karl-lagerfeld-luxury-mansion",
        destination: "/luxury-properties/burj-binghatti-jacob-co-business-bay",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
