"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./AwardsCoverFlow.css";

function CoverFlowSlide({ item }) {
  const imageFitClass =
    item.objectFit === "contain" ? "awards-coverflow__media--contain" : "";
  const imageFocusClass = item.imageScale ? "awards-coverflow__media--face-focus" : "";

  const slideStyle = {
    ...(item.imageScale ? { "--face-focus-scale": item.imageScale } : {}),
    ...(item.imageOffsetY ? { "--face-focus-offset-y": item.imageOffsetY } : {}),
    ...(item.objectPosition ? { "--face-focus-origin": item.objectPosition } : {}),
  };

  const imageStyle = item.objectPosition ? { objectPosition: item.objectPosition } : undefined;

  return (
    <div
      className={`awards-coverflow__card ${
        item.objectFit === "contain" ? "awards-coverflow__card--contain" : ""
      }`}
      style={Object.keys(slideStyle).length ? slideStyle : undefined}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className={`awards-coverflow__media ${imageFitClass} ${imageFocusClass}`}
        style={imageStyle}
        sizes="(max-width: 639px) 88vw, (max-width: 1023px) 420px, 480px"
      />
      {item.caption ? (
        <div className="awards-coverflow__caption">{item.caption}</div>
      ) : null}
    </div>
  );
}

export default function AwardsCoverFlow({ items }) {
  const { t } = useLanguage();

  if (!items.length) return null;

  return (
    <section className="awards-coverflow-section">
      <div className="awards-coverflow__intro">
        <h2 className="awards-coverflow__title">
          {t("ourAwards.journeyTitle")}
          <span className="awards-coverflow__title-accent">
            {t("ourAwards.journeyTitleAccent")}
          </span>
        </h2>
        <p className="awards-coverflow__description">{t("ourAwards.journeyText")}</p>
      </div>

      <div className="awards-coverflow">
      <button
        type="button"
        aria-label={t("luxuryListingsPage.previous")}
        className="awards-coverflow__nav awards-coverflow__nav--prev awards-coverflow-prev"
      >
        <ChevronLeft size={22} strokeWidth={2} />
      </button>

      <div className="awards-coverflow__slider">
        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop={items.length > 2}
          loopAdditionalSlides={3}
          allowTouchMove
          autoplay={{
            enabled: true,
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
            waitForTransition: true,
          }}
          speed={4200}
          navigation={{
            prevEl: ".awards-coverflow-prev",
            nextEl: ".awards-coverflow-next",
          }}
          onAfterInit={(swiper) => {
            swiper.autoplay?.start();
          }}
          coverflowEffect={{
            rotate: 10,
            stretch: -48,
            depth: 180,
            modifier: 1.5,
            slideShadows: false,
          }}
          className="awards-coverflow__swiper"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="awards-coverflow__slide">
              <CoverFlowSlide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        type="button"
        aria-label={t("luxuryListingsPage.next")}
        className="awards-coverflow__nav awards-coverflow__nav--next awards-coverflow-next"
      >
        <ChevronRight size={22} strokeWidth={2} />
      </button>
    </div>
    </section>
  );
}
