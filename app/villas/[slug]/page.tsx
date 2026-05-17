import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import VillaDetail from "@/components/VillaDetail/VillaDetail";
import { VILLA_LISTINGS, getVillaBySlug } from "@/data/villaListings";

export async function generateStaticParams() {
  return VILLA_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getVillaBySlug(slug);
  if (!p) return { title: "Property | GPG" };
  return {
    title: `${p.location} | Villas | GPG`,
    description: `View details, pricing, and location for ${p.location} in Dubai.`,
  };
}

export default async function VillaDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getVillaBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <Navbar />
      <VillaDetail property={property} />
      <Footer />
    </>
  );
}
