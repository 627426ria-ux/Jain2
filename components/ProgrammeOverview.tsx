"use client";
import { motion, Variants } from "framer-motion";

export default function ProgrammeOverview() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
      {/* Structure unchanged, just updated the RGB values to match the new #0066ff electric blue */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.06),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Top Header & Vision */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-12 md:gap-24 mb-20"
        >
          {/* Section Headline */}
          <div className="flex-1">
            <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#0066ff]" />
              <span className="text-[11px] text-[#0066ff] font-semibold tracking-[0.2em] uppercase">
                Programme Overview
              </span>
            </motion.div>
            <motion.h2 
              variants={itemVars}
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white"
            >
              Shaping the <br className="hidden md:block" />
              <span className="text-[#0066ff] font-medium">Tech Innovators</span> <br />
              of Tomorrow.
            </motion.h2>
          </div>

          {/* Vision Paragraph */}
          <div className="flex-1 md:pt-12">
            <motion.p 
              variants={itemVars}
              className="text-white/60 text-base md:text-lg leading-relaxed font-light"
            >
              In this new era, success isn't defined by a certificate — it's defined by skills, experience, and confidence. At JAIN School of Future Technology, we prepare you not just for the world as it is, but for the world as it's becoming.
            </motion.p>
          </div>
        </motion.div>

        {/* Key Stats / Bento Grid */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Degree */}
          <motion.div variants={itemVars} className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-[#02040a]/40 backdrop-blur-md border border-white/5 p-8 md:p-10 transition-colors hover:bg-white/[0.04]">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#0066ff]">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
                <polyline points="2 15.5 12 8.5 22 15.5" />
                <line x1="12" y1="2" x2="12" y2="8.5" />
              </svg>
            </div>
            <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-4">Degree Structure</p>
            <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">UGC-recognised BCA</h3>
            <p className="text-white/60">Awarded by JAIN (Deemed-to-be University)</p>
          </motion.div>

          {/* Card 2: Applications & Start Date */}
          <motion.div variants={itemVars} className="relative rounded-3xl bg-gradient-to-br from-[#0066ff]/10 to-[#02040a]/40 backdrop-blur-md border border-[#0066ff]/20 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[11px] text-[#0066ff] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0066ff] animate-pulse" /> Now Open
              </p>
              <h3 className="text-2xl font-medium text-white mb-2">Applications</h3>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-1">Start Date</p>
              <p className="text-xl text-white font-light">August 2026</p>
            </div>
          </motion.div>

          {/* Card 3: Specialisations */}
          <motion.div variants={itemVars} className="md:col-span-2 relative rounded-3xl bg-[#02040a]/40 backdrop-blur-md border border-white/5 p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div>
                <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-2">Curriculum</p>
                <div className="text-6xl md:text-7xl font-light text-[#0066ff]">4</div>
                <p className="text-lg text-white font-medium mt-1">Specialisations</p>
              </div>
              <div className="w-full h-px md:w-px md:h-24 bg-white/10" />
              <ul className="space-y-3 flex-1 text-sm md:text-base text-white/70 font-light">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff]/50" /> Full Stack AI Dev
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff]/50" /> Gen AI & Tech Mgmt
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff]/50" /> Applied AI & Data Analytics
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff]/50" /> Design Technology
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 4: Placements & Advisors */}
          <motion.div variants={itemVars} className="flex flex-col gap-6">
            <div className="flex-1 rounded-3xl bg-[#02040a]/40 backdrop-blur-md border border-white/5 p-8">
              <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-2">Industry Network</p>
              <div className="text-4xl font-light text-[#0066ff] mb-1">25+</div>
              <p className="text-white/80 text-sm">Industry Advisors</p>
            </div>
            
            <div className="flex-1 rounded-3xl bg-[#02040a]/40 backdrop-blur-md border border-white/5 p-8">
              <p className="text-[11px] text-white/40 uppercase tracking-[0.2em] mb-2">Placement</p>
              <p className="text-lg text-white font-medium mb-1">Infopark, Kochi</p>
              <p className="text-white/60 text-sm">Leading tech companies</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}