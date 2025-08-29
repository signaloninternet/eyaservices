import HomeProductsSection from "@/components/home-products-section"

export default function HomeProductsSectionsWrapper() {
  return (
    <div className="space-y-8">
      <HomeProductsSection title="First Aid Essentials" category="First Aid" limit={5} />
      <HomeProductsSection title="Daily Nutrition" category="Nutrition" limit={5} />
      <HomeProductsSection title="Incontinence Care" category="Incontinence" limit={5} />
    </div>
  )
}
