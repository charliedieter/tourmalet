import React from 'react'
import StaticMap from './routes/static_map'
import { connect } from 'react-redux'

const ActivityFeedItem = props => {
  const act = props.activity

  return (
    <div className="activity-feed-item">
      <img  className="profile-pic"
      src="http://www.sessionlogs.com/media/icons/defaultIcon.png"/>
      <h1>{act.title}</h1>
      <h2>{act.date}</h2>
      <ul>
        <li>{act.distance} mi</li>
        <li>{act.elevation} ft</li>
        <li>{act.est_moving_time}</li>
      </ul>
      <StaticMap polyline={act.polyline}/>
      <div>
        <button><i className="material-icons">thumb_up</i></button>
        <button><i className="material-icons">comment</i></button>
      </div>
    </div>
  )
}

const msp = state => ({
  currentUser: state.session.currentUser
})

export default connect(msp, null)(ActivityFeedItem)
