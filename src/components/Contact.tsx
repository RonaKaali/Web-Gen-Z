"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Mail, MapPin, Loader2 } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+62 882-3444-8888",
    url: "https://wa.me/6288234448888",
    desc: "Respon cepat dalam 5 menit!",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Mail,
    title: "Email",
    value: "ronafatahilah@gmail.com",
    url: "mailto:ronafatahilah@gmail.com",
    desc: "Kami balas dalam 1x24 jam",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MapPin,
    title: "Lokasi",
    value: "Online — Seluruh Indonesia",
    url: "#",
    desc: "Bisa remote, bisa ketemu online",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      formData.append("_subject", `Pesan Baru dari ${formState.name} — Website Gen Z`);
      formData.append("_template", "table");

      await fetch("https://formsubmit.co/ajax/ronafatahilah@gmail.com", {
        method: "POST",
        body: formData,
      });

      setSending(false);
      setSent(true);
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setSending(false);
      alert("Gagal mengirim. Coba lewat WhatsApp langsung ya!");
    }
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-light/20 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-xs md:text-sm font-semibold tracking-wider uppercase mb-4">
            Hubungi Kami
          </span>
          <h2 className="section-title text-white">
            Yuk, <span className="gradient-text">Diskusi</span> Dulu!
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Konsultasi gratis! Ceritain aja apa yang kamu mau, kita bantu wujudkan.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.title}
              href={contact.url}
              target={contact.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10
                         hover:bg-white/15 transition-all duration-300 text-center group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} 
                              flex items-center justify-center mx-auto mb-4
                              group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-1">{contact.title}</h3>
              <p className="text-white/80 text-sm font-medium mb-2">{contact.value}</p>
              <p className="text-white/50 text-xs">{contact.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 overflow-hidden rounded-2xl border border-white/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1023098.6603825636!2d114.305709802265!3d-3.3196434823057597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de419668b5bf2ff%3A0x36d50c07de413b11!2sBanjarmasin%2C%20Kota%20Banjarmasin%2C%20Kalimantan%20Selatan!5e0!3m2!1sid!2sid!4v1!4m1!1s0x2de419668b5bf2ff%3A0x36d50c07de413b11"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi WEBSITE GENZ - Banjarmasin"
            className="rounded-2xl"
          />
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 text-center">
            <p className="text-white/60 text-sm">
              📍 Banjarmasin, Kalimantan Selatan — Melayani Seluruh Indonesia
            </p>
          </div>
        </motion.div>

        {/* Form + CTA */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/10"
          >
            <h3 className="font-heading font-bold text-white text-xl mb-6 text-center">
              Atau Isi Form Ini
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama kamu"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white
                             placeholder-white/40 focus:outline-none focus:border-accent focus:ring-2
                             focus:ring-accent/30 transition-all duration-300 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email kamu"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white
                             placeholder-white/40 focus:outline-none focus:border-accent focus:ring-2
                             focus:ring-accent/30 transition-all duration-300 text-sm"
                />
              </div>
              <textarea
                placeholder="Ceritain project impian kamu..."
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white
                           placeholder-white/40 focus:outline-none focus:border-accent focus:ring-2
                           focus:ring-accent/30 transition-all duration-300 text-sm resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full btn-primary justify-center text-base !py-4 disabled:opacity-70"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Mengirim...
                  </>
                ) : sent ? (
                  <>
                    <Send className="w-5 h-5" />
                    Terkirim! 🎉
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/6288234448888"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent text-navy font-heading font-bold
                       text-lg md:text-xl shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105
                       transition-all duration-300 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Langsung Chat Sekarang! 🚀
          </a>
        </motion.div>
      </div>

      {/* Contact Mascots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Maskot 1 - Desktop only (Left) */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-72 xl:w-96 2xl:w-[32rem]">
          <img src="/MASKOT 1.png" alt="" className="w-full h-auto object-contain opacity-40" draggable={false} />
        </div>
        {/* Maskot 2 - Mobile (bottom right) + Desktop (right side) */}
        <div className="absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 right-0 bottom-0 w-28 sm:w-32 lg:w-72 xl:w-96 2xl:w-[32rem]">
          <img src="/MASKOT 2.png" alt="" className="w-full h-auto object-contain opacity-40" draggable={false} />
        </div>
      </div>
    </section>
  );
}
