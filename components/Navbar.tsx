"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react"; // Make sure to add 'X' to your imports

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll detection for background blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup on unmount
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "About the Programme", href: "#about" },
    { name: "Highlights", href: "#highlights" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo (Responsive text hiding for small screens) */}
          <div className="text-[#02040a] font-bold text-[16px] md:text-[18px] tracking-tight whitespace-nowrap relative z-50">
            JAIN 
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-[12px] uppercase tracking-widest font-bold text-[#02040a]/60">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-[#0066ff] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a 
              href="/application" 
              className="bg-[#0066ff] text-white text-[12px] font-bold uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#0052cc] shadow-[0_4px_15px_rgba(0,102,255,0.2)] hover:shadow-[0_8px_25px_rgba(0,102,255,0.4)] transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Apply Now
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden relative z-50 p-2 -mr-2 text-[#02040a] hover:text-[#0066ff] transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col pt-28 px-6 pb-10 overflow-y-auto lg:hidden"
          >
            {/* Mobile Links */}
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-[#02040a] text-3xl sm:text-4xl font-light tracking-tight border-b border-gray-100 pb-4 hover:text-[#0066ff] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-10"
            >
              <a 
                href="/application" 
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#0066ff] text-white text-[13px] font-bold uppercase tracking-widest px-6 py-4.5 rounded-full flex justify-center items-center gap-3 shadow-[0_10px_30px_rgba(0,102,255,0.3)] transition-all"
              >
                Start Application
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}