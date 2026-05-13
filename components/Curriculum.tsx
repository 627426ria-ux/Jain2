"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Curriculum Data extracted and normalized
const specialisations = [
  {
    id: "applied-ai",
    title: "Applied AI & Data Analytics",
    years: [
      {
        title: "Year 1 Core",
        subjects: [
          "DSA — Data Structures and Algorithms",
          "DECS — Digital Electronics and Computer Organisation",
          "MAS — Maths and Statistics Foundation",
          "DBD — Database Design",
          "FDS — Foundations of Data Science",
          "DT — Design Thinking",
        ],
      },
      {
        title: "Year 2",
        subjects: [
          "DE — Data Engineering",
          "SQA — Software Quality Assurance",
          "DAA — Design and Analysis of Algorithms",
          "DMA — Data Modelling and Analytics",
          "DVSA — Data Visualisation and Analysis",
          "ISSP — Inferential Statistics and Stochastic Process",
        ],
      },
      {
        title: "Year 3",
        subjects: [
          "BDA — Big Data Analytics",
          "DL — Deep Learning",
          "SDA — Streaming Data Analytics",
          "AOT — Advanced Optimisation Techniques",
          "UDA — Unstructured Data Analytics",
        ],
      },
    ],
  },
  {
    id: "full-stack-ai",
    title: "Full Stack AI Development",
    years: [
      {
        title: "Year 1 Core",
        subjects: [
          "DSA — Data Structures and Algorithms",
          "DECS — Digital Electronics and Computer Organisation",
          "MAS — Maths and Statistics Foundation",
          "DBD — Database Design",
          "JNCP — Object Oriented & Concurrent Programming using Java",
          "DT — Design Thinking",
        ],
      },
      {
        title: "Year 2",
        subjects: [
          "DL — Deep Learning",
          "FSAP — Full Stack Application Development",
          "DS — Data Science",
          "AMC — Advanced Mathematics for Computing",
          "SC — Soft Computing",
          "AML — Advanced Machine Learning",
        ],
      },
      {
        title: "Year 3",
        subjects: [
          "BDA — Big Data Analytics",
          "RL — Reinforcement Learning",
          "XAI — Explainable AI",
          "AISE — AI System Engineering",
          "SMMI — Speech & Multimodal AI",
          "DAA — Algorithm Design and Analysis",
          "AGI & ASI — Artificial General Intelligence and Superintelligence",
        ],
      },
    ],
  },
  {
    id: "design-tech",
    title: "Design Technology",
    years: [
      {
        title: "Year 1 (Sem 1 & 2)",
        subjects: [
          "Python & Visual Design & Creative Thinking",
          "DECS & MAS",
          "English & Hindi",
          "DSA & Internet Technology",
          "Digital Graphic Design Essentials",
          "DT, Organisational Behaviour, Foreign Language",
        ],
      },
      {
        title: "Year 2 (Sem 3 & 4)",
        subjects: [
          "DBD, UI & UX Design",
          "Front End Development",
          "AI & Data Analytics, Constitution of India",
          "Interaction Design & User Flows",
          "UX Prototyping, Brand Identity & Visual Systems",
          "FSAD, Creative Writing, Indian Knowledge Systems",
        ],
      },
      {
        title: "Year 3 (Sem 5 & 6)",
        subjects: [
          "GenAI: Foundations and Tools",
          "Advanced Visual Design & Layout Systems",
          "Motion Design, 2D Animation, Visual Storytelling",
          "Advanced UX & Design Strategy",
          "Mobile App & Game UI/UX Design",
          "3D Design & Animation Fundamentals",
          "Public Speaking, Elective 2, Universal Human Values",
        ],
      },
      {
        title: "Year 4 (Sem 7 & 8)",
        subjects: [
          "Responsible AI, Agile Project Management",
          "Elective 3, MOOC",
          "Project Design and Seminar",
          "MOOC",
          "Project or Research",
        ],
      },
    ],
  },
  {
    id: "gen-ai-tech",
    title: "Generative AI & Tech Management",
    years: [
      {
        title: "Year 1 (Sem 1 & 2)",
        subjects: [
          "Computational Thinking with Python, Economics",
          "DECS, MAS, English, Hindi",
          "DSA, Artificial Intelligence & Machine Learning",
          "Business Finance",
          "Design Thinking, Organisational Behaviour",
          "Foreign Language",
        ],
      },
      {
        title: "Year 2 (Sem 3 & 4)",
        subjects: [
          "DBD, Full Stack Application Development",
          "Operational Management, Computer Networks",
          "Data Analytics, Constitution of India",
          "Operations Research, Intro to Deep Learning",
          "BIS & Data Technology, Marketing",
          "Creative Writing, Indian Knowledge Systems",
        ],
      },
      {
        title: "Year 3 (Sem 5 & 6)",
        subjects: [
          "Business Intelligence, Data Mining & Warehousing",
          "GenAI: Foundations and Tools, Management Science",
          "Business Communication, Elective 1",
          "Intro to Supply Chain Management",
          "Gen AI: LLMs to Agents, Advanced Corporate Finance",
          "DevOps, Elective 2, Universal Human Values",
        ],
      },
      {
        title: "Year 4 (Sem 7 & 8)",
        subjects: [
          "Management Strategy in Tech Sector",
          "Agile Project Management, Elective 3",
          "MOOC, Project Design and Seminar",
          "MOOC",
          "Project or Research",
        ],
      },
    ],
  },
];

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState(specialisations[0].id);
  const activeData = specialisations.find((s) => s.id === activeTab);

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

  return (
    <section id = 'curriculum' className="relative z-20 w-full py-20 sm:py-24 md:py-32 bg-transparent overflow-hidden px-4 sm:px-6">
      
      {/* Localized Glow (Light Mode adjusted) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_60%)] pointer-events-none z-0" />

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
            <div className="w-6 sm:w-8 h-[1px] bg-[#0066ff]" />
            <span className="text-[10px] sm:text-[11px] text-[#0066ff] font-bold tracking-[0.2em] uppercase">
              Deep Dive
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-[#0066ff]" />
          </motion.div>
          <motion.h2 
            variants={itemVars}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-[#02040a]"
          >
            Curriculum — <span className="text-[#0066ff] font-medium">Specialisations</span>
          </motion.h2>
        </motion.div>

        {/* Custom Tab Navigation (Fluid layout for mobile wrapping) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
        >
          {specialisations.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setActiveTab(spec.id)}
              className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-[12px] sm:text-[13px] md:text-[14px] font-medium tracking-wide transition-all duration-300 ${
                activeTab === spec.id
                  ? "bg-[#0066ff] text-white shadow-[0_4px_20px_rgba(0,102,255,0.3)]"
                  : "bg-white text-[#02040a]/60 border border-gray-200 hover:bg-gray-50 hover:text-[#02040a] hover:border-gray-300 shadow-sm"
              }`}
            >
              {spec.title}
            </button>
          ))}
        </motion.div>

        {/* Tab Content (Animated Grid) */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto-fit gap-5 sm:gap-6"
            >
              {activeData?.years.map((year, index) => (
                <div 
                  key={index}
                  className="rounded-[24px] bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,102,255,0.06)] transition-shadow duration-300 p-6 sm:p-8"
                >
                  <h3 className="text-[#0066ff] font-medium text-lg sm:text-xl mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-100">
                    {year.title}
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {year.subjects.map((subject, sIdx) => {
                      const parts = subject.split(" — ");
                      return (
                        <li key={sIdx} className="flex items-start gap-3">
                          {/* Light Mode Bullet Point */}
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff]/60 mt-2 flex-shrink-0" />
                          <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-light text-[#02040a]/70">
                            {parts.length > 1 ? (
                              <>
                                <span className="font-medium text-[#02040a]">{parts[0]}</span>
                                <span className="opacity-50 text-[#02040a]"> — </span>
                                {parts[1]}
                              </>
                            ) : (
                              subject
                            )}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lead Capture / Syllabus CTA (Fully Responsive Stack) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left"
        >
          <div>
            <h4 className="text-xl sm:text-2xl font-medium text-[#02040a] mb-2 tracking-tight">Want the full breakdown?</h4>
            <p className="text-[#02040a]/60 text-[13px] sm:text-[14px] md:text-[15px] font-light max-w-lg">
              Get the comprehensive syllabus including all modules, electives, and outcomes sent directly to you.
            </p>
          </div>
          <button className="w-full md:w-auto flex-shrink-0 bg-white hover:bg-gray-50 text-[#02040a] border border-gray-200 shadow-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[12px] sm:text-[13px] uppercase tracking-widest transition-all hover:border-[#0066ff]/30 hover:-translate-y-0.5 group flex items-center justify-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#02040a]/50 group-hover:text-[#0066ff] transition-colors">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Syllabus PDF
          </button>
        </motion.div>

      </div>
    </section>
  );
}