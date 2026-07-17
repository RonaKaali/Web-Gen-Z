import type { Metadata } from "next";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import MascotDecorations from "@/components/MascotDecorations";

export const metadata: Metadata = {
  title: "WEBSITE GEN Z — Jasa Pembuatan Website & Aplikasi",
  description:
    "Jasa pembuatan website, aplikasi, dan joki tugas programming untuk UMKM, cafe, dan usaha kecil. Built By Gen Z, For Everyone. Mulai dari 350K!",
  keywords: [
    "jasa pembuatan website",
    "website murah",
    "UMKM go digital",
    "joki tugas programming",
    "pembuatan aplikasi",
    "website cafe",
    "landing page murah",
    "website gen z",
  ],
  authors: [{ name: "WEBSITE GEN Z" }],
  openGraph: {
    title: "WEBSITE GEN Z — Jasa Pembuatan Website & Aplikasi",
    description:
      "Biar kamu fokus bisnis, urusan website biar kami. Mulai dari 350K!",
    type: "website",
    locale: "id_ID",
    siteName: "WEBSITE GEN Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBSITE GEN Z — Jasa Pembuatan Website & Aplikasi",
    description:
      "Biar kamu fokus bisnis, urusan website biar kami. Mulai dari 350K!",
  },
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="antialiased">
        <SplashScreen />
        <MascotDecorations />
        {children}
      </body>
    </html>
  );
}
