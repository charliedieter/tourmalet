import React from 'react'
import { style, key, rectangle, square } from './google_static_map_styling'

const StaticMap = props => {

  const url = rectangle + style + "&path=color:0xff0000ff|weight:2%7Cenc:" + props.polyline + key

  return (
    <div>

      <img src={ url } className="static-map" />
    </div>
  )
}

export default StaticMap
