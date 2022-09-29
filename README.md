# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Bootcamp WGS React

Today lesson

- createRef()

### Demo page

[https://syamhaidar.github.io/react-wgs/](https://syamhaidar.github.io/react-wgs/)

## Script

Example

#### UnsplashSearch.jsx

```js
import { createRef, useState, useEffect } from 'react'

const ImgCard = ({ image }) => {
  const [span, setSpan] = useState(0)

  const imgRef = createRef()

  useEffect(() => {
    const setSpans = () => {
      const height = imgRef.current.clientHeight
      const spans = Math.ceil(height / 10)
      setSpan(spans)
    }

    if (imgRef && imgRef.current) {
      imgRef.current.addEventListener('load', setSpans)
    }
  }, [imgRef, span])

  return (
    <img
      ref={imgRef}
      src={image.urls.regular}
      alt={image.alt_description}
      style={{
        width: '100%',
        gridRowEnd: `span ${span}`,
      }}
    />
  )
}
```
