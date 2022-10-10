import { combineReducers } from 'redux'
import counter from './counterReducer'
import post from './postReducer'
import user from './userReducer'

// ---------------------------------------------------------------------

const reducers = combineReducers({
  counter,
  post,
  user,
})

export default reducers
