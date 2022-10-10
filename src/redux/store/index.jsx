import { configureStore } from '@reduxjs/toolkit'
import jsonPlaceholder from '../../services/jsonPlaceholder'
//
import counterReducer from '../reducer/counterReducer'
import postReducer from '../reducer/postReducer'
import userReducer from '../reducer/userReducer'

// ---------------------------------------------------------------------

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: jsonPlaceholder,
      },
      serializableCheck: false,
    }),
})
