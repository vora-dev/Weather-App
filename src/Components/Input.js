import React from 'react'
import './Input.css'
import {useState } from "react";
import {UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
function Input({setInput}) {
  const [val,setVal]=useState("");
  const searc=()=>{
    if(val!=="")
     setInput([val]);
     else
     window.alert("please enter city name");
  }
 const getlocation=()=>{
   if(navigator.geolocation)
   {
    navigator.geolocation.getCurrentPosition((pos)=>{
      setInput([pos.coords.latitude,pos.coords.longitude]);
    })
   }
   else
   {
    window.alert("Device does'nt support GPS");
   }
 }
  return (
    <div className='input'>
        <input type ="text" placeholder='search for location...' className='search'  onChange={(e)=>{
            setVal(e.target.value)
        }}></input>
        <UilSearch size="25" color="white"  className="searchicon" onClick={searc}  />
        <UilLocationPoint size="25" color="white" className="locationicon" onClick={getlocation}/>
    </div>
   
  )
}

export default Input