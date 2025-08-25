import Image from "next/image";
import { ProductCard, CallToActionCard } from "./product-card";

const products = [
  {
    title: "Synguard Nitrile Exam Gloves (Medium)",
    description:
      "Latex-free, powder-free, protein-free nitrile examination gloves for medical professionals.",
    category: "Medical Gloves",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tB6zg6iq0HhL3F7j1zJvNyUIDjqTJa.png",
    features: ["Latex Free", "Powder Free", "100 Count"],
    productCode: "NGPF 7002",
  },
  {
    title: "Glucerna Therapeutic Nutrition",
    description:
      "Specialized nutrition designed for people with diabetes to help manage blood sugar response.",
    category: "Nutrition",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PwYFaND9a2y49WBrre8Iz8G4Tb4mVs.png",
    features: ["Diabetes Care", "1.2 CAL", "Vanilla Flavor"],
    productCode: "GLU-VAN-237",
  },
  {
    title: "Prevail Daily Pads",
    description:
      "Ultimate absorbency pads for bladder leaks with MaxSorb Gel Technology and Omni-Odor Guard.",
    category: "Incontinence",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JeV0SbyiqBUbCBxYmoezHsAyGWXu9T.png",
    features: ["33 Count", "Regular", "Breathable"],
    productCode: "PRV-DP-33",
  },
  {
    title: "Ensure Plus Therapeutic Nutrition",
    description:
      "Complete, balanced nutrition with 40% more protein than Ensure Original for therapeutic needs.",
    category: "Nutrition",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Gjt6hZFl2dPQSrnc1g5K6qzjCJiTIR.png",
    features: ["13g Protein", "350 Calories", "Vanilla"],
    productCode: "ENS-PLS-VAN",
  },
  {
    title: "Ensure Original",
    description:
      "Complete, balanced nutrition with 9g protein, 250 calories, and 27 vitamins & minerals.",
    category: "Nutrition",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qj5LJ2QAMdPSaokukFR3NXY1EkIz8f.png",
    features: ["9g Protein", "250 Calories", "Chocolate"],
    productCode: "ENS-ORG-CHO",
  },
  {
    title: "Prevail Underpads",
    description:
      "Moisture-proof barrier underpads with extra strong protection for beds and furniture.",
    category: "Incontinence",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hLj5tGpW7MiThQTOTqEbCCMmH4YwMj.png",
    features: ["10 Count", "Moisture Proof", "Extra Strong"],
    productCode: "PRV-UP-10",
  },
  {
    title: "Synguard Nitrile Exam Gloves (Large)",
    description:
      "Large size latex-free, powder-free, protein-free nitrile examination gloves.",
    category: "Medical Gloves",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sw5sxA2pkN6fQvCdgyJxrXfZawMRYL.png",
    features: ["Latex Free", "Powder Free", "Large Size"],
    productCode: "NGPF 7003",
  },
  {
    title: "Drive Medical Wheelchair",
    description:
      "Standard wheelchair with removable desk arms and swing-away footrests for comfort and mobility.",
    category: "Mobility",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RgmunfhwPXPgJYtbtmH3701i3q1XeF.png",
    features: ["Removable Arms", "Swing-Away Feet", "Standard"],
    productCode: "DRV-WC-STD",
  },
  {
    title: "Drive Medical Mattress",
    description:
      "High-quality medical mattress designed for comfort and pressure relief in healthcare settings.",
    category: "Medical Equipment",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VMaNFK2ExaUiumWQSbmP8htS295xWq.png",
    features: ["Pressure Relief", "Medical Grade", "Durable"],
    productCode: "DRV-MAT-MED",
  },
  {
    title: "Disposable Underpads",
    description:
      "Soft, absorbent disposable underpads with moisture-proof backing for patient care.",
    category: "Incontinence",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ha5tdbEYd8iR6gGEAErlv8qaRj58v7.png",
    features: ["Disposable", "Absorbent", "Moisture Proof"],
    productCode: "DISP-UP-STD",
  },
  {
    title: "ProCare Large Adult Washcloths - 96 Count",
    description:
      "ProCare Large Adult Washcloths are soft, pre-moistened wipes designed for adult care and hygiene. ",
    category: "Personal Care",
    image: "/procare.jpeg",
    features: ["Large size", "Soft and gentle", "Disposible"],
    productCode: "PROCARE-ADULT-96",
  },
];

export function ProductsSection() {
  return (
    <section className="py-16 relative px-6 md:px-10 text-center flex flex-center flex-col max-w-[1600px] mx-auto" id="products">
      <Image
        src="/glimpsbg.svg"
        alt="Software Glimpse Background"
        width={1400}
        height={600}
        className="absolute z-0 -top-16 md:-top-24 left-0 md:left-[25%] w-[400px] h-[400px] md:w-[650px] md:h-[650px] object-cover opacity-20"
      />
      <div className="flex items-center justify-center mb-8">
        <div className="text-center relative">
          <h2 className="text-4xl z-10 md:text-5xl font-bold pb-8 text-black">
            Essential Health Products
          </h2>
          <p className="text-[#8987A1] text-2xl z-10 mt-2 max-w-md pb-8 mx-auto">
            We stock a comprensive range of medical supplies and health products
            to meet your professional and personal needs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            category={product.category}
            image={product.image}
            features={product.features}
            productCode={product.productCode}
          />
        ))}

        <CallToActionCard />
      </div>
    </section>
  );
}
