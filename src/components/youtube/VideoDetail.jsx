// @mui
import { CardMedia, Stack, Typography } from '@mui/material'

// ---------------------------------------------------------------------

const VideoDetail = ({ video }) => {
  return (
    <>
      {video && (
        <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
          <CardMedia
            component="iframe"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            autoplay
            sx={{ height: '100%' }}
          />
          <Stack direction="column" spacing={1}>
            <Typography component="div" variant="h6">
              {video.snippet.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" component="div">
              {video.snippet.description}
            </Typography>
          </Stack>
        </Stack>
      )}
    </>
  )
}

export default VideoDetail
