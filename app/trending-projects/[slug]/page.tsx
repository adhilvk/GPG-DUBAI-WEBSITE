import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TrendingDetail from "@/components/TrendingDetail/TrendingDetail";
import { TRENDING_PROJECTS } from "@/data/trendingProjects";
import { getTrendingProjectBySlug } from "@/lib/trendingProjectDetail";

export async function generateStaticParams() {
  return TRENDING_PROJECTS.map((project) => ({ slug: project.id }));
}

export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getTrendingProjectBySlug(slug);

  if (!project) return { title: "Project | GPG" };

  return {
    title: `${project.title} | Trending Projects | GPG`,
    description: `View details, pricing, and location for ${project.title} in ${project.location}.`,
  };
}

export default async function TrendingProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getTrendingProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <Navbar />
      <TrendingDetail project={project} />
      <Footer />
    </>
  );
}
