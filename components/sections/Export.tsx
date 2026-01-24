"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shirt, CheckCircle, Globe2, Factory } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Production Control",
    desc: "Managed manufacturing process with clear specifications",
    icon: Factory,
  },
  {
    title: "Production Timelines",
    desc: "Transparent timelines shared before production begins",
    icon: CheckCircle,
  },
  {
    title: "Quality Inspection",
    desc: "Quality checks completed before packing and dispatch",
    icon: Shirt,
  },
  {
    title: "Worldwide Shipping",
    desc: "Courier, air, or sea shipping to global destinations",
    icon: Globe2,
  },
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
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="export"
      ref={sectionRef}
      className="bg-black py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="export-item mb-6 text-3xl font-semibold sm:text-4xl text-white">
              Production & Export
            </h2>

            <p className="export-item max-w-xl text-base text-white/80 sm:text-base">
              We manage production and global shipping with clear communication
              and dependable timelines. From order confirmation to final
              delivery, every step is handled with care.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="export-item rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:scale-105"
                >
                  <Icon className="mb-4 h-8 w-8 text-white" />

                  <h3 className="mb-2 text-lg font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/70">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
