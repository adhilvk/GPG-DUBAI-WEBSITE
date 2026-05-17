import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import { townhousesListingConfig } from "@/lib/residentialListingConfig";

export const metadata: Metadata = {
  title: "Townhouses | Properties for Sale | GPG",
  description:
    "Browse townhouses for sale in Dubai. Filter by location, price, bedrooms, and more.",
};

export default function TownhousesPage() {
  return (
    <>
      <Navbar />
      <ResidentialListing config={townhousesListingConfig} />
      <Footer />
    </>
  );
}
