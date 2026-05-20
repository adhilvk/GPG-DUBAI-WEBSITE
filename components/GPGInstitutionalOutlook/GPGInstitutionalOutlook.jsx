"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const GPGInstitutionalOutlook = () => {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* TOP SECTION: Professional Invitation to Representation */}
        <div className="mb-16 text-center">
          
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-2xl md:text-3xl font-light text-slate-900 tracking-tight"
          >
            We would be honored to act as your <span className="italic font-normal">Dedicated Representative</span>.
          </motion.h3>
          
        </div>

        {/* MAIN CONTAINER: Company Brochure */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-14 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
          
          {/* Left Side: Content */}
          <div className="flex-1 space-y-8 z-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight tracking-tight">
                GPG <br />
                <span className="font-semibold text-[#E31E24]">Corporate Brochure</span>
              </h2>
              <div className="w-10 h-px bg-slate-300" />
            </div>

            <p className="text-[13px] text-slate-500 leading-relaxed max-w-sm font-light tracking-wide">
              Explore our comprehensive portfolio of brokerage services. This document 
              outlines our specialized approach to asset acquisition, market 
              intelligence, and the high-yield opportunities we secure for our 
              private clients across Dubai's most prestigious districts.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-slate-900 text-white px-10 py-4 rounded-sm font-bold uppercase text-[9px] tracking-[0.3em] flex items-center gap-3 transition-all duration-300 shadow-2xl shadow-slate-300"
              >
                <FileDown size={14} />
                Download Company Brochure
              </motion.button>
            </div>

            <div className="pt-4 border-t border-slate-200 w-max">
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.4em]">
                Verified Transactions • Excellence in Brokerage
              </p>
            </div>
          </div>

          {/* Right Side: Visual Mockup */}
          <div className="flex-1 relative perspective-1000 w-full max-w-70">
            <motion.div
              initial={{ rotateY: 0, x: 20, opacity: 0 }}
              whileInView={{ rotateY: -20, x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-20"
            >
              <div className="relative w-full aspect-[1/1.4] bg-white shadow-[25px_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-sm overflow-hidden border border-slate-200">
                <img 
                  src="/images/topbrand.jpg" 
                  alt="GPG Corporate Brochure"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 to-transparent" />
              </div>
            </motion.div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-200/50 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1200px;
        }
      `}</style>
    </section>
  );
};

export default GPGInstitutionalOutlook;