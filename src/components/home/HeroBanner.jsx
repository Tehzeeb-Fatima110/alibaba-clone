import { Link } from 'react-router-dom'
import { categories } from '../../data/mockData'
import heroBg from '../../assets/Image/backgrounds/Banner-board-800x420 2.png'

export default function HeroBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
      {/* Sidebar Categories */}
      <div className="hidden md:block bg-white rounded border border-gray-100 p-3">
        <ul className="space-y-1 text-sm text-gray-700">
          {categories.map(cat => (
            <li
              key={cat}
              className="py-1 hover:text-primary cursor-pointer border-b border-gray-50 last:border-0"
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Banner */}
      <div
        className="md:col-span-2 rounded p-6 flex flex-col justify-center min-h-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <p className="text-sm text-gray-600 mb-1">Latest trending</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Electronic items</h2>
        <button className="btn-primary self-start">Learn more</button>
      </div>

      {/* Right panel */}
      <div className="flex flex-col gap-2 text-sm">
        <div className="bg-white rounded border p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
              Hi
            </div>
            <span className="text-gray-600 text-xs">Hi, user<br />let's get started</span>
          </div>
          <button className="btn-primary w-full mb-1 text-xs">Join now</button>
          <button className="w-full border border-secondary text-secondary rounded py-1 text-xs hover:bg-blue-50">
            Log in
          </button>
        </div>
        <div className="bg-orange-500 text-white rounded p-2 text-xs">
          Get US $10 off with a new supplier
        </div>
        <div className="bg-teal-600 text-white rounded p-2 text-xs">
          Send quotes with supplier preferences
        </div>
      </div>
    </div>
  )
}