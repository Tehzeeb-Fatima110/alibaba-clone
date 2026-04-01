import img1 from '../../assets/Image/backgrounds/image 98.png'
import img2 from '../../assets/Image/backgrounds/image 106.png'
import img3 from '../../assets/Image/backgrounds/image 107.png'
import img4 from '../../assets/Image/backgrounds/Group 969.png'

const services = [
  { img: img1, title: "Source from Industry Hubs" },
  { img: img2, title: "Customize Your Products" },
  { img: img3, title: "Fast, reliable shipping by ocean or air" },
  { img: img4, title: "Product monitoring and inspection" },
]

export default function ExtraServices() {
  return (
    <div className="mb-4">
      <h2 className="section-title">Our extra services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {services.map(s => (
          <div key={s.title} className="card p-0 overflow-hidden group cursor-pointer">
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-24 object-cover group-hover:scale-105 transition-transform"
            />
            <p className="text-xs font-medium text-gray-700 p-2">{s.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}