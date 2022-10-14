import { configureStore } from '@reduxjs/toolkit'
// reducer
import counterReducer from '../reducer/counterReducer'
import employeeReducer from '../reducer/employeeReducer'
import postReducer from '../reducer/postReducer'
import userReducer from '../reducer/userReducer'

// ---------------------------------------------------------------------

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    user: userReducer,
    employee: employeeReducer,
  },
})
