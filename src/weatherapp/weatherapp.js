import React, { useState } from 'react';
import axios from 'axios';
import "./weather.css"
import humidityicon from '../assets/humidity.png'
import windicon from '../assets/wind.png'

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51fca3e8a14b7aa31a65565a065cfd51&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='topbar'>
        <input type="text" value={city}  onChange={(event) => setCity(event.target.value)} placeholder="Enter city name" />
        <div className='search'>
        <button type="submit">Search</button>
        </div>
        
      </form>
      {weatherData && (        
          <div >
            <div className='icon' id='icons'>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="weather icon" id="weathericon"></img>
            </div>
          <div className='weathertemp'> { Math.round(weatherData.main.temp)} °C</div>
          <div className='location'> {weatherData.name}</div>
          <div className='datacontainer'>
            <div className='element'>
              <img src={humidityicon} className='icon'></img>
              <div className='data'>
                <div className='humidity-percent'>{Math.round(weatherData.main.humidity)} %</div>
                <div className='text'> Humidity</div>
              </div>
              
            </div>
          <div className='element'>
            <img src={windicon} className='icon'></img>
            <div className='data'>
            <div className='wind-speed'>{weatherData.wind.speed} m/s</div>
            <div className='text'> Wind Speed</div>
            </div>
          </div>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default WeatherApp;