import React from 'react';
import styles from './ForecastBox.module.scss'
import {ListType} from '../../../../api/types';

type ForecastBox = {
    list: ListType
}

export const ForecastBox = ({list}: ForecastBox) => {

    const finaleTemp = Math.round(list.main.temp)

    return <div className={styles.weatherForecast}>
        <span className={styles.date}>
            {list.dt_txt}
        </span>
        <span className={styles.temp}>
            {finaleTemp}&deg;
        </span>
        <span className={styles.description}>
            {list.weather[0].description}
        </span>
        <span>
            Давление: {list.main.pressure} мм
        </span>
        <span>
            Влажность: {list.main.humidity}%
        </span>
        <span>
            Ветер: {list.wind.speed} км/ч
        </span>
    </div>
}