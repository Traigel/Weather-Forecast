import {AppInitialStateType, appReducer, setAppError, setAppIsInitialized, setAppStatus} from './app-reducer';

let state: AppInitialStateType

beforeEach(() => {
    state = {
        status: 'idle',
        error: {message: ''},
        isInitialized: false
    }
})

test('set app status', () => {
    const appReducerTest = appReducer(state, setAppStatus({status: 'loading'}))
    expect(appReducerTest.status).toBe('loading')
})

test('set app error', () => {
    const appReducerTest = appReducer(state, setAppError({message: 'Error text'}))
    expect(appReducerTest.error.message).toBe('Error text')
})

test('set app error', () => {
    const appReducerTest = appReducer(state, setAppIsInitialized({isInitialized: true}))
    expect(appReducerTest.isInitialized).toBe(true)
})