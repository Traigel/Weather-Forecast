import React from "react";
import styles from "./Error404.module.scss"
import {useNavigate} from "react-router-dom";
import {SvgSelector} from '../SvgSelector/SvgSelector';
import {Button} from "../Button/Button";

export const Error404 = () => {

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate('/weather')
    }

    return <div className={styles.errorComponent}>
        <SvgSelector name={'error404'} className={styles.svg}/>
        <h2 className={styles.title}>Page not found</h2>
        <Button
            onClick={onClickHandler}
            className={styles.button}
        >
            Back home
        </Button>
    </div>
}