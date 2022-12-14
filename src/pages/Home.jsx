import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
// component
import Comment from '../components/comment/Comment'
import User from '../components/User'
import TimerHooks from '../components/timer/TimerHooks'
import TimerClass from '../components/timer/TimerClass'
import RealTimeClock from '../components/RealTimeClock'
import FormInput from '../components/FormInput'
import UnsplashSearch from '../components/UnsplashSearch'
import FunctionHooks from '../components/FunctionHooks'
import ReduxCounter from '../components/ReduxCounter'
import ModalTest from '../components/modal/ModalTest'

// ---------------------------------------------------------------------

const Home = () => {
  return (
    <>
      <Typography gutterBottom variant="h3" component="div">
        Bootcamp Batch 3
      </Typography>
      <Typography variant="h5" component="span">
        Syam Haidar
      </Typography>

      <Box
        sx={{
          borderBottom: '1px solid #444',
          width: '35%',
          margin: '40px 0',
        }}
      />

      <Stack direction="column" spacing={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Modal portal
            </Typography>
            {/* Modal component */}
            <ModalTest />
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Redux Counter
            </Typography>
            {/* ReduxCounter component */}
            <ReduxCounter />
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
              Function Hoooks
            </Typography>
            {/* FunctionHooks component */}
            <FunctionHooks />
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Unsplash search
            </Typography>
            {/* UnsplashSearch component */}
            <UnsplashSearch />
          </CardContent>
        </Card>

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
