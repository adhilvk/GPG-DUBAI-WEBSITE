"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const TeamHero = () => {
  return (
    <section className="relative flex h-[60vh] w-full flex-col items-center justify-end overflow-hidden bg-black pb-14 md:h-[80vh] md:pb-16">
      
      {/* 1. BACKGROUND IMAGE: Ultra-wide team shot */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/ourteam.jpeg" 
          alt="GPG Real Estate Team"
          className="h-full w-full object-cover object-bottom opacity-80"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/20" />
      </div>

      {/* 2. CONTENT OVERLAY */}
      <div className="relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[#E31E24]" aria-hidden />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
              The Force Behind the Vision
            </span>
            <div className="h-px w-10 bg-[#E31E24]" aria-hidden />
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-7xl">
            Meet Our <span className="text-[#E31E24]">Experts</span>
          </h1>
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