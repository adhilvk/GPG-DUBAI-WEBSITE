"use client";

import ResidentialDetail from "@/components/ResidentialDetail/ResidentialDetail";
import { readyDetailConfig } from "@/lib/residentialListingConfig";

export default function ReadyDetail({ property }) {
  return <ResidentialDetail property={property} detailConfig={readyDetailConfig} />;
}
