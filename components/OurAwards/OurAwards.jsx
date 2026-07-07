"use client";

import Image from "next/image";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ProjectCarousel from "@/components/ProjectCarousel/ProjectCarousel";
import { useLanguage } from "@/context/LanguageContext";
import { AWARD_ITEMS } from "@/data/awards";
import "./OurAwards.css";

function AwardCard({ award }) {
  return (
    <article className="award-card">
      <Image
        src={award.image}
        alt={award.title}
        width={1360}
        height={765}
        className="award-card__image"
        sizes="(max-width: 639px) 100vw, 700px"
      />
      <div className="award-card__caption">
        <p className="award-card__eyebrow">{award.eyebrow}</p>
        <h3 className="award-card__title">{award.title}</h3>
      </div>
      <div className="award-card__glass-info">
        <p className="award-card__glass-text">{award.description}</p>
      </div>
    </article>
  );
}

export default function OurAwards() {
  const { t } = useLanguage();

  return (
    <div className="mb-12 md:mb-14">
      <SectionHeader title={t("ourAwards.title")} accent={t("ourAwards.accent")} />

      <ProjectCarousel
        items={AWARD_ITEMS}
        renderItem={(award) => <AwardCard award={award} />}
        getItemKey={(award) => award.id}
        resetKey="awards"
        prevLabel="Previous awards"
        nextLabel="Next awards"
        cardClassName="awards-marquee__card"
        sliderClassName="trending-slider--marquee"
        desktopItemsPerPage={2}
        mobileItemsPerPage={1}
      />
    </div>
  );
}
