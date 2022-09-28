# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Bootcamp WGS React

Today lesson

- Form Input

### Demo page

[https://syamhaidar.github.io/react-wgs/](https://syamhaidar.github.io/react-wgs/)

## Script

Example

#### UnsplashSearch.jsx

```js
// service API
import client from './client'

const UnsplashSearch = () => {
  // seacrh value
  const [search, setSearch] = useState('')
  // image data
  const [image, setImage] = useState([])

  const getSearch = async (str) => {
    // get image data from unsplash / client
    const { data } = await client.get('/search/photos', { params: { query: str } })
    // fill image data from client get
    setImage(data.results)
  }

  const handleSearch = (e) => {
    // when seacrh value change get search image
    setSearch(e.target.value)
    getSearch(e.target.value)
  }

  return (
    <>
      {/* form input */}
      <Input placeholder="Search" required value={search} onChange={handleSearch} />

      {/* data list */}
      {image &&
        image.map((item, index) => (
          <img
            key={index}
            src={item.urls.regular}
            alt={item.alt_description}
            style={{
              // inline style <img />
              height: '200px',
              width: 'auto',
              objectFit: 'cover',
              flexShrink: 0,
              marginRight: '8px',
              marginBottom: '8px',
            }}
          />
        ))}
    </>
  )
}

export default UnsplashSearch
```
