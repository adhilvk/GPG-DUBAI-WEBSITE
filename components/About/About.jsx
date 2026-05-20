"use client";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-white py-24 px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          {/* Left Column: Branding & Main Headline */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#E31E24]"></div>
              <span className="text-[#E31E24] font-bold tracking-[0.2em] text-sm uppercase">
                GPG
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Creating <span className="text-[#E31E24]">Wealth</span> for <br />
              <span className="text-[#E31E24]">Generations</span>.
            </h2>
            
            <div className="w-24 h-1 bg-[#E31E24] mb-8"></div>
          </motion.div>

          {/* Right Column: Detailed Description */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-8">
              <p className="text-2xl font-medium text-slate-800 leading-relaxed">
                Step into luxury living with GPG, where <span className="text-[#E31E24]">dreams find their perfect address</span>. 
              </p>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Elevating Dubai's real estate standards, we specialize in buying and selling premium residential and commercial properties.
                </p>
                
                <p className="border-l-4 border-[#E31E24] pl-6 italic">
                  At the forefront of the luxury estate sector in Dubai since 2021, we specialize in selling iconic residential and commercial properties that offer unparalleled and hidden opportunities for our exclusive clients.
                </p>
              </div>

              {/* Stats or Key Points */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <p className="text-3xl font-bold text-[#E31E24]">2021</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">Established</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#E31E24]">Premium</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">Property Focus</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
