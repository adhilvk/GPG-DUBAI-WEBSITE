import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RetailDetail from "@/components/RetailDetail/RetailDetail";
import { RETAIL_LISTINGS, getRetailBySlug } from "@/data/retailListings";

export async function generateStaticParams() {
  return RETAIL_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getRetailBySlug(slug);
  if (!p) return { title: "Property | GPG" };
  return {
    title: `${p.location} | Retails | GPG`,
    description: `View details, pricing, and location for ${p.location} in Dubai.`,
  };
}

export default async function RetailDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getRetailBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <Navbar />
      <RetailDetail property={property} />
      <Footer />
    </>
  );
}
