import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TrendingDetail from "@/components/TrendingDetail/TrendingDetail";
import JsonLd from "@/components/seo/JsonLd";
import { TRENDING_PROJECTS } from "@/data/trendingProjects";
import { getProjectImages, getProjectDescription } from "@/lib/luxuryProjectDetail";
import { getTrendingProjectBySlug } from "@/lib/trendingProjectDetail";
import { breadcrumbSchema, realEstateListingSchema } from "@/lib/schema";
import { propertyMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return TRENDING_PROJECTS.map((project) => ({ slug: project.id }));
}

export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getTrendingProjectBySlug(slug);
  if (!project) return { title: "Project | GPG Global Real Estate", robots: { index: false } };

  return propertyMetadata({
    name: project.title,
    location: project.location,
    description: getProjectDescription(project),
    path: `/trending-projects/${slug}`,
    image: project.image ?? getProjectImages(project)[0],
  });
}

export default async function TrendingProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getTrendingProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Trending Projects", path: "/trending-projects" },
            { name: project.title, path: `/trending-projects/${slug}` },
          ]),
          realEstateListingSchema({
            name: project.title,
            description: getProjectDescription(project),
            path: `/trending-projects/${slug}`,
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
        <TrendingDetail project={project} />
      </Suspense>
      <Footer />
    </>
  );
}
