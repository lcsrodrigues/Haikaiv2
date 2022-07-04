import React from 'react';
import style from './style.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TitleSection from '../titleSection/titleSection';

export default function Section02() {

    var settings;

    if (typeof window !== 'undefined') {

        if (window.innerWidth > 768) {
            settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false
            };
        } else {
            settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            };
        }
    }



    return (
        <div className={style.section} id="colecao">
            <TitleSection text={`Kalma`} bkcolor={"#AFA96E"} />
            <div className={style.deck}>
                <Slider {...settings}>
                    <div className={style.card}>
                        <img src={'imageCollection-01.png'} />
                    </div>
                    <div className={style.card}>
                        <img src={'imageCollection-02.png'} />
                    </div>
                    <div className={style.card}>
                        <img src={'imageCollection-03.png'} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}