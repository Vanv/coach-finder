import authReducer from './authReducer'
import coachesReducer from './coachesReducer'
import{ combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'



const rootReducer = combineReducers({
  auth: authReducer,
  coach: coachesReducer,
  firestore: firestoreReducer
})


export default rootReducer
