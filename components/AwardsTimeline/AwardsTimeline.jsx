"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AwardsGallery = () => {
    const awards = [
        {
            id: 1,
            title: "Binghatti H1 2025",
            subtitle: "Top Broker Award",
            image: "/images/rewardpic1.png"
        },
        {
            id: 2,
            title: "Ultimate Realty Awards",
            subtitle: "India Today Group",
            image: "/images/rewardpic2.png"
        },
        {
            id: 3,
            title: "Top Broker 2024",
            subtitle: "Binghatti Recognition",
            image: "/images/rewardpic3.png"
        }
    ];

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                
                {/* Minimal Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 uppercase tracking-tight">
                        Global Recognition
                    </h2>
                    <div className="h-1 w-20 bg-[#E31E24] mx-auto mt-6" />
                </div>

                {/* Pure Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[4/5 rounded-2xl overflow-hidden shadow-xl bg-slate-100"
                        >
                            {/* Award Image */}
                            <img
                                src={award.image}
                                alt={award.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Elegant Overlay (Visible on Hover) */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <p className="text-[#E31E24] font-bold text-xs uppercase tracking-[0.2em] mb-2">
                                    {award.subtitle}
                                </p>
                                <h3 className="text-white text-2xl font-bold font-serif">
                                    {award.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Institutional Footer Note */}
                <div className="mt-16 text-center">
                    <p className="text-slate-400 text-sm tracking-widest uppercase">
                        Recognized by Dubai's leading developers and international media.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AwardsGallery;