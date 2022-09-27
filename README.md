# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Bootcamp WGS React

Today lesson

- Form Input

### Demo page

[https://syamhaidar.github.io/react-wgs/](https://syamhaidar.github.io/react-wgs/)

## Script

#### FormInput.jsx

Example

```js
import { useState } from 'react'

const FormInput = () => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Data was input: ${value}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormInput
```
