import * as API from "../util/user_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = ({ user, activities }) => ({
  type: RECEIVE_USER,
  user,
  activities
});

const receiveSearch = users => ({
  type: RECEIVE_SEARCH,
  users
});

export const fetchUsers = () => dispatch => {
  return API.fetchUsers().then(users => dispatch(receiveUsers(users)));
};

export const fetchUser = userId => dispatch => {
  return API.fetchUser(userId).then(payload => dispatch(receiveUser(payload)));
};

export const updateUser = (userId, attributes) => dispatch => {
  return API.updateUser(userId, attributes).then(payload =>
    dispatch(receiveUser(payload))
  );
};

export const searchUsers = query => dispatch => {
  debugger;
  return API.fetchUsers(query).then(users => dispatch(receiveSearch(users)));
};

export const createFollow = (follower, followed) => dispatch => {
  return API.createFollow(follower, followed).then(payload => {
    debugger;
    dispatch(receiveUsers(payload));
  });
};

export const deleteFollow = (followerId, followedId) => dispatch => {
  return API.deleteFollow(followerId, followedId).then(payload =>
    dispatch(receiveUsers(payload))
  );
};
