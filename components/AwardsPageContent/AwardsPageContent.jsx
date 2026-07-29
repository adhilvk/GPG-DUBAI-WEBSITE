"use client";

import SectionHeader from "@/components/SectionHeader/SectionHeader";
import AwardsGalleryGrid from "@/components/AwardsGalleryGrid/AwardsGalleryGrid";
import { useLanguage } from "@/context/LanguageContext";

export default function AwardsPageContent() {
  const { t } = useLanguage();

  return (
    <main className="bg-white px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={t("ourAwards.pageTitle")}
          accent={t("ourAwards.pageAccent")}
        />

        <AwardsGalleryGrid mode="page" />

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-slate-500 md:text-base">
          {t("ourAwards.footerNote")}
        </p>
      </div>
    </main>
  );
}
