"use client";
import { motion } from 'framer-motion';

const AboutUsHero = () => {
  return (
    <section className="relative h-[70vh] min-h-125 w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/ourteam.jpeg" 
          alt="GPG Team" 
          className="w-full h-full object-cover"
        />
        {/* Adjusted gradient to ensure the single line of text is readable */}
        <div className="absolute inset-0 bg-linear-to-r  to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl"> {/* Increased max-width to allow one-line heading */}
          
          {/* Minimalist Label */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[#E31E24] font-semibold tracking-[0.5em] text-[9px] uppercase">
              Established 2009
            </span>
          </motion.div>

          {/* Main Heading - Single Line */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-5 tracking-tight whitespace-nowrap"
          >
            Redefining the <span className="italic font-extralight text-slate-200 px-1">Standard</span> of Excellence.
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[12px] md:text-sm text-slate-300 leading-relaxed mb-8 max-w-md font-light tracking-wide"
          >
            With AED 4 Billion in transactions, we provide bespoke advisory 
            for the world's most discerning real estate investors.
          </motion.p>

          {/* Meet The Team Link */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
           
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator (Up and Down) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[8px] uppercase tracking-[0.6em] text-white/30 mb-2">Discover</span>
        
        {/* The Moving Line */}
        <div className="relative w-px h-12 bg-white/10 overflow-hidden">
          <motion.div 
            animate={{ 
              y: [-48, 48] // Moves the line from top to bottom inside the track
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
            className="w-full h-1/2 bg-linear-to-b from-transparent via-[#f0dcdc] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsHero;