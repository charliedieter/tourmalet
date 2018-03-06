import * as API from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const login = user => dispatch => (
  API.login(user).then(user => dispatch(receiveCurrentUser(user)))
)

export const logout = () => dispatch => (
  API.logout().then(() => receiveCurrentUser(null))
)

export const signup = user => dispatch => (
  API.login(user).then(user => dispatch(receiveCurrentUser(user),
    (payload) => dispatch(receiveErrors(payload.responseJSON.errors))))
)
