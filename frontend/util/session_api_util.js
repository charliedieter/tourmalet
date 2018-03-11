export const signup = ({username, email, password}) => (
  $.ajax({
  url: 'api/users',
  method: 'POST',
  data: {user: {username, email, password}}
}))

export const login = ({email, password}) => (
  $.ajax({
  url: 'api/session/',
  method: 'POST',
  data: {user: {email, password}}
}))

export const logout = () => (
  $.ajax({
  url: 'api/session',
  method: 'DELETE',
}))
