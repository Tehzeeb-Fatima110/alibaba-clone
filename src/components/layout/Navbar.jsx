import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingCart, User, MessageSquare, Heart, Menu, ChevronDown } from 'lucide-react'
import { categories } from '../../data/mockData'
import logo from '../../assets/Layout/Brand/logo-colored.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center gap-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 shrink-0">
          <img src={logo} alt="Brand" className="h-8" />
        </Link>

        {/* Search */}
        <div className="flex flex-1 border border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="flex-1 px-3 py-2 text-sm outline-none"
          />
          <select className="border-l border-gray-300 px-2 text-xs text-gray-600 outline-none hidden md:block">
            <option>All category</option>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
          <button className="btn-primary rounded-none px-4">Search</button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 shrink-0 text-gray-600">
          <Link to="#" className="flex flex-col items-center text-xs hidden md:flex">
            <User size={18} /><span>Profile</span>
          </Link>
          <Link to="#" className="flex flex-col items-center text-xs hidden md:flex">
            <MessageSquare size={18} /><span>Message</span>
          </Link>
          <Link to="#" className="flex flex-col items-center text-xs hidden md:flex">
            <Heart size={18} /><span>Orders</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center text-xs relative">
            <ShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            <span className="hidden md:block">My cart</span>
          </Link>
        </div>
      </div>

      {/* Nav links */}
      <div className="border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-1">
          <div className="flex items-center gap-4 text-sm text-gray-700">
            <button
              className="flex items-center gap-1 font-medium"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu size={16} /> All category
            </button>
            <Link to="#" className="hidden md:block hover:text-primary">Hot offers</Link>
            <Link to="#" className="hidden md:block hover:text-primary">Gift boxes</Link>
            <Link to="#" className="hidden md:block hover:text-primary">Projects</Link>
            <Link to="#" className="hidden md:block hover:text-primary">Menu item</Link>
            <Link to="#" className="hidden md:block hover:text-primary flex items-center gap-1">
              Help <ChevronDown size={14} />
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="hidden md:block">English, USD</span>
            <span className="hidden md:block">Ship to 🇩🇪</span>
          </div>
        </div>
      </div>

      {/* Category dropdown */}
      {menuOpen && (
        <div className="absolute bg-white border border-gray-200 shadow-lg rounded mt-1 ml-4 z-50 w-56">
          {categories.map(cat => (
            <Link
              key={cat}
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              {cat}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}