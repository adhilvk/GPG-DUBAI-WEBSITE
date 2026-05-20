"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BuyRentCTA = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Planning to <span className="text-[#E31E24]">Buy</span> or <br />
              <span className="text-[#E31E24]">Rent</span> an Apartment?
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 max-w-md leading-relaxed">
              Step into luxury living with GPG. Our expert team is ready to help you find your perfect address in Dubai&apos;s most iconic locations.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-[#E31E24] hover:bg-[#c41a1f] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-red-900/20"
            >
              Get In Touch <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Right Side: Faded Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute right-0 top-0 h-full w-full lg:w-3/5 pointer-events-none"
          >
            <div className="relative h-full w-full">
              {/* The Image - Using a professional suit/business placeholder to match your reference */}
              <img 
                src="/images/shakehands.jpg" 
                alt="GPG Real Estate Professional" 
                className="h-full w-full object-cover object-right"
              />
              
              {/* Sophisticated White Fade Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent lg:from-white lg:via-white/40 lg:to-transparent"></div>
              
              {/* Extra fade for the very left edge to blend with background */}
              <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BuyRentCTA;
