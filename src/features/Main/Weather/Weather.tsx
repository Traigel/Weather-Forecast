import React, {useEffect} from 'react';
import styles from './Weather.module.scss'
import {CitySelector} from './CitySelector/CitySelector';
import {CityType, setLocation} from '../weather-reducer';
import {useAppSelector} from '../../../common/hooks/useAppSelector';
import {useAppDispatch} from '../../../common/hooks/useAppDispatch';
import {getCityCurrentWeather, getCityForecastWeather} from '../weather-actions';
import {usePosition} from '../../../common/hooks/usePosition';
import {Preloader} from '../../../common/components/Preloader/Preloader';
import {WeatherNow} from '../../../common/components/WeatherNow/WeatherNow';
import {WeatherInfo} from './WeatherInfo/WeatherInfo';
import {WeatherForecast} from '../../../common/components/WeatherForecast/WeatherForecast';

export const Weather = () => {

    const position = usePosition()
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const status = useAppSelector(state => state.app.status)
    const weather = useAppSelector(state => state.weather)

    const callBackCityHandler = (city: CityType) => {
        dispatch(getCityCurrentWeather({q: city, cnt: 24}))
    }

    useEffect(() => {
        dispatch(getCityCurrentWeather({q: weather.city, cnt: 24}))
    }, [])

    useEffect(() => {
        if (position.position && !weather.location) {
            dispatch(getCityCurrentWeather({
                lon: position.position.coords.longitude,
                lat: position.position.coords.latitude,
            }))
            dispatch(getCityForecastWeather({
                lon: position.position.coords.longitude,
                lat: position.position.coords.latitude,
                cnt: 24
            }))
        }
        return () => {
            dispatch(setLocation(null))
        }
    }, [position.position])

    if (!isInitialized) {
        return <Preloader/>
    }

    return <div className={styles.weatherComponent}>
        <div className={styles.weatherNowBox}>
            <WeatherNow
                temp={weather.weatherData?.main.temp}
                name={weather.weatherData?.name}
                description={weather.weatherData?.weather[0].description}
                icon={weather.weatherData?.weather[0].icon}
            />
            <WeatherInfo
                main={weather.weatherData?.main}
                wind={weather.weatherData?.wind}
            />
            <CitySelector
                city={weather.weatherData?.name}
                callBack={callBackCityHandler}
                status={status}
            />
        </div>
        <WeatherForecast lists={weather.forecastData?.list}/>
    </div>
}