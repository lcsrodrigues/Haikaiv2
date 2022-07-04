import React from 'react';
import style from './style.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TitleSection from '../titleSection/titleSection';

export default function Section03() {

    return (
        <div className={style.section} id="sobre">
            <TitleSection text={'Sobre nós'} bkcolor={"#7C8034"} />
            <div className={style.aboutUs}>
                <div className={style.sideLeft}>
                    <img src={"about-us.svg"} />
                </div>
                <div className={style.sideRight}>
                    <p>Kalma - remete para o traje japonês, mas com um ar modernizado, representa uma coleção calma e serena que tenta transmitir a beleza do jardim Kenrokuen e sua história.</p>
                    <p>Assim como as folhas das árvores exibem o movimento do vento, Kalma faz questão de exibir, através da leveza e suavidade das roupas, o movimento de quem as veste.</p>
                    <p>São peças leves, que transmitem serenidade e conforto.</p>
                </div>
            </div>
        </div>
    )
}