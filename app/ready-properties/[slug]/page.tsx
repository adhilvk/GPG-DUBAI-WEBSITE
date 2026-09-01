import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyDetail from "@/components/ReadyDetail/ReadyDetail";
import JsonLd from "@/components/seo/JsonLd";
import { READY_LISTINGS, getReadyBySlug } from "@/data/readyListings";
import { breadcrumbSchema, realEstateListingSchema } from "@/lib/schema";
import { propertyMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return READY_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getReadyBySlug(slug);
  if (!p) return { title: "Property | GPG Global Real Estate", robots: { index: false } };
  return propertyMetadata({
    name: p.location,
    location: "Dubai",
    description: p.description,
    path: `/ready-properties/${slug}`,
    image: p.images?.[0],
  });
}

export default async function ReadyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getReadyBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Ready Properties", path: "/ready-properties" },
            { name: property.location, path: `/ready-properties/${slug}` },
          ]),
          realEstateListingSchema({
            name: property.location,
            description: property.description,
            path: `/ready-properties/${slug}`,
            image: property.images,
            location: property.location,
            price: property.price,
            propertyType: "Ready Property",
            beds: property.beds,
            baths: property.baths,
            sqft: property.sqft,
          }),
        ]}
      />
      <Navbar />
      <ReadyDetail property={property} />
      <Footer />
    </>
  );
}
