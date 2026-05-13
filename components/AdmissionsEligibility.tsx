"use client";
import { motion, Variants } from "framer-motion";

export default function AdmissionsEligibility() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">
      
      {/* --- LOCALIZED SECTION GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#0066ff]" />
            <span className="text-[11px] text-[#0066ff] font-semibold tracking-[0.2em] uppercase">
              Next Steps
            </span>
            <div className="w-8 h-[1px] bg-[#0066ff]" />
          </motion.div>
          <motion.h2 
            variants={itemVars}
            className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-white"
          >
            Admissions & <span className="text-[#0066ff] font-medium">Eligibility</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-6 md:gap-8"
        >
          {/* LEFT COLUMN: The Urgency & Action Center */}
          <motion.div 
            variants={itemVars}
            className="flex-1 lg:max-w-sm rounded-[24px] bg-gradient-to-b from-[#0066ff]/10 to-[#02040a]/40 backdrop-blur-md border border-[#0066ff]/30 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-emerald-400 tracking-widest uppercase">
                  Applications Now Open
                </span>
              </div>
              
              <h3 className="text-3xl font-medium text-white mb-2 tracking-tight">
                Secure Your Seat
              </h3>
              <p className="text-white/60 text-[14px] leading-relaxed font-light mb-8">
                Join the August 2026 cohort and begin your journey into high-impact AI development.
              </p>

              <div className="space-y-5 mb-10">
                <div>
                  <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-1">Application Deadline</p>
                  <p className="text-lg text-white font-medium flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    June 20th
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-1">Programme Start</p>
                  <p className="text-lg text-white font-light">August 2026</p>
                </div>
              </div>
            </div>

            <a 
              href="https://jainsoft.co.in/application" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full group"
            >
              <button className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white py-4 rounded-xl font-semibold text-[13px] uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,102,255,0.2)] hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Start Application
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </a>
          </motion.div>

          {/* RIGHT COLUMN: Criteria & Process Grid */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8">
            
            {/* Top Row: Eligibility & Mode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <motion.div 
                variants={itemVars}
                className="rounded-[24px] bg-[#02040a]/40 backdrop-blur-md border border-white/5 p-8 transition-colors hover:bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-2">Minimum Eligibility</p>
                <h4 className="text-3xl font-medium text-white mb-2">70-85%</h4>
                <p className="text-white/50 text-[13px] font-light">Academic aggregate required for admission consideration.</p>
              </motion.div>

              <motion.div 
                variants={itemVars}
                className="rounded-[24px] bg-[#02040a]/40 backdrop-blur-md border border-white/5 p-8 transition-colors hover:bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-2">Mode of Learning</p>
                <h4 className="text-2xl font-medium text-white mb-2">Hybrid Model</h4>
                <p className="text-white/50 text-[13px] font-light">Weekday industry work + weekend virtual classes.</p>
              </motion.div>
            </div>

            {/* Bottom Row: Admission Process Timeline */}
            <motion.div 
              variants={itemVars}
              className="rounded-[24px] bg-[#02040a]/40 backdrop-blur-md border border-white/5 p-8 flex-1 flex flex-col justify-center"
            >
              <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-8">Admission Process</p>
              
              <div className="relative flex flex-col sm:flex-row justify-between gap-8 sm:gap-4">
                {/* Connecting Line (Desktop) */}
                <div className="hidden sm:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-[#0066ff]/20 via-[#0066ff]/50 to-[#0066ff]/20" />
                
                {/* Connecting Line (Mobile) */}
                <div className="block sm:hidden absolute left-[23px] top-[10%] bottom-[10%] w-px bg-gradient-to-b from-[#0066ff]/20 via-[#0066ff]/50 to-[#0066ff]/20" />

                <div className="relative z-10 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3 group">
                  <div className="w-12 h-12 rounded-full bg-[#02040a] border border-[#0066ff]/50 flex items-center justify-center text-[#0066ff] shadow-[0_0_15px_rgba(0,102,255,0.2)] group-hover:bg-[#0066ff]/10 transition-colors">
                    1
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-[15px]">Online Application</h5>
                    <p className="text-white/40 text-[12px] hidden sm:block mt-1">Submit your details</p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3 group">
                  <div className="w-12 h-12 rounded-full bg-[#02040a] border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#0066ff]/50 group-hover:text-[#0066ff] transition-colors">
                    2
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-[15px]">Counselling Call</h5>
                    <p className="text-white/40 text-[12px] hidden sm:block mt-1">1-on-1 discussion</p>
                  </div>
                </div>

                <div className="relative z-10 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3 group">
                  <div className="w-12 h-12 rounded-full bg-[#02040a] border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#0066ff]/50 group-hover:text-[#0066ff] transition-colors">
                    3
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-[15px]">Offer Letter</h5>
                    <p className="text-white/40 text-[12px] hidden sm:block mt-1">Welcome to JAIN</p>
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