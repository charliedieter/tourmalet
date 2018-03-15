import React from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./dropdown_components/profile_dropdown";
import TrainingDropdown from "./dropdown_components/training_dropdown";
import RouteDropdown from "./dropdown_components/route_dropdown";
import AlertDropdown from "./dropdown_components/alert_dropdown";
import DashboardDropdown from "./dropdown_components/dashboard_dropdown";
import UserSearch from "./dropdown_components/user_search";

class MainHeader extends React.Component {
  render() {
    return (
      <div className="main-header">
        <div className="header-left">
          <h1 className="logo">Tourmalet</h1>
          {this.props.search === true && <UserSearch />}
          <div className="dash-training-div">
            <DashboardDropdown className="header-link" />
            <TrainingDropdown />
          </div>
        </div>
        <div className="main-header-right">
          <AlertDropdown alerts={["1", "2", "3"]} />
          <ProfileDropdown currentUser={this.props.currentUser} />
          <RouteDropdown />
        </div>
      </div>
    );
  }
}

export default MainHeader;

// dashboard
// activity feed
// my routes
// training
// log
// my index feed
// alerts
// profile
// edit profile
// logout
// add
// add manual entry
// MAP
// post
