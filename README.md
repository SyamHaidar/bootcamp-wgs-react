# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Bootcamp WGS React

Today lesson

- Real Time Clock

### Demo page

[https://syamhaidar.github.io/react-wgs/](https://syamhaidar.github.io/react-wgs/)

## Script

#### RealTimeClock.jsx

```js
import { useEffect, useState } from 'react'

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

  return <div>{time}</div>
}

export default RealTimeClock
```
