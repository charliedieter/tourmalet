import * as API from "../util/user_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = ({ user, activities }) => ({
  type: RECEIVE_USER,
  user,
  activities
});

export const fetchUsers = () => dispatch => {
  return API.fetchUsers().then(users => dispatch(receiveUsers(users)));
};

export const fetchUser = userId => dispatch => {
  return API.fetchUser(userId).then(payload => dispatch(receiveUser(payload)));
};
