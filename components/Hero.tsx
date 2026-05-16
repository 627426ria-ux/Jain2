"use client";
import { motion, Variants, useReducedMotion } from "framer-motion";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

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

  const driveFileId = "194XCFquD6K4srk_lmdhqwqUxlCZ2Ngoq";
  const brochureDownloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  return (
    <section className="relative z-30 w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center pt-32 pb-6 sm:pt-[15vh] md:pt-[18vh] sm:pb-[8vh] md:pb-[12vh]">
      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-5xl flex flex-col items-center w-full"
      >
        {/* Urgency Badge */}
        <motion.div
          variants={itemVars}
          className="flex items-center gap-2 sm:gap-2.5 mb-6 sm:mb-8 rounded-full px-4 sm:px-5 py-1.5 sm:py-2"
          style={{
            background: "rgba(123,47,255,0.08)",
            border: "1px solid rgba(123,47,255,0.2)",
            willChange: "opacity, transform, filter",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
          <span
            className="text-[9px] sm:text-[12px] font-light tracking-widest uppercase"
            style={{ color: "rgba(80,20,160,0.7)" }}
          >
            Only 23 seats remaining — Closes June 20
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVars}
          className="text-4xl sm:text-[3.2rem] md:text-[4.8rem] lg:text-[6rem] font-thin tracking-tight sm:tracking-[-0.03em] leading-[1.15] sm:leading-[1.05] mb-6 sm:mb-8"
          style={{
            color: "#1a0050",
            willChange: "opacity, transform, filter",
          }}
        >
          <span className="font-regular" style={{ color: "#7b2fff" }}>
            India's First
          </span>{" "}
          Work <br className="hidden sm:block" />
          Integrated BCA Program
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVars}
          className="max-w-2xl text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed sm:leading-[1.7] font-thin tracking-wide mb-8 sm:mb-10 px-2 sm:px-0"
          style={{
            color: "rgba(30,0,80,0.55)",
            willChange: "opacity, transform, filter",
          }}
        >
          Earn a UGC-recognised BCA degree + 2 years of real industry experience
          while you study — not after.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVars}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-[280px] sm:max-w-none mx-auto"
          style={{ willChange: "opacity, transform, filter" }}
        >
          {/* Primary Button */}
          <motion.button
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            className="w-full sm:w-auto justify-center text-white px-8 py-4 rounded-full font-light text-[12px] sm:text-[13px] uppercase tracking-widest transition-all flex items-center gap-2.5 group"
            style={{
              background: "#7b2fff",
              boxShadow: "0 10px 30px rgba(123,47,255,0.35)",
              transform: "translateZ(0)",
              willChange: "transform",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(123,47,255,0.55)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(123,47,255,0.35)")
            }
          >
            Apply now
            <span className="text-base leading-none pb-[1px] font-thin group-hover:translate-x-1 transition-transform">
              {"→"}
            </span>
          </motion.button>

          {/* Secondary Button — Download Brochure */}
          <motion.a
            href={brochureDownloadUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={prefersReducedMotion ? {} : { opacity: 1, x: 4 }}
            className="w-full sm:w-auto justify-center px-6 py-4 font-light text-[12px] sm:text-[13px] uppercase tracking-widest transition-all flex items-center gap-2.5 group cursor-pointer"
            style={{
              color: "rgba(123,47,255,0.5)",
              transform: "translateZ(0)",
              willChange: "transform",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(123,47,255,1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(123,47,255,0.5)")
            }
          >
            Download brochure
            <span className="text-base leading-none pb-[1px] font-thin group-hover:translate-x-1 transition-transform">
              {"→"}
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}