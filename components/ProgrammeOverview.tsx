"use client";
import { motion, Variants } from "framer-motion";

export default function ProgrammeOverview() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const glass = {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    boxShadow: "0 4px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
  } as const;

  const glassAccent = {
    background: "rgba(176,38,255,0.12)",
    border: "1px solid rgba(176,38,255,0.28)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    boxShadow: "0 4px 32px rgba(176,38,255,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
  } as const;

  return (
    <section
      id="about"
      className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Localised cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,229,255,0.04), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-12 md:gap-24 mb-20"
        >
          <div className="flex-1">
            <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#00e5ff]" />
              <span className="text-[11px] text-[#00e5ff] font-light tracking-[0.2em] uppercase">
                Programme Overview
              </span>
            </motion.div>

            <motion.h2
              variants={itemVars}
              className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight leading-[1.1] text-white"
            >
              Shaping the{" "}
              <br className="hidden md:block" />
              <span className="text-[#00e5ff] font-light">Tech Innovators</span>{" "}
              <br />
              of Tomorrow.
            </motion.h2>
          </div>

          <div className="flex-1 md:pt-12">
            <motion.p
              variants={itemVars}
              className="text-white/50 text-base md:text-lg leading-[1.7] font-thin tracking-wide"
            >
              In this new era, success isn't defined by a certificate — it's defined by skills, experience, and
              confidence. At JAIN School of Future Technology, we prepare you not just for the world as it is,
              but for the world as it's becoming.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Bento Grid ── */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >

          {/* Card 1 — Degree Structure (wide) */}
          <motion.div
            variants={itemVars}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl p-8 md:p-10"
            style={glass}
          >
            {/* Animated cyan/purple mesh aura */}
            <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-700"
              style={{ filter: "blur(60px)" }}>
              <motion.div
                animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
                style={{ background: "#00e5ff" }}
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1], x: [0, 30, 0], y: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-10 w-40 h-40 rounded-full"
                style={{ background: "#b026ff" }}
              />
            </div>

            <div className="relative z-10">
              <p className="text-[11px] text-white/40 font-light uppercase tracking-[0.2em] mb-4">
                Degree Structure
              </p>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                UGC-recognised BCA
              </h3>
              <p className="text-white/50 font-thin">
                Awarded by JAIN (Deemed-to-be University)
              </p>
            </div>
          </motion.div>

          {/* Card 2 — Applications */}
          <motion.div
            variants={itemVars}
            className="relative overflow-hidden rounded-3xl p-8 md:p-10 flex flex-col justify-between group"
            style={glassAccent}
          >
            {/* Scanning line */}
            <motion.div
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px pointer-events-none"
              style={{
                background: "linear-gradient(to right, transparent, rgba(176,38,255,0.5), transparent)",
              }}
            />

            <div className="relative z-10">
              <p className="text-[11px] text-[#b026ff] font-light uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#b026ff] animate-pulse" />
                Now Open
              </p>
              <h3 className="text-2xl font-light text-white mb-2">Applications</h3>
            </div>

            <div
              className="mt-8 pt-6 relative z-10"
              style={{ borderTop: "1px solid rgba(176,38,255,0.15)" }}
            >
              <p className="text-[11px] text-white/40 font-light uppercase tracking-[0.2em] mb-1">
                Start Date
              </p>
              <p className="text-xl text-white font-light">15 July 2026</p>
            </div>
          </motion.div>

          {/* Card 3 — Specialisations (wide) */}
          <motion.div
            variants={itemVars}
            className="md:col-span-2 relative overflow-hidden rounded-3xl p-8 md:p-10"
            style={glass}
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">

              {/* Big number */}
              <div>
                <p className="text-[11px] text-white/40 font-light uppercase tracking-[0.2em] mb-2">
                  Curriculum
                </p>
                <div
                  className="text-6xl md:text-8xl font-thin text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #00e5ff, #b026ff)",
                  }}
                >
                  4
                </div>
                <p className="text-lg text-white font-light mt-1">Specialisations</p>
              </div>

              {/* Pathway list */}
              <div className="flex-1 relative pl-6">
                <div
                  className="absolute left-1.5 top-2 bottom-2 w-px"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />

                {/* Traveling glowing dot */}
                <motion.div
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-[3px] w-2 h-6 rounded-full z-10"
                  style={{
                    background: "linear-gradient(to bottom, transparent, #00e5ff, transparent)",
                    boxShadow: "0 0 8px rgba(0,229,255,0.8)",
                  }}
                />

                <ul className="space-y-4 md:space-y-5 text-sm md:text-base text-white/50 font-thin relative z-20">
                  {[
                    "Full Stack AI Dev",
                    "Gen AI & Tech Mgmt",
                    "Applied AI & Data Analytics",
                    "Design Technology",
                  ].map((spec, i) => (
                    <li key={i} className="flex items-center gap-4 group/item">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0 -ml-[13px] transition-all duration-300"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1.5px solid rgba(255,255,255,0.15)",
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = "#00e5ff";
                          (e.currentTarget as HTMLElement).style.background = "rgba(0,229,255,0.15)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                        }}
                      />
                      <span className="group-hover/item:text-[#00e5ff] transition-colors duration-300">
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Cards 4 & 5 — stacked right column */}
          <motion.div variants={itemVars} className="flex flex-col gap-4 md:gap-5">

            {/* Industry Network */}
            <div
              className="flex-1 relative overflow-hidden rounded-3xl p-8 group"
              style={glass}
            >
              {/* Faded scrolling text bg */}
              <div
                className="absolute inset-y-0 right-0 w-full overflow-hidden pointer-events-none flex flex-col justify-center -rotate-12 scale-150"
                style={{ opacity: 0.04 }}
              >
                
              </div>

              <div className="relative z-10">
                <p className="text-[11px] text-white/40 font-light uppercase tracking-[0.2em] mb-2">
                  Industry Network
                </p>
                <div className="text-4xl font-thin text-[#00e5ff] mb-1">50+</div>
                <p className="text-white/60 text-sm font-light">Industry Advisors</p>
              </div>
            </div>

            {/* Placements */}
            <div
              className="flex-1 relative overflow-hidden rounded-3xl p-8 group"
              style={glass}
            >
              {/* Radar pulse */}
              <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full z-10"
                style={{ background: "#00e5ff", boxShadow: "0 0 10px rgba(0,229,255,0.6)" }}>
                <div className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: "#00e5ff", opacity: 0.5 }} />
                <div className="absolute -inset-4 rounded-full animate-ping"
                  style={{ border: "1px solid rgba(0,229,255,0.2)", animationDuration: "2s" }} />
              </div>

              <div className="relative z-10">
                <p className="text-[11px] text-white/40 font-light uppercase tracking-[0.2em] mb-2">
                  Placements
                </p>
                <p className="text-lg text-white font-light mb-1">Infopark, Kochi</p>
                <p className="text-white/50 text-sm font-thin">Leading tech companies</p>
              </div>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}