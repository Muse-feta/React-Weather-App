import React, { useState }  from "react";
import "./Weather.scss";
import Search_Icon from "../Assets/search.png";
import clear from "../Assets/clear.png";
import cloud from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import humidity from "../Assets/humidity.png";
import rain from "../Assets/rain.png";
import snow from "../Assets/snow.png";
import wind from "../Assets/wind.png";

function Weather() {
  const Api_Key = "b3d1664ef279510f45c3638411b805a7";

  const [icon, setIcon] = useState(cloud);

  // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=b5be38d58944022377786c3463c8f3b

  let search = async () => {
    let element = document.getElementsByClassName("city-input");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${Api_Key}`;




    

    let response = await fetch(url);
    let data = await response.json();

    let humidityRate = document.getElementsByClassName("humidityRate");
    let windRate = document.getElementsByClassName("windRate");
    let tempRate = document.getElementsByClassName("tempRate");
    let weatherlocation = document.getElementsByClassName("weather-location");

    humidityRate[0].innerHTML = data.main.humidity + ' %';
    windRate[0].innerHTML = Math.floor(data.wind.speed) + ' KM/H';
    tempRate[0].innerHTML = Math.floor(data.main.temp) + " °C";
    weatherlocation[0].innerHTML = data.name;

    
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setIcon(clear);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setIcon(cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setIcon(drizzle);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setIcon(drizzle);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setIcon(rain);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setIcon(rain);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setIcon(snow);
    }else {
      setIcon(clear);
    }


  };

  return (
    <div className="all-wrapper">
      <div className="container">
        <div className="top-bar">
          <input type="text" className="city-input" placeholder="search" />

          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <img src={Search_Icon} alt="" />
          </div>
        </div>

        <div className="image-deg">
          <div className="weather-image">
            <img src={icon} alt="" />
          </div>

          <div className="weather-temp">
            <h3 className="tempRate">
              24°<span>C</span>
            </h3>
          </div>

          <div className="weather-location ">
            <p>Addis Ababa </p>
          </div>
        </div>

        {/* humidty and and speed jsx */}

        <div className="humidty-wind">
          <div className="humid-wind-disc">
            <div className="humidty-icon">
              <img src={humidity} alt="" />
            </div>

            <div>
              <h4 className="humidityRate">64%</h4>
              <h5>humidity</h5>
            </div>
          </div>

          {/* wind section */}

          <div className="humid-wind-disc">
            <div className="wind-icon">
              <img src={wind} alt="" />
            </div>

            <div>
              <h4 className="windRate">18Km/h</h4>
              <h5>WindSpeed</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
