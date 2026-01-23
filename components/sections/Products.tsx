"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: "Premium Fleece Hoodies",
    image: "/products/hoodies.webp",
    details:
      "Soft cotton fleece, breathable and warm, available in multiple colors.",
  },
  {
    title: "Winter Tracksuits",
    image: "/products/tracksuits.webp",
    details: "Full tracksuits for comfort and style, ideal for winter sports.",
  },
  {
    title: "Bomber & Casual Jackets",
    image: "/products/jackets.webp",
    details:
      "Classic bomber and casual jackets, tailored for durability and style.",
  },
  {
    title: "Coats & Cold Weather Outerwear",
    image: "/products/coats.webp",
    details: "Heavy-duty coats designed for extreme cold, export quality.",
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".product-item", {
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
    <section id="products" ref={sectionRef} className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="product-item mb-2 text-3xl font-semibold sm:text-4xl text-center">
          What We Manufacture
        </h2>
        <p className="product-item mb-12 max-w-3xl text-center text-base opacity-70 sm:text-base mx-auto">
          Materials include cotton, fleece, wool, and performance blends. Custom
          styles, colors, private labeling, and export packaging supported.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.title}
              className="product-item group relative h-96 overflow-hidden rounded-2xl border border-white/10 shadow-lg"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Title + Details */}
              <div className="relative z-10 flex h-full text-center flex-col justify-end p-5">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                {/* <p className="text-sm opacity-80">{item.details}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
