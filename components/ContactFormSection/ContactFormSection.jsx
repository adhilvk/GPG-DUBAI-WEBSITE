"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const countries = [
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
];

const ContactFormSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="bg-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left Side: Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 min-h-112.5 rounded-2xl overflow-hidden shadow-lg border border-slate-100"
          >
            <iframe 
              src="https://www.google.com/maps?q=Regal%20Tower%20Business%20Bay%20Dubai&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="GPG Real Estate Location"
            ></iframe>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-8">get in touch</h2>
            
            <form className="space-y-5">
              {/* Name Input */}
              <div>
                <input 
                  type="text" 
                  placeholder="name" 
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24] outline-none transition-all text-slate-700"
                />
              </div>

              {/* Email Input */}
              <div>
                <input 
                  type="email" 
                  placeholder="email" 
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24] outline-none transition-all text-slate-700"
                />
              </div>

              {/* Phone Input with Country Code Dropdown */}
              <div className="relative flex gap-3">
                {/* Custom Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="h-full flex items-center gap-2 px-4 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all min-w-27.5"
                  >
                    <span className="text-xl">{selectedCountry.flag}</span>
                    <span className="text-slate-700 font-medium">{selectedCountry.code}</span>
                    <ChevronDown size={16} className={`text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-100 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
                      {countries.map((country) => (
                        <div
                          key={country.code}
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsDropdownOpen(false);
                          }}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors"
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span className="text-sm text-slate-700 flex-1">{country.name}</span>
                          <span className="text-sm text-slate-400">{country.code}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <input 
                  type="tel" 
                  placeholder="phone" 
                  className="flex-1 px-5 py-4 rounded-xl border border-slate-200 focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24] outline-none transition-all text-slate-700"
                />
              </div>

              {/* Message Input */}
              <div>
                <textarea 
                  placeholder="message" 
                  rows="4"
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24] outline-none transition-all text-slate-700 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
