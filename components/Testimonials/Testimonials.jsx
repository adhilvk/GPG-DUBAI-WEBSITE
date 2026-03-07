"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Zeynep Saylan",
    time: "1 week ago",
    text: "Working with Mahmoud Ramadan from RichKey Properties was a great experience. He’s extremely knowledgeable about the Dubai market and guided us with patience and clarity.",
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
    <section className=" relative w-full bg-white py-12 ">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-slate-300 z-10"></div>      

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2
          style={{ fontFamily: "'serif', 'Times New Roman', serif" }}
          className="text-4xl font-semibold text-gray-900 mb-16"
        >
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Company Card */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/images/logo.png"
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  GPG Real Estate
                </h3>

                <div className="flex items-center gap-1 text-yellow-500 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-500 text-sm mt-1">
                  4.8 (200 reviews)
                </p>
              </div>
            </div>

            <button className="mt-6 border border-yellow-500 text-gray-900 px-6 py-3 hover:bg-yellow-500 hover:text-white transition">
              Write a Review
            </button>
          </div>

          {/* Sliding Reviews */}
          <div className="md:col-span-2 relative overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-10 items-stretch"
              >

                {[reviews[index], reviews[(index + 1) % reviews.length]].map(
                  (review, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-between min-h-55"
                    >

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">
                            {review.name}
                          </h4>

                          <img src="/images/icon.svg" className="w-6" />
                        </div>

                        <div className="flex text-yellow-500 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>

                        <p className="text-sm text-gray-500 mb-3">
                          {review.time}
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                          {review.text}
                        </p>
                      </div>

                    </div>
                  )
                )}

              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}