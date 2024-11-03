import PropTypes from "prop-types";
import CurrentWeather from "./CurrentWeather";
import ForecastedWeather from "./ForecastedWeather";
import { APP_CONSTANTS } from "../data/appConstants";

export default function WeatherDisplay({ weather }) {
  function extractData(index, uhrType) {
    const uhrZeit = index < 10 ? "0" + index + "00" : index + "00";
    const apparentTemp = Math.floor(weather.hourly.apparent_temperature[index]);
    const rain = weather.hourly.rain[index];
    const showers = weather.hourly.showers[index];
    const snowfall = weather.hourly.snowfall[index];

    const zeitData = {
      uhrType,
      uhrZeit,
      apparentTemp,
      rain,
      showers,
      snowfall,
    };

    return zeitData;
  }

  const bringZeitData = extractData(APP_CONSTANTS.bringUhr, "Bringzeit");
  const gartenZeitData = extractData(APP_CONSTANTS.gartenUhr, "Gartenzeit");
  const abholZeitData = extractData(APP_CONSTANTS.abholUhr, "Abholzeit");

  return (
    <div className="mt-4 mr-0 ml-0 border-2 p-2 rounded-xl">
      <CurrentWeather currentWeather={weather.current} />
      <ForecastedWeather {...bringZeitData} />
      <ForecastedWeather {...gartenZeitData} />
      <ForecastedWeather {...abholZeitData} />
    </div>
  );
}
WeatherDisplay.propTypes = {
  weather: PropTypes.object.isRequired,
};
