import React from 'react'
import './Location.css'
import {DateTime} from "luxon"
function location({data}) {
  const x=DateTime.fromSeconds(data.dt).setZone(data.timezone).toFormat("cccc, dd LLL yyyy' | Local time: 'hh:mm a");
  return (
    <div className='location'>
        <p>{x}</p>
        <h2>{data.name}</h2>
    </div>
  )
}

export default location