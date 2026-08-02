"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Phone,
  Mail,
  Check,
  Share2,
  Heart,
  Map,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
  Calendar,
  Armchair,
  Banknote,
  Building2,
  Info,
  FileDown,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LuxuryProjectCard from "@/components/LuxuryProjectCard/LuxuryProjectCard";
import DeveloperIcon from "@/components/icons/DeveloperIcon";
import {
  formatAedPrice,
  getProjectAmenities,
  getProjectDescription,
  getProjectGallery,
  getProjectImages,
  getRelatedLuxuryProjects,
  getMortgageDefaults,
  getProjectRegulatory,
  getRegulatoryQrSrc,
  getListingAgent,
  parsePriceAed,
} from "@/lib/luxuryProjectDetail";

const NAVY = "#002147";
const RED = "#E31E24";
const SIDEBAR_TOP = 96;

function useMortgage(price, downPct, years, interestPct) {
  return useMemo(() => {
    const principal = Math.max(0, price * (1 - downPct / 100));
    const n = Math.max(1, years * 12);
    const r = interestPct / 100 / 12;
    if (principal <= 0) return { monthly: 0, principal: 0 };
    if (r <= 0) return { monthly: principal / n, principal };
    const pow = (1 + r) ** n;
    const monthly = (principal * r * pow) / (pow - 1);
    return { monthly: Number.isFinite(monthly) ? monthly : 0, principal };
  }, [price, downPct, years, interestPct]);
}

function AdvisorContactButtons({ agent, mailHref, pulseGeneration, t, className = "" }) {
  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      <motion.a
        key={`call-${pulseGeneration}`}
        href={`tel:${agent.phone}`}
        initial={{ scale: 1 }}
        animate={
          pulseGeneration > 0 ? { scale: [1, 1.14, 1, 1.14, 1] } : { scale: 1 }
        }
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="inline-flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold text-white transition-colors hover:opacity-90"
        style={{ backgroundColor: RED }}
      >
        <Phone size={16} />
        {t("luxuryDetail.call")}
      </motion.a>
      <motion.a
        key={`mail-${pulseGeneration}`}
        href={mailHref}
        initial={{ scale: 1 }}
        animate={
          pulseGeneration > 0 ? { scale: [1, 1.14, 1, 1.14, 1] } : { scale: 1 }
        }
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="inline-flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold text-white transition-colors hover:opacity-90"
        style={{ backgroundColor: NAVY }}
      >
        <Mail size={16} />
        {t("luxuryDetail.mail")}
      </motion.a>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="mb-5 border-b border-slate-200 pb-3 text-base font-bold text-slate-900">
      {children}
    </h2>
  );
}

function RegulatoryRow({ label, value, showInfo = false }) {
  return (
    <div className="grid grid-cols-[132px_minmax(0,1fr)] items-start gap-x-6 text-sm sm:grid-cols-[148px_minmax(0,1fr)]">
      <span className="text-slate-500">{label}</span>
      <span className="inline-flex min-w-0 items-start gap-1.5 break-all text-slate-900">
        <span className="leading-snug">{value}</span>
        {showInfo ? (
          <Info size={14} className="mt-0.5 shrink-0 rounded-full text-slate-400" aria-hidden />
        ) : null}
      </span>
    </div>
  );
}

