"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const BeliefMissionVision = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="bg-stone-50 pt-12 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Corporate"
          accent="Philosophy"
          linesAlign="left"
          className="!text-left !mb-16"
        />

        {/* CONTENT GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Item Template */}
          {[
            {
              id: "01",
              title: "Our Belief",
              desc: "To ensure our clients receive top-tier professional advice and guidance, we prioritize transparency. We advocate for making investments accessible through cutting-edge technologies."
            },
            {
              id: "02",
              title: "Our Mission",
              desc: "Our clients are our core priority. We pledge constant communication, keeping you fully informed throughout the entire transaction process with absolute integrity."
            },
            {
              id: "03",
              title: "Our Vision",
              desc: "We aspire to be the leading global real estate brokerage, improving and elevating the lifestyles of our vast clientele through premium service standards."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants} 
              whileHover={{ y: -5 }}
              className="bg-white border border-white p-8 md:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col group"
            >
              <div className="flex flex-row items-baseline gap-4 md:gap-6 mb-5">
                <span className="text-[#E31E24] text-4xl md:text-5xl font-light leading-none shrink-0 tabular-nums">
                  {item.id}
                </span>
                <h3 className="text-[#002147] text-lg font-bold uppercase tracking-widest leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-light tracking-wide text-justify">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* DECORATIVE LINE */}
        <div className="mt-20 border-b border-slate-200/50 w-full"></div>
      </div>
    </section>
  );
};

export default BeliefMissionVision;