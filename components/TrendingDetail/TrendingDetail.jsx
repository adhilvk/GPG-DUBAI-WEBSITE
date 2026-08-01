"use client";

import LuxuryProjectDetail from "@/components/LuxuryProjectDetail/LuxuryProjectDetail";
import { useLanguage } from "@/context/LanguageContext";
import { getRelatedTrendingProjects } from "@/lib/trendingProjectDetail";

export default function TrendingDetail({ project }) {
  const { t } = useLanguage();

  return (
    <LuxuryProjectDetail
      project={project}
      listHref="/trending-projects"
      listLabel={t("trendingProjectsPage.breadcrumb")}
      getRelatedProjects={getRelatedTrendingProjects}
      projectHrefBase="/trending-projects"
    />
  );
}
