import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CommunityDetail from "@/components/CommunityDetail/CommunityDetail";
import JsonLd from "@/components/seo/JsonLd";
import { COMMUNITIES } from "@/data/communities";
import { getCommunityBySlug } from "@/lib/communityDetail";
import { breadcrumbSchema, placeSchema } from "@/lib/schema";
import { communityMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return COMMUNITIES.map((community) => ({ slug: community.id }));
}

export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) return { title: "Community | GPG Global Real Estate", robots: { index: false } };

  return communityMetadata({
    title: community.title,
    description: community.paragraphs[0],
    path: `/areas/${slug}`,
    image: community.image,
  });
}

export default async function CommunityPage({ params }: Props) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Communities", path: "/areas" },
            { name: community.title, path: `/areas/${slug}` },
          ]),
          placeSchema({
            name: community.title,
            description: community.paragraphs[0],
            path: `/areas/${slug}`,
            image: community.image,
          }),
        ]}
      />
      <Navbar />
      <CommunityDetail community={community} />
      <Footer />
    </>
  );
}
