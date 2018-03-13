import React from 'react'
import mapStyle from '../routes/google_maps_styling'


class Map extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){

    this.path = new google.maps.geometry.encoding
    .decodePath(this.props.polyline)

    const mapOpts = {
      center: this.path[Math.round(this.path.length / 2)],
      zoom: 14,
      styles: mapStyle.tourmalet,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        },
      bicyclingLayer: false
    }

    this.map = new google.maps.Map(this.mapNode, mapOpts)

    const poly = new google.maps.Polyline({
      strokeColor: '#494442',
      strokeOpacity: 1.0,
      strokeWeight: 4,
      path: this.path
    });
    
    poly.setMap(this.map)
    this.placeMarkers()
  }

  placeMarkers(latLng1, latLng2){

    const icon = {
      url: "https://image.flaticon.com/icons/svg/33/33622.svg",
      scaledSize: new google.maps.Size(40, 40)
      }

    const marker1 = new google.maps.Marker({
      position: this.path[0],
      map: this.map,
      icon
    })

    const marker2 = new google.maps.Marker({
      position: this.path[this.path.length - 1],
      map: this.map,
      icon
    })

  }

  render() {
    return(
      <div id='map-show-container' ref={map => this.mapNode = map}></div>
    )
  }
}

export default Map
