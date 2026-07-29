"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import "./AwardsCTA.css";

export default function AwardsCTA() {
  const { t } = useLanguage();

  return (
    <section className="awards-cta">
      <div className="awards-cta__media" aria-hidden="true">
        <Image
          src="https://res.cloudinary.com/dsldkspov/image/upload/v1785141397/Asset_5safca_ug0skj.jpg"
          alt=""
          fill
          className="awards-cta__image"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority={false}
        />
        <div className="awards-cta__overlay" />
      </div>

      <div className="awards-cta__content">
        <h2 className="awards-cta__title">
          {t("ourAwards.ctaTitle")}
          <span className="awards-cta__title-accent">{t("ourAwards.ctaTitleAccent")}</span>
        </h2>

        <Link href="/luxury-properties" className="awards-cta__button">
          {t("ourAwards.ctaButton")}
        </Link>
      </div>
    </section>
  );
}
