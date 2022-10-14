import logo from '../wgs.svg'
import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

// ---------------------------------------------------------------------

const Navbar = () => {
  const MENU = [
    { to: '/', name: 'Home' },
    { to: '/employee', name: 'Employee' },
    { to: '/forum', name: 'Forum' },
    { to: '/youtube', name: 'Yotube' },
  ]

  return (
    <Box
      sx={{
        position: 'fixed',
        height: '64px',
        width: '100%',
        backgroundColor: '#222',
        color: '#fff',
        zIndex: 99,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: '100%', margin: '0 32px' }}
      >
        <img src={logo} alt="logo" height={24} />
        <Stack direction="row" alignItems="center" spacing={3}>
          {MENU.map((item) => (
            <Typography
              key={item.name}
              component={Link}
              to={item.to}
              variant="h6"
              sx={{ color: 'white', textDecoration: 'none' }}
            >
              {item.name}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar
