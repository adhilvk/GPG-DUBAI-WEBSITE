"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export default function AwardsPageHeader() {
  const { t } = useLanguage();

  return (
    <SectionHeader
      eyebrow={t("ourAwards.heroBrand")}
      title={t("ourAwards.pageTitle")}
      accent={t("ourAwards.pageAccent")}
      subtitle={t("ourAwards.heroSubtitle")}
      className="!mb-10 md:!mb-12"
    />
  );
}
