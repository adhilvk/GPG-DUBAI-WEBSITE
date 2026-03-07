"use client";
import { motion } from 'framer-motion';

const TrackRecord = () => {
  // Data from your provided chart
  const stats = [
    { year: "2022", amount: "300M", percentage: "14.3%", color: "#fca5a5" }, 
    { year: "2023", amount: "500M", percentage: "23.8%", color: "#f87171" },
    { year: "2024", amount: "750M", percentage: "35.7%", color: "#ef4444" },
    { year: "2025", amount: "550M", percentage: "26.2%", color: "#b91c1c" }, 
  ];

  return (
    <section className="bg-white py-24 px-6 relative">
      {/* Top White Line */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-slate-300 z-10"></div>      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 style={{ fontFamily: "'serif', 'Times New Roman', serif" }} className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
            A Magical Milestone
          </h2>
          <p className="text-xl md:text-2xl text-red-600 font-semibold uppercase">
            Sales Impressively Cross AED 2.1 Billion in just 4 years!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual Data Representation */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-slate-100 rounded-2xl bg-slate-50 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <span className="text-slate-500 text-sm font-medium mb-1">{item.year}</span>
                <span className="text-3xl font-bold text-slate-900">AED {item.amount}</span>
                <div 
                  className="mt-2 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.percentage}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Professional Copy */}
          <div className="space-y-6">
            <h3 style={{ fontFamily: "'serif', 'Times New Roman', serif" }} className="text-3xl font-bold text-slate-900">
              Our Track Record
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Consistently exceeding expectations, our sales performance from 2022 to 2025 exemplifies unparalleled success. With a steadfast commitment to customer satisfaction and innovative strategies, we achieved remarkable growth year after year.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our record-breaking sales figures reflect not only our dedication to excellence but also our ability to adapt to evolving market trends and seize new opportunities.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrackRecord;