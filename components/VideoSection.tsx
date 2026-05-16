"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // ── Spring-smooth the raw scroll value ──────────────────────────────────
  // Raw scrollYProgress fires every pixel → can drop frames when driving
  // 3D transforms. A spring with low stiffness acts as a low-pass filter:
  // it smooths out high-frequency scroll jitter that causes the hang.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  const rotateX = useTransform(
    smoothProgress,
    [0, 0.45],
    shouldReduceMotion ? [0, 0] : [10, 0]
  );
  const scale = useTransform(
    smoothProgress,
    [0, 0.4],
    shouldReduceMotion ? [1, 1] : [0.84, 1]
  );
  const y = useTransform(
    smoothProgress,
    [0, 0.45],
    shouldReduceMotion ? [0, 0] : [60, 0]
  );

  return (
    <section
      ref={containerRef}
      className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-6 py-20"
      style={shouldReduceMotion ? undefined : { perspective: "1200px" }}
    >
      <motion.div
        style={{ rotateX, scale, y, willChange: "transform" }}
        className="video-shell relative w-full aspect-[16/9] md:aspect-[2.4/1] rounded-2xl md:rounded-[40px] overflow-hidden border border-white/10 cursor-pointer"
      >
        {/* Solid bg fallback — replaces backdrop-blur which kills perf
            when combined with 3D transforms on low-end GPUs */}
        <div className="absolute inset-0 bg-[#02040a]" />

        {/* preload="none" — don't race page render for bandwidth */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          src=""
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* Static overlays — painted once, never touched again */}
        <div aria-hidden className="absolute top-0 inset-x-0 h-px z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)" }} />

        <div aria-hidden className="absolute bottom-0 inset-x-0 h-px z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(0,102,255,0.38), transparent)" }} />

        <div aria-hidden className="absolute inset-0 pointer-events-none z-10"
          style={{ background: "radial-gradient(ellipse at center, rgba(0,102,255,0.07), transparent 70%)" }} />

        <div aria-hidden className="absolute inset-0 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, rgba(2,4,10,0.78), transparent 55%)" }} />
      </motion.div>

      <style>{`
        .video-shell {
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.75);
          transition: box-shadow 0.5s ease;
        }
        .video-shell:hover {
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.75),
                      0 0 60px -10px rgba(0,102,255,0.12);
        }
        @media (prefers-reduced-motion: reduce) {
          .video-shell { transition: none; }
        }
      `}</style>
    </section>
  );
}