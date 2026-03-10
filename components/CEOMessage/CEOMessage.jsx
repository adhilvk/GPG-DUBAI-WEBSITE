"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const CEOMessage = () => {
  return (
    <section className="bg-white pt-24 lg:pt-40 pb-24 overflow-hidden relative">
      {/* Background Decorative Element - Subtly signals "Luxury" */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 lg:block hidden" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-0">

          {/* CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-20"
          >
            {/* Minimalist Logo Badge */}
            <div className="mb-8">
              <span className="text-[#E31E24] font-bold text-sm tracking-[0.3em] border-l-4 border-[#E31E24] pl-4 py-1 uppercase">
                GPG Global
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-10 leading-[1.1] tracking-tight font-serif">
              Message from <br /> 
              <span className="text-[#E31E24]">the CEO</span>
            </h2>

            <div className="relative group">
              {/* Top Quote - Perfectly aligned with text start */}
              <Quote className="text-[#E31E24] w-10 h-10 mb-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-lg text-slate-600 leading-relaxed space-y-6 border-l border-slate-100 pl-8">
                <p className="relative">
                  With over{" "}
                  <span className="font-bold text-slate-900 underline decoration-[#E31E24]/30 underline-offset-4">
                    17 years in structured finance
                  </span>
                  , Chirag Goyal has facilitated over
                  <span className="text-slate-900 font-bold"> AED 4 Billion</span> in transactions across Dubai and London.
                </p>

                <p className="font-light italic text-xl text-slate-500">
                  "Driven by integrity and deep market insight, we deliver
                  <span className="text-slate-900 font-medium not-italic"> bespoke real estate solutions </span> 
                  for global investors and clients."
                </p>
              </div>
              
              {/* Bottom Quote - Right aligned */}
              <div className="flex justify-end mt-4">
                 <Quote className="text-[#E31E24] w-10 h-10 opacity-20 rotate-180" />
              </div>
            </div>

            {/* Signature Area */}
            <div className="mt-12 pt-8 border-t border-slate-100">
              <p className="text-2xl font-bold text-slate-900 font-serif tracking-tight">Chirag Goyal</p>
              <p className="text-[#E31E24] font-bold text-[10px] uppercase tracking-[0.4em] mt-2 flex items-center gap-2">
                <span className="w-8 h-px bg-[#E31E24]"></span>
                Founder & CEO
              </p>
            </div>
          </motion.div>

          {/* IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-full flex items-center justify-center lg:justify-end">
              
              {/* Architectural Frame Details */}
              <div className="absolute top-10 right-10 w-full h-full border border-slate-200 -z-10 translate-x-4 translate-y-4 hidden lg:block" />
              
              <div className="relative group overflow-hidden shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3)] bg-slate-200">
                {/* Image Vertical Accent */}
                <div className="absolute left-0 bottom-0 w-1.5 h-32 bg-[#E31E24] z-20 shadow-[4px_0_10px_rgba(227,30,36,0.3)]" />
                
                <img
                  src="/images/chiragpic.jpeg"
                  alt="Chirag Goyal"
                  className="w-full h-137.5 object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
                />

                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0F172A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Stats Badge - Premium touch */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl hidden lg:block border-b-4 border-[#E31E24]">
                <p className="text-[#E31E24] font-bold text-2xl">17+</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold">Years Experience</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CEOMessage;