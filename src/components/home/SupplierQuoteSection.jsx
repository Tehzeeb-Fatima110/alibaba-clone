import { useState } from 'react'
import quoteBg from '../../assets/Image/backgrounds/Group 982.png'

export default function SupplierQuoteSection() {
  const [item, setItem] = useState('')
  const [details, setDetails] = useState('')

  return (
    <div className="rounded overflow-hidden mb-4 grid grid-cols-1 md:grid-cols-2">
      {/* Left side */}
      <div
        className="p-6 flex flex-col justify-center min-h-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${quoteBg})` }}
      >
        <h2 className="text-xl font-bold text-white mb-2">
          An easy way to send requests to all suppliers
        </h2>
        <p className="text-sm text-white opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>

      {/* Right side - Form */}
      <div className="bg-white p-4 shadow">
        <h3 className="font-semibold text-sm mb-3">Send quote to suppliers</h3>
        <p className="text-xs text-gray-500 mb-1">What item you need?</p>
        <input
          value={item}
          onChange={e => setItem(e.target.value)}
          placeholder="Type item name"
          className="w-full border border-gray-200 rounded px-3 py-2 text-sm outline-none mb-2"
        />
        <textarea
          value={details}
          onChange={e => setDetails(e.target.value)}
          placeholder="Type more details"
          rows={2}
          className="w-full border border-gray-200 rounded px-3 py-2 text-sm outline-none mb-2 resize-none"
        />
        <div className="flex gap-2 mb-3">
          <input
            placeholder="Quantity"
            className="flex-1 border border-gray-200 rounded px-3 py-1.5 text-sm outline-none"
          />
          <select className="border border-gray-200 rounded px-2 py-1.5 text-sm outline-none">
            <option>Pcs</option>
            <option>Kg</option>
            <option>Box</option>
          </select>
        </div>
        <button className="btn-primary w-full">Send inquiry</button>
      </div>
    </div>
  )
}