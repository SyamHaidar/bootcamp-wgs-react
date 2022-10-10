import { useEffect } from 'react'
import { faker } from '@faker-js/faker'
// redux
import { useDispatch, useSelector } from 'react-redux'
// redux actions
import { fetchPosts } from '../../redux/actions'
// @mui
import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
//
import PostUser from './PostUser'

// ---------------------------------------------------------------------

const PostList = () => {
  // to extract data from the Redux store state
  const posts = useSelector((state) => state.post)
  // returns a reference to the dispatch function from the Redux store
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Stack direction="column" spacing={1} sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {posts &&
        posts.map((post) => (
          <Box key={post.id} sx={{ padding: '16px' }}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Avatar src={faker.image.avatar()} alt="Profile pictures" />

              <Stack direction="column">
                {/* get userId from post list */}
                <PostUser userId={post.userId} />

                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body1" color="text.secondary">
                  {post.body}
                </Typography>
              </Stack>
            </Stack>
            <Divider component="div" sx={{ marginTop: '24px' }} />
          </Box>
        ))}
    </Stack>
  )
}

export default PostList
