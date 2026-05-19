"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const reviews = [
  {
    name: "Zeynep Saylan",
    time: "1 week ago",
    text: "Working with Mahmoud Ramadan from RichKey Properties was a great experience. He's extremely knowledgeable about the Dubai market and guided us with patience and clarity.",
  },
  {
    name: "Rubina Mukhtar",
    time: "4 weeks ago",
    text: "Working with Abbas was a wonderful experience. He has deep knowledge of real estate and gave excellent advice from start to finish.",
  },
  {
    name: "Amaan Ajmal",
    time: "3 weeks ago",
    text: "Had the pleasure of working with Abbas Bin Shahid while purchasing a property. His professionalism made the process extremely smooth.",
  },
  {
    name: "Fatima Khan",
    time: "2 months ago",
    text: "Excellent service and guidance throughout the buying process. The team made everything very simple and transparent.",
  },
  {
    name: "David Morgan",
    time: "1 month ago",
    text: "Professional real estate service with deep market understanding. Highly recommended for anyone investing in Dubai.",
  },
  {
    name: "Omar Al Hassan",
    time: "5 weeks ago",
    text: "Fantastic experience dealing with the team. They helped us find the perfect property within our budget.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#f5f6f8] py-10 md:py-12">
      <div className="absolute left-1/2 top-0 z-10 h-px w-full max-w-2xl -translate-x-1/2 bg-slate-200/80" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Client Stories" title="What Our" accent="Clients Say" />

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-3">
          <div className="rounded-2xl border border-red-50 bg-white p-6 shadow-[0_8px_30px_rgba(227,30,36,0.06)]">
            <div className="mb-4 flex items-center gap-4">
              <img src="/images/logo.png" alt="GPG" className="h-16 w-16 rounded-full object-cover ring-2 ring-red-100" />

              <div>
                <h3 className="text-xl font-semibold text-slate-900">GPG</h3>

                <div className="mt-1 flex items-center gap-1 text-[#E31E24]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-1 text-sm text-slate-500">4.8 (200 reviews)</p>
              </div>
            </div>

            <button className="mt-6 rounded-lg border-2 border-[#E31E24] px-6 py-3 text-sm font-bold tracking-wide text-[#E31E24] transition hover:bg-[#E31E24] hover:text-white">
              Write a Review
            </button>
          </div>

          <div className="relative overflow-hidden md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
                className="grid items-stretch gap-8 md:grid-cols-2 md:gap-10"
              >
                {[reviews[index], reviews[(index + 1) % reviews.length]].map((review, i) => (
                  <div
                    key={i}
                    className="flex min-h-55 flex-col justify-between rounded-2xl border border-red-50 bg-white p-6 shadow-sm"
                  >
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-semibold text-slate-900">{review.name}</h4>
                        <img src="/images/icon.svg" alt="" className="w-6" />
                      </div>

                      <div className="mb-2 flex text-[#E31E24]">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={16} fill="currentColor" />
                        ))}
                      </div>

                      <p className="mb-3 text-sm text-slate-500">{review.time}</p>

                      <p className="leading-relaxed text-slate-700">{review.text}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
