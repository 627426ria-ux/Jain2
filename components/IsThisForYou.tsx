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
  const shouldReduceMotion = useReducedMotion();

  // ── Optimized Variants: No Blurs, No Hydration Mismatches ──
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">

      {/* Background glow — static */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[55vw] md:h-[55vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(123,47,255,0.06), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px 0px" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "#7b2fff" }} />
            <span className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: "#7b2fff" }}>
              Candidate Profile
            </span>
            <div className="w-8 h-px" style={{ background: "#7b2fff" }} />
          </motion.div>

          <motion.h2
            variants={itemVars}
            className="text-3xl md:text-5xl font-thin tracking-tight leading-[1.1]"
            style={{ color: "#1a0050" }}
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
          viewport={{ once: true, margin: "-50px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        >
          {criteria.map((text, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="candidate-card relative rounded-2xl p-6 md:p-8 flex items-start gap-5 overflow-hidden cursor-default"
            >
              {/* Hover glow (Pure CSS) */}
              <div
                aria-hidden
                className="card-glow absolute inset-0 rounded-2xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(123,47,255,0.06), transparent 60%)" }}
              />

              {/* Checkmark */}
              <div
                className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
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
                  className="check-icon"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              {/* Text */}
              <p className="card-text relative z-10 text-[15px] md:text-[16px] leading-relaxed font-thin">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Global CSS: Zero JS Style Mutations ── */}
      <style>{`
        /* Card Base styling */
        .candidate-card {
          background: #ffffff;
          border: 1px solid rgba(123,47,255,0.15);
          box-shadow: 0 2px 16px rgba(123,47,255,0.08), 0 8px 32px rgba(123,47,255,0.05);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), 
                      box-shadow 0.4s ease,
                      border-color 0.4s ease;
        }
        
        /* Card Hover */
        .candidate-card:hover {
          transform: translateY(-4px);
          border-color: rgba(123,47,255,0.3);
          box-shadow: 0 4px 24px rgba(123,47,255,0.12), 0 12px 40px rgba(123,47,255,0.07);
        }

        /* Hover Inner Background Glow */
        .card-glow {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .candidate-card:hover .card-glow {
          opacity: 1;
        }

        /* Checkmark Icon Hover */
        .check-icon {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        .candidate-card:hover .check-icon {
          opacity: 1;
        }

        /* Text Hover */
        .card-text {
          color: rgba(30,0,80,0.5);
          transition: color 0.5s ease;
        }
        .candidate-card:hover .card-text {
          color: rgba(30,0,80,0.85);
        }

        /* Reduced Motion Fallback */
        @media (prefers-reduced-motion: reduce) {
          .candidate-card,
          .candidate-card:hover {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}