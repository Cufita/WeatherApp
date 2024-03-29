import React from "react";
import "./WeatherPanel.css";

export default function WeatherPanel() {
  return (
    <div className="panel">
      <form action="" id="locationInput">
        <input
          type="text"
          className="search"
          placeholder="Search Location..."
        />
        <button type="submit" className="submit">
          <img src="../src/images/buscar.png" alt="" />
        </button>
      </form>
      <ul className="cities">
        <li className="city">New York</li>
        <li className="city">California</li>
        <li className="city">Paris</li>
        <li className="city">Tokyo</li>
      </ul>
      <ul className="details">
        <h4>Weather Details</h4>
        <li>
          <span>Cloudy</span>
          <span className="cloud">89%</span>
        </li>
        <li>
          <span>Humidity</span>
          <span className="humidity">64%</span>
        </li>
        <li>
          <span>Wind</span>
          <span className="wind">30km/h</span>
        </li>
      </ul>
    </div>
  );
}
