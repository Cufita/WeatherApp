import React from "react";

export default function WeatherPanel() {
  return (
    <div className="panel">
      <form action="" id="locationInput">
        <input
          type="text"
          className="search"
          placeholder="Search Location..."
        />
        <button type="submit" className="submit"></button>
      </form>
    </div>
  );
}
