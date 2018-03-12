import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import MainHeaderContainer from './main_header_container'
import ProfileColumn from './profile_column'
import ActivityFeed from './activity_feed'

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <MainHeaderContainer />
        <div className="dash-main">
          <ProfileColumn className="ProfileColumn"/>
          <ActivityFeed />
        </div>
      </div>
    )
  }
}
export default withRouter(Dashboard);
