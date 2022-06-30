import './App.css';
import DefaultCities from './Components/DefaultCities';
import Input from './Components/Input';
import Location from './Components/Location';
import WeatherInfo from './Components/WeatherInfo';
import Forecast from './Components/Forecast';
import weathercall from './Components/Weather.js'
import { useEffect, useState } from "react";


function App() {
  
const [input, setInput] =useState(["Delhi"]);
 const [weather, setWeather] =useState(null);
useEffect(()=>{
 const func= async()=>{
const data=await weathercall(input);
 setWeather(data);

}
  func();

},[input]);

  return (
    <div className={(weather&&weather.temp)>=30?"Apphot":"App"}>
     <h1 className='heading'>Weather-App</h1>
     <DefaultCities setInput={setInput}/>
     <Input setInput={setInput}/>
    { weather&&(
      <div>
     <Location data={weather}/>
     <WeatherInfo data={weather}/>
     <Forecast data={weather}/></div>)}
    
    </div>
  );
}

export default App;
