export default function StarRating({ rating, maxRating = 10 }) {
  const stars = Math.round((rating / maxRating) * 5)
  return (
    <div className="flex items-center gap-0.5 text-xs">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < stars ? 'text-amber-400' : 'text-gray-300'}>★</span>
      ))}
      <span className="text-gray-500 ml-1">{rating}</span>
    </div>
  )
}