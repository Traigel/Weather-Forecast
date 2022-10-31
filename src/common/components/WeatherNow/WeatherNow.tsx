import React from 'react';
import styles from './WeatherNow.module.scss';

type WeatherNowPropsType = {
    temp: number | undefined
    icon: string | undefined
    description: string | undefined
    name: string | undefined
}

export const WeatherNow = ({temp, icon, description, name}: WeatherNowPropsType) => {

    const finaleTemp = temp && Math.round(temp)

    return <div className={styles.weatherNow}>
        <img
            className={styles.icon}
            src={`https://openweathermap.org/img/w/${icon}.png`}
            alt={'Icon depicting current weather'}
        />
        <span className={styles.temp}>{finaleTemp}&deg;</span>
        <span className={styles.text}>{description}</span>
        <span className={styles.text}>Город: {name}</span>
    </div>
}