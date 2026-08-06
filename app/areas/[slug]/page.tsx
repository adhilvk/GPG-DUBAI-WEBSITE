import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CommunityDetail from "@/components/CommunityDetail/CommunityDetail";
import { COMMUNITIES } from "@/data/communities";
import { getCommunityBySlug } from "@/lib/communityDetail";

export async function generateStaticParams() {
  return COMMUNITIES.map((community) => ({ slug: community.id }));
}

export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) return { title: "Community | GPG" };

  return {
    title: `${community.title} | Communities | GPG`,
    description: community.paragraphs[0],
  };
}

export default async function CommunityPage({ params }: Props) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) notFound();

  return (
    <>
      <Navbar />
      <CommunityDetail community={community} />
      <Footer />
    </>
  );
}
