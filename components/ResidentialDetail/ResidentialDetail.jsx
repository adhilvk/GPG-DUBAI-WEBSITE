"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useCallback } from "react";
import { MapPin, BedDouble, Bath, Maximize2 } from "lucide-react";

const TEAL = "#0d5c5c";

function formatAed(n) {
  return `AED ${n.toLocaleString("en-AE")}`;
}

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

function SectionTitle({ children }) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900 border-b border-slate-200 pb-3 mb-6">
      {children}
    </h2>
  );
}

function Watermark() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
      <span className="text-white/80 text-sm md:text-lg font-semibold tracking-[0.35em] uppercase drop-shadow-lg">
        GPG
      </span>
    </div>
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

function RelatedCard({ p, basePath }) {
  const waHref = `https://wa.me/971800000000?text=${encodeURIComponent(`Hi, I'm interested in ${p.location} (${formatAed(p.price)}).`)}`;
  return (
    <article className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
      <Link href={`${basePath}/${p.slug}`} className="relative aspect-[4/3] block bg-slate-100">
        <Image src={p.images[0]} alt={p.location} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-white/75 text-xs font-semibold tracking-[0.25em] uppercase">GPG</span>
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <p className="text-lg font-bold text-slate-900">{formatAed(p.price)}</p>
        <p className="text-sm font-medium text-slate-800 line-clamp-2">{p.location}</p>
        <div className="flex flex-wrap gap-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1">
            <BedDouble size={14} /> {p.beds}
          </span>
          <span className="inline-flex items-center gap-1">
            <Bath size={14} /> {p.baths}
          </span>
          <span className="inline-flex items-center gap-1">
            <Maximize2 size={14} /> {p.sqft.toLocaleString()} sq ft
          </span>
        </div>
        <div className="mt-auto pt-3 flex justify-end">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded text-white text-[10px] font-bold uppercase tracking-wider"
            style={{ backgroundColor: TEAL }}
          >
            <WhatsAppGlyph className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ResidentialDetail({ property, detailConfig }) {
  const { basePath, searchLabel, getRelated } = detailConfig;

  const [readMore, setReadMore] = useState(false);
  const [purchasePrice, setPurchasePrice] = useState(property.price);
  const [downPct, setDownPct] = useState(20);
  const [years, setYears] = useState(25);
  const [interestPct, setInterestPct] = useState(4.5);

  const gallery = useMemo(() => {
    const imgs = [...property.images];
    while (imgs.length < 3) imgs.push(imgs[0]);
    return imgs.slice(0, 3);
  }, [property.images]);

  const { monthly, principal } = useMortgage(purchasePrice, downPct, years, interestPct);
  const related = useMemo(() => getRelated(property.slug, 3), [getRelated, property.slug]);

  const descriptionPreviewLen = 420;
  const needsReadMore = property.description.length > descriptionPreviewLen;
  const shownDescription =
    readMore || !needsReadMore
      ? property.description
      : `${property.description.slice(0, descriptionPreviewLen).trim()}…`;

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(property.mapQuery)}&output=embed`;

  const siteBase = process.env.NEXT_PUBLIC_SITE_URL || "https://gpg.global";
  const listingUrl = `${siteBase}${basePath}/${property.slug}`;
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(listingUrl)}`;

  const purchaseSliderMax = useMemo(
    () => Math.max(5_000_000, Math.ceil(property.price / 500_000) * 500_000 * 2),
    [property.price]
  );
  const sliderPurchaseValue = Math.min(Math.max(purchasePrice, 500_000), purchaseSliderMax);

  const resetMortgageToListing = useCallback(() => {
    setPurchasePrice(property.price);
  }, [property.price]);

  return (
    <main className="bg-white text-slate-900 pb-20">
      <section className="bg-slate-900 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="mb-4 flex flex-wrap items-center gap-1 text-xs text-white/85 md:text-sm"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white hover:underline">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <Link href={basePath} className="hover:text-white hover:underline">
              {searchLabel}
            </Link>
            <span className="text-white/40">/</span>
            <span className="font-medium text-white">{property.location}</span>
          </nav>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:grid-rows-2 lg:h-[min(70vh,620px)] lg:gap-3">
            <div className="relative min-h-[280px] lg:col-span-2 lg:row-span-2 rounded-lg overflow-hidden bg-black">
              <Image
                src={gallery[0]}
                alt={property.location}
                fill
                priority
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 66vw"
              />
              <Watermark />
            </div>
            <div className="relative min-h-[200px] rounded-lg overflow-hidden bg-black">
              <Image src={gallery[1]} alt={`${property.location} gallery image`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
              <Watermark />
            </div>
            <div className="relative min-h-[200px] rounded-lg overflow-hidden bg-black">
              <Image src={gallery[2]} alt={`${property.location} gallery image`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
              <Watermark />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <p className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{formatAed(property.price)}</p>

        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-700">
          <span className="inline-flex items-center gap-2">
            <BedDouble size={18} className="text-slate-400" />
            {property.beds} Bedrooms
          </span>
          <span className="inline-flex items-center gap-2">
            <Bath size={18} className="text-slate-400" />
            {property.baths} Bathrooms
          </span>
          <span className="inline-flex items-center gap-2">
            <Maximize2 size={18} className="text-slate-400" />
            {property.sqft.toLocaleString()} Sq Ft
          </span>
        </div>

        <h1 className="mt-8 text-xl md:text-2xl font-semibold text-slate-900">{property.location}</h1>
        <p className="mt-2 text-sm md:text-base text-slate-600">{property.features}</p>

        <div className="mt-12 max-w-3xl">
          <SectionTitle>Property description</SectionTitle>
          <div className="text-slate-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
            {shownDescription}
          </div>
          {needsReadMore && (
            <button
              type="button"
              onClick={() => setReadMore((v) => !v)}
              className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-900 underline underline-offset-4 hover:text-[#0d5c5c]"
            >
              {readMore ? "Read less" : "Read more"}
            </button>
          )}
        </div>

        <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6 md:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="shrink-0 rounded border border-slate-200 bg-white p-2 w-[140px] h-[140px]">
                {/* eslint-disable-next-line @next/next/no-img-element -- external QR API */}
                <img src={qrSrc} alt="Listing QR code" width={124} height={124} className="h-[124px] w-[124px]" />
              </div>
              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">DLD Permit No:</span> {property.dldPermit}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">ORN:</span> {property.orn}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-t border-slate-200 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md ring-2 ring-slate-200">
                <Image
                  src={property.agentPhoto}
                  alt={property.agentName}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Listing agent</p>
                <p className="text-lg font-semibold text-slate-900">{property.agentName}</p>
                <p className="text-sm text-slate-600">GPG Real Estate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <SectionTitle>Location</SectionTitle>
          <p className="mb-4 flex items-center gap-2 text-slate-800">
            <MapPin size={18} style={{ color: TEAL }} />
            {property.mapQuery}
          </p>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <iframe
              title="Property location"
              src={mapSrc}
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-14 rounded-lg border border-stone-200 bg-[#f4f0ea] p-6 md:p-10">
          <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-900 md:text-base">
            Explore your mortgage possibilities
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Purchase price (AED)</span>
                <input
                  type="number"
                  min={0}
                  step={50000}
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value) || 0)}
                  className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm"
                />
                <input
                  type="range"
                  min={500000}
                  max={purchaseSliderMax}
                  step={50000}
                  value={sliderPurchaseValue}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="mt-2 w-full accent-[#0d5c5c]"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Down payment ({downPct}%)</span>
                <input
                  type="range"
                  min={5}
                  max={50}
                  value={downPct}
                  onChange={(e) => setDownPct(Number(e.target.value))}
                  className="mt-2 w-full accent-[#0d5c5c]"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Loan life (years)</span>
                <input
                  type="range"
                  min={5}
                  max={30}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="mt-2 w-full accent-[#0d5c5c]"
                />
                <span className="mt-1 block text-xs text-slate-600">{years} years</span>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-800">Interest rate (%)</span>
                <input
                  type="range"
                  min={2}
                  max={8}
                  step={0.1}
                  value={interestPct}
                  onChange={(e) => setInterestPct(Number(e.target.value))}
                  className="mt-2 w-full accent-[#0d5c5c]"
                />
                <span className="mt-1 block text-xs text-slate-600">{interestPct.toFixed(1)}% p.a.</span>
              </label>
              <button
                type="button"
                onClick={resetMortgageToListing}
                className="text-xs font-semibold uppercase tracking-wider text-slate-600 underline"
              >
                Reset to listing price
              </button>
            </div>
            <div className="flex flex-col justify-center space-y-6 border-t border-stone-300 pt-8 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
              <div>
                <p className="text-sm text-slate-600">Estimated monthly</p>
                <p className="text-3xl font-bold text-slate-900">{formatAed(Math.round(monthly))}</p>
                <p className="text-xs text-slate-500">per month</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Total loan amount</p>
                <p className="text-2xl font-semibold text-slate-900">{formatAed(Math.round(principal))}</p>
              </div>
              <a
                href={`https://wa.me/971800000000?text=${encodeURIComponent("I'd like to speak to an agent about mortgage options for " + property.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-md py-3 text-center text-sm font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: TEAL }}
              >
                Speak to an agent
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionTitle>Properties available in the same area</SectionTitle>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((p) => (
              <RelatedCard key={p.slug} p={p} basePath={basePath} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
