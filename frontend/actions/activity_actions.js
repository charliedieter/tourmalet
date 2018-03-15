import * as API from "../util/activity_util";

export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";
export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_LIKED_ACTIVITY = "RECEIVE_LIKED_ACTIVITY";

const receiveActivity = activity => ({
  type: RECEIVE_ACTIVITY,
  activity
});
const receiveActivityWithUser = (activity, currentUser) => ({
  type: RECEIVE_ACTIVITY,
  activity,
  currentUser
});

const receiveActivities = activities => {
   ;
  return {
    type: RECEIVE_ACTIVITIES,
    activities
  };
};

const receiveLikedActivity = activity => ({
  type: RECEIVE_LIKED_ACTIVITY,
  activity
});

export const saveActivity = (activity, currentUser) => dispatch => {
  return API.saveActivity(activity).then(act =>
    dispatch(receiveActivityWithUser(act, currentUser))
  );
};

export const fetchActivity = id => dispatch => {
  return API.fetchActivity(id).then(act => dispatch(receiveActivity(act)));
};

export const fetchActivities = () => dispatch => {
   ;
  return API.fetchActivities().then(acts => dispatch(receiveActivities(acts)));
};

export const createLike = activityId => dispatch => {
  return API.createLike(activityId).then(act =>
    dispatch(receiveLikedActivity(act))
  );
};

export const createComment = comment => dispatch => {
  return API.createComment(comment).then(activity => {
    dispatch(receiveActivity(activity));
  });
};
