// redux
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/actions/counterAction'
// @mui
import { Button, Stack, Typography } from '@mui/material'

// ---------------------------------------------------------------------

const ReduxCounter = () => {
  // to extract data from the Redux store state
  const counter = useSelector((state) => state.counter)
  // returns a reference to the dispatch function from the Redux store
  const dispatch = useDispatch()

  return (
    <Stack direction="row" alignItems="center" spacing={8}>
      <Stack direction="column" spacing={2}>
        {/* counter + 1 */}
        <Button onClick={() => dispatch(increment())} variant="outlined">
          INCREMENT
        </Button>
        {/* counter - 1 */}
        <Button onClick={() => dispatch(decrement())} variant="outlined">
          DECREMENT
        </Button>
        {/* counter = 0 */}
        <Button onClick={() => dispatch(reset())} variant="outlined" color="error">
          RESET
        </Button>
      </Stack>
      {/* counter value */}
      <Typography variant="h4">{counter}</Typography>
    </Stack>
  )
}

export default ReduxCounter
