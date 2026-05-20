import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import { readyListingConfig } from "@/lib/residentialListingConfig";

export const metadata: Metadata = {
  title: "Ready Properties | Immediate Handover | GPG",
  description:
    "Browse ready properties in Dubai, including ready-to-move homes and commercial units available now.",
};

export default function ReadyPropertiesPage() {
  return (
    <>
      <Navbar />
      <ResidentialListing config={readyListingConfig} />
      <Footer />
    </>
  );
}
