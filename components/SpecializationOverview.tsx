"use client";
import { motion, Variants, useReducedMotion } from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();

  // ── Drive Download Link ───────────────────────────────────────────────────
  const driveFileId = "194XCFquD6K4srk_lmdhqwqUxlCZ2Ngoq";
  const brochureDownloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  // ── Variants ──────────────────────────────────────────────────────────────
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

  const ctaVars: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">

      {/* Background glow — single, static */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[55vw] md:h-[55vw] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(123,47,255,0.05), transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section Header ────────────────────────────────────────────── */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: ACCENT }} />
            <span
              className="text-[11px] font-light tracking-[0.2em] uppercase"
              style={{ color: ACCENT }}
            >
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
            <span className="font-light" style={{ color: ACCENT }}>
              Career Pathway
            </span>
          </motion.h2>
        </motion.div>

        {/* ── 2×2 Card Grid ─────────────────────────────────────────────── */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {specialisations.map((spec, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="spec-card group relative cursor-pointer rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(123,47,255,0.15)",
                boxShadow:
                  "0 2px 16px rgba(123,47,255,0.07), 0 8px 32px rgba(123,47,255,0.04)",
              }}
            >
              {/* Hover glow */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(123,47,255,0.07), transparent 60%)",
                }}
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

                <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-2">
                  {spec.roles.map((role, rIndex) => (
                    <span key={rIndex} className="role-pill px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-[12px] font-light">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTAs ────────────────────────────────────────────────── */}
        <motion.div
          variants={ctaVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-center"
        >
          <p
            className="text-[14px] sm:text-[15px] font-thin mb-8 px-4"
            style={{ color: "rgba(30,0,80,0.45)" }}
          >
            Not sure which path aligns best with your goals? Let's figure it out together.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
            {/* Brochure Button updated to anchor link */}
            <a 
              href={brochureDownloadUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="brochure-btn w-full sm:w-auto flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-light text-[12px] sm:text-[13px] uppercase tracking-widest cursor-pointer"
            >
              Download Brochure
              <span className="btn-arrow text-base leading-none font-thin transition-transform duration-300">→</span>
            </a>

            <button className="advisor-btn w-full sm:w-auto flex items-center justify-center gap-2.5 px-10 py-4 rounded-full font-light text-[12px] sm:text-[13px] uppercase tracking-widest cursor-pointer">
              Speak to an Advisor
              <span className="btn-arrow text-base leading-none font-thin transition-transform duration-300">→</span>
            </button>
          </div>
        </motion.div>

      </div>

      {/* ── Global CSS ────────────────────────────────────────────────── */}
      <style>{`
        /* Cards */
        .spec-card {
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s ease,
                      border-color 0.4s ease;
        }
        .spec-card:hover {
          transform: translateY(-4px);
          border-color: rgba(123,47,255,0.3);
          box-shadow: 0 4px 24px rgba(123,47,255,0.12), 0 12px 40px rgba(123,47,255,0.07);
        }

        /* Role pills */
        .role-pill {
          background: rgba(123,47,255,0.05);
          border: 1px solid rgba(123,47,255,0.15);
          color: rgba(30,0,80,0.45);
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
        }
        .role-pill:hover {
          background: rgba(123,47,255,0.1);
          border-color: rgba(123,47,255,0.38);
          color: #7b2fff;
        }

        /* Universal Brochure button */
        .brochure-btn {
          background: #7b2fff;
          color: #ffffff;
          box-shadow: 0 4px 24px rgba(123,47,255,0.25);
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }
        .brochure-btn:hover {
          background: #6215d6;
          box-shadow: 0 6px 32px rgba(123,47,255,0.35);
          transform: scale(1.02);
        }
        .brochure-btn:active {
          transform: scale(0.98);
        }
        .brochure-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Advisor button */
        .advisor-btn {
          background: #ffffff;
          border: 1px solid rgba(123,47,255,0.2);
          color: rgba(30,0,80,0.5);
          box-shadow: 0 2px 16px rgba(123,47,255,0.07);
          transition: border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
        }
        .advisor-btn:hover {
          border-color: rgba(123,47,255,0.4);
          color: #7b2fff;
          box-shadow: 0 4px 24px rgba(123,47,255,0.14);
          transform: scale(1.02);
        }
        .advisor-btn:active {
          transform: scale(0.98);
        }
        .advisor-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Respect system preference */
        @media (prefers-reduced-motion: reduce) {
          .spec-card,
          .spec-card:hover,
          .brochure-btn,
          .brochure-btn:hover,
          .brochure-btn:active,
          .advisor-btn,
          .advisor-btn:hover,
          .advisor-btn:active {
            transition: none;
            transform: none;
          }
          .role-pill { transition: none; }
        }
      `}</style>
    </section>
  );
}