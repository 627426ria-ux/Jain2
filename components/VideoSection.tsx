"use client";
import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();

  // Track whether the section has entered the viewport at all
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const container = containerRef.current;
    const shell = shellRef.current;
    if (!container || !shell) return;

    // ── IntersectionObserver: only run scroll logic while visible ──────
    // This is the biggest win — zero scroll work when off-screen
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          startScroll();
        } else {
          stopScroll();
        }
      },
      { threshold: 0 }
    );
    io.observe(container);

    // ── Passive scroll handler via rAF throttle ────────────────────────
    // One rAF per scroll event max — never queues multiple frames
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(update);
        ticking = true;
      }
    }

    function update() {
      ticking = false;
      const rect = container!.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress: 0 when top of section at bottom of screen → 1 when bottom at top
      const progress = Math.min(
        1,
        Math.max(0, 1 - rect.bottom / (vh + rect.height))
      );

      // Only drive ONE transform — translateY
      // scale is handled by CSS class added once on entry (no per-frame work)
      const yPx = Math.round((1 - Math.min(progress / 0.45, 1)) * 55);

      // Direct style mutation — bypasses React entirely, zero re-renders
      shell!.style.transform = `translateY(${yPx}px)`;
    }

    function startScroll() {
      window.addEventListener("scroll", onScroll, { passive: true });
      update(); // run once immediately
    }

    function stopScroll() {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
      ticking = false;
    }

    return () => {
      io.disconnect();
      stopScroll();
    };
  }, [shouldReduceMotion]);

  return (
    <section
      ref={containerRef}
      className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-6 py-20"
    >
      {/*
        Shell:
        - NO rotateX (kills low-end GPUs combined with video decode)
        - NO backdrop-blur (same reason)
        - NO framer motion style prop (no MotionValue subscriptions)
        - Scale done via CSS class on entry — fires once, not per-frame
        - willChange declared upfront so browser pre-promotes to own layer
        - transform set directly via ref in scroll handler
      */}
      <div
        ref={shellRef}
        className={`
          video-shell
          relative w-full aspect-[16/9] md:aspect-[2.4/1]
          rounded-2xl md:rounded-[40px] overflow-hidden
          border border-white/10 cursor-pointer
          ${entered ? "video-entered" : "video-pre"}
        `}
        style={{ willChange: "transform" }}
      >
        {/* Solid bg — video takes a moment to decode on slow devices */}
        <div className="absolute inset-0 bg-[#02040a]" />

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          src="/6145693-uhd_3840_2160_24fps.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* Static overlays — painted once, never invalidated */}
        <div aria-hidden className="vid-overlay-top absolute top-0 inset-x-0 h-px z-10 pointer-events-none" />
        <div aria-hidden className="vid-overlay-bottom absolute bottom-0 inset-x-0 h-px z-10 pointer-events-none" />
        <div aria-hidden className="vid-overlay-glow absolute inset-0 pointer-events-none z-10" />
        <div aria-hidden className="vid-overlay-grad absolute inset-0 pointer-events-none z-10" />
      </div>

      <style>{`
        /* Pre-entry state */
        .video-pre {
          opacity: 0;
          transform: translateY(55px) scale(0.84);
        }

        /* Entry: scale snaps via CSS transition (runs once, off main thread) */
        .video-entered {
          opacity: 1;
          /* Scale transition fires once when class is added.
             translateY is then overwritten by the scroll handler each frame.
             Using two separate CSS props so they don't interfere. */
          transition: opacity 0.6s ease, scale 0.7s cubic-bezier(0.16,1,0.3,1);
          scale: 1;
        }

        .video-shell {
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.75);
          transition: box-shadow 0.5s ease;
        }
        .video-shell:hover {
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.75),
                      0 0 60px -10px rgba(0,102,255,0.12);
        }

        /* Static overlay styles — defined in CSS, never repainted */
        .vid-overlay-top {
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent);
        }
        .vid-overlay-bottom {
          background: linear-gradient(to right, transparent, rgba(0,102,255,0.38), transparent);
        }
        .vid-overlay-glow {
          background: radial-gradient(ellipse at center, rgba(0,102,255,0.07), transparent 70%);
        }
        .vid-overlay-grad {
          background: linear-gradient(to top, rgba(2,4,10,0.78), transparent 55%);
        }

        @media (prefers-reduced-motion: reduce) {
          .video-pre { opacity: 1; transform: none; }
          .video-entered { transition: none; scale: 1; }
          .video-shell { transition: none; }
        }
      `}</style>
    </section>
  );
}