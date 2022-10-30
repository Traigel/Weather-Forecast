import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss'

export const Header = () => {

    const cityUrl = useAppSelector(state => state.weather.cityUrl)

    return <header className={styles.headerComponent}>
        <div className={styles.headerLogo}>
            <SvgSelector name={'logo'} className={styles.svg}/>
            <h1 className={styles.title}>Weather Forecast</h1>
        </div>
        <nav className={styles.navBox}>
            <NavLink
                to={'/weather'}
                className={({isActive}) => isActive ? `${styles.activeLink}` : `${styles.link}`}
            >
                Weather
            </NavLink>
            <NavLink
                to={`/forecast/${cityUrl}`}
                className={({isActive}) => isActive ? `${styles.activeLink}` : `${styles.link}`}
            >
                Forecast
            </NavLink>
        </nav>
    </header>
}