import React, {useEffect} from 'react';
import styles from './Forecast.module.scss'
import {useAppSelector} from '../../../common/hooks/useAppSelector';
import {WeatherNow} from '../../../common/components/WeatherNow/WeatherNow';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch} from '../../../common/hooks/useAppDispatch';
import {Preloader} from '../../../common/components/Preloader/Preloader';
import {SearchCity} from './SearchCity/SearchCity';
import {ForecastInfo} from './ForecastInfo/ForecastInfo';
import {getCityCurrentWeather} from '../weather-actions';
import {WeatherForecast} from '../../../common/components/WeatherForecast/WeatherForecast';

export const Forecast = () => {

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.app.status)
    const isInitialized = useAppSelector(state => state.app.isInitialized)
    const weather = useAppSelector(state => state.weather)

    const searchCityHandler = async (value: string) => {
        dispatch(getCityCurrentWeather({q: value, cnt: 50}))
    }

    useEffect(() => {
        dispatch(getCityCurrentWeather({q: params.city, cnt: 50}))
    }, [])

    useEffect(() => {
        navigate(`/forecast/${weather.cityUrl}`)
    }, [weather.cityUrl])

    if (!isInitialized) {
        return <Preloader/>
    }

    return <div className={styles.forecastComponent}>
        <div className={styles.forecastNowBox}>
            <WeatherNow
                temp={weather.weatherData?.main.temp}
                name={weather.weatherData?.name}
                description={weather.weatherData?.weather[0].description}
                icon={weather.weatherData?.weather[0].icon}
            />
            <div className={styles.forecastInfo}>
                <SearchCity
                    callBack={searchCityHandler}
                    status={status}
                />
                <ForecastInfo
                    main={weather.weatherData?.main}
                    wind={weather.weatherData?.wind}
                />
            </div>
        </div>
        <WeatherForecast lists={weather.forecastData?.list}/>
    </div>
}