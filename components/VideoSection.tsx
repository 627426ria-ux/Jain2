"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // ── Mobile autoplay fix ───────────────────────────────────────────────
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Imperatively set these — some mobile browsers ignore HTML attributes
    v.muted = true;
    v.loop = true;
    v.playsInline = true;

    const play = () => v.play().catch(() => {});

    if (v.readyState >= 3) {
      play();
    } else {
      v.addEventListener("canplaythrough", play, { once: true });
    }

    // Kick off loading
    v.load();

    // Last resort: play on first touch
    const onTouch = () => { play(); };
    window.addEventListener("touchstart", onTouch, { once: true });

    return () => {
      v.removeEventListener("canplaythrough", play);
      window.removeEventListener("touchstart", onTouch);
    };
  }, []);

  // ── Scroll animation ──────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 18,
    restDelta: 0.001,
  });

  const scale   = useTransform(smooth, [0, 0.45], shouldReduceMotion ? [1, 1] : [0.88, 1]);
  const y       = useTransform(smooth, [0, 0.45], shouldReduceMotion ? [0, 0] : [50, 0]);
  const opacity = useTransform(smooth, [0, 0.25], shouldReduceMotion ? [1, 1] : [0.4, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full py-16 md:py-24 overflow-hidden"
    >
      {/* ── Ambient glow behind video ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(123,47,255,0.10), transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">

        {/* ── Label ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-8 md:mb-12"
        >
          <div className="w-8 h-px bg-[#7b2fff]" />
          <span className="text-[11px] font-light tracking-[0.22em] uppercase text-[#7b2fff]">
            Campus Life
          </span>
          <div className="w-8 h-px bg-[#7b2fff]" />
        </motion.div>

        {/* ── Video card ── */}
        <motion.div
          style={{ scale, y, opacity }}
          className="video-card relative w-full rounded-2xl md:rounded-[32px] overflow-hidden"
        >
          {/* Aspect ratio wrapper */}
          <div className="relative w-full aspect-video md:aspect-[2.35/1]">

            {/* Black base so nothing flashes white */}
            <div className="absolute inset-0 bg-black" />

            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              src="/jain-video.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.88 }}
            />

            {/* Top edge highlight */}
            <div
              aria-hidden
              className="absolute top-0 inset-x-0 h-px z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.22), transparent)",
              }}
            />

            {/* Bottom fade to page bg */}
            <div
              aria-hidden
              className="absolute bottom-0 inset-x-0 h-1/3 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(248,245,255,0.55), transparent)",
              }}
            />

            {/* Subtle vignette */}
            <div
              aria-hidden
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 55%, rgba(10,0,30,0.35) 100%)",
              }}
            />

            {/* Purple tint overlay */}
            <div
              aria-hidden
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ background: "rgba(123,47,255,0.04)" }}
            />
          </div>
        </motion.div>

      </div>

      <style>{`
        .video-card {
          box-shadow:
            0 0 0 1px rgba(123,47,255,0.14),
            0 30px 80px -10px rgba(0,0,0,0.45),
            0 0 60px -10px rgba(123,47,255,0.12);
          transition: box-shadow 0.5s ease;
        }
        .video-card:hover {
          box-shadow:
            0 0 0 1px rgba(123,47,255,0.25),
            0 30px 80px -10px rgba(0,0,0,0.55),
            0 0 80px -5px rgba(123,47,255,0.18);
        }
        @media (prefers-reduced-motion: reduce) {
          .video-card { transition: none; }
        }
      `}</style>
    </section>
  );
}