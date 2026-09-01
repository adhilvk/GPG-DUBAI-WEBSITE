import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LuxuryDetail from "@/components/LuxuryDetail/LuxuryDetail";
import JsonLd from "@/components/seo/JsonLd";
import { LUXURY_LISTING_PROJECTS } from "@/data/luxuryListingProjects";
import { getLuxuryProjectBySlug, getProjectImages, getProjectDescription } from "@/lib/luxuryProjectDetail";
import { breadcrumbSchema, realEstateListingSchema } from "@/lib/schema";
import { propertyMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return LUXURY_LISTING_PROJECTS.map((p) => ({ slug: p.id }));
}

export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getLuxuryProjectBySlug(slug);
  if (!project) return { title: "Property | GPG Global Real Estate", robots: { index: false } };

  return propertyMetadata({
    name: project.title,
    location: project.location,
    description: getProjectDescription(project),
    path: `/luxury-properties/${slug}`,
    image: project.image ?? getProjectImages(project)[0],
  });
}

export default async function LuxuryDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getLuxuryProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Luxury Properties", path: "/luxury-properties" },
            { name: project.title, path: `/luxury-properties/${slug}` },
          ]),
          realEstateListingSchema({
            name: project.title,
            description: getProjectDescription(project),
            path: `/luxury-properties/${slug}`,
            image: getProjectImages(project),
            location: project.location,
            price: project.price,
            propertyType: project.propertyType,
            beds: project.beds,
            baths: project.baths,
            sqft: project.sqft,
          }),
        ]}
      />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-white pt-28" />}>
        <LuxuryDetail project={project} />
      </Suspense>
      <Footer />
    </>
  );
}
