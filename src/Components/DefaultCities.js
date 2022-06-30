import React from 'react'
import './DefaultCities.css'
const cities=[
  {
    id: 1,
    name: "Mumbai",
  },
  {
    id: 2,
    name: "Delhi",
  },
  {
    id:3,
    name: "Kolkata",
  },
  {
    id: 4,
    name: "Bangalore",
  },
  {
    id: 5,
    name: "Chennai",
  },
  ]

function DefaultCities({setInput}) {

  return (<div className='city'>
     {
      cities.map(city => 
        <button key={city.id} className='btn' onClick={()=>{
          
          setInput([city.name]);
        }}>{city.name}</button>
      )
     }
  </div>)
}

export default DefaultCities