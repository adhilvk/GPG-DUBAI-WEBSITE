"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const InvestorCaseStudies = () => {
  const cases = [
    {
      project: "Project: IXORA",
      location: "Al Barari",
      type: "Townhouses",
      purchase: "AED 5.18M",
      sold: "AED 6M",
      duration: "6 months",
      roe: "316% ROE",
    },
    {
      project: "Project: Falcon Island",
      location: "Ras Al Khaimah",
      type: "Townhouses",
      purchase: "AED 9.5M",
      sold: "AED 11.4M",
      duration: "8 months",
      roe: "100% ROE",
    },
    {
      project: "Project: Elie Saab",
      location: "Emaar Beachfront",
      type: "Apartments",
      purchase: "AED 4M",
      sold: "AED 5.4M",
      duration: "6 months",
      roe: "70% ROE",
    }
  ];

  return (
    <section className="bg-[#fcfcfc] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <SectionHeader
          eyebrow="Investor Success"
          title="Case Studies for"
          accent="Investors"
          subtitle="GPG has generated high returns for its investors from 30% to 350% p.a."
          className="!mb-16"
        />

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ArrowUpRight size={80} className="text-[#E31E24]" />
              </div>

              <div className="relative z-10">
                <h3 className="text-[#E31E24] font-bold text-xs tracking-widest uppercase mb-1">
                  {study.location}
                </h3>
                <h4 className="text-2xl font-bold text-slate-900 mb-6">{study.project.replace('Project: ', '')}</h4>
                
                {/* Data Points */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-slate-400 text-sm">Property Type</span>
                    <span className="text-slate-900 font-semibold text-sm">{study.type}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-slate-400 text-sm">Purchase Price</span>
                    <span className="text-slate-900 font-semibold text-sm">{study.purchase}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-slate-400 text-sm">Resale Price</span>
                    <span className="text-slate-900 font-semibold text-sm">{study.sold}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 text-sm">Exit Duration</span>
                    <span className="text-slate-900 font-semibold text-sm">{study.duration}</span>
                  </div>
                </div>

                {/* ROE Callout */}
                <div className="bg-[#E31E24] rounded-2xl p-4 flex items-center justify-between  transition-colors duration-500">
                  <span className="text-white/80 text-xs font-bold uppercase tracking-wider transition-colors">Yield Performance</span>
                  <span className=" text-xl font-black text-white transition-colors">{study.roe}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <button className="bg-[#E31E24] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#c81b20] transition-colors shadow-lg shadow-red-100">
            View Full Investment Portfolio
          </button>
        </div>

      </div>
    </section>
  );
};

export default InvestorCaseStudies;