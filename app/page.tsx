import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import ProductPreview from "@/components/ProductPreview";
import Testimonials from "@/components/Testimonials";
import Trusted from "@/components/Trusted";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <ProductPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
