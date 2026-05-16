"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

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
    accent: "#00e5ff",
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
    accent: "#00e5ff",
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
    accent: "#00e5ff",
  },
];

const driveFileId = "194XCFquD6K4srk_lmdhqwqUxlCZ2Ngoq";
const brochureDownloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

export default function ProgrammeJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaRowRef = useRef<HTMLDivElement>(null);
  const [lineCutoff, setLineCutoff] = useState(140);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

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

  const cardVars: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative z-20 w-full py-20 sm:py-24 md:py-32 bg-transparent overflow-hidden px-4 sm:px-6">

      {/* Localised purple glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[70vw] md:h-[70vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(176,38,255,0.04), transparent 60%)" }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16 md:mb-28"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-px bg-[#00e5ff]" />
            <span className="text-[10px] sm:text-[11px] text-[#00e5ff] font-light tracking-[0.2em] uppercase">
              3-Year Roadmap
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#00e5ff]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight leading-[1.1] text-white">
            Your Path to{" "}
            <span className="text-[#00e5ff] font-light">Industry Leadership</span>
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto">

          {/* Scroll-driven timeline line */}
          <div
            className="hidden md:block absolute left-[39px] top-[40px] w-px z-0"
            style={{ bottom: `${lineCutoff}px` }}
          >
            <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.06)" }} />
            <motion.div
              className="absolute inset-0"
              style={{
                scaleY,
                transformOrigin: "top",
                background: "#00e5ff",
                boxShadow: "0 0 12px rgba(0,229,255,0.6), 0 0 30px rgba(0,229,255,0.3)",
              }}
            />
          </div>

          <div className="flex flex-col gap-10 sm:gap-16 md:gap-24 relative z-10">

            {journeySteps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 group">

                {/* Timeline node */}
                <div className="relative flex-shrink-0 mt-0 sm:mt-2 z-10">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center relative transition-all duration-500"
                    style={{
                      background: `${step.accent}15`,
                      border: `1.5px solid ${step.accent}50`,
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      boxShadow: `0 0 18px ${step.accent}40, 0 0 40px ${step.accent}20, inset 0 1px 0 rgba(255,255,255,0.12)`,
                    }}
                  >
                    {/* Pulsing glow ring */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: `0 0 30px ${step.accent}80, 0 0 60px ${step.accent}40`, border: `1.5px solid ${step.accent}` }}
                    />
                    <span
                      className="font-light text-base md:text-xl transition-all duration-500 relative z-10"
                      style={{
                        color: step.accent,
                        textShadow: `0 0 12px ${step.accent}cc, 0 0 24px ${step.accent}80`,
                      }}
                    >
                      0{index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  variants={cardVars}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-20%" }}
                  className="flex-1 w-full rounded-3xl p-6 md:p-10 transition-all duration-500 hover:-translate-y-1 overflow-hidden relative"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: "0 4px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
                  }}
                >
                  {/* Per-card hover glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top right, ${step.accent}10, transparent 60%)` }}
                  />
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ border: `1px solid ${step.accent}25` }}
                  />

                  {/* Card header */}
                  <div
                    className="relative z-10 mb-5 sm:mb-6 pb-5 sm:pb-6"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <p
                      className="text-[11px] md:text-[12px] font-light tracking-widest uppercase mb-2 md:mb-3"
                      style={{ color: step.accent }}
                    >
                      {step.year}
                    </p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-2 md:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/45 text-[13px] sm:text-sm md:text-base font-thin">
                      {step.description}
                    </p>
                  </div>

                  {/* Points */}
                  <ul className="relative z-10 space-y-4 mb-6 sm:mb-8">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 sm:gap-4">
                        <div
                          className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center mt-0.5 md:mt-1"
                          style={{ background: `${step.accent}12`, border: `1px solid ${step.accent}30` }}
                        >
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={step.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="text-white/50 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-thin">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight badge */}
                  <div
                    className="relative z-10 inline-flex px-3 md:px-4 py-2 rounded-full text-[11px] md:text-[12px] font-light tracking-wide"
                    style={{
                      background: `${step.accent}0f`,
                      border: `1px solid ${step.accent}25`,
                      color: step.accent,
                    }}
                  >
                    ✦ {step.highlight}
                  </div>
                </motion.div>
              </div>
            ))}

            {/* CTA destination node */}
            <motion.div
              ref={ctaRowRef}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 mt-4 sm:mt-6 md:mt-8 items-start"
            >
              {/* Terminal node */}
              <div className="relative flex-shrink-0 mt-2 z-10 hidden md:flex">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(0,229,255,0.12)",
                    border: "1.5px solid rgba(0,229,255,0.5)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: "0 0 18px rgba(0,229,255,0.5), 0 0 40px rgba(0,229,255,0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#00e5ff" stroke="#00e5ff" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
              </div>

              {/* CTA content */}
              <div className="flex-1 w-full flex flex-col py-2">
                <h3 className="text-3xl sm:text-4xl md:text-[2.75rem] font-thin text-white mb-3 md:mb-4 tracking-tight">
                  The next move is{" "}
                  <span className="text-[#00e5ff] font-light">yours.</span>
                </h3>

                <p className="text-white/45 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-thin mb-8 md:mb-10 max-w-md">
                  Join the elite group of future tech leaders. Limited seats available for the 2026 intake.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 text-white px-8 sm:px-10 py-4 rounded-full font-light text-[12px] md:text-[13px] uppercase tracking-widest transition-all group"
                    style={{ background: "#b026ff", boxShadow: "0 10px 30px rgba(176,38,255,0.3)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(176,38,255,0.5)"}
onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(176,38,255,0.3)"}
                  >
                    Apply Now
                    <span className="text-base leading-none font-thin group-hover:translate-x-1 transition-transform">→</span>
                  </motion.button>

                  <motion.a
                    href={brochureDownloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ opacity: 1, x: 4 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 text-white/40 hover:text-white/80 px-6 py-4 font-light text-[12px] md:text-[13px] uppercase tracking-widest transition-all group cursor-pointer"
                  >
                    Download Brochure
                    <span className="text-base leading-none font-thin group-hover:translate-x-1 transition-transform">→</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}