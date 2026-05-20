import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import { officesListingConfig } from "@/lib/residentialListingConfig";

export const metadata: Metadata = {
  title: "Offices | Commercial Properties | GPG",
  description:
    "Browse office spaces for sale in Dubai. Filter by location, price, and office type.",
};

export default function OfficesPage() {
  return (
    <>
      <Navbar />
      <ResidentialListing config={officesListingConfig} />
      <Footer />
    </>
  );
}
