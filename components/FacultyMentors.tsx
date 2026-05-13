"use client";
import { motion, Variants } from "framer-motion";

// Premium placeholder data - easily swap images and text later
const mentors = [
  {
    name: "Dr. Sarah Chen",
    role: "Former AI Lead",
    company: "Google",
    expertise: "Generative AI & LLMs",
    // Replace with real image paths (e.g., "/mentors/sarah.jpg")
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", 
  },
  {
    name: "Marcus Johnson",
    role: "Director of Product Design",
    company: "Meta",
    expertise: "Human-Computer Interaction",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Senior Data Scientist",
    company: "Amazon",
    expertise: "Big Data & Predictive Analytics",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "David Kim",
    role: "Chief Technology Officer",
    company: "TechNova Innovate",
    expertise: "Full Stack Cloud Architecture",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  }
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
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">
      
      {/* --- LOCALIZED SECTION GLOW --- */}
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
            <span className="text-[11px] text-[#0066ff] font-semibold tracking-[0.2em] uppercase">
              Elite Mentorship
            </span>
            <div className="w-8 h-[1px] bg-[#0066ff]" />
          </motion.div>
          <motion.h2 
            variants={itemVars}
            className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-white"
          >
            Learn Directly From <br className="hidden md:block" />
            <span className="text-[#0066ff] font-medium">Industry Leaders</span>
          </motion.h2>
        </motion.div>

        {/* 4-Column Interactive Mentor Grid */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {mentors.map((mentor, index) => (
            <motion.div 
              key={index}
              variants={itemVars} 
              // The group class triggers the animations on hover
              className="group relative rounded-[24px] bg-[#02040a]/40 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#0066ff]/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,102,255,0.2)] cursor-pointer"
            >
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-white/5">
                {/* 
                  Grayscale by default, transitions to color and scales up on hover. 
                  (Using an img tag for simplicity, use next/image in production)
                */}
                <img 
                  src={mentor.imageUrl} 
                  alt={mentor.name}
                  className="w-full h-full object-cover grayscale opacity-70 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100"
                />
                
                {/* Gradient overlay to ensure text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* LinkedIn Icon (Slides in on hover) */}
                <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="w-10 h-10 rounded-full bg-[#0066ff]/20 backdrop-blur-md border border-[#0066ff]/50 flex items-center justify-center text-[#0066ff]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </div>

                {/* Text Content overlayed at bottom */}
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#0066ff] text-[11px] uppercase tracking-widest font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {mentor.company}
                  </p>
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-1">
                    {mentor.name}
                  </h3>
                  <p className="text-white/60 text-[13px] md:text-[14px] font-light">
                    {mentor.role}
                  </p>
                  
                  {/* Glowing accent line that expands on hover */}
                  <div className="w-0 h-[2px] bg-[#0066ff] mt-4 transition-all duration-500 ease-out group-hover:w-full shadow-[0_0_10px_rgba(0,102,255,0.8)]" />
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner at bottom of section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto rounded-[24px] bg-gradient-to-r from-white/[0.02] to-[#0066ff]/10 border border-white/5 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h4 className="text-xl md:text-2xl font-medium text-white mb-2">Ready to be mentored by the best?</h4>
            <p className="text-white/50 text-[14px] md:text-[15px] font-light">
              Join the waitlist for the upcoming 2026 cohort and secure your 1-on-1 industry mentorship.
            </p>
          </div>
          <button className="flex-shrink-0 bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 py-4 rounded-full font-semibold text-[13px] uppercase tracking-widest transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(0,102,255,0.6)]">
            Apply Now
          </button>
        </motion.div>

      </div>
    </section>
  );
}