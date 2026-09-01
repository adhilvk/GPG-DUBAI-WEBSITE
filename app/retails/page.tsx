import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import JsonLd from "@/components/seo/JsonLd";
import { retailsListingConfig } from "@/lib/residentialListingConfig";
import { breadcrumbSchema } from "@/lib/schema";
import { staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/retails");

export default function RetailsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Retail Properties", path: "/retails" },
        ])}
      />
      <Navbar />
      <ResidentialListing config={retailsListingConfig} />
      <Footer />
    </>
  );
}
