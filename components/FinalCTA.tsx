"use client";
import { motion, Variants } from "framer-motion";

export default function FinalCTA() {
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
    <section className="relative z-20 w-full pt-24 pb-32 md:pt-32 md:pb-40 bg-[#02040a] overflow-hidden border-t border-white/5">
      
      {/* --- MASSIVE BOTTOM ANCHOR GLOW --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[150vw] h-[80vh] md:w-[80vw] md:h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.08),transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-16 lg:gap-12"
        >
          
          {/* ========================================== */}
          {/* LEFT COLUMN: The Pitch & Direct Contact    */}
          {/* ========================================== */}
          <div className="flex-1 lg:max-w-xl flex flex-col justify-center">
            
            {/* Urgency Badge */}
            <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/20 mb-8 self-start">
              <span className="w-2 h-2 rounded-full bg-[#0066ff] animate-pulse" />
              <span className="text-[12px] font-semibold text-[#0066ff] tracking-widest uppercase">
                August 2026 Intake — Limited Seats
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              variants={itemVars}
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white mb-6"
            >
              Start your <span className="text-[#0066ff] font-medium">Work Integrated BCA</span> journey today.
            </motion.h2>

            <motion.p variants={itemVars} className="text-white/60 text-base md:text-lg leading-relaxed font-light mb-12">
              Applications are officially open. Secure your spot in the upcoming cohort and take the first step toward a high-impact career in AI and technology.
            </motion.p>

            {/* Direct Contact Grid */}
            <motion.div variants={itemVars} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {/* WhatsApp (Highest Conversion Priority in India) */}
              <a href="https://wa.me/917034047444" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.476 0 1.46 1.065 2.872 1.213 3.071.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] text-[#25D366] uppercase tracking-widest mb-1">Chat on WhatsApp</p>
                  <p className="text-white font-medium text-[15px]">+91-7034047444</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:support@jainsoft.co.in" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-white font-medium text-[15px]">support@jainsoft.co.in</p>
                </div>
              </a>
              
              {/* Phone (Fallback) */}
              <a href="tel:+917034047444" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-white font-medium text-[15px]">+91-7034047444</p>
                </div>
              </a>

              {/* Office Address */}
              <a href="#" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Visit Campus</p>
                  <p className="text-white font-medium text-[13px] truncate pr-2">Get Directions on Map</p>
                </div>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVars} className="flex items-center gap-4">
              <span className="text-[11px] text-white/40 uppercase tracking-widest mr-2">Follow Us:</span>
              <a href="https://facebook.com/jainschooloffuturetechnology" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com/jainsoft" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l6.19 3.27-6.19 3.27z"/></svg>
              </a>
            </motion.div>
          </div>

          {/* ========================================== */}
          {/* RIGHT COLUMN: Lead Capture Form            */}
          {/* ========================================== */}
          <motion.div 
            variants={itemVars}
            className="flex-1 w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="rounded-[32px] bg-[#02040a]/60 backdrop-blur-xl border border-white/10 p-8 md:p-10 shadow-[0_0_50px_rgba(0,102,255,0.05)] relative overflow-hidden">
              
              {/* Form subtle inner glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.08),transparent_60%)] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <h3 className="text-2xl font-medium text-white mb-2">Request an Application</h3>
              <p className="text-white/50 text-[14px] font-light mb-8">Fill out the form below and our admissions team will contact you shortly.</p>

              <form className="space-y-4">
                {/* 1. Name */}
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-[15px] text-white placeholder-white/30 focus:outline-none focus:border-[#0066ff]/50 focus:bg-white/10 transition-colors"
                  />
                </div>

                {/* 2. Grid: Mobile & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-[15px] text-white placeholder-white/30 focus:outline-none focus:border-[#0066ff]/50 focus:bg-white/10 transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-[15px] text-white placeholder-white/30 focus:outline-none focus:border-[#0066ff]/50 focus:bg-white/10 transition-colors"
                  />
                </div>

                {/* 3. City / State */}
                <div>
                  <input 
                    type="text" 
                    placeholder="City / State" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-[15px] text-white placeholder-white/30 focus:outline-none focus:border-[#0066ff]/50 focus:bg-white/10 transition-colors"
                  />
                </div>

                {/* 4. Specialisation Dropdown */}
                <div className="relative">
                  <select 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-[15px] text-white/70 appearance-none focus:outline-none focus:border-[#0066ff]/50 focus:bg-white/10 transition-colors"
                  >
                    <option value="" disabled selected>Preferred Specialisation</option>
                    <option value="full-stack" className="bg-[#02040a] text-white">Full Stack AI Development</option>
                    <option value="gen-ai" className="bg-[#02040a] text-white">Generative AI & Tech Mgmt</option>
                    <option value="applied-ai" className="bg-[#02040a] text-white">Applied AI & Data Analytics</option>
                    <option value="design-tech" className="bg-[#02040a] text-white">Design Technology</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>

                {/* 5. Source Dropdown */}
                <div className="relative">
                  <select 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-[15px] text-white/70 appearance-none focus:outline-none focus:border-[#0066ff]/50 focus:bg-white/10 transition-colors"
                  >
                    <option value="" disabled selected>How did you hear about us?</option>
                    <option value="google" className="bg-[#02040a] text-white">Google Search</option>
                    <option value="social" className="bg-[#02040a] text-white">Social Media (Instagram/FB)</option>
                    <option value="youtube" className="bg-[#02040a] text-white">YouTube</option>
                    <option value="referral" className="bg-[#02040a] text-white">Friend / Referral</option>
                    <option value="other" className="bg-[#02040a] text-white">Other</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>

                {/* 6. Message */}
                <div>
                  <textarea 
                    placeholder="Any specific questions? (Optional)" 
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-[15px] text-white placeholder-white/30 focus:outline-none focus:border-[#0066ff]/50 focus:bg-white/10 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Form Submit CTA */}
                <button 
                  type="submit"
                  className="w-full mt-4 bg-[#0066ff] hover:bg-[#0052cc] text-white py-4.5 rounded-xl font-semibold text-[14px] uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(0,102,255,0.5)] hover:-translate-y-0.5"
                >
                  Submit Application Request
                </button>

                <p className="text-center text-[11px] text-white/30 mt-4 font-light flex items-center justify-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Your information is secure and will never be shared.
                </p>

              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}