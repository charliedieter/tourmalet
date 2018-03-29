import React from "react";
import { connect } from "react-redux";
import { fetchUsers, createFollow } from "../../actions/user_actions";

class SuggestedFriends extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    debugger;
  }

  render() {
    if (!this.props.users) return null;
    debugger;
    const suggested = this.props.users
      .filter(
        user =>
          user.id !== this.props.currentUser.id &&
          !this.props.currentUser.following_ids.includes(user.id)
      )
      .slice(0, 5)
      .map((user, idx) => {
        return (
          <li className="suggested-friend-li">
            <img src={user.avatar_url} />
            <div>
              <div>{user.username}</div>
              <div>
                <button
                  className="suggested-follow-button"
                  onClick={() =>
                    this.props.createFollow(this.props.currentUser, user.id)
                  }
                >
                  Follow
                </button>
              </div>
            </div>
            <button className="remove-suggestion">x</button>
          </li>
        );
      });
    return (
      <div className="suggested-friends-list">
        <h4>Suggested Friends</h4>
        <ul>{suggested}</ul>
      </div>
    );
  }
}

const msp = state => ({ users: Object.values(state.entities.users) });
const mdp = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  createFollow: () => dispatch(createFollow())
});

export default connect(msp, mdp)(SuggestedFriends);
