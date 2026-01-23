import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/Common/SmoothScrolling";

export const metadata = {
  title: "Nordvia | Winter Apparel Manufacturer",
  description:
    "Premium winter apparel manufacturer for global brands. Quality, consistency, reliability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased flex flex-col min-h-screen">
        <SmoothScrolling>
          <Navbar />
          <main className="pt-14 flex-1">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
