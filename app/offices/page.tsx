import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import JsonLd from "@/components/seo/JsonLd";
import { officesListingConfig } from "@/lib/residentialListingConfig";
import { breadcrumbSchema } from "@/lib/schema";
import { staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/offices");

export default function OfficesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Offices", path: "/offices" },
        ])}
      />
      <Navbar />
      <ResidentialListing config={officesListingConfig} />
      <Footer />
    </>
  );
}
