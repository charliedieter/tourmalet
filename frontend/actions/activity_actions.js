import * as API from '../util/activity_util'

export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY'
export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES'

const receiveActivity = activity => ({
  type: RECEIVE_ACTIVITY,
  activity
})

const receiveActivities = activities => ({
  type: RECEIVE_ACTIVITIES,
  activities
})

export const saveActivity = activity => dispatch => {
  return API.saveActivity(activity)
  .then(act => dispatch(receiveActivity(act)))
}

export const fetchActivity = id => dispatch => {
  return API.fetchActivity(id)
  .then(act => dispatch(receiveActivity(act)))
}

export const fetchActivities = () => dispatch => {
  return API.fetchActivities()
  .then(acts => dispatch(receiveActivities(acts)))
}
