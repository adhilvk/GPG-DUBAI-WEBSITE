"use client";
import React from 'react';
import Link from 'next/link';
import { Building2, BedDouble, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

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
    <section className="bg-white pt-8 pb-20 px-4 md:px-12">
      <div className="max-w-360 mx-auto relative group">
        
        {/* SECTION HEADER */}
        <div className="mb-10 ml-4 text-center">
          <h2 className="text-gray-900 text-4xl font-serif font-semibold mb-2">Exclusive Off Projects</h2>
          <p className="text-gray-400 text-lg">Dubai's premier institutional-grade opportunities.</p>
        </div>

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
                <div className="relative h-115 rounded-[2.5rem] overflow-hidden group/card cursor-pointer shadow-lg border border-slate-100">
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="space-y-3 mb-8 opacity-90 text-slate-200">
                      <div className="flex items-center gap-3"><Building2 size={18} /><span className="text-sm">{project.type}</span></div>
                      <div className="flex items-center gap-3"><BedDouble size={18} /><span className="text-sm">{project.beds} Beds</span></div>
                      <div className="text-xl font-bold text-white">AED {project.price}</div>
                      <div className="flex items-center gap-3 opacity-70"><MapPin size={18} /><span className="text-sm truncate">{project.location}</span></div>
                    </div>
                    <button className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-[#C5A059] hover:text-white transition-all shadow-md">
                      Explore Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* OVERLAY NAVIGATION ARROWS (Placed exactly where your red circles are) */}
          <button className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl text-black hover:bg-black hover:text-white transition-all border border-slate-100 cursor-pointer">
            <ChevronLeft size={28} />
          </button>
          
          <button className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-50 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl text-black hover:bg-black hover:text-white transition-all border border-slate-100 cursor-pointer">
            <ChevronRight size={28} />
          </button>
        </div>

        {/* EXCLUSIVE LISTING — below main slider content */}
        <div className="mt-14 mb-2 px-2 md:px-0">
          <div className="mb-10 ml-4 text-center">
            <h2 className="text-gray-900 text-4xl font-serif font-semibold mb-2">Exclusive Listing</h2>
            <p className="text-gray-400 text-lg">Hand-picked properties across prime Dubai communities.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 md:overflow-visible snap-x snap-mandatory md:snap-none [-webkit-overflow-scrolling:touch]">
            {exclusiveListings.map((item, idx) => (
              <article
                key={idx}
                className="min-w-[240px] sm:min-w-[260px] md:min-w-0 md:flex-1 shrink-0 snap-start rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-4 text-left">
                  <p className="text-gray-900 font-bold text-lg">AED {item.price}</p>
                  <p className="text-gray-900 font-semibold text-sm mt-1 truncate">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5 flex items-center gap-1 truncate">
                    <MapPin size={12} className="shrink-0" />
                    {item.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 flex justify-center w-full">
            <Link
              href="/apartments"
              className="inline-flex items-center justify-center w-full max-w-md py-3 px-8 rounded-2xl border-2 border-gray-900 text-gray-900 font-semibold text-sm uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors"
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