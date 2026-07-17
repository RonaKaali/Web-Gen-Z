"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const mascots = [
  { src: "/MASKOT 1.png", alt: "Maskot 1" },
  { src: "/MASKOT 2.png", alt: "Maskot 2" },
  { src: "/MASKOT 3.png", alt: "Maskot 3" },
  { src: "/MASKOT 4.png", alt: "Maskot 4" },
];

export default function MascotDecorations() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Left side: maskot 1 & 3 (ganjil)
  // Right side: maskot 2 & 4 (genap)
  const leftMascots = [mascots[0], mascots[2]];
  const rightMascots = [mascots[1], mascots[3]];

  const MascotItem = ({
    src,
    alt,
    side,
    index,
  }: {
    src: string;
    alt: string;
    side: "left" | "right";
    index: number;
  }) => {
    const speed = 0.15 + index * 0.05;
    const offset = scrollY * speed;
    const topPos = index === 0 ? "12%" : "48%";
    const initialY = index === 0 ? 0 : 0;

    return (
      <div
        className="absolute w-28 md:w-36 lg:w-44 xl:w-52 2xl:w-60 transition-all duration-300"
        style={{
          top: `calc(${topPos} + ${offset * (index === 0 ? 1 : -1)}px)`,
          [side]: "0",
          transform: `translateY(${initialY}px)`,
        }}
      >
        <div className="relative w-full aspect-square">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, (max-width: 1280px) 176px, 208px"
            priority={index < 2}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      {/* LEFT SIDE */}
      <div className="fixed left-0 top-0 h-full w-28 md:w-36 lg:w-44 xl:w-52 2xl:w-60 pointer-events-none z-0 hidden lg:block">
        {leftMascots.map((m, i) => (
          <MascotItem key={m.alt} src={m.src} alt={m.alt} side="left" index={i} />
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="fixed right-0 top-0 h-full w-28 md:w-36 lg:w-44 xl:w-52 2xl:w-60 pointer-events-none z-0 hidden lg:block">
        {rightMascots.map((m, i) => (
          <MascotItem key={m.alt} src={m.src} alt={m.alt} side="right" index={i} />
        ))}
      </div>
    </>
  );
}
