"use client";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative z-30 w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-32 pb-6 sm:pt-[15vh] md:pt-[18vh] sm:pb-[8vh] md:pb-[12vh]">
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-5xl flex flex-col items-center w-full"
      >
        {/* Urgency Badge */}
        <motion.div variants={itemVars} className="flex items-center gap-2 sm:gap-2.5 mb-6 sm:mb-8 bg-[#0066ff]/5 border border-[#0066ff]/10 rounded-full px-4 sm:px-5 py-1.5 sm:py-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
          <span className="text-[9px] sm:text-[12px] text-[#02040a]/70 font-bold tracking-widest uppercase">
            Only 23 seats remaining — Closes June 15
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVars}
          className="text-4xl sm:text-[3.2rem] md:text-[4.8rem] lg:text-[6rem] font-light tracking-tight sm:tracking-[-0.03em] leading-[1.15] sm:leading-[1.05] mb-6 sm:mb-8 text-[#02040a]"
        >
          <span className="text-[#0066ff] font-medium">India's First</span> Work <br className="hidden sm:block" />
          Integrated UG Program
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVars}
          className="max-w-2xl text-[#02040a]/60 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed sm:leading-[1.7] mb-8 sm:mb-10 font-light tracking-wide px-2 sm:px-0"
        >
          Earn a UGC-recognised BCA degree + 2 years of real industry experience
          while you study — not after.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-[280px] sm:max-w-none mx-auto">
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto justify-center bg-[#0066ff] text-white px-8 py-4 rounded-full font-semibold text-[12px] sm:text-[13px] uppercase tracking-widest transition-all flex items-center gap-2.5 shadow-[0_10px_30px_rgba(0,102,255,0.2)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.35)] group"
          >
            Reserve your seat
            <span className="text-base leading-none pb-[1px] font-light group-hover:translate-x-1 transition-transform">{'→'}</span>
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ opacity: 1, x: 4 }}
            className="w-full sm:w-auto justify-center text-[#02040a]/50 hover:text-[#02040a] px-6 py-4 font-bold text-[12px] sm:text-[13px] uppercase tracking-widest transition-all flex items-center gap-2.5 group"
          >
            Book a demo
            <span className="text-base leading-none pb-[1px] font-light group-hover:translate-x-1 transition-transform">{'→'}</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}