import React from "react";
import MainHeaderContainer from "../main_header_container";
import ProfileColumn from "../profile_column";
import ActivityFeed from "../activity/activity_feed";
import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activity_actions";
import { fetchUser } from "../../actions/user_actions";

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    if (!this.props.user) return null;
    let activities = this.props.activities.filter(act =>
      this.props.user.activity_ids.includes(act.id)
    );
    return (
      <div>
        <MainHeaderContainer />
        <div className="dash-main">
          <ProfileColumn className="ProfileColumn" user={this.props.user} />
          <ActivityFeed activities={activities} />
        </div>
      </div>
    );
  }
}

const msp = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: state.users[ownProps.match.params.userId],
  activities: Object.values(state.activities).reverse()
});

const mdp = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(msp, mdp)(UserShow);
