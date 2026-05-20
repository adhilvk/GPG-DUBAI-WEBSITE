import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import { luxuryListingConfig } from "@/lib/residentialListingConfig";

export const metadata: Metadata = {
  title: "Luxury Properties | Ultra Prime Homes | GPG",
  description:
    "Browse luxury properties in Dubai, including mansions and ultra-prime villas in prestigious communities.",
};

export default function LuxuryPropertiesPage() {
  return (
    <>
      <Navbar />
      <ResidentialListing config={luxuryListingConfig} />
      <Footer />
    </>
  );
}
