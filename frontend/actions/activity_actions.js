import * as API from '../util/activity_util'

export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY'
export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES'

const receiveActivity = activity => ({
  type: RECEIVE_ACTIVITY,
  activity
})

export const saveActivity = activity => dispatch => {
  return API.saveActivity(activity)
  .then(activity => dispatch(receiveActivity(activity)))
}

export const fetchActivity = id => dispatch => {
  return API.fetchActivity(id)
  .then(activity => dispatch(receiveActivity(activity)))
}
