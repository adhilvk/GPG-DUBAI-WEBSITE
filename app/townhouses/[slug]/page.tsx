import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TownhouseDetail from "@/components/TownhouseDetail/TownhouseDetail";
import { TOWNHOUSE_LISTINGS, getTownhouseBySlug } from "@/data/townhouseListings";

export async function generateStaticParams() {
  return TOWNHOUSE_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getTownhouseBySlug(slug);
  if (!p) return { title: "Property | GPG" };
  return {
    title: `${p.location} | Townhouses | GPG`,
    description: `View details, pricing, and location for ${p.location} in Dubai.`,
  };
}

export default async function TownhouseDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getTownhouseBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <Navbar />
      <TownhouseDetail property={property} />
      <Footer />
    </>
  );
}
