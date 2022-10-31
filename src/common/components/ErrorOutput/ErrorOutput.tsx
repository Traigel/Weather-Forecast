import styles from './ErrorOutput.module.scss'
import {useAppSelector} from '../../hooks/useAppSelector';
import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {SvgSelector} from '../SvgSelector/SvgSelector';
import {setAppError} from '../../../app/app-reducer';

export const ErrorOutput = () => {

    const dispatch = useAppDispatch()
    const app = useAppSelector(state => state.app)

    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()

    const onClickHandler = () => {
        dispatch(setAppError({error: ''}))
        clearTimeout(timeoutId)
    }

    useEffect(() => {
        clearTimeout(timeoutId)
        if (app.error) {
            const timeoutId = setTimeout(() => {
                dispatch(setAppError({error: ''}))
            }, 7000)
            setTimeoutId(timeoutId)
        }
    }, [app])

    return <div className={styles.ErrorOutputComponent}>
        {app.error &&
            <div className={styles.error}>
                <div className={styles.h3}>
                    {app.error}
                </div>
                <div
                    className={styles.cross}
                    onClick={onClickHandler}
                >
                    <SvgSelector name={'cross'}/>
                </div>
            </div>
        }
    </div>
}