"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value }) => {
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

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const StatsBar = () => {
  const stats = [
    { value: 3000, label: "Happy Customers", suffix: "+" },
    { value: 324, label: "Premium Developers", suffix: "+" },
    { value: 200, label: "Property Experts", suffix: "+" },
    { value: 30, label: "Languages", suffix: "+" },
  ];

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
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                className="mb-1.5 flex items-center gap-1 text-4xl tracking-tight text-[#E31E24] md:text-5xl"
              >
                <Counter value={item.value} />
                <span>{item.suffix}</span>
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
