"use client";
import { motion, Variants } from "framer-motion";

const specialisations = [
  {
    title: "Full Stack AI Development",
    description: "Build intelligent web solutions using modern AI technologies.",
    roles: ["AI Developer", "Full Stack Engineer", "Product Engineer"],
  },
  {
    title: "Generative AI & Technology Management",
    description: "Innovate with AI creativity while mastering business and leadership skills.",
    roles: ["AI Product Manager", "Technology Consultant", "Innovation Lead"],
  },
  {
    title: "Applied AI & Data Analytics",
    description: "Transform complex data into actionable insights through AI techniques.",
    roles: ["Data Analyst", "AI Researcher", "Business Intelligence Analyst"],
  },
  {
    title: "Design Technology",
    description: "Design human-centered digital experiences powered by intelligent AI systems.",
    roles: ["UX Strategist", "AI Design Specialist", "Product Designer"],
  }
];

export default function SpecialisationsOverview() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">
      
      {/* --- LOCALIZED SECTION GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
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
            <span className="text-[11px] text-[#0066ff] font-semibold tracking-[0.2em] uppercase">
              Specialisations Overview
            </span>
            <div className="w-8 h-[1px] bg-[#0066ff]" />
          </motion.div>
          <motion.h2 
            variants={itemVars}
            className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-white"
          >
            Choose Your <span className="text-[#0066ff] font-medium">Career Pathway</span>
          </motion.h2>
        </motion.div>

        {/* 2x2 Grid of Cards (Now Interactive) */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {specialisations.map((spec, index) => (
            <motion.div 
              key={index}
              variants={itemVars} 
              // Added cursor-pointer to make the whole card feel clickable
              className="group relative cursor-pointer rounded-[24px] bg-[#02040a]/40 backdrop-blur-md border border-white/5 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.04] hover:border-[#0066ff]/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,102,255,0.15)]"
            >
              {/* Subtle radial glow on hover */}
              <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(ellipse_at_top_right,rgba(0,102,255,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                  {spec.title}
                </h3>
                <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed font-light mb-8">
                  {spec.description}
                </p>
              </div>

              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-4">Target Career Roles</p>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                  {spec.roles.map((role, rIndex) => (
                    <span 
                      key={rIndex}
                      className="px-4 py-2 rounded-full text-[13px] font-medium text-white/70 bg-white/5 border border-white/10 group-hover:border-[#0066ff]/20 group-hover:text-white transition-colors duration-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Card-Level CTA (Conversion Focus) */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[#0066ff]">
                  <span className="text-[14px] font-semibold tracking-wide uppercase">Download Syllabus</span>
                  <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section-Level Safety Net CTA (For Undecided Users) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center flex flex-col items-center"
        >
          <p className="text-white/50 text-[15px] font-light mb-6">
            Not sure which path aligns best with your goals?
          </p>
          <button className="bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-[#0066ff] px-8 py-3.5 rounded-full font-medium text-[13px] uppercase tracking-widest transition-all flex items-center gap-3">
            Speak to an Academic Advisor
          </button>
        </motion.div>

      </div>
    </section>
  );
}