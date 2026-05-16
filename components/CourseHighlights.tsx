"use client";
import { motion, Variants, useReducedMotion } from "framer-motion";

const highlights = [
  {
    title: "Work While You Learn",
    description: "Graduate with 2 years of professional experience alongside your degree.",
    accent: "#7b2fff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Elite Mentorship",
    description: "50+ faculty from leading global firms, each bringing real industry experience.",
    accent: "#b026ff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Skill-First Curriculum",
    description: "Focus on AI fluency, adaptability, communication, and real-world problem-solving.",
    accent: "#7b2fff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "AI-Integrated Learning",
    description: "Advanced AI tools embedded throughout your entire learning journey.",
    accent: "#b026ff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Global Industry Exposure",
    description: "International webinars, expert talks, and global collaborative projects.",
    accent: "#7b2fff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Dual Power at Graduation",
    description: "UGC-recognised BCA degree + a deployment-ready project portfolio.",
    accent: "#b026ff",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function CourseHighlights() {
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
    <section id="highlights" className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">

      {/* Background glow — static */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(123,47,255,0.05), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px 0px" }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "#7b2fff" }} />
            <span className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: "#7b2fff" }}>
              Course Highlights
            </span>
            <div className="w-8 h-px" style={{ background: "#7b2fff" }} />
          </motion.div>

          <motion.h2
            variants={itemVars}
            className="text-3xl md:text-5xl font-thin tracking-tight leading-[1.1]"
            style={{ color: "#1a0050" }}
          >
            The Ultimate{" "}
            <span className="font-light" style={{ color: "#7b2fff" }}>Advantage</span>
          </motion.h2>
        </motion.div>

        {/* 6-Card Grid */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {highlights.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="highlight-card relative rounded-3xl p-8 md:p-10 overflow-hidden cursor-default"
            >
              {/* Per-card accent glow on hover (Pure CSS) */}
              <div
                aria-hidden
                className="card-hover-bg absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top right, ${card.accent}12, transparent 60%)`,
                }}
              />

              {/* Hover border accent (Pure CSS) */}
              <div
                aria-hidden
                className="card-hover-border absolute inset-0 rounded-3xl pointer-events-none"
                style={{ border: `1px solid ${card.accent}45` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-8"
                style={{
                  background: `${card.accent}12`,
                  border: `1px solid ${card.accent}25`,
                  color: card.accent,
                }}
              >
                {card.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-light mb-3 tracking-tight" style={{ color: "#1a0050" }}>
                  {card.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed font-thin" style={{ color: "rgba(30,0,80,0.5)" }}>
                  {card.description}
                </p>
              </div>

              {/* Bottom accent line on hover (Pure CSS) */}
              <div
                aria-hidden
                className="card-accent-line absolute bottom-0 left-8 right-8 h-px pointer-events-none"
                style={{ background: `linear-gradient(to right, transparent, ${card.accent}55, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Global CSS: Zero JS Style Mutations ── */}
      <style>{`
        /* Card Base styling */
        .highlight-card {
          background: #ffffff;
          border: 1px solid rgba(123,47,255,0.15);
          box-shadow: 0 2px 16px rgba(123,47,255,0.08), 0 8px 32px rgba(123,47,255,0.05);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), 
                      box-shadow 0.4s ease;
        }
        
        /* Card Hover */
        .highlight-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 24px rgba(123,47,255,0.12), 0 12px 40px rgba(123,47,255,0.07);
        }

        /* Hover Inner Background Glow */
        .card-hover-bg {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .highlight-card:hover .card-hover-bg {
          opacity: 1;
        }

        /* Hover Border Overlay */
        .card-hover-border {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .highlight-card:hover .card-hover-border {
          opacity: 1;
        }

        /* Hover Bottom Accent Line */
        .card-accent-line {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .highlight-card:hover .card-accent-line {
          opacity: 1;
        }

        /* Reduced Motion Fallback */
        @media (prefers-reduced-motion: reduce) {
          .highlight-card,
          .highlight-card:hover {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}