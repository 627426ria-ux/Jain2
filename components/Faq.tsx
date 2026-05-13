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
      
      {/* --- LOCALIZED SECTION GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.03),transparent_60%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
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
              Got Questions?
            </span>
            <div className="w-8 h-[1px] bg-[#0066ff]" />
          </motion.div>
          <motion.h2 
            variants={itemVars}
            className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1] text-white"
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
          className="flex flex-col gap-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                variants={itemVars}
                key={index}
                className={`rounded-[20px] backdrop-blur-md border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-[#02040a]/60 border-[#0066ff]/30 shadow-[0_10px_30px_-10px_rgba(0,102,255,0.15)]" 
                    : "bg-[#02040a]/30 border-white/5 hover:bg-white/[0.03] hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className={`text-[16px] md:text-[18px] font-medium pr-8 transition-colors duration-300 ${isOpen ? "text-[#0066ff]" : "text-white"}`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-[#0066ff]/50 bg-[#0066ff]/10 text-[#0066ff]" : "border-white/10 text-white/50"}`}>
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
                      <div className="px-6 pb-8 md:px-8 text-white/60 text-[14px] md:text-[15px] leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Secondary Conversion CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-white/5 text-center"
        >
          <p className="text-white/50 text-[15px] font-light mb-6">
            Didn't find what you're looking for?
          </p>
          <button className="bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-[#0066ff] px-8 py-3.5 rounded-full font-medium text-[13px] uppercase tracking-widest transition-all">
            Contact Support Team
          </button>
        </motion.div>

      </div>
    </section>
  );
}