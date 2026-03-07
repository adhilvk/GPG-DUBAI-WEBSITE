"use client";

import { Phone, Mail, Globe, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-red-500/90 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        {/* Changed grid-cols-1 to grid-cols-2 for mobile side-by-side view */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">

          {/* Company Info - Taking full width on mobile for better readability */}
          <div className="col-span-2 lg:col-span-1">
            <img
              src="/images/logo.png"
              className="w-28 md:w-36 mb-4 md:mb-6"
              alt="GPG Logo"
            />
            <p className="text-white leading-relaxed text-xs md:text-sm">
              Global Property Group specializes in premium real estate
              investments across Dubai. We help investors buy, sell and grow
              their property portfolio with expert guidance.
            </p>
          </div>

          {/* Quick Links - Side by Side on Mobile */}
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3 text-white text-xs md:text-sm">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Properties</li>
              <li className="hover:text-black cursor-pointer">Investments</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services - Side by Side on Mobile */}
          <div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">
              Services
            </h3>
            <ul className="space-y-2 md:space-y-3 text-white text-xs md:text-sm">
              <li className="hover:text-black cursor-pointer">Property Buying</li>
              <li className="hover:text-black cursor-pointer">Property Selling</li>
              <li className="hover:text-black cursor-pointer">Investment Advisory</li>
              <li className="hover:text-black cursor-pointer">Property Management</li>
            </ul>
          </div>

          {/* Contact - Taking full width on mobile to prevent text overlapping */}
          <div className="col-span-2 lg:col-span-1 border-t border-white/20 pt-6 lg:border-none lg:pt-0">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">
              Contact
            </h3>
            <ul className="space-y-3 md:space-y-4 text-white text-xs md:text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white shrink-0" />
                +971 54 206 8414
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span className="break-all">enquiries@globalpropertygroup.co</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-white shrink-0" />
                www.globalpropertygroup.co
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-1" />
                <span>#1109, Regal Tower, Business Bay - Dubai</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-sm text-white text-center md:text-left">
          <p>© {new Date().getFullYear()} GPG Global Real Estate. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6 mt-3 md:mt-0">
            <span className="hover:text-black cursor-pointer">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;