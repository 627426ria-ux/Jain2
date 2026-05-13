"use client";
import { motion, Variants } from "framer-motion";

export default function ImageCTA() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVars: Variants = {
    // Subtle scale reveal matching the rest of the light mode layout
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
    <section className="relative z-10 w-full min-h-[90vh] flex items-center py-20 sm:py-24 bg-white overflow-hidden">
      
      {/* --- INFINITE BLEND BACKGROUND (Light Mode) --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop" 
          alt="Student Success" 
          // Opacity reduced slightly to ensure dark text remains highly readable
          className="w-full h-full object-cover object-center opacity-15 md:opacity-20 grayscale"
        />
        
        {/* Top Fade: Masks the 'edge' into the section above */}
        <div className="absolute inset-x-0 top-0 h-40 sm:h-64 bg-gradient-to-b from-white to-transparent" />
        
        {/* Bottom Fade: Transitions smoothly into the next section/footer */}
        <div className="absolute inset-x-0 bottom-0 h-40 sm:h-64 bg-gradient-to-t from-white to-transparent" />

        {/* Side Masks: Pulls the focus to the center/left content with a clean white fade */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-white via-white/90 to-transparent" />
        
        {/* The Section Spot Glow: Soft blue ambient light */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[150vw] sm:w-[70vw] h-[70vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.04),transparent_70%)] pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl"
        >
          {/* Social Proof (Clean/Minimal) */}
          <motion.div variants={itemVars} className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10 sm:mb-12">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i + 14}`} 
                      className="w-full h-full object-cover opacity-90" 
                      alt="Student"
                    />
                </div>
              ))}
            </div>
            
            <div className="hidden sm:block h-6 w-px bg-gray-200 mx-1" />

            <div>
              <div className="flex gap-1 text-[#0066ff] mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                ))}
              </div>
              <p className="text-[10px] md:text-[11px] text-[#0066ff] font-bold uppercase tracking-[0.25em]">
                Elite Student Network
              </p>
            </div>
          </motion.div>

          {/* Headline (Fluid sizing for perfect mobile scaling) */}
          <motion.h2 
            variants={itemVars}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-light tracking-tighter leading-[1.05] sm:leading-[0.95] text-[#02040a] mb-6 sm:mb-10"
          >
            The future is <br className="hidden sm:block" />
            <span className="text-[#0066ff] font-medium italic">just a funnel away</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            variants={itemVars}
            className="text-[#02040a]/60 text-base sm:text-lg md:text-xl leading-relaxed font-light mb-10 sm:mb-14 max-w-2xl"
          >
            Join 16,000+ students mastering the science of Lead Magnet creation and high-performance sales funnels.
          </motion.p>

          {/* CTA Buttons (Light Mode Stack) */}
          <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button className="w-full sm:w-auto bg-[#0066ff] hover:bg-[#0052cc] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.2em] transition-all shadow-[0_4px_15px_rgba(0,102,255,0.2)] hover:shadow-[0_10px_25px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-3">
              Reserve Seat
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white border border-gray-200 text-[#02040a]/60 hover:text-[#0066ff] hover:border-[#0066ff]/30 shadow-sm hover:shadow-md font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 group">
              Demo Session
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform sm:w-[18px] sm:h-[18px]"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </motion.div>

          {/* Minimal Urgency Marker */}
          <motion.div variants={itemVars} className="flex items-center gap-2 sm:gap-3 mt-12 sm:mt-16">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff] shadow-[0_0_8px_rgba(0,102,255,0.6)]" />
            <p className="text-[9px] sm:text-[10px] text-[#02040a]/40 font-bold uppercase tracking-[0.3em]">
              Only <span className="text-[#02040a]/70 italic">2 days left</span> for live sessions
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}