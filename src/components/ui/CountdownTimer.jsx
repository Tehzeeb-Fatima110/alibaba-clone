import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: 4, hours: 13, mins: 34, secs: 56 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { days, hours, mins, secs } = prev
        secs--
        if (secs < 0) { secs = 59; mins-- }
        if (mins < 0) { mins = 59; hours-- }
        if (hours < 0) { hours = 23; days-- }
        return { days, hours, mins, secs }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = n => String(n).padStart(2, '0')

  return (
    <div className="flex gap-1 mt-1">
      {[['Days', time.days], ['Hour', time.hours], ['Min', time.mins], ['Sec', time.secs]].map(([label, val]) => (
        <div key={label} className="bg-primary text-white text-center px-1 py-0.5 rounded text-xs min-w-[32px]">
          <div className="font-bold text-sm">{pad(val)}</div>
          <div className="text-[9px]">{label}</div>
        </div>
      ))}
    </div>
  )
}