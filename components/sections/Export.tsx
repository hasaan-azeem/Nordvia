"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  "Controlled manufacturing process",
  "Clear production timelines",
  "Quality checks before shipment",
  "Courier, air, or sea shipping options",
];

export default function Export() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".export-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="export"
      ref={sectionRef}
      className="bg-black py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="export-item mb-6 text-3xl font-semibold sm:text-4xl">
          Production and Export
        </h2>

        <p className="export-item mb-10 max-w-3xl text-sm opacity-80 sm:text-base">
          We manage production and exports with clear communication and
          dependable timelines.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step}
              className="export-item rounded-2xl border border-white/10 p-6"
            >
              <p className="text-sm opacity-80 sm:text-base">
                {step}
              </p>
            </div>
          ))}
        </div>

        <p className="export-item mt-10 max-w-3xl text-sm opacity-70 sm:text-base">
          We guide our partners through every step, from order confirmation to
          final delivery.
        </p>

      </div>
    </section>
  );
}
