// export default function Footer() {
//   return (
//     <footer className="bg-black border-t border-white/10 py-12 text-white">
//       <div className="mx-auto max-w-6xl px-6 grid gap-6 sm:grid-cols-3">

//         {/* Brand Info */}
//         <div>
//           <h3 className="text-lg font-semibold">Nordvia</h3>
//           <p className="mt-2 text-sm opacity-70">
//             Premium winter apparel manufacturer from Sialkot, Pakistan.
//             Trusted by global partners.
//           </p>
//         </div>

//         {/* Navigation */}
//         <div>
//           <h4 className="text-sm font-semibold mb-2">Navigation</h4>
//           <ul className="space-y-1 text-sm opacity-80">
//             <li><a href="#products" className="hover:underline">Products</a></li>
//             <li><a href="#manufacturing" className="hover:underline">Manufacturing</a></li>
//             <li><a href="#sampling" className="hover:underline">Sampling</a></li>
//             <li><a href="#export" className="hover:underline">Export</a></li>
//             <li><a href="#about" className="hover:underline">About</a></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="text-sm font-semibold mb-2">Contact</h4>
//           <ul className="space-y-1 text-sm opacity-80">
//             <li>
//               <a
//                 href="https://wa.me/XXXXXXXXXXX"
//                 target="_blank"
//                 className="hover:underline"
//               >
//                 WhatsApp Inquiry
//               </a>
//             </li>
//             <li>Email: info@nordvia.com</li>
//             <li>Location: Sialkot, Pakistan</li>
//           </ul>
//         </div>

//       </div>

//       <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm opacity-50">
//         &copy; {new Date().getFullYear()} Nordvia. All rights reserved.
//       </div>
//     </footer>
//   );
// }
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 text-center md:text-left">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start">
          <Image src="/logo_.png" alt="Nordvia Logo" width={180} height={40} />

          <p className="mt-3 text-base opacity-70 text-center md:text-left">
            Premium winter apparel manufacturer from Sialkot, Pakistan. Trusted
            by global partners.
          </p>
        </div>

        {/* Shop Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Shop Links</h3>
          <ul className="space-y-1 text-base opacity-80">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#casual" className="hover:underline">
                Hoodies
              </a>
            </li>
            <li>
              <a href="#sports" className="hover:underline">
                Tracksuits
              </a>
            </li>
            <li>
              <a href="#sports" className="hover:underline">
                Jackets
              </a>
            </li>
            <li>
              <a href="#sports" className="hover:underline">
                Outwear
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Legals</h3>
          <ul className="space-y-1 text-base opacity-80">
            <li className="hover:opacity-80 cursor-pointer">Shipping Info</li>
            <li className="hover:opacity-80 cursor-pointer">
              Terms & Conditions
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
              className="cursor-pointer hover:opacity-80"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="cursor-pointer hover:opacity-80"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://wa.me/03146802816"
              target="_blank"
              className="cursor-pointer hover:opacity-80"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>

          <ul className="space-y-2 text-sm opacity-80 text-center md:text-left">
            <li>
              Email:{" "}
              <a
                href="mailto:nordvia.exports@gmail.com"
                className="cursor-pointer hover:opacity-80"
              >
                nordvia.exports@gmail.com
              </a>
            </li>

            <li>
              Call Us:{" "}
              <a
                href="tel:+923001234567"
                className="cursor-pointer hover:opacity-80 font-medium"
              >
                +92 300 1234567
              </a>
            </li>

            <li>Location: Sialkot, Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-base opacity-50">
        © {new Date().getFullYear()} Nordvia. All rights reserved.
      </div>
    </footer>
  );
}
