import React from "react";
import { connect } from "react-redux";
import MainHeaderContainer from "./main_header_container";
import ProfileColumn from "./profile_column";
import ActivityFeed from "./activity/activity_feed";
import { fetchActivities } from "../actions/activity_actions";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchActivities();
  }

  render() {
    if (!this.props.activities[1]) return null;

    return (
      <div>
        <div className="dash-header">
          <MainHeaderContainer search={true} />
        </div>
        <div className="dash-main">
          <ProfileColumn
            className="ProfileColumn"
            user={this.props.currentUser}
            activities={this.props.activities}
            dash={true}
          />
          <ActivityFeed
            activities={Object.values(this.props.activities).reverse()}
          />
        </div>
      </div>
    );
  }
}

const msp = state => ({
  currentUser: state.session.currentUser,
  activities: state.entities.activities
});

const mdp = dispatch => ({
  fetchActivities: () => dispatch(fetchActivities())
});

export default connect(msp, mdp)(Dashboard);
