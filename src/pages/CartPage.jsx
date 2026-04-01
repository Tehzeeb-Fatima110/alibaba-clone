import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { cartItems, savedForLater } from '../data/mockData'
import { ShoppingCart } from 'lucide-react'

export default function CartPage() {
  const [items, setItems] = useState(cartItems)
  const [coupon, setCoupon] = useState('')

  const subtotal = items.reduce((sum, i) => sum + i.price, 0)
  const discount = 60
  const tax = 14
  const total = subtotal - discount + tax

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id))

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <h1 className="text-lg font-bold mb-4">My cart ({items.length})</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Cart Items */}
          <div className="md:col-span-2 space-y-3">
            {items.map(item => (
              <div key={item.id} className="bg-white rounded border border-gray-100 p-4 flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded shrink-0"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    Size: {item.size}, Color: {item.color}, Material: {item.material}
                  </p>
                  <p className="text-xs text-gray-400">Seller: {item.seller}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                    <button className="text-xs text-secondary hover:underline">
                      Save for later
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <p className="font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                  <select className="border border-gray-200 rounded px-2 py-1 text-xs outline-none">
                    {[1, 2, 3, 5, 9, 10].map(n => (
                      <option key={n} defaultValue={item.qty}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}

            <div className="flex justify-between">
              <Link to="/products" className="text-sm text-secondary hover:underline">
                ← Back to shop
              </Link>
              <button
                onClick={() => setItems([])}
                className="text-sm text-red-500 hover:underline"
              >
                Remove all
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              {[["🔒", "Secure payment"], ["💬", "Customer support"], ["🚚", "Free delivery"]].map(([icon, label]) => (
                <div key={label} className="bg-white rounded border border-gray-100 p-2 flex items-center gap-2">
                  <span>{icon}</span>
                  <div>
                    <p className="text-xs font-medium">{label}</p>
                    <p className="text-xs text-gray-400">Have you ever finally just</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded border border-gray-100 p-4">
              <h3 className="font-semibold mb-3">Have a coupon?</h3>
              <div className="flex gap-2 mb-4">
                <input
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  placeholder="Add coupon"
                  className="flex-1 border border-gray-200 rounded px-2 py-1 text-sm outline-none"
                />
                <button className="btn-primary text-xs">Apply</button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Discount:</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax:</span>
                  <span>+${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white rounded py-2 font-semibold mt-4 hover:bg-green-700 transition">
                Checkout ({items.length} items)
              </button>
            </div>
          </div>
        </div>

        {/* Saved for Later */}
        <div className="mt-6">
          <h2 className="section-title">Saved for later</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {savedForLater.map(item => (
              <div key={item.id} className="bg-white rounded border border-gray-100 p-3 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-24 object-contain rounded mb-2 p-2"
                />
                <p className="font-semibold text-sm">${item.price.toFixed(2)}</p>
                <p className="text-xs text-gray-500 mb-2 line-clamp-2">{item.name}</p>
                <button className="flex items-center gap-1 text-xs text-secondary mx-auto hover:underline">
                  <ShoppingCart size={12} /> Move to cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="rounded bg-blue-600 text-white flex items-center justify-between p-4 mt-4 mb-4">
          <div>
            <p className="font-semibold">Super discount on more than 100 USD</p>
            <p className="text-xs opacity-70">Have you ever finally just write dummy info</p>
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary-dark">
            Shop now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}