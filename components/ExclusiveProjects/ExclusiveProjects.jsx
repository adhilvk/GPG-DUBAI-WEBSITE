"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import "./ExclusiveProjects.css";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ArticleDownload from "@/components/ArticleDownload/ArticleDownload";
import ProjectCarousel from "@/components/ProjectCarousel/ProjectCarousel";
import ViewAllProjectsCard from "@/components/ViewAllProjectsCard/ViewAllProjectsCard";
import { useLanguage } from "@/context/LanguageContext";
import { LUXURY_LISTING_PROJECTS } from "@/data/luxuryListingProjects";
import { TRENDING_PROJECTS } from "@/data/trendingProjects";
import LuxuryProjectCard from "@/components/LuxuryProjectCard/LuxuryProjectCard";
import TrendingProjectCard from "@/components/TrendingProjectCard/TrendingProjectCard";
import OurAwards from "@/components/OurAwards/OurAwards";
import { buildDetailHref } from "@/lib/navigation";

const CAROUSEL_PROJECT_LIMIT = 5;

const EMIRATE_FILTERS = [
  { id: "dubai", label: "Dubai" },
  { id: "abudhabi", label: "Abu Dhabi" },
  { id: "rasalkhaimah", label: "Ras Al-Khaimah" },
];

function getProjectEmirate(project) {
  const location = project.location?.toLowerCase() ?? "";
  if (location.includes("abu dhabi")) return "abudhabi";
  if (location.includes("ras al") || location.includes("rak")) return "rasalkhaimah";
  return "dubai";
}

const ViewAllButton = ({ href, label }) => (
  <Link
    href={href}
    className="inline-flex items-center gap-1.5 rounded-lg border border-[#E31E24] px-6 py-2.5 text-[11px] font-bold uppercase tracking-wide text-[#E31E24] transition-colors hover:bg-[#E31E24] hover:text-white sm:px-8 sm:text-xs"
  >
    {label}
    <ChevronRight size={14} />
  </Link>
);

const ExclusiveProjectsSlider = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [activeEmirate, setActiveEmirate] = useState("dubai");
  const homepageReturnPath = pathname || "/";

  const trendingProjects = useMemo(
    () =>
      TRENDING_PROJECTS.filter(
        (project) => !project.hiddenFromListing && getProjectEmirate(project) === activeEmirate
      ).slice(
        0,
        CAROUSEL_PROJECT_LIMIT
      ),
    [activeEmirate]
  );
  const luxuryListings = useMemo(() => LUXURY_LISTING_PROJECTS.slice(0, CAROUSEL_PROJECT_LIMIT), []);

  const luxuryViewAllCard = {
    title: t("exclusiveProjects.exploreLuxuryTitle"),
    subtitle: t("exclusiveProjects.exploreLuxurySubtitle"),
    buttonLabel: t("exclusiveProjects.viewAllListings"),
  };

  const trendingViewAllCard = {
    title: t("exclusiveProjects.exploreTrendingTitle"),
    subtitle: t("exclusiveProjects.exploreTrendingSubtitle"),
    buttonLabel: t("exclusiveProjects.viewAllProjects"),
  };

  return (
    <section className="bg-white px-4 pb-16 pt-12 md:px-12 md:pb-20 md:pt-16">
      <div className="max-w-360 mx-auto">
        <div className="px-0 sm:px-2 md:px-0">
          <SectionHeader
            title={t("trendingProjectsPage.title")}
            accent={t("trendingProjectsPage.accent")}
          />

          <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3">
            {EMIRATE_FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveEmirate(filter.id)}
                aria-pressed={activeEmirate === filter.id}
                className={`w-[10.75rem] shrink-0 rounded-lg border px-3 py-2 text-center text-[11px] font-bold uppercase tracking-wide transition-colors sm:w-[11.75rem] sm:px-4 sm:text-xs ${
                  activeEmirate === filter.id
                    ? "border-[#E31E24] bg-[#E31E24] text-white"
                    : "border-[#E31E24] text-[#E31E24] hover:bg-[#E31E24] hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <ProjectCarousel
            items={trendingProjects}
            renderItem={(item) => (
              <TrendingProjectCard project={item} compact returnTo={homepageReturnPath} />
            )}
            getItemKey={(item) => item.id}
            resetKey={`trending-${activeEmirate}`}
            prevLabel="Previous projects"
            nextLabel="Next projects"
            cardClassName="luxury-marquee__card"
            trailingCard={
              <ViewAllProjectsCard href="/trending-projects" {...trendingViewAllCard} />
            }
          />
          <div className="mt-8 flex justify-center">
            <ViewAllButton
              href="/trending-projects"
              label={t("exclusiveProjects.viewAllProjects")}
            />
          </div>

          <div className="mt-14 border-t border-slate-100 pt-12 md:mt-16 md:pt-14">
            <SectionHeader
              title={t("exclusiveProjects.listingTitle")}
              accent={t("exclusiveProjects.listingAccent")}
            />
            <ProjectCarousel
              items={luxuryListings}
              renderItem={(item) => (
                <LuxuryProjectCard
                  project={item}
                  compact
                  href={buildDetailHref(`/luxury-properties/${item.id}`, homepageReturnPath)}
                />
              )}
              getItemKey={(item) => item.id}
              resetKey="luxury"
              prevLabel="Previous luxury listings"
              nextLabel="Next luxury listings"
              cardClassName="luxury-marquee__card"
              trailingCard={
                <ViewAllProjectsCard href="/luxury-properties" {...luxuryViewAllCard} />
              }
            />
            <div className="mt-8 flex justify-center">
              <ViewAllButton
                href="/luxury-properties"
                label={t("exclusiveProjects.viewAllListings")}
              />
            </div>
          </div>

          <ArticleDownload />

          <div className="mt-14 md:mt-20">
            <OurAwards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProjectsSlider;
