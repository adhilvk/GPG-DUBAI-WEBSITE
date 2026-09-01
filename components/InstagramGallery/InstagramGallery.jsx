"use client";

import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";
import "@/components/ExclusiveProjects/ExclusiveProjects.css";

const ReelCard = ({ reel, onSelect }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="group relative h-[340px] w-full cursor-pointer overflow-hidden rounded-xl border border-red-50 shadow-sm transition-shadow hover:shadow-[0_12px_32px_rgba(227,30,36,0.12)] sm:h-[380px] md:h-[420px]"
    onClick={() => onSelect(reel)}
  >
    <img src={reel.thumbnail} alt="GPG Instagram video" className="h-full w-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-center bg-[#E31E24]/0 opacity-0 transition-all group-hover:bg-[#E31E24]/30 group-hover:opacity-100">
      <Play className="h-10 w-10 fill-white text-white md:h-12 md:w-12" />
    </div>
  </motion.div>
);

const InstagramGallery = () => {
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeSnap, setActiveSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(1);
  const swiperRef = useRef(null);

  const updateNavState = useCallback((swiper) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setActiveSnap(swiper.snapIndex ?? swiper.activeIndex);
    setSnapCount(Math.max(1, swiper.snapGrid?.length ?? 1));
  }, []);

  const captions = t("instagram.captions");
  const reels = [
    {
      id: 1,
      thumbnail: "/reels/thumb1.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1772864903/video1_u6mv9a.mp4",
      caption: captions[0],
    },
    {
      id: 2,
      thumbnail: "/reels/thumb2.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1772864992/video2_btc1dg.mp4",
      caption: captions[1],
    },
    {
      id: 3,
      thumbnail: "/reels/thumb3.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1772865013/video3_tru9f9.mp4",
      caption: captions[2],
    },
    {
      id: 4,
      thumbnail: "/reels/thumb4.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1772865031/video4_jkda8j.mp4",
      caption: captions[3],
    },
    {
      id: 5,
      thumbnail:
        "https://res.cloudinary.com/dsldkspov/video/upload/so_0,c_fill,w_720,h_1280,q_auto,f_auto/v1787389949/CG_UK_v2_3_lwzglw.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1787389949/CG_UK_v2_3_lwzglw.mp4",
      caption: captions[4],
    },
    {
      id: 6,
      thumbnail:
        "https://res.cloudinary.com/dsldkspov/video/upload/so_0,c_fill,w_720,h_1280,q_auto,f_auto/v1787391553/Success_Stories_for_our_clients_2025_LuxuryRealEstate_luxurious_dubaï_DubaiRealEstate_distri_gzqfmj.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1787391553/Success_Stories_for_our_clients_2025_LuxuryRealEstate_luxurious_dubaï_DubaiRealEstate_distri_gzqfmj.mp4",
      caption: captions[5],
    },
    {
      id: 7,
      thumbnail:
        "https://res.cloudinary.com/dsldkspov/video/upload/so_0,c_fill,w_720,h_1280,q_auto,f_auto/v1787391931/PART_01Multiplier_of_Real_EstateChirag_Goyal_Founder_CEO_GPG_dubai_realestate_dxb_trendin_onup1n.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1787391931/PART_01Multiplier_of_Real_EstateChirag_Goyal_Founder_CEO_GPG_dubai_realestate_dxb_trendin_onup1n.mp4",
      caption: captions[6],
    },
    {
      id: 8,
      thumbnail:
        "https://res.cloudinary.com/dsldkspov/video/upload/so_0,c_fill,w_720,h_1280,q_auto,f_auto/v1787399902/An_inspiring_evening_at_the_launch_event_of_amisdevelopment_by_jacobandco_where_luxury_artis_n6orw2.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1787399902/An_inspiring_evening_at_the_launch_event_of_amisdevelopment_by_jacobandco_where_luxury_artis_n6orw2.mp4",
      caption: captions[7],
    },
  ];

  const handleFollow = () => {
    window.open("https://www.instagram.com/xgpg.luxury/", "_blank");
  };

  return (
    <section className="relative bg-white px-6 py-12 md:py-14">
      <div className="absolute left-1/2 top-0 z-10 h-px w-full max-w-2xl -translate-x-1/2 bg-red-100" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-red-50 pb-5 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow={t("instagram.eyebrow")}
            title={t("instagram.title")}
            accent={t("instagram.accent")}
            linesAlign="left"
            className="!mb-0 text-left [&_h2]:text-left"
          />
          <button
            type="button"
            onClick={handleFollow}
            className="shrink-0 rounded-lg bg-[#E31E24] px-10 py-3 text-sm font-bold tracking-wide text-white shadow-sm transition-colors hover:bg-[#c81b20]"
          >
            {t("instagram.follow")}
          </button>
        </div>

        <div className="relative px-10 md:px-12">
          <Swiper
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={1.85}
            navigation={{
              prevEl: ".reels-prev",
              nextEl: ".reels-next",
            }}
            onSwiper={updateNavState}
            onSlideChange={updateNavState}
            onResize={updateNavState}
            breakpoints={{
              640: {
                spaceBetween: 14,
                slidesPerView: 2.4,
              },
              768: {
                spaceBetween: 16,
                slidesPerView: 3,
              },
              1024: {
                spaceBetween: 16,
                slidesPerView: 4,
              },
            }}
          >
            {reels.map((reel) => (
              <SwiperSlide key={reel.id}>
                <ReelCard reel={reel} onSelect={setSelectedVideo} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Previous reel"
            disabled={isBeginning}
            className="reels-prev trending-slider__arrow absolute left-0 top-1/2 z-10 -translate-y-1/2"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>

          <button
            type="button"
            aria-label="Next reel"
            disabled={isEnd}
            className="reels-next trending-slider__arrow absolute right-0 top-1/2 z-10 -translate-y-1/2"
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>

          {snapCount > 1 && (
            <div
              className="trending-slider__dots"
              role="tablist"
              aria-label="Reels pagination"
            >
              {Array.from({ length: snapCount }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === activeSnap}
                  aria-label={`Go to reel page ${index + 1}`}
                  className={`trending-slider__dot${index === activeSnap ? " trending-slider__dot--active" : ""}`}
                  onClick={() => swiperRef.current?.slideTo(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
          >
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute right-6 top-6 text-white hover:text-red-200"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="flex h-full max-h-[80vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white md:flex-row"
            >
              <div className="relative flex flex-1 items-center justify-center bg-black">
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex w-full flex-col justify-between bg-white p-8 text-black md:w-100">
                <div>
                  <div className="mb-6 flex items-center space-x-3">
                    <img
                      src="/images/instadp.jpg"
                      alt="GPG Global Real Estate Instagram"
                      className="h-10 w-10 rounded-full border border-red-100 object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold">xgpg.luxury</p>
                      <p className="text-xs text-slate-500">Dubai, UAE</p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-slate-700">{selectedVideo.caption}</p>
                  <p className="mt-4 text-sm font-medium text-[#E31E24]">
                    #gpg #dubairealestate #investing
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleFollow}
                  className="mt-6 flex w-full items-center justify-center space-x-2 rounded-lg bg-[#E31E24] py-4 font-bold text-white transition-colors hover:bg-[#c81b20]"
                >
                  <Instagram size={20} />
                  <span>{t("instagram.viewOnInstagram")}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InstagramGallery;
