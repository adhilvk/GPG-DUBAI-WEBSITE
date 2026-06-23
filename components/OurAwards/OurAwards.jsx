"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { AWARD_ITEMS } from "@/data/awards";
import "../ExclusiveProjects/ExclusiveProjects.css";
import "./OurAwards.css";

const AUTO_SCROLL_SPEED = 0.45;
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
        sizes="(max-width: 768px) 88vw, 700px"
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
  const offsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const rafRef = useRef(null);

  const loopingItems = useMemo(() => [...AWARD_ITEMS, ...AWARD_ITEMS], []);

  const getHalfWidth = useCallback(() => {
    const track = trackRef.current;
    return track ? track.scrollWidth / 2 : 0;
  }, []);

  const getScrollStep = useCallback(() => {
    const card = trackRef.current?.querySelector(".awards-marquee__card");
    return card ? card.offsetWidth + CARD_GAP : 620;
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

  const scroll = useCallback(
    (direction) => {
      offsetRef.current -= direction * getScrollStep();
      normalizeOffset();
      applyTransform();
      isPausedRef.current = true;
      setTimeout(() => {
        isPausedRef.current = false;
      }, 2000);
    },
    [applyTransform, getScrollStep, normalizeOffset]
  );

  useEffect(() => {
    offsetRef.current = 0;
    applyTransform();

    const tick = () => {
      if (!isPausedRef.current) {
        offsetRef.current -= AUTO_SCROLL_SPEED;
        normalizeOffset();
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [applyTransform, normalizeOffset]);

  return (
    <div className="mb-12 md:mb-14">
      <SectionHeader title={t("ourAwards.title")} accent={t("ourAwards.accent")} />

      <div
        className="trending-slider"
        onMouseEnter={() => {
          isPausedRef.current = true;
        }}
        onMouseLeave={() => {
          isPausedRef.current = false;
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

        <div className="trending-slider__viewport">
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
