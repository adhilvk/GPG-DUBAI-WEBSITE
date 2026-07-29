import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AwardsPageContent from "@/components/AwardsPageContent/AwardsPageContent";

export const metadata: Metadata = {
  title: "Our Awards | GPG",
  description: "Explore GPG awards and recognition from Dubai's leading developers.",
};

export default function AwardsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-white pt-28" />}>
        <AwardsPageContent />
      </Suspense>
      <Footer />
    </>
  );
}
