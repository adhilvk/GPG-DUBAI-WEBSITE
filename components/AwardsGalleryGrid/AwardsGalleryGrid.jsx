"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  AWARD_GALLERY,
  AWARD_GALLERY_FEATURED,
  AWARD_GALLERY_PAGE_SIZE,
} from "@/data/awardGallery";
import "./AwardsGalleryGrid.css";

function GalleryMedia({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % AWARD_GALLERY_PAGE_SIZE) * 0.04, duration: 0.5 }}
      viewport={{ once: true }}
      className="awards-gallery__item group"
    >
      {item.type === "video" ? (
        <video
          src={item.src}
          poster={item.poster}
          controls
          playsInline
          preload="metadata"
          className="awards-gallery__media"
          aria-label={item.alt}
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="awards-gallery__media awards-gallery__media--image"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
      )}
    </motion.div>
  );
}

function ShowMoreLink({ href, label }) {
  return (
    <div className="awards-gallery__actions">
      <Link href={href} className="awards-gallery__toggle">
        {label}
      </Link>
    </div>
  );
}

function AwardsPagination({ currentPage, totalPages, t }) {
  const buildPageHref = (page) => {
    if (page <= 1) return "/awards?all=1";
    return `/awards?all=1&page=${page}`;
  };

  if (totalPages <= 1) return null;

  return (
    <nav
      className="awards-gallery__pagination"
      aria-label={t("ourAwards.pagination")}
    >
      <Link
        href={buildPageHref(currentPage - 1)}
        aria-disabled={currentPage <= 1}
        className={`awards-gallery__pagination-btn ${
          currentPage <= 1 ? "awards-gallery__pagination-btn--disabled" : ""
        }`}
      >
        <ChevronLeft size={16} />
        {t("luxuryListingsPage.previous")}
      </Link>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <Link
          key={page}
          href={buildPageHref(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`awards-gallery__pagination-page ${
            page === currentPage ? "awards-gallery__pagination-page--active" : ""
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={buildPageHref(currentPage + 1)}
        aria-disabled={currentPage >= totalPages}
        className={`awards-gallery__pagination-btn ${
          currentPage >= totalPages ? "awards-gallery__pagination-btn--disabled" : ""
        }`}
      >
        {t("luxuryListingsPage.next")}
        <ChevronRight size={16} />
      </Link>
    </nav>
  );
}

function AwardsGalleryPreview({ showMoreHref }) {
  const { t } = useLanguage();

  return (
    <div className="awards-gallery">
      <div className="awards-gallery__grid">
        {AWARD_GALLERY_FEATURED.map((item, index) => (
          <GalleryMedia key={item.id} item={item} index={index} />
        ))}
      </div>
      <ShowMoreLink href={showMoreHref} label={t("ourAwards.showMore")} />
    </div>
  );
}

function AwardsGalleryPage() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const showAll = searchParams.get("all") === "1";
  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

  if (!showAll) {
    return <AwardsGalleryPreview showMoreHref="/awards?all=1" />;
  }

  const totalPages = Math.max(1, Math.ceil(AWARD_GALLERY.length / AWARD_GALLERY_PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * AWARD_GALLERY_PAGE_SIZE;
  const paginatedItems = AWARD_GALLERY.slice(start, start + AWARD_GALLERY_PAGE_SIZE);

  return (
    <div className="awards-gallery">
      <div className="awards-gallery__grid">
        {paginatedItems.map((item, index) => (
          <GalleryMedia key={item.id} item={item} index={index} />
        ))}
      </div>

      {totalPages > 1 && (
        <p className="awards-gallery__count">
          {AWARD_GALLERY.length} {t("ourAwards.itemsFound")}
          {" · "}
          {t("luxuryListingsPage.page")} {safePage} {t("luxuryListingsPage.of")} {totalPages}
        </p>
      )}

      <AwardsPagination currentPage={safePage} totalPages={totalPages} t={t} />
    </div>
  );
}

export default function AwardsGalleryGrid({ mode = "page" }) {
  if (mode === "home") {
    return <AwardsGalleryPreview showMoreHref="/awards" />;
  }

  return <AwardsGalleryPage />;
}
