import { Link } from 'react-router-dom'
import { homeOutdoor } from '../../data/mockData'
import homeBg from '../../assets/Image/backgrounds/Mask group.png'

export default function HomeOutdoorSection() {
  return (
    <div className="bg-white rounded border border-gray-100 mb-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Left Banner */}
        <div
          className="p-4 flex flex-col justify-between min-h-[160px] bg-cover bg-center"
          style={{ backgroundImage: `url(${homeBg})` }}
        >
          <div>
            <h2 className="font-bold text-gray-900 mb-1">Home and outdoor</h2>
          </div>
          <Link to="/products" className="btn-orange self-start text-xs">
            Source now
          </Link>
        </div>

        {/* Products Grid */}
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-gray-100">
          {homeOutdoor.map(item => (
            <Link
              to={`/products/${item.id}`}
              key={item.id}
              className="p-3 flex gap-2 hover:bg-gray-50 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 object-cover rounded shrink-0"
              />
              <div>
                <p className="text-xs font-medium text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-400">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}