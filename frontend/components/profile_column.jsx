import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ProfileColumn = props => {

  return(

    <div className="prof-box">

      <div className="top-prof">

      <div className="line-1">
        <img src="http://www.sessionlogs.com/media/icons/defaultIcon.png"/>
      </div>

      <div className="line-2">
        <div>{props.currentUser.username}</div>
      </div>

      <div className="line-3">
      <ul>
        <li>
          <a>
            <div>Following</div>
            <b></b>
          </a>
        </li>
        <li>
          <a>
            <div>Followers</div>
            <b></b>
          </a>
        </li>
        <li>
          <a>
            <div>Activities</div>
            <b></b>
          </a>
        </li>
      </ul>
      </div>

    </div >
    <div className="prof-link-div">
      <Link
        to="/routes/new">
        <b>Add an Activity</b>
        <i className="material-icons">keyboard_arrow_right</i>
      </Link>
      </div>
    </div>
  )

}

const msp = state => ({
  currentUser: state.session.currentUser,
  activities: Object.values(state.activities)
})

export default connect(msp, null)(ProfileColumn)
