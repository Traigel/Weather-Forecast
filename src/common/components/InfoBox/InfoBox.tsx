import React, {ReactNode} from 'react';
import styles from './InfoBox.module.scss';
import {NameType, SvgSelector} from '../SvgSelector/SvgSelector';

type InfoBoxPropsType = {
    svgName: NameType
    title: string
    text: ReactNode
}

export const InfoBox = ({svgName, title, text}: InfoBoxPropsType) => {
    return <div className={styles.infoBox}>
        <div className={styles.iconBox}>
            <SvgSelector name={svgName}/>
        </div>
        <span className={styles.title}>{title}</span>
        <span className={styles.text}>{text}</span>
    </div>
}