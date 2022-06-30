import React from 'react'
import './WeatherInfo.css'
import {DateTime} from "luxon"
import { UilTemperatureHalf,UilTear,UilWind,UilSun,UilSunset,UilArrowUp,UilArrowDown} from '@iconscout/react-unicons'
function WeatherInfo({data}) {
  return (
    <div className='main'>
        <p className='info'>{data.main}</p>
        <div className='weather'>
            <img src={" http://openweathermap.org/img/wn/" + data.icon+ "@2x.png"} className='image' />
           <p className='temp'>{Math.round(data.temp)}°</p>
           <div className='extras'>
            <div className='feels'><UilTemperatureHalf size="20" color="white"/> Feels Like: {Math.round(data.feels_like)}°</div>
            <div className='humidity'><UilTear size="20" color="white"/> Humidity: {data.humidity}%</div>
            <div className='wind'><UilWind size="20" color="white"/>Wind: {Math.round(data.speed)} km/h</div>
           </div>
        </div>
        <div className='weather2'>
          
            <div className='sunrise'><UilSun size="20" color="white" className="sunic"/> Rise: {DateTime.fromSeconds(data.sunrise).setZone(data.timezone).toFormat("hh:mm a")}</div>
            <div className='sunset'><UilSunset size="20" color="white"className="sunic"/> Set: {DateTime.fromSeconds(data.sunset).setZone(data.timezone).toFormat("hh:mm a")}</div>
            <div className='max'><UilArrowUp size="20" color="white"className="sunic"/> Max: {Math.round(data.temp_max)}°</div>
            <div className='min'><UilArrowDown size="20" color="white"className="sunic"/> Min: {Math.round(data.temp_min)}°</div>
       
        </div>
        
    </div>
  )
}

export default WeatherInfo