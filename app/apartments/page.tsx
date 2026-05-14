import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ApartmentsListing from "@/components/ApartmentsListing/ApartmentsListing";

export const metadata: Metadata = {
  title: "Apartments | Off Plan Properties | GPG",
  description:
    "Browse off-plan apartments in Dubai. Filter by location, price, bedrooms, and more.",
};

export default function ApartmentsPage() {
  return (
    <>
      <Navbar />
      <ApartmentsListing />
      <Footer />
    </>
  );
}
