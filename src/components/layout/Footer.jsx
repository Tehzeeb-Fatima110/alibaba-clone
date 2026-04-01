import { Link } from 'react-router-dom'
import logo from '../../assets/Layout/Brand/logo-colored.png'
import appStore from '../../assets/Layout/Misc/market-button.png'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8">
      {/* Newsletter */}
      <div className="bg-gray-50 py-6 text-center">
        <h3 className="font-semibold text-gray-800 mb-1">Subscribe on our newsletter</h3>
        <p className="text-sm text-gray-500 mb-3">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="✉ Email"
            className="border border-gray-300 rounded px-3 py-2 text-sm outline-none w-56"
          />
          <button className="btn-primary">Subscribe</button>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-6 gap-6">
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="Brand" className="h-8 mb-2" />
          <p className="text-xs text-gray-500 mb-3">
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="flex gap-2 text-gray-400 text-sm">
            {['f', 't', 'in', 'ig', 'yt'].map(s => (
              <span
                key={s}
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs cursor-pointer hover:border-secondary hover:text-secondary"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {[
          { title: "About", links: ["About Us", "Find store", "Categories", "Blogs"] },
          { title: "Partnership", links: ["About Us", "Find store", "Categories", "Blogs"] },
          { title: "Information", links: ["Help Center", "Money Refund", "Shipping", "Contact us"] },
          { title: "For users", links: ["Login", "Register", "Settings", "My Orders"] },
        ].map(col => (
          <div key={col.title}>
            <h4 className="font-semibold text-sm mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map(l => (
                <li key={l}>
                  <Link to="#" className="text-xs text-gray-500 hover:text-primary">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-semibold text-sm mb-3">Get app</h4>
          <img src={appStore} alt="App Store" className="w-full mb-2 cursor-pointer" />
        </div>
      </div>

      <div className="border-t border-gray-100 py-3 px-4 flex justify-between items-center text-xs text-gray-400 max-w-screen-xl mx-auto">
        <span>© 2023 Ecommerce.</span>
        <span>🇺🇸 English ▲</span>
      </div>
    </footer>
  )
}