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
  const ctaRowRef = useRef<HTMLDivElement>(null);
  
  // State to dynamically hold the perfect cutoff pixel value for the line
  const [lineCutoff, setLineCutoff] = useState(140);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Dynamically calculate the distance from the bottom of the section to the center of the icon
  useEffect(() => {
    const updateLayout = () => {
      if (ctaRowRef.current) {
        const rowHeight = ctaRowRef.current.offsetHeight;
        // The icon is 80px tall (center is 40px). It has a margin-top of 8px (mt-2).
        // Distance from top of the CTA row to the center of the icon = 48px.
        // Therefore, the perfect bottom cutoff is rowHeight - 48px.
        setLineCutoff(rowHeight - 48);
      }
    };
    
    // Initial run and recalculate on window resize
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const cardVars: Variants = {
    hidden: { opacity: 0, x: 20, scale: 0.98, filter: "blur(5px)" },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative z-20 w-full py-20 sm:py-24 md:py-32 bg-transparent overflow-hidden px-4 sm:px-6">
      
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
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[1px] bg-[#0066ff]" />
            <span className="text-[10px] sm:text-[11px] text-[#0066ff] font-bold tracking-[0.2em] uppercase">
              3-Year Roadmap
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-[#0066ff]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#02040a]">
            Your Path to <span className="text-[#0066ff] font-medium">Industry Leadership</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full max-w-4xl mx-auto">
          
          {/* THE PROGRESSION LINE (Dynamically calculated bottom offset) */}
          <div 
            className="hidden md:block absolute left-[39px] top-[40px] w-[2px] z-0"
            style={{ bottom: `${lineCutoff}px` }}
          >
            <div className="absolute inset-0 bg-[#0066ff]/10" />
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-[#0066ff] shadow-[0_0_15px_rgba(0,102,255,0.4)]"
            />
          </div>

          <div className="flex flex-col gap-10 sm:gap-16 md:gap-24 relative z-10">
            
            {/* Timeline Steps */}
            {journeySteps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 group">
                
                {/* Number Node */}
                <div className="relative flex-shrink-0 mt-0 sm:mt-2 z-10">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white border-2 border-[#0066ff]/20 flex items-center justify-center relative shadow-sm group-hover:border-[#0066ff] transition-colors duration-500"
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
                  className="flex-1 w-full rounded-[24px] md:rounded-3xl bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 md:p-10 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,102,255,0.08)] hover:border-[#0066ff]/30"
                >
                  <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-gray-100">
                    <p className="text-[11px] md:text-[13px] text-[#0066ff] font-semibold tracking-widest uppercase mb-2 md:mb-3">
                      {step.year}
                    </p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#02040a] mb-2 md:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#02040a]/60 text-[13px] sm:text-sm md:text-base font-light">
                      {step.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-6 sm:mb-8">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#0066ff]/5 flex items-center justify-center mt-0.5 md:mt-1">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <p className="text-[#02040a]/70 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-light">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="inline-flex px-3 md:px-4 py-2 rounded-lg bg-[#0066ff]/5 border border-[#0066ff]/10 text-[12px] md:text-[13px] text-[#0066ff] font-medium">
                    ✦ {step.highlight}
                  </div>
                </motion.div>
              </div>
            ))}

            {/* --- CONVERSION DESTINATION NODE --- */}
            <motion.div 
              ref={ctaRowRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 mt-4 sm:mt-6 md:mt-8 group relative items-start"
            >
              {/* Lightning Bolt Icon */}
              <div className="relative flex-shrink-0 mt-2 z-10 hidden md:flex">
                <div className="w-20 h-20 rounded-full bg-white border-[2.5px] border-[#0066ff] flex items-center justify-center relative shadow-[0_4px_20px_rgba(0,102,255,0.15)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0066ff" stroke="#0066ff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
              </div>

              {/* Text & Buttons */}
              <div className="flex-1 w-full flex flex-col py-2">
                <h3 className="text-3xl sm:text-4xl md:text-[2.75rem] font-light text-[#02040a] mb-3 md:mb-4 tracking-tight">
                  The next move is <span className="text-[#0066ff] font-medium italic">yours.</span>
                </h3>
                
                <p className="text-[#02040a]/60 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-light mb-8 md:mb-10 max-w-md">
                  Join the elite group of future tech leaders. Limited seats available for the 2026 intake.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                  {/* Primary Blue Button */}
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 sm:px-10 py-4 md:py-4.5 rounded-full font-semibold text-[12px] md:text-[13px] uppercase tracking-widest transition-all shadow-[0_4px_15px_rgba(0,102,255,0.3)] hover:shadow-[0_10px_25px_rgba(0,102,255,0.5)] hover:-translate-y-0.5">
                    Apply Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                  
                  {/* Secondary White Button */}
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#02040a]/70 hover:text-[#02040a] shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] px-8 py-4 md:py-4.5 rounded-full font-semibold text-[12px] md:text-[13px] uppercase tracking-widest transition-all hover:-translate-y-0.5">
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