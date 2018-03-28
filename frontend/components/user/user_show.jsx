import React from "react";
import MainHeaderContainer from "../header/main_header_container";
import ProfileColumn from "./profile_column";
import ActivityFeed from "../activity/activity_feed";
import ActivityCalendar from "./calendar";
import FourWeekChart from "./four_week_chart";
import Banner from "./banner";
import { connect } from "react-redux";
import {
  fetchUser,
  createFollow,
  deleteFollow
} from "../../actions/user_actions";

class UserShow extends React.Component {
  componentDidMount() {
    this.state = {
      modalOpen: false
    };

    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    if (!this.props.user) return null;
    let followEditButton;
    if (this.props.currentUser.following_ids.includes(this.props.user.id)) {
      followEditButton = (
        <button
          onClick={() =>
            this.props.deleteFollow(
              this.props.currentUser.id,
              this.props.user.id
            )
          }
        >
          Unfollow
        </button>
      );
    } else if (this.props.user.id === this.props.currentUser.id) {
      followEditButton = <button>Edit Profile</button>;
    } else {
      followEditButton = (
        <button
          onClick={() =>
            this.props.addFollow(this.props.currentUser.id, this.props.user.id)
          }
        >
          Follow
        </button>
      );
    }

    return (
      <div>
        <MainHeaderContainer className="dash-header" search={true} />
        <Banner />
        <div className="user-show-main">
          <div className="user-show-prof-box">
            <div className="img-cont">
              <img src={this.props.user.avatar_url} />
            </div>
            <div className="user-show-name">
              <div>{this.props.user.username}</div>
            </div>
            <div className="follow-edit-buttons">
              <div>{followEditButton}</div>
            </div>
          </div>

          <div className="act-stat-box">
            <div className="act-count-box">
              <div>Last 4 Weeks</div>
              <div className="num">{this.props.user.activity_ids.length}</div>
              <div>total activities</div>
            </div>

            <ActivityCalendar />
          </div>
        </div>
      </div>
    );
  }
}

const msp = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: state.entities.users[ownProps.match.params.userId],
  activities: state.entities.activities
});

const mdp = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  addFollow: (followerId, followedId) =>
    dispatch(createFollow(followerId, followedId)),
  deleteFollow: (followerId, followedId) =>
    dispatch(deleteFollow(followerId, followedId))
});

export default connect(msp, mdp)(UserShow);

// <ProfileColumn
//   className="ProfileColumn"
//   user={this.props.user}
//   currentUser={this.props.currentUser}
//   activities={this.props.activities}
//   />
// <ActivityFeed
//   activities={Object.values(this.props.activities).reverse()}
//   />
