import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HowToBuyOffPlanGuide from "@/components/Guides/HowToBuyOffPlanGuide";

export const metadata: Metadata = {
  title: "How to Buy Off-Plan Property in Dubai | GPG Guides",
  description:
    "A luxury investor guide to buying off-plan property in Dubai: what it means, why buyers choose it, practical steps, FAQs, and institutional tips.",
};

export default function HowToBuyOffPlanPage() {
  return (
    <>
      <Navbar />
      <HowToBuyOffPlanGuide />
      <Footer />
    </>
  );
}
