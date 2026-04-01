import { Link } from 'react-router-dom'
import CountdownTimer from '../ui/CountdownTimer'
import { dealProducts } from '../../data/mockData'

export default function DealsSection() {
  return (
    <div className="bg-white rounded border border-gray-100 p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="section-title mb-0">Deals and offers</h2>
          <p className="text-xs text-gray-400">Hygiene equipments</p>
          <CountdownTimer />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {dealProducts.map(product => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="flex flex-col items-center text-center hover:opacity-80 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded mb-2"
            />
            <p className="text-xs text-gray-700 mb-1">{product.name}</p>
            <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded">
              -{product.discount}%
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}