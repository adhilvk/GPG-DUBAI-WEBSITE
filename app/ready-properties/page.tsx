import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import JsonLd from "@/components/seo/JsonLd";
import { readyListingConfig } from "@/lib/residentialListingConfig";
import { breadcrumbSchema } from "@/lib/schema";
import { staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/ready-properties");

export default function ReadyPropertiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Ready Properties", path: "/ready-properties" },
        ])}
      />
      <Navbar />
      <ResidentialListing config={readyListingConfig} />
      <Footer />
    </>
  );
}
