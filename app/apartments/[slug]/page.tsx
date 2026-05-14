import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ApartmentDetail from "@/components/ApartmentDetail/ApartmentDetail";
import { APARTMENT_LISTINGS, getListingBySlug } from "@/data/apartmentListings";

export async function generateStaticParams() {
  return APARTMENT_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getListingBySlug(slug);
  if (!p) return { title: "Property | GPG" };
  return {
    title: `${p.location} | Apartments | GPG`,
    description: `View details, pricing, and location for ${p.location} in Dubai.`,
  };
}

export default async function ApartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getListingBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <Navbar />
      <ApartmentDetail property={property} />
      <Footer />
    </>
  );
}
