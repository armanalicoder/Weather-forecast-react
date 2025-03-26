function ForecastInfo({info}) {
  return (
    <>
    {info === undefined || info.length === 0 ? null : (
      <div style={{color: "white", display : "flex", overflow: "auto",padding: "10px"}}>
        {info.map((item, index) => (
          <div key={index} style={{borderRadius: "15px",marginTop: "30px",padding:"10px", marginRight : "10px", lineHeight: "1px", boxShadow: "0px 0px 5px black", height: "124px", minWidth: "100px", width: "500px"}}>
            <h4>{item.dt_txt.split(" ")[0]}</h4>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather icon" />
            <h3>{item.main.temp}°C</h3>
          </div>
        ))}
      </div>
    )}
  </>
  )
}

export default ForecastInfo
