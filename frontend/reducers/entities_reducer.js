import { combineReducers } from "redux";
import activitiesReducer from "./activities_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  activities: activitiesReducer,
  users: usersReducer
});

export default entitiesReducer;
