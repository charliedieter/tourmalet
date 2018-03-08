import React from 'react'
import SplashPage from './splash_page'
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import DashboardContainer from './dashboard_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'


export const App = () => (
  <div>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/dashboard" component={DashboardContainer} />
    <AuthRoute exact path ="/" component={SplashPage} />
  </div>
)

export default App;
