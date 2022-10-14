// @mui
import { IconButton, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
//
import EmployeeList from '../components/employee/EmployeeList'

// ----------------------------------------------------------------------

const Employee = () => {
  return (
    <Stack direction="column" spacing={5}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={4}>
        <Typography variant="h4" component="div">
          Employee data
        </Typography>
        <IconButton component={Link} to="/employee/add" color="primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={24}
            height={24}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </IconButton>
      </Stack>
      <EmployeeList />
    </Stack>
  )
}

export default Employee
