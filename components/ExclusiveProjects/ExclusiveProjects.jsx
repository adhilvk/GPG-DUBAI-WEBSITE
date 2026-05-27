"use client";
import React from "react";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ArticleDownload from "@/components/ArticleDownload/ArticleDownload";
import { useLanguage } from "@/context/LanguageContext";

const ProjectCard = ({ project, t, showExplore = true }) => (
  <article className="group/card h-full overflow-hidden rounded-2xl border border-red-50 bg-white shadow-sm transition-shadow hover:border-red-100 hover:shadow-[0_8px_24px_rgba(227,30,36,0.1)]">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
      />
    </div>
    <div className="p-4 text-left">
      <p className="text-lg font-bold text-[#E31E24]">AED {project.price}</p>
      <p className="mt-1 truncate text-sm font-semibold text-slate-900">{project.title}</p>
      {project.type && project.beds && (
        <p className="mt-1 text-xs text-slate-500">
          {project.type} · {project.beds} {t("exclusiveProjects.beds")}
        </p>
      )}
      <p className="mt-1 flex items-center gap-1 truncate text-xs text-gray-500">
        <MapPin size={12} className="shrink-0" />
        {project.location}
      </p>
      {showExplore && (
        <button
          type="button"
          className="mt-4 w-full rounded-lg border border-red-100 py-2.5 text-xs font-bold uppercase tracking-wide text-[#E31E24] transition-colors hover:bg-[#E31E24] hover:text-white"
        >
          {t("exclusiveProjects.exploreDetails")}
        </button>
      )}
    </div>
  </article>
);

const ExclusiveProjectsSlider = () => {
  const { t } = useLanguage();
  const projects = [
    { title: "Emaar South", type: "Villa", beds: "3, 4", price: "2.1M", location: "Emaar South", image: "/images/heightsbyemaar.webp" },
    { title: "The Oasis", type: "Mansion", beds: "5, 6", price: "12M", location: "The Oasis by Emaar", image: "/images/palmcentral.jpg" },
    { title: "Sobha Hartland", type: "Apartment", beds: "1, 2, 3", price: "1.8M", location: "MBR City", image: "/images/grandpolo.webp" },
    { title: "Dubai Hills", type: "Villa", beds: "4, 5", price: "4.5M", location: "Dubai Hills Estate", image: "/images/Riverside.jpg" },
    { title: "The Heights", type: "Villa", beds: "3, 4, 5", price: "TBA", location: "The Heights", image: "/images/heightsbyemaar.webp" },
    { title: "Palm Jebel Ali", type: "Apartment", beds: "1-5", price: "2.5M", location: "Palm Jebel Ali", image: "/images/palmcentral.jpg" },
    { title: "Grand Polo", type: "Villa", beds: "3, 4, 5", price: "5.7M", location: "Grand Polo Club", image: "/images/grandpolo.webp" },
    { title: "Damac Riverside", type: "Townhouse", beds: "1-5", price: "1.5M", location: "Damac Riverside", image: "/images/Riverside.jpg" },
  ];

  const exclusiveListings = [
    { title: "Hills Park", location: "Dubai Hills Estate", price: "1.6M", image: "/images/heightsbyemaar.webp" },
    { title: "Marina Views", location: "Dubai Marina", price: "3.95M", image: "/images/palmcentral.jpg" },
    { title: "South Bay", location: "Dubai South", price: "16M", image: "/images/grandpolo.webp" },
    { title: "Sobha Hartland II", location: "MBR City, Dubai", price: "1.85M", image: "/images/Riverside.jpg" },
  ];

  return (
    <section className="bg-white px-4 pb-16 pt-12 md:px-12 md:pb-20 md:pt-16">
      <div className="max-w-360 mx-auto relative group">
        <SectionHeader
          title={t("exclusiveProjects.title")}
          accent={t("exclusiveProjects.accent")}
        />

        <div className="relative px-2">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <ProjectCard project={project} t={t} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Previous slide"
            className="custom-prev absolute left-0 top-[calc(50%-4rem)] z-50 -translate-y-1/2 cursor-pointer rounded-full bg-white/95 p-1 text-[#E31E24] shadow-md transition-transform hover:scale-110 md:left-1"
          >
            <ChevronLeft size={32} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            className="custom-next absolute right-0 top-[calc(50%-4rem)] z-50 -translate-y-1/2 cursor-pointer rounded-full bg-white/95 p-1 text-[#E31E24] shadow-md transition-transform hover:scale-110 md:right-1"
          >
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
        </div>

        <div className="mt-14 border-t border-slate-100 px-2 pt-12 md:mt-16 md:px-0 md:pt-14">
          <SectionHeader
            title={t("exclusiveProjects.listingTitle")}
            accent={t("exclusiveProjects.listingAccent")}
          />
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 md:overflow-visible snap-x snap-mandatory md:snap-none [-webkit-overflow-scrolling:touch]">
            {exclusiveListings.map((item, idx) => (
              <div key={idx} className="min-w-[240px] shrink-0 snap-start sm:min-w-[260px] md:min-w-0 md:flex-1">
                <ProjectCard project={item} t={t} showExplore={false} />
              </div>
            ))}
          </div>

          <ArticleDownload />
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProjectsSlider;
