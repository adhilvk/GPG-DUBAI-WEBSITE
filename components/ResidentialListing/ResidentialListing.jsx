"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  ArrowUp,
  ListFilter,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LuxuryProjectCard from "@/components/LuxuryProjectCard/LuxuryProjectCard";

const TEAL = "#0d5c5c";
const TEAL_HOVER = "#0a4a4a";

function formatAed(n) {
  return `AED ${n.toLocaleString("en-AE")}`;
}

function slugToTitle(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function mapToLuxuryProject(property) {
  return {
    id: property.id,
    propertyType: property.propertyType ?? "Villa",
    developer: property.developer,
    title: property.title ?? slugToTitle(property.slug),
    location: property.location,
    price: property.price,
    priceDisplay: `${property.price.toLocaleString("en-US")} AED`,
    image: property.images[0],
    beds: property.beds,
    baths: property.baths,
    sqft: property.sqft,
  };
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

function SelectField({ label, value, onChange, options }) {
  return (
    <div className="min-w-0 flex-1 sm:flex-initial sm:min-w-[140px]">
      <label className="sr-only">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 px-3 pr-8 text-sm text-slate-700 bg-white border border-slate-200 rounded-md appearance-none bg-[length:16px] bg-[right_10px_center] bg-no-repeat cursor-pointer outline-none focus:border-[#0d5c5c] focus:ring-1 focus:ring-[#0d5c5c]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function PropertyCard({ property, basePath }) {
  const swiperRef = useRef(null);

  const waHref = useMemo(() => {
    const text = `Hi, I'm interested in ${property.location} (${formatAed(property.price)}).`;
    return `https://wa.me/971800000000?text=${encodeURIComponent(text)}`;
  }, [property]);

  const detailHref = `${basePath}/${property.slug}`;

  return (
    <article className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <Link href={detailHref} className="relative aspect-[4/3] bg-slate-100 group/slide block">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop
          className="h-full w-full [&_.swiper-pagination-bullet-active]:bg-white [&_.swiper-pagination-bullet]:bg-white/60 [&_.swiper-pagination]:!bottom-2"
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
        >
          {property.images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white/85 text-sm md:text-base font-semibold tracking-[0.25em] uppercase drop-shadow-md">
                    GPG
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 text-slate-800 shadow flex items-center justify-center opacity-90 hover:bg-white transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            swiperRef.current?.slidePrev();
          }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 text-slate-800 shadow flex items-center justify-center opacity-90 hover:bg-white transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            swiperRef.current?.slideNext();
          }}
        >
          <ChevronRight size={20} />
        </button>
      </Link>

      <Link
        href={detailHref}
        className="flex flex-col flex-1 gap-3 p-4 md:p-5 min-h-0 hover:bg-slate-50/90 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#0d5c5c] focus-visible:ring-inset"
      >
        <p className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          {formatAed(property.price)}
        </p>
        <p className="text-[11px] md:text-xs font-semibold text-slate-500 uppercase tracking-wide leading-snug">
          {property.features}
        </p>
        <p className="text-sm text-slate-700 flex items-start gap-1.5">
          <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: TEAL }} />
          <span>{property.location}</span>
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <BedDouble size={16} className="text-slate-400" />
            {property.beds} bed{property.beds !== 1 ? "s" : ""}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath size={16} className="text-slate-400" />
            {property.baths} bath{property.baths !== 1 ? "s" : ""}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Maximize2 size={16} className="text-slate-400" />
            {property.sqft.toLocaleString()} sq ft
          </span>
        </div>
      </Link>

      <div className="px-4 md:px-5 pb-4 md:pb-5 pt-2 border-t border-slate-100 flex justify-end">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-white text-xs font-bold uppercase tracking-wider transition-colors"
          style={{ backgroundColor: TEAL }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = TEAL_HOVER;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = TEAL;
          }}
        >
          <WhatsAppGlyph className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </article>
  );
}

