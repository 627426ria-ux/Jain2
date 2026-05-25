"use client";
import { motion, Variants, useReducedMotion } from "framer-motion";

const mentors = [
  {
    name: "Adwaith S",
    role: "Technical solution manager.",
    company: "Microsoft",
    imageUrl: "/Adwaid S.jpeg",
  },
  {
    name: "Tom M Joseph ",
    role: "Edupreneur & Director",
    company: "Jain University Kochi",
    imageUrl: "/Alan.png",
  },
  {
    name: "Ashish Johnson ",
    role: "ML Engineer",
    company: "SAP",
    imageUrl: "/Ashish.jpeg",
  },
  {
    name: "Alan K Antony",
    role: "AI Consultant & Project Head",
    company: "AccelerateX",
    imageUrl: "/Tom.JPG",
  },
  {
    name: "Dr Shailesh Sivan",
    role: "Chief Technology Architect",
    company: "Yours Zeros and Ones",
    imageUrl: "/ChatGPT Image May 23, 2026, 04_44_30 PM.png",
  },
];

const ACCENT = "#7b2fff";

export default function FacultyMentors() {
  const prefersReducedMotion = useReducedMotion();

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">

      {/* Background glow — static */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[55vw] md:h-[55vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(123,47,255,0.06), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div
            variants={itemVars}
            className="flex items-center gap-3 mb-6"
            style={{ willChange: "opacity, transform, filter" }}
          >
            <div className="w-8 h-px" style={{ background: ACCENT }} />
            <span className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Elite Mentorship
            </span>
            <div className="w-8 h-px" style={{ background: ACCENT }} />
          </motion.div>

          <motion.h2
            variants={itemVars}
            className="text-3xl md:text-5xl font-thin tracking-tight leading-[1.1]"
            style={{ color: "#1a0050", willChange: "opacity, transform, filter" }}
          >
            Learn Directly From{" "}
            <br className="hidden md:block" />
            <span className="font-light" style={{ color: ACCENT }}>Industry Leaders</span>
          </motion.h2>
        </motion.div>

        {/* 5-Column Mentor Grid */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
        >
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(123,47,255,0.15)",
                boxShadow: "0 2px 16px rgba(123,47,255,0.08), 0 8px 32px rgba(123,47,255,0.05)",
                willChange: "opacity, transform, filter",
                transform: "translateZ(0)",
              }}
            >
              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{ border: "1px solid rgba(123,47,255,0.3)" }}
              />

              {/* Image */}
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden flex-shrink-0">
                <img
                  src={mentor.imageUrl}
                  alt={mentor.name}
                  className="w-full h-full object-cover opacity-90 sm:opacity-80 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:group-hover:grayscale-0 sm:group-hover:scale-110 sm:group-hover:opacity-95 group-hover:scale-110"
                  style={{ willChange: "filter, transform" }}
                />
                {/* Light vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 pointer-events-none" />

                {/* Accent glow on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(123,47,255,0.12), transparent)" }}
                />
              </div>

              {/* Info panel */}
              <div className="relative z-10 flex flex-col px-3 py-3 sm:px-5 sm:py-4 flex-1">

                {/* Company badge — wraps gracefully for long names */}
                <span
                  className="inline-flex items-center self-start mb-2 sm:mb-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[8px] sm:text-[10px] font-light tracking-wide uppercase leading-tight transition-all duration-300 max-w-full"
                  style={{
                    background: "rgba(123,47,255,0.08)",
                    border: "1px solid rgba(123,47,255,0.22)",
                    color: ACCENT,
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                    display: "inline-block",
                  }}
                >
                  {mentor.company}
                </span>

                {/* Name */}
                <h3
                  className="text-[13px] sm:text-[17px] font-light leading-snug mb-0.5 sm:mb-1"
                  style={{ color: "#1a0050" }}
                >
                  {mentor.name}
                </h3>

                {/* Role */}
                <p
                  className="text-[11px] sm:text-[13px] font-thin leading-snug"
                  style={{ color: "rgba(30,0,80,0.45)" }}
                >
                  {mentor.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: prefersReducedMotion ? 0 : 30,
            filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)",
          }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-12 sm:mt-16 max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8 text-center md:text-left overflow-hidden relative"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(123,47,255,0.15)",
            boxShadow: "0 2px 16px rgba(123,47,255,0.08), 0 8px 32px rgba(123,47,255,0.05)",
            willChange: "opacity, transform, filter",
          }}
        >
          {/* Ambient glows inside banner */}
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top right, rgba(123,47,255,0.06), transparent 65%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at bottom left, rgba(123,47,255,0.04), transparent 65%)" }}
          />

          <div className="relative z-10">
            <h4 className="text-lg sm:text-2xl font-light mb-2" style={{ color: "#1a0050" }}>
              Ready to be mentored by the best?
            </h4>
            <p
              className="text-[12px] sm:text-[14px] md:text-[15px] font-thin max-w-md"
              style={{ color: "rgba(30,0,80,0.5)" }}
            >
              Join the waitlist for the upcoming 2026 cohort and secure your 1-on-1 industry mentorship.
            </p>
          </div>

          <motion.a
            href="#cta"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            className="relative z-10 w-full md:w-auto flex-shrink-0 flex items-center justify-center gap-2.5 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-light text-[11px] sm:text-[13px] uppercase tracking-widest transition-all group"
            style={{
              background: ACCENT,
              boxShadow: "0 10px 30px rgba(123,47,255,0.25)",
              transform: "translateZ(0)",
              willChange: "transform",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                "0 15px 40px rgba(123,47,255,0.4)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                "0 10px 30px rgba(123,47,255,0.25)")
            }
          >
            Apply Now
            <span className="text-base leading-none font-thin group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}