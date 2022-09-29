import { createRef, useState } from 'react'
// style
import { Box, Stack, TextField } from '@mui/material'
// service API
import unsplash from '../services/unsplash'
import { useEffect } from 'react'

// ---------------------------------------------------------------------

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

const UnsplashSearch = () => {
  // search value
  const [search, setSearch] = useState('')
  // image data
  const [image, setImage] = useState([])

  const getSearch = async (e) => {
    e.preventDefault()

    // get image data from unsplash
    const { data } = await unsplash.get('/search/photos', { params: { query: search } })
    // fill image data from unsplash.get
    setImage(data.results)
  }

  return (
    <Stack direction="column" spacing={4}>
      {/* form input */}
      <Box sx={{ marginTop: '12px' }}>
        <form onSubmit={getSearch}>
          <TextField
            label="Search"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: '100%' }}
          />
        </form>
      </Box>

      {/* data list */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gridGap: '0 10px',
          gridAutoRows: '10px',
        }}
      >
        {image && image.map((item, index) => <ImgCard key={index} image={item} />)}
      </Box>
    </Stack>
  )
}

export default UnsplashSearch
