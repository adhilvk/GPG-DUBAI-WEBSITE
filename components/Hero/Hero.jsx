"use client";
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
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
        ease: [0.16, 1, 0.3, 1] 
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <motion.div 
  initial={{ scale: 1.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.8, ease: "easeOut" }}
  className="absolute inset-0 z-0"
>
  <video
    src="https://res.cloudinary.com/dsldkspov/video/upload/v1772866347/demo_pnfoy4.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  ></video>

  <div className="absolute inset-0 bg-black/40"></div>
</motion.div>

      {/* Centered but shifted slightly below middle */}
      <div className="relative z-10 text-center px-4 mt-32 md:mt-48 lg:mt-60">
  <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Main Heading */}
    <motion.h1
      variants={itemVariants}
      style={{ fontFamily: "'serif', 'Times New Roman', serif" }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
    >
      Creating Wealth for Generations
    </motion.h1>

    {/* Sub Text */}
    <motion.p
      variants={itemVariants}
      className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed"
    >
      Guiding investors and homeowners toward exceptional opportunities in Dubai’s evolving property landscape.
    </motion.p>

  </motion.div>
</div>
      
      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
      >
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;