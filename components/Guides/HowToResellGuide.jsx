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
  { id: "eligibility", label: "Pre-sale eligibility" },
  { id: "assignment", label: "The assignment sale" },
  { id: "fees", label: "Resale costs & fees" },
  { id: "strategy", label: "Strategic advice" },
  { id: "faq", label: "FAQs" },
];

const quickLinks = [
  { label: "How to buy off-plan", href: "/HOWTOBUYOFFPLAN" },
  { label: "Trending projects", href: "/trending-projects" },
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
    title: "How to Invest in Dubai Real Estate",
    href: "/HOWTOINVEST",
    image: "/images/prop2.jpg",
    category: "Guide",
  },
  {
    title: "Off Plan Properties in Dubai: A Beginner's Guide",
    href: "/guides",
    image: "/images/heightsbyemaar.webp",
    category: "Guide",
  },
];

const feeRows = [
  {
    type: "Developer NOC Fee",
    description: "Administrative charge for developer approval of the assignment.",
    responsibility: "Seller",
  },
  {
    type: "DLD Transfer Fee",
    description: "Typically 4% of the sale value, plus administrative charges.",
    responsibility: "Buyer / negotiable",
  },
  {
    type: "Trustee Office Fee",
    description: "Registration and documentation at the trustee office.",
    responsibility: "Buyer / negotiable",
  },
  {
    type: "Agency Commission",
    description: "Brokerage fee for marketing and transaction coordination.",
    responsibility: "Seller (standard)",
  },
  {
    type: "Outstanding Service Charges",
    description: "Any unpaid community or building service charges.",
    responsibility: "Seller",
  },
];

const assignmentSteps = [
  {
    title: "Finding a buyer",
    body: "List through a licensed broker with comparable evidence, clear payment status, and realistic pricing. Qualified buyers should confirm financing or cash capacity before booking.",
  },
  {
    title: "Obtaining NOC",
    body: "The developer issues a No Objection Certificate once instalments and any penalties are settled. Timelines vary by developer and project phase—plan two to four weeks in many cases.",
  },
  {
    title: "Final transfer",
    body: "Buyer and seller attend the trustee office (or authorised channel) to execute the assignment, pay DLD fees, and register the new interest on the unit.",
  },
];

const strategicTips = [
  {
    bold: "Time the market cycle",
    text: "Resale pricing should reflect construction progress, comparable ready-stock pressure, and corridor liquidity—not only your entry basis.",
  },
  {
    bold: "Document payment history",
    text: "Keep receipts, escrow confirmations, and SPA schedules organised; buyers and developers will request a clean audit trail.",
  },
  {
    bold: "Price for net proceeds",
    text: "Model NOC, DLD, commission, and any seller penalties before marketing so your walk-away number is realistic.",
  },
  {
    bold: "Use institutional representation",
    text: "A regulated broker aligns marketing, NOC coordination, and trustee appointments to reduce delay and contractual risk.",
  },
];

const faqs = [
  {
    q: "When can I resell my off-plan unit in Dubai?",
    a: "Most developers permit assignment after a minimum paid percentage—often around 40% of the purchase price—subject to SPA terms and project rules. Always confirm eligibility with the developer before listing.",
  },
  {
    q: "What is an assignment sale?",
    a: "An assignment transfers your contractual rights in the SPA to a new buyer before handover. It is not a completed property sale in the secondary ready market; DLD processes assignment-specific documentation and fees.",
  },
  {
    q: "Who pays the 4% DLD fee on an assignment?",
    a: "Responsibility is negotiable between buyer and seller, though market practice often places transfer costs on the incoming buyer. Document the split clearly in the Form F / MOU framework your broker prepares.",
  },
  {
    q: "Can I resell if I still owe instalments?",
    a: "Outstanding balances must typically be current or settled as part of the NOC process. Developers may block assignment until arrears and NOC fees are cleared.",
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
    title: "How to Invest in Dubai Real Estate",
    href: "/HOWTOINVEST",
    image: "/images/grandpolo.webp",
    tag: "Guides",
  },
  {
    title: "Explore Luxury Properties",
    href: "/luxury-properties",
    image: "/images/prop2.jpg",
    tag: "Properties",
  },
];

