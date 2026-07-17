"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Prevent scroll during splash
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary-dark"
        >
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse [animation-delay:1s]" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center text-center px-6"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0 }}
              className="mb-6"
            >
              <Image
                src="/logo.png"
                alt="WEBSITE GEN Z"
                width={1920}
                height={636}
                className="h-52 md:h-64 w-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Animated line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 100, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="h-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mb-6"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-white/60 text-lg md:text-xl font-light tracking-[0.2em] uppercase"
            >
              Built By Gen Z, For Everyone
            </motion.p>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="flex gap-1.5 mt-8"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 rounded-full bg-accent"
                />
              ))}
            </motion.div>
        </motion.div>

          {/* Splash Mascot 2 - Right side */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none overflow-hidden flex items-center justify-end">
            <img
              src="/MASKOT 2.png"
              alt=""
              className="h-full w-auto object-contain opacity-70"
              draggable={false}
            />
          </div>

          {/* Splash Mascot 4 - Left side */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none overflow-hidden flex items-center justify-start">
            <img
              src="/MASKOT 4.png"
              alt=""
              className="h-full w-auto object-contain opacity-70"
              draggable={false}
            />
          </div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/10 rounded-tl-2xl" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/10 rounded-tr-2xl" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/10 rounded-bl-2xl" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/10 rounded-br-2xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
