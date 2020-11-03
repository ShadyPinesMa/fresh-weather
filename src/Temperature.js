import React from "react";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-4">
          <span className="current-temp">
            <strong className="temp-number" id="temperature">
              65
            </strong>
            <small className="units">
              <a href="#" id="fahrenheit" className="active">
                °F
              </a>{" "}
              |{" "}
              <a href="#" id="celcius">
                °C
              </a>
            </small>
          </span>
        </div>
        <div className="col-4">
          <img className="weather-image" id="icon" src="" />
        </div>
        <div className="col-4">
          <ul className="stats">
            <li>
              Humidity: 50<span id="humidity"></span>%
            </li>
            <li>
              Wind: 5<span id="wind"></span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
