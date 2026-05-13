"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Starts when top of section hits bottom of screen
  });

  // 1. Perspective/Tilt: Makes it feel like it's being "dragged" from a 3D space
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  
  // 2. Scaling: Grows as it enters the viewport
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  
  // 3. Vertical Offset: The "Drag" speed (Parallax)
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-6 py-20"
      style={{ perspective: "1000px" }} // Required for the 3D tilt
    >
      <motion.div
        style={{
          rotateX,
          scale,
          y,
        }}
        className="relative w-full aspect-[16/9] md:aspect-[2.4/1] rounded-2xl md:rounded-[40px] overflow-hidden bg-[#02040a]/80 backdrop-blur-xl border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] group cursor-pointer transition-shadow duration-500 hover:shadow-[#0066ff]/10"
      >
        {/* ========================================== */}
        {/* 🎬 YOUR VIDEO GOES HERE                    */}
        {/* ========================================== */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          // Change the src below to your video file path
          src="/6145693-uhd_3840_2160_24fps.mp4" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* --- THEMATIC ACCENTS --- */}
        {/* Top Edge Glow */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
        
        {/* Bottom Edge Glow (Updated to your Electric Blue #0066ff) */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent z-10" />
        
        {/* Deep Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.08),transparent_70%)] pointer-events-none z-10" />

        {/* --- PLAY BUTTON --- */}
        

        {/* Subtle Video Overlay Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/80 via-transparent to-transparent pointer-events-none z-10" />
      </motion.div>
    </section>
  );
}