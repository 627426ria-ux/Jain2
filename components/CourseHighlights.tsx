"use client";
import { motion, Variants } from "framer-motion";

const highlights = [
  {
    title: "Work While You Learn",
    description: "Graduate with 2 years of professional experience alongside your degree.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Elite Mentorship",
    description: "25+ faculty from leading global firms, each bringing real industry experience.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Skill-First Curriculum",
    description: "Focus on AI fluency, adaptability, communication, and real-world problem-solving.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "AI-Integrated Learning",
    description: "Advanced AI tools embedded throughout your entire learning journey.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Global Industry Exposure",
    description: "International webinars, expert talks, and global collaborative projects.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Dual Power at Graduation",
    description: "UGC-recognised BCA degree + a deployment-ready project portfolio.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  }
];

export default function CourseHighlights() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVars: Variants = {
    // Added a subtle scale effect for a smoother, premium reveal
    hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">
      
      {/* --- LOCALIZED SECTION GLOW --- */}
      {/* Soft blue ambient light works perfectly on white backgrounds too */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#0066ff]" />
            <span className="text-[11px] text-[#0066ff] font-bold tracking-[0.2em] uppercase">
              Course Highlights
            </span>
            <div className="w-8 h-[1px] bg-[#0066ff]" />
          </motion.div>
          <motion.h2 
            variants={itemVars}
            className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-[#02040a]"
          >
            The Ultimate <span className="text-[#0066ff] font-medium">Advantage</span>
          </motion.h2>
        </motion.div>

        {/* 6-Card USP Grid */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVars} 
              // Updated to crisp white cards with soft shadows and elegant borders
              className="group relative rounded-[24px] bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 md:p-10 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,102,255,0.08)] hover:border-[#0066ff]/30 hover:-translate-y-1"
            >
              {/* Subtle radial glow inside the card on hover */}
              <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(ellipse_at_top_right,rgba(0,102,255,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Icon Container (Light Mode styling) */}
              <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#02040a]/40 mb-8 group-hover:text-[#0066ff] group-hover:border-[#0066ff]/30 group-hover:bg-[#0066ff]/5 transition-all duration-500">
                {card.icon}
              </div>

              {/* Card Content */}
              <h3 className="text-xl md:text-2xl font-medium text-[#02040a] mb-3 tracking-tight">
                {card.title}
              </h3>
              <p className="text-[#02040a]/60 text-[14px] md:text-[15px] leading-relaxed font-light">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}