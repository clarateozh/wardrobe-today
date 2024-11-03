import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import WardrobeDisplay from "./components/WardrobeDisplay";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";
import { fetchWeatherData } from "./util/fetchWeatherData";
// import { SAMPLE_DATA } from "./data/sample";

function App() {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    fetchWeatherData().then((payload) => setWeatherData(payload));
  }, []);

  if (weatherData)
    return (
      <div className="h-full">
        <Navbar time={new Date(weatherData.current.time)} />
        <WardrobeDisplay weather={weatherData.hourly} />
        <WeatherDisplay weather={weatherData} />
        <Footer />
      </div>
    );
}

export default App;
