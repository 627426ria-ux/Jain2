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
      borderColor: "rgba(255,255,255,0.15)",
      color: "rgba(255,255,255,0.3)",
      boxShadow: "0px 0px 0px rgba(0,229,255,0)"
    },
    show: {
      borderColor: "#00e5ff",
      color: "#00e5ff",
      boxShadow: "0px 0px 15px rgba(0,229,255,0.25)",
      transition: { duration: 0.4, ease: "easeOut", delay: delayTime }
    }
  });

  const glassCard = {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    boxShadow: "0 4px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
  };

  return (
    <section className="relative z-20 w-full py-20 sm:py-24 md:py-32 bg-transparent overflow-hidden px-4 sm:px-6">

      {/* Localised cyan glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,229,255,0.04), transparent 60%)" }}
      />

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
            <div className="w-6 sm:w-8 h-px bg-[#00e5ff]" />
            <span className="text-[10px] sm:text-[11px] text-[#00e5ff] font-light tracking-[0.2em] uppercase">
              Next Steps
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#00e5ff]" />
          </motion.div>
          <motion.h2
            variants={itemVars}
            className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-tight leading-[1.1] text-white"
          >
            Admissions &{" "}
            <span className="text-[#00e5ff] font-light">Eligibility</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-8"
        >
          {/* LEFT COLUMN */}
          <motion.div
            variants={itemVars}
            className="flex-1 lg:max-w-sm rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
            style={glassCard}
          >
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 sm:mb-8"
                style={{
                  background: "rgba(0,229,255,0.08)",
                  border: "1px solid rgba(0,229,255,0.25)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-light text-[#00e5ff] tracking-widest uppercase">
                  Applications Now Open
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white mb-2 tracking-tight">
                Secure Your Seat
              </h3>
              <p className="text-white/45 text-[13px] sm:text-[14px] leading-relaxed font-thin mb-6 sm:mb-8">
                Join the July 2026 cohort and begin your journey into high-impact AI development.
              </p>

              <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                <div>
                  <p className="text-[10px] sm:text-[11px] text-white/30 font-light uppercase tracking-[0.2em] mb-1">Application Deadline</p>
                  <p className="text-base sm:text-lg text-white font-light flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    June 20th
                  </p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] text-white/30 font-light uppercase tracking-[0.2em] mb-1">Programme Start</p>
                  <p className="text-base sm:text-lg text-white font-thin">15th July 2026</p>
                </div>
              </div>
            </div>

            <a
              href="https://jainsoft.co.in/application"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-white py-3.5 sm:py-4 rounded-full font-light text-[12px] sm:text-[13px] uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                style={{
                  background: "#b026ff",
                  boxShadow: "0 10px 30px rgba(176,38,255,0.3)",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(176,38,255,0.5)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(176,38,255,0.3)"}
              >
                Start Application
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </motion.button>
            </a>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 flex flex-col gap-5 sm:gap-6 md:gap-8">

            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              <motion.div
                variants={itemVars}
                className="rounded-3xl p-6 sm:p-8 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1"
                style={glassCard}
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ border: "1px solid rgba(0,229,255,0.2)" }}
                />
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5 sm:mb-6"
                  style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <p className="text-[10px] sm:text-[11px] text-white/30 font-light uppercase tracking-[0.2em] mb-2">Minimum Eligibility</p>
                <h4 className="text-2xl sm:text-3xl font-light text-white mb-2">70-85%</h4>
                <p className="text-white/45 text-[12px] sm:text-[13px] font-thin">Academic aggregate required for admission consideration.</p>
              </motion.div>

              <motion.div
                variants={itemVars}
                className="rounded-3xl p-6 sm:p-8 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1"
                style={glassCard}
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ border: "1px solid rgba(0,229,255,0.2)" }}
                />
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5 sm:mb-6"
                  style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <p className="text-[10px] sm:text-[11px] text-white/30 font-light uppercase tracking-[0.2em] mb-2">Mode of Learning</p>
                <h4 className="text-xl sm:text-2xl font-light text-white mb-2">Hybrid Model</h4>
                <p className="text-white/45 text-[12px] sm:text-[13px] font-thin">Weekday industry work + weekend virtual classes.</p>
              </motion.div>
            </div>

            {/* Bottom Row: Admission Process Timeline */}
            <motion.div
              variants={itemVars}
              className="rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-center relative overflow-hidden group transition-all duration-500 hover:-translate-y-1"
              style={glassCard}
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: "1px solid rgba(0,229,255,0.2)" }}
              />
              <p className="text-[10px] sm:text-[11px] text-white/30 font-light uppercase tracking-[0.2em] mb-6 sm:mb-8">Admission Process</p>

              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0">

  {/* Desktop line — sits between circles using flex gap trick */}
  <div className="hidden sm:block absolute top-[23px] left-[24px] right-[24px] h-[2px]"
    style={{ background: "rgba(255,255,255,0.08)" }} />
  <motion.div
    variants={trackLineDesktop}
    className="hidden sm:block absolute top-[23px] left-[24px] right-[24px] h-[2px] origin-left"
    style={{ background: "#00e5ff", boxShadow: "0 0 10px rgba(0,229,255,0.4)" }}
  />

                {/* Mobile line */}
                <div className="block sm:hidden absolute left-[23px] top-[24px] bottom-[24px] w-[2px]"
                  style={{ background: "rgba(255,255,255,0.08)" }} />
                <motion.div
                  variants={trackLineMobile}
                  className="block sm:hidden absolute left-[23px] top-[24px] bottom-[24px] w-[2px] origin-top"
                  style={{ background: "#00e5ff", boxShadow: "0 0 10px rgba(0,229,255,0.4)" }}
                />

                {/* Step 1 */}
                <div className="relative z-10 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3">
                  <motion.div
                    variants={activeNode(0.5)}
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-light text-sm flex-shrink-0"
                    style={{ background: "rgba(20,10,40,0.95)" }}
                  >
                    1
                  </motion.div>
                  <div>
                    <h5 className="text-white font-light text-[14px] sm:text-[15px]">Online Application</h5>
                    <p className="text-white/40 text-[12px] hidden sm:block mt-1 font-thin">Submit your details</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3">
                  <motion.div
                    variants={activeNode(1.25)}
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-light text-sm flex-shrink-0"
                    style={{ background: "rgba(20,10,40,0.95)" }}
                  >
                    2
                  </motion.div>
                  <div>
                    <h5 className="text-white font-light text-[14px] sm:text-[15px]">Interview Call</h5>
                    <p className="text-white/40 text-[12px] hidden sm:block mt-1 font-thin">1-on-1 discussion</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3">
                  <motion.div
                    variants={activeNode(2.0)}
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-light text-sm flex-shrink-0"
                    style={{ background: "rgba(20,10,40,0.95)" }}
                  >
                    3
                  </motion.div>
                  <div>
                    <h5 className="text-white font-light text-[14px] sm:text-[15px]">Offer Letter</h5>
                    <p className="text-white/40 text-[12px] hidden sm:block mt-1 font-thin">Welcome to JAIN</p>
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