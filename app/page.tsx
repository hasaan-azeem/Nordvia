import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
// import Export from "@/components/sections/Export";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Sampling from "@/components/sections/Sampling";
import ShippingPartners from "@/components/sections/ShippingPartners";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <WhyUs />
      <ShippingPartners />
      <Sampling />
      {/* <Export /> */}
      <CTA />
    </>
  );
}
