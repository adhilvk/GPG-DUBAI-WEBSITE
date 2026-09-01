import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LuxuryListingsGrid from "@/components/LuxuryListingsGrid/LuxuryListingsGrid";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/luxury-properties");

export default function LuxuryPropertiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Luxury Properties", path: "/luxury-properties" },
        ])}
      />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-white pt-28" />}>
        <LuxuryListingsGrid />
      </Suspense>
      <Footer />
    </>
  );
}
