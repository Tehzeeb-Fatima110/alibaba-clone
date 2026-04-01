import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ProductCard from '../components/ui/ProductCard'
import { listingProducts } from '../data/mockData'
import { LayoutGrid, List, ChevronRight, ChevronLeft, X } from 'lucide-react'

const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"]
const features = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"]

export default function ProductListingPage() {
  const [view, setView] = useState('list')
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [activeFilters, setActiveFilters] = useState([])
  const [page, setPage] = useState(1)

  const toggleFilter = (val, setArr) => {
    setArr(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val])
    setActiveFilters(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val])
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 py-4">

        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <span>Clothings</span>
          <ChevronRight size={12} />
          <span className="text-gray-800">Men's wear</span>
        </div>

        <div className="flex gap-4">
          {/* Sidebar */}
          <aside className="hidden md:block w-48 shrink-0 space-y-3">

            {/* Category */}
            <div className="bg-white rounded border border-gray-100 p-3">
              <h3 className="font-semibold text-sm mb-2">Category</h3>
              {["Mobile accessory", "Electronics", "Smartphones", "Modern tech"].map(c => (
                <p key={c} className="text-xs text-gray-600 py-1 hover:text-primary cursor-pointer">
                  {c}
                </p>
              ))}
              <p className="text-xs text-secondary cursor-pointer mt-1">See all</p>
            </div>

            {/* Brands */}
            <div className="bg-white rounded border border-gray-100 p-3">
              <h3 className="font-semibold text-sm mb-2">Brands</h3>
              {brands.map(b => (
                <label key={b} className="flex items-center gap-2 text-xs py-0.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(b)}
                    onChange={() => toggleFilter(b, setSelectedBrands)}
                    className="accent-secondary"
                  />
                  {b}
                </label>
              ))}
              <p className="text-xs text-secondary cursor-pointer mt-1">See all</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded border border-gray-100 p-3">
              <h3 className="font-semibold text-sm mb-2">Features</h3>
              {features.map(f => (
                <label key={f} className="flex items-center gap-2 text-xs py-0.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(f)}
                    onChange={() => toggleFilter(f, setSelectedFeatures)}
                    className="accent-secondary"
                  />
                  {f}
                </label>
              ))}
              <p className="text-xs text-secondary cursor-pointer mt-1">See all</p>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded border border-gray-100 p-3">
              <h3 className="font-semibold text-sm mb-2">Price range</h3>
              <div className="flex gap-2 mb-2">
                <input
                  placeholder="Min"
                  className="w-full border border-gray-200 rounded px-2 py-1 text-xs outline-none"
                />
                <input
                  placeholder="Max"
                  className="w-full border border-gray-200 rounded px-2 py-1 text-xs outline-none"
                />
              </div>
              <button className="text-secondary text-xs hover:underline">Apply</button>
            </div>

            {/* Condition */}
            <div className="bg-white rounded border border-gray-100 p-3">
              <h3 className="font-semibold text-sm mb-2">Condition</h3>
              {["Any", "Refurbished", "Brand new", "Old items"].map((c, i) => (
                <label key={c} className="flex items-center gap-2 text-xs py-0.5 cursor-pointer">
                  <input
                    type="radio"
                    name="condition"
                    defaultChecked={i === 0}
                    className="accent-secondary"
                  />
                  {c}
                </label>
              ))}
            </div>

            {/* Ratings */}
            <div className="bg-white rounded border border-gray-100 p-3">
              <h3 className="font-semibold text-sm mb-2">Ratings</h3>
              {[5, 4, 3, 2].map(r => (
                <label key={r} className="flex items-center gap-1 text-xs py-0.5 cursor-pointer">
                  <input type="checkbox" className="accent-secondary" />
                  <span className="text-amber-400">
                    {'★'.repeat(r)}{'☆'.repeat(5 - r)}
                  </span>
                </label>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Top bar */}
            <div className="bg-white rounded border border-gray-100 p-3 flex items-center justify-between mb-3">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">12,911 items</span> in{' '}
                <span className="font-semibold">Mobile accessory</span>
              </p>
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-1 text-xs text-gray-600">
                  <input type="checkbox" className="accent-secondary" /> Verified only
                </label>
                <select className="border border-gray-200 rounded px-2 py-1 text-xs outline-none">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <div className="flex gap-1">
                  <button
                    onClick={() => setView('grid')}
                    className={`p-1 rounded ${view === 'grid' ? 'text-secondary' : 'text-gray-400'}`}
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`p-1 rounded ${view === 'list' ? 'text-secondary' : 'text-gray-400'}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {activeFilters.map(f => (
                  <span
                    key={f}
                    className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 text-xs"
                  >
                    {f}
                    <button
                      onClick={() => toggleFilter(f, setActiveFilters)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
                <button
                  onClick={() => {
                    setActiveFilters([])
                    setSelectedBrands([])
                    setSelectedFeatures([])
                  }}
                  className="text-xs text-secondary hover:underline"
                >
                  Clear all filter
                </button>
              </div>
            )}

            {/* Products */}
            <div className={view === 'grid'
              ? 'grid grid-cols-2 sm:grid-cols-3 gap-3'
              : 'space-y-3'
            }>
              {listingProducts.map(p => (
                <ProductCard key={p.id} product={p} variant={view} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end gap-2 mt-4">
              <span className="text-xs text-gray-500">Show</span>
              <select className="border border-gray-200 rounded px-2 py-1 text-xs outline-none">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                className="p-1 border border-gray-200 rounded hover:bg-gray-50"
              >
                <ChevronLeft size={14} />
              </button>
              {[1, 2, 3].map(n => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-7 h-7 text-xs rounded border ${page === n
                    ? 'bg-secondary text-white border-secondary'
                    : 'border-gray-200 hover:bg-gray-50'}`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage(p => Math.min(3, p + 1))}
                className="p-1 border border-gray-200 rounded hover:bg-gray-50"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}