import { Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'

// ---------------------------------------------------------------------

const FormInput = () => {
  // user data
  const [user, setUser] = useState([])
  // multiple value first name and last name
  const [value, setValue] = useState({ first: '', last: '' })

  const handleChange = (e) => {
    // handle change by property name [e.target.name]
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // insert value to user data
    setUser((data) => [...data, value])
    // clear value
    setValue({ first: '', last: '' })
  }

  return (
    <Stack direction="column" spacing={4}>
      {/* form input */}
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2} sx={{ marginTop: '12px' }}>
          <TextField label="First Name" name="first" required value={value.first} onChange={handleChange} />
          <TextField label="Last Name" name="last" required value={value.last} onChange={handleChange} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>

      {/* data list */}
      <Stack direction="column" spacing={1}>
        <Typography gutterBottom variant="h6" component="div">
          List data :
        </Typography>
        {user &&
          user.map((item, index) => (
            <Card key={index}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Data {index + 1}
                </Typography>
                <Typography variant="body1" component="p">
                  First name: {item.first}
                </Typography>
                <Typography variant="body1" component="p">
                  Last name: {item.last}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Stack>
    </Stack>
  )
}

export default FormInput
