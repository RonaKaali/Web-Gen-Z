"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, BookOpen, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Pembuatan Website",
    desc: "Landing page, company profile, toko online, blog — semua bisa! Design modern, mobile friendly, dan siap pakai.",
    price: "Mulai 350K",
    features: ["Responsive Design", "SEO Optimized", "Custom Domain", "Free Hosting 1 Tahun"],
  },
  {
    icon: Smartphone,
    title: "Pembuatan Aplikasi",
    desc: "Web app, sistem informasi, dashboard custom, aplikasi kasir — dibangun dengan teknologi terkini.",
    price: "Mulai 500K",
    features: ["Full Stack Development", "Database Integration", "User Authentication", "API Development"],
    popular: true,
  },
  {
    icon: BookOpen,
    title: "Joki Tugas Programming",
    desc: "Bantuan tugas, TA, skripsi, laporan programming. Cepat, rapih, dan bebas plagiat.",
    price: "Mulai 100K",
    features: ["Berbagai Bahasa", "Laporan Siap Pakai", "Revisi Sampai ACC", "Bebas Plagiat"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-primary-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-light rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-semibold tracking-wider uppercase mb-4">
            Layanan Kami
          </span>
          <h2 className="section-title text-white">
            Apa Yang Kami <span className="gradient-text">Tawarkan</span>?
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Dari website sampai joki tugas, semua dikerjakan dengan penuh dedikasi
            dan hasil yang memuaskan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative group rounded-2xl p-6 md:p-8 transition-all duration-500
                ${service.popular
                  ? "bg-gradient-to-b from-accent/10 to-accent/5 border-2 border-accent/30 shadow-xl shadow-accent/10"
                  : "bg-white/5 border border-white/10 hover:border-white/20"
                }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-navy text-xs font-bold uppercase tracking-wider">
                  Paling Laris
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6
                ${service.popular ? "bg-accent text-navy" : "bg-gradient-primary text-white"}
                group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-white text-xl mb-3">{service.title}</h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">{service.desc}</p>

              <div className="text-2xl font-heading font-bold text-accent mb-6">
                {service.price}
                <span className="text-white/40 text-sm font-normal"> /project</span>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${service.popular ? "bg-accent" : "bg-primary-light"}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/6288234448888"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group/link
                  ${service.popular ? "text-accent hover:text-amber-400" : "text-white/80 hover:text-white"}`}
              >
                Pesan Sekarang
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Mascots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Maskot 1 - Desktop only (Left) */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-72 xl:w-96 2xl:w-[32rem]">
          <img src="/MASKOT 1.png" alt="" className="w-full h-auto object-contain opacity-40" draggable={false} />
        </div>
        {/* Maskot 4 - Mobile (bottom right) + Desktop (right side) */}
        <div className="absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 right-0 bottom-0 w-28 sm:w-32 lg:w-72 xl:w-96 2xl:w-[32rem]">
          <img src="/MASKOT 4.png" alt="" className="w-full h-auto object-contain opacity-40" draggable={false} />
        </div>
      </div>
    </section>
  );
}
