// ---------------------------------------------------------------------

import { useState } from 'react'

const FunctionHooks = () => {
  const [color, setColor] = useState('red')
  return (
    <>
      <h1>
        My favorite color is <span style={{ color: color }}>{color}</span>
      </h1>
      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('pink')}>Pink</button>
      <button onClick={() => setColor('green')}>Green</button>
    </>
  )
}

export default FunctionHooks
