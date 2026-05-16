"use client";
import { motion, Variants, useReducedMotion } from "framer-motion";

const ACCENT = "#7b2fff";

export default function ProgrammeOverview() {
  const prefersReducedMotion = useReducedMotion();

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    // Disable the expensive blur transition on lower-end/reduced-motion devices
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20, 
      filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)" 
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const card = {
    background: "#ffffff",
    border: "1px solid rgba(123,47,255,0.15)",
    boxShadow: "0 2px 16px rgba(123,47,255,0.08), 0 8px 32px rgba(123,47,255,0.05)",
  } as const;

  const cardAccent = {
    background: "rgba(123,47,255,0.06)",
    border: "1px solid rgba(123,47,255,0.25)",
    boxShadow: "0 2px 16px rgba(123,47,255,0.1), 0 8px 32px rgba(123,47,255,0.06)",
  } as const;

  return (
    <section
      id="about"
      className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Localised purple glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] pointer-events-none z-0"
        style={{ 
          background: "radial-gradient(ellipse at center, rgba(123,47,255,0.06), transparent 65%)",
          transform: "translateZ(0)" // Force into GPU layer
        }}
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
            <motion.div variants={itemVars} className="flex items-center gap-3 mb-6" style={{ willChange: "opacity, transform" }}>
              <div className="w-8 h-px" style={{ background: ACCENT }} />
              <span className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
                Programme Overview
              </span>
            </motion.div>

            <motion.h2
              variants={itemVars}
              className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight leading-[1.1]"
              style={{ color: "#1a0050", willChange: "opacity, transform" }}
            >
              Shaping the{" "}
              <br className="hidden md:block" />
              <span className="font-light" style={{ color: ACCENT }}>Tech Innovators</span>{" "}
              <br />
              of Tomorrow.
            </motion.h2>
          </div>

          <div className="flex-1 md:pt-12">
            <motion.p
              variants={itemVars}
              className="text-base md:text-lg leading-[1.7] font-thin tracking-wide"
              style={{ color: "rgba(30,0,80,0.55)", willChange: "opacity, transform" }}
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
            className="md:col-span-2 relative group overflow-hidden rounded-2xl p-8 md:p-10 hover:-translate-y-1 transition-all duration-500"
            style={{ ...card, willChange: "opacity, transform" }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top right, rgba(123,47,255,0.06), transparent 60%)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ border: "1px solid rgba(123,47,255,0.3)" }}
            />

            {/* Animated blob — Hardware accelerated to prevent 60px blur hanging */}
            <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-700"
              style={{ 
                filter: "blur(60px)",
                WebkitFilter: "blur(60px)", 
                transform: "translateZ(0)", // Crucial for blur performance
                willChange: "opacity"
              }}>
              <motion.div
                animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
                style={{ background: ACCENT, willChange: "transform" }}
              />
              <motion.div
                animate={prefersReducedMotion ? {} : { scale: [1, 1.5, 1], x: [0, 30, 0], y: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-10 w-40 h-40 rounded-full"
                style={{ background: "#b026ff", willChange: "transform" }}
              />
            </div>

            <div className="relative z-10">
              <p className="text-[11px] font-light uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(30,0,80,0.4)" }}>
                Degree Structure
              </p>
              <h3 className="text-2xl md:text-3xl font-light mb-2" style={{ color: "#1a0050" }}>
                UGC-recognised BCA
              </h3>
              <p className="font-thin" style={{ color: "rgba(30,0,80,0.5)" }}>
                Awarded by JAIN (Deemed-to-be University)
              </p>
            </div>
          </motion.div>

          {/* Card 2 — Applications */}
          <motion.div
            variants={itemVars}
            className="relative overflow-hidden rounded-2xl p-8 md:p-10 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-500"
            style={{ ...cardAccent, willChange: "opacity, transform" }}
          >
            {/* Hover border */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ border: "1px solid rgba(123,47,255,0.4)" }}
            />

            {/* Scanning line - Forced GPU layer to handle animation */}
            <motion.div
              animate={prefersReducedMotion ? {} : { top: ["-10%", "110%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px pointer-events-none"
              style={{
                background: `linear-gradient(to right, transparent, rgba(123,47,255,0.3), transparent)`,
                transform: "translateZ(0)",
                willChange: "top"
              }}
            />

            <div className="relative z-10">
              <p className="text-[11px] font-light uppercase tracking-[0.2em] mb-4 flex items-center gap-2" style={{ color: ACCENT }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT, transform: "translateZ(0)" }} />
                Now Open
              </p>
              <h3 className="text-2xl font-light mb-2" style={{ color: "#1a0050" }}>Applications</h3>
            </div>

            <div
              className="mt-8 pt-6 relative z-10"
              style={{ borderTop: "1px solid rgba(123,47,255,0.15)" }}
            >
              <p className="text-[11px] font-light uppercase tracking-[0.2em] mb-1" style={{ color: "rgba(30,0,80,0.4)" }}>
                Start Date
              </p>
              <p className="text-xl font-light" style={{ color: "#1a0050" }}>15 July 2026</p>
            </div>
          </motion.div>

          {/* Card 3 — Specialisations (wide) */}
          <motion.div
            variants={itemVars}
            className="md:col-span-2 relative overflow-hidden rounded-2xl p-8 md:p-10 group hover:-translate-y-1 transition-all duration-500"
            style={{ ...card, willChange: "opacity, transform" }}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at top left, rgba(123,47,255,0.06), transparent 60%)" }}
            />
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ border: "1px solid rgba(123,47,255,0.3)" }}
            />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">

              {/* Big number */}
              <div>
                <p className="text-[11px] font-light uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(30,0,80,0.4)" }}>
                  Curriculum
                </p>
                <div
                  className="text-6xl md:text-8xl font-thin text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT}, #b026ff)` }}
                >
                  4
                </div>
                <p className="text-lg font-light mt-1" style={{ color: "#1a0050" }}>Specialisations</p>
              </div>

              {/* Pathway list */}
              <div className="flex-1 relative pl-6">
                <div
                  className="absolute left-1.5 top-2 bottom-2 w-px"
                  style={{ background: "rgba(123,47,255,0.15)" }}
                />

                {/* Traveling glowing dot */}
                <motion.div
                  animate={prefersReducedMotion ? {} : { top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-[3px] w-2 h-6 rounded-full z-10"
                  style={{
                    background: `linear-gradient(to bottom, transparent, ${ACCENT}, transparent)`,
                    boxShadow: "0 0 8px rgba(123,47,255,0.5)",
                    transform: "translateZ(0)",
                    willChange: "top"
                  }}
                />

                <ul className="space-y-4 md:space-y-5 text-sm md:text-base font-thin relative z-20" style={{ color: "rgba(30,0,80,0.5)" }}>
                  {[
                    "Full Stack AI Dev",
                    "Gen AI & Tech Mgmt",
                    "Applied AI & Data Analytics",
                    "Design Technology",
                  ].map((spec, i) => (
                    <li key={i} className="flex items-center gap-4 group/item cursor-default">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0 -ml-[13px] transition-all duration-300"
                        style={{
                          background: "rgba(123,47,255,0.05)",
                          border: "1.5px solid rgba(123,47,255,0.2)",
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = ACCENT;
                          (e.currentTarget as HTMLElement).style.background = "rgba(123,47,255,0.15)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(123,47,255,0.2)";
                          (e.currentTarget as HTMLElement).style.background = "rgba(123,47,255,0.05)";
                        }}
                      />
                      <span className="transition-colors duration-300 group-hover/item:text-[#7b2fff]">
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Cards 4 & 5 — stacked right column */}
          <motion.div variants={itemVars} className="flex flex-col gap-4 md:gap-5" style={{ willChange: "opacity, transform" }}>

            {/* Industry Network */}
            <div
              className="flex-1 relative overflow-hidden rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-500"
              style={card}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(123,47,255,0.06), transparent 60%)" }}
              />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: "1px solid rgba(123,47,255,0.3)" }}
              />
              <div className="relative z-10">
                <p className="text-[11px] font-light uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(30,0,80,0.4)" }}>
                  Industry Network
                </p>
                <div className="text-4xl font-thin mb-1" style={{ color: ACCENT }}>50+</div>
                <p className="text-sm font-light" style={{ color: "rgba(30,0,80,0.55)" }}>Industry Advisors</p>
              </div>
            </div>

            {/* Placements */}
            <div
              className="flex-1 relative overflow-hidden rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-500"
              style={card}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(123,47,255,0.06), transparent 60%)" }}
              />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: "1px solid rgba(123,47,255,0.3)" }}
              />

              {/* Radar pulse */}
              <div
                className="absolute bottom-8 right-8 w-3 h-3 rounded-full z-10"
                style={{ background: ACCENT, boxShadow: "0 0 10px rgba(123,47,255,0.4)" }}
              >
                <div className="absolute inset-0 rounded-full animate-ping" style={{ background: ACCENT, opacity: 0.3, transform: "translateZ(0)" }} />
                <div className="absolute -inset-4 rounded-full animate-ping" style={{ border: "1px solid rgba(123,47,255,0.15)", animationDuration: "2s", transform: "translateZ(0)" }} />
              </div>

              <div className="relative z-10">
                <p className="text-[11px] font-light uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(30,0,80,0.4)" }}>
                  Placements
                </p>
                <p className="text-lg font-light mb-1" style={{ color: "#1a0050" }}>Infopark, Kochi</p>
                <p className="text-sm font-thin" style={{ color: "rgba(30,0,80,0.5)" }}>Leading tech companies</p>
              </div>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}