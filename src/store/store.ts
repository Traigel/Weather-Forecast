import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {appReducer} from '../app/app-reducer';
import {loadState, saveState} from "../common/utils/localStorage-utils";
import {weatherReducer} from '../features/Main/weather-reducer';


const rootReducer = combineReducers({
    app: appReducer,
    weather: weatherReducer
})

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState()
})

store.subscribe(() => {
    saveState(
        store.getState().weather
    )
})

// Types
export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch