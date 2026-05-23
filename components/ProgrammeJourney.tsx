"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, Variants, useReducedMotion } from "framer-motion";

const journeySteps = [
  {
    year: "Year 1",
    title: "Foundation",
    description: "Build a strong base in tech fundamentals before branching out.",
    points: [
      "Strong grounding in Computer Applications through immersive workshops, hands-on labs, and skill-building modules.",
      "Core foundation modules shared across all specialisations.",
    ],
    highlight: "Immersive workshops & hands-on labs",
  },
  {
    year: "Year 2",
    title: "Work-Integrated Learning",
    description: "Step into the real world. Learn while working in the industry.",
    points: [
      "Students begin working with partner tech companies in Infopark, Kochi — 20+ hours/week of live industry experience.",
      "Weekend virtual classes ensure academic continuity alongside the work placement.",
    ],
    highlight: "20+ hours/week of live industry experience",
  },
  {
    year: "Year 3",
    title: "Specialisation & Career Readiness",
    description: "Master your niche and prepare for high-impact deployment.",
    points: [
      "Deep domain specialisation, advanced mentor-guided projects, and placement readiness training.",
      "Dedicated placement support: Infopark, Kochi — leading tech companies.",
    ],
    highlight: "Dedicated placement support",
  },
];

const driveFileId = "194XCFquD6K4srk_lmdhqwqUxlCZ2Ngoq";
const brochureDownloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

const ACCENT = "#7b2fff";

