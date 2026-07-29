"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import AwardsGalleryGrid from "@/components/AwardsGalleryGrid/AwardsGalleryGrid";
import { useLanguage } from "@/context/LanguageContext";

const AwardsTimeline = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={t("ourAwards.aboutTitle")}
          accent={t("ourAwards.aboutAccent")}
          className="!mb-16"
        />

        <AwardsGalleryGrid mode="home" />

        <div className="mt-16 text-center">
          <p className="mx-auto max-w-2xl text-sm text-slate-500 md:text-base">
            {t("ourAwards.footerNote")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardsTimeline;
