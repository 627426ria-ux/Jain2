"use client";
import { motion, Variants } from "framer-motion";

export default function AdmissionsEligibility() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Progression Timeline Variants
  const trackLineDesktop: Variants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } }
  };

  const trackLineMobile: Variants = {
    hidden: { scaleY: 0 },
    show: { scaleY: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 } }
  };

  const activeNode = (delayTime: number): Variants => ({
    hidden: { 
      borderColor: "#e5e7eb", 
      color: "#9ca3af", 
      boxShadow: "0px 0px 0px rgba(0,102,255,0)" 
    },
    show: { 
      borderColor: "#0066ff", 
      color: "#0066ff", 
      boxShadow: "0px 0px 15px rgba(0,102,255,0.2)", 
      transition: { duration: 0.4, ease: "easeOut", delay: delayTime } 
    }
  });

  return (
    <section className="relative z-20 w-full py-20 sm:py-24 md:py-32 bg-transparent overflow-hidden px-4 sm:px-6">
      
      {/* --- LOCALIZED SECTION GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <motion.div variants={itemVars} className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[1px] bg-[#0066ff]" />
            <span className="text-[10px] sm:text-[11px] text-[#0066ff] font-bold tracking-[0.2em] uppercase">
              Next Steps
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-[#0066ff]" />
          </motion.div>
          <motion.h2 
            variants={itemVars}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-[#02040a]"
          >
            Admissions & <span className="text-[#0066ff] font-medium">Eligibility</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-8"
        >
          {/* LEFT COLUMN: The Urgency & Action Center */}
          <motion.div 
            variants={itemVars}
            className="flex-1 lg:max-w-sm rounded-[24px] bg-gradient-to-b from-[#0066ff]/5 to-white border border-[#0066ff]/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 tracking-widest uppercase">
                  Applications Now Open
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-medium text-[#02040a] mb-2 tracking-tight">
                Secure Your Seat
              </h3>
              <p className="text-[#02040a]/60 text-[13px] sm:text-[14px] leading-relaxed font-light mb-6 sm:mb-8">
                Join the August 2026 cohort and begin your journey into high-impact AI development.
              </p>

              <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                <div>
                  <p className="text-[10px] sm:text-[11px] text-[#02040a]/40 font-semibold uppercase tracking-[0.2em] mb-1">Application Deadline</p>
                  <p className="text-base sm:text-lg text-[#02040a] font-medium flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    June 20th
                  </p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] text-[#02040a]/40 font-semibold uppercase tracking-[0.2em] mb-1">Programme Start</p>
                  <p className="text-base sm:text-lg text-[#02040a] font-light">August 2026</p>
                </div>
              </div>
            </div>

            <a 
              href="https://jainsoft.co.in/application" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full group"
            >
              <button className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white py-3.5 sm:py-4 rounded-xl font-semibold text-[12px] sm:text-[13px] uppercase tracking-widest transition-all shadow-[0_4px_15px_rgba(0,102,255,0.3)] hover:shadow-[0_10px_25px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Start Application
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </a>
          </motion.div>

          {/* RIGHT COLUMN: Criteria & Process Grid */}
          <div className="flex-1 flex flex-col gap-5 sm:gap-6 md:gap-8">
            
            {/* Top Row: Eligibility & Mode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              <motion.div 
                variants={itemVars}
                className="rounded-[24px] bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-8 transition-shadow hover:shadow-[0_15px_40px_rgba(0,102,255,0.08)]"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-5 sm:mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#02040a]/40 font-semibold uppercase tracking-[0.2em] mb-2">Minimum Eligibility</p>
                <h4 className="text-2xl sm:text-3xl font-medium text-[#02040a] mb-2">70-85%</h4>
                <p className="text-[#02040a]/60 text-[12px] sm:text-[13px] font-light">Academic aggregate required for admission consideration.</p>
              </motion.div>

              <motion.div 
                variants={itemVars}
                className="rounded-[24px] bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-8 transition-shadow hover:shadow-[0_15px_40px_rgba(0,102,255,0.08)]"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-5 sm:mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#02040a]/40 font-semibold uppercase tracking-[0.2em] mb-2">Mode of Learning</p>
                <h4 className="text-xl sm:text-2xl font-medium text-[#02040a] mb-2">Hybrid Model</h4>
                <p className="text-[#02040a]/60 text-[12px] sm:text-[13px] font-light">Weekday industry work + weekend virtual classes.</p>
              </motion.div>
            </div>

            {/* Bottom Row: Admission Process Timeline */}
            <motion.div 
              variants={itemVars}
              className="rounded-[24px] bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-8 flex-1 flex flex-col justify-center transition-shadow hover:shadow-[0_15px_40px_rgba(0,102,255,0.08)]"
            >
              <p className="text-[10px] sm:text-[11px] text-[#02040a]/40 font-semibold uppercase tracking-[0.2em] mb-6 sm:mb-8">Admission Process</p>
              
              <div className="relative flex flex-col sm:flex-row justify-between gap-6 sm:gap-4">
                
                {/* --- DESKTOP ANIMATED LINE (Mathematically centered) --- */}
                <div className="hidden sm:block absolute top-[23px] left-[24px] right-[24px] h-[2px] bg-gray-100" />
                <motion.div 
                  variants={trackLineDesktop}
                  className="hidden sm:block absolute top-[23px] left-[24px] right-[24px] h-[2px] bg-[#0066ff] origin-left shadow-[0_0_10px_rgba(0,102,255,0.3)]" 
                />
                
                {/* --- MOBILE ANIMATED LINE (Mathematically centered) --- */}
                <div className="block sm:hidden absolute left-[23px] top-[24px] bottom-[24px] w-[2px] bg-gray-100" />
                <motion.div 
                  variants={trackLineMobile}
                  className="block sm:hidden absolute left-[23px] top-[24px] bottom-[24px] w-[2px] bg-[#0066ff] origin-top shadow-[0_0_10px_rgba(0,102,255,0.3)]" 
                />

                {/* Step 1 */}
                <div className="relative z-10 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3 group">
                  <motion.div 
                    variants={activeNode(0.5)}
                    className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center font-semibold transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-sm"
                  >
                    1
                  </motion.div>
                  <div>
                    <h5 className="text-[#02040a] font-medium text-[14px] sm:text-[15px]">Online Application</h5>
                    <p className="text-[#02040a]/50 text-[12px] hidden sm:block mt-1 font-light">Submit your details</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3 group">
                  <motion.div 
                    variants={activeNode(1.25)}
                    className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center font-semibold transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-sm"
                  >
                    2
                  </motion.div>
                  <div>
                    <h5 className="text-[#02040a] font-medium text-[14px] sm:text-[15px]">Counselling Call</h5>
                    <p className="text-[#02040a]/50 text-[12px] hidden sm:block mt-1 font-light">1-on-1 discussion</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3 group">
                  <motion.div 
                    variants={activeNode(2.0)}
                    className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center font-semibold transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-sm"
                  >
                    3
                  </motion.div>
                  <div>
                    <h5 className="text-[#02040a] font-medium text-[14px] sm:text-[15px]">Offer Letter</h5>
                    <p className="text-[#02040a]/50 text-[12px] hidden sm:block mt-1 font-light">Welcome to JAIN</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}