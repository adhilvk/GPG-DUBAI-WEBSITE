"use client";

import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = ({ showCeoLink = false }) => {
  const footerLinkStyles = `relative w-max cursor-pointer transition-all duration-300 text-[#FF0000] text-[13px] uppercase tracking-wider
  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1.5px] after:bg-[#E31E24] after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-12 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-1 flex flex-col justify-between">

            <div className="mb-10">
              <img
                src="/images/logo.png"
                className="w-24 md:w-32 mb-6"
                alt="GPG Logo"
              />

              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-all">
                  <Facebook size={16} />
                </a>

                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-all">
                  <Instagram size={16} />
                </a>

                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-all">
                  <Linkedin size={16} />
                </a>

                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-[#E31E24] hover:bg-[#E31E24] hover:text-white transition-all">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">
                Contact
              </h3>

              <ul className="space-y-4 text-[#FF0000] text-[11px] uppercase tracking-widest">

                <li className="flex items-center gap-3">
                  <Phone size={14} className="shrink-0" />
                  +971 54 206 8414
                </li>

                <li className="flex items-center gap-3">
                  <Mail size={14} className="shrink-0" />
                  enquiries@globalpropertygroup.co
                </li>

                <li className="flex items-center gap-3">
                  <Globe size={14} className="shrink-0" />
                  www.globalpropertygroup.co
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={14} className="shrink-0 mt-0.5" />
                  <span className="leading-tight">
                    #1109, Regal Tower, Business Bay - Dubai
                  </span>
                </li>

              </ul>
            </div>
          </div>

          {/* RIGHT SIDE WRAPPER */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-10 items-start">
            {/* GUIDES */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-8 uppercase tracking-widest">
                Guides
              </h3>

              <ul className="space-y-4 text-[11px]">
                <li className={footerLinkStyles}>Investment Guide</li>
                <li className={footerLinkStyles}>Off-Plan Property Guide</li>
                <li className={footerLinkStyles}>Property Legal Process</li>
                <li className={footerLinkStyles}>Rental Yield Guide</li>
              </ul>
            </div>
            {/* QUICK LINKS */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-8 uppercase tracking-widest">
                Quick Links
              </h3>

              <ul className="space-y-4 text-[11px]">
                <li className={footerLinkStyles}>Home</li>
                <li className={footerLinkStyles}>About Us</li>
                <li className={footerLinkStyles}>Properties</li>
                <li className={footerLinkStyles}>Investments</li>
                <li className={footerLinkStyles}>Contact</li>
              </ul>
            </div>



            {/* SERVICES */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-8 uppercase tracking-widest">
                Services
              </h3>

              <ul className="space-y-4 text-[11px]">
                <li className={footerLinkStyles}>Property Buying</li>
                <li className={footerLinkStyles}>Property Selling</li>
                <li className={footerLinkStyles}>Investment Advisory</li>
                <li className={footerLinkStyles}>Property Management</li>
              </ul>
            </div>

            {/* PROPERTY TYPES */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-8 uppercase tracking-widest">
                Property Types
              </h3>

              <ul className="space-y-4 text-[11px]">
                <li className={footerLinkStyles}>Apartments in Dubai</li>
                <li className={footerLinkStyles}>Penthouses in Dubai</li>
                <li className={footerLinkStyles}>Townhouses in Dubai</li>
                <li className={footerLinkStyles}>Villas in Dubai</li>
                <li className={footerLinkStyles}>Land Plots in Dubai</li>
                <li className={footerLinkStyles}>Buildings in Dubai</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-100 py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`grid gap-4 text-center text-[10px] md:text-xs text-[#E31E24] uppercase tracking-[0.2em] md:items-center ${
              showCeoLink ? "md:grid-cols-3 md:gap-y-6" : "md:grid-cols-2"
            }`}
          >
            <p className="md:justify-self-start md:text-left">
              © {new Date().getFullYear()} GPG Global Real Estate. All rights reserved.
            </p>

            {showCeoLink && (
              <div className="flex flex-col items-center justify-center gap-1 text-slate-600 normal-case tracking-normal md:justify-self-center py-2 md:py-0">
                <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-slate-500">
                  CEO ·
                </span>
                <a
                  href="https://multipliercg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 hover:text-[#E31E24] underline underline-offset-4 decoration-2 transition-colors leading-tight"
                >
                  Multiplier CG
                </a>
              </div>
            )}

            <div
              className={`flex gap-6 justify-center ${
                showCeoLink ? "md:justify-self-end" : "md:justify-self-end md:col-start-2"
              }`}
            >
              <span className="hover:text-slate-900 cursor-pointer transition-colors">
                Privacy Policy
              </span>

              <span className="hover:text-slate-900 cursor-pointer transition-colors">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;