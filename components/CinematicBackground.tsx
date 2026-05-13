"use client";
import { motion } from "framer-motion";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">
      <motion.div 
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 w-full h-[80vh] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,100,233,0.2),transparent)]" 
      />

      <div 
        className="absolute top-[-20%] w-[150vw] h-[120vh] opacity-50"
        style={{
          background: `conic-gradient(from 180deg at 50% 10%, 
            transparent 0deg, rgba(30, 144, 255, 0.08) 30deg, rgba(14, 165, 233, 0.25) 60deg, 
            rgba(30, 144, 255, 0.03) 90deg, transparent 120deg, rgba(14, 165, 233, 0.15) 150deg, 
            rgba(30, 144, 255, 0.08) 180deg, rgba(14, 165, 233, 0.15) 210deg, transparent 240deg, 
            rgba(30, 144, 255, 0.03) 270deg, rgba(14, 165, 233, 0.25) 300deg, rgba(30, 144, 255, 0.08) 330deg, 
            transparent 360deg)`,
          maskImage: 'radial-gradient(circle at 50% 10%, black 10%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 10%, black 10%, transparent 60%)',
        }}
      />
      
      <div className="absolute inset-0 backdrop-blur-[60px]" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }} />
      <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-gradient-to-t from-[#02040a] to-transparent" />
    </div>
  );
}