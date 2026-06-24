import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TrendingProjectsGrid from "@/components/TrendingProjectsGrid/TrendingProjectsGrid";

export const metadata: Metadata = {
  title: "Trending Projects | GPG",
  description: "Browse the most trending property projects across the UAE.",
};

export default function TrendingProjectsPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-white pt-28" />}>
        <TrendingProjectsGrid />
      </Suspense>
      <Footer />
    </>
  );
}
