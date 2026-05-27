"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const ACCENT = "#C8102E";
const ACCENT_SOFT = "#C8102E15";

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="border border-neutral-200/80 bg-neutral-50/50 rounded-xl overflow-hidden transition-shadow"
      style={{ boxShadow: isOpen ? `0 0 0 1px ${ACCENT_SOFT}` : undefined }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-white/80 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-medium tracking-wide text-neutral-900 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          style={{ color: isOpen ? ACCENT : undefined }}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-0 text-[15px] leading-relaxed text-neutral-600 border-t border-neutral-100 bg-white">
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

const recentArticles = [
  {
    title: "How to Buy Off-Plan Property in Dubai",
    href: "/HOWTOBUYOFFPLAN",
    image: "/images/palmcentral.jpg",
  },
  {
    title: "How to Invest in Dubai Real Estate",
    href: "/HOWTOINVEST",
    image: "/images/prop2.jpg",
  },
  {
    title: "Off Plan Properties in Dubai: A Beginner's Guide",
    href: "/guides",
    image: "/images/heightsbyemaar.webp",
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

export default function HowToResellGuide() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-white text-neutral-900">
      <div className="h-[3px] w-full" style={{ backgroundColor: ACCENT }} aria-hidden />

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 md:pb-28">
        <nav className="mb-12 text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
          <Link href="/" className="hover:text-neutral-600 transition-colors">
            Home
          </Link>
          <span className="mx-2 text-neutral-300">/</span>
          <Link href="/guides" className="hover:text-neutral-600 transition-colors">
            Guides
          </Link>
          <span className="mx-2 text-neutral-300">/</span>
          <span style={{ color: ACCENT }}>How to Resell</span>
        </nav>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <article className="lg:col-span-8">
            <header className="mb-10">
              <p
                className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em]"
                style={{ color: ACCENT }}
              >
                Investor guide
              </p>
              <h1 className="font-serif text-[2.15rem] font-normal leading-[1.15] tracking-tight text-neutral-950 sm:text-5xl sm:leading-[1.1]">
                Guide to Reselling Off-Plan Property in Dubai
              </h1>
              <time
                dateTime="2024-06-12"
                className="mt-6 block text-sm font-medium tracking-wide text-neutral-500"
              >
                June 12, 2024
              </time>
            </header>

            <div className="relative mb-12 aspect-[21/9] min-h-[200px] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/grandpolo.webp"
                alt="Modern luxury villa in Dubai"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT} 0%, transparent 55%)`,
                }}
              />
            </div>

            <div className="max-w-none font-serif text-[17px] leading-[1.75] text-neutral-700">
              <p className="text-lg leading-relaxed text-neutral-800">
                <span className="font-serif font-normal" style={{ color: ACCENT }}>
                  Reselling{" "}
                </span>
                off-plan inventory before handover is a core liquidity strategy in Dubai. Whether you are
                crystallising gains or reallocating capital, the assignment pathway demands disciplined
                eligibility checks, developer compliance, and transparent cost modelling.
              </p>
              <p className="mb-6">
                This guide outlines pre-sale requirements, the assignment workflow, typical fees, and
                strategic considerations so you can exit with clarity and institutional-grade execution.
              </p>

              <h2 className="mt-14 mb-4 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Section I — Pre-sale eligibility
                </span>
              </h2>
              <p className="mb-4">
                Before marketing your unit, confirm that your position satisfies developer and contractual
                thresholds. Most master developers require a minimum percentage of the purchase price to be
                paid—commonly in the region of 40%—together with cleared instalments and an account in good
                standing.
              </p>
              <ul className="list-none space-y-4 pl-0 mb-6">
                <li className="flex gap-4">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">SPA review</strong> — Verify
                    assignment clauses, penalties, and marketing restrictions in your sale contract.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">Payment status</strong> — Align
                    escrow receipts with developer statements; arrears will delay or block NOC issuance.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full ring-4 ring-white"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>
                    <strong className="font-semibold text-neutral-900">Mortgage registration</strong> — If
                    a liability is registered, coordinate with your bank on release or buyer assumption before
                    transfer.
                  </span>
                </li>
              </ul>

              <h2 className="mt-14 mb-6 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Section II — The assignment sale
                </span>
              </h2>
              <p className="mb-8">
                An assignment transfers your rights under the original SPA to a new purchaser. The sequence
                below is the institutional standard used across Dubai&apos;s regulated developments.
              </p>
              <ol className="list-none space-y-8 pl-0">
                {assignmentSteps.map((step, i) => (
                  <li key={step.title} className="flex gap-6">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 bg-white font-serif text-lg text-neutral-900 shadow-sm"
                      style={{ borderColor: ACCENT }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="mb-2 text-xl text-neutral-950">{step.title}</h3>
                      <p className="m-0 text-neutral-700">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <h2 className="mt-14 mb-6 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Section III — Resale costs and fees
                </span>
              </h2>
              <p className="mb-6">
                Net proceeds depend on more than headline sale price. Use this summary as a planning baseline;
                confirm live tariffs with your broker and trustee office before signing.
              </p>
              <div className="overflow-x-auto rounded-xl border border-neutral-200/90 shadow-sm">
                <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
                  <thead>
                    <tr className="bg-neutral-50">
                      <th
                        className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 border-b border-neutral-200"
                        style={{ borderBottomColor: `${ACCENT}33` }}
                      >
                        Fee type
                      </th>
                      <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 border-b border-neutral-200">
                        Description
                      </th>
                      <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 border-b border-neutral-200">
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
                        <td className="px-5 py-4 font-semibold text-neutral-900 border-b border-neutral-100">
                          {row.type}
                        </td>
                        <td className="px-5 py-4 text-neutral-600 border-b border-neutral-100">
                          {row.description}
                        </td>
                        <td
                          className="px-5 py-4 font-medium border-b border-neutral-100"
                          style={{ color: ACCENT }}
                        >
                          {row.responsibility}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="mt-14 mb-6 text-2xl text-neutral-950 scroll-mt-28">
                <span className="border-l-[3px] pl-5" style={{ borderColor: ACCENT }}>
                  Section IV — Strategic advice
                </span>
              </h2>
              <ul className="space-y-5">
                {strategicTips.map((tip) => (
                  <li key={tip.bold} className="flex items-start gap-3">
                    <span style={{ color: ACCENT }} className="mt-2 font-serif text-lg leading-none">
                      ◆
                    </span>
                    <span>
                      <strong className="font-semibold text-neutral-900">{tip.bold}</strong>
                      {" — "}
                      {tip.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <section className="mt-16 border-t border-neutral-100 pt-16">
              <h2 className="font-serif text-3xl tracking-tight text-neutral-950 mb-8">
                Frequently asked questions
              </h2>
              <div className="flex flex-col gap-3">
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

            <section className="mt-16 rounded-2xl border border-neutral-100 bg-neutral-50/80 px-8 py-12 text-center">
              <h2 className="font-serif text-2xl text-neutral-950">Still have questions?</h2>
              <p className="mt-3 text-neutral-600 max-w-md mx-auto text-base">
                Our advisers can review your SPA, model net exit proceeds, and coordinate NOC and trustee
                appointments.
              </p>
              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center justify-center px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: ACCENT }}
              >
                Contact us
              </Link>
            </section>
          </article>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-10">
              <div>
                <h2
                  className="mb-8 border-b pb-4 font-serif text-2xl font-normal tracking-tight text-neutral-950"
                  style={{ borderBottomColor: `${ACCENT}33` }}
                >
                  Recent articles
                </h2>
                <ul className="space-y-8">
                  {recentArticles.map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        className="group flex gap-4 rounded-xl outline-none ring-offset-2 ring-offset-white transition-colors hover:bg-neutral-50 p-2 -m-2 focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                      >
                        <div className="relative h-24 w-[5.75rem] shrink-0 overflow-hidden rounded-lg bg-neutral-100 shadow-inner">
                          <Image
                            src={a.image}
                            alt=""
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="120px"
                          />
                        </div>
                        <div className="min-w-0 flex-1 pt-0.5">
                          <span
                            className="text-[13px] font-semibold uppercase tracking-wider"
                            style={{ color: ACCENT }}
                          >
                            Guide
                          </span>
                          <p
                            className="mt-1 line-clamp-3 font-serif text-base leading-snug text-neutral-900 group-hover:underline decoration-2 underline-offset-4"
                            style={{ textDecorationColor: ACCENT }}
                          >
                            {a.title}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl border px-8 py-10 font-serif shadow-[0_20px_50px_-24px_rgba(200,16,46,0.35)] bg-gradient-to-br from-neutral-50 to-white"
                style={{ borderColor: `${ACCENT}44` }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
                  GPG
                </p>
                <p className="mt-4 text-xl leading-snug text-neutral-900">
                  Planning an off-plan exit? We structure assignments with transparency on fees and timing.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-8 inline-flex items-center justify-center rounded-none border-b-2 border-transparent pb-1 text-[11px] font-bold uppercase tracking-[0.35em] text-neutral-950 transition-colors hover:border-current"
                  style={{ borderBottomColor: ACCENT, color: ACCENT }}
                >
                  Speak with an adviser →
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Latest updates — full width below article grid */}
        <section className="mt-20 border-t border-neutral-100 pt-16">
          <h2 className="font-serif text-3xl tracking-tight text-neutral-950 mb-10 text-center md:text-left">
            Latest news &amp; updates
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {latestUpdates.map((card) => (
              <article
                key={card.href}
                className="group overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50/50 shadow-sm transition-shadow hover:shadow-md"
              >
                <Link href={card.href} className="block">
                  <div className="relative aspect-[16/10] bg-neutral-200">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.25em]"
                      style={{ color: ACCENT }}
                    >
                      {card.tag}
                    </span>
                    <h3 className="mt-2 font-serif text-lg leading-snug text-neutral-900 group-hover:underline decoration-2 underline-offset-4">
                      {card.title}
                    </h3>
                    <span
                      className="mt-4 inline-block text-[11px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: ACCENT }}
                    >
                      Read more →
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
