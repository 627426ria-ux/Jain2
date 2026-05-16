"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
          "Data Structures and Algorithms",
          "Digital Electronics and Computer Organisation",
          "Maths and Statistics Foundation",
          "Database Design",
          "Object Oriented & Concurrent Programming using Java",
          "Design Thinking",
        ],
      },
      {
        title: "Year 2",
        subjects: [
          "Deep Learning",
          "Full Stack Application Development",
          "Data Science",
          "Advanced Mathematics for Computing",
          "Soft Computing",
          "Advanced Machine Learning",
        ],
      },
      {
        title: "Year 3",
        subjects: [
          "Big Data Analytics",
          "Reinforcement Learning",
          "Explainable AI",
          "AI System Engineering",
          "Speech & Multimodal AI",
          "Algorithm Design and Analysis",
          "Artificial General Intelligence and Superintelligence",
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
    ],
  },
  {
    id: "gen-ai-tech",
    title: "Generative AI & Tech Management",
    years: [
      {
        title: "Year 1 (Sem 1 & 2)",
        subjects: [
          "Computational Thinking with Python",
          "Economics",
          "Digital Electronics and Computer Organisation",
          "Maths and Statistics Foundation",
          "English & Hindi",
          "Data Structures and Algorithms",
          "Artificial Intelligence & Machine Learning",
          "Business Finance",
          "Design Thinking",
          "Organisational Behaviour",
          "Foreign Language",
        ],
      },
      {
        title: "Year 2 (Sem 3 & 4)",
        subjects: [
          "Database Design",
          "Full Stack Application Development",
          "Operational Management",
          "Computer Networks",
          "Data Analytics",
          "Constitution of India",
          "Operations Research",
          "Introduction to Deep Learning",
          "Business Information Systems & Data Technology",
          "Marketing",
          "Creative Writing",
          "Indian Knowledge Systems",
        ],
      },
      {
        title: "Year 3 (Sem 5 & 6)",
        subjects: [
          "Business Intelligence",
          "Data Mining & Warehousing",
          "Generative AI: Foundations and Tools",
          "Management Science",
          "Business Communication",
          "Introduction to Supply Chain Management",
          "Generative AI: Large Language Models to Agents",
          "Advanced Corporate Finance",
          "DevOps",
          "Universal Human Values",
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

  return (
    <section id="curriculum" className="relative z-20 w-full py-20 sm:py-24 md:py-32 bg-transparent overflow-hidden px-4 sm:px-6">

      {/* Localised cyan glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,229,255,0.04), transparent 60%)" }}
      />

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
            <div className="w-6 sm:w-8 h-px bg-[#00e5ff]" />
            <span className="text-[10px] sm:text-[11px] text-[#00e5ff] font-light tracking-[0.2em] uppercase">
              Deep Dive
            </span>
            <div className="w-6 sm:w-8 h-px bg-[#00e5ff]" />
          </motion.div>
          <motion.h2
            variants={itemVars}
            className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-tight leading-[1.1] text-white"
          >
            
            <span className="text-[#00e5ff] font-light">Curriculum</span>
          </motion.h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
        >
          {specialisations.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setActiveTab(spec.id)}
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-[12px] sm:text-[13px] font-light tracking-wide transition-all duration-300"
              style={
                activeTab === spec.id
                  ? {
                      background: "rgba(0,229,255,0.15)",
                      border: "1px solid rgba(0,229,255,0.45)",
                      color: "#00e5ff",
                      boxShadow: "0 0 20px rgba(0,229,255,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }
                  : {
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.4)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }
              }
            >
              {spec.title}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            >
              {activeData?.years.map((year, index) => (
                <div
                  key={index}
                  className="rounded-3xl p-6 sm:p-8 group hover:-translate-y-1 transition-all duration-500"
                  style={glass}
                >
                  {/* Year title */}
                  <h3
                    className="font-light text-lg sm:text-xl mb-5 sm:mb-6 pb-4"
                    style={{
                      color: "#00e5ff",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      textShadow: "0 0 20px rgba(0,229,255,0.4)",
                    }}
                  >
                    {year.title}
                  </h3>

                  <ul className="space-y-3 sm:space-y-4">
                    {year.subjects.map((subject, sIdx) => {
                      const parts = subject.split(" — ");
                      return (
                        <li key={sIdx} className="flex items-start gap-3">
                          {/* Dot */}
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                            style={{ background: "rgba(0,229,255,0.5)" }}
                          />
                          <p className="text-[13px] sm:text-[14px] leading-relaxed font-thin text-white/50">
                            {parts.length > 1 ? (
                              <>
                                <span className="font-light text-white/80">{parts[0]}</span>
                                <span className="text-white/25"> — </span>
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

      </div>
    </section>
  );
}