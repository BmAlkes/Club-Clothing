import { combineReducers } from 'redux'
import userReducer from './reducers/user/user.reducers'

const rootReducer = combineReducers({
  userReducer
})

export default rootReducer
