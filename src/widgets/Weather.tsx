import { useContext, useEffect, useState } from "react"

const key = 'b7a04089d7546d97af027ed92d836cf0'
export const Weather = () => {
    const [lon, setLon] = useState(0)
    const [lat, setLat] = useState(0)
    const [descript, setDescript] = useState('')
    const [currentTemp, setCurrentTemp] = useState(0)
    const [highTemp, setHighTemp] = useState(0)
    const [lowTemp, setLowTemp] = useState(0)
    const [icon, setIcon] = useState("")

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(locSuccessCallback, locErrorCallback)
    })

    useEffect(() => {
        getWeather(lon, lat)
    }, [lat, lon])

    const getWeather = (lon: number, lat: number) => {
        //var key = '{yourkey}';
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +'&appid=' + key)  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log('data of weather incoming')
            console.log(data);
            setWeather(data)
        })
        .catch(function() {
          // catch any errors
          console.error('error occured in api call')
        });
    }

    const setWeather = (data: Record<string, any>) => {
        setCurrentTemp(toFarenheit(data.main.temp))
        setHighTemp(toFarenheit(data.main.temp_max))
        setLowTemp(toFarenheit(data.main.temp_min))
        setDescript(data.weather[0].description)
        setIcon(data.weather[0].icon)
    }
    const toFarenheit = (kelv: string): number => {
        return Math.round(((parseFloat(kelv)-273.15)*1.8)+32)
    }
     
    function locSuccessCallback (position: GeolocationPosition) {
        console.log('position is:' )
        console.log(position)
        setLon(position.coords.longitude)
        setLat(position.coords.latitude)
        console.log(lon, lat)
    }
    const locErrorCallback = (error: GeolocationPositionError) => {
        console.error(error)
    }
    

    return (
        <> 
        {
            (lon == 0 && lat == 0) ? <div className='widget__content'> Loading Weather </div> : 
            <div className="widget__content weather">
                <div className="weather-conditions">
                    <div className="currentTemp">
                        {currentTemp}&deg;
                    </div>
                    <div className="descript">{descript}</div>
                    <br></br>
                    <div className="highLowTemp">High: {highTemp}&deg; 
                    Low: {lowTemp}&deg;</div>
                </div>
                <div className="weather-icon">
                    <img className="weather-icon__image" src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
                </div>
            </div>
        }
        </>
    )
}

