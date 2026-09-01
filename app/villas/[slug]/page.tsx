import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import VillaDetail from "@/components/VillaDetail/VillaDetail";
import JsonLd from "@/components/seo/JsonLd";
import { VILLA_LISTINGS, getVillaBySlug } from "@/data/villaListings";
import { breadcrumbSchema, realEstateListingSchema } from "@/lib/schema";
import { propertyMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return VILLA_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getVillaBySlug(slug);
  if (!p) return { title: "Property | GPG Global Real Estate", robots: { index: false } };
  return propertyMetadata({
    name: p.location,
    location: "Dubai",
    description: p.description,
    path: `/villas/${slug}`,
    image: p.images?.[0],
  });
}

export default async function VillaDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getVillaBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Villas", path: "/villas" },
            { name: property.location, path: `/villas/${slug}` },
          ]),
          realEstateListingSchema({
            name: property.location,
            description: property.description,
            path: `/villas/${slug}`,
            image: property.images,
            location: property.location,
            price: property.price,
            propertyType: "Villa",
            beds: property.beds,
            baths: property.baths,
            sqft: property.sqft,
          }),
        ]}
      />
      <Navbar />
      <VillaDetail property={property} />
      <Footer />
    </>
  );
}
