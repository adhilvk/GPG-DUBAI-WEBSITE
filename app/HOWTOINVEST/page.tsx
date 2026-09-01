import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HowToInvestGuide from "@/components/Guides/HowToInvestGuide";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { STATIC_PAGE_SEO, staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/HOWTOINVEST");

export default function HowToInvestPage() {
  const seo = STATIC_PAGE_SEO["/HOWTOINVEST"];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: "Commercial Property Guide", path: "/HOWTOINVEST" },
          ]),
          articleSchema({
            title: seo.title,
            description: seo.description,
            path: "/HOWTOINVEST",
            datePublished: "2026-08-10",
          }),
        ]}
      />
      <Navbar />
      <HowToInvestGuide />
      <Footer />
    </>
  );
}
