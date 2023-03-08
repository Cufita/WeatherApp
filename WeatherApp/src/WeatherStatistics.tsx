import React from "react";
import Sunny from "./images/sunny.png";

export default function WeatherStatistics() {
  return (
    <div className="weather-app">
      <div className="container">
        <h3 className="brand">the weather</h3>
        <div className="city-time">
          <h1 className="name">London</h1>
          <small>
            <span className="time">06:09</span>
            <span className="date"> Monday Sep 19</span>
          </small>
        </div>
        <span>☀️</span>
        <div className="weather">
          <span className="condition">Cloudy</span>
        </div>
      </div>
    </div>
  );
}