export default function ResidentialListing({ config }) {
  const [showTop, setShowTop] = useState(false);
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sortedListings = useMemo(() => {
    const list = [...config.listings];
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [config.listings, sortBy]);

  const breadcrumbGroup = config.breadcrumbGroup ?? "Residential";

  return (
    <main className="bg-white text-slate-900 pb-16">
      <section
        className="relative w-full min-h-[380px] md:min-h-[460px]"
        aria-labelledby={config.heroId}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={config.heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[380px] max-w-4xl flex-col items-center justify-center px-6 pb-14 pt-28 text-center md:min-h-[460px] md:pt-32 md:pb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {config.eyebrow}
          </p>
          <h1
            id={config.heroId}
            className="text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight"
          >
            {config.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">{config.heroSubtitle}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <nav
          className="text-xs sm:text-sm text-slate-500 mb-4 flex flex-wrap items-center gap-1"
          aria-label="Breadcrumb"
        >
          <span className="text-slate-600">Our Properties</span>
          <ChevronRight size={14} className="text-slate-300 shrink-0" />
          <span className="text-slate-600">{breadcrumbGroup}</span>
          <ChevronRight size={14} className="text-slate-300 shrink-0" />
          <span className="font-semibold text-slate-900">{config.breadcrumbCurrent}</span>
        </nav>

        <div className="border border-slate-200 rounded-lg p-3 sm:p-4 bg-white shadow-sm mb-4">
          <div className="flex flex-col xl:flex-row xl:items-stretch gap-3">
            <div className="relative flex-1 min-w-0">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="search"
                placeholder="City, community or building"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-11 pl-10 pr-3 text-sm border border-slate-200 rounded-md outline-none focus:border-[#0d5c5c] focus:ring-1 focus:ring-[#0d5c5c]"
              />
            </div>

            <div className="flex flex-wrap gap-2 xl:flex-nowrap xl:items-center">
              <SelectField
                label="Property type"
                value={propertyType}
                onChange={setPropertyType}
                options={config.propertyTypeOptions}
              />
              <SelectField
                label="Min price"
                value={minPrice}
                onChange={setMinPrice}
                options={[
                  { value: "", label: "Min Price" },
                  { value: "1m", label: "AED 1M" },
                  { value: "2m", label: "AED 2M" },
                  { value: "5m", label: "AED 5M" },
                  { value: "10m", label: "AED 10M" },
                ]}
              />
              <SelectField
                label="Max price"
                value={maxPrice}
                onChange={setMaxPrice}
                options={[
                  { value: "", label: "Max Price" },
                  { value: "3m", label: "AED 3M" },
                  { value: "5m", label: "AED 5M" },
                  { value: "10m", label: "AED 10M" },
                  { value: "any", label: "No max" },
                ]}
              />
              <SelectField
                label="Bedrooms"
                value={bedrooms}
                onChange={setBedrooms}
                options={[
                  { value: "", label: "Bedrooms" },
                  { value: "0", label: "Studio" },
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                  { value: "4", label: "4+" },
                ]}
              />
              <SelectField
                label="Bathrooms"
                value={bathrooms}
                onChange={setBathrooms}
                options={[
                  { value: "", label: "Bathrooms" },
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3+" },
                ]}
              />
              <button
                type="button"
                className="h-11 px-8 rounded-md text-white text-sm font-semibold uppercase tracking-wide shrink-0 w-full sm:w-auto xl:w-auto"
                style={{ backgroundColor: TEAL }}
              >
                Find
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <p className="text-sm md:text-base text-slate-700">
            {config.resultsLabel}{" "}
            <span className="text-slate-300">|</span>{" "}
            <span className="font-bold text-slate-900">{config.totalCount} properties</span>
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span className="text-slate-500">Sort by:</span>
            <div className="inline-flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-0 pr-7 py-1.5 bg-transparent border-none font-medium text-slate-900 cursor-pointer outline-none focus:underline"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right center",
                }}
              >
                <option value="recent">Most Recent</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ListFilter size={16} className="text-slate-400 shrink-0" aria-hidden />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {sortedListings.map((property) =>
            config.cardVariant === "luxury" ? (
              <LuxuryProjectCard
                key={property.id}
                project={mapToLuxuryProject(property)}
                href={`${config.basePath}/${property.slug}`}
              />
            ) : (
              <PropertyCard key={property.id} property={property} basePath={config.basePath} />
            )
          )}
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
          style={{ backgroundColor: TEAL }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
}
