"use client";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  Building2,
  Home,
  Briefcase,
  Landmark,
  Hotel,
  Warehouse
} from "lucide-react";

const Navbar = () => {

  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UPDATED: Scrolled color is now Red (#FF0000), and added underline logic via Tailwind
  const navLinkStyles = `relative text-[13px] transition-all duration-300 uppercase tracking-[0.15em] font-medium 
${isHome
      ? scrolled
        ? "text-[#FF0000]"
        : "text-white hover:text-gray-300"
      : "text-[#FF0000]"
    }
after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#FF0000] after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${isHome
        ? scrolled
          ? "bg-white shadow-lg py-0 border-b border-slate-100"
          : "bg-transparent py-2"
        : "bg-white shadow-lg py-0 border-b border-slate-100"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div className="shrink-0 flex items-center">
            <img
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
              src="/images/logo.png"
              alt="GPG Logo"
            />
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={navLinkStyles}>Home</Link>
            <Link href="/about" className={navLinkStyles}>About Us</Link>

            {/* PROJECTS DROPDOWN */}
            <div className="relative group py-4">
              <button className={`flex items-center gap-1 ${navLinkStyles}`}>
                Our Properties
                <ChevronRight
                  size={14}
                  className="rotate-90 group-hover:-rotate-90 transition-transform duration-300"
                />
              </button>

              {/* LEVEL 1: Main Dropdown Container */}
              <div className="absolute top-[110%] left-0 w-150 bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 flex p-4 gap-4">

                {/* LEFT SIDE: Image Card */}
                <div className="w-[40%] relative rounded-xl overflow-hidden group/img aspect-4/5">
                  <img
                    src="/images/Riverside.jpg"
                    alt="Featured Project"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <p className="text-white text-[16px] font-bold uppercase tracking-wider mb-1">
                      Featured Off-Plan
                    </p>
                    <p className="text-white/70 text-[11px] uppercase tracking-widest mb-4">
                      Dubai Water Canal
                    </p>
                    <Link
                      href="/projects"
                      className="bg-[#002147] text-white text-[11px] font-bold uppercase py-2.5 px-6 rounded-xl w-max hover:bg-white hover:text-[#002147] transition-all"
                    >
                      View Project
                    </Link>
                  </div>
                </div>

                {/* RIGHT SIDE: Navigation Links */}
                <div className="flex-1 space-y-1">
                  <p className="px-4 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
                    Property Types
                  </p>

                  {/* RESIDENTIAL */}
                  <div className="relative group/res">
                    <div className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 rounded-2xl cursor-pointer transition-all text-slate-700 group-hover/res:text-[#002147] group-hover/res:bg-[#002147]/5">
                      <div className="flex items-center gap-4">
                        <Home size={20} className="transition-colors" />
                        <span className="text-[13px] uppercase tracking-widest">
                          Residential
                        </span>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 group-hover/res:translate-x-1 transition-transform" />
                    </div>

                    {/* SUBMENU */}
                    <div className="absolute top-0 left-full ml-4 w-56 bg-white rounded-3xl border border-slate-100 shadow-2xl py-2 opacity-0 invisible group-hover/res:opacity-100 group-hover/res:visible transition-all duration-300 translate-x-4 group-hover/res:translate-x-0">
                      <Link href="/apartments" className="px-4 py-3 hover:bg-slate-50 flex items-center gap-3 text-slate-700 hover:text-[#002147] transition-colors">
                        <Hotel size={18} className="text-[#002147]" />
                        <span className="uppercase text-[12px] tracking-wider">Apartments</span>
                      </Link>
                      <Link href="/townhouses" className="px-4 py-3 hover:bg-slate-50 flex items-center gap-3 text-slate-700 hover:text-[#002147] transition-colors">
                        <Warehouse size={18} className="text-[#002147]" />
                        <span className="uppercase text-[12px] tracking-wider">Townhouses</span>
                      </Link>
                      <Link href="/villas" className="px-4 py-3 hover:bg-slate-50 flex items-center gap-3 text-slate-700 hover:text-[#002147] transition-colors">
                        <Landmark size={18} className="text-[#002147]" />
                        <span className="uppercase text-[12px] tracking-wider">Villas</span>
                      </Link>
                    </div>
                  </div>

                  {/* COMMERCIAL */}
                  <div className="relative group/com">
                    <div className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 rounded-2xl cursor-pointer transition-all text-slate-700 group-hover/com:text-[#002147] group-hover/com:bg-[#002147]/5">
                      <div className="flex items-center gap-4">
                        <Building2 size={20} />
                        <span className="text-[13px] uppercase tracking-widest">
                          Commercial
                        </span>
                      </div>
                      <ChevronRight size={16} className="text-slate-300 group-hover/com:translate-x-1 transition-transform" />
                    </div>

                    {/* SUBMENU */}
                    <div className="absolute top-0 left-full ml-4 w-72 bg-white rounded-3xl border border-slate-100 shadow-2xl py-3 opacity-0 invisible group-hover/com:opacity-100 group-hover/com:visible transition-all duration-300 translate-x-4 group-hover/com:translate-x-0">
                      <Link href="/offices" className="px-6 py-4 hover:bg-slate-50 flex items-center gap-4 text-slate-700 hover:text-[#002147] transition-colors group/link">
                        <Briefcase size={18} className="text-[#002147]" />
                        <span className="uppercase text-[12px] tracking-wider">Offices</span>
                      </Link>
                      <Link href="/retails" className="px-6 py-4 hover:bg-slate-50 flex items-center gap-4 text-slate-700 hover:text-[#002147] transition-colors group/link">
                        <Briefcase size={18} className="text-[#002147]" />
                        <span className="uppercase text-[12px] tracking-wider">Retails</span>
                      </Link>
                    </div>
                  </div>

                  {/* LUXURY PROPERTIES */}
                  <div className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 rounded-2xl cursor-pointer transition-all text-slate-700 hover:text-[#002147] ">
                    <div className="flex items-center gap-4">
                      <Home size={20} />
                      <span className="text-[13px] uppercase tracking-widest">Luxury Properties</span>
                    </div>
                    <ChevronRight size={16} className="text-slate-300" />
                  </div>

                  {/* READY PROPERTIES */}
                  <div className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 rounded-2xl cursor-pointer transition-all text-slate-700 hover:text-[#002147] ">
                    <div className="flex items-center gap-4">
                      <Home size={20} />
                      <span className="text-[13px] uppercase tracking-widest">Ready Properties</span>
                    </div>
                    <ChevronRight size={16} className="text-slate-300" />
                  </div>
                </div>
              </div>
            </div>
<div className="relative group py-4">
              <button className={`flex items-center gap-1 ${navLinkStyles}`}>
                Guides
                <ChevronRight
                  size={14}
                  className="rotate-90 group-hover:-rotate-90 transition-transform duration-300"
                />
              </button>

              {/* Main Dropdown Container */}
              <div className="absolute top-[110%] left-0 w-60 bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 flex p-6 gap-8">
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-col gap-1">
                      {[
                        { name: "HOW TO BUY OFF PLAN", link: "/HOWTOBUYOFFPLAN" },
                        { name: "HOW TO RESELL", link: "/HOWTORESELL" },
                        { name: "Real Estate Guides", link: "/guides" },
                        { name: "HOW TO INVEST", link: "/HOWTOINVEST" }
                      ].map((item) => (
                        <Link
                          key={item.name}
                          href={item.link}
                          className="px-4 py-3 hover:bg-[#002147]/5 rounded-2xl text-[12px] uppercase tracking-wider text-slate-700 hover:text-[#002147] transition-all flex items-center justify-between group/item"
                        >
                          {item.name}
                          <ChevronRight
                            size={14}
                            className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#002147]"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* AREAS DROPDOWN */}
            <div className="relative group py-4">
              <button className={`flex items-center gap-1 ${navLinkStyles}`}>
                Our Communities
                <ChevronRight
                  size={14}
                  className="rotate-90 group-hover:-rotate-90 transition-transform duration-300"
                />
              </button>

              {/* Main Dropdown Container */}
              <div className="absolute top-[110%] left-0 w-150 bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 flex p-6 gap-8">

                {/* LEFT SIDE: Institutional Image Card */}
                <div className="w-[40%] relative rounded-2xl overflow-hidden group/img aspect-4/5">
                  <div className="w-full h-125 rounded-2xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-[#002147]/90 via-transparent to-transparent flex flex-col justify-end p-6">
                    <p className="text-white text-[16px] font-bold uppercase tracking-wider mb-1">
                      Explore Dubai
                    </p>
                    <p className="text-white/70 text-[10px] uppercase tracking-widest mb-4">
                      Prime Locations
                    </p>
                    <Link
                      href="/areas"
                      className="bg-white text-[#002147] text-[11px] font-bold uppercase py-2.5 px-6 rounded-xl w-max hover:bg-[#002147] hover:text-white transition-all"
                    >
                      View Map
                    </Link>
                  </div>
                </div>

                {/* RIGHT SIDE: Side-by-Side Communities List */}
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="px-4 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
                      Top Communities
                    </p>

                    {/* Two-Column Grid for Side-by-Side Names */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {[
                        "Jumeirah Islands", "District One",
                        "Al Barari", "DAMAC Hills",
                        "Arabian Ranches", "The Meadows",
                        "Jumeirah Golf Estates", "Dubai Hills Estate",
                        "Emirates Hills", "The Springs"
                      ].map((area) => (
                        <Link
                          key={area}
                          href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                          className="px-4 py-3 hover:bg-[#002147]/5 rounded-2xl text-[12px] uppercase tracking-wider text-slate-700 hover:text-[#002147] transition-all flex items-center justify-between group/item"
                        >
                          {area}
                          <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#002147]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <Link href="/our-teams" className={navLinkStyles}>Team</Link>

            <div className="relative group py-4">
              <button className={`flex items-center gap-1 ${navLinkStyles}`}>
                More
                <ChevronRight
                  size={14}
                  className="rotate-90 group-hover:-rotate-90 transition-transform duration-300"
                />
              </button>

              {/* Main Dropdown Container */}
              <div className="absolute top-[110%] left-0 w-60 bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 flex p-6 gap-8">
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex flex-col gap-1">
                      {[
                        { name: "Contact Us", link: "/contact-us" },
                        { name: "Our Awards", link: "/awards" },
                        { name: "Real Estate Guides", link: "/guides" },
                        { name: "News & Media", link: "/news" }
                      ].map((item) => (
                        <Link
                          key={item.name}
                          href={item.link}
                          className="px-4 py-3 hover:bg-[#002147]/5 rounded-2xl text-[12px] uppercase tracking-wider text-slate-700 hover:text-[#002147] transition-all flex items-center justify-between group/item"
                        >
                          {item.name}
                          <ChevronRight
                            size={14}
                            className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#002147]"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LANGUAGE / SCROLL LOGIC */}
          <div
            className={`hidden lg:flex items-center space-x-6 border-l pl-6 transition-colors ${scrolled ? "border-slate-200" : "border-white/30"
              }`}
          >
            <button
              className={`flex items-center text-xs font-bold transition-colors ${scrolled ? "text-slate-900" : "text-white"
                }`}
            >
              <span className="mr-2">🇬🇧</span> EN
            </button>

            {/* Company Brochure Button */}
            <button className="flex items-center gap-2 bg-[#E31E24] text-white text-xs font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#c81b20] transition-all duration-300">
              <Download size={14} />
              Company Profile
            </button>
          </div>


          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${isHome
                ? scrolled
                  ? "text-[#FF0000]"
                  : "text-white"
                : "text-[#FF0000]"
                }`}
            >
              <span className="font-bold uppercase tracking-widest text-[11px]">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU GOES HERE */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-6 py-6 space-y-4">

            <Link href="/" className="block text-[#002147] uppercase text-sm ">Home</Link>
            <Link href="/about" className="block text-[#002147] uppercase text-sm">About Us</Link>

            <p className="text-[#002147] text-sm uppercase tracking-widest pt-4 ">Projects</p>
            <Link href="/apartments" className="block text-[#FF0000] text-sm">Apartments</Link>
            <Link href="/townhouses" className="block text-[#FF0000] text-sm">Townhouses</Link>
            <Link href="/villas" className="block text-[#FF0000] text-sm">Villas</Link>
            <Link href="/offices" className="block text-[#FF0000] text-sm">Offices</Link>
            <Link href="/retails" className="block text-[#FF0000] text-sm">Retails</Link>

            <p className="text-[#002147] text-sm uppercase tracking-widest pt-4 ">Communities</p>

            <Link href="/areas/dubai-hills-estate" className="block text-[#FF0000] text-sm">
              Dubai Hills Estate
            </Link>

            <Link href="/areas/damac-hills" className="block text-[#FF0000] text-sm">
              Damac Hills
            </Link>

            <Link href="/areas/emirates-hills" className="block text-[#FF0000] text-sm">
              Emirates Hills
            </Link>

            {/* MORE BUTTON */}
            <Link
              href="/areas"
              className="inline-block mt-3 text-xs font-semibold uppercase tracking-widest text-white bg-[#002147] px-4 py-2 rounded-lg hover:bg-[#001530] transition-all"
            >
              Click Here for More
            </Link>

            <Link href="/" className="block text-[#002147] uppercase text-sm">Our Team</Link>

            <p className="text-[#002147] text-sm uppercase tracking-widest pt-4">More</p>
            <Link href="/contact" className="block text-[#FF0000] text-sm">Contact Us</Link>
            <Link href="/awards" className="block text-[#FF0000] text-sm">Our Awards</Link>
            <Link href="/guides" className="block text-[#FF0000] text-sm">Real Estate Guides</Link>
            <Link href="/news" className="block text-[#FF0000] text-sm">News & Media</Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;