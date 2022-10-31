import {ResponseForecastDataType, ResponseWeatherDataType} from '../../api/types';
import {setCity, setCityUrl, setLocation, WeatherInitialStateType, weatherReducer} from './weather-reducer';
import {getCityCurrentWeather, getCityForecastWeather} from './weather-actions';

let state: WeatherInitialStateType
let newWeatherData: ResponseWeatherDataType
let newForecastData: ResponseForecastDataType

beforeEach(() => {
    state = {
        city: 'Minsk',
        cityUrl: '',
        location: null,
        weatherData: {} as ResponseWeatherDataType,
        forecastData: {} as ResponseForecastDataType
    }
    newWeatherData = {
        coord: {
            lon: 20,
            lat: 30
        },
        weather: [{
            id: 1,
            main: 'clouds',
            description: 'overcast clouds',
            icon: '04n'
        }],
        base: 'stations',
        main: {
            temp: 2,
            feels_like: 5,
            temp_min: 3,
            temp_max: 2,
            pressure: 1009,
            humidity: 79,
            grnd_level: 991,
            sea_level: 1009
        },
        visibility: 10000,
        wind: {
            speed: 7.54,
            deg: 320,
            gust: 14.55
        },
        clouds: {
            all: 100
        },
        dt: 1667227166,
        sys: {
            id: 2000314,
            type: 2,
            country: 'RU',
            sunrise: 1667190771,
            sunset: 1667224398
        },
        timezone: 10800,
        id: 524901,
        name: 'Moscow',
        cod: 200
    }
    newForecastData = {
        cod: '200',
        message: 0,
        cnt: 20,
        list: [
            {
                dt: 1667239200,
                main: {
                    temp: 11.23,
                    feels_like: 10.73,
                    temp_min: 11.23,
                    temp_max: 14.07,
                    pressure: 1021,
                    sea_level: 1021,
                    grnd_level: 1001,
                    humidity: 89,
                    temp_kf: -2.84
                },
                weather: [{
                    id: 803,
                    main: 'Clouds"',
                    description: 'broken clouds',
                    icon: '04n'
                }],
                clouds: {
                    all: 70
                },
                wind: {
                    speed: 3.09,
                    deg: 109,
                    gust: 4.56
                },
                visibility: 10000,
                pop: 0,
                sys: {
                    pod: 'n'
                },
                dt_txt: '022-10-31 18:00:00'
            }
        ],
        city: {
            id: 3060972,
            name: 'Bratislava',
            coord: {
                lat: 48.1482,
                lon: 17.1067
            },
            country: 'SK',
            population: 423737,
            timezone: 3600,
            sunrise: 1667194487,
            sunset: 1667230527
        }
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

test('set location', () => {
    const weatherReducerTest = weatherReducer(state, setLocation({lon: 20, lat: 30}))
    expect(weatherReducerTest.location?.lon).toBe(20)
    expect(weatherReducerTest.location?.lat).toBe(30)
})

test('get city current weather', () => {
    const action = getCityCurrentWeather.fulfilled(newWeatherData, 'requestId', {q: 'Moscow'})
    const weatherReducerTest = weatherReducer(state, action)
    expect(weatherReducerTest.weatherData.name).toBe('Moscow')
    expect(weatherReducerTest.weatherData.id).toBe(524901)
})

test('get forecast weather', () => {
    const action = getCityForecastWeather.fulfilled(newForecastData, 'requestId', {q: 'Bratislava', cnt: 20})
    const weatherReducerTest = weatherReducer(state, action)
    expect(weatherReducerTest.forecastData.city.name).toBe('Bratislava')
    expect(weatherReducerTest.forecastData.city.id).toBe(3060972)
})