import React from 'react'
import mapStyle from './google_maps_styling.js'
import MapHeader from './map_header'

export default class RouteMap extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      waypts: [],
      travelMode: 'DRIVING',
      map: null
    }
    this.placeMarker.bind(this)
  }

  componentDidMount(){
    this.initMap();
    this.setState({map: this.map})
  }

  initMap() {
    const mapOptions = {
      center: { lat: 42.9149, lng: 0.1863 },
      zoom: 13,
      styles: mapStyle.tourmalet,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        }
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions)
    // new google.maps.BicyclingLayer().setMap(this.map) Toggle on for function > fashion
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const initialLocation =
        new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
        this.map.panTo(initialLocation)

        google.maps.event.addListener(this.map, 'click', e => {
          this.placeMarker(e.latLng)
        });
      });
    }
  }

  placeMarker(latLng){
    // const icon = {
    //   url: "https://image.flaticon.com/icons/svg/69/69434.svg",
    //   scaledSize: new google.maps.Size(40, 40),
    //   anchor: new google.maps.Point(25, 36)}
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: String(this.state.waypts.length + 1)
    })

    const updated = this.state.waypts.concat(marker)
    this.setState({waypts: updated})

    if (this.state.waypts.length > 1) {
      this.setElevationGain()
      this.renderRoute()
    }
  }

  renderRoute(){
    const pts = this.state.waypts
    debugger
    const start = pts[0].position
    const end = pts[pts.length - 1].position

    const waypts = this.makeWayPts(pts.slice(1, -1))

    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
      draggable: true
    })
    const polyLine = new google.maps.Polyline
    directionsDisplay.setMap(this.map)

    directionsService.route({
      origin: start,
      destination: end,
      waypoints: waypts,
      travelMode: this.state.travelMode
    }, (payload, status) => {
      if (status === 'OK') {
        this.clearWayPts()
        this.setTravelTime(payload)
        this.setDistance(payload)
        directionsDisplay.setDirections(payload)
      } else {
        alert("I done goofed and " + status)
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
    for (var i = 1; i < pts.length - 1; i++ ) {
      pts[i].setMap(null)
    }
  }

  setElevationGain(){
    debugger
    const elevator = new google.maps.ElevationService

    elevator.getElevationAlongPath({
      path: this.state.waypts.map(pt => pt.position),
      samples: 256
    }, (els, response) => {
        if (response === 'OK'){

          let totalElGain = 0
          for (var i = 0; i < els.length - 1; i++) {
            if (els[i].elevation < els[i + 1].elevation) {
              totalElGain += els[i + 1].elevation - els[i].elevation
            }
          }
          this.setState({ el: Math.round(totalElGain * 3.28084)})
        }
      }
    )
  }

  setTravelTime(payload){
    const legs = payload.routes[0].legs
    let secs = 0

    for (var i = 0; i < legs.length; i++) {
      secs += legs[i].duration.value
    }

    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs - (hours * 3600)) / 60);
    let seconds = secs - (hours * 3600) - (minutes * 60);

    if (hours   < 10) hours   = "0"+hours;
    if (minutes < 10) minutes = "0"+minutes;
    if (seconds < 10) seconds = "0"+seconds;

    if (minutes === "00" && hours === "00" ) {
      this.setState({time: `${seconds} s`})
    } else if (hours === "00") {
      this.setState({time: `${minutes}:${seconds}`})
    } else {
      this.setState({time: `${hours}:${minutes}:${seconds}`})
    }
  }

  setDistance(payload){
    debugger
    const legs = payload.routes[0].legs
    let meters = 0

    for (var i = 0; i < legs.length; i++) {
      meters += legs[i].distance.value
    }
    this.setState({
      dist: parseFloat(Math.round((meters / 1609.344) * 100) / 100).toFixed(2)
    })
  }

  clearMap() {

  }

  render() {

    return (
      <div>
        <MapHeader
          map={this.map}
          el={this.state.el}
          time={this.state.time}
          dist={this.state.dist}/>
        <div id='map-container' ref={map => this.mapNode = map}></div>

      </div>
    )
  }
}
