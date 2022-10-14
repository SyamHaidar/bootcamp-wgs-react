import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
// layout
import Navbar from './layouts/Navbar'
// page
import Home from './pages/Home'
import Youtube from './pages/Youtube'
import Forum from './pages/Forum'
import Employee from './pages/Employee'
import EmployeeDetail from './pages/EmployeeDetail'
import EmployeeForm from './components/employee/employeeForm'

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
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/employee/add" element={<EmployeeForm />} />
            <Route path="/employee/:id" element={<EmployeeDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
