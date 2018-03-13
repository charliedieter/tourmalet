import { combineReducers } from "redux";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
import activitiesReducer from "./activities_reducer";
import usersReducer from "./users_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  activities: activitiesReducer,
  errors: errorsReducer,
  users: usersReducer
});

export default rootReducer;
