"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import StatsBar from "@/components/StatsBar/StatsBar";

const Hero = () => {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <video
          src="https://res.cloudinary.com/dsldkspov/video/upload/v1787400268/VIDEO_1_xhbkvl.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-black/70 via-black/45 to-black/75"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#E31E24]/10 mix-blend-multiply"
          aria-hidden
        />
      </motion.div>

      <div className="relative z-10 mt-32 px-4 text-center md:mt-48 lg:mt-60">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <div className="h-px w-10 bg-[#E31E24]" aria-hidden />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
              {t("hero.tagline")}
            </span>
            <div className="h-px w-10 bg-[#E31E24]" aria-hidden />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-7xl"
          >
            {t("hero.title")}{" "}
            <span className="text-[#E31E24]">{t("hero.titleAccent")}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div variants={itemVariants}>
            <StatsBar variant="hero" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
