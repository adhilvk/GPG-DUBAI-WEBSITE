"use client";

import LuxuryProjectCard from "@/components/LuxuryProjectCard/LuxuryProjectCard";
import { buildDetailHref } from "@/lib/navigation";

export default function TrendingProjectCard({ project, compact = false, returnTo }) {
  return (
    <LuxuryProjectCard
      project={project}
      compact={compact}
      href={buildDetailHref(`/trending-projects/${project.id}`, returnTo)}
    />
  );
}
