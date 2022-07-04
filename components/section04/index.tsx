import React from 'react';
import style from './style.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TitleSection from '../titleSection/titleSection';

export default function Section04() {

    return (
        <div className={style.section} id="contato">
            <TitleSection text={'Redes sociais'} bkcolor={"#AFA96E"} />
            <div className={style.contato}>
                <div className={style.sideLeft}>
                    <div>
                        <h1>Siga nossas instagram</h1>
                    </div>
                    <div>
                        <img src={"arrow-right.png"} />
                    </div>
                </div>
                <div className={style.sideRight}>
                    <div className={style.deck}>
                        <div className={style.card}>
                            <img src={"instagram01.png"} />
                        </div>
                        <div className={style.card}>
                            <img src={"instagram02.png"} />
                        </div>
                        <div className={style.card}>
                            <img src={"instagram03.png"} />
                        </div>
                        <div className={style.card}>
                            <img src={"instagram04.png"} />
                        </div>
                        <div className={style.card}>
                            <img src={"instagram05.png"} />
                        </div>
                        <div className={style.card}>
                            <img src={"instagram06.png"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}