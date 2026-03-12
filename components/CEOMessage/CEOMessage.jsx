"use client";
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const CEOMessage = () => {
  return (
    <section className="bg-stone-200 pt-24 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Column — Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-[#E31E24]"></div>
              <span className="text-[#E31E24] font-bold tracking-[0.4em] text-[10px] uppercase">CEO Message</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-10 leading-tight tracking-tight">
              Leading with <span className="text-[#E31E24] font-medium">Integrity</span> and <br /> 
              Financial <span className="text-[#E31E24] font-medium">Excellence</span>.
            </h2>

            <div className="space-y-8 text-slate-600 leading-relaxed">
              <div className="relative">
                <Quote className="absolute -top-6 -left-2 text-slate-200 w-12 h-12 -z-10 rotate-180 opacity-50" />
                <p className="text-xl md:text-2xl font-light text-slate-800 leading-snug">
                  "At GPG, we believe real estate is more than a transaction; it is a <span className="text-[#E31E24] italic">pathway to building generational wealth</span>."
                </p>
              </div>

              <div className="space-y-5 text-sm md:text-base font-light tracking-wide">
                <p>
                  Our vision has always been to create long-term value for our clients while contributing to the dynamic growth of Dubai’s real estate market. We are committed to identifying exceptional opportunities and delivering them with transparency, expertise, and integrity.
                </p>
                <p>
                  As we continue to expand our global reach, our focus remains on building lasting relationships with investors and homeowners alike. With innovation and an unwavering dedication to excellence, we strive to set new benchmarks in market leadership.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-lg font-bold text-slate-900 tracking-tight">Chirag Goyal</p>
              <p className="text-[#E31E24] text-xs font-bold uppercase tracking-[0.2em] mt-1">Founder & CEO </p>
            </div>
          </motion.div>

          {/* Image Column — Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Subtle accent background instead of heavy frames */}
              <div className="absolute inset-0 bg-slate-200 translate-x-4 translate-y-4 rounded-sm -z-10"></div>
              
              <div className="relative z-10 overflow-hidden shadow-2xl   transition-all duration-700">
                <img 
                  src="/images/chiragpic.jpeg" 
                  alt="Chirag Goyal - CEO" 
                  className="w-full object-cover aspect-4/5"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CEOMessage;