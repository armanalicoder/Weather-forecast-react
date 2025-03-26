import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "../../public/css/WeatherBox.css";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({})
    const [futureData,setFutureData] = useState([]);
    const [loading,setLoading] = useState(false);
    const updateInfo = (newinfo,futureinfo,loading)=>{
        setWeatherInfo(newinfo);
        setFutureData(futureinfo)
        setLoading(true)
    }
    return (
        <>
            <div className="weatherBox">
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} futureInfo={futureData}/>
            </div>
        </>
    )
}