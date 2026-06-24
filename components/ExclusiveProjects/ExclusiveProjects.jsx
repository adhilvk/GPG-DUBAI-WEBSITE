"use client";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ExclusiveProjects.css";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ArticleDownload from "@/components/ArticleDownload/ArticleDownload";
import { useLanguage } from "@/context/LanguageContext";
import { LUXURY_LISTING_PROJECTS } from "@/data/luxuryListingProjects";
import { TRENDING_PROJECTS } from "@/data/trendingProjects";
import LuxuryProjectCard from "@/components/LuxuryProjectCard/LuxuryProjectCard";
import TrendingProjectCard from "@/components/TrendingProjectCard/TrendingProjectCard";
import OurAwards from "@/components/OurAwards/OurAwards";

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
const AUTO_SCROLL_PAUSE_MS = 1000;
const AUTO_SCROLL_STEP_DURATION = 600;
const ARROW_SCROLL_DURATION = 450;
const ARROW_PAUSE_MS = 2000;

function MarqueeSlider({ items, renderItem, getItemKey, resetKey, prevLabel, nextLabel, cardClassName = "" }) {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const isAnimatingRef = useRef(false);
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

    let cancelled = false;
    let timeoutId = null;
    let rafId = null;

    const scheduleNextStep = (delay) => {
      timeoutId = setTimeout(runAutoStep, delay);
    };

    const runAutoStep = () => {
      if (cancelled) return;

      if (isPausedRef.current || isAnimatingRef.current) {
        scheduleNextStep(100);
        return;
      }

      const step = getScrollStep();
      const start = offsetRef.current;
      const target = start - step;
      const startTime = performance.now();
      isAnimatingRef.current = true;

      const animate = (now) => {
        if (cancelled) return;

        if (isPausedRef.current) {
          isAnimatingRef.current = false;
          scheduleNextStep(100);
          return;
        }

        const progress = Math.min((now - startTime) / AUTO_SCROLL_STEP_DURATION, 1);
        const eased = 1 - (1 - progress) ** 3;

        offsetRef.current = start + (target - start) * eased;
        normalizeOffset();
        applyTransform();

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        } else {
          isAnimatingRef.current = false;
          scheduleNextStep(AUTO_SCROLL_PAUSE_MS);
        }
      };

      rafId = requestAnimationFrame(animate);
    };

    scheduleNextStep(AUTO_SCROLL_PAUSE_MS);

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [resetKey, applyTransform, getScrollStep, normalizeOffset]);

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

  const trendingProjects = TRENDING_PROJECTS;
  const luxuryListings = LUXURY_LISTING_PROJECTS;

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
            <SectionHeader
              title={t("trendingProjectsPage.title")}
              accent={t("trendingProjectsPage.accent")}
            />
            <MarqueeSlider
              items={trendingProjects}
              renderItem={(item) => <TrendingProjectCard project={item} compact />}
              getItemKey={(item) => item.id}
              resetKey="trending"
              prevLabel="Previous projects"
              nextLabel="Next projects"
              cardClassName="luxury-marquee__card"
            />
            <div className="mt-8 flex justify-center">
              <ViewAllButton
                href="/trending-projects"
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
