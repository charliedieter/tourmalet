import React from 'react'
import { withRouter } from 'react-router'

class Dashboard extends React.Component {

  handleLogout(){
    this.props.logout()
    debugger
    this.props.history.push("/login")
  }

  render() {
    return (
      <div>
        <header className="initial-header">
          <h1 className="logo">Tourmalet</h1>
          <div className="header-links">
            <button onClick={this.handleLogout.bind(this)} >Log Out</button>
          </div>
        </header>
      </div>
    )
  }
}
export default withRouter(Dashboard);
