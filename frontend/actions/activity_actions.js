import * as API from '../util/activity_util'


export const saveActivity = activity => dispatch => {
  return API.saveActivity(activity)
}
