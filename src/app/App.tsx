import React from 'react';
import styles from './App.module.scss'
import {Header} from '../features/Header/Header';
import {LinearProgress} from '../common/components/LinearProgress/LinearProgress';
import {useAppSelector} from '../common/hooks/useAppSelector';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from '../common/components/Error404/Error404';
import {Forecast} from '../features/Main/Forecast/Forecast';
import {Weather} from '../features/Main/Weather/Weather';
import {ErrorOutput} from '../common/components/ErrorOutput/ErrorOutput';

export const App = () => {

    const status = useAppSelector(state => state.app.status)

    return (
        <div className={styles.app}>
            {status === 'loading' && <LinearProgress/>}
            <Header/>
            <main>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/weather'}/>}/>
                    <Route path={'/weather'} element={<Weather/>}/>
                    <Route path={'/forecast/:city'} element={<Forecast/>}/>
                    <Route path={'/error404'} element={<Error404/>}/>
                    <Route path={'*'} element={<Navigate to={'/error404'}/>}/>
                </Routes>
            </main>
            <ErrorOutput/>
        </div>
    );
}
