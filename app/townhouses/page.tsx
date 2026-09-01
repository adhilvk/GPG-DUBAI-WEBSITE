import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import JsonLd from "@/components/seo/JsonLd";
import { townhousesListingConfig } from "@/lib/residentialListingConfig";
import { breadcrumbSchema } from "@/lib/schema";
import { staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/townhouses");

export default function TownhousesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Townhouses", path: "/townhouses" },
        ])}
      />
      <Navbar />
      <ResidentialListing config={townhousesListingConfig} />
      <Footer />
    </>
  );
}
