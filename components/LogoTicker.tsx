"use client";
import { motion, useReducedMotion } from "framer-motion";

const companies = ["Microsoft", "Infosys", "TCS", "Accenture", "IBM", "Wipro"];

export default function LogoTicker() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative z-20 w-full pt-20 md:pt-32 pb-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-light mb-10 md:mb-14"
          style={{ color: "rgba(30,0,80,0.4)", willChange: "opacity, transform" }}
        >
          Built in collaboration with industry leaders
        </motion.p>

        <div className="relative w-full overflow-hidden flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            // On reduced-motion: freeze the ticker in place — a moving element
            // that never stops is one of the most disorienting experiences for
            // users with vestibular disorders, and also the worst battery drain
            // on low-end devices since it schedules a compositor frame every 16ms forever.
            animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex flex-nowrap items-center gap-16 md:gap-32 pr-16 md:pr-32 w-max"
            style={{
              // Continuous infinite x-transform must live on its own GPU compositor
              // layer or it will schedule a main-thread paint every single frame.
              // These two properties together guarantee compositor-thread-only animation.
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          >
            {[1, 2].map((set) => (
              <div key={set} className="flex items-center gap-16 md:gap-32">
                {companies.map((company, index) => (
                  <span
                    key={`logo-${set}-${index}`}
                    className="text-xl md:text-2xl font-light tracking-tight cursor-default transition-colors duration-300"
                    style={{ color: "rgba(123,47,255,0.55)" }}
                  >
                    {company}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}