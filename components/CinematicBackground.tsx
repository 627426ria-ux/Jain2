"use client";
import { motion } from "framer-motion";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex justify-center overflow-hidden bg-white">
      
      <motion.div 
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 w-full h-[90vh] bg-[radial-gradient(ellipse_100%_100%_at_50%_-10%,rgba(91,31,209,0.45),transparent_70%)]" 
      />

      <div 
        className="absolute top-[-20%] w-[150vw] h-[120vh] opacity-90"
        style={{
          background: `conic-gradient(from 180deg at 50% 10%, 
            transparent 0deg, rgba(91, 31, 209, 0.2) 30deg, rgba(91, 31, 209, 0.5) 60deg, 
            rgba(91, 31, 209, 0.15) 90deg, transparent 120deg, rgba(91, 31, 209, 0.35) 150deg, 
            rgba(91, 31, 209, 0.25) 180deg, rgba(91, 31, 209, 0.35) 210deg, transparent 240deg, 
            rgba(91, 31, 209, 0.15) 270deg, rgba(91, 31, 209, 0.5) 300deg, rgba(91, 31, 209, 0.2) 330deg, 
            transparent 360deg)`,
          maskImage: 'radial-gradient(circle at 50% 10%, black 20%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 10%, black 20%, transparent 85%)',
        }}
      />
      
      <div className="absolute inset-0 backdrop-blur-[40px]" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 80%)' }} />
      
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-white via-white/80 to-transparent" />
      
    </div>
  );
}