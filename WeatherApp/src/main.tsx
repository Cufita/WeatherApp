import React from "react";
import ReactDOM from "react-dom/client";
import WeatherStatistics from "./WeatherStatistics";
import WeatherPanel from "./WeatherPanel";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WeatherStatistics></WeatherStatistics>
    <WeatherPanel></WeatherPanel>
  </React.StrictMode>
);
