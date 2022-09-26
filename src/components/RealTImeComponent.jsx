import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

// ---------------------------------------------------------------------

const RealTimeClock = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      // current time
      const dateTime = new Date().toLocaleTimeString()
      // change time every 1 second
      setTime(dateTime)
    }, 1000) // 1000 ms = 1 second

    return () => clearInterval(timer)
  }, [])

  return <Typography variant="h4">{time}</Typography>
}

export default RealTimeClock
