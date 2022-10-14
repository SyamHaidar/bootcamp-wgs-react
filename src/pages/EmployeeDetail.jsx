import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { faker } from '@faker-js/faker'
// redux
import { useDispatch, useSelector } from 'react-redux'
// redux actions
import { getEmployee } from '../redux/actions/employeeAction'
// @mui
import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'

// ---------------------------------------------------------------------

export default function EmployeeDetail() {
  // get id value from url
  const { id } = useParams()

  // to extract data from the Redux store state
  const employee = useSelector((state) => state.employee.employee)
  // returns a reference to the dispatch function from the Redux store
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEmployee(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(employee)

  return (
    <Stack direction="column" alignItems="center" sx={{ width: '100%' }}>
      <Avatar
        src={faker.image.avatar()}
        alt="Profile pictures"
        sx={{ width: 152, height: 152, marginBottom: '32px' }}
      />
      <Stack
        direction="column"
        spacing={1}
        sx={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}
      >
        <Typography variant="h4">{`${employee.lastName}, ${employee.firstName}`}</Typography>
        <Typography variant="subtitle1" color="text.secondary" component="span">
          Employed: {employee.employed ? 'Employed' : 'Not employed'}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="span">
          Education: {employee.education}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="span">
          Technology: {employee.technology}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="span">
          Expertise: {employee.expertise && employee.expertise.map((expertise) => `${expertise}, `)}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="span">
          Notes: {employee.notes}
        </Typography>
      </Stack>
    </Stack>
  )
}
