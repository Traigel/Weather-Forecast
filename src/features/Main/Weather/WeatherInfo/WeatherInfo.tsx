import React from 'react';
import styles from './WeatherInfo.module.scss';
import {InfoBox} from '../../../../common/components/InfoBox/InfoBox';
import {MainType, WindType} from '../../../../api/types';

type WeatherInfoPropsType = {
    main: MainType | undefined
    wind: WindType | undefined
}

export const WeatherInfo = ({main, wind}: WeatherInfoPropsType) => {

    const finaleTemp = main && Math.round(main.temp)
    const tempFeelsLike = main && Math.round(main.feels_like)

    return <div className={styles.weatherInfo}>
        <InfoBox
            svgName={'temperature'}
            title={'Температура'}
            text={<span>{finaleTemp}&deg;<span className={styles.spanOff}> - ощущается как {tempFeelsLike}&deg;</span></span>}
        />
        <InfoBox
            svgName={'pressure'}
            title={'Давление'}
            text={<span>{main && main.pressure} мм<span className={styles.spanOff}> ртутного столба</span></span>}
        />
        <InfoBox
            svgName={'humidity'}
            title={'Влажность'}
            text={<span>{main && main.humidity}%</span>}
        />
        <InfoBox
            svgName={'wind'}
            title={'Ветер'}
            text={<span>{wind && wind.speed} км/ч</span>}
        />
    </div>
}