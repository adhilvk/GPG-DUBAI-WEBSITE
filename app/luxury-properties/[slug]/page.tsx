import type { Metadata } from "next";
import { Suspense } from "react";

import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar/Navbar";

import Footer from "@/components/Footer/Footer";

import LuxuryDetail from "@/components/LuxuryDetail/LuxuryDetail";

import { LUXURY_LISTING_PROJECTS } from "@/data/luxuryListingProjects";

import { getLuxuryProjectBySlug } from "@/lib/luxuryProjectDetail";



export async function generateStaticParams() {
  return LUXURY_LISTING_PROJECTS.map((p) => ({ slug: p.id }));
}

export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };



export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { slug } = await params;

  const project = getLuxuryProjectBySlug(slug);

  if (!project) return { title: "Property | GPG" };

  return {

    title: `${project.title} | Luxury Properties | GPG`,

    description: `View details, pricing, and location for ${project.title} in ${project.location}.`,

  };

}



export default async function LuxuryDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getLuxuryProjectBySlug(slug);

  if (!project) notFound();



  return (

    <>

      <Navbar />

      <Suspense fallback={<div className="min-h-screen bg-white pt-28" />}>
        <LuxuryDetail project={project} />
      </Suspense>

      <Footer />

    </>

  );

}

