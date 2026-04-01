import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export default function ProductCard({ product, variant = 'grid' }) {
  if (variant === 'list') {
    return (
      <div className="card p-4 flex gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-28 h-28 object-cover rounded shrink-0"
        />
        <div className="flex-1">
          <p className="font-semibold text-primary">${product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
          )}
          <div className="flex items-center gap-1 text-xs text-amber-500 mt-1">
            {'★'.repeat(Math.round(product.rating / 2))}
            <span className="text-gray-500">{product.rating} · {product.orders} orders</span>
          </div>
          {product.shipping && (
            <p className="text-xs text-green-600 mt-1">{product.shipping}</p>
          )}
          <p className="text-sm text-gray-700 mt-1">{product.name}</p>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</p>
          <Link
            to={`/products/${product.id}`}
            className="text-xs text-secondary hover:underline mt-2 block"
          >
            View details
          </Link>
        </div>
        <button className="self-start text-gray-400 hover:text-red-500">
          <Heart size={16} />
        </button>
      </div>
    )
  }

  return (
    <Link to={`/products/${product.id}`} className="card p-3 flex flex-col items-center text-center group">
      <div className="relative w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-36 object-cover rounded mb-2"
        />
        <button className="absolute top-2 right-2 text-gray-300 hover:text-red-500">
          <Heart size={14} />
        </button>
      </div>
      <p className="font-semibold text-gray-900 text-sm">${product.price.toFixed(2)}</p>
      {product.originalPrice && (
        <p className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
      )}
      {product.rating && (
        <div className="flex items-center gap-1 text-xs text-amber-500 mt-0.5">
          {'★'.repeat(Math.round(product.rating / 2))}
          <span className="text-gray-400">{product.rating}</span>
        </div>
      )}
      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.name}</p>
    </Link>
  )
}