import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import JsonLd from "@/components/seo/JsonLd";
import { villasListingConfig } from "@/lib/residentialListingConfig";
import { breadcrumbSchema } from "@/lib/schema";
import { staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/villas");

export default function VillasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Villas", path: "/villas" },
        ])}
      />
      <Navbar />
      <ResidentialListing config={villasListingConfig} />
      <Footer />
    </>
  );
}
