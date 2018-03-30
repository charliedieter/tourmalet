import React from "react";

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: "Ride" };
  }

  render() {
    return (
      <div className="goals-box">
        <ul className="goal-tabs">
          <li>
            <img
              className="goal-tab-image"
              src="https://image.flaticon.com/icons/png/128/130/130276.png"
            />
          </li>
          <li>
            <img
              className="goal-tab-image"
              src="https://upload.wikimedia.org/wikipedia/commons/1/14/Running_shoe_icon.png"
            />
          </li>
          <li>Total</li>
        </ul>
      </div>
    );
  }
}

export default Goals;
