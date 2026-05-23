"use client";
import { motion, Variants, useReducedMotion } from "framer-motion";

const ACCENT = "#7b2fff";
const WHATSAPP = "#25D366";

export default function FinalCTA() {
  const prefersReducedMotion = useReducedMotion();

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVars: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const card = {
    background: "#ffffff",
    border: "1px solid rgba(123,47,255,0.15)",
    boxShadow: "0 2px 16px rgba(123,47,255,0.08), 0 8px 32px rgba(123,47,255,0.05)",
  };

  /* ── Social links extracted so they can be rendered in two places ── */
  const SocialLinks = ({ className = "" }: { className?: string }) => (
    <motion.div variants={itemVars} className={`pt-2 ${className}`}>
      <p className="text-[10px] font-light uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(30,0,80,0.3)" }}>
        Follow Us
      </p>
      <div className="flex items-center gap-3">
        {[
          {
            href: "https://facebook.com/jainschooloffuturetechnology",
            label: "Facebook",
            svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor"/>,
          },
          {
            href: "https://instagram.com/jainsoft",
            label: "Instagram",
            svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="1.5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
          },
          {
            href: "#",
            label: "LinkedIn",
            svg: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="currentColor"/><rect x="2" y="9" width="4" height="12" fill="currentColor"/><circle cx="4" cy="4" r="2" fill="currentColor"/></>,
          },
          {
            href: "#",
            label: "YouTube",
            svg: <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l6.19 3.27-6.19 3.27z" fill="currentColor"/>,
          },
        ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="social-icon w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgba(123,47,255,0.06)",
              border: "1px solid rgba(123,47,255,0.18)",
              color: "rgba(30,0,80,0.35)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24">{s.svg}</svg>
          </a>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="cta" className="relative z-20 w-full py-24 md:py-32 bg-transparent overflow-hidden">

      {/* Background glow — matches rest of site */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[55vw] md:h-[55vw] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(123,47,255,0.07), transparent 65%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section Header ── */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div
            variants={itemVars}
            className="flex items-center gap-3 mb-6"
            style={{ willChange: "opacity, transform, filter" }}
          >
            <div className="w-8 h-px" style={{ background: ACCENT }} />
            <span className="text-[11px] font-light tracking-[0.2em] uppercase" style={{ color: ACCENT }}>
              Begin Your Journey
            </span>
            <div className="w-8 h-px" style={{ background: ACCENT }} />
          </motion.div>

          <motion.h2
            variants={itemVars}
            className="text-3xl md:text-5xl font-thin tracking-tight leading-[1.1] mb-5"
            style={{ color: "#1a0050", willChange: "opacity, transform, filter" }}
          >
            Applications are open.{" "}
            <span className="font-light" style={{ color: ACCENT }}>Start today.</span>
          </motion.h2>

          <motion.div
            variants={itemVars}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(123,47,255,0.08)",
              border: "1px solid rgba(123,47,255,0.25)",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: ACCENT }} />
            <span className="text-[11px] font-light tracking-widest uppercase" style={{ color: ACCENT }}>
              August 2026 Batch — Limited Seats
            </span>
          </motion.div>
        </motion.div>

        {/* ── Two-column layout ── */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col lg:flex-row gap-6 md:gap-8"
        >

          {/* ── LEFT: Contact Cards ── */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:max-w-sm">

            {/* WhatsApp — highest priority */}
            <motion.a
              variants={itemVars}
              href="https://wa.me/917034047444"
              target="_blank"
              rel="noreferrer"
              className="contact-tile group relative flex items-center gap-5 p-6 rounded-2xl overflow-hidden"
              style={{
                background: "#f0fdf4",
                border: "1px solid rgba(37,211,102,0.35)",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: "rgba(37,211,102,0.08)" }}
              />
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                style={{
                  background: "rgba(37,211,102,0.2)",
                  border: "1px solid rgba(37,211,102,0.4)",
                  color: "#16a34a",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.476 0 1.46 1.065 2.872 1.213 3.071.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.2em] font-light mb-1" style={{ color: "#16a34a" }}>
                  Chat on WhatsApp
                </p>
                <p className="text-[17px] font-light" style={{ color: "#1a0050" }}>+91-7034047444</p>
              </div>
              <div className="ml-auto relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
                style={{ color: "#16a34a" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={itemVars}
              href="mailto:Admissions@jainsoft.co.in"
              className="contact-tile group relative flex items-center gap-5 p-6 rounded-2xl overflow-hidden"
              style={{ ...card }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at top left, rgba(123,47,255,0.05), transparent 60%)" }}
              />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: "1px solid rgba(123,47,255,0.3)" }}
              />
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                style={{ background: "rgba(123,47,255,0.08)", border: "1px solid rgba(123,47,255,0.2)", color: ACCENT }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.2em] font-light mb-1" style={{ color: "rgba(30,0,80,0.35)" }}>
                  Email Us
                </p>
                <p className="text-[15px] font-light" style={{ color: "#1a0050" }}>Admissions@jainsoft.co.in</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              variants={itemVars}
              href="tel:+917034047444"
              className="contact-tile group relative flex items-center gap-5 p-6 rounded-2xl overflow-hidden"
              style={{ ...card }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at top left, rgba(123,47,255,0.05), transparent 60%)" }}
              />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: "1px solid rgba(123,47,255,0.3)" }}
              />
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                style={{ background: "rgba(123,47,255,0.08)", border: "1px solid rgba(123,47,255,0.2)", color: ACCENT }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.2em] font-light mb-1" style={{ color: "rgba(30,0,80,0.35)" }}>
                  Call Us
                </p>
                <p className="text-[15px] font-light" style={{ color: "#1a0050" }}>+91-7034047444</p>
              </div>
            </motion.a>

            {/* Visit Campus */}
            <motion.a
              variants={itemVars}
              href="#"
              target="_blank"
              rel="noreferrer"
              className="contact-tile group relative flex items-center gap-5 p-6 rounded-2xl overflow-hidden"
              style={{ ...card }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at top left, rgba(123,47,255,0.05), transparent 60%)" }}
              />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: "1px solid rgba(123,47,255,0.3)" }}
              />
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                style={{ background: "rgba(123,47,255,0.08)", border: "1px solid rgba(123,47,255,0.2)", color: ACCENT }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.2em] font-light mb-1" style={{ color: "rgba(30,0,80,0.35)" }}>
                  Visit Campus
                </p>
                <p className="text-[15px] font-light" style={{ color: "#1a0050" }}>Infopark, Kochi</p>
                <p className="text-[12px] font-thin mt-0.5" style={{ color: "rgba(30,0,80,0.4)" }}>Get directions →</p>
              </div>
            </motion.a>

            {/* Social Links — desktop only (stays in left column) */}
            <SocialLinks className="hidden lg:block" />
          </div>

          {/* ── RIGHT: Enquiry Form ── */}
          <motion.div
            variants={itemVars}
            className="flex-1 w-full"
            style={{ willChange: "opacity, transform, filter" }}
          >
            <div
              className="relative rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden h-full"
              style={{ ...card }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 inset-x-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(123,47,255,0.35), transparent)" }}
              />
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top right, rgba(123,47,255,0.06), transparent 65%)" }}
              />

              <div className="relative z-10 mb-7">
                <h3 className="text-2xl sm:text-3xl font-light mb-2 tracking-tight" style={{ color: "#1a0050" }}>
                  Request an Application
                </h3>
                <p className="text-[13px] sm:text-[14px] font-thin leading-relaxed" style={{ color: "rgba(30,0,80,0.5)" }}>
                  Fill out the form below and our admissions team will contact you shortly.
                </p>
              </div>

              <div className="relative z-10 space-y-4">
                {/* Full Name */}
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="form-input w-full rounded-xl px-5 py-4 text-[15px] font-light focus:outline-none transition-all"
                  style={{
                    background: "rgba(123,47,255,0.03)",
                    border: "1px solid rgba(123,47,255,0.15)",
                    color: "#1a0050",
                  }}
                />

                {/* Mobile + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    required
                    className="form-input w-full rounded-xl px-5 py-4 text-[15px] font-light focus:outline-none transition-all"
                    style={{ background: "rgba(123,47,255,0.03)", border: "1px solid rgba(123,47,255,0.15)", color: "#1a0050" }}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="form-input w-full rounded-xl px-5 py-4 text-[15px] font-light focus:outline-none transition-all"
                    style={{ background: "rgba(123,47,255,0.03)", border: "1px solid rgba(123,47,255,0.15)", color: "#1a0050" }}
                  />
                </div>

                {/* City / State */}
                <input
                  type="text"
                  placeholder="City / State"
                  className="form-input w-full rounded-xl px-5 py-4 text-[15px] font-light focus:outline-none transition-all"
                  style={{ background: "rgba(123,47,255,0.03)", border: "1px solid rgba(123,47,255,0.15)", color: "#1a0050" }}
                />

                {/* Specialisation */}
                <div className="relative">
                  <select
                    required
                    className="form-input w-full rounded-xl px-5 py-4 text-[15px] font-light appearance-none focus:outline-none transition-all"
                    style={{
                      background: "rgba(123,47,255,0.03)",
                      border: "1px solid rgba(123,47,255,0.15)",
                      color: "rgba(30,0,80,0.45)",
                    }}
                  >
                    <option value="" disabled>Preferred Specialisation</option>
                    <option value="full-stack" style={{ color: "#1a0050" }}>Full Stack AI Development</option>
                    <option value="gen-ai" style={{ color: "#1a0050" }}>Generative AI &amp; Tech Management</option>
                    <option value="applied-ai" style={{ color: "#1a0050" }}>Applied AI &amp; Data Analytics</option>
                    <option value="design-tech" style={{ color: "#1a0050" }}>Design Technology</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(30,0,80,0.3)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>

                {/* Source */}
                <div className="relative">
                  <select
                    required
                    className="form-input w-full rounded-xl px-5 py-4 text-[15px] font-light appearance-none focus:outline-none transition-all"
                    style={{
                      background: "rgba(123,47,255,0.03)",
                      border: "1px solid rgba(123,47,255,0.15)",
                      color: "rgba(30,0,80,0.45)",
                    }}
                  >
                    <option value="" disabled>How did you hear about us?</option>
                    <option value="google" style={{ color: "#1a0050" }}>Google Search</option>
                    <option value="social" style={{ color: "#1a0050" }}>Social Media (Instagram / Facebook)</option>
                    <option value="youtube" style={{ color: "#1a0050" }}>YouTube</option>
                    <option value="referral" style={{ color: "#1a0050" }}>Friend / Referral</option>
                    <option value="other" style={{ color: "#1a0050" }}>Other</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(30,0,80,0.3)" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>

                {/* Message */}
                <textarea
                  placeholder="Any specific questions? (Optional)"
                  rows={3}
                  className="form-input w-full rounded-xl px-5 py-4 text-[15px] font-light focus:outline-none transition-all resize-none"
                  style={{
                    background: "rgba(123,47,255,0.03)",
                    border: "1px solid rgba(123,47,255,0.15)",
                    color: "#1a0050",
                  }}
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="submit-btn w-full flex items-center justify-center gap-2.5 text-white py-4 rounded-full font-light text-[13px] uppercase tracking-widest group mt-2"
                  style={{
                    background: ACCENT,
                    boxShadow: "0 10px 30px rgba(123,47,255,0.25)",
                    transform: "translateZ(0)",
                  }}
                >
                  Submit Application Request
                  <span className="btn-arrow text-base leading-none font-thin">→</span>
                </button>

                <p className="text-center text-[11px] font-thin flex items-center justify-center gap-1.5 pt-1" style={{ color: "rgba(30,0,80,0.35)" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Your information is secure and will never be shared.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links — mobile/tablet only (renders after the form) */}
          <div className="lg:hidden w-full">
            <SocialLinks />
          </div>

        </motion.div>
      </div>

      {/* ── CSS: Zero JS style mutations ── */}
      <style>{`
        /* Contact tiles */
        .contact-tile {
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .contact-tile:hover {
          transform: translateY(-3px);
        }

        /* Social icons */
        .social-icon:hover {
          background: rgba(123,47,255,0.12) !important;
          border-color: rgba(123,47,255,0.4) !important;
          color: #7b2fff !important;
          transform: translateY(-2px);
        }
        .social-icon {
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }

        /* Form inputs */
        .form-input::placeholder {
          color: rgba(30,0,80,0.3);
        }
        .form-input:focus {
          background: rgba(123,47,255,0.05) !important;
          border-color: rgba(123,47,255,0.4) !important;
        }

        /* Submit button */
        .submit-btn {
          transition: box-shadow 0.3s ease, transform 0.2s ease;
          will-change: transform;
        }
        .submit-btn:hover {
          box-shadow: 0 15px 40px rgba(123,47,255,0.4) !important;
          transform: scale(1.02) !important;
        }
        .submit-btn:active {
          transform: scale(0.98) !important;
        }
        .btn-arrow {
          transition: transform 0.3s ease;
        }
        .submit-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .contact-tile, .contact-tile:hover,
          .social-icon, .social-icon:hover,
          .submit-btn, .submit-btn:hover, .submit-btn:active,
          .btn-arrow {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}