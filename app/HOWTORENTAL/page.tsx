import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HowToRentalGuide from "@/components/Guides/HowToRentalGuide";

export const metadata: Metadata = {
  title: "Dubai Rental Yield Guide | GPG Guides",
  description:
    "Learn how to evaluate rental yield in Dubai: gross vs net income, best corridors, property management, and FAQs for income-focused investors.",
};

export default function HowToRentalPage() {
  return (
    <>
      <Navbar />
      <HowToRentalGuide />
      <Footer />
    </>
  );
}
