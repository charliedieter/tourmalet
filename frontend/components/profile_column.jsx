import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ProfileColumn extends React.Component {
  render() {
    if (!this.props.currentUser) return null;
    return (
      <div className="prof-cont" ref="sticky">
        <div className="prof-box">
          <div className="top-prof">
            <div
              className="line-1"
              onClick={() =>
                this.props.history.push(`/routes/${this.props.currentUser.id}`)
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
                    <div className="num">
                      {this.props.currentUser.activity_ids.length}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="prof-links-cont">
            <Link to="/routes/new">
              <b>Add an Activity</b>
              <i className="material-icons">keyboard_arrow_right</i>
            </Link>
            <Link to={`/routes/${this.props.currentUser.id}`}>
              <b>My Activity Log</b>
              <i className="material-icons">keyboard_arrow_right</i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const msp = state => ({
  currentUser: state.session.currentUser.user,
  activities: Object.values(state.activities)
});

export default withRouter(connect(msp, null)(ProfileColumn));
