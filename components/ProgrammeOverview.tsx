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
    <section id="about" className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">
      
      {/* --- LOCALIZED SECTION GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Top Header & Vision */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-12 md:gap-24 mb-20"
        >
          <div className="flex-1">
            <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#0066ff]" />
              <span className="text-[11px] text-[#0066ff] font-bold tracking-[0.2em] uppercase">
                Programme Overview
              </span>
            </motion.div>
            <motion.h2 
              variants={itemVars}
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#02040a]"
            >
              Shaping the <br className="hidden md:block" />
              <span className="text-[#0066ff] font-medium">Tech Innovators</span> <br />
              of Tomorrow.
            </motion.h2>
          </div>

          <div className="flex-1 md:pt-12">
            <motion.p 
              variants={itemVars}
              className="text-[#02040a]/60 text-base md:text-lg leading-relaxed font-light"
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
          {/* Card 1: Degree Structure (Morphing Brand-Blue Mesh Aura) */}
          <motion.div variants={itemVars} className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm p-8 md:p-10 transition-shadow hover:shadow-md">
            
            {/* Animated Premium Mesh Gradient - Using brand blues */}
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-700 blur-[60px]">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1], 
                  x: [0, -20, 0], 
                  y: [0, 20, 0] 
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#0066ff]/40 rounded-full"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.5, 1], 
                  x: [0, 30, 0], 
                  y: [0, -10, 0] 
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-10 w-40 h-40 bg-[#0066ff]/15 rounded-full"
              />
            </div>

            <div className="relative z-10">
              <p className="text-[11px] text-[#02040a]/40 font-semibold uppercase tracking-[0.2em] mb-4">Degree Structure</p>
              <h3 className="text-2xl md:text-3xl font-medium text-[#02040a] mb-2">UGC-recognised BCA</h3>
              <p className="text-[#02040a]/60">Awarded by JAIN (Deemed-to-be University)</p>
            </div>
          </motion.div>

          {/* Card 2: Applications (Scanning Line Effect) */}
          <motion.div variants={itemVars} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0066ff]/5 to-white border border-[#0066ff]/20 shadow-sm p-8 md:p-10 flex flex-col justify-between group">
            
            {/* Animated Scanner Line */}
            <motion.div 
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0066ff]/30 to-transparent pointer-events-none"
            />
            
            <div className="relative z-10">
              <p className="text-[11px] text-[#0066ff] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0066ff] animate-pulse" /> Now Open
              </p>
              <h3 className="text-2xl font-medium text-[#02040a] mb-2">Applications</h3>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#0066ff]/10 relative z-10 bg-white/50 backdrop-blur-sm rounded-xl -mx-4 -mb-4 px-4 pb-4 sm:mx-0 sm:mb-0 sm:px-0 sm:pb-0 sm:bg-transparent sm:backdrop-blur-none">
              <p className="text-[11px] text-[#02040a]/40 font-semibold uppercase tracking-[0.2em] mb-1 pt-4 sm:pt-0">Start Date</p>
              <p className="text-xl text-[#02040a] font-medium">August 2026</p>
            </div>
          </motion.div>

          {/* Card 3: Specialisations (Creative AI Pathway Animation) */}
          <motion.div variants={itemVars} className="md:col-span-2 relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm p-8 md:p-10 group">
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
              
              {/* Fluid Gradient Number - Updated to brand blues */}
              <div>
                <p className="text-[11px] text-[#02040a]/40 font-semibold uppercase tracking-[0.2em] mb-2">Curriculum</p>
                <div className="relative inline-block">
                  <div className="text-6xl md:text-8xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#4d94ff] to-[#0066ff] bg-[length:200%_auto] animate-gradient">
                    4
                  </div>
                </div>
                <p className="text-lg text-[#02040a] font-medium mt-1">Specialisations</p>
              </div>

              {/* Animated AI Pathway List */}
              <div className="flex-1 relative pl-6">
                {/* The vertical track line */}
                <div className="absolute left-1.5 top-2 bottom-2 w-px bg-gray-100" />
                
                {/* The traveling glowing dot (Data packet) */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-[3px] w-2 h-6 bg-gradient-to-b from-transparent via-[#0066ff] to-transparent rounded-full shadow-[0_0_8px_rgba(0,102,255,0.8)] z-10"
                />

                <ul className="space-y-4 md:space-y-5 text-sm md:text-base text-[#02040a]/70 font-light relative z-20">
                  {["Full Stack AI Dev", "Gen AI & Tech Mgmt", "Applied AI & Data Analytics", "Design Technology"].map((spec, index) => (
                    <li key={index} className="flex items-center gap-4 group/item">
                      {/* Interactive dots that light up on hover */}
                      <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-200 flex-shrink-0 group-hover/item:border-[#0066ff] group-hover/item:bg-[#0066ff]/20 transition-all duration-300 relative -ml-[13px]" />
                      <span className="group-hover/item:text-[#0066ff] group-hover/item:font-medium transition-all duration-300">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>

          {/* Card 4 & 5: Placements & Advisors (Stacked) */}
          <motion.div variants={itemVars} className="flex flex-col gap-6">
            
            {/* Industry Network (Faded Marquee Background) */}
            <div className="flex-1 relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm p-8 group hover:shadow-md transition-shadow">
              
              {/* Scrolling Text Background */}
              <div className="absolute inset-y-0 right-0 w-full overflow-hidden pointer-events-none flex flex-col justify-center opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 rotate-[-10deg] scale-150">
                <motion.div 
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="whitespace-nowrap font-black text-4xl"
                >
                  LEADERS • MENTORS • EXPERTS • LEADERS • MENTORS • EXPERTS
                </motion.div>
              </div>
              
              <div className="relative z-10">
                <p className="text-[11px] text-[#02040a]/40 font-semibold uppercase tracking-[0.2em] mb-2">Industry Network</p>
                <div className="text-4xl font-light text-[#0066ff] mb-1">25+</div>
                <p className="text-[#02040a]/80 text-sm font-medium">Industry Advisors</p>
              </div>
            </div>
            
            {/* Placement (Map Radar Pulse) */}
            <div className="flex-1 relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm p-8 group hover:shadow-md transition-shadow">
              
              {/* Radar Map Beacon */}
              <div className="absolute bottom-8 right-8 w-3 h-3 bg-[#0066ff] rounded-full z-10 shadow-[0_0_10px_rgba(0,102,255,0.5)]">
                <div className="absolute inset-0 bg-[#0066ff] rounded-full animate-ping opacity-75 scale-150" />
                <div className="absolute -inset-4 border border-[#0066ff]/20 rounded-full animate-[ping_2s_ease-out_infinite]" />
              </div>
              
              <div className="relative z-10">
                <p className="text-[11px] text-[#02040a]/40 font-semibold uppercase tracking-[0.2em] mb-2">Placement</p>
                <p className="text-lg text-[#02040a] font-medium mb-1">Infopark, Kochi</p>
                <p className="text-[#02040a]/60 text-sm">Leading tech companies</p>
              </div>
            </div>

          </motion.div>

        </motion.div>
      </div>

      {/* Global Style for the gradient text animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}} />
    </section>
  );
}