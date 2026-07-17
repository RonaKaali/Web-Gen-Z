"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Hendra Gunawan",
    role: "Owner — Global CCTV",
    avatar: "HG",
    color: "from-blue-400 to-cyan-500",
    text: "Company profile kita jadi keliatan lebih profesional. Banyak klien baru yang nemu lewat website jasa CCTV kami. Supportnya juga oke, mau bantuin sampe detail-detail kecil.",
    rating: 5,
  },
  {
    name: "M. Faisal Rahman",
    role: "Kepala Divisi — BPKH V Banjarbaru",
    avatar: "FR",
    color: "from-emerald-400 to-teal-500",
    text: "Sistem informasi yang dibangun sangat membantu masyarakat dalam membuat janji temu dan mengakses informasi kehutanan. Adminnya juga mudah dipake, cocok buat instansi pemerintah.",
    rating: 5,
  },
  {
    name: "Rendi Saputra",
    role: "Owner — SPACE PLAYSTATION",
    avatar: "RS",
    color: "from-purple-400 to-pink-500",
    text: "Sekarang customer bisa pesen tempat dan makanan lewat website, antrian jadi lebih teratur. Fitur notifikasi suara pas ada order baru bikin operasional makin lancar!",
    rating: 5,
  },
  {
    name: "Kevin Alexander",
    role: "Trader — TradePro Assistant User",
    avatar: "KA",
    color: "from-amber-400 to-orange-500",
    text: "Dashboard trading ini bantu banget buat analisa pasar dan manajemen resiko. Semuanya real-time, dark modenya enak dipandang mata pas trading malem-malem.",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    role: "Owner — Go Chinese Course",
    avatar: "SN",
    color: "from-red-400 to-rose-500",
    text: "Aplikasi pembelajaran Mandarin-nya interaktif banget! Murid-murid saya jadi lebih semangat belajar. Tampilannya modern dan engaging, cocok buat generasi muda.",
    rating: 5,
  },
  {
    name: "Arief Hidayat",
    role: "Manager Operasional — FLEET TRACKER",
    avatar: "AH",
    color: "from-teal-400 to-cyan-500",
    text: "Tracking armada jadi lebih gampang, tau posisi kendaraan real-time. Bikin efisiensi bahan bakar dan waktu tempuh jadi lebih terkontrol. Recommended!",
    rating: 5,
  },
  {
    name: "Lina Marlina",
    role: "Mahasiswi — Daily Target User",
    avatar: "LM",
    color: "from-violet-400 to-purple-500",
    text: "Aplikasi daily planner ini ngebantu banget ngatur jadwal harian dan task kuliah. Fitur gamification-nya bikin kita jadi termotivasi reach target tiap hari!",
    rating: 5,
  },
  {
    name: "Doni Prasetyo",
    role: "Admin — OS TIKET TA",
    avatar: "DP",
    color: "from-sky-400 to-indigo-500",
    text: "Sistem pengaduan insiden sibernya memudahkan pelaporan dan tracking tiket. Masyarakat jadi lebih cepat dapat respon. Prosesnya transparan dan gampang dipantau.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-cream relative overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-10 right-10 text-primary/5">
        <Quote className="w-32 h-32 md:w-48 md:h-48" />
      </div>
      <div className="absolute bottom-10 left-10 text-primary/5 rotate-180">
        <Quote className="w-24 h-24 md:w-32 md:h-32" />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-navy">
            Apa Kata <span className="gradient-text">Klien</span>?
          </h2>
          <p className="section-subtitle">
            Ini cerita dari para klien dan pengguna project yang udah kami bangun.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Carousel */}
          <div className="relative h-[320px] md:h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-black/5
                           border border-primary/5 flex flex-col justify-between"
              >
                {/* Rating */}
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-navy/80 text-base md:text-lg leading-relaxed italic mb-6">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].color}
                                  flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy">{testimonials[current].name}</div>
                    <div className="text-muted text-sm">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-white border border-primary/10 flex items-center justify-center
                         text-navy hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-primary w-8"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-white border border-primary/10 flex items-center justify-center
                         text-navy hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
