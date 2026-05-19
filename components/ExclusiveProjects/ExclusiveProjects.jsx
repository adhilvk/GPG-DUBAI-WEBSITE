"use client";
import React from 'react';
import Link from 'next/link';
import { Building2, BedDouble, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const ExclusiveProjectsSlider = () => {
  const projects = [
    { title: "Emaar South", type: "Villa", beds: "3, 4", price: "2.1M", location: "Emaar South", image: "/images/heightsbyemaar.webp" },
    { title: "The Oasis", type: "Mansion", beds: "5, 6", price: "12M", location: "The Oasis by Emaar", image: "/images/palmcentral.jpg" },
    { title: "Sobha Hartland", type: "Apartment", beds: "1, 2, 3", price: "1.8M", location: "MBR City", image: "/images/grandpolo.webp" },
    { title: "Dubai Hills", type: "Villa", beds: "4, 5", price: "4.5M", location: "Dubai Hills Estate", image: "/images/Riverside.jpg" },
    // Repeat or add more to reach 8 containers
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
    <section className="bg-white px-4 pb-10 pt-6 md:px-12 md:pb-12">
      <div className="max-w-360 mx-auto relative group">
        
        {/* SECTION HEADER */}
        <SectionHeader
          eyebrow="Off-Plan Portfolio"
          title="Exclusive"
          accent="Projects"
          subtitle="Dubai's premier institutional-grade opportunities."
        />

        {/* SWIPER CONTAINER */}
        <div className="relative px-2">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="group/card relative h-115 cursor-pointer overflow-hidden rounded-xl border border-red-100/80 shadow-[0_8px_30px_rgba(227,30,36,0.08)] transition-shadow hover:shadow-[0_12px_40px_rgba(227,30,36,0.14)] md:rounded-2xl">
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="space-y-3 mb-8 opacity-90 text-slate-200">
                      <div className="flex items-center gap-3"><Building2 size={18} /><span className="text-sm">{project.type}</span></div>
                      <div className="flex items-center gap-3"><BedDouble size={18} /><span className="text-sm">{project.beds} Beds</span></div>
                      <div className="text-xl font-bold text-[#E31E24]">AED {project.price}</div>
                      <div className="flex items-center gap-3 opacity-70"><MapPin size={18} /><span className="text-sm truncate">{project.location}</span></div>
                    </div>
                    <button className="w-full rounded-lg bg-white py-4 font-bold text-slate-900 shadow-md transition-all hover:bg-[#E31E24] hover:text-white">
                      Explore Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* OVERLAY NAVIGATION ARROWS (Placed exactly where your red circles are) */}
          <button
            type="button"
            aria-label="Previous slide"
            className="custom-prev absolute left-0 top-1/2 z-50 -translate-y-1/2 cursor-pointer p-1 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 md:left-1"
          >
            <ChevronLeft size={36} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            className="custom-next absolute right-0 top-1/2 z-50 -translate-y-1/2 cursor-pointer p-1 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 md:right-1"
          >
            <ChevronRight size={36} strokeWidth={2.5} />
          </button>
        </div>

        {/* EXCLUSIVE LISTING — below main slider content */}
        <div className="mt-8 px-2 md:mt-10 md:px-0">
          <SectionHeader
            eyebrow="Curated Stock"
            title="Exclusive"
            accent="Listing"
            subtitle="Hand-picked properties across prime Dubai communities."
          />
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 md:overflow-visible snap-x snap-mandatory md:snap-none [-webkit-overflow-scrolling:touch]">
            {exclusiveListings.map((item, idx) => (
              <article
                key={idx}
                className="min-w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl border border-red-50 bg-white shadow-sm transition-shadow hover:border-red-100 hover:shadow-[0_8px_24px_rgba(227,30,36,0.1)] sm:min-w-[260px] md:min-w-0 md:flex-1"
              >
                <div className="relative aspect-[4/3]">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-4 text-left">
                  <p className="text-lg font-bold text-[#E31E24]">AED {item.price}</p>
                  <p className="mt-1 truncate text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5 flex items-center gap-1 truncate">
                    <MapPin size={12} className="shrink-0" />
                    {item.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-4 flex w-full justify-center">
            <Link
              href="/apartments"
              className="inline-flex items-center justify-center rounded-lg bg-[#E31E24] px-10 py-3 text-sm font-bold tracking-wide text-white shadow-sm transition-colors hover:bg-[#c81b20]"
            >
              Show more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProjectsSlider;