import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    ParamsWeatherForecastType,
    ParamsWeatherType,
    ResponseForecastDataType,
    ResponseWeatherDataType
} from '../../api/types';
import {setAppIsInitialized, setAppStatus} from '../../app/app-reducer';
import {weatherAPI} from '../../api/api';
import {setCity, setCityUrl, setLocation} from "./weather-reducer";
import {errorHandlerUtil} from "../../common/utils/errors-utils";

export const getCityCurrentWeather = createAsyncThunk<ResponseWeatherDataType, ParamsWeatherType>
('weather/getCityCurrentWeather', async (params, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await weatherAPI.getCurrentWeather({...params})
        dispatch(setCityUrl({cityUrl: res.data.name}))
        if (params.q && params.q === 'Minsk' || params.q === 'Moscow' || params.q === 'Bratislava') {
            dispatch(setCity({city: params.q}))
        }
        if (params.lat && params.lon) {
            dispatch(setLocation({lon: params.lon, lat: params.lon}))
        }
        return res.data
    } catch (e) {
        errorHandlerUtil(e, dispatch)
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: 'idle'}))
        dispatch(setAppIsInitialized({isInitialized: true}))
    }
})

export const getCityForecastWeather = createAsyncThunk<ResponseForecastDataType, ParamsWeatherForecastType>
('weather/getCityForecastWeather', async (params, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await weatherAPI.getForecastWeather({...params})
        return res.data
    } catch (e) {
        errorHandlerUtil(e, dispatch)
        return rejectWithValue(null)
    } finally {
        dispatch(setAppStatus({status: 'idle'}))
        dispatch(setAppIsInitialized({isInitialized: true}))
    }
})