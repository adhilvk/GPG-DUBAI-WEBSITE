import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HowToResellGuide from "@/components/Guides/HowToResellGuide";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { STATIC_PAGE_SEO, staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/HOWTORESELL");

export default function HowToResellPage() {
  const seo = STATIC_PAGE_SEO["/HOWTORESELL"];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: "How to Resell Off-Plan", path: "/HOWTORESELL" },
          ]),
          articleSchema({
            title: seo.title,
            description: seo.description,
            path: "/HOWTORESELL",
            datePublished: "2024-06-12",
          }),
        ]}
      />
      <Navbar />
      <HowToResellGuide />
      <Footer />
    </>
  );
}
