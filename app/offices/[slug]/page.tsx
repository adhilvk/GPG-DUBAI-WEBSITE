import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import OfficeDetail from "@/components/OfficeDetail/OfficeDetail";
import JsonLd from "@/components/seo/JsonLd";
import { OFFICE_LISTINGS, getOfficeBySlug } from "@/data/officeListings";
import { breadcrumbSchema, realEstateListingSchema } from "@/lib/schema";
import { propertyMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return OFFICE_LISTINGS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getOfficeBySlug(slug);
  if (!p) return { title: "Property | GPG Global Real Estate", robots: { index: false } };
  return propertyMetadata({
    name: p.location,
    location: "Dubai",
    description: p.description,
    path: `/offices/${slug}`,
    image: p.images?.[0],
  });
}

export default async function OfficeDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getOfficeBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Offices", path: "/offices" },
            { name: property.location, path: `/offices/${slug}` },
          ]),
          realEstateListingSchema({
            name: property.location,
            description: property.description,
            path: `/offices/${slug}`,
            image: property.images,
            location: property.location,
            price: property.price,
            propertyType: "Office",
            beds: property.beds,
            baths: property.baths,
            sqft: property.sqft,
          }),
        ]}
      />
      <Navbar />
      <OfficeDetail property={property} />
      <Footer />
    </>
  );
}
