import { useState } from 'react'
import { Button, Card, Typography } from '@mui/material'
import Modal from './Modal'

// ---------------------------------------------------------------------
const ModalTest = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <>
      <Button onClick={toggle} variant="contained">
        Open modal
      </Button>

      <Modal open={open} onClose={toggle}>
        <Card sx={{ padding: '24px' }}>
          <Typography variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Card>
      </Modal>
    </>
  )
}

export default ModalTest
