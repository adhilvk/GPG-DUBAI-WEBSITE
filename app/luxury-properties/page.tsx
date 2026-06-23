import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LuxuryListingsGrid from "@/components/LuxuryListingsGrid/LuxuryListingsGrid";

export const metadata: Metadata = {
  title: "Luxury Listings | GPG",
  description: "Browse luxury property listings across prime Dubai communities.",
};

export default function LuxuryPropertiesPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-white pt-28" />}>
        <LuxuryListingsGrid />
      </Suspense>
      <Footer />
    </>
  );
}
