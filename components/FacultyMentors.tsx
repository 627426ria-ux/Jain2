"use client";
import { motion, Variants } from "framer-motion";

const mentors = [
  {
    name: "Dr. Sarah Chen",
    role: "Former AI Lead",
    company: "Google",
    expertise: "Generative AI & LLMs",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    accent: "#00e5ff",
  },
  {
    name: "Marcus Johnson",
    role: "Director of Product Design",
    company: "Meta",
    expertise: "Human-Computer Interaction",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    accent: "#00e5ff",
  },
  {
    name: "Priya Sharma",
    role: "Senior Data Scientist",
    company: "Amazon",
    expertise: "Big Data & Predictive Analytics",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    accent: "#00e5ff",
  },
  {
    name: "David Kim",
    role: "Chief Technology Officer",
    company: "TechNova Innovate",
    expertise: "Full Stack Cloud Architecture",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    accent: "#00e5ff",
  },
];

export default function FacultyMentors() {
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

  return (
    <section className="relative z-20 w-full py-20 sm:py-24 md:py-32 bg-transparent overflow-hidden px-4 sm:px-6">

      {/* Localised cyan glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[70vw] md:h-[70vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,229,255,0.04), transparent 60%)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div variants={itemVars} className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-px bg-[#00e5ff]" />
            <span className="text-[10px] sm:text-[11px] text-[#00e5ff] font-light tracking-[0.2em] uppercase">
              Elite Mentorship
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#00e5ff]" />
          </motion.div>
          <motion.h2
            variants={itemVars}
            className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-tight leading-[1.1] text-white"
          >
            Learn Directly From{" "}
            <br className="hidden md:block" />
            <span className="text-[#00e5ff] font-light">Industry Leaders</span>
          </motion.h2>
        </motion.div>

        {/* 4-Column Mentor Grid */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
        >
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 4px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              {/* Hover border accent */}
              <div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{ border: `1px solid ${mentor.accent}35` }}
              />

              {/* Image */}
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden flex-shrink-0">
                <img
                  src={mentor.imageUrl}
                  alt={mentor.name}
                  className="w-full h-full object-cover opacity-90 sm:grayscale sm:opacity-70 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:group-hover:grayscale-0 sm:group-hover:scale-110 sm:group-hover:opacity-90 group-hover:scale-110"
                />
                {/* Dark vignette over image */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

                {/* Accent glow bleeds up from bottom on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(to top, ${mentor.accent}18, transparent)` }}
                />
              </div>

              {/* Info panel */}
              <div className="relative z-10 flex flex-col px-3 py-3 sm:px-6 sm:py-5 flex-1">

                {/* Company badge */}
                <span
                  className="inline-flex items-center self-start mb-2 sm:mb-3 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-light tracking-widest uppercase transition-all duration-300"
                  style={{
                    background: `${mentor.accent}12`,
                    border: `1px solid ${mentor.accent}30`,
                    color: mentor.accent,
                  }}
                >
                  {mentor.company}
                </span>

                {/* Name */}
                <h3 className="text-[13px] sm:text-[17px] font-light text-white leading-snug mb-0.5 sm:mb-1">
                  {mentor.name}
                </h3>

                {/* Role */}
                <p className="text-white/45 text-[11px] sm:text-[13px] font-thin leading-snug">
                  {mentor.role}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-12 sm:mt-16 max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8 text-center md:text-left overflow-hidden relative"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          {/* Ambient glow inside banner */}
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at top right, rgba(176,38,255,0.1), transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at bottom left, rgba(0,229,255,0.07), transparent 65%)",
            }}
          />

          <div className="relative z-10">
            <h4 className="text-lg sm:text-2xl font-light text-white mb-2">
              Ready to be mentored by the best?
            </h4>
            <p className="text-white/45 text-[12px] sm:text-[14px] md:text-[15px] font-thin max-w-md">
              Join the waitlist for the upcoming 2026 cohort and secure your 1-on-1 industry mentorship.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative z-10 w-full md:w-auto flex-shrink-0 flex items-center justify-center gap-2.5 bg-[#b026ff] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-light text-[11px] sm:text-[13px] uppercase tracking-widest transition-all group"
            style={{ boxShadow: "0 10px 30px rgba(176,38,255,0.3)" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(176,38,255,0.5)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(176,38,255,0.3)"}
          >
            Apply Now
            <span className="text-base leading-none font-thin group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}