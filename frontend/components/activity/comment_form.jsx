import React from "react";
import { connect } from "react-redux";
import { saveComment } from "../../actions/activity_actions";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveComment(
      this.props.activityId,
      this.props.currentUser.id,
      this.state.content
    );
  }

  render() {
    return (
      <div className="comment-form-cont">
        <div className="comment-form-profile">
          <img src={this.props.currentUser.avatar_url} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a comment..."
            onChange={e => this.setState({ content: e.target.value })}
          />

          <div>
            <button>Post</button>
          </div>
        </form>
      </div>
    );
  }
}

const msp = state => ({
  currentUser: state.session.currentUser.user
});

const mdp = dispatch => ({
  saveComment: comment => dispatch(saveComment(comment))
});

export default connect(msp, mdp)(CommentForm);
