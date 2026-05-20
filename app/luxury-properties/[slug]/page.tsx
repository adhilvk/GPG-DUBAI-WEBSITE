import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LuxuryDetail from "@/components/LuxuryDetail/LuxuryDetail";
import { LUXURY_LISTINGS, getLuxuryBySlug } from "@/data/luxuryListings";

export async function generateStaticParams() {
  return LUXURY_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getLuxuryBySlug(slug);
  if (!p) return { title: "Property | GPG" };
  return {
    title: `${p.location} | Luxury Properties | GPG`,
    description: `View details, pricing, and location for ${p.location} in Dubai.`,
  };
}

export default async function LuxuryDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getLuxuryBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <Navbar />
      <LuxuryDetail property={property} />
      <Footer />
    </>
  );
}
