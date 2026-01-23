"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bgRef.current) return;

    const img = new Image();
    img.src = "/herobg.jpg";

    img.onload = () => {
      gsap.to(bgRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".hero-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2,
      });
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center opacity-0 will-change-opacity"
        style={{ backgroundImage: "url('/herobg.webp')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="hero-item text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Built for Cold. <br /> Trusted Worldwide.
        </h1>

        <p className="hero-item mt-6 text-base opacity-80 sm:text-lg">
          Premium winter apparel manufacturing for global brands.
          <br className="hidden sm:block" />
          From hoodies to jackets, Nordvia delivers consistent quality, low
          minimums, and reliable exports.
        </p>

        <div className="hero-item mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-8 py-3 text-base font-medium text-black hover:opacity-90 transition">
            Request Catalog
          </button>

          <a
            href="https://wa.me/03146802816"
            target="_blank"
            className="rounded-full border border-white/30 px-8 py-3 text-base hover:bg-white hover:text-black transition"
          >
            Order Samples on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
