import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TrendingProjectsGrid from "@/components/TrendingProjectsGrid/TrendingProjectsGrid";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/trending-projects");

export default function TrendingProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trending Projects", path: "/trending-projects" },
        ])}
      />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-white pt-28" />}>
        <TrendingProjectsGrid />
      </Suspense>
      <Footer />
    </>
  );
}
