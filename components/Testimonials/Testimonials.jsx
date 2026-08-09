"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

const TEXT_CLAMP_LENGTH = 120;

function ReviewCard({ review, readMoreLabel, readLessLabel }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > TEXT_CLAMP_LENGTH;
  const displayText =
    expanded || !isLong ? review.text : `${review.text.slice(0, TEXT_CLAMP_LENGTH).trim()}...`;

  return (
    <div className="flex flex-col rounded-2xl border border-red-50 bg-white p-5 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-slate-900">{review.name}</h4>
        </div>
        <img src="/images/icon.svg" alt="" className="w-5" />
      </div>

      <div className="mb-1 flex text-[#E31E24]">
        {[...Array(5)].map((_, j) => (
          <Star key={j} size={14} fill="currentColor" />
        ))}
      </div>

      <p className="mb-2 text-xs text-slate-500">{review.time}</p>

      <p className="text-sm leading-relaxed text-slate-700">{displayText}</p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 self-start text-sm font-semibold text-[#E31E24] transition hover:text-[#c4191f]"
        >
          {expanded ? readLessLabel : readMoreLabel}
        </button>
      )}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const reviews = t("testimonials.reviewsData");
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  const goNext = () => setIndex((prev) => (prev + 1) % reviews.length);

  const visibleReviews = [reviews[index], reviews[(index + 1) % reviews.length]];

  return (
    <section className="relative w-full bg-[#f5f6f8] py-10 md:py-12">
      <div className="absolute left-1/2 top-0 z-10 h-px w-full max-w-2xl -translate-x-1/2 bg-slate-200/80" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t("testimonials.eyebrow")} title={t("testimonials.title")} accent={t("testimonials.accent")} />

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 md:gap-12">
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

                <p className="mt-1 text-sm text-slate-500">{t("testimonials.reviews")}</p>
              </div>
            </div>

            <a
              href={t("testimonials.googleMapsUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg border-2 border-[#E31E24] px-6 py-3 text-sm font-bold tracking-wide text-[#E31E24] transition hover:bg-[#E31E24] hover:text-white"
            >
              {t("testimonials.writeReview")}
            </a>
          </div>

          <div className="md:col-span-2">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                  className="grid gap-6 md:grid-cols-2 md:gap-8"
                >
                  {visibleReviews.map((review, i) => (
                    <ReviewCard
                      key={`${review.name}-${index}-${i}`}
                      review={review}
                      readMoreLabel={t("testimonials.readMore")}
                      readLessLabel={t("testimonials.readLess")}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label={t("luxuryListingsPage.previous")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#E31E24] hover:text-[#E31E24]"
              >
                <ChevronLeft size={20} />
              </button>

              <span className="min-w-12 text-center text-sm text-slate-500">
                {index + 1} / {reviews.length}
              </span>

              <button
                type="button"
                onClick={goNext}
                aria-label={t("luxuryListingsPage.next")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#E31E24] hover:text-[#E31E24]"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
