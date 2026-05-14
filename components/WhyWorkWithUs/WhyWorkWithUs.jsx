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
    <section className="bg-white py-16 md:py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 ml-4 text-center"
        >
          <h2 className="text-gray-900 text-4xl font-serif font-semibold mb-2">
            Why Work With Us
          </h2>
          <p className="text-gray-400 text-lg">
            Institutional rigor with a partner-led approach to every mandate.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-y-0 items-center justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="mb-4 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-[#E31E24] bg-[#E31E24] text-white hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-widest md:tracking-[0.2em] text-gray-800 whitespace-nowrap">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;