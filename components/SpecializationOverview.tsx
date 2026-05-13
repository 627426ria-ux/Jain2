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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVars: Variants = {
    // Subtle scale reveal for premium feel
    hidden: { opacity: 0, y: 20, scale: 0.98, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative z-20 w-full py-20 sm:py-24 md:py-32 bg-transparent overflow-hidden px-4 sm:px-6">
      
      {/* --- LOCALIZED SECTION GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div variants={itemVars} className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[1px] bg-[#0066ff]" />
            <span className="text-[10px] sm:text-[11px] text-[#0066ff] font-bold tracking-[0.2em] uppercase">
              Specialisations Overview
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-[#0066ff]" />
          </motion.div>
          <motion.h2 
            variants={itemVars}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-[#02040a]"
          >
            Choose Your <span className="text-[#0066ff] font-medium">Career Pathway</span>
          </motion.h2>
        </motion.div>

        {/* 2x2 Grid of Cards (Fluid & Interactive) */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          {specialisations.map((spec, index) => (
            <motion.div 
              key={index}
              variants={itemVars} 
              // Updated to crisp white cards with soft shadows
              className="group relative cursor-pointer rounded-[24px] bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,102,255,0.08)] hover:border-[#0066ff]/30 hover:-translate-y-1"
            >
              {/* Subtle radial glow on hover inside the card */}
              <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(ellipse_at_top_right,rgba(0,102,255,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#02040a] mb-3 sm:mb-4 tracking-tight">
                  {spec.title}
                </h3>
                <p className="text-[#02040a]/70 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-light mb-6 sm:mb-8">
                  {spec.description}
                </p>
              </div>

              <div className="relative z-10">
                <p className="text-[10px] sm:text-[11px] text-[#02040a]/50 font-semibold uppercase tracking-[0.2em] mb-3 sm:mb-4">
                  Target Career Roles
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {spec.roles.map((role, rIndex) => (
                    <span 
                      key={rIndex}
                      // Light mode pill tags that tint blue on hover
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-[13px] font-medium text-[#02040a]/70 bg-gray-50 border border-gray-200 group-hover:border-[#0066ff]/30 group-hover:bg-[#0066ff]/5 group-hover:text-[#0066ff] transition-colors duration-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Card-Level CTA */}
                <div className="pt-5 sm:pt-6 border-t border-gray-100 flex items-center justify-between text-[#0066ff]">
                  <span className="text-[13px] sm:text-[14px] font-semibold tracking-wide uppercase">Download Syllabus</span>
                  <span className="text-lg sm:text-xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section-Level Safety Net CTA (Fluid Width on Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center flex flex-col items-center"
        >
          <p className="text-[#02040a]/60 text-[14px] sm:text-[15px] font-light mb-5 sm:mb-6 px-4">
            Not sure which path aligns best with your goals?
          </p>
          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#02040a] border border-gray-200 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[12px] sm:text-[13px] uppercase tracking-widest shadow-sm transition-all hover:border-[#0066ff]/30 hover:text-[#0066ff] flex items-center justify-center gap-3">
            Speak to an Academic Advisor
          </button>
        </motion.div>

      </div>
    </section>
  );
}