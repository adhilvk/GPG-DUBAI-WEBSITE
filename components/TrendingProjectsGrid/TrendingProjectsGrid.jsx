"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import PremiumFilterSelect from "@/components/PremiumFilterSelect/PremiumFilterSelect";
import TrendingProjectCard from "@/components/TrendingProjectCard/TrendingProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import { TRENDING_PROJECTS } from "@/data/trendingProjects";

const PROPERTY_TYPES = [
  { value: "", labelKey: "allTypes" },
  { value: "villas", labelKey: "villas" },
  { value: "townhouses", labelKey: "townhouses" },
  { value: "apartments", labelKey: "apartments" },
];

const LOCATIONS = [
  { value: "", labelKey: "allLocations" },
  { value: "dubai", labelKey: "dubai" },
  { value: "abudhabi", labelKey: "abudhabi" },
  { value: "rasalkhaimah", labelKey: "rasalkhaimah" },
];

const BUDGETS = [
  { value: "", labelKey: "allBudgets" },
  { value: "under-1m", labelKey: "under1m" },
  { value: "1m-5m", labelKey: "range1m5m" },
  { value: "5m-10m", labelKey: "range5m10m" },
  { value: "10m-25m", labelKey: "range10m25m" },
  { value: "25m-plus", labelKey: "plus25m" },
];

const CARDS_PER_PAGE = 9;
const VALID_TYPES = new Set(["villas", "townhouses", "apartments"]);

