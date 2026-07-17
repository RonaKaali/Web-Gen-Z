"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 } as const,
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } } as const,
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-primary" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-white/5"
        />
        {/* Floating orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-4 h-4 md:w-6 md:h-6 rounded-full bg-accent/30 blur-xl"
        />
        <motion.div
          animate={{ y: [20, -30, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[15%] w-6 h-6 md:w-8 md:h-8 rounded-full bg-amber-300/20 blur-xl"
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom relative z-10 text-center pt-20"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-accent text-xs md:text-sm font-semibold tracking-wider uppercase">
            Built By Gen Z, For Everyone
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight"
        >
          WEBSITE
          <br />
          <span className="gradient-text">GEN Z</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Kami hadir sebagai jembatan digital untuk UMKM, cafe, dan usaha kecil
          yang ingin go digital. Biar kamu fokus bisnis, urusan website biar
          kami.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/6288234448888"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base !px-8 !py-4 group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Hubungi Kami
          </a>
          <a href="#portfolio" className="btn-outline text-base !px-8 !py-4">
            Lihat Portfolio
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>

      {/* Hero Mascots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Maskot 3 - Desktop only (Left) */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-72 xl:w-96 2xl:w-[32rem]">
          <img src="/MASKOT 3.png" alt="" className="w-full h-auto object-contain opacity-80" draggable={false} />
        </div>
        {/* Maskot 2 - Mobile (bottom right) + Desktop (right side) */}
        <div className="absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 right-0 bottom-0 w-28 sm:w-32 lg:w-72 xl:w-96 2xl:w-[32rem]">
          <img src="/MASKOT 2.png" alt="" className="w-full h-auto object-contain opacity-80" draggable={false} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
