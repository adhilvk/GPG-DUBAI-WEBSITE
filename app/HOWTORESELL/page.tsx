import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HowToResellGuide from "@/components/Guides/HowToResellGuide";

export const metadata: Metadata = {
  title: "Guide to Reselling Off-Plan Property in Dubai | GPG",
  description:
    "Learn how to resell off-plan property in Dubai: eligibility, assignment sales, fees, strategic advice, and FAQs.",
};

export default function HowToResellPage() {
  return (
    <>
      <Navbar />
      <HowToResellGuide />
      <Footer />
    </>
  );
}
