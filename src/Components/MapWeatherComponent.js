// WeatherComponent.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Style/WeatherComponent.css';

const WeatherComponent = ({ lat, lon }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (lat && lon) {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`;

      axios.get(url)
        .then(response => {
          setWeather(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [lat, lon]);

  if (!weather) {
    return <div>Loading weather data...</div>;
  }

  const temperature = weather.hourly.temperature_2m[0]; // Assuming the first hour's temperature is shown

  return (
    <div className='weather-container'>
      <h2>Weather Information</h2>
      <div className='weather-info'>
       
        <p><span>Location:</span> </p>
        <center>
       <div className='WordInfo'>
        <p>Latitude {lat},</p><p> Longitude {lon}</p>
        </div>
        </center>

        <p className='WordInfo3'><span>Temperature:</span></p>
        <div className='WordInfo2'> <p>{temperature} °C</p></div>
       
      </div>
    </div>
  );
};

export default WeatherComponent;
