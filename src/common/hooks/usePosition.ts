import {useState, useEffect} from 'react';

export const usePosition = () => {

    const [position, setPosition] = useState<GeolocationPosition>();
    const [error, setError] = useState<string>('');

    const onChange = (position: GeolocationPosition) => {
        setPosition(position);
    };

    const onError = (positionError: GeolocationPositionError) => {
        setError(positionError.message);
    };

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            setError('Геолокация не поддерживается браузером');
            return;
        }
        const watcher = geo.watchPosition(onChange, onError);
        return () => geo.clearWatch(watcher);
    }, []);

    return {position, error};
}