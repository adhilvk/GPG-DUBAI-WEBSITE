"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const Records = () => {
  const data = [
    { name: '2022', value: 300, percentage: '14.3%', color: '#fca5a5' },
    { name: '2023', value: 500, percentage: '23.8%', color: '#991b1b' },
    { name: '2024', value: 750, percentage: '35.7%', color: '#7f1d1d' },
    { name: '2025', value: 550, percentage: '26.2%', color: '#E31E24' },
  ];

  return (
    <section className="bg-[#fcfcfc] pt-12 pb-24 px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Upper Header Section */}
        <div className="mb-20 text-center lg:text-left border-b border-gray-100 pb-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#E31E24] text-center font-bold tracking-[0.2em] text-sm uppercase mb-4"
          >
            Performance Overview
          </motion.p>
          <h2 style={{ fontFamily: "'serif', 'Times New Roman', serif" }} className="text-4xl text-center md:text-5xl font-bold text-slate-900 leading-tight">
            A Magical Milestone: <br />
            Sales Cross <span className="text-[#E31E24]">AED 2.1 Billion</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Left Column: The Interactive Visual */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-112.5 w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}   /* Donut Style */
                    outerRadius={140}
                    paddingAngle={8}    /* Spaced out segments */
                    dataKey="value"
                    stroke="none"
                    cornerRadius={6}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Central Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-slate-400 text-sm uppercase tracking-widest font-medium">Total Volume</span>
                <span className="text-4xl font-bold text-slate-900">AED 2.1B</span>
                <span className="text-[#E31E24] text-xs font-bold mt-1">2022 — 2025</span>
              </div>
            </div>

            {/* Legend Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {data.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs font-bold text-slate-500">{item.name}</span>
                  </div>
                  <p className="text-lg font-bold text-slate-900">{item.percentage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Institutional Content */}
          <div className="w-full lg:w-1/2 lg:pt-4">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
              OUR TRACK RECORD
            </h3>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Consistently exceeding expectations, our sales performance from 2022 to 2025 exemplifies 
                unparalleled success. Our record-breaking sales figures reflect our ability to adapt to 
                evolving market trends and seize new opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white p-6 rounded-2xl border-l-4 border-[#E31E24] shadow-sm">
                  <p className="text-3xl font-bold text-slate-900 mb-1">AED 2.1B+</p>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Gross Transaction Value</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border-l-4 border-slate-900 shadow-sm">
                  <p className="text-3xl font-bold text-slate-900 mb-1">4 Years</p>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Of Exponential Growth</p>
                </div>
              </div>

              <p className="pt-6 border-t border-gray-100">
                As a testament to our success, we've consistently outperformed industry standards, 
                solidifying our position as a leader in the global marketplace.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Records;