"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Curriculum Data extracted and normalized into Years for a consistent UI
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      
      {/* Localized Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.05),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={itemVars} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#0066ff]" />
            <span className="text-[11px] text-[#0066ff] font-semibold tracking-[0.2em] uppercase">
              Section 7
            </span>
            <div className="w-8 h-[1px] bg-[#0066ff]" />
          </motion.div>
          <motion.h2 
            variants={itemVars}
            className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-white"
          >
            Curriculum — <span className="text-[#0066ff] font-medium">Specialisations</span>
          </motion.h2>
        </motion.div>

        {/* Custom Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {specialisations.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setActiveTab(spec.id)}
              className={`px-6 py-3 rounded-full text-[13px] md:text-[14px] font-medium tracking-wide transition-all duration-300 ${
                activeTab === spec.id
                  ? "bg-[#0066ff] text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]"
                  : "bg-white/5 text-white/50 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {spec.title}
            </button>
          ))}
        </motion.div>

        {/* Tab Content (Animated) */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeData?.years.map((year, index) => (
                <div 
                  key={index}
                  className="rounded-3xl bg-[#02040a]/40 backdrop-blur-md border border-white/5 p-8"
                >
                  <h3 className="text-[#0066ff] font-medium text-lg mb-6 pb-4 border-b border-white/5">
                    {year.title}
                  </h3>
                  <ul className="space-y-4">
                    {year.subjects.map((subject, sIdx) => {
                      // Separate the acronym from the title for styling (e.g. "DSA — ...")
                      const parts = subject.split(" — ");
                      return (
                        <li key={sIdx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 flex-shrink-0" />
                          <p className="text-[14px] md:text-[15px] leading-relaxed font-light text-white/70">
                            {parts.length > 1 ? (
                              <>
                                <span className="font-medium text-white/90">{parts[0]}</span>
                                <span className="opacity-50"> — </span>
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

        {/* Lead Capture / Syllabus CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h4 className="text-xl md:text-2xl font-medium text-white mb-2">Want the full breakdown?</h4>
            <p className="text-white/50 text-[14px] md:text-[15px] font-light">
              Get the comprehensive syllabus including all modules, electives, and outcomes.
            </p>
          </div>
          <button className="flex-shrink-0 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-semibold text-[13px] uppercase tracking-widest transition-all hover:border-white/30 hover:-translate-y-0.5 group flex items-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-[#0066ff] transition-colors">
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