import { useEffect, useState } from 'react'

// ---------------------------------------------------------------------

const TimerHooks = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      // change time every 1 second
      setTime((prevTime) => prevTime + 1)
    }, 1000) // 1000 ms = 1 second

    return () => clearInterval(timer)
  }, [])

  return <div>With hooks: {time}</div>
}

export default TimerHooks
