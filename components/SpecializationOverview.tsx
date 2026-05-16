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
  },
];

const ACCENT = "#7b2fff";

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

  return (
    <section className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[55vw] md:h-[55vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(123,47,255,0.06), transparent 65%)" }}
      />

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
            <div className="w-8 h-px" style={{ background: ACCENT }} />
            <span className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Specialisations Overview
            </span>
            <div className="w-8 h-px" style={{ background: ACCENT }} />
          </motion.div>

          <motion.h2
            variants={itemVars}
            className="text-3xl md:text-5xl font-thin tracking-tight leading-[1.1]"
            style={{ color: "#1a0050" }}
          >
            Choose Your{" "}
            <span className="font-light" style={{ color: ACCENT }}>Career Pathway</span>
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
              className="group relative cursor-pointer rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(123,47,255,0.15)",
                boxShadow: "0 2px 16px rgba(123,47,255,0.08), 0 8px 32px rgba(123,47,255,0.05)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top right, rgba(123,47,255,0.06), transparent 60%)" }}
              />
              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: "1px solid rgba(123,47,255,0.3)" }}
              />

              {/* Top content */}
              <div className="relative z-10">
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4 tracking-tight"
                  style={{ color: "#1a0050" }}
                >
                  {spec.title}
                </h3>
                <p
                  className="text-[14px] sm:text-[15px] leading-relaxed font-thin mb-6 sm:mb-8"
                  style={{ color: "rgba(30,0,80,0.5)" }}
                >
                  {spec.description}
                </p>
              </div>

              {/* Bottom content */}
              <div className="relative z-10">
                <p
                  className="text-[11px] font-light uppercase tracking-[0.2em] mb-3 sm:mb-4"
                  style={{ color: "rgba(30,0,80,0.35)" }}
                >
                  Target Career Roles
                </p>

                {/* Role pills */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-8">
                  {spec.roles.map((role, rIndex) => (
                    <span
                      key={rIndex}
                      className="px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-[12px] font-light transition-all duration-300"
                      style={{
                        background: "rgba(123,47,255,0.05)",
                        border: "1px solid rgba(123,47,255,0.15)",
                        color: "rgba(30,0,80,0.45)",
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(123,47,255,0.1)";
                        el.style.borderColor = "rgba(123,47,255,0.4)";
                        el.style.color = ACCENT;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(123,47,255,0.05)";
                        el.style.borderColor = "rgba(123,47,255,0.15)";
                        el.style.color = "rgba(30,0,80,0.45)";
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Card CTA */}
                <div
                  className="pt-5 sm:pt-6 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(123,47,255,0.08)" }}
                >
                  <span
                    className="text-[12px] sm:text-[13px] font-light tracking-widest uppercase transition-colors duration-300"
                    style={{ color: ACCENT }}
                  >
                    Download Syllabus
                  </span>
                  <span
                    className="text-lg sm:text-xl transform group-hover:translate-x-2 transition-transform duration-300"
                    style={{ color: ACCENT }}
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
          <p
            className="text-[14px] sm:text-[15px] font-thin mb-5 sm:mb-6 px-4"
            style={{ color: "rgba(30,0,80,0.45)" }}
          >
            Not sure which path aligns best with your goals?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-light text-[12px] sm:text-[13px] uppercase tracking-widest transition-all group cursor-pointer"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(123,47,255,0.2)",
              color: "rgba(30,0,80,0.5)",
              boxShadow: "0 2px 16px rgba(123,47,255,0.08)",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(123,47,255,0.4)";
              el.style.color = ACCENT;
              el.style.boxShadow = "0 4px 24px rgba(123,47,255,0.15)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(123,47,255,0.2)";
              el.style.color = "rgba(30,0,80,0.5)";
              el.style.boxShadow = "0 2px 16px rgba(123,47,255,0.08)";
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