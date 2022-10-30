import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    status: 'idle' as RequestStatusType,
    error: '',
    isInitialized: false,
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppStatus(state, action: PayloadAction<{status: RequestStatusType}>) {
            state.status = action.payload.status
        },
        setAppError(state, action: PayloadAction<{error: string}>) {
            state.error = action.payload.error
        },
        setAppIsInitialized(state, action: PayloadAction<{isInitialized: boolean}>) {
            state.isInitialized = action.payload.isInitialized
        },
    }
})

export const appReducer = slice.reducer
export const {setAppStatus, setAppError, setAppIsInitialized} = slice.actions

// Types
export type AppInitialStateType = typeof initialState

export type RequestStatusType = 'idle' | 'loading'