function parsePriceAed(project) {
  const raw = String(project.price).replace(/,/g, "").trim().toLowerCase();
  if (raw.endsWith("m")) return parseFloat(raw.slice(0, -1)) * 1_000_000;
  if (raw.endsWith("k")) return parseFloat(raw.slice(0, -1)) * 1_000;
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

function getEmirate(project) {
  const location = project.location?.toLowerCase() ?? "";
  if (location.includes("abu dhabi")) return "abudhabi";
  if (location.includes("ras al") || location.includes("rak")) return "rasalkhaimah";
  return "dubai";
}

function matchesPropertyType(project, propertyType) {
  if (!propertyType) return true;
  if (project.category === propertyType) return true;

  const type = project.propertyType?.toLowerCase() ?? "";
  if (propertyType === "townhouses") return type.includes("townhouse");
  if (propertyType === "villas") return type.includes("villa");
  if (propertyType === "apartments") {
    return type.includes("apartment") || type.includes("penthouse") || type.includes("office");
  }

  return false;
}

function matchesBudget(project, budget) {
  if (!budget) return true;

  const price = parsePriceAed(project);
  if (price == null) return false;

  switch (budget) {
    case "under-1m":
      return price < 1_000_000;
    case "1m-5m":
      return price >= 1_000_000 && price < 5_000_000;
    case "5m-10m":
      return price >= 5_000_000 && price < 10_000_000;
    case "10m-25m":
      return price >= 10_000_000 && price < 25_000_000;
    case "25m-plus":
      return price >= 25_000_000;
    default:
      return true;
  }
}

function buildListingPages(projects, cardsPerPage) {
  const pinned = projects.filter((project) => project.listingPage != null);
  if (!pinned.length) {
    const pages = [];
    for (let i = 0; i < projects.length; i += cardsPerPage) {
      pages.push(projects.slice(i, i + cardsPerPage));
    }
    return pages;
  }

  const unpinned = projects.filter((project) => project.listingPage == null);
  const maxPage = Math.max(
    Math.ceil(unpinned.length / cardsPerPage),
    ...pinned.map((project) => project.listingPage)
  );
  const pages = [];

  for (let page = 1; page <= maxPage; page += 1) {
    const pageItems = [];

    for (let slot = 0; slot < cardsPerPage; slot += 1) {
      const pinnedHere = pinned.find(
        (project) => project.listingPage === page && (project.listingSlot ?? 0) === slot
      );

      if (pinnedHere) {
        pageItems.push(pinnedHere);
      } else if (unpinned.length) {
        pageItems.push(unpinned.shift());
      }
    }

    if (pageItems.length) {
      pages.push(pageItems);
    }
  }

  if (unpinned.length) {
    let lastPage = pages[pages.length - 1];

    while (unpinned.length) {
      if (!lastPage || lastPage.length >= cardsPerPage) {
        lastPage = [];
        pages.push(lastPage);
      }
      lastPage.push(unpinned.shift());
    }
  }

  return pages;
}

export default function TrendingProjectsGrid() {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") ?? "";
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

  useEffect(() => {
    setPropertyType(VALID_TYPES.has(typeParam) ? typeParam : "");
  }, [typeParam]);

  const updateQuery = useCallback(
    (updates) => {
      const nextPropertyType =
        updates.propertyType !== undefined ? updates.propertyType : propertyType;
      const nextLocation = updates.location !== undefined ? updates.location : location;
      const nextBudget = updates.budget !== undefined ? updates.budget : budget;

      setPropertyType(nextPropertyType);
      setLocation(nextLocation);
      setBudget(nextBudget);

      const params = new URLSearchParams();
      if (nextPropertyType) params.set("type", nextPropertyType);
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname);
    },
    [propertyType, location, budget, pathname, router]
  );

  const filteredProjects = useMemo(() => {
    return TRENDING_PROJECTS.filter((project) => {
      if (project.hiddenFromListing) return false;
      if (!matchesPropertyType(project, propertyType)) return false;
      if (location && getEmirate(project) !== location) return false;
      if (!matchesBudget(project, budget)) return false;
      return true;
    });
  }, [propertyType, location, budget]);

  const listingPages = useMemo(
    () => buildListingPages(filteredProjects, CARDS_PER_PAGE),
    [filteredProjects]
  );

  const totalPages = Math.max(1, listingPages.length);
  const safePage = Math.min(currentPage, totalPages);

  const listingReturnPath = useMemo(() => {
    const params = new URLSearchParams();
    if (propertyType) params.set("type", propertyType);
    if (safePage > 1) params.set("page", String(safePage));
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, propertyType, safePage]);

  const paginatedProjects = useMemo(
    () => listingPages[safePage - 1] ?? [],
    [listingPages, safePage]
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      const params = new URLSearchParams();
      if (propertyType) params.set("type", propertyType);
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname);
    }
  }, [currentPage, totalPages, propertyType, pathname, router]);

  const buildPageHref = (page) => {
    const params = new URLSearchParams();
    if (propertyType) params.set("type", propertyType);
    if (page > 1) params.set("page", String(page));
    const query = params.toString();
    return query ? `/trending-projects?${query}` : "/trending-projects";
  };

  const showPagination = totalPages > 1;

  return (
    <main className="bg-white px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={t("trendingProjectsPage.title")}
          accent={t("trendingProjectsPage.accent")}
          headingAs="h1"
        />

        <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-4 md:mb-10 md:p-5">
          <div className="mb-4 flex items-center gap-2 text-slate-700">
            <Search size={18} className="text-[#E31E24]" />
            <p className="text-sm font-semibold">{t("trendingProjectsPage.searchTitle")}</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <PremiumFilterSelect
              label={t("trendingProjectsPage.propertyType")}
              value={propertyType}
              onChange={(value) => updateQuery({ propertyType: value })}
              options={PROPERTY_TYPES}
              t={t}
              prefix="trendingProjectsPage.filters"
            />
            <PremiumFilterSelect
              label={t("trendingProjectsPage.location")}
              value={location}
              onChange={(value) => updateQuery({ location: value })}
              options={LOCATIONS}
              t={t}
              prefix="trendingProjectsPage.filters"
            />
            <PremiumFilterSelect
              label={t("trendingProjectsPage.budget")}
              value={budget}
              onChange={(value) => updateQuery({ budget: value })}
              options={BUDGETS}
              t={t}
              prefix="trendingProjectsPage.filters"
            />
          </div>
          <p className="mt-4 text-sm text-slate-500">
            {filteredProjects.length} {t("trendingProjectsPage.projectsFound")}
            {showPagination && (
              <span>
                {" "}
                · {t("trendingProjectsPage.page")} {safePage} {t("trendingProjectsPage.of")}{" "}
                {totalPages}
              </span>
            )}
          </p>
        </div>

        {paginatedProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedProjects.map((project) => (
                <TrendingProjectCard
                  key={project.id}
                  project={project}
                  returnTo={listingReturnPath}
                />
              ))}
            </div>

            {showPagination && (
              <nav
                className="mt-10 flex items-center justify-center gap-2"
                aria-label={t("trendingProjectsPage.pagination")}
              >
                <Link
                  href={buildPageHref(safePage - 1)}
                  aria-disabled={safePage <= 1}
                  className={`inline-flex items-center gap-1 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                    safePage <= 1
                      ? "pointer-events-none border-slate-100 text-slate-300"
                      : "border-slate-200 text-slate-700 hover:border-[#E31E24] hover:text-[#E31E24]"
                  }`}
                >
                  <ChevronLeft size={16} />
                  {t("trendingProjectsPage.previous")}
                </Link>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={buildPageHref(page)}
                    aria-current={page === safePage ? "page" : undefined}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold transition-colors ${
                      page === safePage
                        ? "border-[#E31E24] bg-[#E31E24] text-white"
                        : "border-slate-200 text-slate-700 hover:border-[#E31E24] hover:text-[#E31E24]"
                    }`}
                  >
                    {page}
                  </Link>
                ))}

                <Link
                  href={buildPageHref(safePage + 1)}
                  aria-disabled={safePage >= totalPages}
                  className={`inline-flex items-center gap-1 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${
                    safePage >= totalPages
                      ? "pointer-events-none border-slate-100 text-slate-300"
                      : "border-slate-200 text-slate-700 hover:border-[#E31E24] hover:text-[#E31E24]"
                  }`}
                >
                  {t("trendingProjectsPage.next")}
                  <ChevronRight size={16} />
                </Link>
              </nav>
            )}
          </>
        ) : (
          <p className="rounded-xl border border-dashed border-slate-200 py-16 text-center text-slate-500">
            {t("trendingProjectsPage.noResults")}
          </p>
        )}
      </div>
    </main>
  );
}
