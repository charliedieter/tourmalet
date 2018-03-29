import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createFollow } from "../../actions/user_actions";

class ProfileColumn extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.createFollow(
      this.props.currentUser.id,
      this.props.currentUser.id
    );
  }

  render() {
    // if (!this.props.currentUser.activity_ids || !this.props.activities)
    //   return null;
    const acts = this.props.currentUser.activity_ids;

    const lastAct =
      acts.length > 0 ? this.props.activities[acts[acts.length - 1]] : "";
    const addFollowLink = this.props.dash ? (
      <Link to="/routes/new">
        <b>Add an Activity</b>
        <i className="material-icons">keyboard_arrow_right</i>
      </Link>
    ) : (
      <button onClick={this.handleClick.bind(this)}>
        <b>Follow {this.props.currentUser.username}</b>
      </button>
    );
    if (!lastAct) return null;
    return (
      <div className="prof-cont" ref="sticky">
        <div className="prof-box">
          <div className="top-prof">
            <div
              className="line-1"
              onClick={() =>
                this.props.history.push(`/users/${this.props.currentUser.id}`)
              }
            >
              <img src={this.props.currentUser.avatar_url} />
            </div>
            <div className="line-2">
              <div>{this.props.currentUser.username}</div>
            </div>
            <div className="line-3">
              <ul>
                <li className="line-3-row">
                  <a>
                    <div>Following</div>
                    <div className="num">
                      {this.props.currentUser.followings.length}
                    </div>
                  </a>
                </li>
                <li className="line-3-row">
                  <a>
                    <div>Followers</div>
                    <div className="num">
                      {this.props.currentUser.followers.length}
                    </div>
                  </a>
                </li>
                <li className="line-3-row">
                  <a>
                    <div>Activities</div>
                    <div className="num">{acts.length}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="prof-links-cont">
            <div className="last-act-cont">
              <Link to={`/activities/${lastAct.id}`}>
                <div className="last-act-info">
                  <div>Last Activity</div>
                  <div className="last-act-title-date">
                    <div className="last-act-name">{lastAct.title}</div>
                    <div className="last-act-date">{lastAct.date}</div>
                  </div>
                  <i className="material-icons">keyboard_arrow_right</i>
                </div>
              </Link>
            </div>
            {addFollowLink}
            <Link to={`/users/${this.props.currentUser.id}`}>
              <b>Activity Log</b>
              <i className="material-icons">keyboard_arrow_right</i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const msp = state => ({
  currentUser: state.session.currentUser,
  activities: state.entities.activities
});

export default withRouter(connect(msp, null)(ProfileColumn));
