import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TownhouseDetail from "@/components/TownhouseDetail/TownhouseDetail";
import JsonLd from "@/components/seo/JsonLd";
import { TOWNHOUSE_LISTINGS, getTownhouseBySlug } from "@/data/townhouseListings";
import { breadcrumbSchema, realEstateListingSchema } from "@/lib/schema";
import { propertyMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return TOWNHOUSE_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getTownhouseBySlug(slug);
  if (!p) return { title: "Property | GPG Global Real Estate", robots: { index: false } };
  return propertyMetadata({
    name: p.location,
    location: "Dubai",
    description: p.description,
    path: `/townhouses/${slug}`,
    image: p.images?.[0],
  });
}

export default async function TownhouseDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getTownhouseBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Townhouses", path: "/townhouses" },
            { name: property.location, path: `/townhouses/${slug}` },
          ]),
          realEstateListingSchema({
            name: property.location,
            description: property.description,
            path: `/townhouses/${slug}`,
            image: property.images,
            location: property.location,
            price: property.price,
            propertyType: "Townhouse",
            beds: property.beds,
            baths: property.baths,
            sqft: property.sqft,
          }),
        ]}
      />
      <Navbar />
      <TownhouseDetail property={property} />
      <Footer />
    </>
  );
}
