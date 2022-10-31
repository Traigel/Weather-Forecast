import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CoordType, ResponseForecastDataType, ResponseWeatherDataType} from '../../api/types';

import {getCityCurrentWeather, getCityForecastWeather} from './weather-actions';

const initialState = {
    city: 'Minsk' as CityType,
    cityUrl: '',
    location: null as CoordType | null,
    weatherData: null as ResponseWeatherDataType | null,
    forecastData: null as ResponseForecastDataType | null
}

const slice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setCity(state, action: PayloadAction<{ city: CityType }>) {
            state.city = action.payload.city
        },
        setCityUrl(state, action: PayloadAction<{ cityUrl: string }>) {
            state.cityUrl = action.payload.cityUrl
        },
        setLocation(state, action: PayloadAction<CoordType | null>) {
            state.location = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCityCurrentWeather.fulfilled, (state, action) => {
                state.weatherData = action.payload
            })
            .addCase(getCityForecastWeather.fulfilled, (state, action) => {
                state.forecastData = action.payload
            })
    }
})

export const weatherReducer = slice.reducer
export const {setCity, setCityUrl, setLocation} = slice.actions

// Types
export type WeatherInitialStateType = typeof initialState

export type CityType = 'Minsk' | 'Moscow' | 'Bratislava'