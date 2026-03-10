"use client";
import { motion } from 'framer-motion';

const TrackRecord = () => {
  const stats = [
    { year: "2022", amount: "300 Million", percentage: "14.3%", startAngle: 0, endAngle: 51.48, fill: "#FCA5A5" },
    { year: "2023", amount: "500 Million", percentage: "23.8%", startAngle: 51.48, endAngle: 137.16, fill: "#991B1B" },
    { year: "2024", amount: "750 Million", percentage: "35.7%", startAngle: 137.16, endAngle: 265.68, fill: "#B91C1C" },
    { year: "2025", amount: "550 Million", percentage: "26.2%", startAngle: 265.68, endAngle: 360, fill: "#EF4444" },
  ];

  const chartSize = 380;
  const cx = 200;
  const cy = 200;
  const radius = 160;

  // Helper function to calculate SVG path for pie slices
  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const startRad = (startAngle - 90) * Math.PI / 180.0;
    const endRad = (endAngle - 90) * Math.PI / 180.0;
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const startPoint = { x: x + radius * Math.cos(startRad), y: y + radius * Math.sin(startRad) };
    const endPoint = { x: x + radius * Math.cos(endRad), y: y + radius * Math.sin(endRad) };
    return [`M ${x},${y} L ${startPoint.x},${startPoint.y} A ${radius},${radius} 0 ${largeArcFlag} 1 ${endPoint.x},${endPoint.y} Z`].join(" ");
  };

  return (
    <section className="bg-white py-24 px-6 relative">
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
          
          {/* Left Side: Interactive SVG Pie Chart matching reference */}
          <div className="relative flex justify-center lg:justify-end pr-10">
            <svg width={chartSize} height={chartSize} viewBox={`0 0 ${chartSize + 20} ${chartSize + 20}`} className="overflow-visible">
              
              {/* Doughnut Hole / Inner Text */}
              <circle cx={cx} cy={cy} r={radius * 0.7} fill="white" className="shadow-lg" />
              <text x={cx} y={cy - 10} textAnchor="middle" className="text-xs font-bold fill-red-600 tracking-widest uppercase">CUMULATIVE</text>
              <text x={cx} y={cy + 15} textAnchor="middle" className="text-3xl font-extrabold fill-slate-950">AED 2.1B</text>
              
              {/* Segments (Slices) with Animation */}
              {stats.map((s, i) => {
                const angleRad = ((s.startAngle + s.endAngle) / 2 - 90) * Math.PI / 180.0;
                const labelX = cx + (radius * 1.2) * Math.cos(angleRad);
                const labelY = cy + (radius * 1.2) * Math.sin(angleRad);
                const labelAnchor = Math.cos(angleRad) > 0 ? "start" : "end";

                return (
                  <motion.g
  key={i}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: false }}
  transition={{ duration: 0.4, delay: i * 0.2 }}
>
  <motion.path
    d={describeArc(cx, cy, radius, s.startAngle, s.endAngle)}
    fill={s.fill}
    stroke="white"
    strokeWidth="2"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.25 }}
    viewport={{ once: false }}
  />

                    
                    {/* Internal Slicing Text (AED Millions) */}
                    <text 
                      x={cx + (radius * 0.85) * Math.cos(angleRad)} 
                      y={cy + (radius * 0.85) * Math.sin(angleRad)} 
                      textAnchor="middle" 
                      className="text-[10px] fill-white"
                      style={{ transform: `rotate(${angleRad}rad)` }}
                    >
                      AED
                    </text>
                    <text 
                      x={cx + (radius * 0.85) * Math.cos(angleRad)} 
                      y={cy + (radius * 0.85) * Math.sin(angleRad) + 12} 
                      textAnchor="middle" 
                      className="text-[10px] font-bold fill-white"
                    >
                      {s.amount}
                    </text>

                    {/* External Slicing Labels (Year/Percentage) */}
                    <text x={labelX} y={labelY} textAnchor={labelAnchor} className="text-xs font-bold fill-slate-950">{s.year}</text>
                    <text x={labelX} y={labelY + 14} textAnchor={labelAnchor} className="text-xs fill-slate-600">{s.percentage}</text>
                  </motion.g>
                );
              })}
            </svg>
          </div>

          {/* Right Side: Professional Copy (no changes) */}
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