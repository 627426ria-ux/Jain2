"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants, useReducedMotion } from "framer-motion";

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

const ACCENT = "#7b2fff";

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState(specialisations[0].id);
  const prefersReducedMotion = useReducedMotion();

  const activeData = specialisations.find((s) => s.id === activeTab);

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
    <section id="curriculum" className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">

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
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <motion.div
            variants={itemVars}
            className="flex items-center gap-3 mb-6"
            style={{ willChange: "opacity, transform, filter" }}
          >
            <div className="w-8 h-px" style={{ background: ACCENT }} />
            <span className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Deep Dive
            </span>
            <div className="w-8 h-px" style={{ background: ACCENT }} />
          </motion.div>

          <motion.h2
            variants={itemVars}
            className="text-3xl md:text-5xl font-thin tracking-tight leading-[1.1]"
            style={{ color: "#1a0050", willChange: "opacity, transform, filter" }}
          >
            <span className="font-light" style={{ color: ACCENT }}>Curriculum</span>
          </motion.h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20, filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
          style={{ willChange: "opacity, transform, filter" }}
        >
          {specialisations.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setActiveTab(spec.id)}
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-[12px] sm:text-[13px] font-light tracking-wide transition-all duration-300"
              style={
                activeTab === spec.id
                  ? {
                      background: "rgba(123,47,255,0.1)",
                      border: `1px solid rgba(123,47,255,0.45)`,
                      color: ACCENT,
                      boxShadow: "0 2px 16px rgba(123,47,255,0.12)",
                      // Active tab: own layer so style swaps don't dirty neighbours
                      transform: "translateZ(0)",
                    }
                  : {
                      background: "#ffffff",
                      border: "1px solid rgba(123,47,255,0.15)",
                      color: "rgba(30,0,80,0.4)",
                      boxShadow: "0 2px 8px rgba(123,47,255,0.04)",
                      transform: "translateZ(0)",
                    }
              }
            >
              {spec.title}
            </button>
          ))}
        </motion.div>

        {/* Tab Content
            AnimatePresence fires on every tab click — blur here is the worst offender
            because it hits the main thread on every user interaction, not just on scroll.
            On reduced-motion we drop to a plain opacity crossfade which is free. */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 15,
                filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)",
              }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : -15,
                filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)",
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
              style={{ willChange: "opacity, transform, filter" }}
            >
              {activeData?.years.map((year, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl p-6 sm:p-8 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(123,47,255,0.15)",
                    boxShadow: "0 2px 16px rgba(123,47,255,0.08), 0 8px 32px rgba(123,47,255,0.05)",
                    // Pre-promote for hover; also carried inside an AnimatePresence
                    // container so layer is ready before the crossfade completes
                    transform: "translateZ(0)",
                    willChange: "transform",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at top left, rgba(123,47,255,0.06), transparent 60%)" }}
                  />
                  {/* Hover border */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ border: "1px solid rgba(123,47,255,0.3)" }}
                  />

                  {/* Year title */}
                  <h3
                    className="relative z-10 font-light text-lg sm:text-xl mb-5 sm:mb-6 pb-4"
                    style={{
                      color: ACCENT,
                      borderBottom: "1px solid rgba(123,47,255,0.08)",
                    }}
                  >
                    {year.title}
                  </h3>

                  <ul className="relative z-10 space-y-3 sm:space-y-4">
                    {year.subjects.map((subject, sIdx) => {
                      const parts = subject.split(" — ");
                      return (
                        <li key={sIdx} className="flex items-start gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                            style={{ background: "rgba(123,47,255,0.4)" }}
                          />
                          <p className="text-[13px] sm:text-[14px] leading-relaxed font-thin" style={{ color: "rgba(30,0,80,0.5)" }}>
                            {parts.length > 1 ? (
                              <>
                                <span className="font-light" style={{ color: "rgba(30,0,80,0.8)" }}>{parts[0]}</span>
                                <span style={{ color: "rgba(30,0,80,0.2)" }}> — </span>
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