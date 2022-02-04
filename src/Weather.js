import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 10:00",
    description: "Sunny",
    imageURL: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: "80",
    wind: "10",
  };
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-1 cities"></div>
        <div className="col-9">
          <h1 className="header">Sophia's Weather App</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-8">
          <form>
            <input
              type="text"
              name="search"
              id="search-box"
              placeholder="Enter a City Name"
            />
          </form>
        </div>
        <div className="col-2">
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-4 left-weather">
            <h1 className="current-city">{weatherData.city}</h1>
            <button className="location-button">Show Current Location</button>
          </div>
          <div className="col-2"></div>
          <div className="col-4 right-weather">
            <h1 id="temp">19°</h1>
            <span className="units">
              <a href="/" id="celsius-link" className="active">
                °C
              </a>
              <a href="/" id="fahrenheit-link">
                °F
              </a>
            </span>
            <br />
            <img id="icon" src={weatherData.imageURL} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-4 left-weather">
            <h3 id="current-date">{weatherData.date}</h3>
          </div>
          <div className="col-2"></div>
          <div className="col-4 right-weather">
            <h3 id="weather-description">{weatherData.description}</h3>
            <div className="humidity-and-wind">
              <ul>
                <li>Humidity:{weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}m/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
