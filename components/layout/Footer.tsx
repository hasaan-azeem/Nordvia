import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 text-center md:text-left">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start">
          <Image src="/logo_.png" alt="Nordvia Logo" width={180} height={40} />

          <p className="mt-3 text-base opacity-70">
            Premium winter apparel manufacturer from Sialkot, Pakistan. Trusted
            by global brands across Europe, USA, UK, and Canada.
          </p>

          {/* <ul className="mt-3 text-sm space-y-1 text-gray-400">
            <li>✔ Custom branding and private labeling</li>
            <li>✔ Export quality production</li>
            <li>✔ Eco conscious materials</li>
          </ul> */}
        </div>

        {/* Winter Apparel Categories */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Winter Apparel</h3>

          <ul className="space-y-1 text-sm opacity-80">
            <li>
              <a href="#catalog" className="hover:underline">
                Winter Jackets
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:underline">
                Hoodies
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:underline">
                Sweatshirts
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:underline">
                Winter Tracksuits
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:underline">
                Winter Coats
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:underline">
                Winter Gloves
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-1 text-base opacity-80">
            <li>
              <a href="#about" className="hover:underline">
                About Nordvia
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                Manufacturing
              </a>
            </li>
            <li>
              <a href="#sampling" className="hover:underline">
                Sampling
              </a>
            </li>
            <li>
              <a href="#export" className="hover:underline">
                Export Process
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:underline">
                Shipping Info
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>

          <div className="flex gap-4 mb-4">
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://facebook.com/nordviaexports"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://wa.me/03146802816"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/nordviaexports"
              target="_blank"
              className="hover:opacity-80"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          <ul className="space-y-2 text-sm opacity-80">
            <li>
              Email:{" "}
              <a
                href="mailto:nordvia.exports@gmail.com"
                className="hover:underline"
              >
                nordvia.exports@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+923001234567"
                className="hover:underline font-medium"
              >
                +92 300 1234567
              </a>
            </li>
            <li>Location: Sialkot, Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Nordvia. All rights reserved.
      </div>
    </footer>
  );
}
