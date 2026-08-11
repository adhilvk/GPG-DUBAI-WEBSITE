"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  ShieldCheck,
  FileText,
} from "lucide-react";

const ACCENT = "#E31E24";
const ACCENT_SOFT = "rgba(227, 30, 36, 0.08)";

const tocItems = [
  { id: "what-is-commercial", label: "What is commercial property?" },
  { id: "why-buy", label: "Why buy commercial property in Dubai?" },
  { id: "types", label: "Types of commercial property" },
  { id: "steps", label: "Steps to purchase" },
  { id: "evaluate", label: "How to evaluate an investment" },
  { id: "areas", label: "Top areas to consider" },
  { id: "costs", label: "Costs & due diligence" },
  { id: "tips", label: "Top tips for first-time buyers" },
  { id: "faq", label: "FAQs" },
];

const quickLinks = [
  { label: "Commercial Investment", href: "/HOWTOINVEST" },
  { label: "Offices in Dubai", href: "/luxury-properties?type=office" },
  { label: "Land plots in Dubai", href: "/luxury-properties?type=land" },
  { label: "Contact us", href: "/contact-us" },
];

function SectionHeading({ id, children, accent }) {
  return (
    <div className="mt-14 scroll-mt-32 md:mt-16">
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
      >
        {children}
        {accent ? (
          <>
            {" "}
            <span className="text-[#E31E24]">{accent}</span>
          </>
        ) : null}
      </h2>
      <div className="mt-4 h-px w-16 bg-[#E31E24]" aria-hidden />
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-neutral-200/70 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-neutral-600"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-lg">
          {question}
        </span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
          style={{
            borderColor: isOpen ? ACCENT : "rgba(0,0,0,0.1)",
            backgroundColor: isOpen ? ACCENT_SOFT : "transparent",
          }}
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            style={{ color: isOpen ? ACCENT : "#a3a3a3" }}
          />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out [overflow-anchor:none]"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 text-[15px] leading-[1.8] text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}

const recentArticles = [
  {
    title: "How to Buy Off-Plan Property in Dubai",
    href: "/HOWTOBUYOFFPLAN",
    image: "/images/palmcentral.jpg",
    category: "Guide",
  },
  {
    title: "Guide to Reselling Off-Plan Property in Dubai",
    href: "/HOWTORESELL",
    image: "/images/grandpolo.webp",
    category: "Guide",
  },
  {
    title: "Dubai Rental Yield Guide for Property Investors",
    href: "/HOWTORENTAL",
    image: "/images/Riverside.jpg",
    category: "Guide",
  },
];

const commercialPropertyTypes = [
  "Retail shops",
  "Office spaces",
  "Clinics",
  "Restaurants and cafés",
  "Warehouses",
  "Showrooms",
  "Commercial buildings",
  "Commercial land and plots",
  "Mixed-use commercial units",
];

const whyBuyItems = [
  {
    title: "Rental income",
    body: "Commercial properties can generate rental income through leases to businesses. The actual return depends on purchase price, rental value, occupancy, tenant quality, service charges and operating expenses.",
  },
  {
    title: "Business ownership",
    body: "Business owners may choose to purchase their premises rather than lease, giving them greater control over their operating location and long-term occupancy costs.",
  },
  {
    title: "Portfolio diversification",
    body: "Investors with residential holdings can consider commercial real estate as another property category, providing exposure to different tenant profiles and income characteristics.",
  },
  {
    title: "Capital growth",
    body: "Commercial properties in well-connected areas can benefit from population growth, business expansion, infrastructure investment and increasing demand for quality commercial space.",
  },
];

const investmentStrategies = [
  "Long-term rental income",
  "Owner occupation",
  "Capital appreciation",
  "Leasing to businesses",
  "Value-add opportunities",
  "Portfolio diversification",
];

const propertyTypeDetails = [
  {
    title: "Retail",
    body: "Retail units can include shops, cafés, restaurants, salons, clinics, supermarkets and other customer-facing businesses. For retail, visibility and accessibility can be as important as the size of the property.",
  },
  {
    title: "Offices",
    body: "Office properties can appeal to professional services, SMEs, corporate tenants and investors seeking recurring rental income. Consider location, parking, floor efficiency, building quality, service charges, tenant demand and accessibility.",
  },
  {
    title: "Warehouses & industrial property",
    body: "Warehouses and industrial properties can serve logistics, storage, distribution, manufacturing and other operational businesses. Key factors include road connectivity, loading access, ceiling height, plot size, built-up area, permitted use and industrial demand.",
  },
  {
    title: "Commercial buildings",
    body: "Buying an entire commercial building can provide multiple potential income streams but generally requires higher capital and more extensive due diligence.",
  },
  {
    title: "Commercial land",
    body: "Commercial and industrial plots can provide development opportunities, subject to zoning, permitted use and applicable approvals.",
  },
];

const purchaseSteps = [
  {
    title: "Define your investment objective",
    body: "Start with the purpose of the purchase. Are you buying for rental income, your own business, capital appreciation, development or portfolio diversification? Your answer will determine which property type and location make the most sense.",
  },
  {
    title: "Set your total investment budget",
    body: "Don't look only at the advertised purchase price. Your total acquisition budget may include purchase price, DLD registration fees, VAT where applicable, brokerage, trustee or service fees, financing costs, service charges, fit-out, maintenance, leasing costs and potential vacancy.",
  },
  {
    title: "Choose the right location",
    body: "Evaluate customer catchment, business density, residential population, road connectivity, public transport, parking, visibility, accessibility, existing tenant demand, competing supply and future development. The best location depends on the property type.",
  },
  {
    title: "Compare individual properties",
    body: "Review purchase price, price per square foot, current and market rent, gross and net yield, service charges, occupancy, tenant quality, lease terms, property condition and exit potential. Don't compare properties simply by size or asking price.",
  },
  {
    title: "Conduct due diligence",
    body: "Before committing capital, verify title deed, ownership, property status, existing mortgage or restrictions, service charges, existing tenancy agreement, outstanding dues, permitted use, building regulations and community regulations.",
  },
  {
    title: "Review the tenant and lease",
    body: "If the property is already rented, carefully review the tenancy agreement. Consider tenant profile, lease expiry, rental amount, payment history, renewal terms, rent escalation, security deposit, maintenance responsibilities and break clauses.",
  },
  {
    title: "Negotiate the purchase",
    body: "Once due diligence is complete, negotiate purchase price, deposit, payment structure, transfer date, existing tenancy, outstanding service charges, fixtures and fittings and handover conditions. Where appropriate, an independent valuation can provide another reference point.",
  },
  {
    title: "Complete the transaction",
    body: "The transaction is completed through the applicable Dubai Land Department process. Buyers should ensure that required documentation, payments and transaction conditions are properly addressed before transfer. For company purchases, additional corporate documentation may apply.",
  },
];

const topAreas = [
  {
    rank: "01",
    title: "Jumeirah Village Circle (JVC)",
    highlight: "Priority area for first-time commercial buyers",
    body: "JVC is a large mixed-use residential community with an established population and growing demand for convenience-led retail and services. When evaluating a commercial unit in JVC, pay particular attention to visibility, accessibility, parking, residential catchment, competition and tenant demand.",
  },
  {
    rank: "02",
    title: "Business Bay",
    body: "One of Dubai's major commercial and mixed-use districts, Business Bay can appeal to investors targeting offices, retail and business-oriented tenants. The area benefits from its central position and proximity to Downtown Dubai.",
  },
  {
    rank: "03",
    title: "Jumeirah Lake Towers (JLT)",
    body: "JLT combines offices, residences, retail and hospitality within an established mixed-use environment. Connectivity, tower quality, parking and tenant demand are important considerations.",
  },
  {
    rank: "04",
    title: "Dubai Marina",
    body: "Dubai Marina is a mature waterfront community with significant residential, hospitality and retail activity. Retail and service-oriented commercial properties can benefit from the surrounding population, but investors should pay close attention to accessibility, visibility, parking and rental pricing.",
  },
  {
    rank: "05",
    title: "Dubai South",
    body: "Dubai South represents an important emerging commercial and logistics corridor. It can be relevant for investors considering warehouses, logistics, industrial property, commercial plots and business facilities.",
  },
  {
    rank: "06",
    title: "Al Quoz",
    body: "Al Quoz is an established commercial and industrial area with warehouses, workshops, showrooms and businesses. It can be particularly relevant for investors looking for operational commercial assets rather than conventional office investments.",
  },
  {
    rank: "07",
    title: "Dubai Investment Park",
    body: "Dubai Investment Park offers a broad mix of industrial, logistics, commercial and business uses. It can be relevant for investors seeking larger operational properties and industrial assets.",
  },
];

const costItems = [
  {
    title: "Dubai Land Department fees",
    body: "DLD registration and related transaction fees apply when purchasing property in Dubai. The exact fee structure and allocation should be confirmed for the specific transaction before completion.",
  },
  {
    title: "VAT",
    body: "Commercial real estate can be subject to 5% VAT in the UAE. VAT treatment can vary depending on the nature and structure of the transaction, so buyers should obtain appropriate tax advice.",
  },
  {
    title: "Brokerage",
    body: "Where a broker is involved, brokerage fees may apply. Confirm the commission, VAT treatment and payment terms before signing.",
  },
  {
    title: "Service charges",
    body: "Commercial owners in managed developments may have recurring service charges. These should be included in any rental-yield or investment calculation.",
  },
  {
    title: "Fit-out",
    body: "If purchasing a vacant unit, factor in the cost of preparing the property for occupation or leasing, including interior works, flooring, lighting, HVAC, plumbing, signage and business-specific equipment.",
  },
];

const buyerTips = [
  "Don't buy based on yield alone — a high advertised yield may hide vacancy risk, high expenses or unrealistic rental assumptions.",
  "Study the exact location — the performance of two properties in the same community can be completely different.",
  "Check permitted use — make sure the intended business activity is permitted before purchasing.",
  "Understand the tenant — for tenanted properties, review the tenant and lease rather than relying only on the annual rent.",
  "Calculate vacancy risk — commercial properties can experience longer vacancies depending on asset type and market conditions.",
  "Calculate the all-in cost — include acquisition costs, VAT where applicable, brokerage, service charges and fit-out.",
  "Compare market evidence — review comparable sales and rental evidence before deciding whether the property is fairly priced.",
  "Think about your exit — ask who is likely to buy this property from you in the future.",
  "Don't rush — commercial property is a long-term decision. Take time to compare several opportunities before committing capital.",
  "Work with a regulated professional — use appropriately licensed real estate professionals and verify property information through official channels.",
];

const faqs = [
  {
    q: "Can foreigners buy commercial property in Dubai?",
    a: "Foreign ownership is permitted in designated areas of Dubai, subject to applicable rules and the ownership status of the specific property. DLD identifies several designated areas, including Jumeirah Village, Business Bay and JLT.",
  },
  {
    q: "Is commercial property a good investment in Dubai?",
    a: "Commercial property can provide rental income and potential capital appreciation, but returns vary significantly by asset, location, tenant demand, acquisition price and operating costs.",
  },
  {
    q: "Is JVC good for commercial property?",
    a: "JVC can be attractive for commercial property because of its established residential catchment and demand for retail and everyday services. However, investors should evaluate the specific unit, rather than assuming that every commercial property in JVC will perform equally.",
  },
  {
    q: "What type of commercial property should a first-time buyer consider?",
    a: "There is no universal answer. Retail may suit investors targeting consumer-facing tenants, while offices can appeal to professional businesses. Warehouses and industrial assets may suit investors seeking operational or logistics exposure. The right choice depends on your budget, investment objective and risk tolerance.",
  },
  {
    q: "How much money do I need to buy commercial property?",
    a: "There is no single minimum investment amount. Commercial property prices vary substantially depending on property type, location, size, building and market conditions. Always calculate your total acquisition budget, not just the purchase price.",
  },
  {
    q: "Is commercial property subject to VAT?",
    a: "Commercial real estate can be subject to 5% VAT in the UAE, depending on the transaction and property circumstances.",
  },
  {
    q: "Should I buy a vacant or tenanted property?",
    a: "A tenanted property may provide immediate income and greater visibility on existing cash flow. A vacant property can provide more flexibility but may involve leasing, fit-out and vacancy risk.",
  },
  {
    q: "What should I check before buying?",
    a: "At minimum, review title and ownership, permitted use, location, purchase price, comparable values, rental potential, existing lease, tenant quality, service charges, transaction costs, VAT treatment, building condition and exit potential.",
  },
];

const latestUpdates = [
  {
    title: "How to Buy Off-Plan Property in Dubai",
    href: "/HOWTOBUYOFFPLAN",
    image: "/images/heightsbyemaar.webp",
    tag: "Guides",
  },
  {
    title: "Guide to Reselling Off-Plan Property in Dubai",
    href: "/HOWTORESELL",
    image: "/images/grandpolo.webp",
    tag: "Guides",
  },
  {
    title: "Dubai Rental Yield Guide for Property Investors",
    href: "/HOWTORENTAL",
    image: "/images/Riverside.jpg",
    tag: "Guides",
  },
];

function GuideSidebar() {
  return (
    <div className="space-y-10">
      <div className="border-t border-neutral-200 pt-10 lg:border-t-0 lg:pt-0">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
          From our blog
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Recent <span className="text-[#E31E24]">articles</span>
        </h2>
        <div className="mt-4 h-px w-16 bg-[#E31E24]" aria-hidden />

        <ul className="mt-8 space-y-7">
          {recentArticles.map((a) => (
            <li key={a.href}>
              <Link
                href={a.href}
                className="group flex gap-5 outline-none transition-opacity hover:opacity-90"
              >
                <div className="relative h-[5.5rem] w-[5.5rem] shrink-0 overflow-hidden bg-neutral-200">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="88px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ boxShadow: `inset 0 0 0 2px ${ACCENT}66` }}
                  />
                </div>
                <div className="min-w-0 flex-1 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E31E24]">
                    {a.category}
                  </span>
                  <p className="mt-2 line-clamp-3 text-[15px] font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-slate-700">
                    {a.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-hidden border border-neutral-200/80 bg-white px-8 py-10 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.08)]">
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
          GPG Advisory
        </p>
        <p className="mt-4 text-xl font-semibold leading-snug tracking-tight text-slate-900">
          Ready to explore commercial property in Dubai? We evaluate opportunities based on{" "}
          <span className="text-[#E31E24]">location, tenant demand and rental potential.</span>
        </p>
        <Link
          href="/contact-us"
          className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E31E24] transition-all hover:gap-3"
        >
          Speak with a licensed adviser
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="border border-neutral-200/80 bg-white px-6 py-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
          Get in touch
        </p>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
          Talk to a <span className="text-[#E31E24]">licensed adviser</span>
        </h3>
        <div className="mt-4 h-px w-12 bg-[#E31E24]" aria-hidden />
        <ul className="mt-5 space-y-4">
          <li>
            <a
              href="tel:+971542068414"
              className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors hover:text-[#E31E24]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-[#E31E24]">
                <Phone size={15} />
              </span>
              +971 54 206 8414
            </a>
          </li>
          <li>
            <a
              href="mailto:enquiries@globalpropertygroup.co"
              className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors hover:text-[#E31E24]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-[#E31E24]">
                <Mail size={15} />
              </span>
              <span className="break-all">enquiries@globalpropertygroup.co</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="overflow-hidden border border-neutral-200/80 bg-white">
        <Link href="/luxury-properties?type=office" className="group block">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200">
            <Image
              src="/images/prop2.jpg"
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
                Explore
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-white">
                Commercial <span className="text-[#E31E24]">properties</span>
              </p>
            </div>
          </div>
        </Link>
        <div className="px-6 py-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
            Quick links
          </p>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between text-sm font-semibold tracking-tight text-slate-800 transition-colors hover:text-[#E31E24]"
                >
                  {link.label}
                  <ArrowRight
                    size={14}
                    className="text-neutral-400 transition-all group-hover:translate-x-0.5 group-hover:text-[#E31E24]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: ShieldCheck, label: "RERA regulated" },
          { icon: Building2, label: "Premium developers" },
          { icon: FileText, label: "DLD verified" },
          { icon: Phone, label: "Dedicated support" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-2 border border-neutral-200/70 bg-white px-3 py-4 text-center"
          >
            <item.icon size={20} className="text-[#E31E24]" />
            <span className="text-[11px] font-bold uppercase tracking-wide text-slate-700">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowToInvestGuide() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="home-page bg-[#FAFAF8] text-neutral-900">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#E31E24] to-transparent" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 md:pb-32">
        <nav className="mb-14 text-[10px] font-semibold uppercase tracking-[0.32em] text-neutral-400">
          <Link href="/" className="transition-colors hover:text-neutral-700">
            Home
          </Link>
          <span className="mx-2.5 text-neutral-300">·</span>
          <Link href="/guides" className="transition-colors hover:text-neutral-700">
            Guides
          </Link>
          <span className="mx-2.5 text-neutral-300">·</span>
          <span className="text-[#E31E24]">Commercial Investment</span>
        </nav>

        <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-8">
            <article>
              <header className="mb-12">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
                  Investor guide
                </p>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  How to Buy Commercial Property in{" "}
                  <span className="text-[#E31E24]">Dubai</span>
                </h1>
                <div className="mt-4 h-px w-16 bg-[#E31E24]" aria-hidden />

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-slate-500">
                  <time dateTime="2026-08-10" className="font-medium tracking-wide">
                    August 10, 2026
                  </time>
                  <span className="hidden h-3 w-px bg-neutral-300 sm:block" aria-hidden />
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-neutral-400" />
                    10 min read
                  </span>
                </div>
              </header>

              <div className="relative mb-14 p-3 sm:p-4">
                <div
                  className="absolute inset-0 rounded-sm"
                  style={{ border: `1px solid ${ACCENT}22` }}
                  aria-hidden
                />
                <div className="relative aspect-[2.2/1] min-h-[220px] w-full overflow-hidden bg-neutral-200 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/images/prop2.jpg"
                    alt="Dubai commercial real estate"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(12,12,12,0.45) 0%, transparent 45%, rgba(12,12,12,0.08) 100%)",
                    }}
                  />
                </div>
              </div>

              <nav
                aria-label="Table of contents"
                className="mb-14 rounded-sm border border-neutral-200/80 bg-white/70 px-6 py-5 backdrop-blur-sm"
              >
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
                  In this guide
                </p>
                <p className="text-lg font-semibold tracking-tight text-slate-900">Jump to a section</p>
                <div className="mt-3 h-px w-12 bg-[#E31E24]" aria-hidden />
                <ol className="mt-5 grid gap-2 sm:grid-cols-2">
                  {tocItems.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center gap-3 text-[14px] text-slate-700 transition-colors hover:text-slate-950"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-[10px] font-bold text-[#E31E24]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="border-b border-transparent transition-colors group-hover:border-neutral-300">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="max-w-none text-[17px] leading-[1.85] text-slate-700">
                <p className="mb-7 text-[18px] leading-[1.9] text-slate-800">
                  <span className="float-left mr-3 mt-1 text-5xl font-bold leading-[0.75] text-[#E31E24]" aria-hidden>
                    D
                  </span>
                  ubai has developed into one of the world&apos;s leading real estate and business hubs,
                  attracting entrepreneurs, investors and companies from across the globe. For investors
                  entering the market for the first time, commercial real estate can provide exposure to
                  rental income, business demand and long-term capital growth.
                </p>
                <p className="mb-7">
                  But buying commercial property is different from buying a residential apartment or villa.
                  The right investment depends on much more than the purchase price. Location, tenant demand,
                  permitted use, accessibility, rental income, operating costs, vacancy risk and exit potential
                  all need to be considered.
                </p>
                <p className="mb-7">
                  This guide explains how to buy commercial property in Dubai and highlights the key areas
                  first-time buyers should consider, with Jumeirah Village Circle (JVC) as a key area to
                  evaluate.
                </p>

                <div className="mb-6">
                  <SectionHeading id="what-is-commercial" accent="property?">
                    What is commercial
                  </SectionHeading>
                </div>
                <p className="mb-4">
                  Commercial property refers to real estate primarily intended for business, trade or
                  income-generating purposes.
                </p>
                <p className="mb-4">Commercial property in Dubai can include:</p>
                <ul className="mb-6 grid gap-2 sm:grid-cols-2">
                  {commercialPropertyTypes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border border-neutral-200/70 bg-white/60 px-4 py-3 text-[15px]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#E31E24]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mb-4">
                  The appropriate property type depends on your investment objective, budget and target tenant.
                  Before purchasing, buyers should verify the property&apos;s title, permitted use, ownership
                  status, building regulations and any applicable community or development restrictions.
                </p>
                <p className="mb-7">
                  Dubai Land Department provides services and information covering property registration, title
                  verification and licensed real estate activity.
                </p>

                <div className="mb-6">
                  <SectionHeading id="why-buy" accent="Dubai?">
                    Why buy commercial property in
                  </SectionHeading>
                </div>
                <ul className="mt-2 space-y-5">
                  {whyBuyItems.map((item) => (
                    <li
                      key={item.title}
                      className="flex gap-5 rounded-sm border border-neutral-200/60 bg-white/60 px-5 py-4 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#E31E24]" aria-hidden />
                      <span>
                        <strong className="font-semibold text-slate-900">{item.title}</strong>
                        <span className="text-slate-600"> — {item.body}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mb-4 mt-8 font-semibold text-slate-900">Multiple investment strategies</p>
                <p className="mb-4">Commercial property can be acquired for:</p>
                <ul className="mb-7 space-y-2">
                  {investmentStrategies.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#E31E24]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <SectionHeading id="types" accent="property">
                    Types of commercial
                  </SectionHeading>
                </div>
                <div className="space-y-5">
                  {propertyTypeDetails.map((item) => (
                    <div
                      key={item.title}
                      className="border border-neutral-200/70 bg-white/50 px-5 py-4"
                    >
                      <p className="text-base font-semibold tracking-tight text-slate-900">{item.title}</p>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{item.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <SectionHeading id="steps" accent="purchase">
                    Steps to
                  </SectionHeading>
                </div>
                <ol className="relative mt-2 space-y-0 pl-0">
                  <div
                    className="absolute bottom-6 left-[22px] top-6 hidden w-px sm:block"
                    style={{ background: `linear-gradient(to bottom, ${ACCENT}44, ${ACCENT}11)` }}
                    aria-hidden
                  />
                  {purchaseSteps.map((step, i) => (
                    <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
                      <span
                        className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center bg-[#FAFAF8] text-lg font-bold text-slate-900"
                        style={{ boxShadow: `inset 0 0 0 1.5px ${ACCENT}` }}
                      >
                        {i + 1}
                      </span>
                      <div className="pt-1.5">
                        <h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
                          {step.title}
                        </h3>
                        <p className="m-0 text-[16px] leading-relaxed text-slate-600">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mb-6">
                  <SectionHeading id="evaluate" accent="investment">
                    How to evaluate a commercial
                  </SectionHeading>
                </div>
                <p className="mb-4">
                  A commercial property should never be evaluated on rental yield alone. Use this framework:
                </p>
                <p className="mb-6 rounded-sm border border-neutral-200/80 bg-white px-5 py-4 text-center text-[15px] font-semibold tracking-wide text-slate-800">
                  Purchase Price → Rental Income → Operating Costs → Net Income → Net Yield → Exit Potential
                </p>
                <p className="mb-4 font-semibold text-slate-900">Gross yield</p>
                <p className="mb-4">
                  A simplified calculation is: Annual Rental Income ÷ Purchase Price × 100. For example, a
                  property purchased for AED 4,000,000 generates AED 280,000 annual rent — a 7% gross yield.
                  However, this does not account for service charges, vacancy, maintenance, leasing costs,
                  brokerage and other operating expenses.
                </p>
                <p className="mb-7 font-semibold text-slate-900">Net yield</p>
                <p className="mb-7">
                  Net yield provides a more realistic view by considering relevant operating costs. For
                  first-time buyers, the focus should be on sustainable net income, not simply the highest
                  advertised yield.
                </p>

                <div className="mb-6">
                  <SectionHeading id="areas" accent="consider">
                    Top areas to
                  </SectionHeading>
                </div>
                <p className="mb-6">
                  Dubai has a diverse commercial real estate market. The right area depends on your property
                  type, budget, tenant profile and investment strategy.
                </p>
                <div className="space-y-4">
                  {topAreas.map((area) => (
                    <div
                      key={area.title}
                      className="border border-neutral-200/70 bg-white/50 px-5 py-5"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E31E24]">
                        {area.rank}
                      </p>
                      <p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">{area.title}</p>
                      {area.highlight ? (
                        <p className="mt-1 text-sm font-medium text-[#E31E24]">{area.highlight}</p>
                      ) : null}
                      <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{area.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <SectionHeading id="costs" accent="diligence">
                    Costs &amp;
                  </SectionHeading>
                </div>
                <p className="mb-6">
                  Commercial property should be evaluated using the all-in acquisition cost.
                </p>
                <div className="space-y-4">
                  {costItems.map((item) => (
                    <div
                      key={item.title}
                      className="border-l-2 border-[#E31E24] bg-white/50 py-1 pl-5"
                    >
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-slate-600">{item.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <SectionHeading id="tips" accent="buyers">
                    Top tips for first-time
                  </SectionHeading>
                </div>
                <ol className="space-y-4">
                  {buyerTips.map((tip, i) => (
                    <li
                      key={tip}
                      className="flex items-start gap-4 border border-neutral-200/60 bg-white/60 px-5 py-4"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center text-sm font-bold text-[#E31E24]"
                        style={{ boxShadow: `inset 0 0 0 1.5px ${ACCENT}` }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] leading-relaxed text-slate-700">{tip}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </article>

            <section id="faq" className="mt-20 scroll-mt-32 [overflow-anchor:none]">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
                Your questions answered
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Frequently asked <span className="text-[#E31E24]">questions</span>
              </h2>
              <div className="mt-4 flex items-center justify-between gap-6 border-b border-neutral-200 pb-6">
                <div className="h-px w-16 bg-[#E31E24]" aria-hidden />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">
                  {faqs.length} topics
                </span>
              </div>
              <div>
                {faqs.map((item, i) => (
                  <FAQItem
                    key={item.q}
                    question={item.q}
                    answer={item.a}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                  />
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 lg:self-start">
            <aside className="sticky top-28">
              <GuideSidebar />
            </aside>
          </div>
        </div>

        <section className="mt-24 border-t border-neutral-200 pt-16">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
            Keep reading
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Latest news &amp; <span className="text-[#E31E24]">updates</span>
          </h2>
          <div className="mt-4 h-px w-16 bg-[#E31E24]" aria-hidden />

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {latestUpdates.map((card) => (
              <article
                key={card.href}
                className="group overflow-hidden border border-neutral-200/80 bg-white transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.12)]"
              >
                <Link href={card.href} className="block">
                  <div className="relative aspect-[16/10] bg-neutral-200">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E31E24]">
                      {card.tag}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-slate-700">
                      {card.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E31E24]">
                      Read more
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
