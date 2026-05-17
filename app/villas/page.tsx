import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import { villasListingConfig } from "@/lib/residentialListingConfig";

export const metadata: Metadata = {
  title: "Villas | Properties for Sale | GPG",
  description:
    "Browse luxury villas for sale in Dubai. Filter by location, price, bedrooms, and more.",
};

export default function VillasPage() {
  return (
    <>
      <Navbar />
      <ResidentialListing config={villasListingConfig} />
      <Footer />
    </>
  );
}
