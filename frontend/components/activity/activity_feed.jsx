import React from 'react'
import { connect } from 'react-redux'
import { fetchActivities } from '../../actions/activity_actions'
import ActivityFeedItem from './activity_feed_item'

class ActivityFeed extends React.Component {

  componentWillMount() {

    this.props.fetchActivities()
  }

  render() {

    const activities = this.props.activities.slice(0, 10).map((act, idx) => {

      return <li><ActivityFeedItem
         key={`activity-${idx}`}
         activity={act}
         /></li>
    })

    return (
      <ul className="activity-feed">
        {activities}
      </ul>
    )
  }
}

const msp = state => ({
  currentUser: state.session.currentUser,
  activities: Object.values(state.activities).reverse()
})

const mdp = dispatch => ({
  fetchActivities: () => dispatch(fetchActivities())
})

export default connect(msp, mdp)(ActivityFeed)
