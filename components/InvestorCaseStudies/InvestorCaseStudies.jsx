"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const portfolioCases = [
  {
    project: "Opal Gardens",
    location: "MBR City",
    type: "Villas",
    year: "2023",
    units: "2",
    purchase: "AED 18.3M",
    downPaymentLabel: "Down Payment 10%",
    downPayment: "AED 1.83M",
    soldLabel: "Sold within 1 year for",
    sold: "AED 21.4M",
    roe: "169% ROE",
  },
  {
    project: "District One Phase 3",
    location: "MBR City",
    type: "Villas",
    year: "2023",
    units: "2",
    purchase: "AED 40M",
    downPaymentLabel: "Down Payment 67.5%",
    downPayment: "AED 27M",
    soldLabel: "Sold within 3 months for",
    sold: "AED 46M",
    roe: "22% ROE",
  },
  {
    project: "District One West",
    location: "MBR City",
    type: "Villas",
    year: "2023",
    units: "2",
    purchase: "AED 15.4M",
    downPaymentLabel: "Down Payment 20%",
    downPayment: "AED 3.56M",
    soldLabel: "Sold within 1 year for",
    sold: "AED 21M",
    roe: "157% ROE",
  },
  {
    project: "Six Senses Residences",
    location: "The Palm",
    type: "Penthouse",
    year: "2024",
    units: "1",
    purchase: "AED 46.8M",
    downPaymentLabel: "Down Payment 40%",
    downPayment: "AED 18.72M",
    soldLabel: "Sold within 1 year for",
    sold: "AED 56M",
    roe: "49% ROE",
  },
  {
    project: "Golf Place 2",
    type: "Villa",
    year: "2024",
    units: "1",
    purchase: "AED 19.9M",
    downPaymentLabel: "Down Payment 50%",
    downPayment: "AED 9.98M",
    soldLabel: "Sold within 9 months for",
    sold: "AED 36M",
    roe: "161% ROE",
  },
  {
    project: "Majestic Vistas",
    type: "Villa",
    year: "2024",
    units: "1",
    purchase: "AED 26.7M",
    downPaymentLabel: "Down Payment 70%",
    downPayment: "AED 18.7M",
    soldLabel: "Sold within 1 year for",
    sold: "AED 40M",
    roe: "71% ROE",
  },
  {
    project: "IXORA",
    location: "Al Barari",
    type: "Townhouses",
    year: "2022",
    units: "2",
    purchase: "AED 5.18M",
    downPaymentLabel: "Down Payment 5%",
    downPayment: "AED 259,000",
    soldLabel: "Sold within 6 months for",
    sold: "AED 6M",
    roe: "316% ROE",
  },
  {
    project: "Falcon Island",
    location: "Ras Al Khaimah",
    type: "Townhouses",
    year: "2022",
    units: "5",
    purchase: "AED 9.5M",
    downPaymentLabel: "Down Payment 20%",
    downPayment: "AED 1.9M",
    soldLabel: "Sold within 8 months for",
    sold: "AED 11.4M",
    roe: "100% ROE",
  },
  {
    project: "Elie Saab",
    location: "Emaar Beachfront",
    type: "Apartments",
    year: "2022",
    units: "2",
    purchase: "AED 4M",
    downPaymentLabel: "Down Payment 50%",
    downPayment: "AED 2M",
    soldLabel: "Sold within 6 months for",
    sold: "AED 5.4M",
    roe: "70% ROE",
  },
];

function studyRows(study) {
  return [
    study.year && { label: "Transaction Year", value: study.year },
    study.units && { label: "No. of units", value: study.units },
  ].filter(Boolean);
}

function DataRow({ label, value, last = false }) {
  return (
    <div className={`flex items-center justify-between gap-4 ${last ? "" : "border-b border-slate-50 pb-2"}`}>
      <span className="text-slate-400 text-sm">{label}</span>
      <span className="text-slate-900 font-semibold text-sm text-right whitespace-nowrap">
        {value}
      </span>
    </div>
  );
}

function CaseStudyCard({ study, idx, extraRows = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group h-full flex flex-col"
    >
      <div className="mb-6">
        <p className="mb-1 min-h-[1rem] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E31E24]">
          {study.location || "\u00A0"}
        </p>
        <div className="flex items-start justify-between gap-3 min-h-[3.75rem]">
          <h4 className="text-2xl font-bold text-slate-900 leading-tight">
            {study.project.replace("Project: ", "")}
          </h4>
          <ArrowUpRight
            size={28}
            strokeWidth={2}
            className="text-[#E31E24] opacity-30 group-hover:opacity-50 shrink-0 translate-y-0.5"
            aria-hidden
          />
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-1">
        <DataRow label="Property Type" value={study.type} />
        {extraRows.map((row) => (
          <DataRow key={row.label} label={row.label} value={row.value} />
        ))}
        <DataRow label="Purchase Price" value={study.purchase} />
        {study.downPayment && (
          <DataRow label={study.downPaymentLabel} value={study.downPayment} />
        )}
        <DataRow
          label={study.soldLabel || "Resale Price"}
          value={study.sold}
          last={!study.duration}
        />
        {study.duration && (
          <DataRow label="Exit Duration" value={study.duration} last />
        )}
      </div>

      <div className="mt-auto bg-[#E31E24] rounded-2xl p-4 flex items-center justify-between">
        <span className="text-white/80 text-xs font-bold uppercase tracking-wider">
          Yield Performance
        </span>
        <span className="text-xl font-black text-white">{study.roe}</span>
      </div>
    </motion.div>
  );
}

const featuredCases = portfolioCases.slice(0, 3);
const expandedCases = portfolioCases.slice(3);

const InvestorCaseStudies = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <section className="bg-[#fcfcfc] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Case Studies"
          title="Our investors"
          accent="success stories"
          subtitle="GPG has generated exceptional returns for its clients from 30% to 350% per annum"
          className="!mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCases.map((study, idx) => (
            <CaseStudyCard
              key={study.project}
              study={study}
              idx={idx}
              extraRows={studyRows(study)}
            />
          ))}
        </div>

        <AnimatePresence initial={false}>
          {showPortfolio && (
            <motion.div
              id="full-investment-portfolio"
              key="full-investment-portfolio"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {expandedCases.map((study, idx) => (
                  <CaseStudyCard
                    key={study.project}
                    study={study}
                    idx={idx}
                    extraRows={studyRows(study)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 text-center">
          <button
            type="button"
            aria-expanded={showPortfolio}
            aria-controls="full-investment-portfolio"
            onClick={() => setShowPortfolio((open) => !open)}
            className="bg-[#E31E24] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#c81b20] transition-colors shadow-lg shadow-red-100"
          >
            {showPortfolio ? "Show Less" : "View Full Investment Portfolio"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestorCaseStudies;
