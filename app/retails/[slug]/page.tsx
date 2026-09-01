import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RetailDetail from "@/components/RetailDetail/RetailDetail";
import JsonLd from "@/components/seo/JsonLd";
import { RETAIL_LISTINGS, getRetailBySlug } from "@/data/retailListings";
import { breadcrumbSchema, realEstateListingSchema } from "@/lib/schema";
import { propertyMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return RETAIL_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getRetailBySlug(slug);
  if (!p) return { title: "Property | GPG Global Real Estate", robots: { index: false } };
  return propertyMetadata({
    name: p.location,
    location: "Dubai",
    description: p.description,
    path: `/retails/${slug}`,
    image: p.images?.[0],
  });
}

export default async function RetailDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getRetailBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Retail Properties", path: "/retails" },
            { name: property.location, path: `/retails/${slug}` },
          ]),
          realEstateListingSchema({
            name: property.location,
            description: property.description,
            path: `/retails/${slug}`,
            image: property.images,
            location: property.location,
            price: property.price,
            propertyType: "Retail",
            beds: property.beds,
            baths: property.baths,
            sqft: property.sqft,
          }),
        ]}
      />
      <Navbar />
      <RetailDetail property={property} />
      <Footer />
    </>
  );
}
