import LuxuryProjectCard from "@/components/LuxuryProjectCard/LuxuryProjectCard";

export default function TrendingProjectCard({ project, compact = false }) {
  return (
    <LuxuryProjectCard
      project={project}
      compact={compact}
      href={`/trending-projects/${project.id}`}
    />
  );
}
