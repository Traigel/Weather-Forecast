import {createAsyncThunk} from "@reduxjs/toolkit";
import {ParamsWeatherForecastType, ResponseWeatherDataType} from '../../api/types';
import {setAppIsInitialized, setAppStatus} from '../../app/app-reducer';
import {weatherAPI} from '../../api/api';
import {setCity, setCityUrl} from "./weather-reducer";
import {errorHandlerUtil} from "../../common/utils/errors-utils";

export const getCityCurrentWeather = createAsyncThunk<ResponseWeatherDataType, ParamsWeatherForecastType>
('weather/getCityCurrentWeather', async (params, {dispatch, rejectWithValue}) => {
    dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await weatherAPI.getCurrentWeather({...params})
        dispatch(setCityUrl({cityUrl: res.data.name}))
        if (params.q && params.q === 'Minsk' || params.q === 'Moscow' || params.q === 'Bratislava') {
            dispatch(setCity({city: params.q}))
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