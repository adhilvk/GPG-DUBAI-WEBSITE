import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import OfficeDetail from "@/components/OfficeDetail/OfficeDetail";
import { OFFICE_LISTINGS, getOfficeBySlug } from "@/data/officeListings";

export async function generateStaticParams() {
  return OFFICE_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getOfficeBySlug(slug);
  if (!p) return { title: "Property | GPG" };
  return {
    title: `${p.location} | Offices | GPG`,
    description: `View details, pricing, and location for ${p.location} in Dubai.`,
  };
}

export default async function OfficeDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getOfficeBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <Navbar />
      <OfficeDetail property={property} />
      <Footer />
    </>
  );
}
