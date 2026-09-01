"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import PremiumFilterSelect from "@/components/PremiumFilterSelect/PremiumFilterSelect";
import LuxuryProjectCard from "@/components/LuxuryProjectCard/LuxuryProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import { LUXURY_LISTING_PROJECTS } from "@/data/luxuryListingProjects";
import { buildDetailHref } from "@/lib/navigation";

const VALID_PROPERTY_TYPES = [
  "villa",
  "apartment",
  "penthouse",
  "mansion",
  "townhouse",
  "land",
  "office",
  "retail",
];

const PROPERTY_TYPES = [
  { value: "", labelKey: "allTypes" },
  { value: "villa", labelKey: "villa" },
  { value: "apartment", labelKey: "apartment" },
  { value: "penthouse", labelKey: "penthouse" },
  { value: "mansion", labelKey: "mansion" },
  { value: "townhouse", labelKey: "townhouse" },
  { value: "land", labelKey: "land" },
  { value: "office", labelKey: "office" },
  { value: "retail", labelKey: "retail" },
];

const LOCATIONS = [
  { value: "", labelKey: "allLocations" },
  { value: "dubai", labelKey: "dubai" },
  { value: "abudhabi", labelKey: "abudhabi" },
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

function parsePriceAed(project) {
  if (project.price === "Call Us" || project.priceDisplay === "Call Us") return null;

  const raw = String(project.price).replace(/,/g, "").trim().toLowerCase();
  if (raw.endsWith("m")) return parseFloat(raw.slice(0, -1)) * 1_000_000;
  if (raw.endsWith("k")) return parseFloat(raw.slice(0, -1)) * 1_000;
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

function getPropertyCategory(project) {
  const type = `${project.propertyType ?? ""} ${project.title ?? ""}`.toLowerCase();
  if (type.includes("land")) return "land";
  if (type.includes("retail")) return "retail";
  if (type.includes("office")) return "office";
  if (type.includes("mansion")) return "mansion";
  if (type.includes("townhouse")) return "townhouse";
  if (type.includes("penthouse")) return "penthouse";
  if (type.includes("apartment")) return "apartment";
  if (type.includes("villa")) return "villa";
  return "";
}

function getEmirate(project) {
  const location = project.location?.toLowerCase() ?? "";
  if (location.includes("abu dhabi")) return "abudhabi";
  return "dubai";
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

export default function LuxuryListingsGrid() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);
  const typeFromUrl = searchParams.get("type") ?? "";

  useEffect(() => {
    if (VALID_PROPERTY_TYPES.includes(typeFromUrl)) {
      setPropertyType(typeFromUrl);
    } else if (!typeFromUrl) {
      setPropertyType("");
    }
  }, [typeFromUrl]);

  const filteredProjects = useMemo(() => {
    return LUXURY_LISTING_PROJECTS.filter((project) => {
      const category = getPropertyCategory(project);
      const emirate = getEmirate(project);

      if (propertyType && category !== propertyType) return false;
      if (location && emirate !== location) return false;
      if (!matchesBudget(project, budget)) return false;

      return true;
    });
  }, [propertyType, location, budget]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / CARDS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const listingReturnPath = useMemo(() => {
    const params = new URLSearchParams();
    if (propertyType) params.set("type", propertyType);
    if (safePage > 1) params.set("page", String(safePage));
    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  }, [pathname, propertyType, safePage]);

  const paginatedProjects = useMemo(() => {
    const start = (safePage - 1) * CARDS_PER_PAGE;
    return filteredProjects.slice(start, start + CARDS_PER_PAGE);
  }, [filteredProjects, safePage]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      const params = new URLSearchParams();
      if (propertyType) params.set("type", propertyType);
      const qs = params.toString();
      window.history.replaceState(null, "", qs ? `/luxury-properties?${qs}` : "/luxury-properties");
    }
  }, [currentPage, totalPages, propertyType]);

  const buildPageHref = (page) => {
    const params = new URLSearchParams();
    if (propertyType) params.set("type", propertyType);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    return qs ? `/luxury-properties?${qs}` : "/luxury-properties";
  };

  return (
    <main className="bg-white px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={t("luxuryListingsPage.title")}
          accent={t("luxuryListingsPage.accent")}
          headingAs="h1"
        />

        <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-4 md:mb-10 md:p-5">
          <div className="mb-4 flex items-center gap-2 text-slate-700">
            <Search size={18} className="text-[#E31E24]" />
            <p className="text-sm font-semibold">{t("luxuryListingsPage.searchTitle")}</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <PremiumFilterSelect
              label={t("luxuryListingsPage.propertyType")}
              value={propertyType}
              onChange={setPropertyType}
              options={PROPERTY_TYPES}
              t={t}
              prefix="luxuryListingsPage.filters"
            />
            <PremiumFilterSelect
              label={t("luxuryListingsPage.location")}
              value={location}
              onChange={setLocation}
              options={LOCATIONS}
              t={t}
              prefix="luxuryListingsPage.filters"
            />
            <PremiumFilterSelect
              label={t("luxuryListingsPage.budget")}
              value={budget}
              onChange={setBudget}
              options={BUDGETS}
              t={t}
              prefix="luxuryListingsPage.filters"
            />
          </div>
          <p className="mt-4 text-sm text-slate-500">
            {filteredProjects.length} {t("luxuryListingsPage.propertiesFound")}
            {totalPages > 1 && (
              <span>
                {" "}
                · {t("luxuryListingsPage.page")} {safePage} {t("luxuryListingsPage.of")} {totalPages}
              </span>
            )}
          </p>
        </div>

        {paginatedProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedProjects.map((project) => (
                <LuxuryProjectCard
                  key={project.id}
                  project={project}
                  href={buildDetailHref(`/luxury-properties/${project.id}`, listingReturnPath)}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <nav
                className="mt-10 flex items-center justify-center gap-2"
                aria-label={t("luxuryListingsPage.pagination")}
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
                  {t("luxuryListingsPage.previous")}
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
                  {t("luxuryListingsPage.next")}
                  <ChevronRight size={16} />
                </Link>
              </nav>
            )}
          </>
        ) : (
          <p className="rounded-xl border border-dashed border-slate-200 py-16 text-center text-slate-500">
            {t("luxuryListingsPage.noResults")}
          </p>
        )}
      </div>
    </main>
  );
}
