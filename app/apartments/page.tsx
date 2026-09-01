import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ApartmentsListing from "@/components/ApartmentsListing/ApartmentsListing";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/apartments");

export default function ApartmentsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Apartments", path: "/apartments" },
        ])}
      />
      <Navbar />
      <ApartmentsListing />
      <Footer />
    </>
  );
}
