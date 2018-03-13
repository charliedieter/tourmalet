import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const ProfileColumn = props => {
  return (
    <div className="prof-cont">
      <div className="prof-box">
        <div className="top-prof">
          <div
            className="line-1"
            onClick={() => props.history.push(`/users/${props.currentUser.id}`)}
          >
            <img src={currentUser.avatar_url} />
          </div>

          <div className="line-2">
            <div>{props.currentUser.username}</div>
          </div>

          <div className="line-3">
            <ul>
              <li>
                <a>
                  <li>Following</li>
                  <li>{props.currentUser.followings.length}</li>
                </a>
              </li>
              <li>
                <a>
                  <li>Followers</li>
                  <li>{props.currentUser.followers.length}</li>
                </a>
              </li>
              <li>
                <a>
                  <li>Activities</li>
                  <li>{props.currentUser.activities.length}</li>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="prof-link-div">
          <Link to="/routes/new">
            <b>Add an Activity</b>
            <i className="material-icons">keyboard_arrow_right</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

const msp = state => ({
  currentUser: state.session.currentUser,
  activities: Object.values(state.activities)
});

export default withRouter(connect(msp, null)(ProfileColumn));
