"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const TeamHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden flex flex-col justify-end">
      
      {/* 1. BACKGROUND IMAGE: Ultra-wide team shot */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/ourteam.jpeg" 
          alt="GPG Real Estate Team"
          className="w-full h-full object-cover object-bottom opacity-80"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* 2. CONTENT OVERLAY */}
      <div className="absolute bottom-10 left-10 z-10 max-w-xl px-6">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="text-left"
  >
    {/* Institutional Tag */}
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-px bg-[#E31E24]" />
      <span className="text-[#E31E24] text-[10px] font-bold tracking-[0.25em] uppercase">
        The Force Behind the Vision
      </span>
    </div>

    <h1
      style={{ fontFamily: "'serif', 'Times New Roman', serif" }}
      className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
    >
      MEET OUR <span className="text-[#E31E24]">EXPERTS</span>
    </h1>

    <p className="text-gray-300 text-xs md:text-sm max-w-md leading-relaxed">
      A collective of highly qualified advisors consistently analyzing market changes to
      provide top-tier professional guidance UAE's luxury landscape.
    </p>
  </motion.div>
</div>

      {/* 3. SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <ChevronDown size={30} strokeWidth={1} />
      </motion.div>

    </section>
  );
};

export default TeamHero;