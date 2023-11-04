/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './TurkishWeatherBlock.scss';

const TurkishWeatherBlock = () => {
  const [data, setData] = useState({
    celcius: null,
    name: null,
    // humidity: 69,
    // speed: 2,
    image: '',
  });

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const getLocation = () => {
    if (data.name !== null) return;
    let opt = {
      enableHighAccuracy: true,
      timeout: 1000 * 10,
      maximumAge: 1000 * 60 * 5,
    };
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude.toFixed(3);
        let lon = position.coords.longitude.toFixed(3);

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cfbfd66107b7ff8d44c71027d7aec642&&units=metric`;

        handleWeather(apiUrl);
      },
      () => {
        return;
      },
      opt
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = () => {
    if (name.trim() !== '') {
      const fixedName = encodeURIComponent(name.trim());
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${fixedName}&appid=cfbfd66107b7ff8d44c71027d7aec642&&units=metric`;

      handleWeather(apiUrl);
    }
  };

  const handleWeather = (apiUrl) => {
    axios
      .get(apiUrl)
      .then((res) => {
        let imagePath = '';
        // te obrazki to musze znaleźć narazie to takie tymczasowe u know
        const weatherConditionToImage = {
          Clear: 'Clear',
          Clouds: 'Clouds',
          Drizzle: 'Drizzle',
          Rain: 'Rain',
          Mist: 'Mist',
        };

        const defaultImagePath = 'default';
        const weatherMain = res.data.weather[0].main;
        imagePath = weatherConditionToImage[weatherMain] || defaultImagePath;

        // console.log(res.data);
        setData({
          ...data,
          celcius: res.data.main.temp,
          name: res.data.name,
          image: imagePath,
        });
        setError('');
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setError('Invalid name');
        } else {
          setError('');
        }
        console.log(err);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="weather-container">
      {getLocation()}
      <div className="weather">
        <div className="search">
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleClick}>
            <i className="fa-solid fa-magnifying-glass fa-flip-horizontal"></i>
          </button>
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
        {data.name !== '' && data.celcius !== null && (
          <div className="winfo">
            <p className="icon">{data.image}</p>
            <h1>{Math.round(data.celcius)}°C</h1>
            <h2>{data.name}</h2>
            {/* JEŚLI BEDZIEMY POTRZEBOWAC TO ODKOMENTUJEMY :** */}
            {/* <div className="details">
              <div className="col">
                <p>imgHumidity</p>
                <div className="humidity">
                  <p>{Math.round(data.humidity)}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <p>imgWind</p>
                <div className="wind">
                  <p>{Math.round(data.speed)} km/h</p>
                  <p>Wind</p>
                </div>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TurkishWeatherBlock;
