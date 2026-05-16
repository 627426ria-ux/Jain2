"use client";
import { motion, Variants, useReducedMotion } from "framer-motion";

const criteria = [
  "You envision yourself as a creator of intelligent digital solutions.",
  "You aim to build a global tech career in AI-powered systems and data-driven decision-making.",
  "You aspire to master Artificial Intelligence — from Full Stack AI Dev to Generative AI, Data Analytics, and AI-driven Design.",
  "You value mentorship and networking with industry experts.",
  "You believe in learning through real-world projects, internships, and industry collaborations.",
  "You see yourself as a changemaker, ready to lead the AI revolution.",
];

export default function IsThisForYou() {
  const prefersReducedMotion = useReducedMotion();

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">

      {/* Background glow — static */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[55vw] md:h-[55vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(123,47,255,0.06), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div
            variants={itemVars}
            className="flex items-center gap-3 mb-6"
            style={{ willChange: "opacity, transform, filter" }}
          >
            <div className="w-8 h-px" style={{ background: "#7b2fff" }} />
            <span className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: "#7b2fff" }}>
              Candidate Profile
            </span>
            <div className="w-8 h-px" style={{ background: "#7b2fff" }} />
          </motion.div>

          <motion.h2
            variants={itemVars}
            className="text-3xl md:text-5xl font-thin tracking-tight leading-[1.1]"
            style={{ color: "#1a0050", willChange: "opacity, transform, filter" }}
          >
            Is This Programme{" "}
            <span className="font-light" style={{ color: "#7b2fff" }}>For You?</span>
          </motion.h2>
        </motion.div>

        {/* Checklist Grid */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {criteria.map((text, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="group relative rounded-2xl p-6 md:p-8 flex items-start gap-5 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(123,47,255,0.15)",
                boxShadow: "0 2px 16px rgba(123,47,255,0.08), 0 8px 32px rgba(123,47,255,0.05)",
                willChange: "opacity, transform, filter",
                transform: "translateZ(0)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(123,47,255,0.06), transparent 60%)" }}
              />

              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: "1px solid rgba(123,47,255,0.3)" }}
              />

              {/* Checkmark */}
              <div
                className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 transition-all duration-500"
                style={{
                  background: "rgba(123,47,255,0.08)",
                  border: "1px solid rgba(123,47,255,0.22)",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7b2fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              {/* Text — inline style mutation on hover is contained within the card's
                  GPU tile, so it doesn't trigger a page-level repaint */}
              <p
                className="relative z-10 text-[15px] md:text-[16px] leading-relaxed font-thin transition-colors duration-500"
                style={{ color: "rgba(30,0,80,0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(30,0,80,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(30,0,80,0.5)")}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}