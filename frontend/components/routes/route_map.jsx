import React from 'react'
import mapStyle from './google_maps_styling.js'
import MainHeader from '../main_header'
export default class RouteMap extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      waypts: [],
      travelMode: 'DRIVING',
      polyline: new google.maps.Polyline
    }
    this.placeMarker.bind(this)
  }

  componentDidMount(){
    this.initMap();
  }

  initMap() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13,
      styles: mapStyle.tourmalet,
      disableDefaultUI: true,
      zoomControl: true
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions)
    // new google.maps.BicyclingLayer().setMap(this.map) Toggle on for function > fashion
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const initialLocation =
        new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)

        this.map.panTo(initialLocation)

        google.maps.event.addListener(this.map, 'click', (event) => {
          this.placeMarker(event.latLng)
        });
      });
    }
  }

  placeMarker(latLng){
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: String(this.state.waypts.length + 1)
    })

    const updated = this.state.waypts.concat(marker)
    this.setState({waypts: updated})
    console.log(this.state.waypts[0])
    if (this.state.waypts.length > 1) this.renderRoute();
  }

  renderRoute(){
    const pts = this.state.waypts
    const start = pts[0].position
    const end = pts[pts.length - 1].position

    const waypts = this.makeWayPts(pts.slice(1, -1))

    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer
    directionsDisplay.setMap(this.map)

    directionsService.route({
      origin: start,
      destination: end,
      waypoints: waypts,
      travelMode: this.state.travelMode
    }, (payload, status) => {
      if (status === 'OK') {
        this.clearWayPts()
        directionsDisplay.setDirections(payload)
        // look at payload to see elevation etc
      } else {
        alert("you done goofed and " + status)
      }
    })
  }

  makeWayPts(waypts) {
    let result = []
    for (var i = 0; i < waypts.length; i++) {
      result.push({
        location: waypts[i].position,
        stopover: false
      })
    }
    return result
  }

  clearWayPts(){
    const pts = this.state.waypts
    for (var i = 0; i < pts.length; i++ ) {
      pts[i].setMap(null)
    }
  }

  render() {
    return (
      <div>
        <MainHeader map={true}/>
        <div id='map-container' ref={map => this.mapNode = map}></div>
      </div>
    )
  }
}
