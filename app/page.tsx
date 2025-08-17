import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SoftwareGlimpse from "@/components/SoftwareGlimpse";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import BetaAccessSection from "@/components/BetaAccessSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import GetQuote from "@/components/GetQuote";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">

      <Header />
      <HeroSection />
      <WhyChooseUs />
      <SoftwareGlimpse />
      <FAQSection />
      <GetQuote />

      <Footer />
      <Image
        src="/bottombg.svg"
        alt="Hero Background"
        width={100}
        height={100}
        className="absolute bottom-0 left-0 right-0 w-full h-auto object-cover"
      />
    </main>
  );
}
