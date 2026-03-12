"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BarChart3, GraduationCap, Award } from 'lucide-react';

const WhyWorkWithUs = () => {
  const features = [
    {
      icon: <Compass strokeWidth={1.5} className="w-6 h-6" />,
      title: "Creatively Led",
    },
    {
      icon: <BarChart3 strokeWidth={1.5} className="w-6 h-6" />,
      title: "Results Driven",
    },
    {
      icon: <GraduationCap strokeWidth={1.5} className="w-6 h-6" />,
      title: "Market Experts",
    },
    {
      icon: <Award strokeWidth={1.5} className="w-6 h-6" />,
      title: "Trusted Reputation",
    },
  ];

  return (
    <div className="relative">
      <section 
        className="relative h-[70vh] md:h-[60vh] w-full bg-fixed bg-center bg-cover flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: `url('/images/bgpic.jpg')`, 
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontFamily: "'serif', 'Times New Roman', serif" }}
            className="text-3xl md:text-5xl font-bold mb-16 md:mb-20 tracking-tight uppercase"
          >
            Why Work With Us
          </motion.h2>

          {/* grid-cols-2: 2 items side-by-side on mobile
            md:grid-cols-4: All 4 in a row on desktop
            gap-y-12: Adds breathing room between the two rows on mobile
          */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-y-0 items-center justify-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="mb-4 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-[#E31E24] bg-[#E31E24] hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest md:tracking-[0.2em] text-white/90 whitespace-nowrap">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWorkWithUs;