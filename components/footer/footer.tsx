import React from 'react';
import style from './style.module.scss';

export default function Footer() {
    return (
        <div className={style.section}>
            <div className={style.footer}>
                <div className={style.footerContent}>
                    <div className={style.sideLeft}>
                        <p>+351 900 911 922</p>
                        <p>Rua Haikai, N 1</p>
                    </div>
                    <div className={style.sideCenter}>
                        <img src={'Haikai-logo.png'} />
                    </div>
                    <div className={style.sideRight}>
                        <a target="_blank" rel="noreferrer" href={"https://www.facebook.com"} ><img src={'Facebook.png'} /></a>
                        <a target="_blank" rel="noreferrer" href={"https://www.instagram.com"} ><img src={'Instagram.png'} /></a>
                        <a target="_blank" rel="noreferrer" href={"https://br.pinterest.com"} ><img src={'Pinterest.png'} /></a>
                    </div>
                </div>
                <div className={style.footerTM}>
                    <span>© Todos os direitos reservados - 2022</span>
                </div>
            </div>
        </div>
    )
}