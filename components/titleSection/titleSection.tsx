import React from 'react';
import style from './style.module.scss';

export default function TitleSection({ ...props }) {
    return (
        <div className={style.containerDivisor}>
            <div className={style.logo}>
                <img src={"/Haikai-logo.png"} />
            </div>
            <div className={style.divisor}>
                <div className={style.title} style={{ background: props.bkcolor }}>
                    <span>{props.text}</span>
                </div>
                <div className={style.trianguloEsquerda} style={
                    {
                        borderTop: "0 solid transparent",
                        borderBottom: "50px solid transparent",
                        borderLeft: `30px solid ${props.bkcolor}`
                    }
                }></div>
            </div>
        </div>
    )
}