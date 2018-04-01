import React from "react";

class WeeklyChart extends React.Component {
  render() {
    const max = Math.max(
      ...Object.values(this.props.acts)[0].map(act => parseInt(act.distance))
    );

    const bars = ["sun", "mon", "tues", "weds", "thurs", "fri", "sat"].map(
      (day, idx) => {
        const acts = this.props.acts[day];
        let total = 0.2;
        if (acts) {
          for (var i = 0; i < acts.length; i++) {
            total += parseInt(acts[i].distance);
          }
        }

        return (
          <div
            style={{ borderBottomWidth: 30 * total / max || 0 }}
            key={`${day}`}
            className={`bar ${day}`}
          >
            <span>{day[0].toUpperCase()}</span>
          </div>
        );
      }
    );
    return <div className="goal-chart">{bars}</div>;
  }
}

export default WeeklyChart;
