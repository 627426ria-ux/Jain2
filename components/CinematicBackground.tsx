"use client";
import { motion } from "framer-motion";

export default function CinematicBackground() {
  return (
    // Base: deep indigo-purple matching the screenshot's dark bottom-left
    <div className="fixed inset-0 z-0 pointer-events-none flex justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1e0b4b 0%, #3d1199 40%, #7b2fff 75%, #c084fc 100%)" }}
    >

      {/* Top-right magenta bloom — matches the bright violet flare in the screenshot */}
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[80vw] h-[90vh]"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 85% -5%, rgba(180,50,255,0.75), transparent 65%)",
        }}
      />

      {/* Center ambient glow — the soft violet core */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-0 w-full h-[90vh]"
        style={{
          background: "radial-gradient(ellipse 100% 90% at 50% -10%, rgba(107,45,224,0.5), transparent 70%)",
        }}
      />

      {/* Conic light rays — same structure as original, purple/magenta palette */}
      <div
        className="absolute top-[-20%] w-[150vw] h-[120vh] opacity-90"
        style={{
          background: `conic-gradient(from 180deg at 50% 10%,
            transparent 0deg, rgba(176, 38, 255, 0.2) 30deg, rgba(107, 45, 224, 0.5) 60deg,
            rgba(107, 45, 224, 0.15) 90deg, transparent 120deg, rgba(176, 38, 255, 0.35) 150deg,
            rgba(107, 45, 224, 0.25) 180deg, rgba(176, 38, 255, 0.35) 210deg, transparent 240deg,
            rgba(107, 45, 224, 0.15) 270deg, rgba(107, 45, 224, 0.5) 300deg, rgba(176, 38, 255, 0.2) 330deg,
            transparent 360deg)`,
          maskImage: 'radial-gradient(circle at 50% 10%, black 20%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 10%, black 20%, transparent 85%)',
        }}
      />

      {/* Blur diffusion — unchanged */}
      <div className="absolute inset-0 backdrop-blur-[40px]" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 80%)' }} />

      {/* Bottom fade — into deep indigo matching the screenshot's dark lower edge */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[#1e0b4b] via-[#1e0b4b]/80 to-transparent" />

    </div>
  );
}