export default function ProgrammeJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaRowRef = useRef<HTMLDivElement>(null);
  const [lineCutoff, setLineCutoff] = useState(140);
  const shouldReduceMotion = useReducedMotion();

  // Desktop timeline line scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [0, 1]
  );

  useEffect(() => {
    const updateLayout = () => {
      if (ctaRowRef.current) {
        setLineCutoff(ctaRowRef.current.offsetHeight - 48);
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // ── Variants (Matching the optimized Specialisations pattern) ──
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
        style={{ background: "radial-gradient(ellipse at center, rgba(123,47,255,0.05), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* ── Section Header ── */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: ACCENT }} />
            <span className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              3-Year Roadmap
            </span>
            <div className="w-8 h-px" style={{ background: ACCENT }} />
          </motion.div>

          <motion.h2
            variants={itemVars}
            className="text-3xl md:text-5xl font-thin tracking-tight leading-[1.1]"
            style={{ color: "#1a0050" }}
          >
            Your Path to{" "}
            <span className="font-light" style={{ color: ACCENT }}>Industry Leadership</span>
          </motion.h2>
        </motion.div>

        {/* ── Timeline ── */}
        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto">

          {/* Scroll-driven timeline line (Hidden on Mobile) */}
          <div
            aria-hidden
            className="hidden md:block absolute left-[39px] top-[40px] w-px z-0"
            style={{ bottom: `${lineCutoff}px` }}
          >
            <div className="absolute inset-0" style={{ background: "rgba(123,47,255,0.08)" }} />
            <motion.div
              className="absolute inset-0"
              style={{
                scaleY,
                transformOrigin: "top",
                background: ACCENT,
                boxShadow: `0 0 12px rgba(123,47,255,0.4), 0 0 30px rgba(123,47,255,0.2)`,
              }}
            />
          </div>

          <motion.div
            variants={containerVars}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-10 sm:gap-16 md:gap-8 relative z-10"
          >
            {journeySteps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12">

                {/* Timeline node */}
                <motion.div variants={itemVars} className="relative flex-shrink-0 mt-0 sm:mt-2 z-10">
                  <div
                    className="timeline-node w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center relative"
                    style={{
                      background: "#ffffff",
                      border: "1px solid rgba(123,47,255,0.22)",
                    }}
                  >
                    {/* Hover ring (CSS) */}
                    <div className="node-ring absolute inset-0 rounded-full pointer-events-none" />
                    <span className="font-light text-base md:text-xl relative z-10" style={{ color: ACCENT }}>
                      0{index + 1}
                    </span>
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  variants={itemVars}
                  className="journey-card flex-1 w-full relative rounded-2xl p-6 md:p-8 overflow-hidden cursor-default"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(123,47,255,0.15)",
                    boxShadow: "0 2px 16px rgba(123,47,255,0.07), 0 8px 32px rgba(123,47,255,0.04)",
                  }}
                >
                  {/* Hover glow (CSS) */}
                  <div
                    aria-hidden
                    className="card-glow absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at top left, rgba(123,47,255,0.06), transparent 60%)" }}
                  />

                  {/* Card header */}
                  <div
                    className="relative z-10 mb-5 pb-5"
                    style={{ borderBottom: "1px solid rgba(123,47,255,0.08)" }}
                  >
                    <p className="text-[11px] font-light tracking-widest uppercase mb-2" style={{ color: ACCENT }}>
                      {step.year}
                    </p>
                    <h3 className="text-xl md:text-2xl font-thin mb-2" style={{ color: "#1a0050" }}>
                      {step.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] font-thin leading-relaxed" style={{ color: "rgba(30,0,80,0.45)" }}>
                      {step.description}
                    </p>
                  </div>

                  {/* Points */}
                  <ul className="relative z-10 space-y-4 mb-6">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 group/point">
                        <div
                          className="point-icon flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                          style={{
                            background: "rgba(123,47,255,0.05)",
                            border: "1px solid rgba(123,47,255,0.15)",
                          }}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="text-[14px] md:text-[15px] leading-relaxed font-thin" style={{ color: "rgba(30,0,80,0.5)" }}>
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight badge */}
                  <div
                    className="relative z-10 inline-flex px-4 py-2 rounded-full text-[11px] md:text-[12px] font-light tracking-wide"
                    style={{
                      background: "rgba(123,47,255,0.06)",
                      border: "1px solid rgba(123,47,255,0.2)",
                      color: ACCENT,
                    }}
                  >
                    ✦ {step.highlight}
                  </div>
                </motion.div>
              </div>
            ))}

            {/* ── CTA destination node ── */}
            <motion.div
              ref={ctaRowRef}
              variants={itemVars}
              className="flex flex-col md:flex-row gap-6 md:gap-12 mt-6 md:mt-10 items-start"
            >
              {/* Terminal node (Hidden on mobile) */}
              <div className="relative flex-shrink-0 mt-2 z-10 hidden md:flex">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(123,47,255,0.08)",
                    border: "1.5px solid rgba(123,47,255,0.3)",
                    boxShadow: "0 2px 20px rgba(123,47,255,0.12)",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill={ACCENT} stroke={ACCENT} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
              </div>

              {/* CTA content */}
              <div className="flex-1 w-full flex flex-col py-2">
                <h3
                  className="text-3xl md:text-[2.75rem] font-thin tracking-tight mb-3 md:mb-4"
                  style={{ color: "#1a0050" }}
                >
                  The next move is{" "}
                  <span className="font-light" style={{ color: ACCENT }}>yours.</span>
                </h3>

                <p
                  className="text-[14px] md:text-[15px] leading-relaxed font-thin mb-8 md:mb-10 max-w-md"
                  style={{ color: "rgba(30,0,80,0.5)" }}
                >
                  Join the elite group of future tech leaders. Limited seats available for the 2026 intake.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
                  {/* Primary CTA Button */}
                  <a
                    href="#cta"
                    className="cta-btn-primary w-full sm:w-auto flex items-center justify-center gap-2.5 text-white px-8 sm:px-10 py-4 rounded-full font-light text-[12px] md:text-[13px] uppercase tracking-widest cursor-pointer"
                    style={{ background: ACCENT }}
                  >
                    Apply Now
                    <span className="btn-arrow text-base leading-none font-thin transition-transform duration-300">→</span>
                  </a>

                  {/* Secondary CTA Button */}
                  <a
                    href={brochureDownloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn-secondary w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 font-light text-[12px] md:text-[13px] uppercase tracking-widest cursor-pointer"
                    style={{ color: "rgba(30,0,80,0.45)" }}
                  >
                    Download Brochure
                    <span className="btn-arrow text-base leading-none font-thin transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* ── Global CSS ── all hover states here, zero JS style mutations ── */}
      <style>{`
        /* Card Hover */
        .journey-card {
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s ease,
                      border-color 0.4s ease;
        }
        .journey-card:hover {
          transform: translateY(-4px);
          border-color: rgba(123,47,255,0.3);
          box-shadow: 0 4px 24px rgba(123,47,255,0.12), 0 12px 40px rgba(123,47,255,0.07);
        }

        /* Card Inner Glow */
        .card-glow {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .journey-card:hover .card-glow {
          opacity: 1;
        }

        /* Timeline Node Hover (Triggered when hovering over card or node) */
        .node-ring {
          border: 1.5px solid rgba(123,47,255,0.4);
          box-shadow: 0 0 20px rgba(123,47,255,0.15);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .journey-card:hover ~ .timeline-node .node-ring,
        .timeline-node:hover .node-ring {
          opacity: 1;
        }

        /* List Item Icon Hover */
        .point-icon {
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .journey-card:hover .point-icon {
          background: rgba(123,47,255,0.08) !important;
          border-color: rgba(123,47,255,0.22) !important;
        }
        .journey-card:hover .point-icon svg {
          opacity: 1 !important;
        }

        /* Primary CTA */
        .cta-btn-primary {
          box-shadow: 0 10px 30px rgba(123,47,255,0.25);
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }
        .cta-btn-primary:hover {
          box-shadow: 0 15px 40px rgba(123,47,255,0.4);
          transform: scale(1.02);
        }
        .cta-btn-primary:active {
          transform: scale(0.98);
        }
        .cta-btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Secondary CTA */
        .cta-btn-secondary {
          transition: color 0.3s ease, transform 0.2s ease;
        }
        .cta-btn-secondary:hover {
          color: rgba(30,0,80,0.75) !important;
        }
        .cta-btn-secondary:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Respect system preference */
        @media (prefers-reduced-motion: reduce) {
          .journey-card,
          .journey-card:hover,
          .cta-btn-primary,
          .cta-btn-primary:hover,
          .cta-btn-primary:active,
          .cta-btn-secondary,
          .cta-btn-secondary:hover {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}