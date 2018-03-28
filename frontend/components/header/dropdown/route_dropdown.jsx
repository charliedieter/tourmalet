import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export default class RouteDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.mouseEventHandler = this.mouseEventHandler.bind(this);
  }

  mouseEventHandler(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    const items =
      this.state.open === true ? (
        <ul className="right-ul">
          <li>
            <Link to="/">Add Manual Entry</Link>
          </li>
          <li>
            <Link to="/routes/new">Create a Route</Link>
          </li>
          <li>
            <Link to="/">Add a Post</Link>
          </li>
        </ul>
      ) : null;

    return (
      <div
        className="dropdown-div plus"
        onMouseEnter={this.mouseEventHandler}
        onMouseLeave={this.mouseEventHandler}
      >
        <i className="material-icons plus-sign">add_circle_outline</i>
        {items}
      </div>
    );
  }
}
