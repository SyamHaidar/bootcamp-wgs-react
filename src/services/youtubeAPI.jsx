import axios from 'axios'

// Replace key with your own KEY
// https://developers.google.com/youtube/v3/docs
const KEY = 'YOUR_API_KEY'

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY,
  },
})

export default youtube
