import React from 'react'
import StaticMap from '../routes/static_map'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createLike } from '../../actions/activity_actions'

class ActivityFeedItem extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.activity)
    this.state = {
      currUserLikes: this.props.activity.likers.includes(currentUser.id)
    }
    this.toggleLike = this.toggleLike.bind(this)
  }

  toggleLike(e) {
    e.preventDefault()
    if (!this.state.currentUserLikes) {
      this.props.createLike(this.props.activity.id)
      this.setState({currUserLikes: true})
    } else {
      // eventually delete likes
    }
  }

  render() {

    const act = this.props.activity

    return (

      <div className="activity-feed-item">
        <div className="top-item-row">
          <div onClick={() => this.props.history.push(`/users/${1}`)}>
            <img  className="profile-pic"
              src={act.owner.avatar_url ||
                "http://www.sessionlogs.com/media/icons/defaultIcon.png"}
              />
          </div>
          <div className="name-and-date">
            <div>{act.owner.username}</div>
            <div>{act.date}</div>
          </div>
        </div>

        <h1 onClick={() => this.props.history.push(`/activities/${act.id}`)}>
          {act.title}
        </h1>

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

        <div className="static-map-cont">
          <StaticMap
            polyline={act.polyline}
            idx={act.id}
            />
        </div>

        <div className="feed-item-buttons">
          <button
            onClick={ this.toggleLike }
            className={ this.state.currUserLikes ? "liked" : ""}
            ><i className="material-icons">thumb_up</i></button>
          <button><i className="material-icons">comment</i></button>
        </div>

      </div>
    )
  }
}

const msp = state => ({
  currentUser: state.session.currentUser
})

const mdp = dispatch => ({
  createLike: id => dispatch(createLike(id))
})

export default withRouter(connect(msp, mdp)(ActivityFeedItem))
