import React from "react";
import SplashPage from "./splash_page";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import DashboardContainer from "./dashboard_container";
import ActivityShow from "./activity/show";
import RouteMap from "./routes/route_map";
import UserShow from "./user/user_show";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

export const App = () => {
  return (
    <div>
      <AuthRoute path="/login" exact component={LoginFormContainer} />
      <AuthRoute path="/signup" exact component={SignupFormContainer} />
      <ProtectedRoute path="/dashboard" exact component={DashboardContainer} />
      <ProtectedRoute path="/routes/new" component={RouteMap} />
      <ProtectedRoute path="/activities/:activityId" component={ActivityShow} />
      <ProtectedRoute path="/users/:userId" component={UserShow} />
      <AuthRoute exact path="/" component={SplashPage} />
    </div>
  );
};

export default App;

// <ProtectedRoute path="/activities/:activity_id" component ={RouteShow} />
