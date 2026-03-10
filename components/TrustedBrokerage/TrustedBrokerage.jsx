"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const TrustedBrokerage = () => {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <ShieldCheck size={16} className="text-[#E31E24]" />
            <span className="text-slate-400 font-bold tracking-[0.3em] text-[10px] uppercase">
              Institutional Standard
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-light text-[#002147] leading-tight mb-6 tracking-tight">
            Trust that sets the <span className="font-bold text-[#E31E24]">benchmark.</span>
          </h2>

          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            GPG recognized as the{" "}
            <span className="text-[#002147] font-bold">
              Most Trusted Brokerage 2025
            </span>{" "}
            by <span className="italic font-serif text-slate-700">Property Time Magazine.</span>
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* IMAGE CONTAINER - Sized Perfectly */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // Fixed the height issue: Aspect-square or aspect-video keeps it balanced
            className="w-full lg:w-5/12 aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border-12 border-slate-50 group"
          >
            <img
              src="/images/trustpic.jpeg"
              alt="Most Trusted Brokerages 2025"
              // object-cover ensures the image fills the space without distortion
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </motion.div>

          {/* STATS - Clean & Minimal */}
          <div className="w-full lg:w-7/12 space-y-12">
  {[
    { label: "Total Sales", value: "AED 2.1B+", desc: "Our rapid 4-year growth milestone exemplifies unparalleled success." },
    { label: "Client Retention", value: "100%", desc: "Our record-breaking client satisfaction figures reflect our commitment." },
    { label: "Established Excellence", value: "4 YRS", desc: "A leader in the Dubai property marketplace consistently exceeding standards." }
  ].map((stat, index) => (
    <div key={index} className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 group">
      
      {/* LEFT: NUMBER - Fixed width ensures the vertical line on the right never moves */}
      <div className="w-full sm:w-45 shrink-0">
        <h4 className={`text-4xl md:text-5xl font-bold tracking-tighter leading-none ${index === 2 ? 'text-[#002147]' : 'text-[#E31E24]'}`}>
          {stat.value}
        </h4>
      </div>

      {/* RIGHT: CONTENT - Perfectly aligned baseline */}
      <div className="relative border-l border-slate-200 pl-8 pb-2 group-hover:border-[#E31E24] transition-colors duration-500">
        {/* The -mt-1 or -mt-2 helps the small caps label align with the top of the big numbers */}
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-3 leading-none -mt-1">
          {stat.label}
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-sm font-medium">
          {stat.desc}
        </p>
      </div>
      
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrokerage;