"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const ACCENT = "#7b2fff";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "About the Programme", href: "#about" },
    { name: "Highlights", href: "#highlights" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50 transition-all duration-500 py-4"
        style={{
          background: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(123,47,255,0.14)"
            : "1px solid rgba(123,47,255,0.08)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(123,47,255,0.1)"
            : "0 2px 12px rgba(123,47,255,0.05)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <div className="relative z-50">
            <Image
              src="/Screenshot 2026-05-16 at 3.53.08 PM.png"
              alt="Logo"
              width={80}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-[11px] uppercase tracking-widest font-light"
            style={{ color: "rgba(30,0,80,0.5)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors duration-300"
                style={{ color: "rgba(30,0,80,0.5)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = ACCENT}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(30,0,80,0.5)"}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="/application"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-white text-[11px] font-light uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 group"
              style={{
                background: ACCENT,
                boxShadow: "0 10px 30px rgba(123,47,255,0.25)",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(123,47,255,0.4)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(123,47,255,0.25)"}
            >
              Apply Now
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 -mr-2 transition-colors focus:outline-none"
            style={{ color: "rgba(30,0,80,0.5)" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = ACCENT}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(30,0,80,0.5)"}
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
            className="fixed inset-0 z-40 flex flex-col pt-28 px-6 pb-10 overflow-y-auto lg:hidden"
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
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
                  className="text-3xl sm:text-4xl font-thin tracking-tight pb-4 transition-colors duration-300"
                  style={{
                    color: "rgba(30,0,80,0.6)",
                    borderBottom: "1px solid rgba(123,47,255,0.1)",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = ACCENT}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(30,0,80,0.6)"}
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
              <motion.a
                href="/application"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.98 }}
                className="w-full text-white text-[12px] font-light uppercase tracking-widest px-6 py-4 rounded-full flex justify-center items-center gap-3 transition-all"
                style={{
                  background: ACCENT,
                  boxShadow: "0 10px 30px rgba(123,47,255,0.25)",
                }}
              >
                Start Application
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}