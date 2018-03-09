import React from 'react'
import { Link } from 'react-router-dom'

export default class MapHeader extends React.Component {
  constructor(props){
    super(props)

  }



  render() {
    return (
      <div>
      <div className="main-header">
        <div className="header-left">
          <h1 className="logo">Tourmalet</h1>
        </div>
        <div className="header-right">
          <Link to='/dashboard'>Exit Builder</Link>
        </div>
      </div>
      <div className="control-head">
        <div className="search-bar">
          <MapSearch map={this.props.map}/>
        </div>
        <div className="header-right">
          <Link to='/'></Link>
        </div>
      </div>
    </div>
    )
  }
}

class MapSearch extends React.Component {

  componentDidMount(){
    this.initSearchBox()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.map && nextProps.map) {
      // debugger
      nextProps.map.addListener('bounds_changed', () => {
        this.search.setBounds(this.props.map.getBounds());
    })}
  }

  initSearchBox() {
    let that = this

    this.search = new google.maps.places.SearchBox(this.input)
    this.search.addListener('places_changed', () => {
      const places = this.search.getPlaces()

      places[0] ? this.props.map.panTo(places[0].geometry.location)
      : alert(this.input.value + ' is not a valid location my dude.')
    })
  }

  handleClick(e) {
    e.preventDefault()
    const geocoder = new google.maps.Geocoder()
    const pos = new google.maps.LatLng(this.input.value)
    debugger
    this.props.map.panTo(pos)
    // geocoder.geocode(this.input.value,
    //   (data) => this.props.map.panTo(data))
  }

  render() {
    return (
      <div className="search-container">
        
        <div className="search-div">
          <input className="search"
             type="text" placeholder="Enter a Location"
             ref={(input) => this.input = input }/>
          <button
            onClick={ this.handleClick.bind(this) }
          ><i className="material-icons">search</i></button>
        </div>

        <div className="ride-run-cont">
            <button className="ride-run">
              <img src="https://image.flaticon.com/icons/png/128/130/130276.png"/>
              <a>Ride</a>
            </button>
            <button className="ride-run">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Running_shoe_icon.png"/>
              <a>Run</a>
            </button>
        </div>

      </div>
      )
    }
  }

// const geocoder = new google.maps.Geocoder()
// geocoder.geocode(search.value,
//   (data) => props.map.panTo(data)

// props.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)
// search.addListener('keyPress', () => {
//         var places = search.getPlaces();
//         console.log(places)
//         if (places.length == 0) {
//           return;
//         }
//       })
