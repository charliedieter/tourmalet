import { combineReducers } from 'redux'
import errorsReducer from'./errors_reducer'
import sessionReducer from './session_reducer'
import activitiesReducer from './activities_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  activities: activitiesReducer,
  errors: errorsReducer
})

export default rootReducer;
