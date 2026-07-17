"use client";

import { motion } from "framer-motion";
import { MessageCircle, Globe, Send, ArrowUp } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Layanan", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Hubungi Kami", href: "#contact" },
];

const socials = [
  { icon: MessageCircle, href: "https://wa.me/6288234448888", label: "WhatsApp" },
  { icon: Globe, href: "https://instagram.com/websitegenz_id", label: "Instagram" },
  { icon: Send, href: "https://t.me/websitegenz", label: "Telegram" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-primary-dark border-t border-white/5">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent text-navy
                   flex items-center justify-center shadow-lg shadow-accent/20 hover:shadow-accent/40
                   hover:scale-110 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="WEBSITE GEN Z"
                width={1920}
                height={636}
                className="h-32 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Built By Gen Z, For Everyone. Kami hadir buat bantu UMKM dan usaha
              kecil go digital dengan website keren harga merakyat.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center
                             text-white/60 hover:bg-accent hover:text-navy hover:border-accent
                             transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-white mb-4">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a
                  href="https://wa.me/6288234448888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  +62 882-3444-8888
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/websitegenz_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  @websitegenz_id
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/websitegenz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  @websitegenz
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-white/40 text-sm">
            &copy; 2026 <span className="text-white/60 font-medium">WEBSITE GEN Z</span>. Built By Gen Z, For Everyone.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
