"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AWARD_RECOGNITION_VIDEO } from "@/data/awardGallery";
import "./AwardsRecognition.css";

export default function AwardsRecognition() {
  const { t } = useLanguage();

  return (
    <section className="awards-recognition">
      <div className="awards-recognition__media">
        <video
          src={AWARD_RECOGNITION_VIDEO.src}
          poster={AWARD_RECOGNITION_VIDEO.poster}
          controls
          playsInline
          preload="metadata"
          className="awards-recognition__video"
          aria-label={AWARD_RECOGNITION_VIDEO.alt}
        />
      </div>

      <div className="awards-recognition__content">
        <h2 className="awards-recognition__title">
          {t("ourAwards.recognitionTitle")}
          <span className="awards-recognition__title-accent">
            {t("ourAwards.recognitionTitleAccent")}
          </span>
        </h2>

        <p className="awards-recognition__text">
          {t("ourAwards.recognitionText1Before")}
          <strong>{t("ourAwards.recognitionText1Award")}</strong>
          {t("ourAwards.recognitionText1After")}
          <strong>GPG</strong>
          {t("ourAwards.recognitionText1End")}
        </p>

        <p className="awards-recognition__text">
          {t("ourAwards.recognitionText2Before")}
          <strong>GPG</strong>
          {t("ourAwards.recognitionText2After")}
        </p>
      </div>
    </section>
  );
}
