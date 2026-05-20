"use client";

import ResidentialDetail from "@/components/ResidentialDetail/ResidentialDetail";
import { luxuryDetailConfig } from "@/lib/residentialListingConfig";

export default function LuxuryDetail({ property }) {
  return <ResidentialDetail property={property} detailConfig={luxuryDetailConfig} />;
}
