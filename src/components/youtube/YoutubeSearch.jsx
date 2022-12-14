import { useState } from 'react'
// style
import { Box, Stack, TextField, Typography } from '@mui/material'
// service API
import youtubeAPI from '../../services/youtubeAPI'
// Youtube component
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import YoutubeIcon from './YoutubeIcon'

// ---------------------------------------------------------------------

const YoutubeSearch = () => {
  // search value
  const [search, setSearch] = useState('')
  // video data
  const [video, setVideo] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  // message
  const [messages, setMessages] = useState(null)

  const getSearch = async (e) => {
    try {
      e.preventDefault()
      // get video data from youtube APIs by query (q)
      const { data } = await youtubeAPI.get('/search', { params: { q: search } })
      // set video data from youtubeAPI.get
      setVideo(data.items)
    } catch (error) {
      // set error message
      setMessages(error.response.data.error.message)
      console.log(error.response.data.error.message)
    }
  }

  const handleSelectVideo = (video) => {
    setSelectedVideo(video)
  }

  return (
    <Stack direction="column" spacing={4}>
      {/* form input */}
      <Stack direction="row" alignItems="center" spacing={4} sx={{ marginTop: '12px' }}>
        <Box sx={{ height: '40px' }}>
          <YoutubeIcon />
        </Box>
        {/* search form */}
        <form onSubmit={getSearch} style={{ width: '100%' }}>
          <TextField
            label="Search"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: '100%' }}
          />
        </form>
      </Stack>

      {/* error message */}
      {messages && (
        <Typography variant="body2" color="text.secondary" component="div">
          The request cannot be completed because you have exceeded your{' '}
          <a href="https://developers.google.com/youtube/v3/getting-started#quota">quota</a>
        </Typography>
      )}

      {/* data video list */}
      <Stack direction="row" spacing={4} sx={{ height: '100vh', width: '100%' }}>
        {/* video detail component */}
        <VideoDetail video={selectedVideo} />
        {/* video list component */}
        <VideoList video={video} handleSelect={handleSelectVideo} />
      </Stack>
    </Stack>
  )
}

export default YoutubeSearch
