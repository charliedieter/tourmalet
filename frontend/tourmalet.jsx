import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import {signup, login, logout} from './util/session_api_util'
import { Root } from './components/root'

window.signup = signup
window.login = login
window.logout = logout
const store = configureStore()
window.getState = store.getState
window.dispatch = store.dispatch

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={store} />, document.getElementById('root'))
})
