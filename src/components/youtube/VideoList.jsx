// @mui
import { Stack } from '@mui/material'
//
import VideoItem from './VideoItem'

// ---------------------------------------------------------------------

const VideoList = ({ video, handleSelect }) => {
  const videos = video.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} handleSelect={handleSelect} />
  })

  return (
    <Stack direction="column" spacing={1} sx={{ flex: 'auto' }}>
      {videos}
    </Stack>
  )
}

export default VideoList
