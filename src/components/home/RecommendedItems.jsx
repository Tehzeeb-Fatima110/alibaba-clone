import { recommendedItems } from '../../data/mockData'
import ProductCard from '../ui/ProductCard'

export default function RecommendedItems() {
  return (
    <div className="mb-4">
      <h2 className="section-title">Recommended items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {recommendedItems.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}