import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HowToInvestGuide from "@/components/Guides/HowToInvestGuide";

export const metadata: Metadata = {
  title: "How to Buy Commercial Property in Dubai | GPG Guides",
  description:
    "Learn how to buy commercial property in Dubai: property types, purchase steps, yield evaluation, top areas including JVC, costs, due diligence, and FAQs.",
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
