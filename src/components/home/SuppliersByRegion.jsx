import { supplierRegions } from '../../data/mockData'

export default function SuppliersByRegion() {
  return (
    <div className="bg-white rounded border border-gray-100 p-4 mb-4">
      <h2 className="section-title">Suppliers by region</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {supplierRegions.map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 cursor-pointer hover:text-primary"
          >
            <img src={r.flag} alt={r.country} className="w-6 h-4 object-cover rounded-sm" />
            <div>
              <p className="text-xs font-medium">{r.country}</p>
              <p className="text-xs text-gray-400">{r.url}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}