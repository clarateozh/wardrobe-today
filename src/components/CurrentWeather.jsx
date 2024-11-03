import PropTypes from "prop-types";
import imgRain from "../assets/images/weather/rain.svg";
import imgSnow from "../assets/images/weather/snowman.svg";

export default function CurrentWeather({ currentWeather }) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <label>Current Temp</label>
        <strong>{Math.floor(currentWeather.temperature_2m)} &deg;C</strong>
      </div>
      {(currentWeather.rain > 0 || currentWeather.showers > 0) && (
        <div>
          {" "}
          <img src={imgRain} alt="Rain" title="Rain" className="size-12" />
        </div>
      )}
      {currentWeather.snowfall > 0 && (
        <div>
          {" "}
          <img src={imgSnow} alt="Snow" title="Snow" className="size-12" />
        </div>
      )}
      <div className="flex flex-col">
        <label>Feels like</label>
        <strong>
          {Math.floor(currentWeather.apparent_temperature)} &deg;C
        </strong>
      </div>
    </div>
  );
}
CurrentWeather.propTypes = {
  currentWeather: PropTypes.object.isRequired,
};
