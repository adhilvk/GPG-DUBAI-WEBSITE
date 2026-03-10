"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, BedDouble, Bath, Square, ChevronRight, ChevronLeft } from "lucide-react";

const SignatureProperties = () => {
  const scrollRef = useRef(null);

  const properties = [
    { id: 1, price: "AED 24,000,000", title: "Full Canal Views | Private Pool", location: "One Canal, Al Wasl, Dubai", beds: 3, baths: 4, sqft: "5,070", img: "/images/prop1.jpg" },
    { id: 2, price: "AED 25,700,000", title: "Custom Built 4BR | Premium Finishes", location: "Forest Villas, Sobha Hartland", beds: 4, baths: 5, sqft: "5,029", img: "/images/prop2.jpg" },
    { id: 3, price: "AED 45,000,000", title: "Lagoon Villa | Basement Parking", location: "The Sanctuary, District 11", beds: 5, baths: 6, sqft: "6,200", img: "/images/prop3.jpg" },
    { id: 4, price: "AED 32,500,000", title: "Ultra Luxury Penthouse", location: "Palm Jumeirah, Dubai", beds: 4, baths: 5, sqft: "4,850", img: "/images/prop4.jpeg" },
    { id: 5, price: "AED 18,900,000", title: "Modern Waterfront Mansion", location: "Dubai Creek Harbour", beds: 6, baths: 7, sqft: "7,400", img: "/images/prop5.webp" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth / 1.5 
        : scrollLeft + clientWidth / 1.5;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden relative border-t border-red-100">
      {/* Background Subtle Watermark Text - Adjusted opacity for light background */}
      <div className="absolute top-10 left-0 text-[20vw] font-serif italic text-[#E31E24]/5 pointer-events-none select-none">
        Exclusive
      </div>

      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* LEFT SIDE: HEADER & CONTROLS */}
        <div className="lg:w-1/4 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-[#002147] text-6xl font-serif italic mb-2">Exclusive</h2>
            <p className="text-[#E31E24] font-bold tracking-[0.3em] uppercase text-xs">By GPG </p>
          </div>
          
          <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
            Our <span className="text-[#002147] font-medium">high-net-worth and private client division.</span> Exclusive properties starting from AED 20,000,000.
          </p>

          <div className="flex flex-col gap-8">
            <button className="group flex items-center justify-between bg-[#E31E24] hover:bg-[#002147] text-white px-8 py-4 rounded-sm transition-all duration-500 font-bold uppercase tracking-widest text-sm w-fit shadow-lg shadow-red-200">
              Explore Exclusive
              <ChevronRight className="ml-4 group-hover:translate-x-2 transition-transform" size={18} />
            </button>

            {/* ARROW BUTTONS - Darker borders for visibility */}
            <div className="flex gap-4">
              <button 
                onClick={() => scroll("left")}
                className="p-4 border border-[#E31E24]/20 text-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-all duration-300 rounded-sm bg-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="p-4 border border-[#E31E24]/20 text-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-all duration-300 rounded-sm bg-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: CARDS CONTAINER - Added 'no-scrollbar' utility */}
        <div 
          ref={scrollRef}
          className="lg:w-3/4 overflow-x-auto no-scrollbar flex gap-8 pb-10 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {properties.map((prop) => (
            <motion.div 
              key={prop.id}
              whileHover={{ y: -10 }}
              className="min-w-87.5 md:min-w-105 group"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-6 border border-red-100 shadow-xl bg-white">
                <img 
                  src={prop.img} 
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-400 hover:text-[#E31E24] transition-colors shadow-sm">
                    <Heart size={20} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-sm border border-red-50">
                   <p className="text-[#E31E24] text-[10px] font-bold tracking-widest uppercase italic">Prime</p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="space-y-3">
                <h3 className="text-[#002147] text-2xl font-bold tracking-tight">{prop.price}</h3>
                <h4 className="text-slate-800 text-lg font-medium leading-tight group-hover:text-[#E31E24] transition-colors line-clamp-1">
                  {prop.title}
                </h4>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm italic mb-4">
                  <MapPin size={14} className="text-[#E31E24]" />
                  {prop.location}
                </div>

                {/* ICONS BAR */}
                <div className="flex items-center gap-6 pt-4 border-t border-red-100 text-slate-600">
                  <div className="flex items-center gap-2">
                    <BedDouble size={18} className="text-slate-400" />
                    <span className="font-bold">{prop.beds}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={18} className="text-slate-400" />
                    <span className="font-bold">{prop.baths}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square size={16} className="text-slate-400" />
                    <span className="font-bold">{prop.sqft} <span className="text-[10px] font-light uppercase">Sqft</span></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SignatureProperties;