const eligibilityItems = [
  {
    title: "SPA review",
    body: "Verify assignment clauses, penalties, and marketing restrictions in your sale contract.",
  },
  {
    title: "Payment status",
    body: "Align escrow receipts with developer statements; arrears will delay or block NOC issuance.",
  },
  {
    title: "Mortgage registration",
    body: "If a liability is registered, coordinate with your bank on release or buyer assumption before transfer.",
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
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-30"
          style={{ background: `radial-gradient(circle, ${ACCENT_SOFT}, transparent 70%)` }}
          aria-hidden
        />
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
          GPG Advisory
        </p>
        <p className="mt-4 text-xl font-semibold leading-snug tracking-tight text-slate-900">
          Planning an off-plan exit? We structure assignments with{" "}
          <span className="text-[#E31E24]">transparency on fees and timing.</span>
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
        <Link href="/luxury-properties" className="group block">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200">
            <Image
              src="/images/grandpolo.webp"
              alt="Luxury properties in Dubai"
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
                Luxury <span className="text-[#E31E24]">properties</span>
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
          { icon: FileText, label: "Escrow protected" },
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

export default function HowToResellGuide() {
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
          <span className="text-[#E31E24]">How to Resell</span>
        </nav>

        <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-8">
            <article>
              <header className="mb-12">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
                  Investor guide
                </p>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Guide to Reselling Off-Plan Property in{" "}
                  <span className="text-[#E31E24]">Dubai</span>
                </h1>
                <div className="mt-4 h-px w-16 bg-[#E31E24]" aria-hidden />

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-slate-500">
                  <time dateTime="2024-06-12" className="font-medium tracking-wide">
                    June 12, 2024
                  </time>
                  <span className="hidden h-3 w-px bg-neutral-300 sm:block" aria-hidden />
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-neutral-400" />
                    7 min read
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
                    src="/images/grandpolo.webp"
                    alt="Modern luxury villa in Dubai"
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
                  eselling off-plan inventory before handover is a core liquidity strategy in Dubai. Whether
                  you are crystallising gains or reallocating capital, the assignment pathway demands
                  disciplined eligibility checks, developer compliance, and transparent cost modelling.
                </p>
                <p className="mb-7">
                  This guide outlines pre-sale requirements, the assignment workflow, typical fees, and
                  strategic considerations so you can exit with clarity and institutional-grade execution.
                </p>

                <div className="mb-6">
                  <SectionHeading id="eligibility" accent="eligibility">
                    Pre-sale
                  </SectionHeading>
                </div>
                <p className="mb-4">
                  Before marketing your unit, confirm that your position satisfies developer and contractual
                  thresholds. Most master developers require a minimum percentage of the purchase price to be
                  paid—commonly in the region of 40%—together with cleared instalments and an account in good
                  standing.
                </p>
                <ul className="mt-2 space-y-5">
                  {eligibilityItems.map((item) => (
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
                  <SectionHeading id="assignment" accent="sale">
                    The assignment
                  </SectionHeading>
                </div>
                <p className="mb-8">
                  An assignment transfers your rights under the original SPA to a new purchaser. The sequence
                  below is the institutional standard used across Dubai&apos;s regulated developments.
                </p>
                <ol className="relative mt-2 space-y-0 pl-0">
                  <div
                    className="absolute bottom-6 left-[22px] top-6 hidden w-px sm:block"
                    style={{ background: `linear-gradient(to bottom, ${ACCENT}44, ${ACCENT}11)` }}
                    aria-hidden
                  />
                  {assignmentSteps.map((step, i) => (
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
                  <SectionHeading id="fees" accent="fees">
                    Resale costs and
                  </SectionHeading>
                </div>
                <p className="mb-6">
                  Net proceeds depend on more than headline sale price. Use this summary as a planning baseline;
                  confirm live tariffs with your broker and trustee office before signing.
                </p>
                <div className="overflow-x-auto rounded-sm border border-neutral-200/90 bg-white shadow-sm">
                  <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
                    <thead>
                      <tr className="bg-neutral-50">
                        <th className="border-b border-neutral-200 px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
                          Fee type
                        </th>
                        <th className="border-b border-neutral-200 px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
                          Description
                        </th>
                        <th className="border-b border-neutral-200 px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
                          Responsibility
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeRows.map((row, i) => (
                        <tr
                          key={row.type}
                          className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/40"}
                        >
                          <td className="border-b border-neutral-100 px-5 py-4 font-semibold text-slate-900">
                            {row.type}
                          </td>
                          <td className="border-b border-neutral-100 px-5 py-4 text-slate-600">
                            {row.description}
                          </td>
                          <td className="border-b border-neutral-100 px-5 py-4 font-medium text-[#E31E24]">
                            {row.responsibility}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mb-6">
                  <SectionHeading id="strategy" accent="advice">
                    Strategic
                  </SectionHeading>
                </div>
                <ul className="space-y-4">
                  {strategicTips.map((tip) => (
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
