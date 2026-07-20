"use client";

import { useEffect } from "react";

export default function SchemaMarkup() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "WEBSITE GEN Z",
      image: "https://www.webgenz.my.id/logo.png",
      url: "https://www.webgenz.my.id",
      telephone: "+6288234448888",
      email: "ronafatahilah@gmail.com",
      description:
        "Jasa pembuatan website, aplikasi, dan joki tugas programming untuk UMKM, cafe, dan usaha kecil. Mulai dari 200K!",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
      },
      openingHours: "Mo-Su 08:00-22:00",
      sameAs: [
        "https://www.instagram.com/webgenz.id/",
        "https://wa.me/6288234448888",
        "https://github.com/RonaKaali",
      ],
      priceRange: "Rp100.000 - Rp5.000.000",
      headline: "Jasa Pembuatan Website & Aplikasi",
      author: {
        "@type": "Organization",
        name: "WEBSITE GEN Z",
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
