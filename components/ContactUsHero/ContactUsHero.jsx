"use client";
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUsHero = () => {
  return (
    <section className="relative h-[70vh] min-h-125 w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/contactus.jpg" 
          alt="Contact GPG Global Real Estate" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-10 h-0.5 bg-[#E31E24]"></div>
          <span className="text-[#E31E24] font-bold tracking-[0.3em] text-xs uppercase">
            Get In Touch
          </span>
          <div className="w-10 h-0.5 bg-[#E31E24]"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Let's Find Your <br />
          <span className="text-[#E31E24]">Perfect Address</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-200 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Whether you're looking to buy, sell, or invest in Dubai's premium real estate, 
          our expert team is here to guide you every step of the way.
        </motion.p>

        {/* Quick Contact Info Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/90"
        >
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#E31E24]/20 flex items-center justify-center group-hover:bg-[#E31E24] transition-colors duration-300">
              <Phone size={18} className="text-[#E31E24] group-hover:text-white" />
            </div>
            <span className="font-medium">Call Us Today</span>
          </div>
          
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#E31E24]/20 flex items-center justify-center group-hover:bg-[#E31E24] transition-colors duration-300">
              <Mail size={18} className="text-[#E31E24] group-hover:text-white" />
            </div>
            <span className="font-medium">Email Inquiry</span>
          </div>

          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#E31E24]/20 flex items-center justify-center group-hover:bg-[#E31E24] transition-colors duration-300">
              <MapPin size={18} className="text-[#E31E24] group-hover:text-white" />
            </div>
            <span className="font-medium">Visit Our Office</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsHero;
