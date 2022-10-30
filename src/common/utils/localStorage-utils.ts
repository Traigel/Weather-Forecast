import {WeatherInitialStateType} from '../../features/Main/weather-reducer';

export const saveState = (weather: WeatherInitialStateType) => {
    try {
        const serializedState = JSON.stringify({weather: {city: weather.city, cityUrl: weather.cityUrl}})
        localStorage.setItem('weather', serializedState)
    } catch (error) {
        console.log(error)
    }
}

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('weather');
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined
    }
}