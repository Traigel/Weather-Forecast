import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ResponseWeatherDataType} from '../../api/types';
import {getCityCurrentWeather} from './weather-actions';

const initialState = {
    city: 'Minsk' as CityType,
    cityUrl: '',
    weatherData: {} as ResponseWeatherDataType
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCityCurrentWeather.fulfilled, (state, action) => {
                state.weatherData = action.payload
            })
    }
})

export const weatherReducer = slice.reducer
export const {setCity, setCityUrl} = slice.actions

// Types
export type WeatherInitialStateType = typeof initialState

export type CityType = 'Minsk' | 'Moscow' | 'Bratislava'