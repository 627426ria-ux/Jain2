"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // All transforms compositor-only (rotateX, scale, translateY)
  // Clamp ranges tightly so values settle fast — avoids long lerp tails on slow devices
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.45],
    shouldReduceMotion ? [0, 0] : [12, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.38],
    shouldReduceMotion ? [1, 1] : [0.82, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.45],
    shouldReduceMotion ? [0, 0] : [80, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-6 py-20"
      // perspective only needed when rotateX is active
      style={shouldReduceMotion ? undefined : { perspective: "1200px" }}
    >
      <motion.div
        style={{ rotateX, scale, y, willChange: "transform" }}
        className="video-shell relative w-full aspect-[16/9] md:aspect-[2.4/1] rounded-2xl md:rounded-[40px] overflow-hidden bg-[#02040a]/80 backdrop-blur-xl border border-white/10 cursor-pointer"
      >
        {/* ── Video ──────────────────────────────────────────────────── */}
        <video
          autoPlay
          loop
          muted
          playsInline
          // preload="none" — defer until browser decides, saves bandwidth on low-end
          preload="none"
          src="/6145693-uhd_3840_2160_24fps.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* ── Thematic accents — static, no JS ───────────────────────── */}
        {/* Top edge */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-px z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)",
          }}
        />

        {/* Bottom edge */}
        <div
          aria-hidden
          className="absolute bottom-0 inset-x-0 h-px z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(0,102,255,0.38), transparent)",
          }}
        />

        {/* Ambient glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,102,255,0.07), transparent 70%)",
          }}
        />

        {/* Bottom gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(2,4,10,0.78), transparent 55%)",
          }}
        />
      </motion.div>

      <style>{`
        /* Shadow on hover via CSS — no JS, no whileHover re-renders */
        .video-shell {
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.75);
          transition: box-shadow 0.5s ease;
        }
        .video-shell:hover {
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.75),
                      0 0 60px -10px rgba(0,102,255,0.12);
        }

        @media (prefers-reduced-motion: reduce) {
          .video-shell {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}