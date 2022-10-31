import React from 'react';
import styles from './WeatherForecast.module.scss'
import {ForecastBox} from './ForecastBox/ForecastBox';
import {ListType} from '../../../api/types';

type WeatherForecastPropsType = {
    lists: ListType[] | undefined
}

export const WeatherForecast = ({lists}: WeatherForecastPropsType) => {

    return <div className={styles.weatherForecastBox}>
        {lists && lists.map((el, index) => {
            return <ForecastBox key={index} list={el}/>
        })}
    </div>

}