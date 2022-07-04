import React from 'react';
import style from './style.module.scss';

export default function Section01() {
    return (
        <div className={style.section} id="haikai">
            <div className={style.image}>
                <img src={'/banner-02.png'} />
                <img src={'/banner-01.png'} />
            </div>
        </div>
    )
}