"use client";

import ResidentialDetail from "@/components/ResidentialDetail/ResidentialDetail";
import { apartmentsDetailConfig } from "@/lib/residentialListingConfig";

export default function ApartmentDetail({ property }) {
  return <ResidentialDetail property={property} detailConfig={apartmentsDetailConfig} />;
}
