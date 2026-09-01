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
  { id: "yield", label: "Understanding yield" },
  { id: "net-income", label: "Gross vs net income" },
  { id: "areas", label: "Best rental corridors" },
  { id: "steps", label: "Maximising returns" },
  { id: "management", label: "Property management" },
  { id: "faq", label: "FAQs" },
];

const quickLinks = [
  { label: "Ready properties", href: "/ready-properties" },
  { label: "How to invest", href: "/HOWTOINVEST" },
  { label: "All guides", href: "/guides" },
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
        {accent && (
          <>
            {" "}
            <span className="text-[#E31E24]">{accent}</span>
          </>
        )}
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
    title: "How to Invest in Dubai Real Estate",
    href: "/HOWTOINVEST",
    image: "/images/prop2.jpg",
    category: "Guide",
  },
];

const yieldDrivers = [
  {
    title: "Gross rental yield",
    body: "Annual rent divided by purchase price — the headline figure used in marketing, but not your true return.",
  },
  {
    title: "Net operating income",
    body: "Rent less service charges, maintenance, vacancy allowance, and management fees — the basis for serious underwriting.",
  },
  {
    title: "Capital growth",
    body: "Many rental investors also target appreciation in high-liquidity corridors where tenant demand supports resale depth.",
  },
];

const rentalSteps = [
  {
    title: "Define your income mandate",
    body: "Set target net yield, hold period, and furnishing strategy before shortlisting communities or unit types.",
  },
  {
    title: "Select the right product",
    body: "Studios and one-beds often drive volume yields; larger units may suit family tenants with longer lease profiles.",
  },
  {
    title: "Underwrite all-in costs",
    body: "Include DLD fees, fit-out, Ejari, agency commission, service charges, and a vacancy buffer in your model.",
  },
  {
    title: "Prepare for handover",
    body: "Snagging, DEWA connection, furnishing, and professional photography materially affect time-to-let and achievable rent.",
  },
  {
    title: "Market and lease professionally",
    body: "Licensed management, compliant tenancy contracts, and realistic pricing reduce void periods and tenant churn.",
  },
];

const managementTips = [
  {
    bold: "Use RERA-registered agents",
    text: "Property management should be handled by licensed operators who issue compliant tenancy documentation.",
  },
  {
    bold: "Budget for service charges",
    text: "Community fees can materially compress net yield — verify current and projected charges before acquisition.",
  },
  {
    bold: "Plan furnishing carefully",
    text: "Furnished units can command premium rents but add capex and depreciation; model payback periods explicitly.",
  },
  {
    bold: "Review rents annually",
    text: "Market rents move with supply and seasonality; institutional landlords benchmark against live comparables each cycle.",
  },
];

const faqs = [
  {
    q: "What is a good rental yield in Dubai?",
    a: "Yields vary by product and corridor — apartments in high-liquidity districts often benchmark differently from villas or off-plan pre-handover assets. Model net yield after service charges, vacancy, and management rather than gross marketing figures.",
  },
  {
    q: "Is ready or off-plan better for rental income?",
    a: "Ready stock delivers immediate lettability and tangible inspection. Off-plan can offer payment-plan efficiency but defers income until handover. Many investors blend both based on cash-flow timing and portfolio goals.",
  },
  {
    q: "What costs reduce net rental yield?",
    a: "Service charges, maintenance, furnishing, agency fees, vacancy periods, and Ejari or utility setup all reduce headline yield. Underwrite on a net basis from day one.",
  },
  {
    q: "Can foreigners earn rental income in Dubai?",
    a: "Foreign nationals can own freehold property in designated zones and lease units to tenants subject to standard RERA and DLD processes. Engage licensed representation for registration and tenancy compliance.",
  },
];

