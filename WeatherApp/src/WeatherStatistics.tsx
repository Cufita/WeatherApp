import React from "react";
import Sunny from "./images/sunny.png";
import "./WeatherStatistics.css";

export default function WeatherStatistics() {
  return (
    <div className="weather-app">
      <div className="container">
        <h3 className="brand">The WeatherApp</h3>
        <div>
          <h1 className="temp">16&#176;</h1>
          <div className="city-time">
            <h1 className="name">London</h1>
            <small>
              <span className="time">06:09</span>
              <span className="date"> Monday Sep 19</span>
            </small>
          </div>
          <div className="weather">
            <img src="../src/images/sunny.png" alt="" />
            <span className="condition">Cloudy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
