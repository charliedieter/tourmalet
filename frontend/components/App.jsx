import React from 'react'
import { Route } from 'react-router-dom'
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import InitialPage from './initial_page'

export const App = () => (
  <div>
    <Route path="/" exact component={InitialPage} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
)

export default App;
