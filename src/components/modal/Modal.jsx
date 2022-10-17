import { Box } from '@mui/material'
import ReactDOM from 'react-dom'

// ---------------------------------------------------------------------

const Modal = ({ children, open, onClose }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <Box
      sx={{
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        inset: 0,
        zIndex: 9999,
      }}
    >
      <Box onClick={onClose} sx={{ position: 'fixed', backgroundColor: '#000000cc', inset: 0 }} />
      <Box onClick={onClose} sx={{ position: 'relative', zIndex: 10 }}>
        {children}
      </Box>
    </Box>,
    document.getElementById('portal')
  )
}

export default Modal
