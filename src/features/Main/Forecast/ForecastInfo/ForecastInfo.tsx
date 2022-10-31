import React from 'react';
import styles from './ForecastInfo.module.scss'
import {InfoBox} from '../../../../common/components/InfoBox/InfoBox';
import {MainType, WindType} from '../../../../api/types';

type WeatherInfoPropsType = {
    main: MainType | undefined
    wind: WindType | undefined
}

export const ForecastInfo = ({main, wind}: WeatherInfoPropsType) => {

    const finaleTemp = main && Math.round(main.temp)
    const tempFeelsLike = main && Math.round(main.feels_like)

    return <div className={styles.forecastInfo}>
        <div className={styles.infoBox}>
            <InfoBox
                svgName={'temperature'}
                title={'Температура'}
                text={<span>{finaleTemp}&deg; - ощущается как {tempFeelsLike}&deg;</span>}
            />
            <InfoBox
                svgName={'pressure'}
                title={'Давление'}
                text={<span>{main && main.pressure} мм ртутного столба</span>}
            />
        </div>
        <div className={styles.infoBox}>
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
    </div>
}