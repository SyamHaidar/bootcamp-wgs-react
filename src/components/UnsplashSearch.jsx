import { useState } from 'react'
// style
import { Stack, TextField } from '@mui/material'
// service API
import unsplash from '../services/unsplash'

// ---------------------------------------------------------------------

const UnsplashSearch = () => {
  // search value
  const [search, setSearch] = useState('')
  // image data
  const [image, setImage] = useState([])

  const getSearch = async (str) => {
    // get image data from unsplash
    const { data } = await unsplash.get('/search/photos', { params: { query: str } })
    // fill image data from unsplash.get
    setImage(data.results)
  }

  const handleSearch = (e) => {
    // when seacrh value change get search image
    setSearch(e.target.value)
    getSearch(e.target.value)
  }

  return (
    <Stack direction="column" spacing={4}>
      {/* form input */}
      <Stack direction="column" spacing={2} sx={{ marginTop: '12px' }}>
        <TextField label="Search" required value={search} onChange={handleSearch} />
      </Stack>

      {/* data list */}
      <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
        {image &&
          image.map((item, index) => (
            <img
              key={index}
              src={item.urls.regular}
              alt={item.alt_description}
              style={{
                height: '200px',
                width: 'auto',
                objectFit: 'cover',
                flexShrink: 0,
                marginRight: '8px',
                marginBottom: '8px',
              }}
            />
          ))}
      </Stack>
    </Stack>
  )
}

export default UnsplashSearch
