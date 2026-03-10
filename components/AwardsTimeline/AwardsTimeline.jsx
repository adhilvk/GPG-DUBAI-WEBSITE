"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const AwardsTimeline = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const awards = [
        {
            id: 1,
            title: "Binghatti H1 2025",
            description: "Honoured to be recognized with the Top Broker Award from Binghatti for H1 2025!",
            image: "/images/rewardpic1.png" // Replace with your image path
        },
        {
            id: 2,
            title: "Ultimate Realty Awards",
            description: "Proudly received The Ultimate Realty Awards from India Today Group and NKN Media, recognizing our commitment to excellence in the world of Dubai luxury real estate.",
            image: "/images/rewardpic2.png" // Image for Point 2
        },
        {
            id: 3,
            title: "Top Broker 2024",
            description: "GPG GLOBAL REAL ESTATE PROUDLY WINS THE TOP BROKER AWARD OF 2024 BY BINGHATTI!",
            image: "/images/rewardpic3.png" // Image for Point 3
        }
    ];

    // Auto-switch every 2 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % awards.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-[#fcfcfc] pt-8 pb-20 px-6 min-h-fit flex items-center">
            <div className="max-w-7xl mx-auto w-full ">
                {/* Header Section */}
                <div className="mb-16 text-center lg:text-left">
                    <p className="text-[#E31E24] font-bold tracking-[0.2em] text-sm uppercase mb-3">
                        Excellence Recognized
                    </p>
                    <h2 style={{ fontFamily: "'serif', 'Times New Roman', serif" }} className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight uppercase">
                        Global Recognition <br /> & Industry Awards
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* LEFT: TEXT STEPS */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        {awards.map((award, index) => (
                            <div
                                key={award.id}
                                className={`flex gap-6 cursor-pointer transition-all duration-500 ${activeIndex === index ? 'opacity-100 scale-105' : 'opacity-30'}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {/* Step Number/Check Circle */}
                                <div className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${activeIndex >= index ? 'bg-white border-white text-black' : 'border-gray-600 text-slate-600'}`}>
                                        {activeIndex > index ? <Check size={20} /> : index + 1}
                                    </div>
                                    {index !== awards.length - 1 && (
                                        <div className={`w-0.5 h-20 mt-2 ${activeIndex > index ? 'bg-white' : 'bg-gray-800'}`} />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="pt-1">
                                    <h3 className={`text-xl font-bold mb-2 ${activeIndex === index ? 'text-white' : 'text-slate-600'}`}>
                                        {award.title}
                                    </h3>
                                    <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                                        {award.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: DYNAMIC IMAGE */}
                    <div className="w-full lg:w-1/2 relative h-100 md:h-125 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -20, scale: 1.05 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={awards[activeIndex].image}
                                    alt={awards[activeIndex].title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient Overlay for the "Institutional" look */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                            </motion.div>
                        </AnimatePresence>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default AwardsTimeline;