function RegulatoryInformation({ regulatory, t }) {
  if (!regulatory?.dldPermit) return null;

  const qrSrc = getRegulatoryQrSrc(regulatory.dldPermit);
  const rows = [
    regulatory.reference && { label: t("luxuryDetail.reference"), value: regulatory.reference },
    regulatory.listed && { label: t("luxuryDetail.listed"), value: regulatory.listed },
    regulatory.brokerLicense && {
      label: t("luxuryDetail.brokerLicense"),
      value: regulatory.brokerLicense,
      showInfo: true,
    },
    regulatory.agencyName && { label: t("luxuryDetail.agencyName"), value: regulatory.agencyName },
    regulatory.zoneName && { label: t("luxuryDetail.zoneName"), value: regulatory.zoneName },
    regulatory.agentLicense && {
      label: t("luxuryDetail.agentLicense"),
      value: regulatory.agentLicense,
      showInfo: true,
    },
  ].filter(Boolean);

  return (
    <div className="mt-10 min-w-0 overflow-hidden rounded-2xl border border-slate-200/70 bg-[#f8f8f8] p-6 md:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-slate-900">{t("luxuryDetail.regulatoryTitle")}</h3>
          <div className="mt-5 space-y-4">
            {rows.map((row) => (
              <RegulatoryRow key={row.label} {...row} />
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center lg:min-w-[168px] lg:items-end lg:pl-10">
          <div className="rounded-sm border border-slate-200 bg-white p-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- external QR API */}
            <img
              src={qrSrc}
              alt="DLD permit QR code"
              width={132}
              height={132}
              className="h-[132px] w-[132px]"
            />
          </div>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-700">
            {t("luxuryDetail.dldPermitNumber")}
            <Info size={14} className="text-slate-400" aria-hidden />
          </p>
          <span className="mt-2 rounded-full bg-[#ececec] px-5 py-2 text-sm font-medium text-slate-800">
            {regulatory.dldPermit}
          </span>
        </div>
      </div>
    </div>
  );
}

function GalleryLightbox({ images, title, open, initialIndex, onClose, t }) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (open) setIndex(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % images.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, images.length, onClose]);

  if (!open || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label={t("luxuryDetail.viewAllPhotos")}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-6">
        <p className="text-sm font-medium text-white/90">
          {t("luxuryDetail.photoOf")} {index + 1} {t("luxuryDetail.of")} {images.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label={t("luxuryDetail.closeGallery")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X size={20} />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-16">
        {images.length > 1 && (
          <button
            type="button"
            onClick={() => setIndex((current) => (current - 1 + images.length) % images.length)}
            aria-label="Previous photo"
            className="absolute left-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div className="relative h-full w-full max-h-[min(70vh,720px)] max-w-6xl">
          <Image
            src={images[index]}
            alt={`${title} — ${index + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {images.length > 1 && (
          <button
            type="button"
            onClick={() => setIndex((current) => (current + 1) % images.length)}
            aria-label="Next photo"
            className="absolute right-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="border-t border-white/10 px-4 py-4 md:px-6">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1">
            {images.map((image, imageIndex) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(imageIndex)}
                aria-label={`${t("luxuryDetail.photoOf")} ${imageIndex + 1}`}
                aria-current={imageIndex === index ? "true" : undefined}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                  imageIndex === index ? "border-[#E31E24]" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={image} alt="" fill className="object-cover" sizes="96px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const GOLD = "#b8956b";

function AmenitiesSection({ amenities }) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
      {amenities.map((item) => {
        const label = typeof item === "string" ? item : item.title;
        return (
          <li key={label} className="flex items-start gap-2.5 text-sm text-slate-700">
            <Check size={16} className="mt-0.5 shrink-0 text-[#E31E24]" />
            <span className="min-w-0 leading-snug">{label}</span>
          </li>
        );
      })}
    </ul>
  );
}

function CommunityProjectCard({ project, projectHrefBase = "/trending-projects" }) {
  const href = project.href ?? (project.slug ? `${projectHrefBase}/${project.slug}` : null);

  const inner = (
    <>
      <div className="relative aspect-[16/10] bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 480px"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-slate-900">{project.title}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm" style={{ color: GOLD }}>
          <MapPin size={14} className="shrink-0" style={{ color: GOLD }} />
          {project.location}
        </p>
        <div className="mt-3 space-y-1.5 text-sm text-slate-600">
          <p className="flex items-center gap-2">
            <BedDouble size={15} className="shrink-0 text-slate-400" />
            {project.bedsLabel}
          </p>
          <p className="flex items-center gap-2">
            <Maximize2 size={15} className="shrink-0 text-slate-400" />
            {project.sizeLabel}
          </p>
        </div>
        <div className="mt-4 border-t border-slate-100 pt-3">
          <p className="text-base font-bold" style={{ color: GOLD }}>
            {project.price}
          </p>
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
      >
        {inner}
      </Link>
    );
  }

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {inner}
    </article>
  );
}

function CommunityProjectsSection({ section, projectHrefBase = "/trending-projects" }) {
  if (!section?.projects?.length) return null;

  return (
    <div>
      <h2 className="text-center text-xl font-bold text-slate-900 md:text-2xl">{section.title}</h2>
      {section.description ? (
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-600 md:text-base">
          {section.description}
        </p>
      ) : null}
      <div className="mx-auto mt-8 flex max-w-md flex-col gap-6">
        {section.projects.map((item) => (
          <CommunityProjectCard
            key={item.title}
            project={item}
            projectHrefBase={projectHrefBase}
          />
        ))}
      </div>
    </div>
  );
}

function AboutProjectSection({ about }) {
  if (!about) return null;

  return (
    <div className="mt-10 border-t border-slate-200 pt-10">
      <h2 className="text-center text-xl font-bold text-slate-900 md:text-2xl">{about.title}</h2>
      <div className="mx-auto mt-6 max-w-4xl space-y-5 text-center text-sm leading-relaxed text-slate-600 md:text-base">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
      {about.stats?.length ? (
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="flex flex-col items-center justify-center px-6 py-8 text-center">
            {about.logo ? (
              <Image
                src={about.logo}
                alt={about.logoAlt ?? ""}
                width={120}
                height={80}
                className="h-16 w-auto object-contain"
              />
            ) : about.brandName ? (
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700">
                {about.brandName}
              </p>
            ) : null}
          </div>
          {about.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center px-6 py-8 text-center">
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ProjectSummarySection({ summary, t }) {
  if (!summary?.rows?.length) return null;

  const labelClass = "text-xs font-semibold uppercase tracking-wide text-slate-500";
  const valueClass = "mt-1 text-sm font-medium text-slate-900";

  if (summary.rows.length === 1) {
    const row = summary.rows[0];
    const items = [
      { label: t("luxuryDetail.propertyType"), value: row.propertyType },
      { label: t("luxuryDetail.unitType"), value: row.unitType },
      { label: t("luxuryDetail.size"), value: row.size },
      { label: t("luxuryDetail.downPaymentPercent"), value: summary.downPayment },
      { label: t("luxuryDetail.paymentPlan"), value: summary.paymentPlan },
      { label: t("luxuryDetail.handover"), value: summary.handover },
    ];

    return (
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map(({ label, value }) => (
          <div key={label} className="border-b border-slate-100 pb-3">
            <dt className={labelClass}>{label}</dt>
            <dd className={valueClass}>{value}</dd>
          </div>
        ))}
      </dl>
    );
  }

  const fieldClass = "border-b border-slate-100 pb-3";

  return (
    <dl className="space-y-4">
      {summary.rows.map((row) => (
        <div
          key={`${row.propertyType}-${row.unitType}`}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <div className={fieldClass}>
            <dt className={labelClass}>{t("luxuryDetail.propertyType")}</dt>
            <dd className={valueClass}>{row.propertyType}</dd>
          </div>
          <div className={fieldClass}>
            <dt className={labelClass}>{t("luxuryDetail.unitType")}</dt>
            <dd className={valueClass}>{row.unitType}</dd>
          </div>
          <div className={fieldClass}>
            <dt className={labelClass}>{t("luxuryDetail.size")}</dt>
            <dd className={valueClass}>{row.size}</dd>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className={fieldClass}>
          <dt className={labelClass}>{t("luxuryDetail.downPaymentPercent")}</dt>
          <dd className={valueClass}>{summary.downPayment}</dd>
        </div>
        <div className={fieldClass}>
          <dt className={labelClass}>{t("luxuryDetail.paymentPlan")}</dt>
          <dd className={valueClass}>{summary.paymentPlan}</dd>
        </div>
        <div className={fieldClass}>
          <dt className={labelClass}>{t("luxuryDetail.handover")}</dt>
          <dd className={valueClass}>{summary.handover}</dd>
        </div>
      </div>
    </dl>
  );
}

function FloorPlanSection({ floorPlans, t }) {
  if (!floorPlans?.length) return null;

  const headerClass =
    "pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 last:pr-0";
  const cellClass = "py-3 pr-4 text-sm text-slate-700 last:pr-0";

  return (
    <div className="mt-10">
      <SectionHeading>{t("luxuryDetail.floorPlanTitle")}</SectionHeading>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-slate-200">
              <th className={headerClass}>{t("luxuryDetail.floorPlanTitle")}</th>
              <th className={headerClass}>{t("luxuryDetail.floorPlanCategory")}</th>
              <th className={headerClass}>{t("luxuryDetail.unitType")}</th>
              <th className={headerClass}>{t("luxuryDetail.floorPlanFloorDetails")}</th>
              <th className={headerClass}>{t("luxuryDetail.size")}</th>
              <th className={headerClass}>{t("luxuryDetail.floorPlanType")}</th>
            </tr>
          </thead>
          <tbody>
            {floorPlans.map((plan) => (
              <tr key={`${plan.category}-${plan.unitType}`} className="border-b border-slate-100 last:border-0">
                <td className={cellClass}>
                  {plan.beds != null ? (
                    <span className="inline-flex items-center gap-1.5 text-slate-900">
                      <BedDouble size={15} className="text-slate-400" />
                      {plan.beds}
                    </span>
                  ) : (
                    "—"
                  )}
                </td>
                <td className={`${cellClass} font-medium text-slate-900`}>{plan.category}</td>
                <td className={cellClass}>{plan.unitType}</td>
                <td className={cellClass}>{plan.floorDetails}</td>
                <td className={cellClass}>{plan.size}</td>
                <td className={cellClass}>{plan.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function LuxuryProjectDetail({
  project,
  listHref = "/luxury-properties",
  listLabel,
  getRelatedProjects = getRelatedLuxuryProjects,
  projectHrefBase = "/luxury-properties",
}) {
  const { t } = useLanguage();
  const [readMore, setReadMore] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [pulseGeneration, setPulseGeneration] = useState(0);
  const [sidebarStyle, setSidebarStyle] = useState(null);
  const contactButtonsRef = useRef(null);
  const contentRowRef = useRef(null);
  const sidebarWrapRef = useRef(null);
  const sidebarRef = useRef(null);
  const recommendedRef = useRef(null);

  const priceAed = parsePriceAed(project) ?? 5_000_000;
  const parsedPrice = parsePriceAed(project);
  const priceLabel = formatAedPrice(project);
  const mortgageDefaults = useMemo(() => getMortgageDefaults(project), [project]);
  const allImages = useMemo(() => getProjectImages(project), [project]);
  const gallery = useMemo(() => getProjectGallery(project), [project]);
  const description = getProjectDescription(project);
  const amenities = getProjectAmenities(project);
  const regulatory = getProjectRegulatory(project);
  const agent = useMemo(() => getListingAgent(project), [project]);
  const related = useMemo(() => getRelatedProjects(project.id, 3), [getRelatedProjects, project.id]);
  const breadcrumbLabel = listLabel ?? t("luxuryDetail.luxuryProperties");
  const isCommunityLayout = Boolean(project.communityProjectsSection);

  const [purchasePrice, setPurchasePrice] = useState(priceAed);
  const [downPct, setDownPct] = useState(mortgageDefaults.downPct);
  const [years, setYears] = useState(mortgageDefaults.years);
  const [interestPct, setInterestPct] = useState(mortgageDefaults.interestPct);

  const { monthly, principal: loanAmount } = useMortgage(purchasePrice, downPct, years, interestPct);
  const monthlyPaymentLabel =
    project.monthlyPayment != null
      ? project.monthlyPayment.toLocaleString("en-AE")
      : parsedPrice != null
        ? Math.round(monthly).toLocaleString("en-AE")
        : null;

  const descriptionPreviewLen = 380;
  const needsReadMore = description.length > descriptionPreviewLen;
  const shownDescription =
    readMore || !needsReadMore
      ? description
      : `${description.slice(0, descriptionPreviewLen).trim()}…`;

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(project.mapQuery ?? project.location)}&output=embed`;
  const waText = `Hi, I'm interested in ${project.title} at ${project.location} (${priceLabel}).`;
  const mailSubject = encodeURIComponent(`Inquiry: ${project.title}`);
  const mailBody = encodeURIComponent(waText);
  const mailHref = `mailto:${agent.email}?subject=${mailSubject}&body=${mailBody}`;

  const purchaseSliderMax = useMemo(
    () => Math.max(5_000_000, Math.ceil(priceAed / 500_000) * 500_000 * 2),
    [priceAed]
  );
  const sliderPurchaseValue = Math.min(Math.max(purchasePrice, 300_000), purchaseSliderMax);

  const resetMortgage = useCallback(() => {
    setPurchasePrice(priceAed);
    setDownPct(mortgageDefaults.downPct);
    setYears(mortgageDefaults.years);
    setInterestPct(mortgageDefaults.interestPct);
  }, [priceAed, mortgageDefaults]);

  const propertyDetails = project.projectSummary
    ? []
    : [
    project.beds != null && {
      label: t("luxuryDetail.bedrooms"),
      value: project.bedsLabel ?? `${project.beds} ${t("luxuryDetail.bedsUnit")}`,
      icon: BedDouble,
    },
    project.baths != null && {
      label: t("luxuryDetail.bathrooms"),
      value: `${project.baths} ${t("luxuryDetail.bathsUnit")}`,
      icon: Bath,
    },
    project.propertyType && {
      label: t("luxuryDetail.propertyType"),
      value: project.propertyType,
      icon: Building2,
    },
    project.availableFrom && {
      label: t("luxuryDetail.availableFrom"),
      value: project.availableFrom,
      icon: Calendar,
    },
    project.furnishing && {
      label: t("luxuryDetail.furnishing"),
      value: project.furnishing,
      icon: Armchair,
    },
    project.pricePerSqft != null && {
      label: t("luxuryDetail.pricePerArea"),
      value: `AED ${project.pricePerSqft.toLocaleString("en-AE")}/ft²`,
      icon: Banknote,
    },
    project.sqft != null && {
      label: t("luxuryDetail.area"),
      value: `${project.sqft.toLocaleString()} ft²`,
      icon: Maximize2,
    },
  ].filter(Boolean);

  const openGallery = useCallback((index = 0) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  }, []);

  useEffect(() => {
    const row = contentRowRef.current;
    const wrap = sidebarWrapRef.current;
    const sidebar = sidebarRef.current;
    const recommended = recommendedRef.current;
    if (!row || !wrap || !sidebar) return undefined;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const updateSidebar = () => {
      if (!desktopQuery.matches) {
        setSidebarStyle(null);
        return;
      }

      const wrapWidth = wrap.offsetWidth;
      const wrapLeft = wrap.getBoundingClientRect().left;
      const scrollY = window.scrollY;
      const rowTop = row.getBoundingClientRect().top + scrollY;
      const rowBottom = rowTop + row.offsetHeight;
      const sidebarHeight = sidebar.offsetHeight;

      let stopLine = rowBottom;
      if (recommended) {
        stopLine = Math.min(stopLine, recommended.getBoundingClientRect().top + scrollY);
      }

      const pinStart = rowTop - SIDEBAR_TOP;
      const pinEnd = stopLine - sidebarHeight - SIDEBAR_TOP;

      if (scrollY < pinStart) {
        setSidebarStyle(null);
      } else if (scrollY >= pinEnd) {
        setSidebarStyle({
          position: "absolute",
          top: pinEnd - rowTop + SIDEBAR_TOP,
          width: wrapWidth,
        });
      } else {
        setSidebarStyle({
          position: "fixed",
          top: SIDEBAR_TOP,
          left: wrapLeft,
          width: wrapWidth,
        });
      }
    };

    updateSidebar();
    window.addEventListener("scroll", updateSidebar, { passive: true });
    window.addEventListener("resize", updateSidebar);
    desktopQuery.addEventListener("change", updateSidebar);

    return () => {
      window.removeEventListener("scroll", updateSidebar);
      window.removeEventListener("resize", updateSidebar);
      desktopQuery.removeEventListener("change", updateSidebar);
    };
  }, [related.length]);

  const handleFreeConsultation = useCallback(() => {
    setPulseGeneration((generation) => generation + 1);

    window.setTimeout(() => {
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      const target = isMobile ? sidebarWrapRef.current : contactButtonsRef.current;

      target?.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "start" : "nearest",
      });
    }, 100);
  }, []);

  const extraPhotoCount = Math.max(0, allImages.length - 3);

  const keyInfo = [
    ...(propertyDetails.length === 0
      ? [{ label: t("luxuryDetail.propertyType"), value: project.propertyType ?? "—" }]
      : []),
    ...(project.developer
      ? [{
          label: t("luxuryDetail.developer"),
          value: (
            <span className="inline-flex items-center gap-1.5">
              <DeveloperIcon className="h-3.5 w-3.5 shrink-0 text-slate-500" />
              {project.developer}
            </span>
          ),
        }]
      : []),
    { label: t("luxuryDetail.purpose"), value: t("luxuryDetail.forSale") },
    { label: t("luxuryDetail.completion"), value: project.status ?? "Off-plan" },
    ...(propertyDetails.length === 0
      ? [{ label: t("luxuryDetail.furnishing"), value: project.furnishing ?? t("luxuryDetail.unfurnished") }]
      : []),
    { label: t("luxuryDetail.propertyId"), value: project.id.toUpperCase().replace(/-/g, " ") },
  ];

  return (
    <main className="bg-white pb-20 text-slate-900">
      {/* Gallery */}
      <section className="overflow-x-hidden bg-slate-50 pt-24 pb-6">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <nav className="flex flex-wrap items-center gap-1 text-xs text-slate-500 md:text-sm" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#E31E24]">
                {t("luxuryDetail.home")}
              </Link>
              <span>/</span>
              <Link href={listHref} className="hover:text-[#E31E24]">
                {breadcrumbLabel}
              </Link>
              <span>/</span>
              <span className="font-medium text-slate-800 line-clamp-1">{project.title}</span>
            </nav>
            <div className="flex items-center gap-3 text-slate-500">
              <button type="button" className="inline-flex items-center gap-1 text-xs hover:text-slate-800">
                <Share2 size={14} />
                {t("luxuryDetail.share")}
              </button>
              <button type="button" className="inline-flex items-center gap-1 text-xs hover:text-slate-800">
                <Heart size={14} />
                {t("luxuryDetail.save")}
              </button>
            </div>
          </div>

          <div className="grid w-full min-w-0 grid-cols-1 gap-2 lg:grid-cols-3 lg:grid-rows-2 lg:h-[min(68vh,580px)]">
            <button
              type="button"
              onClick={() => openGallery(0)}
              className={`group relative min-h-[260px] w-full overflow-hidden rounded-xl ${
                gallery.length === 1 ? "lg:col-span-3 lg:row-span-2" : "lg:col-span-2 lg:row-span-2"
              }`}
            >
              <Image
                src={gallery[0]}
                alt={project.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width:1024px) 100vw, 66vw"
              />
              {!isCommunityLayout ? (
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {allImages.length > 1 && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow">
                    <Images size={13} />
                    {t("luxuryDetail.viewAllPhotos")} ({allImages.length})
                  </span>
                )}
                <a
                  href="#location"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow"
                >
                  <Map size={13} />
                  {t("luxuryDetail.location")}
                </a>
              </div>
              ) : null}
            </button>
            {gallery.length > 1 ? (
            <button
              type="button"
              onClick={() => openGallery(1)}
              className="group relative min-h-[180px] w-full overflow-hidden rounded-xl"
            >
              <Image
                src={gallery[1]}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="33vw"
              />
            </button>
            ) : null}
            {gallery.length > 2 ? (
            <button
              type="button"
              onClick={() => openGallery(extraPhotoCount > 0 ? 0 : 2)}
              className="group relative min-h-[180px] w-full overflow-hidden rounded-xl"
            >
              <Image
                src={gallery[2]}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="33vw"
              />
              {extraPhotoCount > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/45 transition-colors group-hover:bg-black/55">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-lg">
                    <Eye size={16} />
                    +{extraPhotoCount} {t("luxuryDetail.viewAllPhotos").toLowerCase()}
                  </span>
                </div>
              )}
            </button>
            ) : null}
          </div>

          <AboutProjectSection about={project.aboutSection} />
        </div>
      </section>

      <GalleryLightbox
        images={allImages}
        title={project.title}
        open={galleryOpen}
        initialIndex={galleryIndex}
        onClose={() => setGalleryOpen(false)}
        t={t}
      />

      {/* Content + Sidebar */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRowRef}
          className="mt-8 flex min-w-0 flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-x-10"
        >
          {/* Main column */}
          <div className="min-w-0 flex-1">
            {isCommunityLayout ? (
              <CommunityProjectsSection
                section={project.communityProjectsSection}
                projectHrefBase={projectHrefBase}
              />
            ) : (
            <>
            <p className="text-3xl font-bold tracking-tight text-[#E31E24] md:text-4xl">{priceLabel}</p>
            {monthlyPaymentLabel && (
              <p className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                {t("luxuryDetail.ownFrom")} AED {monthlyPaymentLabel}
                {t("luxuryDetail.perMonth")}
              </p>
            )}
            <h1 className="mt-3 text-xl font-semibold leading-snug text-slate-800 md:text-2xl">
              {project.title}
            </h1>
            {project.subtitle ? (
              <p className="mt-1 text-sm text-slate-600 md:text-base">{project.subtitle}</p>
            ) : null}
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <p className="flex items-start gap-1.5 text-sm text-slate-500">
                <MapPin size={16} className="mt-0.5 shrink-0 text-slate-400" />
                {project.location}
              </p>
              <a
                href="#location"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition-colors hover:border-[#E31E24] hover:text-[#E31E24]"
              >
                <Map size={13} />
                {t("luxuryDetail.viewOnMap")}
              </a>
            </div>

            {project.projectSummary || project.brochure ? (
              <div className="mt-10">
                {project.projectSummary && project.brochure ? (
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
                    <h2 className="text-base font-bold text-slate-900">
                      {t("luxuryDetail.projectSummary")}
                    </h2>
                    <button
                      type="button"
                      onClick={handleFreeConsultation}
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:opacity-90"
                      style={{ backgroundColor: RED }}
                    >
                      <FileDown size={14} />
                      {t("luxuryDetail.requestBrochure")}
                    </button>
                  </div>
                ) : project.projectSummary ? (
                  <SectionHeading>{t("luxuryDetail.projectSummary")}</SectionHeading>
                ) : (
                  <div className="mb-5 flex justify-end border-b border-slate-200 pb-3">
                    <button
                      type="button"
                      onClick={handleFreeConsultation}
                      className="inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:opacity-90"
                      style={{ backgroundColor: RED }}
                    >
                      <FileDown size={14} />
                      {t("luxuryDetail.requestBrochure")}
                    </button>
                  </div>
                )}
                {project.projectSummary ? (
                  <ProjectSummarySection summary={project.projectSummary} t={t} />
                ) : null}
              </div>
            ) : null}

            {propertyDetails.length > 0 && (
              <div className="mt-8">
                <SectionHeading>{t("luxuryDetail.propertyDetails")}</SectionHeading>
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {propertyDetails.map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex items-start gap-3 border-b border-slate-100 pb-3">
                      <Icon size={18} className="mt-0.5 shrink-0 text-slate-400" />
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</dt>
                        <dd className="mt-1 text-sm font-medium text-slate-900">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {!propertyDetails.length && !project.projectSummary && (
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
              {project.beds != null && (
                <span className="inline-flex items-center gap-2">
                  <BedDouble size={18} className="text-slate-400" />
                  {project.beds} {t("luxuryDetail.beds")}
                </span>
              )}
              {project.baths != null && (
                <span className="inline-flex items-center gap-2">
                  <Bath size={18} className="text-slate-400" />
                  {project.baths} {t("luxuryDetail.baths")}
                </span>
              )}
              {project.sqft != null && (
                <span className="inline-flex items-center gap-2">
                  <Maximize2 size={18} className="text-slate-400" />
                  {project.sqft.toLocaleString()} {project.sqftLabel ?? "sqft"}
                </span>
              )}
            </div>
            )}

            {/* Key Information */}
            <div className="mt-10">
              <SectionHeading>{t("luxuryDetail.keyInfo")}</SectionHeading>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {keyInfo.map(({ label, value }) => (
                  <div key={label} className="border-b border-slate-100 pb-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</dt>
                    <dd className="mt-1 text-sm font-medium text-slate-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Description */}
            <div className="mt-10">
              <SectionHeading>{t("luxuryDetail.description")}</SectionHeading>
              <div className="whitespace-pre-line text-sm leading-relaxed text-slate-600 md:text-base">
                {shownDescription}
              </div>
              {needsReadMore && (
                <button
                  type="button"
                  onClick={() => setReadMore((v) => !v)}
                  className="mt-3 text-sm font-semibold text-[#E31E24] hover:underline"
                >
                  {readMore ? t("luxuryDetail.readLess") : t("luxuryDetail.readMore")}
                </button>
              )}
            </div>

            {/* Amenities */}
            <div className="mt-10">
              <SectionHeading>{t("luxuryDetail.amenities")}</SectionHeading>
              <AmenitiesSection amenities={amenities} />
            </div>

            <FloorPlanSection floorPlans={project.floorPlans} t={t} />

            {/* Mortgage Calculator */}
            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="text-center text-base font-bold text-slate-900">
                {t("luxuryDetail.mortgageTitle")}
              </h2>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-800">{t("luxuryDetail.purchasePrice")}</span>
                    <input
                      type="number"
                      min={0}
                      step={50000}
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(Number(e.target.value) || 0)}
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                    />
                    <input
                      type="range"
                      min={300000}
                      max={purchaseSliderMax}
                      step={50000}
                      value={sliderPurchaseValue}
                      onChange={(e) => setPurchasePrice(Number(e.target.value))}
                      className="mt-2 w-full accent-[#E31E24]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-slate-800">
                      {t("luxuryDetail.downPayment")} ({downPct}%)
                    </span>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      AED {Math.round(purchasePrice * (downPct / 100)).toLocaleString("en-AE")}
                    </p>
                    <input
                      type="range"
                      min={5}
                      max={50}
                      value={downPct}
                      onChange={(e) => setDownPct(Number(e.target.value))}
                      className="mt-2 w-full accent-[#E31E24]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-slate-800">
                      {t("luxuryDetail.loanAmount")} ({100 - downPct}%)
                    </span>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      AED {Math.round(loanAmount).toLocaleString("en-AE")}
                    </p>
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-slate-800">{t("luxuryDetail.loanPeriod")}</span>
                    <input
                      type="number"
                      min={1}
                      max={25}
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value) || 1)}
                      className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
                    />
                    <input
                      type="range"
                      min={1}
                      max={25}
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="mt-2 w-full accent-[#E31E24]"
                    />
                    <span className="mt-1 block text-xs text-slate-500">
                      {years} {t("luxuryDetail.years")}
                    </span>
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-slate-800">{t("luxuryDetail.interestRate")}</span>
                    <div className="relative mt-2">
                      <input
                        type="number"
                        min={1}
                        max={10}
                        step={0.01}
                        value={interestPct}
                        onChange={(e) => setInterestPct(Number(e.target.value) || 1)}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pr-8 text-sm"
                      />
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">%</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      step={0.05}
                      value={interestPct}
                      onChange={(e) => setInterestPct(Number(e.target.value))}
                      className="mt-2 w-full accent-[#E31E24]"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={resetMortgage}
                    className="text-xs font-semibold text-slate-500 underline"
                  >
                    {t("luxuryDetail.resetMortgage")}
                  </button>
                </div>
                <div className="flex flex-col justify-center rounded-xl bg-[#e8f4fc] p-6">
                  <p className="text-sm text-slate-600">{t("luxuryDetail.monthlyRepayment")}</p>
                  <p className="mt-1 text-3xl font-bold text-slate-900">
                    AED {Math.round(monthly).toLocaleString("en-AE")}
                  </p>
                  <button
                    type="button"
                    onClick={handleFreeConsultation}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-lg py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:opacity-90"
                    style={{ backgroundColor: RED }}
                  >
                    {t("luxuryDetail.freeConsultation")}
                  </button>
                  <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
                    {t("luxuryDetail.downPaymentDisclaimer")}
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div id="location" className="mt-10 scroll-mt-28">
              <SectionHeading>{t("luxuryDetail.locationTitle")}</SectionHeading>
              <p className="mb-4 flex items-center gap-2 text-sm text-slate-700">
                <MapPin size={16} className="text-[#E31E24]" />
                {project.location}
              </p>
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <iframe
                  title="Property location"
                  src={mapSrc}
                  className="h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <RegulatoryInformation regulatory={regulatory} t={t} />
            </>
            )}
          </div>

          {/* Fixed sidebar — stays pinned while scrolling, scrolls up with Recommended */}
          <div
            ref={sidebarWrapRef}
            className="relative min-w-0 scroll-mt-24 lg:w-[400px] lg:shrink-0 lg:scroll-mt-28 xl:w-[440px]"
          >
            <aside ref={sidebarRef} className="z-10" style={sidebarStyle ?? undefined}>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-center">
                <div
                  className={`relative mx-auto h-[120px] w-[120px] overflow-hidden rounded-full border border-slate-200 shadow-sm ${
                    agent.listingImageContainerClassName ??
                    agent.imageContainerClassName ??
                    "bg-white"
                  }`}
                >
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className={
                      agent.listingImageClassName ??
                      agent.imageClassName ??
                      "object-cover object-top"
                    }
                    sizes="120px"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900">{agent.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{agent.title}</p>
                {agent.brn && (
                  <p className="mt-1 text-xs font-medium text-slate-400">BRN#{agent.brn}</p>
                )}
              </div>

              <div
                id="advisor-contact"
                ref={contactButtonsRef}
                className="mt-5 scroll-mt-28 overflow-hidden border-t border-slate-100 pt-5"
              >
                <AdvisorContactButtons
                  agent={agent}
                  mailHref={mailHref}
                  pulseGeneration={pulseGeneration}
                  t={t}
                />
              </div>

              <div className="mt-5 border-t border-slate-100 pt-5 text-center">
                <p className="text-sm font-bold text-slate-900">{t("luxuryDetail.talkToExpert")}</p>
                <p className="mt-1 text-xs text-slate-500">{t("luxuryDetail.talkToExpertSubtitle")}</p>
              </div>
            </div>

            <div
              className="mt-4 rounded-xl p-5 text-white"
              style={{ backgroundColor: NAVY }}
            >
              <p className="text-sm font-semibold">{t("luxuryDetail.promoTitle")}</p>
              <p className="mt-1 text-xs text-white/80">{t("luxuryDetail.promoSubtitle")}</p>
              <Link
                href={listHref}
                className="mt-4 inline-block rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#002147] hover:bg-slate-100"
              >
                {t("luxuryDetail.viewToday")}
              </Link>
            </div>
            </aside>
          </div>
        </div>

        {related.length > 0 && (
          <div ref={recommendedRef} className="mt-16 border-t border-slate-100 pt-12">
            <SectionHeading>{t("luxuryDetail.recommended")}</SectionHeading>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <LuxuryProjectCard
                  key={p.id}
                  project={p}
                  compact
                  href={`${projectHrefBase}/${p.id}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
