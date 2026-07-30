"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  AWARD_GALLERY_FEATURED,
  AWARD_GALLERY_REST,
} from "@/data/awardGallery";
import AwardsRecognition from "@/components/AwardsRecognition/AwardsRecognition";
import AwardsCoverFlow from "@/components/AwardsCoverFlow/AwardsCoverFlow";
import "./AwardsGalleryGrid.css";

function GalleryMedia({ item, index }) {
  const imageFitClass =
    item.objectFit === "contain" ? "awards-gallery__media--contain" : "";
  const imageFocusClass = item.imageScale ? "awards-gallery__media--face-focus" : "";

  const itemStyle = {
    ...(item.aspectRatio ? { aspectRatio: item.aspectRatio } : {}),
    ...(item.imageScale ? { "--face-focus-scale": item.imageScale } : {}),
    ...(item.imageOffsetY ? { "--face-focus-offset-y": item.imageOffsetY } : {}),
    ...(item.objectPosition ? { "--face-focus-origin": item.objectPosition } : {}),
  };

  const imageStyle = item.objectPosition ? { objectPosition: item.objectPosition } : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.5 }}
      viewport={{ once: true }}
      className={`awards-gallery__item group ${
        item.objectFit === "contain" ? "awards-gallery__item--contain" : ""
      }`}
      style={Object.keys(itemStyle).length ? itemStyle : undefined}
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
          className={`awards-gallery__media awards-gallery__media--image ${imageFitClass} ${imageFocusClass}`}
          style={imageStyle}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
      )}
    </motion.div>
  );
}

function GalleryGrid({ items }) {
  return (
    <div className="awards-gallery__grid">
      {items.map((item, index) => (
        <GalleryMedia key={item.id} item={item} index={index} />
      ))}
    </div>
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

function AwardsGalleryHome() {
  const { t } = useLanguage();

  return (
    <div className="awards-gallery">
      <div className="awards-gallery__block">
        <GalleryGrid items={AWARD_GALLERY_FEATURED} />
      </div>
      <ShowMoreLink href="/awards" label={t("ourAwards.showMore")} />
    </div>
  );
}

function AwardsGalleryPage() {
  return (
    <div className="awards-gallery">
      <div className="awards-gallery__block">
        <GalleryGrid items={AWARD_GALLERY_FEATURED} />
      </div>
      <div className="awards-gallery__block">
        <AwardsRecognition />
      </div>
      <div className="awards-gallery__block">
        <AwardsCoverFlow items={AWARD_GALLERY_REST} />
      </div>
    </div>
  );
}

export default function AwardsGalleryGrid({ mode = "page" }) {
  if (mode === "home") {
    return <AwardsGalleryHome />;
  }

  return <AwardsGalleryPage />;
}
