"use client";
import { motion, Variants } from "framer-motion";

const specialisations = [
  {
    title: "Full Stack AI Development",
    description: "Build intelligent web solutions using modern AI technologies.",
    roles: ["AI Developer", "Full Stack Engineer", "Product Engineer"],
    accent: "#00e5ff",
  },
  {
    title: "Generative AI & Technology Management",
    description: "Innovate with AI creativity while mastering business and leadership skills.",
    roles: ["AI Product Manager", "Technology Consultant", "Innovation Lead"],
    accent: "#00e5ff",
  },
  {
    title: "Applied AI & Data Analytics",
    description: "Transform complex data into actionable insights through AI techniques.",
    roles: ["Data Analyst", "AI Researcher", "Business Intelligence Analyst"],
    accent: "#00e5ff",
  },
  {
    title: "Design Technology",
    description: "Design human-centered digital experiences powered by intelligent AI systems.",
    roles: ["UX Strategist", "AI Design Specialist", "Product Designer"],
    accent: "#00e5ff",
  },
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
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const glass = {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    boxShadow: "0 4px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
  } as const;

  return (
    <section className="relative z-20 w-full py-20 sm:py-24 md:py-32 bg-transparent overflow-hidden px-4 sm:px-6">

      {/* Localised purple glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(176,38,255,0.04), transparent 60%)" }}
      />

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
            <div className="w-6 sm:w-8 h-px bg-[#00e5ff]" />
            <span className="text-[10px] sm:text-[11px] text-[#00e5ff] font-light tracking-[0.2em] uppercase">
              Specialisations Overview
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#00e5ff]" />
          </motion.div>
          <motion.h2
            variants={itemVars}
            className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-tight leading-[1.1] text-white"
          >
            Choose Your{" "}
            <span className="text-[#00e5ff] font-light">Career Pathway</span>
          </motion.h2>
        </motion.div>

        {/* 2×2 Card Grid */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {specialisations.map((spec, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="group relative cursor-pointer rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              style={glass}
            >
              {/* Hover accent glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top right, ${spec.accent}12, transparent 60%)` }}
              />
              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: `1px solid ${spec.accent}28` }}
              />

              {/* Top content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-3 sm:mb-4 tracking-tight">
                  {spec.title}
                </h3>
                <p className="text-white/50 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-thin mb-6 sm:mb-8">
                  {spec.description}
                </p>
              </div>

              {/* Bottom content */}
              <div className="relative z-10">
                <p className="text-[10px] sm:text-[11px] text-white/35 font-light uppercase tracking-[0.2em] mb-3 sm:mb-4">
                  Target Career Roles
                </p>

                {/* Role pills */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-8">
                  {spec.roles.map((role, rIndex) => (
                    <span
                      key={rIndex}
                      className="px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-[12px] font-light transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.45)",
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = `${spec.accent}12`;
                        el.style.borderColor = `${spec.accent}40`;
                        el.style.color = spec.accent;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(255,255,255,0.05)";
                        el.style.borderColor = "rgba(255,255,255,0.1)";
                        el.style.color = "rgba(255,255,255,0.45)";
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Card CTA */}
                <div
                  className="pt-5 sm:pt-6 flex items-center justify-between transition-colors duration-300"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span
                    className="text-[12px] sm:text-[13px] font-light tracking-widest uppercase transition-colors duration-300"
                    style={{ color: spec.accent }}
                  >
                    Download Syllabus
                  </span>
                  <span
                    className="text-lg sm:text-xl transform group-hover:translate-x-2 transition-transform duration-300"
                    style={{ color: spec.accent }}
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center flex flex-col items-center"
        >
          <p className="text-white/40 text-[14px] sm:text-[15px] font-thin mb-5 sm:mb-6 px-4">
            Not sure which path aligns best with your goals?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 text-white/40 hover:text-white/80 px-6 py-4 font-light text-[12px] sm:text-[13px] uppercase tracking-widest transition-all group cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "9999px",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Speak to an Academic Advisor
            <span className="text-base leading-none font-thin group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}