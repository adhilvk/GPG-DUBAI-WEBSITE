"use client";
import React from "react";
import { motion } from "framer-motion";

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
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-20">
          <div className="w-12 h-0.5 bg-[#E31E24] mb-6"></div>
          <h2 className="text-[#002147] text-sm font-bold uppercase tracking-[0.4em]">
            Corporate Philosophy
          </h2>
        </div>

        {/* CONTENT GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12"
        >
          {/* OUR BELIEF */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <span className="text-slate-300 text-5xl font-light mb-8">01</span>
            <h3 className="text-[#002147] text-2xl font-bold uppercase tracking-tight mb-6">
              Our Belief
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light border-l border-slate-100 pl-6">
              To ensure our clients receive top-tier professional advice and
              guidance, we prioritize transparency. We advocate for making 
              investments accessible through cutting-edge technologies.
            </p>
          </motion.div>

          {/* OUR MISSION */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <span className="text-slate-300 text-5xl font-light mb-8">02</span>
            <h3 className="text-[#002147] text-2xl font-bold uppercase tracking-tight mb-6">
              Our Mission
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light border-l border-slate-100 pl-6">
              Our clients are our core priority. We pledge constant 
              communication, keeping you fully informed throughout the 
              entire transaction process with absolute integrity.
            </p>
          </motion.div>

          {/* OUR VISION */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <span className="text-slate-300 text-5xl font-light mb-8">03</span>
            <h3 className="text-[#002147] text-2xl font-bold uppercase tracking-tight mb-6">
              Our Vision
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light border-l border-slate-100 pl-6">
              We aspire to be the leading global real estate brokerage, 
              improving and elevating the lifestyles of our vast clientele 
              through premium service standards.
            </p>
          </motion.div>
        </motion.div>

        {/* DECORATIVE LINE */}
        <div className="mt-24 border-b border-slate-100 w-full"></div>
      </div>
    </section>
  );
};

export default BeliefMissionVision;