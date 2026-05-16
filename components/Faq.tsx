"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants, useReducedMotion } from "framer-motion";

const faqs = [
  {
    question: "What makes the Work-Integrated BCA at JAIN School of Future Technology unique?",
    answer: "It blends rigorous academic learning with actual industry experience. You work with leading tech companies while studying, allowing you to graduate with both a UGC-recognised degree and up to 2 years of professional work experience.",
  },
  {
    question: "What are the specialisations offered?",
    answer: "We offer four highly targeted tracks: Full Stack AI Development, Generative AI & Technology Management, Applied AI & Data Analytics, and Design Technology.",
  },
  {
    question: "How does the work-integrated model benefit students?",
    answer: "Students bridge the gap between theory and practice, build a strong professional network, earn a potential stipend, and graduate deployment-ready, giving them a massive head start over traditional graduates.",
  },
  {
    question: "What career opportunities does this programme open up?",
    answer: "Depending on your specialisation, roles include AI Developer, Product Manager, Data Analyst, UX Strategist, and more across top global tech firms and innovative startups.",
  },
  {
    question: "Why choose JAIN School of Future Technology for your BCA?",
    answer: "We provide an industry-aligned curriculum, elite mentorship from top tech professionals, real-world project portfolios, and direct placement opportunities at Infopark, Kochi.",
  },
  {
    question: "What is the eligibility to apply?",
    answer: "Applicants must have an academic aggregate of 70-85% in their 10+2 or equivalent examinations to be considered for admission.",
  },
  {
    question: "Is the degree recognised? Who awards it?",
    answer: "Yes, the BCA degree is awarded by JAIN (Deemed-to-be University), which is fully recognised by the UGC.",
  },
  {
    question: "Where are students placed during the work-integrated period?",
    answer: "Students are placed with leading tech companies at Infopark, Kochi, where they engage in 20+ hours per week of live, hands-on industry experience.",
  },
  {
    question: "How much does the programme cost? Are there scholarships?",
    answer: "Fee structures vary slightly by specialisation. We do offer merit-based scholarships and financial aid options for eligible students. Please speak with an academic advisor for a detailed fee breakdown.",
  },
  {
    question: "Can students from Arts or Commerce background apply?",
    answer: "Yes! The programme is open to students from diverse academic backgrounds, provided they meet the minimum eligibility criteria and demonstrate a strong aptitude for technology and problem-solving.",
  },
  {
    question: "Do students earn a stipend during their work placement?",
    answer: "Yes, depending on the partner company and the student's performance, candidates can earn a performance-based stipend during their work-integrated learning period in Year 2 and Year 3.",
  },
];

const ACCENT = "#7b2fff";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  // ── Optimized Variants: No Blurs, No Hydration Mismatches ──
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.08, 
        delayChildren: shouldReduceMotion ? 0 : 0.1 
      },
    },
  };

  const itemVars: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="faq" className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">

      {/* Background glow — static */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[55vw] md:h-[55vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(123,47,255,0.06), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          // FIX: Changed to "-50px 0px" to protect mobile X-axis intersection
          viewport={{ once: true, margin: "-50px 0px" }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <motion.div
            variants={itemVars}
            className="flex items-center gap-3 mb-6"
            // FIX: Removed filter from willChange
            style={{ willChange: "opacity, transform" }}
          >
            <div className="w-8 h-px" style={{ background: ACCENT }} />
            <span className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Got Questions?
            </span>
            <div className="w-8 h-px" style={{ background: ACCENT }} />
          </motion.div>

          <motion.h2
            variants={itemVars}
            className="text-3xl md:text-5xl font-thin tracking-tight leading-[1.1]"
            // FIX: Removed filter from willChange
            style={{ color: "#1a0050", willChange: "opacity, transform" }}
          >
            Frequently Asked{" "}
            <span className="font-light" style={{ color: ACCENT }}>Questions</span>
          </motion.h2>
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px 0px" }}
          className="flex flex-col gap-3 sm:gap-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                variants={itemVars}
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "rgba(123,47,255,0.04)" : "#ffffff",
                  border: isOpen
                    ? "1px solid rgba(123,47,255,0.3)"
                    : "1px solid rgba(123,47,255,0.15)",
                  boxShadow: isOpen
                    ? "0 4px 24px rgba(123,47,255,0.12), 0 8px 32px rgba(123,47,255,0.06)"
                    : "0 2px 16px rgba(123,47,255,0.08), 0 8px 32px rgba(123,47,255,0.05)",
                  // FIX: Removed filter from willChange
                  willChange: "opacity, transform",
                  transform: "translateZ(0)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 md:p-8 text-left focus:outline-none cursor-pointer"
                >
                  <span
                    className="text-[15px] sm:text-[16px] md:text-[17px] font-light pr-6 sm:pr-8 transition-colors duration-300"
                    style={{ color: isOpen ? ACCENT : "#1a0050" }}
                  >
                    {faq.question}
                  </span>

                  {/* Plus/Minus icon */}
                  <div
                    className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isOpen ? "rgba(123,47,255,0.1)" : "rgba(123,47,255,0.05)",
                      border: isOpen
                        ? "1px solid rgba(123,47,255,0.35)"
                        : "1px solid rgba(123,47,255,0.18)",
                      color: isOpen ? ACCENT : "rgba(30,0,80,0.35)",
                    }}
                  >
                    <motion.svg
                      animate={shouldReduceMotion ? {} : { rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ willChange: "transform" }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </motion.svg>
                  </div>
                </button>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="px-5 pb-6 sm:px-6 sm:pb-8 md:px-8 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-thin"
                        style={{ color: "rgba(30,0,80,0.55)" }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-10 text-center flex flex-col items-center"
          style={{
            borderTop: "1px solid rgba(123,47,255,0.1)",
            willChange: "opacity, transform",
          }}
        >
          <p
            className="text-[14px] sm:text-[15px] font-thin mb-5 sm:mb-6 px-4"
            style={{ color: "rgba(30,0,80,0.45)" }}
          >
            Didn't find what you're looking for?
          </p>
          
          {/* Button: CSS hover only — removed JS onMouseEnter/whileHover */}
          <button
            className="support-btn w-full sm:w-auto text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-light text-[12px] sm:text-[13px] uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
            style={{ background: ACCENT }}
          >
            Contact Support Team
            <span className="btn-arrow text-base leading-none font-thin">→</span>
          </button>
        </motion.div>

      </div>

      {/* ── Global CSS: Zero JS Style Mutations ── */}
      <style>{`
        /* Support CTA Button */
        .support-btn {
          box-shadow: 0 10px 30px rgba(123,47,255,0.25);
          transition: box-shadow 0.3s ease, transform 0.2s ease;
        }
        
        .support-btn:hover {
          box-shadow: 0 15px 40px rgba(123,47,255,0.4);
          transform: scale(1.02);
        }
        
        .support-btn:active {
          transform: scale(0.98);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .support-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Reduced Motion Fallback */
        @media (prefers-reduced-motion: reduce) {
          .support-btn,
          .support-btn:hover,
          .support-btn:active,
          .btn-arrow {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}