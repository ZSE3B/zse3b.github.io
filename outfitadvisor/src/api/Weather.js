'use strict';
import { geoApiOptions, PARAMS, GEO_API_URL} from './Locate';

const weather = {
    init: () => {
        document.querySelector('#weather').addEventListener('change', weather.getLocation);
        document.querySelector('#submit').addEventListener('click', weather.fetchWeather);
    },
    fetchWeather: (ev) => {
        let lat = document.querySelector('#lat').value;
        let lon = document.querySelector('#lon').value;
        let key = '9f94744dd373a0769df015118b047565';  //klucz leona z openweathermap lepiej później zmienić
        let units = 'metric';
        let lang = 'en';
        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

        fetch(url)
        .then(resp => {
            if (!resp.ok) throw new Error(resp.statusText);
            return resp.json();
        })
        .then(data => {
            weather.storeInfo(data);
        })
        .catch(weather.fail);

    },
    storeInfo: (data) => {
        let info = JSON.stringify(data);
        
        let fs = require('fs');
        fs.writeFile("wither.json", info, fail(err));
    },
    getLocation: (ev) => {
        if (!document.querySelector('#weather').checked) return;
        let opt = {
            enableHighAccuracy: true,
            timeout: 1000 * 10,
            maximumAge: 1000 * 60 * 5,
        };
        navigator.geolocation.getCurrentPosition(weather.succes, weather.fail, opt);
    },
    succes: (position) => {
            document.querySelector('#lat').value = position.coords.latitude.toFixed(3);
            document.querySelector('#lon').value = position.coords.longitude.toFixed(3);
    },
    fail: (err) => {
        if(err)
            console.log(`Błąd: ${err}`);
    },
}

weather.init();