"use client";

import ResidentialDetail from "@/components/ResidentialDetail/ResidentialDetail";
import { villasDetailConfig } from "@/lib/residentialListingConfig";

export default function VillaDetail({ property }) {
  return <ResidentialDetail property={property} detailConfig={villasDetailConfig} />;
}
