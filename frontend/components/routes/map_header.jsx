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

const MapSearch = props => {
  const input = <input className="search"
     type="text" placeholder="Enter a Location"/>
  const search = new google.maps.places.SearchBox(input)
  const geocoder = new google.maps.Geocoder()
  return (
    <div className="search-div">
      {input}
      <div>
      <button
        onClick={() => geocoder.geocode(search.value,
          (data) => props.map.panTo(data))}
        ><i className="material-icons">search</i></button>
      </div>
    </div>
  )
}
