import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SoftwareGlimpse from "@/components/SoftwareGlimpse";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import BetaAccessSection from "@/components/BetaAccessSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F8FF] relative">
      <Image
        src="/background.png"
        alt="Hero Background"
        width={100}
        height={100}
        className="absolute top-0 left-0 right-0 w-[700px] h-[740px] md:w-full md:h-auto object-cover opacity-50"
      />
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <SoftwareGlimpse />
      <PricingSection />
      <FAQSection />
      <BetaAccessSection />
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
