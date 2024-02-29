import React from 'react'
import './WeatherApp.css'
import cloudimg from '../Assets/cloudimg.png'
import humidity from '../Assets/humidity.png'
import wind from '../Assets/wind.png'

const WeatherApp = () => {

    let api_key = "e78934eb8e6d513cd0ac8682abe96548"

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percentage");
        const wind = document.getElementsByClassName("wind-rate");
        const temparature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "km/h";
        temparature[0].innerHTML = data.main.temp + "°c";
        location[0].innerHTML = data.name;
    }
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' />
                <button className='search-icon' onClick={()=>{search()}}>Search</button>
            </div>
            <div className="weather-img">
                <img src={cloudimg} />
            </div>
            <div className="weather-temp">24°c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity} className='icon' />
                    <div className="data">
                        <div className="humidity-percentage">
                            64%
                        </div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind} className='icon' />
                    <div className="data">
                        <div className="wind-rate">
                            16 km/hr
                        </div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
