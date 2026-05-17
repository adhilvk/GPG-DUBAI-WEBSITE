"use client";

import ResidentialDetail from "@/components/ResidentialDetail/ResidentialDetail";
import { townhousesDetailConfig } from "@/lib/residentialListingConfig";

export default function TownhouseDetail({ property }) {
  return <ResidentialDetail property={property} detailConfig={townhousesDetailConfig} />;
}
