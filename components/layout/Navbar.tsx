"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaInstagram, FaFacebookF, FaBars, FaTimes } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import gsap from "gsap";

const products = [
  { name: "Hoodies", href: "#catalog" },
  // { name: "Tracksuits", href: "#products" },
  { name: "Jackets", href: "#catalog" },
  { name: "Outerwear", href: "#catalog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleDropdownClick = () => {
    setDropdown(false);
    setOpen(false);
  };

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    gsap.killTweensOf(mobileMenuRef.current);

    if (open) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power3.in",
        pointerEvents: "none",
      });
    }
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          Nordvia
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#home"
            className="relative text-base opacity-80 hover:opacity-100 group"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="relative group">
            <button className=" text-base opacity-80 hover:opacity-100 flex items-center gap-1">
              Products
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </button>
            <div className="absolute left-0 mt-3 w-48 rounded-xl border border-white/10 bg-black shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
              {products.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base opacity-80 hover:bg-white/5 hover:opacity-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="#products"
            className="relative text-base opacity-80 hover:opacity-100 group"
          >
            Manufactured
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="#about"
            className="relative text-base opacity-80 hover:opacity-100 group"
          >
            About Us
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="https://wa.me/03146802816"
            target="_blank"
            className="rounded-full border border-white/20 px-5 py-2 text-base hover:bg-white hover:text-black transition"
          >
            WhatsApp Inquiry
          </Link>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/nordvia.exports/"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="mailto:nordvia.exports@gmail.com"
              className="cursor-pointer hover:opacity-80"
              target="_blank"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden border-t border-white/10 bg-black"
        style={{ height: 0, opacity: 0, pointerEvents: "none" }}
      >
        <div className="flex flex-col px-6 py-6 space-y-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-sm opacity-80"
          >
            Home
          </Link>

          <button
            onClick={() => setDropdown(!dropdown)}
            className="text-left text-sm opacity-80 flex justify-between items-center w-full"
          >
            Products
            <span>{dropdown ? "▲" : "▼"}</span>
          </button>

          {dropdown &&
            products.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="pl-4 text-sm opacity-70"
                onClick={handleDropdownClick}
              >
                {item.name}
              </Link>
            ))}

          <Link
            href="#products"
            onClick={() => setOpen(false)}
            className="text-sm opacity-80"
          >
            Manufactured
          </Link>
          <Link
            href="#about"
            onClick={() => setOpen(false)}
            className="text-sm opacity-80"
          >
            About Us
          </Link>

          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/nordvia.exports/"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="mailto:nordvia.exports@gmail.com"
              className="cursor-pointer hover:opacity-80"
              target="_blank"
            >
              <FaEnvelope size={18} />
            </a>
          </div>

          <Link
            href="https://wa.me/03146802816"
            target="_blank"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full border border-white/20 px-5 py-3 text-center text-sm"
          >
            WhatsApp Inquiry
          </Link>
        </div>
      </div>
    </header>
  );
}
