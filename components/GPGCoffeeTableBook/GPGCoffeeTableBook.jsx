"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const GPGCoffeeTableBook = () => {
  return (
    <section className="bg-slate-50 py-16 px-6 overflow-hidden">
      {/* Reduced max-width from 7xl to 5xl for a smaller footprint */}
      <div className="max-w-5xl mx-auto">
        {/* Reduced padding from p-20 to p-10/12 and rounded corners for a tighter look */}
        <div className="bg-white rounded-4xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-10 relative">
          
          {/* Left Side: Content */}
          <div className="flex-1 space-y-6 z-10">
            <div className="space-y-3">
              <h2 
                style={{ fontFamily: "'serif', 'Times New Roman', serif" }} 
                className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tight"
              >
                GPG's Elite <br />
                <span className="text-[#E31E24]">Luxury Collection</span> <br />
                Coffee Table Book
              </h2>
              <div className="w-16 h-1 bg-[#E31E24] rounded-full" />
            </div>

            <p className="text-base text-slate-600 leading-relaxed max-w-md">
              Experience the definitive showcase of luxury real estate. 
              Discover an exclusive collection of the finest properties curated by 
              GPG, leveraging over 17 years of expertise.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#E31E24] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-lg font-bold uppercase text-xs tracking-widest flex items-center gap-2 transition-colors shadow-md shadow-red-200"
            >
              <Download size={18} />
              Download Digital Edition
            </motion.button>

            {/* Subtle Milestone Proof */}
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Showcasing over AED 4 Billion in Transactions
            </p>
          </div>

          {/* Right Side: Visual Book Mockup */}
          <div className="flex-1 relative perspective-1000 w-full max-w-[320px]">
            <motion.div
              initial={{ rotateY: 0, x: 30, opacity: 0 }}
              whileInView={{ rotateY: -12, x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-20"
            >
              {/* Main Book Mockup - Adjusted sizing to fit smaller container */}
              <div className="relative w-full aspect-4/3 bg-white shadow-xl rounded-sm overflow-hidden border border-slate-200 transform-gpu rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="/images/topbrand.jpg" 
                  alt="GPG Coffee Table Book Cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-black/10 via-transparent to-white/20 pointer-events-none" />
              </div>

              {/* Decorative Background Element - Scaled down */}
              <div className="absolute -top-5 -right-5 w-40 h-40 bg-red-50 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default GPGCoffeeTableBook;