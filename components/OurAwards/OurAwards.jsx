"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { AWARD_ITEMS } from "@/data/awards";
import "../ExclusiveProjects/ExclusiveProjects.css";
import "./OurAwards.css";

const AUTO_SCROLL_PAUSE_MS = 1000;
const AUTO_SCROLL_STEP_DURATION = 600;
const ARROW_SCROLL_DURATION = 450;
const ARROW_PAUSE_MS = 2000;
const CARD_GAP = 20;

function AwardCard({ award }) {
  return (
    <article className="award-card">
      <Image
        src={award.image}
        alt={award.title}
        width={1360}
        height={765}
        className="award-card__image"
        sizes="(max-width: 639px) 100vw, 700px"
      />
      <div className="award-card__caption">
        <p className="award-card__eyebrow">{award.eyebrow}</p>
        <h3 className="award-card__title">{award.title}</h3>
      </div>
    </article>
  );
}

export default function OurAwards() {
  const { t } = useLanguage();
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const offsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(null);

  const loopingItems = useMemo(() => [...AWARD_ITEMS, ...AWARD_ITEMS], []);

  const updateCardWidth = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    setCardWidth(viewport.clientWidth);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    updateCardWidth();

    const observer = new ResizeObserver(() => {
      updateCardWidth();
    });
    observer.observe(viewport);

    return () => observer.disconnect();
  }, [updateCardWidth]);

  const getHalfWidth = useCallback(() => {
    const track = trackRef.current;
    return track ? track.scrollWidth / 2 : 0;
  }, []);

  const getScrollStep = useCallback(() => {
    const track = trackRef.current;
    const card = track?.querySelector(".awards-marquee__card");
    if (!card || !track) return 620;

    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || CARD_GAP;
    return card.offsetWidth + gap;
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

  useEffect(() => {
    offsetRef.current = 0;
    applyTransform();
  }, [cardWidth, applyTransform]);

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
  }, [applyTransform, getScrollStep, normalizeOffset, cardWidth]);

  return (
    <div className="mb-12 md:mb-14">
      <SectionHeader title={t("ourAwards.title")} accent={t("ourAwards.accent")} />

      <div
        className="trending-slider trending-slider--awards"
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
          aria-label="Previous awards"
        >
          <ChevronLeft size={28} strokeWidth={2} />
        </button>

        <div
          className="trending-slider__viewport"
          ref={viewportRef}
          style={cardWidth ? { "--awards-card-width": `${cardWidth}px` } : undefined}
        >
          <div className="trending-marquee__track" ref={trackRef}>
            {loopingItems.map((award, idx) => (
              <div
                key={`${award.id}-${idx}`}
                className="exclusive-card-slot awards-marquee__card"
              >
                <AwardCard award={award} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="trending-slider__arrow"
          onClick={() => scroll(1)}
          aria-label="Next awards"
        >
          <ChevronRight size={28} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
