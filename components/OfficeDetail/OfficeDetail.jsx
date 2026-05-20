"use client";

import ResidentialDetail from "@/components/ResidentialDetail/ResidentialDetail";
import { officesDetailConfig } from "@/lib/residentialListingConfig";

export default function OfficeDetail({ property }) {
  return <ResidentialDetail property={property} detailConfig={officesDetailConfig} />;
}
