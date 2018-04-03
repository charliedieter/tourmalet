import React from "react";

class Tracker extends React.Component {
  constructor(props) {
    super(props);

    this.path = [];
    this.map = new google.maps.Map(this.mapNode);
    this.polyline = new google.maps.Polyline({
      map: this.map,
      path: this.path,
      strokeColor: "red",
      strokeWeight: 1,
      strokeOpacity: 0.7
    });
    this.latLngBounds = new google.maps.latLngBounds();
  }

  startTracking() {
    navigator.geolocation.watchPosition(position =>
      this.path.push(
        new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        )
      )
    );
  }

  adjustBounds() {
    for (var i = 0; i < this.path.length; i++) {
      this.latLngBounds.extend(this.path[i]);
    }
    map.fitBounds(this.latLngBounds);
  }

  render() {
    return (
      <div className="tracker-container">
        <div id="map-container" ref={map => (this.mapNode = map)} />
      </div>
    );
  }
}
