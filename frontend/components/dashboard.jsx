import React from "react";
import { connect } from "react-redux";
import MainHeaderContainer from "./main_header_container";
import ProfileColumn from "./profile_column";
import ActivityFeed from "./activity/activity_feed";
import { fetchActivities } from "../actions/activity_actions";

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchActivities();
  }

  render() {
    return (
      <div>
        <div className="dash-header">
          <MainHeaderContainer />
        </div>
        <div className="dash-main">
          <ProfileColumn
            className="ProfileColumn"
            user={this.props.currentUser}
          />
          <ActivityFeed activities={this.props.activities} />
        </div>
      </div>
    );
  }
}

const msp = state => ({
  currentUser: state.session.currentUser,
  activities: Object.values(state.activities).reverse()
});

const mdp = dispatch => ({
  fetchActivities: () => dispatch(fetchActivities())
});

export default connect(msp, mdp)(Dashboard);
