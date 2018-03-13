import React from 'react'
import { withRouter } from 'react-router-dom'
import { style, key, rectangle, square } from './google_static_map_styling'

const StaticMap = props => {

  const url = rectangle + style + "&path=color:0xff0000ff|weight:2%7Cenc:" + props.polyline + key

  return (
    <div onClick={() => props.history.push(`/activities/${props.idx}`)}>
      <img src={ url } className="static-map" />
    </div>
  )
}

export default withRouter(StaticMap)
