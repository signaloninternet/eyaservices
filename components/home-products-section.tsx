"use client";
import { useMemo } from "react";
import products from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

type HomeProductsSectionProps = {
  title: string;
  category: string;
  limit?: number; // default 5
  className?: string;
};

export default function HomeProductsSection({
  title,
  category,
  limit = 5,
  className,
}: HomeProductsSectionProps) {
  const items = useMemo(
    () =>
      products
        .filter((p) => p.category === category)
        .slice(0, Math.max(0, limit - 1)),
    [category, limit]
  );

  const seeAllHref = `/products?category=${encodeURIComponent(category)}`;

  return (
    <section
      className={cn(
        "py-10 md:py-12 px-6 md:px-10 max-w-[1600px] mx-auto",
        className
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-balance">{title}</h2>
        <a
          href={seeAllHref}
          className="text-sm font-medium text-teal-700 hover:text-teal-800 underline underline-offset-4"
          aria-label={`See all ${category} products`}
        >
          See all
        </a>
      </div>

      <div
        className="no-scrollbar flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollbarWidth: "none" }}
      >
        {/* hide scrollbar for webkit */}
        <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>

        {items.map((product, idx) => (
          <div key={idx} className="min-w-[260px] max-w-[320px] md:max-w-[400px] flex-shrink-0">
            <ProductCard
              title={product.title}
              description={product.description}
              category={product.category}
              image={product.image}
              features={product.features}
              productCode={product.productCode}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
