import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HowToInvestGuide from "@/components/Guides/HowToInvestGuide";

export const metadata: Metadata = {
  title: "How to Invest in Dubai Real Estate | GPG Guides",
  description:
    "Learn how to invest in Dubai real estate: yield vs appreciation, portfolio strategy, top corridors, risk management, and FAQs.",
};

export default function HowToInvestPage() {
  return (
    <>
      <Navbar />
      <HowToInvestGuide />
      <Footer />
    </>
  );
}
