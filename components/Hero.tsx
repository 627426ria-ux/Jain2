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
    <section className="relative z-30 w-full flex flex-col items-center justify-center px-6 text-center pt-[15vh] md:pt-[18vh] pb-[8vh] md:pb-[12vh]">
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-5xl flex flex-col items-center"
      >
        {/* Urgency Badge */}
        <motion.div variants={itemVars} className="flex items-center gap-2.5 mb-8 bg-white/5 border border-white/10 rounded-full px-5 py-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse shrink-0" />
          <span className="text-[12px] text-white/60 font-medium tracking-widest uppercase">
            Only 23 seats remaining — Batch closes June 15
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVars}
          className="text-[3.2rem] md:text-[4.8rem] lg:text-[6rem] font-light tracking-[-0.03em] leading-[1.05] mb-8 text-white"
        >
          <span className="text-[#0066ff] font-medium">India's First</span> Work <br />
          Integrated UG Program
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVars}
          className="max-w-2xl text-white/50 text-[16px] md:text-[18px] leading-[1.7] mb-10 font-light tracking-wide"
        >
          Earn a UGC-recognised BCA degree + 2 years of real industry experience
          while you study — not after.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0066ff] text-white px-9 py-4 rounded-full font-semibold text-[13px] uppercase tracking-widest transition-all flex items-center gap-2.5 shadow-[0_0_25px_rgba(0,102,255,0.3)] group"
          >
            Reserve your seat
            <span className="text-base leading-none pb-[1px] font-light group-hover:translate-x-1 transition-transform">{'→'}</span>
          </motion.button>

          <motion.button
            whileHover={{ opacity: 1, x: 4 }}
            className="text-white/60 hover:text-white px-6 py-4 font-medium text-[13px] uppercase tracking-widest transition-all flex items-center gap-2.5 group"
          >
            Book a demo
            <span className="text-base leading-none pb-[1px] font-light group-hover:translate-x-1 transition-transform">{'→'}</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}