import { Card, CardContent, Stack, Typography } from '@mui/material'
// component
import Comment from '../components/Comment'
import User from '../components/User'
import TimerHooks from '../components/TimerHooks'
import TimerClass from '../components/TimerClass'
import RealTimeClock from '../components/RealTimeClock'
import FormInput from '../components/FormInput'

// ---------------------------------------------------------------------

const Home = () => {
  return (
    <>
      <h2>Bootcamp Batch 3</h2>
      <span>Syam Haidar</span>

      <div
        style={{
          borderBottom: '1px solid #444',
          width: '35%',
          margin: '40px 0',
        }}
      />

      <Stack direction="column" spacing={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Form Input
            </Typography>
            {/* FormInput component */}
            <FormInput />
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Real Time Clock
            </Typography>
            {/* RealTimeClock component */}
            <RealTimeClock />
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Timer
            </Typography>
            {/* timer hooks component */}
            <TimerHooks />
            {/* timer class component */}
            <TimerClass />
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Props
            </Typography>
            {/* user component */}
            <User name="Adit" age="30" />
            <User name="Gilby" age="20" />
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Semantic UI | Faker Js
            </Typography>
            {/* comment component */}
            <Comment />
          </CardContent>
        </Card>
      </Stack>
    </>
  )
}

export default Home
