import axios, { Axios } from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import './TurkishWeatherBlock.css'

const TurkishWeatherBlock = () => {
    const [data, setData] = useState({
        celcius: 69,
        name: 'Opole',
        // humidity: 69,
        // speed: 2,
        image: ''
    });

    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if(name !== ""){
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=cfbfd66107b7ff8d44c71027d7aec642&&units=metric`;
            axios.get(apiUrl)
             .then(res => {
                let imagePath = '';
                // te obrazki to musze znaleźć narazie to takie tymczasowe u know
                if(res.data.weather[0].main == "Clear") {
                    imagePath = "czysto";
                } else if (res.data.weather[0].main == "Clouds") {
                    imagePath = "chmury";
                } else if (res.data.weather[0].main == "Drizzle") {
                    imagePath = "mżawa";
                } else if (res.data.weather[0].main == "Rain") {
                    imagePath = "desczówa";
                } else if (res.data.weather[0].main == "Mist") {
                    imagePath = "mgławica";
                } else {
                    imagePath = 'default';
                }
                
                console.log(res.data);
                setData({...data, 
                            celcius: res.data.main.temp, 
                            name: res.data.name, 
                            // humidity: res.data.main.humidity, 
                            // speed: res.data.wind.speed,
                            image: imagePath})
                setError("");
             })
             .catch(err => {
                if (err.response.status == 404) {
                    setError("Invalid name")
                } else {
                    setError("");
                }
                console.log(err);
             });
        }
    }

    return(
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder="Enter City Name" onChange={e => setName(e.target.value)}/>
                    {/* zamiast "search" powinien być jakiś obrazek z lupką ale cieć głupi nie dał linka do swoich obrazków, wieczorkiem jak będę miał czas to może poszukam, bo zaraz to musze iść się uczyć na niemiecki :skull: */}
                    <button onClick={handleClick}>search</button>
                </div>
                <div className="error">
                    <p>{error}</p>
                </div>
                <div className="winfo">
                    <p className="icon">{data.image}</p>
                    <h1>{Math.round(data.celcius)}°C</h1>
                    <h2>{data.name}</h2>
                    {/* JEŚLI BEDZIEMY POTRZEBOWAC TO ODKOMENTUJEMY :** */}
                     {/* <div className="details">
                            <div className="col">
                                <p>imgHumidity</p>
                                <div className='humidity'>
                                    <p>{Math.round(data.humidity)}%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="col">
                                <p>imgWind</p>
                                <div className='wind'>
                                    <p>{Math.round(data.speed)} km/h</p>
                                    <p>Wind</p>
                                </div>
                            </div>
                     </div> */}
                </div>
            </div>
        </div>

    );
}

export default TurkishWeatherBlock;