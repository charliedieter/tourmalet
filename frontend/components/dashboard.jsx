import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import MainHeaderContainer from './main_header_container'

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <MainHeaderContainer />
        <div className="dash-main">
          
        </div>
      </div>
    )
  }
}
export default withRouter(Dashboard);
