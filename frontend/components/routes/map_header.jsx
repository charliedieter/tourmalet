import React from 'react'
import { Link } from 'react-router-dom'
import MapFooter from './map_footer'

export default class MapHeader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sel: 'Ride'
    }
    this.updateSel = this.updateSel.bind(this)
  }

  updateSel(e){
    e.preventDefault()
    const sel = this.state.sel === 'Ride' ? 'Run' : 'Ride'
    this.setState({ sel })
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

          <div className="undo-redo-cont">

            <button className="undo">
              <i className="material-icons">undo</i>
              <a>Undo</a>
            </button>

            <button className="clear">
              <i className="material-icons">close</i>
              <a>Clear</a>
            </button>

          </div>

          <div className="ride-run-cont">

              <button className={this.state.sel === 'Ride' ? 'ride selected' : 'ride'}
                onClick={this.updateSel}>
                <img src="https://image.flaticon.com/icons/png/128/130/130276.png"/>
                <a>Ride</a>
              </button>

              <button className={this.state.sel === 'Run' ? 'run selected' : 'run'}
                onClick={this.updateSel}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Running_shoe_icon.png"/>
                <a>Run</a>
              </button>

          </div>
          <div className="header-right">
            <button className="save-button">Save</button>
          </div>
        </div>

      <MapFooter
        el={this.props.el}
        type={this.state.sel}
        time={this.props.time}
        dist={this.props.dist}/>

    </div>
    )
  }
}

class MapSearch extends React.Component {

  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)

  }

  componentDidMount(){
    this.initSearchBox()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.map && nextProps.map) {
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
    const pos = new google.maps.LatLng(this.input.value)
    this.props.map.panTo(pos)
  }

  render() {
    return (
      <div className="search-container">

        <div className="search-div">
          <input className="search"
             type="text" placeholder="Enter a Location"
             ref={(input) => this.input = input }/>
          <button
            onClick={ this.handleClick }
          ><i className="material-icons">search</i></button>
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
