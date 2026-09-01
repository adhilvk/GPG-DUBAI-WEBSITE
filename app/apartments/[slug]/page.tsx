import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ApartmentDetail from "@/components/ApartmentDetail/ApartmentDetail";
import JsonLd from "@/components/seo/JsonLd";
import { APARTMENT_LISTINGS, getListingBySlug } from "@/data/apartmentListings";
import { breadcrumbSchema, realEstateListingSchema } from "@/lib/schema";
import { propertyMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return APARTMENT_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getListingBySlug(slug);
  if (!p) return { title: "Property | GPG Global Real Estate", robots: { index: false } };
  return propertyMetadata({
    name: p.location,
    location: "Dubai",
    description: p.description,
    path: `/apartments/${slug}`,
    image: p.images?.[0],
  });
}

export default async function ApartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getListingBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Apartments", path: "/apartments" },
            { name: property.location, path: `/apartments/${slug}` },
          ]),
          realEstateListingSchema({
            name: property.location,
            description: property.description,
            path: `/apartments/${slug}`,
            image: property.images,
            location: property.location,
            price: property.price,
            propertyType: property.propertyType,
            beds: property.beds,
            baths: property.baths,
            sqft: property.sqft,
          }),
        ]}
      />
      <Navbar />
      <ApartmentDetail property={property} />
      <Footer />
    </>
  );
}
