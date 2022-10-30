import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    city: 'Minsk' as CityType,
    cityUrl: ''
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
    }
})

export const weatherReducer = slice.reducer
export const {setCity, setCityUrl} = slice.actions

// Types
export type WeatherForecastInitialStateType = typeof initialState

export type CityType = 'Minsk' | 'Moscow' | 'Bratislava'