"use client";

import ResidentialDetail from "@/components/ResidentialDetail/ResidentialDetail";
import { retailsDetailConfig } from "@/lib/residentialListingConfig";

export default function RetailDetail({ property }) {
  return <ResidentialDetail property={property} detailConfig={retailsDetailConfig} />;
}
