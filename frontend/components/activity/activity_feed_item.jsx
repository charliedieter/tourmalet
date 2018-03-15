import React from "react";
import StaticMap from "../routes/static_map";
import Comment from "./comment";
import CommentForm from "./comment_form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createLike } from "../../actions/activity_actions";

class ActivityFeedItem extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.activity)
      this.state = {
        currUserLikes: this.props.activity.likers.includes(
          this.props.currentUser.id
        ),
        commentOpen: false
      };
    this.toggleLike = this.toggleLike.bind(this);
    this.openComment = this.openComment.bind(this);
  }

  toggleLike(e) {
    e.preventDefault();
    if (!this.state.currUserLikes) {
      this.props.createLike(this.props.activity.id);
      this.setState({ currUserLikes: true });
    } else {
      // delete likes
    }
  }

  openComment() {
    this.setState({ commentOpen: true });
  }

  render() {
    const act = this.props.activity;
    const comments = this.props.activity.comments.map((comment, idx) => {
      return (
        <a key={`comment-${idx}`}>
          <Comment comment={comment} />
        </a>
      );
    });
    const commentForm = <CommentForm activityId={act.id} />;

    return (
      <div className="activity-feed-item">
        <div className="top-item-row">
          <div
            onClick={() => this.props.history.push(`/users/${act.owner.id}`)}
          >
            <img className="profile-pic" src={act.owner_img} />
          </div>
          <div className="name-and-date">
            <div>{act.owner.username}</div>
            <div>{act.date}</div>
          </div>
          <div className="top-row-right">
            <img
              src={
                act.type_of === "Ride"
                  ? "https://image.flaticon.com/icons/png/128/130/130276.png"
                  : "https://upload.wikimedia.org/wikipedia/commons/1/14/Running_shoe_icon.png"
              }
            />
          </div>
        </div>

        <div className="name-and-type">
          <a onClick={() => this.props.history.push(`/activities/${act.id}`)}>
            {act.title}
          </a>
        </div>
        <div className="stat-list-cont">
          <ul>
            <li>
              <div>{act.distance} mi</div>
              <a>Distance</a>
            </li>
            <li>
              <div>{act.elevation} ft</div>
              <a>Elevation Gain</a>
            </li>
            <li>
              <div>{act.est_moving_time}</div>
              <a>Estimated Time</a>
            </li>
          </ul>
        </div>

        <div className="static-map-cont">
          <StaticMap polyline={act.polyline} idx={act.id} />
        </div>

        <div className="feed-item-buttons">
          <div>{act.likers.length > 0 && act.likers.length}</div>
          <button onClick={this.toggleLike}>
            <img
              src={
                this.state.currUserLikes
                  ? window.orangelike
                  : "http://icons.iconarchive.com/icons/iconsmind/outline/512/Like-icon.png"
              }
            />
          </button>
          <button onClick={this.openComment}>
            <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/33080-200.png" />
          </button>
        </div>

        <div className="comments-cont">{comments}</div>
        <div>{this.state.commentOpen && commentForm}</div>
      </div>
    );
  }
}

const msp = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => ({
  createLike: id => dispatch(createLike(id))
});

export default withRouter(connect(msp, mdp)(ActivityFeedItem));
