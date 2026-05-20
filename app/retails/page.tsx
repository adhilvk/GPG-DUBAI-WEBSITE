import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import { retailsListingConfig } from "@/lib/residentialListingConfig";

export const metadata: Metadata = {
  title: "Retails | Commercial Properties | GPG",
  description:
    "Browse retail properties for sale in Dubai. Filter by location, price, and retail type.",
};

export default function RetailsPage() {
  return (
    <>
      <Navbar />
      <ResidentialListing config={retailsListingConfig} />
      <Footer />
    </>
  );
}
