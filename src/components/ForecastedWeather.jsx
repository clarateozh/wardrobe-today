import PropTypes from "prop-types";
import imgRain from "../assets/images/weather/rain.svg";
import imgSnow from "../assets/images/weather/snowman.svg";

export default function ForecastedWeather({
  uhrType,
  uhrZeit,
  apparentTemp,
  rain,
  showers,
  snowfall,
}) {
  return (
    <div className="flex flex-row justify-between gap-4 border-2 border-slate-400 rounded-lg mt-3 pt-1 pl-3 pr-3 pb-1">
      <div className="flex flex-col ">
        <h3>
          <strong>{uhrType}</strong>
        </h3>
        <p>{uhrZeit}</p>
      </div>
      <div className="flex flex-row gap-3">
        {(rain > 0 || showers > 0) && (
          <div>
            <img src={imgRain} alt="Rain" title="Rain" className="size-12" />
          </div>
        )}
        {snowfall > 0 && (
          <div>
            <img src={imgSnow} alt="Snow" title="Snow" className="size-12" />
          </div>
        )}
        <div className="pt-3">{apparentTemp} &deg;C</div>
      </div>
    </div>
  );
}
ForecastedWeather.propTypes = {
  uhrType: PropTypes.string.isRequired,
  uhrZeit: PropTypes.string.isRequired,
  apparentTemp: PropTypes.number.isRequired,
  rain: PropTypes.number.isRequired,
  showers: PropTypes.number.isRequired,
  snowfall: PropTypes.number.isRequired,
};
