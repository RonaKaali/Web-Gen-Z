"use client";

import { motion } from "framer-motion";
import { Sparkles, BadgeCheck, Zap, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Dibuat Anak Muda Kreatif",
    desc: "Tim kami berisi anak muda yang paham tren digital terbaru dan desain kekinian.",
  },
  {
    icon: BadgeCheck,
    title: "Harga Bersahabat",
    desc: "Mulai dari 300K aja! Cocok buat UMKM dan usaha kecil yang baru mulai go digital.",
  },
  {
    icon: Zap,
    title: "Proses Cepat",
    desc: "Website jadi dalam hitungan hari, bukan bulan. Dijamin cepat tanpa ngurangi kualitas.",
  },
  {
    icon: HeartHandshake,
    title: "Support Penuh",
    desc: "Dari konsultasi sampe after-launch, kita bantuin terus. Ga bakal ditinggal begitu aja.",
  },
];

const stats = [
  { number: "10+", label: "Project Selesai" },
  { number: "100%", label: "Client Puas" },
  { number: "3 Hari", label: "Rata-rata Pengerjaan" },
  { number: "24/7", label: "Support" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-navy">
            Kenapa <span className="gradient-text">Website Gen Z</span>?
          </h2>
          <p className="section-subtitle">
            Kami ngerti banget gimana rasanya punya usaha tapi bingung mulai
            promosi online. Makanya kami hadir dengan solusi yang pas buat kamu.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-black/5
                         hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300
                         border border-primary/5"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5
                            group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-navy text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl py-6 md:py-8 px-4
                         border border-primary/5 shadow-lg shadow-black/5"
            >
              <div className="text-3xl md:text-4xl font-heading font-extrabold gradient-text mb-1">
                {stat.number}
              </div>
              <div className="text-muted text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
