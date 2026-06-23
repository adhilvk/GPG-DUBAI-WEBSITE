"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useCallback } from "react";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Phone,
  Check,
  Share2,
  Heart,
  Map,
  Eye,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LuxuryProjectCard from "@/components/LuxuryProjectCard/LuxuryProjectCard";
import DeveloperIcon from "@/components/icons/DeveloperIcon";
import {
  formatAedPrice,
  getProjectAmenities,
  getProjectDescription,
  getProjectGallery,
  getRelatedLuxuryProjects,
  parsePriceAed,
} from "@/lib/luxuryProjectDetail";

const NAVY = "#002147";
const RED = "#E31E24";
const PHONE = "+971542068414";
const WA_NUMBER = "971542068414";

function WhatsAppGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.888 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

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

function SectionHeading({ children }) {
  return (
    <h2 className="mb-5 border-b border-slate-200 pb-3 text-base font-bold text-slate-900">
      {children}
    </h2>
  );
}

function InquiryForm({ project, t }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    `Hi, I'm interested in ${project.title} at ${project.location}.`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:enquiries@globalpropertygroup.co?subject=${encodeURIComponent(
      `Inquiry: ${project.title}`
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        required
        placeholder={t("luxuryDetail.name")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24]"
      />
      <input
        type="email"
        required
        placeholder={t("luxuryDetail.email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24]"
      />
      <input
        type="tel"
        required
        placeholder={t("luxuryDetail.phone")}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24]"
      />
      <textarea
        rows={4}
        placeholder={t("luxuryDetail.message")}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24]"
      />
      <button
        type="submit"
        className="w-full rounded-lg py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:opacity-90"
        style={{ backgroundColor: NAVY }}
      >
        {t("luxuryDetail.requestInfo")}
      </button>
    </form>
  );
}

export default function LuxuryProjectDetail({ project }) {
  const { t } = useLanguage();
  const [readMore, setReadMore] = useState(false);

  const priceAed = parsePriceAed(project) ?? 5_000_000;
  const priceLabel = formatAedPrice(project);
  const gallery = useMemo(() => getProjectGallery(project), [project]);
  const description = getProjectDescription(project);
  const amenities = getProjectAmenities(project);
  const related = useMemo(() => getRelatedLuxuryProjects(project.id, 3), [project.id]);

  const [purchasePrice, setPurchasePrice] = useState(priceAed);
  const [downPct, setDownPct] = useState(20);
  const [years, setYears] = useState(25);
  const [interestPct, setInterestPct] = useState(4.5);

  const { monthly } = useMortgage(purchasePrice, downPct, years, interestPct);

  const descriptionPreviewLen = 380;
  const needsReadMore = description.length > descriptionPreviewLen;
  const shownDescription =
    readMore || !needsReadMore
      ? description
      : `${description.slice(0, descriptionPreviewLen).trim()}…`;

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(project.location)}&output=embed`;
  const waText = `Hi, I'm interested in ${project.title} at ${project.location} (${priceLabel}).`;
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`;

  const purchaseSliderMax = useMemo(
    () => Math.max(5_000_000, Math.ceil(priceAed / 500_000) * 500_000 * 2),
    [priceAed]
  );
  const sliderPurchaseValue = Math.min(Math.max(purchasePrice, 500_000), purchaseSliderMax);

  const resetMortgage = useCallback(() => {
    setPurchasePrice(priceAed);
  }, [priceAed]);

  const keyInfo = [
    { label: t("luxuryDetail.propertyType"), value: project.propertyType ?? "—" },
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
    { label: t("luxuryDetail.furnishing"), value: project.furnishing ?? t("luxuryDetail.unfurnished") },
    { label: t("luxuryDetail.propertyId"), value: project.id.toUpperCase().replace(/-/g, " ") },
  ];

  return (
    <main className="bg-white pb-20 text-slate-900">
      {/* Gallery */}
      <section className="bg-slate-50 pt-24 pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <nav className="flex flex-wrap items-center gap-1 text-xs text-slate-500 md:text-sm" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#E31E24]">
                {t("luxuryDetail.home")}
              </Link>
              <span>/</span>
              <Link href="/luxury-properties" className="hover:text-[#E31E24]">
                {t("luxuryDetail.luxuryProperties")}
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

          <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:grid-rows-2 lg:h-[min(68vh,580px)]">
            <div className="relative min-h-[260px] overflow-hidden rounded-xl lg:col-span-2 lg:row-span-2">
              <Image
                src={gallery[0]}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 66vw"
              />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow">
                  <Eye size={13} />
                  {t("luxuryDetail.viewGallery")}
                </span>
                <a
                  href="#location"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow"
                >
                  <Map size={13} />
                  {t("luxuryDetail.location")}
                </a>
              </div>
            </div>
            <div className="relative min-h-[180px] overflow-hidden rounded-xl">
              <Image src={gallery[1]} alt="" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative min-h-[180px] overflow-hidden rounded-xl">
              <Image src={gallery[2]} alt="" fill className="object-cover" sizes="33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]">
          {/* Main column */}
          <div>
            <p className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{priceLabel}</p>
            <h1 className="mt-3 text-xl font-semibold leading-snug text-slate-800 md:text-2xl">
              {project.title}
            </h1>
            <p className="mt-2 flex items-start gap-1.5 text-sm text-slate-500">
              <MapPin size={16} className="mt-0.5 shrink-0 text-slate-400" />
              {project.location}
            </p>

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
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {amenities.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check size={16} className="shrink-0 text-[#E31E24]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mortgage Calculator */}
            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="text-center text-base font-bold text-slate-900">
                {t("luxuryDetail.mortgageTitle")}
              </h2>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-800">{t("luxuryDetail.totalPrice")}</span>
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
                      min={500000}
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
                    <span className="text-sm font-medium text-slate-800">{t("luxuryDetail.loanPeriod")}</span>
                    <input
                      type="range"
                      min={5}
                      max={30}
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
                    <input
                      type="range"
                      min={2}
                      max={8}
                      step={0.1}
                      value={interestPct}
                      onChange={(e) => setInterestPct(Number(e.target.value))}
                      className="mt-2 w-full accent-[#E31E24]"
                    />
                    <span className="mt-1 block text-xs text-slate-500">{interestPct.toFixed(1)}%</span>
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
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-lg py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:opacity-90"
                    style={{ backgroundColor: RED }}
                  >
                    {t("luxuryDetail.freeConsultation")}
                  </a>
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
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: RED }}
                >
                  <Phone size={16} />
                  {t("luxuryDetail.call")}
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 text-sm font-bold text-white transition-colors hover:opacity-90"
                >
                  <WhatsAppGlyph className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="https://i.pravatar.cc/320?img=12"
                    alt="James Okonkwo"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">James Okonkwo</p>
                  <p className="text-xs text-slate-500">{t("luxuryDetail.propertyConsultant")}</p>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <InquiryForm project={project} t={t} />
              </div>
            </div>

            <div
              className="mt-4 rounded-xl p-5 text-white"
              style={{ backgroundColor: NAVY }}
            >
              <p className="text-sm font-semibold">{t("luxuryDetail.promoTitle")}</p>
              <p className="mt-1 text-xs text-white/80">{t("luxuryDetail.promoSubtitle")}</p>
              <Link
                href="/luxury-properties"
                className="mt-4 inline-block rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#002147] hover:bg-slate-100"
              >
                {t("luxuryDetail.viewToday")}
              </Link>
            </div>
          </aside>
        </div>

        {/* Recommended */}
        {related.length > 0 && (
          <div className="mt-16 border-t border-slate-100 pt-12">
            <SectionHeading>{t("luxuryDetail.recommended")}</SectionHeading>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <LuxuryProjectCard key={p.id} project={p} compact />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
