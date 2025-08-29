import Image from "next/image"
import { ProductCard, CallToActionCard } from "./product-card"
import products from "@/lib/products"

export function ProductsSection() {
  return (
    <section
      className="py-16 relative px-6 md:px-10 text-center flex flex-center flex-col max-w-[1600px] mx-auto"
      id="products"
    >
      <Image
        src="/glimpsbg.svg"
        alt="Software Glimpse Background"
        width={1400}
        height={600}
        className="absolute z-0 -top-16 md:-top-24 left-0 md:left-[25%] w-[400px] h-[400px] md:w-[650px] md:h-[650px] object-cover opacity-20"
      />
      <div className="flex items-center justify-center mb-8">
        <div className="text-center relative">
          <h2 className="text-4xl z-10 md:text-5xl font-bold pb-8 text-black">Essential Health Products</h2>
          <p className="text-[#8987A1] text-2xl z-10 mt-2 max-w-md pb-8 mx-auto">
            We stock a comprensive range of medical supplies and health products to meet your professional and personal
            needs.
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
  )
}
