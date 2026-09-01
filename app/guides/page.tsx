import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RealEstateGuidesGuide from "@/components/Guides/RealEstateGuidesGuide";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { STATIC_PAGE_SEO, staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/guides");

export default function GuidesPage() {
  const seo = STATIC_PAGE_SEO["/guides"];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
          ]),
          articleSchema({
            title: seo.title,
            description: seo.description,
            path: "/guides",
            datePublished: "2024-04-18",
          }),
        ]}
      />
      <Navbar />
      <RealEstateGuidesGuide />
      <Footer />
    </>
  );
}
