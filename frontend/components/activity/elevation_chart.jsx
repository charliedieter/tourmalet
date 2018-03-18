import React from "react";

class ElevationChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elevations: null,
      domain: [],
      selected: null
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.elevator = new google.maps.ElevationService();
  }

  componentDidMount() {
    const path = new google.maps.geometry.encoding.decodePath(
      this.props.polyline
    );

    let self = this;

    this.elevator.getElevationAlongPath(
      {
        path,
        samples: 256
      },
      elevations => self.setState({ elevations }, self.setDomain)
    );
  }

  setDomain() {
    const elevations = this.state.elevations.map(ele => ele.elevation);
    this.setState({ domain: [0, Math.max(...elevations)] });
  }

  handleMouseEnter(idx) {
    this.setState({ selected: idx });
    this.props.onMouseEnter(this.state.elevations[idx].location);
  }

  handleMouseLeave() {
    this.setState({ selected: null });
    this.props.onMouseLeave();
  }

  render() {
    if (!this.state.elevations) return null;
    const bars = this.state.elevations.map((ele, idx) => {
      const barStyle = {
        borderBottomWidth:
          this.props.height * ele.elevation / this.state.domain[1]
      };

      return (
        <div
          style={barStyle}
          key={`${ele}-${idx}`}
          onMouseEnter={() => this.handleMouseEnter(idx)}
          onMouseLeave={this.handleMouseLeave}
          className={this.state.selected === idx ? "selected" : ""}
        >
          <span>{Math.floor(ele.elevation * 3.28083)} ft</span>
        </div>
      );
    });

    const chartStyle = {
      height: this.props.height,
      width: this.props.width
    };
    return (
      <div style={chartStyle} className="elevation-chart">
        {bars}
      </div>
    );
  }
}

export default ElevationChart;
