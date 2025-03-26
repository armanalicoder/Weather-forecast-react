export default async function getWeatherData(city){
    const apikey = "3ef6afa9b8eb7f0d0612bf59b33c76f3";
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
        try {
            let resp = await fetch(url);
            let data = await resp.json();
            if (data.cod == 404) {
                window.alert(data.message)
                return;
            }
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${apikey}`;
            let forecastResp = await fetch(forecasturl);
            let futureWeather = await forecastResp.json();

            const timeTaken = "12:00:00";
            let filteredData = futureWeather.list.filter((ele) =>
                ele.dt_txt.includes(timeTaken)
            );

            const WeatherInfo = {
                place: data.name,
                temp: data.main.temp,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                condition: data.weather[0].description,
                id: data.weather[0].id
            };
            return [WeatherInfo,filteredData];
        } catch (error) {
            console.error("Error fetching data:", error);
        }
}