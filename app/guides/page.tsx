import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RealEstateGuidesGuide from "@/components/Guides/RealEstateGuidesGuide";

export const metadata: Metadata = {
  title: "Off Plan Properties in Dubai: A Beginner's Guide | GPG",
  description:
    "Real estate guides for Dubai: market landscape, off-plan basics, due diligence, and links to buy, resell, and invest guides.",
};

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <RealEstateGuidesGuide />
      <Footer />
    </>
  );
}
