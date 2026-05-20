import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyDetail from "@/components/ReadyDetail/ReadyDetail";
import { READY_LISTINGS, getReadyBySlug } from "@/data/readyListings";

export async function generateStaticParams() {
  return READY_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getReadyBySlug(slug);
  if (!p) return { title: "Property | GPG" };
  return {
    title: `${p.location} | Ready Properties | GPG`,
    description: `View details, pricing, and location for ${p.location} in Dubai.`,
  };
}

export default async function ReadyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getReadyBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <Navbar />
      <ReadyDetail property={property} />
      <Footer />
    </>
  );
}
