import {setCity, setCityUrl, WeatherInitialStateType, weatherReducer} from './weather-reducer';

let state: WeatherInitialStateType

beforeEach(() => {
    state = {
        city: 'Minsk',
        cityUrl: ''
    }
})

test('set city', () => {
    const weatherReducerTest = weatherReducer(state, setCity({city: 'Bratislava'}))
    expect(weatherReducerTest.city).toBe('Bratislava')
})

test('set city url', () => {
    const weatherReducerTest = weatherReducer(state, setCityUrl({cityUrl: 'Grodna'}))
    expect(weatherReducerTest.cityUrl).toBe('Grodna')
})