"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import "./ExclusiveProjects.css";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ArticleDownload from "@/components/ArticleDownload/ArticleDownload";
import { useLanguage } from "@/context/LanguageContext";
import { LUXURY_LISTING_PROJECTS } from "@/data/luxuryListingProjects";
import LuxuryProjectCard from "@/components/LuxuryProjectCard/LuxuryProjectCard";
import OurAwards from "@/components/OurAwards/OurAwards";

const PropertyCardBody = ({ project }) => (
  <div className="exclusive-card-body">
    <p className="exclusive-card-body__price">AED {project.price}</p>
    <p className="exclusive-card-body__title">{project.title}</p>
    <p className="exclusive-card-body__location">
      <MapPin size={12} className="shrink-0" />
      {project.location}
    </p>
  </div>
);

const ExclusivePropertyCard = ({ project }) => (
  <article className="group/card relative h-full overflow-visible rounded-2xl border border-red-50 bg-white shadow-sm transition-shadow hover:border-red-100 hover:shadow-[0_8px_24px_rgba(227,30,36,0.1)]">
    <div className="relative aspect-[4/3] overflow-visible rounded-t-2xl">
      <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
        />
      </div>
      {project.plan ? <span className="trending-ribbon">{project.plan}</span> : null}
    </div>
    <PropertyCardBody project={project} />
  </article>
);

const TrendingProjectCard = ExclusivePropertyCard;

const trendingCategoryLinks = {
  villas: "/villas",
  townhouses: "/townhouses",
  apartments: "/apartments",
};

const ViewAllButton = ({ href, label }) => (
  <Link
    href={href}
    className="inline-flex items-center gap-1.5 rounded-lg border border-[#E31E24] px-6 py-2.5 text-[11px] font-bold uppercase tracking-wide text-[#E31E24] transition-colors hover:bg-[#E31E24] hover:text-white sm:px-8 sm:text-xs"
  >
    {label}
    <ChevronRight size={14} />
  </Link>
);

const CARD_GAP = 20;
const AUTO_SCROLL_SPEED = 0.55;
const ARROW_SCROLL_DURATION = 450;
const ARROW_PAUSE_MS = 2000;

