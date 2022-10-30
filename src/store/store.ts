import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

const rootReducer = combineReducers ({

})

export const store = configureStore({
    reducer: rootReducer,

    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

// Types
export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch