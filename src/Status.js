import React from "react";

export default function Status() {
  return (
    <div className="Status">
      <ul class="day-weather">
        <li class="day-time">
          Last updated: 00:00 <span id="current-day-time"></span>
        </li>
        <li class="weather-type" id="current-status">
          Sunny
        </li>
      </ul>
    </div>
  );
}
