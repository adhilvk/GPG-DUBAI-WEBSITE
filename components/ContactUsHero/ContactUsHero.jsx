"use client";
import { motion } from "framer-motion";

const ContactUsHero = () => {
  return (
    <section className="relative h-[70vh] min-h-125 w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/contactus.jpg"
          alt="Contact GPG Real Estate"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80" />
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-5 pt-16 md:pt-20">
        <div className="mx-auto w-full max-w-7xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Let&apos;s Find Your <br />
          <span className="text-[#E31E24]">Perfect Address</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl"
        >
          Whether you&apos;re looking to buy, sell, or invest in Dubai&apos;s premium real
          estate, our expert team is here to guide you every step of the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <div className="h-0.5 w-10 bg-[#E31E24]" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E31E24]">
            Get In Touch
          </span>
          <div className="h-0.5 w-10 bg-[#E31E24]" />
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;
