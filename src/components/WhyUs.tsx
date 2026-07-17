"use client";

import { motion } from "framer-motion";
import { Rocket, Coins, Timer, Users } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Teknologi Modern",
    desc: "Kami pakai framework dan tools terbaru biar website kamu cepat, aman, dan bisa diakses dari mana aja.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Coins,
    title: "Harga Merakyat",
    desc: "Mau budget kecil? Tenang aja. Kami punya paket yang pas di kantong tanpa ngurangi kualitas.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Timer,
    title: "Cepat & Tepat",
    desc: "Proses cepat tanpa ribet. Kita transparan dari awal sampe project selesai. No drama!",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Bimbingan Penuh",
    desc: "Ga ngerti teknis? Santai aja. Kita bimbing dari nol sampe website kamu online dan jalan.",
    color: "from-purple-500 to-pink-500",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-primary-dark relative overflow-hidden">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-semibold tracking-wider uppercase mb-4">
            Kenapa Pilih Kami
          </span>
          <h2 className="section-title text-white">
            Kenapa Harus <span className="gradient-text">Kami</span>?
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Banyak yang nawarin jasa bikin website, tapi kenapa harus pilih Gen Z?
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10
                         hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${reason.color} 
                                flex items-center justify-center flex-shrink-0
                                group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{reason.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
