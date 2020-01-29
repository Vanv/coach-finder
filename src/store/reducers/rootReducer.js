import authReducer from './authReducer'
import coachesReducer from './coachesReducer'
import{ combineReducers } from 'redux'


const rootReducer = combineReducers({
  auth: authReducer,
  coach: coachesReducer
})


export default rootReducer
