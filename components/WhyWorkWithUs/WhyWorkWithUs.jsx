"use client";
import { motion } from "framer-motion";
import { Compass, BarChart3, GraduationCap, Award } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const WhyWorkWithUs = () => {
  const features = [
    { icon: <Compass strokeWidth={1.5} className="h-6 w-6" />, title: "Creatively Led" },
    { icon: <BarChart3 strokeWidth={1.5} className="h-6 w-6" />, title: "Results Driven" },
    { icon: <GraduationCap strokeWidth={1.5} className="h-6 w-6" />, title: "Market Experts" },
    { icon: <Award strokeWidth={1.5} className="h-6 w-6" />, title: "Trusted Reputation" },
  ];

  return (
    <section className="bg-white px-4 py-10 md:px-12 md:py-14">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Our Difference"
          title="Why Work"
          accent="With Us"
          subtitle="Institutional rigor with a partner-led approach to every mandate."
        />

        <div className="grid grid-cols-2 items-center justify-center gap-x-4 gap-y-12 md:grid-cols-4 md:gap-y-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#E31E24] bg-[#E31E24] text-white shadow-[0_4px_20px_rgba(227,30,36,0.25)] transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="whitespace-nowrap text-[11px] font-bold uppercase tracking-widest text-slate-800 sm:text-xs md:text-sm md:tracking-[0.2em]">
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
