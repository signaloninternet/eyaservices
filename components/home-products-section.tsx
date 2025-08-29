"use client";
import { useMemo, useRef } from "react";
import products from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () =>
      products
        .filter((p) => p.category === category)
        .slice(0, Math.max(0, limit - 1)),
    [category, limit]
  );

  const seeAllHref = `/products?category=${encodeURIComponent(category)}`;

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

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

      {/* Mobile: horizontal scroll with arrows */}
      <div className="relative md:hidden">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-6 overflow-x-auto pb-2 scroll-smooth"
        >
          {items.map((product, idx) => (
            <div
              key={idx}
              className="w-[320px] flex-shrink-0"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Left / Right Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop: simple 3-column grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {items.slice(0, 3).map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
}
