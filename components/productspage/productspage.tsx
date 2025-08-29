"use client";

import { useSearchParams } from "next/navigation";
import products from "@/lib/products";
import { ProductCard, CallToActionCard } from "@/components/product-card";
import Link from "next/link";
import "./global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function getCategories() {
  const set = new Set<string>();
  for (const p of products) set.add(p.category);
  return Array.from(set).sort();
}

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const categories = getCategories();

  const activeCategory = searchParams.get("category") || "All";
  const q = (searchParams.get("q") || "").trim();
  const sort =
    (searchParams.get("sort") as "featured" | "name-asc" | "category") ||
    "featured";

  const buildHref = (
    params: Partial<{ category?: string; q?: string; sort?: string }>
  ) => {
    const sp = new URLSearchParams(searchParams.toString());

    if (params.category === undefined) {
      sp.delete("category");
    } else if (params.category) {
      sp.set("category", params.category);
    }

    if (params.q !== undefined) {
      params.q ? sp.set("q", params.q) : sp.delete("q");
    }

    if (params.sort !== undefined) {
      params.sort && params.sort !== "featured"
        ? sp.set("sort", params.sort)
        : sp.delete("sort");
    }

    const qs = sp.toString();
    return `/products${qs ? `?${qs}` : ""}`;
  };

  const base =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);
  const searched = q
    ? base.filter((p) => {
        const haystack = [
          p.title,
          p.description,
          p.category,
          p.productCode,
          ...(p.features || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return haystack.includes(q.toLowerCase());
      })
    : base;

  const filtered = [...searched].sort((a, b) => {
    if (sort === "name-asc")
      return (a.title || "").localeCompare(b.title || "");
    if (sort === "category")
      return (a.category || "").localeCompare(b.category || "");
    return 0; // "featured" keeps original order
  });

  return (
    <main className="py-10 px-6 md:px-10 max-w-[1600px] mx-auto">
      <Header />
      <header className="mb-6 mt-16 text-center md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-balance">
          All Products
        </h1>
        <p className="text-muted-foreground mt-2">
          Browse by category, search, or sort the full catalog.
        </p>
      </header>

      {/* Filters bar */}
      <div className="md:sticky md:top-0 z-20 -mx-6 md:-mx-10 mb-6 border-b bg-background/90 md:backdrop-blur md:supports-[backdrop-filter]:bg-background/70">
        <div className="px-6 md:px-10 py-4 flex flex-col gap-4">
          {/* Categories */}
          <nav aria-label="Product categories" role="tablist">
            <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1">
              <CategoryPill
                label="All"
                active={activeCategory === "All"}
                href={buildHref({ category: undefined })}
              />
              {categories.map((c) => (
                <CategoryPill
                  key={c}
                  label={c}
                  active={activeCategory === c}
                  href={buildHref({ category: c })}
                />
              ))}
            </div>
          </nav>

          {/* Search + Sort */}
          <form
            action="/products"
            method="GET"
            className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
          >
            {activeCategory !== "All" && (
              <input type="hidden" name="category" value={activeCategory} />
            )}
            <input
              name="q"
              defaultValue={q}
              placeholder="Search products..."
              className="h-10 w-full max-w-xl rounded-md border px-3 text-sm"
            />

            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-muted-foreground">
                Sort
              </label>
              <select
                id="sort"
                name="sort"
                defaultValue={sort}
                className="h-10 rounded-md border px-3 text-sm"
              >
                <option value="featured">Most relevant</option>
                <option value="name-asc">Name: A–Z</option>
                <option value="category">Category</option>
              </select>

              <button
                type="submit"
                className="h-10 rounded-md bg-teal-600 px-4 text-sm text-white"
              >
                Apply
              </button>

              {(q || sort !== "featured") && (
                <Link
                  href={buildHref({ q: "", sort: "featured" })}
                  className="h-10 inline-flex items-center rounded-md border px-3 text-sm hover:bg-muted"
                >
                  Clear
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Meta info */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-medium text-foreground">{filtered.length}</span>{" "}
          {activeCategory !== "All" ? `items in ${activeCategory}` : "items"}
          {q ? ` matching “${q}”` : ""}
        </p>
      </div>

      {/* Product grid */}
      <section>
        {filtered.length === 0 ? (
          <EmptyState clearHref={buildHref({ q: "", sort: "featured" })} />
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
            <CallToActionCard />
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}

function CategoryPill({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "h-9 px-4 rounded-full bg-teal-600 text-white"
          : "h-9 px-4 rounded-full bg-muted hover:bg-muted/80"
      }
    >
      {label}
    </Link>
  );
}

function EmptyState({ clearHref }: { clearHref: string }) {
  return (
    <div className="rounded-xl border p-10 text-center">
      <h2 className="text-xl font-semibold">No products found</h2>
      <p className="text-sm text-muted-foreground mt-2">
        Try changing your search or clearing filters.
      </p>
      <div className="mt-4">
        <Link
          href={clearHref}
          className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-muted"
        >
          Clear filters
        </Link>
      </div>
    </div>
  );
}
