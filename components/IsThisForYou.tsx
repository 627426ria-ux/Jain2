"use client";
import { motion, Variants } from "framer-motion";

const criteria = [
  "You envision yourself as a creator of intelligent digital solutions.",
  "You aim to build a global tech career in AI-powered systems and data-driven decision-making.",
  "You aspire to master Artificial Intelligence — from Full Stack AI Dev to Generative AI, Data Analytics, and AI-driven Design.",
  "You value mentorship and networking with industry experts.",
  "You believe in learning through real-world projects, internships, and industry collaborations.",
  "You see yourself as a changemaker, ready to lead the AI revolution."
];

export default function IsThisForYou() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    // Added a subtle scale effect for a smoother, premium reveal
    hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">
      
      {/* --- LOCALIZED SECTION GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#0066ff]" />
            <span className="text-[11px] text-[#0066ff] font-bold tracking-[0.2em] uppercase">
              Candidate Profile
            </span>
            <div className="w-8 h-[1px] bg-[#0066ff]" />
          </motion.div>
          <motion.h2 
            variants={itemVars}
            className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-[#02040a]"
          >
            Is This Programme <span className="text-[#0066ff] font-medium">For You?</span>
          </motion.h2>
        </motion.div>

        {/* Checklist Grid */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {criteria.map((text, index) => (
            <motion.div 
              key={index}
              variants={itemVars} 
              // Updated to white backgrounds, subtle borders, and soft hover shadows
              className="group relative rounded-2xl bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 md:p-8 flex items-start gap-5 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,102,255,0.08)] hover:border-[#0066ff]/30 hover:-translate-y-1"
            >
              {/* Premium Checkmark Icon (Kept blue to pop against white) */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff]/5 border border-[#0066ff]/20 flex items-center justify-center mt-0.5 group-hover:bg-[#0066ff]/10 group-hover:border-[#0066ff]/40 transition-colors duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              {/* Text Content (Darkened for Light Mode) */}
              <p className="text-[#02040a]/70 text-[15px] md:text-[16px] leading-relaxed font-light group-hover:text-[#02040a] transition-colors duration-300">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}