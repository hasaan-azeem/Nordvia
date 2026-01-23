"use client";

import { useEffect, useRef } from "react";
import { Shirt, CheckCircle, Globe2, Factory, Truck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    icon: Shirt,
    title: "Custom Options",
    desc: "Logo, fabric, colors, and sizing as per brand needs",
  },
  {
    icon: CheckCircle,
    title: "Export Quality",
    desc: "Professional finishing matching bulk standards",
  },
  {
    icon: Globe2,
    title: "Worldwide Shipping",
    desc: "Courier delivery for samples globally",
  },
];

const steps = [
  { title: "Controlled Manufacturing", icon: Factory },
  { title: "Clear Production Timelines", icon: CheckCircle },
  { title: "Quality Checks", icon: CheckCircle },
  { title: "Courier / Air / Sea Shipping", icon: Truck },
];

export default function Sampling() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".sample-item", {
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
    <section id="sampling" ref={sectionRef} className="relative bg-black py-24">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('/Sampling.jpg')" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Sampling Process */}
        <h2 className="sample-item mb-6 text-3xl font-semibold sm:text-4xl">
          Sampling Process
        </h2>
        <p className="sample-item mb-10 max-w-3xl text-lg opacity-80">
          We provide paid samples so brands can verify quality before bulk production.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {points.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="sample-item rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur hover:scale-105 transition-transform"
              >
                <Icon className="mb-4 h-8 w-8 text-white" />
                <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
                <p className="text-sm opacity-70">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Production & Export */}
        <h2 className="sample-item mt-16 mb-6 text-3xl font-semibold sm:text-4xl">
          Production and Export
        </h2>
        <p className="sample-item mb-10 max-w-3xl text-base opacity-80">
          We manage production, guiding our partners through every step, from order confirmation to final delivery.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="sample-item flex items-start gap-4 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur hover:scale-105 transition-transform"
              >
                <Icon className="mt-1 h-6 w-6 text-white" />
                <p className="text-sm opacity-80 sm:text-base">{step.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
