import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AwardsPageContent from "@/components/AwardsPageContent/AwardsPageContent";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { staticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = staticPageMetadata("/awards");

export default function AwardsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Awards", path: "/awards" },
        ])}
      />
      <Navbar />
      <AwardsPageContent />
      <Footer />
    </>
  );
}
