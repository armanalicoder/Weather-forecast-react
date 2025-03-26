export default function WeatherIcon(id){
    if(id>=200 && id<=232){
        return "/img/thunderstorm.svg";
    }
    if(id>=300 && id<=321){
        return "/img/drizzle.svg";
    }
    if(id>=500 && id<=531){
        return "/img/rain.svg";
    }
    if(id>=600 && id<=622){
        return "/img/snow.svg";
    }
    if(id>=701 && id<=781){
        return "/img/atmosphere.svg";
    }
    if(id>=800 && id<=804){
        return "/img/clear.svg";
    }
    else{
        return "/img/clouds.svg";
    }
}