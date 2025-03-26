import WeatherIcon from "./WeatherIcon"
function WeatherInfo({info}) {
    const curr = new Date()
  return (
    <>
    <div>
            <div className="weatherInfo">
            <h2><i className="fa-solid fa-location-dot"></i>{info.place}</h2>
            <h2>{curr.toDateString()}</h2>
            </div>
            <div className="weatherInfo">
                <img src={WeatherIcon(info.id)} alt="weatherimg"/>
                <div style={{lineHeight: "10px"}}>
                    <h1>{info.temp}&deg;C</h1>
                    <h1>{info.condition}</h1>
                </div>
            </div>
            <div className="weatherInfo">
                <div style={{lineHeight: "10px"}}>
                    <h3><i className="fa-solid fa-droplet"></i> Humidity</h3>
                    <h3>{info.humidity}%</h3>
                </div>
                <div style={{lineHeight: "10px"}}>
                    <h3><i className="fa-solid fa-wind"></i> Wind Speed</h3>
                    <h3>{info.wind}kmph</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default WeatherInfo
