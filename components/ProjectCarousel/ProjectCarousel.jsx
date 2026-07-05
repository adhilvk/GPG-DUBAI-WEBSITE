"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/components/ExclusiveProjects/ExclusiveProjects.css";

const CARD_GAP = 20;
const SCROLL_DURATION = 450;
const DESKTOP_BREAKPOINT = 768;
const DESKTOP_ITEMS_PER_PAGE = 3;
const MOBILE_ITEMS_PER_PAGE = 1;

export default function ProjectCarousel({
  items,
  renderItem,
  getItemKey,
  resetKey,
  prevLabel,
  nextLabel,
  cardClassName = "",
  sliderClassName = "trending-slider--marquee",
  desktopItemsPerPage = DESKTOP_ITEMS_PER_PAGE,
  mobileItemsPerPage = MOBILE_ITEMS_PER_PAGE,
  trailingCard = null,
}) {
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const offsetRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(mobileItemsPerPage);
  const [cardWidth, setCardWidth] = useState(null);

  const totalItems = items.length + (trailingCard ? 1 : 0);
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const updateLayout = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const width = viewport.clientWidth;
    const perPage = width >= DESKTOP_BREAKPOINT ? desktopItemsPerPage : mobileItemsPerPage;
    const gap = CARD_GAP;
    const nextCardWidth = (width - (perPage - 1) * gap) / perPage;

    setItemsPerPage(perPage);
    setCardWidth(nextCardWidth);
  }, [desktopItemsPerPage, mobileItemsPerPage]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    updateLayout();

    const observer = new ResizeObserver(updateLayout);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, [updateLayout, resetKey]);

  useEffect(() => {
    setCurrentPage(0);
    offsetRef.current = 0;
    const track = trackRef.current;
    if (track) {
      track.style.transform = "translate3d(0px, 0, 0)";
    }
  }, [resetKey, itemsPerPage, items.length, trailingCard]);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [currentPage, totalPages]);

  const applyTransform = useCallback((offset) => {
    const track = trackRef.current;
    if (track) {
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
    }
  }, []);

  const getPageOffset = useCallback(
    (page) => {
      if (!cardWidth || !itemsPerPage) return 0;
      return -page * itemsPerPage * (cardWidth + CARD_GAP);
    },
    [cardWidth, itemsPerPage]
  );

  useEffect(() => {
    offsetRef.current = getPageOffset(currentPage);
    applyTransform(offsetRef.current);
  }, [currentPage, getPageOffset, applyTransform, cardWidth]);

  const goToPage = useCallback(
    (page) => {
      const targetPage = Math.max(0, Math.min(page, totalPages - 1));
      if (targetPage === currentPage || isAnimatingRef.current || !cardWidth) return;

      const start = offsetRef.current;
      const target = getPageOffset(targetPage);
      const startTime = performance.now();
      isAnimatingRef.current = true;

      const animate = (now) => {
        const progress = Math.min((now - startTime) / SCROLL_DURATION, 1);
        const eased = 1 - (1 - progress) ** 3;

        offsetRef.current = start + (target - start) * eased;
        applyTransform(offsetRef.current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          offsetRef.current = target;
          applyTransform(target);
          isAnimatingRef.current = false;
          setCurrentPage(targetPage);
        }
      };

      requestAnimationFrame(animate);
    },
    [applyTransform, cardWidth, currentPage, getPageOffset, totalPages]
  );

  const scroll = useCallback(
    (direction) => {
      goToPage(currentPage + direction);
    },
    [currentPage, goToPage]
  );

  return (
    <div className="trending-slider-wrapper">
      <div className={`trending-slider ${sliderClassName}`.trim()}>
        <button
          type="button"
          className="trending-slider__arrow"
          onClick={() => scroll(-1)}
          disabled={currentPage === 0}
          aria-label={prevLabel}
        >
          <ChevronLeft size={28} strokeWidth={2} />
        </button>

        <div
          className="trending-slider__viewport"
          ref={viewportRef}
          key={resetKey}
          style={
            cardWidth
              ? {
                  "--carousel-card-width": `${cardWidth}px`,
                  "--carousel-gap": `${CARD_GAP}px`,
                }
              : undefined
          }
        >
          <div className="trending-marquee__track" ref={trackRef}>
            {items.map((item) => (
              <div
                key={getItemKey(item)}
                className={`exclusive-card-slot ${cardClassName}`.trim()}
              >
                {renderItem(item)}
              </div>
            ))}
            {trailingCard ? (
              <div className={`exclusive-card-slot ${cardClassName}`.trim()}>{trailingCard}</div>
            ) : null}
          </div>
        </div>

        <button
          type="button"
          className="trending-slider__arrow"
          onClick={() => scroll(1)}
          disabled={currentPage >= totalPages - 1}
          aria-label={nextLabel}
        >
          <ChevronRight size={28} strokeWidth={2} />
        </button>
      </div>

      {totalPages > 1 && (
        <div className="trending-slider__dots" role="tablist" aria-label="Carousel pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === currentPage}
              aria-label={`Go to slide ${index + 1}`}
              className={`trending-slider__dot${index === currentPage ? " trending-slider__dot--active" : ""}`}
              onClick={() => goToPage(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
