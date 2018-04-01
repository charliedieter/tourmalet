import React from "react";
import { connect } from "react-redux";
import { fetchUsers, createFollow } from "../../actions/user_actions";

class SuggestedFriends extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (!this.props.users) return null;
    const currentUser = this.props.currentUser.user
      ? this.props.currentUser.user
      : this.props.currentUser;
    const suggested = this.props.users
      .filter(
        user =>
          user.id !== currentUser.id &&
          !currentUser.following_ids.includes(user.id)
      )
      .slice(0, 5)
      .map((user, idx) => {
        return (
          <li key={`user-${idx}`} className="suggested-friend-li">
            <img src={user.avatar_url} />
            <div>
              <div>{user.username}</div>
              <div>
                <button
                  className="suggested-follow-button"
                  onClick={() =>
                    this.props.createFollow(currentUser.id, user.id).then()
                  }
                >
                  Follow
                </button>
              </div>
            </div>
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
  createFollow: (followerId, followedId) =>
    dispatch(createFollow(followerId, followedId))
});

export default connect(msp, mdp)(SuggestedFriends);

// <button className="remove-suggestion">x</button>
