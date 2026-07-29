"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import AwardsGalleryGrid from "@/components/AwardsGalleryGrid/AwardsGalleryGrid";
import { useLanguage } from "@/context/LanguageContext";

export default function OurAwards() {
  const { t } = useLanguage();

  return (
    <div className="mb-12 md:mb-14">
      <SectionHeader title={t("ourAwards.title")} accent={t("ourAwards.accent")} />
      <AwardsGalleryGrid mode="home" />
    </div>
  );
}
