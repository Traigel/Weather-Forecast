import React from 'react';
import styles from './Weather.module.scss'
import {CitySelector} from './CitySelector/CitySelector';
import {CityType} from '../weather-reducer';
import {useAppSelector} from '../../../common/hooks/useAppSelector';
import {useAppDispatch} from '../../../common/hooks/useAppDispatch';
import {getCityCurrentWeather, getCityForecastWeather} from '../weather-actions';

export const Weather = () => {

    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.app.status)
    const city = useAppSelector(state => state.weather.city)

    const callBackCityHandler = (city: CityType) => {
        dispatch(getCityCurrentWeather({q: city}))
        dispatch(getCityForecastWeather({q: city, cnt: 24}))
    }

    return <div className={styles.weatherComponent}>
        <div className={styles.weatherNowBox}>

            <CitySelector
                city={''}
                callBack={callBackCityHandler}
                status={status}
            />
        </div>
        {city}
    </div>
}