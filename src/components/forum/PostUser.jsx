import { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
// redux actions
import { fetchUser } from '../../redux/actions'
// @mui
import { Stack, Typography } from '@mui/material'

// ---------------------------------------------------------------------

const PostUser = ({ userId }) => {
  // to extract data from the Redux store state
  const users = useSelector((state) => state.user)
  // find users id same as userId
  const user = users.find((user) => user.id === userId)
  // returns a reference to the dispatch function from the Redux store
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser(userId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      {user && (
        <>
          <Typography variant="body1">{user.name}</Typography>
          <span>&middot;</span>
          <Typography variant="body1" color="text.secondary">
            {`@${user.username}`}
          </Typography>
        </>
      )}
    </Stack>
  )
}

export default PostUser
