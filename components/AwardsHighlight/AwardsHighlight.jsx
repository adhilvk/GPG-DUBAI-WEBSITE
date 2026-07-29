"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { AWARD_HIGHLIGHT } from "@/data/awardGallery";
import "./AwardsHighlight.css";

export default function AwardsHighlight() {
  const { t } = useLanguage();

  return (
    <section className="awards-highlight">
      <div className="awards-highlight__content">
        <h2 className="awards-highlight__title">
          {t("ourAwards.highlightTitle")}{" "}
          <span className="awards-highlight__title-accent">{t("ourAwards.highlightAccent")}</span>
        </h2>
        <p className="awards-highlight__text">{t("ourAwards.highlightText")}</p>
        <p className="awards-highlight__text awards-highlight__text--secondary">
          {t("ourAwards.highlightTextSecondary")}
        </p>
      </div>

      <div className="awards-highlight__media">
        <Image
          src={AWARD_HIGHLIGHT.src}
          alt={AWARD_HIGHLIGHT.alt}
          fill
          className="awards-highlight__image"
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 400px, 420px"
          priority
        />
      </div>
    </section>
  );
}
