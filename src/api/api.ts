import axios from "axios";
import {ParamsWeatherForecastType, ParamsWeatherType, ResponseForecastDataType, ResponseWeatherDataType} from './types';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: 'b89aaae1d1a996836e7f8435998959f0',
        units: 'metric'
    }
})

export const weatherAPI = {
    getCurrentWeather(params: ParamsWeatherType) {
        return instance.get<ResponseWeatherDataType>('weather', {
            params: {...params}
        })
    },
    getForecastWeather(params: ParamsWeatherForecastType) {
        return instance.get<ResponseForecastDataType>('forecast', {
                params: {...params}
            }
        )
    }
}