"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHeadset,
  FaShippingFast,
  FaPalette,
  FaBoxes,
  FaSnowflake,
  FaTags,
  FaComments,
  FaGlobe,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "24/7 Support",
    desc: "Direct communication and support throughout production.",
    icon: FaHeadset,
  },
  {
    title: "Fast Delivery",
    desc: "Optimized production timelines with reliable shipping.",
    icon: FaShippingFast,
  },
  {
    title: "Customization Options",
    desc: "Styles, colors, fabrics, and fits made to your needs.",
    icon: FaPalette,
  },
  {
    title: "Low MOQ",
    desc: "Perfect for startups and test orders.",
    icon: FaBoxes,
  },
  {
    title: "Winter-Focused Fabrics",
    desc: "Premium fleece, wool, and cold-weather materials.",
    icon: FaSnowflake,
  },
  {
    title: "Custom Branding",
    desc: "Labels, tags, packaging, and private branding.",
    icon: FaTags,
  },
  {
    title: "Transparent Communication",
    desc: "Clear updates at every production stage.",
    icon: FaComments,
  },
  {
    title: "Global Export Experience",
    desc: "Trusted by international brands worldwide.",
    icon: FaGlobe,
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".why-item", {
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
      ref={sectionRef}
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/Why.webp')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative mx-auto max-w-6xl px-6 text-white">
        {/* Heading */}
        <div className="why-item mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Why Choose Nordvia?
          </h2>
          <p className="mt-2 text-lg opacity-80 ">
            A manufacturing partner focused on quality, transparency, and
            long-term growth.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="why-item rounded-2xl border border-white/5 bg-white/2 p-6 backdrop-blur-sm"
              >
                <Icon className="mb-4 text-2xl text-white/90" />
                <h3 className="mb-1 text-base font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm opacity-75">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing line */}
        <p className="why-item mt-12 text-center text-lg opacity-70 ">
          We believe strong partnerships are built on honesty, consistency, and
          delivering exactly what we promise.
        </p>
      </div>
    </section>
  );
}