const latestUpdates = [
  {
    title: "How to Invest in Dubai Real Estate",
    href: "/HOWTOINVEST",
    image: "/images/prop2.jpg",
    tag: "Guides",
  },
  {
    title: "How to Buy Off-Plan Property in Dubai",
    href: "/HOWTOBUYOFFPLAN",
    image: "/images/heightsbyemaar.webp",
    tag: "Guides",
  },
  {
    title: "Browse Ready Properties",
    href: "/ready-properties",
    image: "/images/palmcentral.jpg",
    tag: "Properties",
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
                    alt={a.title}
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
          Building a rental portfolio? We model net yield across{" "}
          <span className="text-[#E31E24]">Dubai&apos;s key corridors.</span>
        </p>
        <Link
          href="/contact-us"
          className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E31E24] transition-all hover:gap-3"
        >
          Speak with an adviser
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
        <Link href="/ready-properties" className="group block">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200">
            <Image
              src="/images/Riverside.jpg"
              alt="Ready properties in Dubai"
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
                Ready <span className="text-[#E31E24]">properties</span>
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
          { icon: FileText, label: "Ejari compliant" },
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

export default function HowToRentalGuide() {
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
          <span className="text-[#E31E24]">Rental Yield</span>
        </nav>

        <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-8">
            <article>
              <header className="mb-12">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
                  Investor guide
                </p>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Dubai Rental Yield Guide for{" "}
                  <span className="text-[#E31E24]">Property Investors</span>
                </h1>
                <div className="mt-4 h-px w-16 bg-[#E31E24]" aria-hidden />

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-slate-500">
                  <time dateTime="2024-08-15" className="font-medium tracking-wide">
                    August 15, 2024
                  </time>
                  <span className="hidden h-3 w-px bg-neutral-300 sm:block" aria-hidden />
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-neutral-400" />
                    6 min read
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
                    src="/images/Riverside.jpg"
                    alt="Dubai residential community"
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
                    R
                  </span>
                  ental income remains one of the most tangible return drivers for Dubai property investors.
                  Whether you are acquiring ready stock for immediate lettability or positioning for
                  post-handover income, disciplined yield underwriting separates sustainable portfolios
                  from marketing-driven decisions.
                </p>
                <p className="mb-7">
                  This guide explains how to evaluate gross and net rental yields, identify corridors
                  with strong tenant demand, and manage properties for consistent occupancy and compliant
                  tenancy operations.
                </p>

                <div className="mb-6">
                  <SectionHeading id="yield" accent="yield">
                    Understanding rental
                  </SectionHeading>
                </div>
                <p className="mb-4">
                  Rental yield is the relationship between annual rent and capital deployed. In Dubai,
                  headline gross yields are widely quoted — but institutional investors underwrite on a
                  net basis after operating costs, vacancy, and fit-out economics.
                </p>
                <ul className="mt-2 space-y-5">
                  {yieldDrivers.map((item) => (
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

                <div className="mb-6">
                  <SectionHeading id="net-income" accent="net income">
                    Gross vs
                  </SectionHeading>
                </div>
                <p className="mb-6">
                  A property marketed at 7% gross may deliver materially less on a net basis once service
                  charges, maintenance, and void periods are applied. Build your model with conservative
                  assumptions before committing capital.
                </p>
                <div className="overflow-x-auto rounded-sm border border-neutral-200/90 bg-white shadow-sm">
                  <table className="w-full min-w-[480px] border-collapse text-left text-[15px]">
                    <thead>
                      <tr className="bg-neutral-50">
                        <th className="border-b border-neutral-200 px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
                          Cost item
                        </th>
                        <th className="border-b border-neutral-200 px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
                          Impact on yield
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { item: "Service charges", impact: "Recurring annual deduction from gross rent" },
                        { item: "Agency / management fees", impact: "Typically 5% of rent or fixed monthly fee" },
                        { item: "Vacancy allowance", impact: "Budget 2–4 weeks per year in most corridors" },
                        { item: "Furnishing & maintenance", impact: "Upfront capex plus ongoing refresh cycles" },
                        { item: "Ejari & utilities", impact: "Registration and DEWA setup at lease commencement" },
                      ].map((row, i) => (
                        <tr
                          key={row.item}
                          className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/40"}
                        >
                          <td className="border-b border-neutral-100 px-5 py-4 font-semibold text-slate-900">
                            {row.item}
                          </td>
                          <td className="border-b border-neutral-100 px-5 py-4 text-slate-600">
                            {row.impact}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mb-6">
                  <SectionHeading id="areas" accent="corridors">
                    Best rental
                  </SectionHeading>
                </div>
                <p className="mb-6">
                  Corridor selection should match tenant profile and unit type. The areas below are
                  illustrative benchmarks — validate against live comparables before acquisition.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      area: "Dubai Marina & JBR",
                      detail: "Strong expat tenant pool, high liquidity, premium rents on waterfront stock.",
                    },
                    {
                      area: "Business Bay & Downtown",
                      detail: "Corporate professionals, furnished demand, proximity to business districts.",
                    },
                    {
                      area: "JVC & Dubailand",
                      detail: "Value apartments with volume-driven yields and broad tenant affordability.",
                    },
                    {
                      area: "Dubai Hills & Arabian Ranches",
                      detail: "Family villas with longer lease profiles and end-user depth.",
                    },
                  ].map((item) => (
                    <div
                      key={item.area}
                      className="border border-neutral-200/70 bg-white/50 px-5 py-4 transition-colors hover:border-neutral-300"
                    >
                      <p className="text-base font-semibold tracking-tight text-slate-900">{item.area}</p>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <SectionHeading id="steps" accent="returns">
                    Maximising rental
                  </SectionHeading>
                </div>
                <ol className="relative mt-2 space-y-0 pl-0">
                  <div
                    className="absolute bottom-6 left-[22px] top-6 hidden w-px sm:block"
                    style={{ background: `linear-gradient(to bottom, ${ACCENT}44, ${ACCENT}11)` }}
                    aria-hidden
                  />
                  {rentalSteps.map((step, i) => (
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
                  <SectionHeading id="management" accent="management">
                    Property
                  </SectionHeading>
                </div>
                <ul className="space-y-4">
                  {managementTips.map((tip) => (
                    <li
                      key={tip.bold}
                      className="flex items-start gap-4 border-l-2 border-[#E31E24] pl-5"
                    >
                      <span className="text-[15px] leading-relaxed text-slate-700">
                        <strong className="font-semibold text-slate-900">{tip.bold}</strong>
                        {" — "}
                        {tip.text}
                      </span>
                    </li>
                  ))}
                </ul>
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
                      alt={card.title}
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
