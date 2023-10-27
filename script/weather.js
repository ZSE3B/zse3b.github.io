'use strict';

const weather = {
    init: () => {
        document.querySelector('#weather').addEventListener('change', weather.getLocation);
        document.querySelector('#submit').addEventListener('click', weather.fetchWeather)
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
            console.log('coś zrobiło');
            if (!resp.ok) throw new Error(resp.statusText);
            return resp.json();
        })
        .then(data => {
            weather.showInfo(data);
        })
        .catch(weather.fail)

    },
    showInfo: (data) => {
        document.querySelector('#answer').value = JSON.stringify(data);
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
            console.log("coś pykło");
            document.querySelector('#lat').value = position.coords.latitude.toFixed(3);
            document.querySelector('#lon').value = position.coords.longitude.toFixed(3);
    },
    fail: (err) => {
        console.error("no coś nie pykło");
        console.error(err);
    },
}

weather.init();