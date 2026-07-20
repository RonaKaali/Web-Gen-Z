import type { Metadata } from "next";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: {
    default: "WEBSITE GEN Z — Jasa Pembuatan Website & Aplikasi",
    template: "%s | WEBSITE GEN Z",
  },
  description:
    "Jasa pembuatan website, aplikasi, dan joki tugas programming untuk UMKM, cafe, dan usaha kecil. Mulai dari 200K! Biar kamu fokus bisnis, urusan website biar kami.",
  keywords: [
    "jasa pembuatan website",
    "website murah",
    "UMKM go digital",
    "joki tugas programming",
    "pembuatan aplikasi",
    "website cafe",
    "landing page murah",
    "website gen z",
    "jasa website banjarbaru",
    "pembuatan website kalimantan",
    "digital agency",
    "website umkm",
    "buat website murah",
    "web developer indonesia",
  ],
  authors: [{ name: "WEBSITE GEN Z", url: "https://www.webgenz.my.id" }],
  creator: "WEBSITE GEN Z",
  publisher: "WEBSITE GEN Z",
  metadataBase: new URL("https://www.webgenz.my.id"),
  alternates: {
    canonical: "https://www.webgenz.my.id",
  },
  openGraph: {
    title: "WEBSITE GEN Z — Jasa Pembuatan Website & Aplikasi",
    description:
      "Biar kamu fokus bisnis, urusan website biar kami. Mulai dari 200K! Jasa pembuatan website, aplikasi, dan joki tugas programming.",
    url: "https://www.webgenz.my.id",
    siteName: "WEBSITE GEN Z",
    images: [
      {
        url: "/logo.png",
        width: 1920,
        height: 636,
        alt: "WEBSITE GEN Z",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBSITE GEN Z — Jasa Pembuatan Website & Aplikasi",
    description:
      "Biar kamu fokus bisnis, urusan website biar kami. Mulai dari 200K!",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  category: "technology",
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
        <SchemaMarkup />
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
