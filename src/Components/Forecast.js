import React from 'react'
import './Forecast.css'
import {DateTime} from "luxon"
function Forecast({data}) {
  return (
    <div >
        <p className='head' >Hourly Forecast</p>
      <hr></hr>
      <div className='hourly'>
             {data.hourly.map((element)=>{
               return( <div className='items'>
                <p className='time'>{DateTime.fromSeconds(element.dt).setZone(data.timezone).toFormat("hh:mm a")}</p>
                <img src={' http://openweathermap.org/img/wn/'+element.icon+'@2x.png'}/>
                <p className='temperature'>{Math.round(element.temp)}°</p>
              </div>)
             })}
      </div>
      <p className='head' >Daily Forecast</p>
      <hr></hr>
      <div className='daily'>
      {data.daily.map((element)=>{
               return( <div className='items'>
                <p className='date'>{DateTime.fromSeconds(element.dt).setZone(data.timezone).toFormat("dd LLL")}</p>
                <img src={' http://openweathermap.org/img/wn/'+element.icon+'@2x.png'}/>
                <p className='temperature'>{Math.round(element.min)}°/{Math.round(element.max)}°</p>
              </div>)
             })}
      </div>
    </div>
  )
}

export default Forecast