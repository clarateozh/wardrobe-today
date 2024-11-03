import { fetchWeatherApi } from 'openmeteo';

const params = {
	"latitude": 49.96028728190555,
	"longitude": 9.660567088631607,
	"current": ["temperature_2m", "apparent_temperature", "rain", "showers", "snowfall"],
	"hourly": ["temperature_2m", "apparent_temperature", "precipitation_probability", "rain", "showers", "snowfall"],
	"timezone": "Europe/Berlin",
	"forecast_days": 1
};
const url = "https://api.open-meteo.com/v1/forecast";


export async function fetchWeatherData() {
    const responses = await fetchWeatherApi(url, params);

    // Helper function to form time ranges
    const range = (start, stop, step) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    
    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];
    
    // // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    // // const timezone = response.timezone();
    // // const timezoneAbbreviation = response.timezoneAbbreviation();
    // // const latitude = response.latitude();
    // // const longitude = response.longitude();
    
    const current = response.current();
    const hourly = response.hourly();
    
    // // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature_2m: current.variables(0).value(),
            apparent_temperature: current.variables(1).value(),
            rain: current.variables(2).value(),
            showers: current.variables(3).value(),
            snowfall: current.variables(4).value(),
        },
        hourly: {
            time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
                (t) => new Date((t + utcOffsetSeconds) * 1000)
            ),
            temperature_2m: hourly.variables(0).valuesArray(),
            apparent_temperature: hourly.variables(1).valuesArray(),
            precipitationProbability: hourly.variables(2).valuesArray(),
            rain: hourly.variables(3).valuesArray(),
            showers: hourly.variables(4).valuesArray(),
            snowfall: hourly.variables(5).valuesArray(),
        },
    
    };

    // console.log(JSON.stringify(weatherData))

    return weatherData;



}