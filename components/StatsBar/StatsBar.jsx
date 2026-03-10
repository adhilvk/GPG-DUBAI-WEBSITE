"use client";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value }) => {
  const ref = useRef(null);

  // allow animation every time it enters viewport
  const inView = useInView(ref, { once: false, margin: "-100px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      count.set(0);
      animate(count, value, { duration: 2, ease: "easeOut" });
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
    <section className="bg-white py-16 md:py-24 px-6">

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-x-12 text-center">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative flex flex-col items-center"
            >

              {/* divider */}
              {index < stats.length - 1 && (
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200 hidden lg:block"></div>
              )}

              {/* number */}
              <p className="text-6xl md:text-5xl  text-[#E31E24] tracking-tight flex items-center gap-1 mb-3">
                <Counter value={item.value} />
                <span>{item.suffix}</span>
              </p>

              {/* label */}
              <p className="text-xs md:text-sm text-[#E31E24]  uppercase tracking-[0.2em]">
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