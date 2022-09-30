// @mui
import { CardMedia, Stack, Typography } from '@mui/material'

// ---------------------------------------------------------------------

const VideoItem = ({ video, handleSelect }) => {
  return (
    <Stack
      onClick={() => handleSelect(video)}
      direction="row"
      alignItems="flex-start"
      spacing={2}
      sx={{ cursor: 'pointer' }}
    >
      <CardMedia
        component="img"
        image={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
        sx={{ width: 151 }}
      />
      <Stack direction="column" spacing={1}>
        <Typography
          component="div"
          variant="subtitle1"
          sx={{
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '2',
          }}
        >
          {video.snippet.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          {video.snippet.channelTitle}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default VideoItem
