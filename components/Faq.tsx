"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVars: Variants = {
    // Subtle scale reveal for premium feel
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
    <section id = 'faq' className="relative z-20 w-full py-20 sm:py-24 md:py-32 bg-transparent overflow-hidden px-4 sm:px-6">
      
      {/* --- LOCALIZED SECTION GLOW (Light Mode) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        
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
              Got Questions?
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-[#0066ff]" />
          </motion.div>
          <motion.h2 
            variants={itemVars}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-[#02040a]"
          >
            Frequently Asked <span className="text-[#0066ff] font-medium">Questions</span>
          </motion.h2>
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-3 sm:gap-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                variants={itemVars}
                key={index}
                // Updated to clean white cards with soft borders and shadows
                className={`rounded-[20px] bg-white border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-[#0066ff]/30 shadow-[0_15px_40px_-10px_rgba(0,102,255,0.12)]" 
                    : "border-gray-200 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:border-[#0066ff]/20 hover:shadow-[0_8px_25px_rgba(0,0,0,0.04)]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className={`text-[15px] sm:text-[16px] md:text-[18px] font-medium pr-6 sm:pr-8 transition-colors duration-300 ${isOpen ? "text-[#0066ff]" : "text-[#02040a] group-hover:text-[#0066ff]"}`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-[#0066ff]/30 bg-[#0066ff]/5 text-[#0066ff]" : "border-gray-200 text-gray-400 group-hover:border-[#0066ff]/30 group-hover:text-[#0066ff]"}`}>
                    <motion.svg 
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </motion.svg>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 md:px-8 text-[#02040a]/70 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Secondary Conversion CTA (Fluid Stack on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-200 text-center flex flex-col items-center"
        >
          <p className="text-[#02040a]/60 text-[14px] sm:text-[15px] font-light mb-5 sm:mb-6 px-4">
            Didn't find what you're looking for?
          </p>
          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#02040a] border border-gray-200 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-[12px] sm:text-[13px] uppercase tracking-widest shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all hover:border-[#0066ff]/30 hover:text-[#0066ff] hover:-translate-y-0.5">
            Contact Support Team
          </button>
        </motion.div>

      </div>
    </section>
  );
}