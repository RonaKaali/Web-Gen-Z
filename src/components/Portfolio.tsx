"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Global CCTV",
    desc: "Company profile dan platform pemasangan CCTV dengan manajemen produk, testimonial, dan portfolio terintegrasi.",
    tags: ["Laravel", "Blade", "Tailwind", "MySQL"],
    image: "/GLOBAL CCTV.png",
    url: "https://globalcctv.web.id",
  },
  {
    title: "OS TIKET TA",
    desc: "Sistem pengaduan insiden siber dengan fitur tiket terintegrasi untuk pelaporan dan penanganan keamanan digital.",
    tags: ["Laravel", "Blade", "Tailwind", "MySQL"],
    image: "/SIGAP SIBER OS TIKET.png",
    url: "https://pengaduaninsidensiber.vercel.app",
  },
  {
    title: "FLEET TRACKER",
    desc: "Sistem tracking lokasi armada berbasis Python untuk monitoring kendaraan secara real-time.",
    tags: ["Python", "Flask", "Leaflet", "Vercel"],
    image: "/FLEET TRACKER.png",
    url: "https://fleet-tracker-eight.vercel.app",
  },
  {
    title: "Go Chinese V1",
    desc: "Aplikasi pembelajaran bahasa Mandarin modern dengan pendekatan interaktif dan visual yang engaging.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/GO CHINESE.png",
    url: "https://go-chinese-v1.vercel.app",
  },
  {
    title: "TradePro Assistant",
    desc: "Trading dashboard modern dengan analisa pasar, manajemen resiko, kalkulasi posisi, dan tracking market real-time.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Dark Mode"],
    image: "/ASSISTANT TRADING.png",
    url: "https://trading-asisstant-trade-pro-assista.vercel.app",
  },
  {
    title: "Daily Target",
    desc: "Aplikasi kalender & daily planner gamified untuk boost produktivitas. Tracking goals harian, habits, dan progress secara interaktif.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    image: "/DAILY TARGET.png",
    url: "https://daily-target-five.vercel.app",
  },
  {
    title: "BPKH-V Banjarbaru",
    desc: "Sistem informasi Balai Pemantapan Kawasan Hutan Kementerian Kehutanan dengan fitur admin, janji temu, dan berita.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    image: "/BPKH.png",
    url: "https://bpkh-v-banjarbaru.vercel.app",
  },
  {
    title: "SPACE PLAYSTATION",
    desc: "Sistem pemesanan tempat dan makanan di rental PlayStation dengan fitur admin dan notifikasi suara otomatis.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    image: "/SPACE PLAYSTATION.png",
    url: "https://space-playstation.vercel.app",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-navy">
            Portfolio <span className="gradient-text">Kami</span>
          </h2>
          <p className="section-subtitle">
            Project-project yang udah kami bangun dan deploy. Dari sistem informasi pemerintah, e-commerce, dashboard trading, sampai aplikasi pembelajaran.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5
                         hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex items-center justify-center">
                  <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold
                                   hover:bg-white/30 transition-colors flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Kunjungi
                    </span>
                  </div>
                </div>
                {/* Gradient overlay at bottom for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-navy text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/RonaKaali"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border-2 border-navy/10 text-navy font-semibold
                         hover:bg-navy hover:text-white hover:border-navy transition-all duration-300
                         flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Lihat Semua Project di GitHub
            </a>
            <a
              href="https://wa.me/6288234448888"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base !px-8 !py-4"
            >
              Mau Bikin Project Juga? Chat Kami!
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
