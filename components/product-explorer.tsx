"use client"
import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"

type Product = {
  id: string | number
  name: string
  description?: string
  image?: string
  price?: number
  category?: string
  // add other fields if your data has them (rating, tags, etc.)
}

export function ProductExplorer({
  products,
  categories,
}: {
  products: Product[]
  categories: string[]
}) {
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<"popular" | "price-asc" | "price-desc" | "name-asc">("popular")

  // Tabs value: "all" or a specific category
  const [tab, setTab] = useState<string>("all")

  const filtered = useMemo(() => {
    const byTab =
      tab === "all" ? products : products.filter((p) => (p.category || "").toLowerCase() === tab.toLowerCase())

    const byQuery = query.trim()
      ? byTab.filter((p) =>
          [p.name, p.description, p.category].filter(Boolean).join(" ").toLowerCase().includes(query.toLowerCase()),
        )
      : byTab

    const sorted = [...byQuery].sort((a, b) => {
      if (sort === "name-asc") return (a.name || "").localeCompare(b.name || "")
      if (sort === "price-asc") return (a.price ?? Number.POSITIVE_INFINITY) - (b.price ?? Number.POSITIVE_INFINITY)
      if (sort === "price-desc") return (b.price ?? 0) - (a.price ?? 0)
      // "popular" fallback: keep original order
      return 0
    })

    return sorted
  }, [products, tab, query, sort])

  return (
    <section className="space-y-4">
      {/* Controls */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex-1 max-w-md">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            aria-label="Search products"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground" aria-live="polite">
            {filtered.length} items
          </span>
          <Select value={sort} onValueChange={(v: any) => setSort(v)}>
            <SelectTrigger className="w-40" aria-label="Sort products">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most relevant</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Name: A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="w-full overflow-x-auto justify-start">
          <TabsTrigger value="all">All</TabsTrigger>
          {categories.map((c) => (
            <TabsTrigger key={c} value={c.toLowerCase()}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content is shared; we keep a single grid and respond to `tab` state */}
        <TabsContent value={tab} className="mt-4">
          <div
            className="
              grid gap-4
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
            "
            role="list"
            aria-label="Products grid"
          >
            {filtered.map((p) => (
              <div key={p.id} role="listitem">
                <ProductCard
                  title={p.name}
                  description={p.description ?? ""}
                  category={p.category ?? ""}
                  image={p.image}
                  // Add other props if needed, e.g. features, whatsappNumber, productCode
                />
              </div>
            ))}
          </div>
        </TabsContent>
        {/* Also render content for 'all' to satisfy accessibility if tab === 'all' */}
        <TabsContent value="all" className="mt-4">
          <div
            className="
              grid gap-4
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
            "
            role="list"
            aria-label="Products grid"
          >
            {filtered.map((p) => (
              <div key={p.id} role="listitem">
                <ProductCard
                  title={p.name}
                  description={p.description ?? ""}
                  category={p.category ?? ""}
                  image={p.image}
                  // Add other props if needed, e.g. features, whatsappNumber, productCode
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
