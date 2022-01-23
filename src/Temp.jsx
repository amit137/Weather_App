import React, { useState } from "react";
import './index.css'
import Time from './Time'


const Temp = () => {

    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')


    const search = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=e1e8f50766dc748ba0a618b267ad0660`)
                .then(result => result.json())
                .then(
                    weatherData => {
                        setWeather(weatherData)
                        setCity('')//after submitting it becomes empty again
                        console.log(weatherData);
                    });
        }
    }


    function changedInput(event) {
        setCity(event.target.value)
    }


    const today = new Date().toDateString()

    return (
        <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 10) ? 'hot-w' : 'cold-w') : 'hot-w'} >

            <main>
                <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 10) ? 'contain' : 'cold-contain') : 'contain'} >

                    <div className="search-container">
                        <input type="text" className="search-bar" placeholder="Enter City" onChange={changedInput} value={city} onKeyPress={search}
                        />
                    </div>
                    {(typeof weather.main != 'undefined') ? (
                        <div>
                            <div className="container">
                                <div className="city-container">
                                    <div className="city">{weather.name},{weather.sys.country}</div>
                                    <div className="date">{today}</div>
                                    <div className="time"><Time /></div>

                                </div>
                                <div className="weather-container">
                                    <div className="temp">{Math.round(weather.main.temp)}°C</div>
                                    <div className="others">
                                        <div className="weather">{weather.weather[0].main} </div>
                                        <div className="humidtiy">Humidity :{weather.main.humidity}%</div>
                                        <div className="wind">Wind :{weather.wind.speed}km/h </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (<div className="errortime"><h2>Welcome to weather app!
                        Enter any city to know its weather.</h2></div>)}
                    <div className="notFound">

                        {weather.cod === '404' ? (
                            <p>City not found</p>
                        ) : (
                            <>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>



    )
}


export default Temp;