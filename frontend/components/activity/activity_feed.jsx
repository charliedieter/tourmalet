import React from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activity_actions";
import ActivityFeedItem from "./activity_feed_item";

class ActivityFeed extends React.Component {
  render() {
    if (!this.props.activities) return null;

    const activities = this.props.activities.slice(0, 10).map(act => {
      return (
        <li key={`${act.id}`}>
          <ActivityFeedItem activity={act} />
        </li>
      );
    });

    return <ul className="activity-feed">{activities}</ul>;
  }
}

const msp = state => ({
  currentUser: state.session.currentUser
});

export default connect(msp, null)(ActivityFeed);
