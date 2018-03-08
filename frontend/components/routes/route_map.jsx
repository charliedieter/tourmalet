import React from 'react'

export default class RouteMap extends React.Component {

  componentDidMount(){
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 14
    }

    let that = this
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
          const initialLocation = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
          // that.map.panTo(initialLocation);
          that.map = new google.maps.Map(that.mapNode, {center: initialLocation, zoom: 14})
      });
    } else {
      this.map = new google.maps.Map(this.mapNode, mapOptions)
    }
  }


  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}></div>
    )
  }
}
