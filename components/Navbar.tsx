"use client";
import { motion } from "framer-motion";
import { Menu, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent"
      }`}
    >
      <div className="text-white font-semibold text-[18px] tracking-tight whitespace-nowrap">
        JAIN <span className="text-white/50 font-light">School of Future Technology</span>
      </div>

      <div className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-widest font-medium text-white/70">
        <a href="#about" className="hover:text-white transition-colors duration-300">About the Programme</a>
        <a href="#highlights" className="hover:text-white transition-colors duration-300">Highlights</a>
        <a href="#curriculum" className="hover:text-white transition-colors duration-300">Curriculum</a>
        <a href="#faq" className="hover:text-white transition-colors duration-300">FAQ</a>
        <a href="#contact" className="hover:text-white transition-colors duration-300">Contact us</a>
      </div>

      <div className="hidden md:flex items-center">
        <a href="/application" className="bg-white text-[#02040a] text-[12px] font-semibold uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/90 transition-colors duration-300 group">
          Apply Now
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
        </a>
      </div>

      <Menu className="md:hidden cursor-pointer w-5 h-5 text-white hover:opacity-50 transition" />
    </motion.nav>
  );
}