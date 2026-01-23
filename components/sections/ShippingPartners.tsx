"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: "DHL", logo: "/logos/dhl.webp" },
  { name: "FedEx", logo: "/logos/fedex.webp" },
  { name: "UPS", logo: "/logos/ups.webp" },
  { name: "TCS", logo: "/logos/tcs.webp" },
];

export default function ShippingPartners() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".shipping-item", {
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
    <section id="shipping" ref={sectionRef} className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6 text-white">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-2 justify-center items-center">
          <div>
            <h2 className="shipping-item text-4xl md:text-5xl font-bold leading-tight">
              Our Trusted Partners
            </h2>
            <p className="shipping-item mt-4 text-gray-300 max-w-md">
              We partner with global logistics leaders to ensure timely and
              secure delivery of your products, anywhere in the world.
            </p>

            {/* Why Choose Box */}
            <div className="shipping-item mt-10 max-w-xl rounded-2xl border border-white/10 p-6 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose Our Delivery?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Worldwide Reach with real-time tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Safe Packaging & Secure Delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Fast Processing Times</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>24/7 Support for shipping inquiries</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Partner Cards */}
          <div className="grid grid-cols-2 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="shipping-item flex items-center justify-center rounded-2xl border border-white/10 p-6"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
     
      </div>
    </section>
  );
}
