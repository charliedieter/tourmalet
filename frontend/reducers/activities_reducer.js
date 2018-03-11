import { RECEIVE_ACTIVITY, RECEIVE_ACTIVITIES } from '../actions/activity_actions'

const activitiesReducer = (oldState = {}, action) => {

  Object.freeze(oldState)

  switch (action.type) {
    case RECEIVE_ACTIVITY:
      return Object.assign({}, oldState, {current:  action.activity})
    case RECEIVE_ACTIVITIES:
      return Object.assign({}, oldState, {activities: actions.activities })
    default:
      return oldState
  }
}

export default activitiesReducer;
