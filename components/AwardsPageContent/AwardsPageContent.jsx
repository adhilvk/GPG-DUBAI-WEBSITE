"use client";

import AwardsPageHeader from "@/components/AwardsPageHeader/AwardsPageHeader";
import AwardsHighlight from "@/components/AwardsHighlight/AwardsHighlight";
import AwardsGalleryGrid from "@/components/AwardsGalleryGrid/AwardsGalleryGrid";
import AwardsCTA from "@/components/AwardsCTA/AwardsCTA";
import "./AwardsPageContent.css";

export default function AwardsPageContent() {
  return (
    <main className="bg-white px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
      <div className="awards-page mx-auto max-w-7xl">
        <AwardsPageHeader />

        <AwardsHighlight />

        <AwardsGalleryGrid mode="page" />

        <AwardsCTA />
      </div>
    </main>
  );
}
