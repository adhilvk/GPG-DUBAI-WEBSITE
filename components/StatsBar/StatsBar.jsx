"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Counter = ({ value, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      count.set(0);
      animate(count, value, { duration: 0.55, ease: [0.22, 1, 0.36, 1] });
    }
  }, [inView, value, count]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
};

const StatsBar = ({ variant = "default" }) => {
  const { t } = useLanguage();
  const isHero = variant === "hero";
  const stats = [
    { value: 3000, label: t("stats.happyCustomers"), suffix: "+" },
    { value: 324, label: t("stats.premiumDevelopers"), suffix: "+" },
    { value: 200, label: t("stats.propertyExperts"), suffix: "+" },
    { value: 30, label: t("stats.languages"), suffix: "+" },
  ];

  if (isHero) {
    const numberColor = "text-[#E31E24]";
    const labelColor = "text-white";

    return (
      <div className="mx-auto mt-8 w-full max-w-4xl sm:mt-10 md:mt-12">
        <div className="flex flex-nowrap items-stretch justify-center divide-x divide-white/30">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex min-w-0 flex-1 flex-col items-center justify-center px-2 py-1 text-center sm:px-3 md:px-5"
            >
              <p
                className={`mb-1 flex shrink-0 items-center justify-center gap-0.5 whitespace-nowrap text-xl tracking-tight sm:text-2xl md:text-3xl ${numberColor}`}
              >
                <Counter value={item.value} className={numberColor} />
                <span className={numberColor}>{item.suffix}</span>
              </p>
              <p
                className={`w-full text-[8px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-[9px] md:text-[10px] ${labelColor}`}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="border-y border-red-50 bg-white px-6 py-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-y-8 text-center lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="relative flex flex-col items-center"
            >
              {index < stats.length - 1 && (
                <div className="absolute -right-5 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-red-100 lg:block" />
              )}

              <p
                className="mb-1.5 flex items-center gap-1 text-4xl tracking-tight text-[#E31E24] md:text-5xl"
              >
                <Counter value={item.value} className="text-[#E31E24]" />
                <span className="text-[#E31E24]">{item.suffix}</span>
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 md:text-xs">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
