import React from 'react'
import { connect } from 'react-redux'
import BoxRight from './box_right'
import MainHeader from '../main_header'
import Map from './map'
import { fetchActivity } from '../../actions/activity_actions'
import { Link } from 'react-router-dom'

class ActivityShow extends React.Component {

  componentDidMount() {
    debugger
    this.props.fetchActivity(this.props.match.params.activityId)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {

    const activity = this.props.activity
    if(!activity) return null;

    return (
      <div >
        <MainHeader />
        <div className="map-show-body">
          <div className="index-link">
            <Link to="/">My Routes </Link>
            <a>&nbsp;/&nbsp;{activity.title}</a>
          </div>

          <h1 className="ac-title">{activity.title}</h1>
          <div className="map-row">
            <Map polyline={activity.polyline}/>
            <BoxRight />
          </div>
        </div>
      </div>
    )
  }
}

const msp = state => ({
  currentUser: state.session.currentUser,
  activity: state.activities.current
})

const mdp = dispatch => ({
  fetchActivity: id => dispatch(fetchActivity(id))
})

export default connect(msp, mdp)(ActivityShow)
// /athlete/:athlete_id/routes
