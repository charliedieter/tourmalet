import React from "react";
import { withRouter, Link } from "react-router-dom";
import ProfileDropdown from "./dropdown/profile_dropdown";
import TrainingDropdown from "./dropdown/training_dropdown";
import RouteDropdown from "./dropdown/route_dropdown";
import AlertDropdown from "./dropdown/alert_dropdown";
import DashboardDropdown from "./dropdown/dashboard_dropdown";
import UserSearch from "./user_search";

class MainHeader extends React.Component {
  render() {
    return (
      <div className="main-header">
        <div className="header-left">
          <h1 onClick={() => this.props.history.push("/")} className="logo">
            Tourmalet
          </h1>
          {this.props.search === true && <UserSearch />}
          <div className="dash-training-div">
            <DashboardDropdown className="header-link" />
            <TrainingDropdown />
          </div>
        </div>
        <div className="main-header-right">
          <ProfileDropdown currentUser={this.props.currentUser} />
          <RouteDropdown />
        </div>
      </div>
    );
  }
}

export default withRouter(MainHeader);
