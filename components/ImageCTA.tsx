"use client";
import { motion, Variants } from "framer-motion";

export default function ImageCTA() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
    // Removed border-t and solid bg colors to ensure seamless blending
    <section className="relative z-10 w-full min-h-[90vh] flex items-center py-24 bg-transparent overflow-hidden">
      
      {/* --- INFINITE BLEND BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop" 
          alt="Student Success" 
          className="w-full h-full object-cover object-center opacity-25 md:opacity-35 grayscale-[0.6]"
        />
        
        {/* Top Fade: Masks the 'edge' of the section so there is no visible border */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#02040a] to-transparent" />
        
        {/* Bottom Fade: Transitions smoothly into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#02040a] to-transparent" />

        {/* Side Masks: Pulls the focus to the center/left content */}
        <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-[#02040a] via-[#02040a]/60 to-transparent mix-blend-multiply" />
        
        {/* The Section Spot Glow: Minimal and subtle to avoid boxiness */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[70vw] h-[70vw] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.08),transparent_70%)] pointer-events-none mix-blend-screen" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl"
        >
          {/* Social Proof (Clean/Minimal) */}
          <motion.div variants={itemVars} className="flex items-center gap-5 mb-12">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#02040a] bg-white/5 overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i + 14}`} 
                      className="w-full h-full object-cover opacity-80" 
                      alt="Student"
                    />
                </div>
              ))}
            </div>
            
            <div className="h-6 w-px bg-white/10 mx-1" />

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

          {/* Headline (Thin/Medium Jakarta Contrast) */}
          <motion.h2 
            variants={itemVars}
            className="text-5xl md:text-7xl lg:text-[7.5rem] font-light tracking-tighter leading-[0.95] text-white mb-10"
          >
            The future is <br />
            <span className="text-[#0066ff] font-medium italic">just a funnel away</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            variants={itemVars}
            className="text-white/50 text-lg md:text-xl leading-relaxed font-light mb-14 max-w-2xl"
          >
            Join 16,000+ students mastering the science of Lead Magnet creation and high-performance sales funnels.
          </motion.p>

          {/* CTA Buttons (Removed shadows to keep it flatter/more minimal as requested) */}
          <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center gap-6">
            <button className="w-full sm:w-auto bg-[#0066ff] hover:bg-[#0052cc] text-white px-12 py-5 rounded-full font-bold text-[12px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
              Reserve Seat
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            
            <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/5 text-white/40 hover:text-white hover:bg-white/10 font-bold text-[12px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group">
              Demo Session
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </motion.div>

          {/* Minimal Urgency Marker */}
          <motion.div variants={itemVars} className="flex items-center gap-3 mt-16">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0066ff] shadow-[0_0_10px_rgba(0,102,255,1)]" />
            <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">
              Only <span className="text-white/40 italic">2 days left</span> for live sessions
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}