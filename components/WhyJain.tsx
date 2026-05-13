"use client";
import { motion, Variants } from "framer-motion";

const stats = [
  {
    value: "2 Years",
    description: "Of live industry experience at Infopark, Kochi before you even graduate."
  },
  {
    value: "4 Tracks",
    description: "Highly targeted specialisations in AI, Data Analytics, and Design Technology."
  },
  {
    value: "25+",
    description: "Industry leaders and mentors guiding you through real-world projects."
  },
  {
    value: "100%",
    description: "UGC-recognised BCA degree awarded by JAIN (Deemed-to-be University)."
  }
];

export default function WhyJain() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative z-20 w-full py-20 sm:py-24 md:py-32 bg-white overflow-hidden px-4 sm:px-6">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] sm:w-[80vw] h-[80vw] bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.05),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl flex flex-col items-center"
        >
          {/* Headline matching the screenshot structure */}
          <motion.h2 
            variants={itemVars}
            className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-[#02040a] leading-[1.05] sm:leading-[1] mb-6"
          >
            Why experience matters <br className="hidden sm:block" />
            <span className="text-[#0066ff] italic font-medium">more than ever</span>
          </motion.h2>

          {/* Persuasive Paragraph */}
          <motion.p 
            variants={itemVars}
            className="text-[#02040a]/60 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed font-light mb-10 max-w-2xl px-2 sm:px-0"
          >
            Whether it's AI development, data analytics, or design tech, the right skills bring the right opportunities. This programme shows you exactly how to build a deployment-ready portfolio, gain real industry experience, and graduate ahead of the curve.
          </motion.p>

          {/* CTA Button */}
          <motion.button 
            variants={itemVars}
            className="bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 sm:px-10 py-4 rounded-full font-semibold text-[12px] sm:text-[13px] uppercase tracking-widest transition-all shadow-[0_4px_15px_rgba(0,102,255,0.3)] hover:shadow-[0_10px_25px_rgba(0,102,255,0.5)] hover:-translate-y-0.5 flex items-center gap-3 group"
          >
            Book free demo session
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.button>
        </motion.div>

        {/* 4-Column Stats Grid */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-10 md:gap-x-16 gap-y-12 mt-20 sm:mt-24 md:mt-32 w-full max-w-6xl"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVars}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              {/* Massive faded numbers matching the screenshot's premium typography */}
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tighter mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#02040a] to-[#02040a]/30">
                {stat.value}
              </h3>
              <p className="text-[#02040a]/70 text-[13px] sm:text-[14px] leading-relaxed font-light">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}