import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
// layout
import Navbar from './layouts/Navbar'
// page
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Youtube from './pages/Youtube'

// ---------------------------------------------------------------------

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <div className="App" style={{ padding: '128px 0 40px', margin: '0 32px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/youtube" element={<Youtube />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
