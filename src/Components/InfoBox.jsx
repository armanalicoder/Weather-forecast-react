import "../../public/css/InfoBox.css"
import "../../public/css/weatherinfo.css"
import Home from "./Home";
import WeatherInfo from "./WeatherInfo";
import ForecastInfo from "./ForecastInfo";
export default function InfoBox({info,futureInfo}){
    return(
        <>
        <div className='InfoBox' style={{fontSize : "18px"}}>
        {Object.keys(info).length === 0 ?
        <Home/>
         :
         <div>
                <WeatherInfo info={info}/>
                <ForecastInfo info={futureInfo}/>
        </div>
        }
         
        </div>
       
        </>
    )
}