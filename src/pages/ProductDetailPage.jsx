import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Heart, ChevronRight, CheckCircle } from 'lucide-react'
import { recommendedItems } from '../data/mockData'

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 py-4">

        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <Link to="/products" className="hover:text-primary">Clothings</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800">Summer clothing</span>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded border border-gray-100 p-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Images */}
            <div>
              <img
                src="/src/assets/Layout/alibaba/Image/cloth/2 1.png"
                alt="Product"
                className="w-full rounded mb-3 object-cover h-64"
              />
              <div className="flex gap-2">
                {[
                  '/src/assets/Layout/alibaba/Image/cloth/2 1.png',
                  '/src/assets/Layout/alibaba/Image/cloth/Bitmap.png',
                  '/src/assets/Layout/alibaba/Image/cloth/Bitmap (2).png',
                  '/src/assets/Layout/alibaba/Image/cloth/image 24.png',
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="thumb"
                    className="w-12 h-12 object-cover rounded border-2 border-transparent hover:border-secondary cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center gap-1 text-green-600 text-xs mb-1">
                <CheckCircle size={12} /> In stock
              </div>
              <h1 className="font-bold text-gray-900 text-lg mb-2">
                Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
              </h1>
              <div className="flex items-center gap-2 text-sm mb-3">
                <span className="text-amber-400">★★★★★</span>
                <span className="text-gray-500">9.3 · 32 reviews · 154 sold</span>
              </div>

              {/* Pricing tiers */}
              <div className="flex gap-1 mb-3">
                {[
                  { range: '50-100 pcs', price: '$98.00', active: true },
                  { range: '100-700 pcs', price: '$90.00' },
                  { range: '700+ pcs', price: '$78.00' }
                ].map(tier => (
                  <div
                    key={tier.range}
                    className={`border rounded p-2 text-xs flex-1 text-center ${tier.active
                      ? 'border-primary bg-orange-50'
                      : 'border-gray-200'}`}
                  >
                    <p className={`font-bold ${tier.active ? 'text-primary' : ''}`}>{tier.price}</p>
                    <p className="text-gray-500">{tier.range}</p>
                  </div>
                ))}
              </div>

              {[
                ["Price", "Negotiable"],
                ["Type", "Classic shoes"],
                ["Material", "Plastic material"],
                ["Design", "Modern nice"],
                ["Customization", "Customized logo and design"],
                ["Protection", "Refund Policy"],
                ["Warranty", "2 years full warranty"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4 text-sm py-1 border-b border-gray-50">
                  <span className="text-gray-400 w-28 shrink-0">{k}</span>
                  <span className="text-gray-800">{v}</span>
                </div>
              ))}
            </div>

            {/* Supplier */}
            <div>
              <div className="border border-gray-100 rounded p-3 mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-500 text-white rounded flex items-center justify-center font-bold text-sm">
                    R
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Supplier</p>
                    <p className="text-xs text-gray-600">Guanjoi Trading LLC</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500 space-y-1 mb-3">
                  <p>🇩🇪 Germany, Berlin</p>
                  <p className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500" /> Verified Seller
                  </p>
                  <p>🌍 Worldwide shipping</p>
                </div>
                <button className="btn-primary w-full mb-2 text-xs">Send inquiry</button>
                <button className="w-full border border-secondary text-secondary rounded py-1.5 text-xs hover:bg-blue-50">
                  Seller's profile
                </button>
              </div>
              <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500">
                <Heart size={14} /> Save for later
              </button>

              {/* You may like */}
              <div className="mt-4">
                <p className="text-xs font-semibold mb-2">You may like</p>
                <div className="space-y-2">
                  {recommendedItems.slice(0, 5).map(item => (
                    <Link
                      key={item.id}
                      to={`/products/${item.id}`}
                      className="flex items-center gap-2 hover:text-primary"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div>
                        <p className="text-xs line-clamp-1">{item.name}</p>
                        <p className="text-xs text-gray-400">${item.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded border border-gray-100 p-4 mb-4">
          <div className="flex gap-4 border-b border-gray-100 mb-4">
            {['description', 'reviews', 'shipping', 'about seller'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm pb-2 border-b-2 capitalize ${activeTab === tab
                  ? 'border-secondary text-secondary'
                  : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeTab === 'description' && (
            <div>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <table className="w-full text-xs border border-gray-100 mb-4">
                <tbody>
                  {[
                    ["Model", "#8786867"],
                    ["Style", "Classic style"],
                    ["Certificate", "ISO-898921212"],
                    ["Size", "34mm x 450mm x 19mm"],
                    ["Memory", "36GB RAM"]
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-gray-50">
                      <td className="bg-gray-50 px-3 py-2 font-medium w-32">{k}</td>
                      <td className="px-3 py-2 text-gray-600">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className="bg-white rounded border border-gray-100 p-4 mb-4">
          <h2 className="section-title">Related products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {recommendedItems.slice(0, 6).map(p => (
              <Link key={p.id} to={`/products/${p.id}`} className="text-center hover:opacity-80">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-24 object-cover rounded mb-1"
                />
                <p className="text-xs text-gray-600 line-clamp-1">{p.name}</p>
                <p className="text-xs text-gray-400">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="rounded bg-blue-600 text-white flex items-center justify-between p-4 mb-4">
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