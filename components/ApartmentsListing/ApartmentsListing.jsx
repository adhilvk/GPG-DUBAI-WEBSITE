"use client";

import ResidentialListing from "@/components/ResidentialListing/ResidentialListing";
import { apartmentsListingConfig } from "@/lib/residentialListingConfig";

export default function ApartmentsListing() {
  return <ResidentialListing config={apartmentsListingConfig} />;
}
