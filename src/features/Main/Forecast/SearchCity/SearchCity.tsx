import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import styles from './SearchCity.module.scss'
import {Button} from '../../../../common/components/Button/Button';
import {InputText} from '../../../../common/components/InputText/InputText';
import {RequestStatusType} from '../../../../app/app-reducer';

type SearchCityPropsType = {
    callBack: (value: string) => void
    status: RequestStatusType
}

export const SearchCity = ({callBack, status}: SearchCityPropsType) => {

    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (/^[a-z\s\-]+$/i.test(e.currentTarget.value) || e.currentTarget.value === '') {
            setValue(e.currentTarget.value)
            setError('')
        } else {
            setError('Город указывается латинскими буквами')
        }
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onClickHandler()
    }

    const onClickHandler = () => {
        if (value !== '') {
            callBack(value)
            setValue('')
        } else {
            setError('Введите название города...')
        }
    }

    const finaleClassName = `${styles.input} ${error ? styles.error : ''}`
    const finalPlaceholder = error ? error : 'Введите название города...'

    return <div className={styles.searchCityComponent}>
        <InputText
            value={value}
            onChange={onChangeHandler}
            onKeyUp={onKeyUpHandler}
            className={finaleClassName}
            placeholder={finalPlaceholder}
            disabled={status === 'loading'}
        />
        <Button
            onClick={onClickHandler}
            className={styles.button}
            disabled={status === 'loading'}
        >
            Поиск
        </Button>
    </div>
}