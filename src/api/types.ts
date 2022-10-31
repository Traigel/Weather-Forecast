export type ParamsWeatherType = {
    q?: string
    lat?: number
    lon?: number
    cnt?: number
}

export type ResponseWeatherDataType = {
    coord: CoordType;
    weather: WeatherType[];
    base: string;
    main: MainType;
    visibility: number;
    wind: WindType;
    clouds: CloudsType;
    dt: number;
    sys: SysType;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export type CoordType = {
    lon: number;
    lat: number;
}

export type WeatherType = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export type MainType = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export type WindType = {
    speed: number;
    deg: number;
    gust: number;
}

export type CloudsType = {
    all: number;
}

export type SysType = {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export type ResponseForecastDataType = {
    cod: string;
    message: number;
    cnt: number;
    list: ListType[];
    city: RootCityType;
}

export type RootMainType = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export type RootWindType = {
    speed: number;
    deg: number;
    gust: number;
}

export type ListType = {
    dt: number;
    main: RootMainType;
    weather: WeatherType[];
    clouds: { all: number; };
    wind: RootWindType;
    visibility: number;
    pop: number;
    sys: { pod: string; };
    dt_txt: string;
}

export type RootCityType = {
    id: number;
    name: string;
    coord: CoordType;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}