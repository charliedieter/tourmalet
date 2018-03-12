import {
  RECEIVE_ACTIVITY,
  RECEIVE_ACTIVITIES,
  RECEIVE_LIKED_ACTIVITY
       } from '../actions/activity_actions'

const activitiesReducer = (oldState = {}, action) => {

  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_ACTIVITY:
      return Object.assign({}, oldState, {current:  action.activity})
    case RECEIVE_LIKED_ACTIVITY:
      return Object.assign({}, oldState, {[action.activity.id]: action.activity})
    case RECEIVE_ACTIVITIES:
      return Object.assign({}, oldState, action.activities )
    default:
      return oldState
  }
}

export default activitiesReducer;
