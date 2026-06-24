"use client";
import { Download, ChevronDown, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ChevronRight,
  Briefcase,
  Landmark,
  Hotel,
  Warehouse
} from "lucide-react";

const Navbar = () => {
  const { locale, setLocale, t, isRTL } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const langRef = useRef(null);
  const downloadRef = useRef(null);

  const downloadItems = [
    { labelKey: "nav.companyProfile", href: "/images/company-profile.pdf" },
    { labelKey: "nav.articles", href: "/images/wealthmultiplication.pdf" },
  ];

  const useDarkChrome = !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (downloadRef.current && !downloadRef.current.contains(e.target)) {
        setDownloadOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const guideLinks = [
    { key: "offPlan", link: "/HOWTOBUYOFFPLAN" },
    { key: "resale", link: "/HOWTORESELL" },
    { key: "rental", link: "/HOWTORENTAL" },
  ];

  const moreLinks = [
    { key: "ourTeam", link: "/our-teams" },
    { key: "ourAwards", link: "/awards" },
    { key: "newsMedia", link: "/news" },
    { key: "contactUs", link: "/contact-us" },
  ];

  const aboutLinks = [{ key: "aboutUs", link: "/about" }];

  const propertyLinks = [
    { key: "villas", href: "/villas", icon: Landmark },
    { key: "townhouses", href: "/townhouses", icon: Warehouse },
    { key: "apartments", href: "/apartments", icon: Hotel },
    { key: "offices", href: "/offices", icon: Briefcase },
    { key: "retails", href: "/retails", icon: Briefcase },
  ];

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
            <Link href="/" className={navLinkStyles}>{t("nav.home")}</Link>

            {/* PROJECTS DROPDOWN */}
            <div className="relative group py-4">
              <button className={`flex items-center gap-1 ${navLinkStyles}`}>
                {t("nav.ourProperties")}
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
                      {t("nav.featuredOffPlan")}
                    </p>
                    <p className="text-white/70 text-[11px] uppercase tracking-widest mb-4">
                      {t("nav.dubaiWaterCanal")}
                    </p>
                    <Link
                      href="/projects"
                      className="bg-[#002147] text-white text-[11px] font-bold uppercase py-2.5 px-6 rounded-xl w-max hover:bg-white hover:text-[#002147] transition-all"
                    >
                      {t("nav.viewProject")}
                    </Link>
                  </div>
                </div>

                {/* RIGHT SIDE: Navigation Links */}
                <div className="flex-1 space-y-1">
                  {propertyLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.key}
                        href={item.href}
                        className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 rounded-2xl cursor-pointer transition-all text-slate-700 hover:text-[#002147] group/item"
                      >
                        <div className="flex items-center gap-4">
                          <Icon size={20} className="text-[#002147]" />
                          <span className="text-[13px] uppercase tracking-widest">
                            {t(`nav.${item.key}`)}
                          </span>
                        </div>
                        <ChevronRight
                          size={16}
                          className="text-slate-300 opacity-0 transition-all group-hover/item:translate-x-1 group-hover/item:opacity-100"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
<div className="relative group py-4">
              <button className={`flex items-center gap-1 ${navLinkStyles}`}>
                {t("nav.guides")}
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
                      {guideLinks.map((item) => (
                        <Link
                          key={item.key}
                          href={item.link}
                          className="px-4 py-3 hover:bg-[#002147]/5 rounded-2xl text-[12px] uppercase tracking-wider text-slate-700 hover:text-[#002147] transition-all flex items-center justify-between group/item"
                        >
                          {t(`nav.${item.key}`)}
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

            {/* ABOUT US — same pattern as Guides */}
            <div className="relative group py-4">
              <button className={`flex items-center gap-1 ${navLinkStyles}`}>
                {t("nav.aboutUs")}
                <ChevronRight
                  size={14}
                  className="rotate-90 group-hover:-rotate-90 transition-transform duration-300"
                />
              </button>

              <div className="absolute top-[110%] left-0 w-60 bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 flex p-6 gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-1">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.key}
                        href={item.link}
                        className="px-4 py-3 hover:bg-[#002147]/5 rounded-2xl text-[12px] uppercase tracking-wider text-slate-700 hover:text-[#002147] transition-all flex items-center justify-between group/item"
                      >
                        {t(`nav.${item.key}`)}
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

            {/* AREAS DROPDOWN */}
            <div className="relative group py-4">
              <button className={`flex items-center gap-1 ${navLinkStyles}`}>
                {t("nav.ourCommunities")}
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
                      {t("nav.exploreDubai")}
                    </p>
                    <p className="text-white/70 text-[10px] uppercase tracking-widest mb-4">
                      {t("nav.primeLocations")}
                    </p>
                    <Link
                      href="/areas"
                      className="bg-white text-[#002147] text-[11px] font-bold uppercase py-2.5 px-6 rounded-xl w-max hover:bg-[#002147] hover:text-white transition-all"
                    >
                      {t("nav.viewMap")}
                    </Link>
                  </div>
                </div>

                {/* RIGHT SIDE: Side-by-Side Communities List */}
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="px-4 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
                      {t("nav.topCommunities")}
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

            <div className="relative group py-4">
              <button className={`flex items-center gap-1 ${navLinkStyles}`}>
                {t("nav.more")}
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
                      {moreLinks.map((item) => (
                        <Link
                          key={item.key}
                          href={item.link}
                          className="px-4 py-3 hover:bg-[#002147]/5 rounded-2xl text-[12px] uppercase tracking-wider text-slate-700 hover:text-[#002147] transition-all flex items-center justify-between group/item"
                        >
                          {t(`nav.${item.key}`)}
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
            className={`hidden lg:flex items-center gap-6 border-slate-200 transition-colors ${isRTL ? "border-r pr-6" : "border-l pl-6"} ${useDarkChrome ? "border-slate-200" : "border-white/30"}`}
          >
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${useDarkChrome ? "text-slate-900" : "text-white"}`}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
              >
                <span>{locale === "ar" ? "🇸🇦" : "🇬🇧"}</span>
                <span>{locale === "ar" ? "AR" : "EN"}</span>
                <ChevronDown size={14} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  className={`absolute top-full mt-2 min-w-[140px] rounded-lg border border-slate-100 bg-white py-1 shadow-lg z-[60] ${isRTL ? "left-0" : "right-0"}`}
                >
                  {[
                    { code: "en", label: t("nav.english"), flag: "🇬🇧" },
                    { code: "ar", label: t("nav.arabic"), flag: "🇸🇦" },
                  ].map((lang) => (
                    <li key={lang.code} role="option" aria-selected={locale === lang.code}>
                      <button
                        type="button"
                        onClick={() => {
                          setLocale(lang.code);
                          setLangOpen(false);
                        }}
                        className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50 ${locale === lang.code ? "bg-red-50 text-[#E31E24] font-semibold" : ""}`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </span>
                        {locale === lang.code && <Check size={16} />}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative" ref={downloadRef}>
              <button
                type="button"
                onClick={() => setDownloadOpen((open) => !open)}
                aria-expanded={downloadOpen}
                aria-haspopup="menu"
                className="flex items-center gap-2 bg-[#E31E24] text-white text-xs font-semibold px-4 py-2 rounded-md shadow-md hover:bg-[#c81b20] transition-all duration-300"
              >
                <Download size={14} />
                {t("nav.downloads")}
                <ChevronDown size={14} className={`transition-transform ${downloadOpen ? "rotate-180" : ""}`} />
              </button>
              {downloadOpen && (
                <ul
                  role="menu"
                  className={`absolute top-full mt-2 w-60 rounded-3xl border border-slate-100 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[60] flex flex-col gap-1 ${isRTL ? "left-0" : "right-0"}`}
                >
                  {downloadItems.map((item) => (
                    <li key={item.labelKey} role="none">
                      <a
                        role="menuitem"
                        href={item.href}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setDownloadOpen(false)}
                        className="group/item flex w-full items-center justify-between gap-2 rounded-2xl px-4 py-3 text-[12px] uppercase tracking-wider text-slate-700 transition-all hover:bg-[#002147]/5 hover:text-[#002147]"
                      >
                        <span className="flex items-center gap-2">
                          <Download size={14} className="shrink-0 text-[#E31E24]" />
                          {t(item.labelKey)}
                        </span>
                        <ChevronRight
                          size={14}
                          className="text-[#002147] opacity-0 transition-all group-hover/item:translate-x-1 group-hover/item:opacity-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
                {isOpen ? t("nav.close") : t("nav.menu")}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU GOES HERE */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-6 py-6 space-y-4">

            <Link href="/" className="block text-[#002147] uppercase text-sm ">{t("nav.home")}</Link>

            <p className="text-[#002147] text-sm uppercase tracking-widest pt-4 ">{t("nav.ourProperties")}</p>
            {propertyLinks.map((item) => (
              <Link key={item.key} href={item.href} className="block text-[#FF0000] text-sm">
                {t(`nav.${item.key}`)}
              </Link>
            ))}

            <p className="text-[#002147] text-sm uppercase tracking-widest pt-4 ">{t("nav.ourCommunities")}</p>

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
              {t("nav.clickForMore")}
            </Link>

            <p className="text-[#002147] text-sm uppercase tracking-widest pt-4">{t("nav.guides")}</p>
            {guideLinks.map((item) => (
              <Link key={item.key} href={item.link} className="block text-[#FF0000] text-sm">
                {t(`nav.${item.key}`)}
              </Link>
            ))}

            <p className="text-[#002147] text-sm uppercase tracking-widest pt-4">{t("nav.aboutUs")}</p>
            {aboutLinks.map((item) => (
              <Link key={item.key} href={item.link} className="block text-[#FF0000] text-sm">
                {t(`nav.${item.key}`)}
              </Link>
            ))}

            <p className="text-[#002147] text-sm uppercase tracking-widest pt-4">{t("nav.more")}</p>
            {moreLinks.map((item) => (
              <Link key={item.key} href={item.link} className="block text-[#FF0000] text-sm">
                {t(`nav.${item.key}`)}
              </Link>
            ))}

            <div className="flex gap-3 pt-4 border-t border-slate-100 mt-4">
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`px-3 py-1.5 text-xs font-bold rounded ${locale === "en" ? "bg-[#E31E24] text-white" : "bg-slate-100 text-slate-700"}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale("ar")}
                className={`px-3 py-1.5 text-xs font-bold rounded ${locale === "ar" ? "bg-[#E31E24] text-white" : "bg-slate-100 text-slate-700"}`}
              >
                AR
              </button>
            </div>

            <div className="space-y-1 pt-4 border-t border-slate-100">
              {downloadItems.map((item) => (
                <a
                  key={item.labelKey}
                  href={item.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-2 text-[12px] uppercase tracking-wider text-slate-700"
                >
                  <Download size={14} className="text-[#E31E24]" />
                  {t(item.labelKey)}
                </a>
              ))}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;