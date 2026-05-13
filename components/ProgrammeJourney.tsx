"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const journeySteps = [
  {
    year: "Year 1",
    title: "Foundation",
    description: "Build a strong base in tech fundamentals before branching out.",
    points: [
      "Strong grounding in Computer Applications through immersive workshops, hands-on labs, and skill-building modules.",
      "Core foundation modules shared across all specialisations."
    ],
    highlight: "Immersive workshops & hands-on labs"
  },
  {
    year: "Year 2",
    title: "Work-Integrated Learning",
    description: "Step into the real world. Learn while working in the industry.",
    points: [
      "Students begin working with partner tech companies in Infopark, Kochi — 20+ hours/week of live industry experience.",
      "Weekend virtual classes ensure academic continuity alongside the work placement."
    ],
    highlight: "20+ hours/week of live industry experience"
  },
  {
    year: "Year 3",
    title: "Specialisation & Career Readiness",
    description: "Master your niche and prepare for high-impact deployment.",
    points: [
      "Deep domain specialisation, advanced mentor-guided projects, and placement readiness training.",
      "Dedicated placement support: Infopark, Kochi — leading tech companies."
    ],
    highlight: "Dedicated placement support"
  }
];

export default function ProgrammeJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Using scaleY instead of height ensures hardware acceleration and perfect mathematical boundaries
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const cardVars: Variants = {
    hidden: { opacity: 0, x: 30, filter: "blur(5px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative z-20 w-full py-20 md:py-32 bg-transparent overflow-hidden px-4 md:px-6">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[70vw] md:h-[70vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.03),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 md:mb-28"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#0066ff]" />
            <span className="text-[10px] md:text-[11px] text-[#0066ff] font-semibold tracking-[0.2em] uppercase">
              3-Year Roadmap
            </span>
            <div className="w-8 h-[1px] bg-[#0066ff]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white">
            Your Path to <span className="text-[#0066ff] font-medium">Industry Leadership</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto pb-4">
          
          {/* 
            THE PERFECT TRACK:
            By setting top and bottom to exact icon radii (28px for mobile, 40px for desktop),
            the line starts directly in the center of the first circle and terminates 
            directly in the center of the last CTA circle. It will never bleed past.
          */}
          <div className="absolute left-[28px] md:left-[40px] top-[28px] md:top-[40px] bottom-[28px] md:bottom-[40px] w-[2px] -ml-[1px]">
            {/* Faded Background Track */}
            <div className="absolute inset-0 bg-white/10" />
            
            {/* Animated Highlight Line */}
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-[#0066ff] shadow-[0_0_15px_rgba(0,102,255,0.8)]"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            
            {/* Map through timeline steps */}
            {journeySteps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 group">
                
                {/* Number Node */}
                <div className="relative flex-shrink-0 mt-0 sm:mt-2">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#02040a] border border-white/10 flex items-center justify-center relative z-10 group-hover:border-[#0066ff]/50 transition-colors duration-500"
                  >
                    <div className="text-[#0066ff] font-semibold text-base md:text-xl">
                      0{index + 1}
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div 
                  variants={cardVars}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-20%" }}
                  className="flex-1 w-full rounded-[24px] md:rounded-3xl bg-[#02040a]/40 backdrop-blur-md border border-white/5 p-6 md:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-[#0066ff]/30"
                >
                  <div className="mb-6 pb-6 border-b border-white/5">
                    <p className="text-[11px] md:text-[13px] text-[#0066ff] font-medium tracking-widest uppercase mb-2 md:mb-3">
                      {step.year}
                    </p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-2 md:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-[13px] sm:text-sm md:text-base font-light">
                      {step.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/5 flex items-center justify-center mt-0.5 md:mt-1">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p className="text-white/70 text-[13px] md:text-[15px] leading-relaxed font-light">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Step Micro-Highlight */}
                  <div className="inline-flex px-3 md:px-4 py-2 rounded-lg bg-[#0066ff]/10 border border-[#0066ff]/20 text-[12px] md:text-[13px] text-[#0066ff] font-medium">
                    ✦ {step.highlight}
                  </div>
                </motion.div>
              </div>
            ))}

            {/* --- MINIMAL CONVERSION DESTINATION NODE --- */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8 group relative"
            >
              {/* Lightning Bolt Node (The exact termination point of the line) */}
              <div className="relative flex-shrink-0 mt-0 sm:mt-2">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#02040a] border-2 border-[#0066ff] flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,102,255,0.4)]">
                  <div className="absolute inset-0 rounded-full bg-[#0066ff]/20 animate-ping opacity-50" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0066ff" stroke="#0066ff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="md:w-[28px] md:h-[28px]">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
              </div>

              {/* Stripped-Down, Raw CTA Canvas */}
              <div className="flex-1 w-full flex flex-col justify-center py-2 md:py-4">
                
                {/* Localized CTA Glow */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[80%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.08),transparent_60%)] pointer-events-none -z-10" />

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
                  The next move is <span className="text-[#0066ff] font-medium italic">yours.</span>
                </h3>
                
                <p className="text-white/40 text-[14px] md:text-[16px] leading-relaxed font-light mb-10 max-w-md">
                  Join the elite group of future tech leaders. Limited seats available for the 2026 intake.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                  {/* Primary Convert Button */}
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0066ff] hover:bg-[#0052cc] text-white px-10 py-4.5 rounded-full font-bold text-[12px] md:text-[13px] uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(0,102,255,0.4)] hover:shadow-[0_0_50px_rgba(0,102,255,0.6)] hover:-translate-y-1">
                    Apply Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                  
                  {/* Ultra-Minimal Ghost Button */}
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent text-white/50 hover:text-white px-8 py-4.5 rounded-full font-semibold text-[12px] md:text-[13px] uppercase tracking-[0.2em] transition-all hover:bg-white/5">
                    View Syllabus
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}