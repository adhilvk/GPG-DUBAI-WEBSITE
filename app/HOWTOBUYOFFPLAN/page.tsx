import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HowToBuyOffPlanGuide from "@/components/Guides/HowToBuyOffPlanGuide";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { STATIC_PAGE_SEO, staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/HOWTOBUYOFFPLAN");

export default function HowToBuyOffPlanPage() {
  const seo = STATIC_PAGE_SEO["/HOWTOBUYOFFPLAN"];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: "How to Buy Off-Plan", path: "/HOWTOBUYOFFPLAN" },
          ]),
          articleSchema({
            title: seo.title,
            description: seo.description,
            path: "/HOWTOBUYOFFPLAN",
            datePublished: "2024-05-01",
          }),
        ]}
      />
      <Navbar />
      <HowToBuyOffPlanGuide />
      <Footer />
    </>
  );
}
