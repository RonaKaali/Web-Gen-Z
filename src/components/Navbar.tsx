"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Hubungi Kami", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary-dark/95 backdrop-blur-xl shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
          >
            <Image
              src="/logo.png"
              alt="WEBSITE GEN Z"
              width={2160}
              height={720}
              className="h-32 md:h-40 w-auto group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://wa.me/6288234448888"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm !py-2.5"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary-dark/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-white font-medium py-2 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/6288234448888"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="btn-primary justify-center mt-2"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