function MarqueeSlider({ items, renderItem, getItemKey, resetKey, prevLabel, nextLabel, cardClassName = "" }) {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const rafRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const loopingItems = useMemo(() => [...items, ...items], [items]);

  const getHalfWidth = useCallback(() => {
    const track = trackRef.current;
    return track ? track.scrollWidth / 2 : 0;
  }, []);

  const getScrollStep = useCallback(() => {
    const card = trackRef.current?.querySelector(".exclusive-card-slot");
    return card ? card.offsetWidth + CARD_GAP : 290;
  }, []);

  const normalizeOffset = useCallback(() => {
    const half = getHalfWidth();
    if (half <= 0) return;

    while (offsetRef.current <= -half) {
      offsetRef.current += half;
    }

    while (offsetRef.current > 0) {
      offsetRef.current -= half;
    }
  }, [getHalfWidth]);

  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (track) {
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  }, []);

  const pauseAutoScroll = useCallback((duration = ARROW_PAUSE_MS) => {
    isPausedRef.current = true;

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
      resumeTimeoutRef.current = null;
    }, duration);
  }, []);

  const scroll = useCallback(
    (direction) => {
      if (isAnimatingRef.current) return;

      const step = getScrollStep();
      const start = offsetRef.current;
      const target = start - direction * step;

      isAnimatingRef.current = true;
      pauseAutoScroll();

      const startTime = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - startTime) / ARROW_SCROLL_DURATION, 1);
        const eased = 1 - (1 - progress) ** 3;

        offsetRef.current = start + (target - start) * eased;
        normalizeOffset();
        applyTransform();

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          isAnimatingRef.current = false;
        }
      };

      requestAnimationFrame(animate);
    },
    [applyTransform, getScrollStep, normalizeOffset, pauseAutoScroll]
  );

  useEffect(() => {
    offsetRef.current = 0;
    applyTransform();

    const tick = () => {
      if (!isPausedRef.current && !isAnimatingRef.current) {
        offsetRef.current -= AUTO_SCROLL_SPEED;
        normalizeOffset();
        applyTransform();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [resetKey, applyTransform, normalizeOffset]);

  return (
    <div
      className="trending-slider"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        if (!isAnimatingRef.current && !resumeTimeoutRef.current) {
          isPausedRef.current = false;
        }
      }}
    >
      <button
        type="button"
        className="trending-slider__arrow"
        onClick={() => scroll(-1)}
        aria-label={prevLabel}
      >
        <ChevronLeft size={28} strokeWidth={2} />
      </button>

      <div className="trending-slider__viewport" key={resetKey}>
        <div className="trending-marquee__track" ref={trackRef}>
          {loopingItems.map((item, idx) => (
            <div
              key={`${getItemKey(item)}-${idx}`}
              className={`exclusive-card-slot ${cardClassName}`.trim()}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="trending-slider__arrow"
        onClick={() => scroll(1)}
        aria-label={nextLabel}
      >
        <ChevronRight size={28} strokeWidth={2} />
      </button>
    </div>
  );
}

const ExclusiveProjectsSlider = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("villas");

  const tabs = [
    { key: "villas", label: "Villas" },
    { key: "townhouses", label: "Townhouses" },
    { key: "apartments", label: "Apartments" },
  ];

  const trendingProjects = [
    { title: "Palm Cluster Villas", location: "Palm Jebel Ali", price: "7.9M", image: "/images/heightsbyemaar.webp", plan: "65 / 35 Payment Plan", category: "villas" },
    { title: "Canal Edge Villas", location: "Dubai Water Canal", price: "6.1M", image: "/images/palmcentral.jpg", plan: "55 / 45 Payment Plan", category: "villas" },
    { title: "Grand Polo Villas", location: "Grand Polo Club", price: "5.7M", image: "/images/grandpolo.webp", plan: "60 / 40 Payment Plan", category: "villas" },
    { title: "Sobha Reserve Villas", location: "Dubailand", price: "8.4M", image: "/images/Riverside.jpg", plan: "70 / 30 Payment Plan", category: "villas" },
    { title: "Emaar South Townhouses", location: "Dubai South", price: "3.4M", image: "/images/grandpolo.webp", plan: "70 / 30 Payment Plan", category: "townhouses" },
    { title: "Riverside Townhouses", location: "Damac Riverside", price: "2.9M", image: "/images/Riverside.jpg", plan: "60 / 40 Payment Plan", category: "townhouses" },
    { title: "The Valley Townhouses", location: "The Valley", price: "2.7M", image: "/images/heightsbyemaar.webp", plan: "65 / 35 Payment Plan", category: "townhouses" },
    { title: "Nad Al Sheba Gardens", location: "Nad Al Sheba", price: "4.1M", image: "/images/palmcentral.jpg", plan: "60 / 40 Payment Plan", category: "townhouses" },
    { title: "Burj Binghatti", location: "Binghatti", price: "8M", image: "/images/palmcentral.jpg", plan: "60 / 40 Payment Plan", category: "apartments" },
    { title: "Mercedes-Benz Places", location: "Binghatti City", price: "8.8M", image: "/images/Riverside.jpg", plan: "70 / 30 Payment Plan", category: "apartments" },
    { title: "Sobha Hartland II", location: "MBR City", price: "1.85M", image: "/images/grandpolo.webp", plan: "55 / 45 Payment Plan", category: "apartments" },
    { title: "Marina Views", location: "Dubai Marina", price: "3.95M", image: "/images/heightsbyemaar.webp", plan: "50 / 50 Payment Plan", category: "apartments" },
  ];

  const luxuryListings = LUXURY_LISTING_PROJECTS;

  const filteredProjects = useMemo(
    () => trendingProjects.filter((project) => project.category === activeTab),
    [activeTab]
  );

  return (
    <section className="bg-white px-4 pb-16 pt-12 md:px-12 md:pb-20 md:pt-16">
      <div className="max-w-360 mx-auto">
        <div className="px-2 md:px-0">
          <OurAwards />

          <SectionHeader
            title={t("exclusiveProjects.listingTitle")}
            accent={t("exclusiveProjects.listingAccent")}
          />
          <MarqueeSlider
            items={luxuryListings}
            renderItem={(item) => <LuxuryProjectCard project={item} compact />}
            getItemKey={(item) => item.id}
            resetKey="luxury"
            prevLabel="Previous luxury listings"
            nextLabel="Next luxury listings"
            cardClassName="luxury-marquee__card"
          />
          <div className="mt-8 flex justify-center">
            <ViewAllButton
              href="/luxury-properties"
              label={t("exclusiveProjects.viewAllProjects")}
            />
          </div>

          <div className="mt-14 border-t border-slate-100 pt-12 md:mt-16 md:pt-14">
            <SectionHeader title="Most Trending Projects" accent="in UAE" />

            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                      activeTab === tab.key
                        ? "bg-[#E31E24] text-white"
                        : "text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <MarqueeSlider
              items={filteredProjects}
              renderItem={(item) => <ExclusivePropertyCard project={item} />}
              getItemKey={(item) => `${activeTab}-${item.title}`}
              resetKey={activeTab}
              prevLabel="Previous projects"
              nextLabel="Next projects"
              cardClassName="trending-marquee__card"
            />
            <div className="mt-8 flex justify-center">
              <ViewAllButton
                href={trendingCategoryLinks[activeTab]}
                label={t("exclusiveProjects.viewAllProjects")}
              />
            </div>
          </div>

          <ArticleDownload />
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProjectsSlider;
