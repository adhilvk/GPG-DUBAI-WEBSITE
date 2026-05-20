"use client";
import React from "react";
import { motion } from "framer-motion";

const TrustedBrokerage = () => {
  return (
    <section className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">

        {/* LEFT IMAGE */}
        <div className="lg:col-span-4">
          <div className="overflow-hidden rounded-md shadow-sm border border-slate-100">
            <img
              src="/images/trustpic.jpeg"
              alt="GPG Leadership"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-8 flex flex-col gap-10">

          {/* TOP HEADING */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#E31E24]"></div>
              <span className="text-[#E31E24] font-bold tracking-[0.35em] text-[10px] uppercase">
                Industry Benchmark
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-slate-900">
              Trust Certified by{" "}
              <span className="italic font-serif text-slate-500">
                Excellence.
              </span>
            </h2>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                label: "Capital Facilitated",
                value: "AED 2.1B+",
                desc: "Premium transactional volume."
              },
              {
                label: "Client Retention",
                value: "100%",
                desc: "Absolute fiduciary loyalty."
              },
              {
                label: "Market Tenure",
                value: "17 YRS",
                desc: "Decades of intelligence."
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-stone-50 border border-slate-100 rounded-md hover:bg-white hover:shadow-md transition-all"
              >
                <p className="text-[#E31E24] text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                  {stat.label}
                </p>

                <h4 className="text-3xl font-light text-slate-900 mb-2">
                  {stat.value}
                </h4>

                <p className="text-slate-500 text-xs">
                  {stat.desc}
                </p>
              </motion.div>
            ))}

          </div>

          {/* BOTTOM TEXT */}
          <div className="text-slate-600 leading-relaxed text-lg">
            <p>
              Our reputation as one of the most trusted brokerages in the UAE
              is built on transparency, performance, and long-term
              relationships. Over the past 17 years, GPG has facilitated
              billions in premium property transactions while maintaining
              absolute loyalty to our investors and clients.
            </p>

            <p className="mt-4">
              With deep market insight and strategic investment advisory,
              we continue to deliver exceptional results across Dubai’s
              most prestigious real estate developments.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBrokerage;