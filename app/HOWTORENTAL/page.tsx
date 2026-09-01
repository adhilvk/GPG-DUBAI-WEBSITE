import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HowToRentalGuide from "@/components/Guides/HowToRentalGuide";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { STATIC_PAGE_SEO, staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/HOWTORENTAL");

export default function HowToRentalPage() {
  const seo = STATIC_PAGE_SEO["/HOWTORENTAL"];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: "Rental Yield Guide", path: "/HOWTORENTAL" },
          ]),
          articleSchema({
            title: seo.title,
            description: seo.description,
            path: "/HOWTORENTAL",
            datePublished: "2024-08-15",
          }),
        ]}
      />
      <Navbar />
      <HowToRentalGuide />
      <Footer />
    </>
  );
}
