"use client";
import { motion } from "framer-motion";

const companies = ["Microsoft", "Infosys", "TCS", "Accenture", "IBM", "Wipro"];

export default function LogoTicker() {
  return (
    <section className="relative z-20 w-full pt-20 md:pt-32 pb-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#02040a]/50 font-semibold mb-10 md:mb-14"
        >
          Built in collaboration with industry leaders
        </motion.h2>

        {/* 
          FIXED: Removed the white gradient boxes.
          Added a CSS mask-image here. This smoothly fades the logos to transparent 
          at the edges, revealing your blue gradient background perfectly.
        */}
        <div className="relative w-full overflow-hidden flex items-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex flex-nowrap items-center gap-16 md:gap-32 pr-16 md:pr-32 w-max"
          >
            <div className="flex items-center gap-16 md:gap-32">
              {companies.map((company, index) => (
                <span 
                  key={`logo-1-${index}`} 
                  className="text-xl md:text-2xl font-bold tracking-tight text-[#02040a]/30 hover:text-[#02040a]/80 transition-colors duration-300 cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-16 md:gap-32">
              {companies.map((company, index) => (
                <span 
                  key={`logo-2-${index}`} 
                  className="text-xl md:text-2xl font-bold tracking-tight text-[#02040a]/30 hover:text-[#02040a]/80 transition-colors duration-300 cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}