import React from 'react';
import { useState } from 'react';
import style from './style.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {

    const [isVisibled, setIsVisibled] = useState(false);

    function showOrHideMenu() {
        setIsVisibled(!isVisibled);
    }

    return (
        <>
            <nav className={style.header} id="topo">
                <div className={style.logo}>
                    <img src={"/Haikai-logo.png"} />
                </div>
                <div className={style.btnMenu} onClick={showOrHideMenu}></div>
                <div className={style.navigation}>
                    <ul>
                        <li>
                            <Link to="colecao" spy={true} smooth={true} duration={1000}>Coleção</Link>
                        </li>
                        <li>
                            <Link to="sobre" spy={true} smooth={true} duration={1000}>Sobre nós</Link>
                        </li>
                        <li>
                            <Link to="contato" spy={true} smooth={true} duration={1000}>Contato</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.menu} style={isVisibled ? { display: 'block' } : { display: 'none' }}>
                    <ul>
                        <li>
                            <Link to="colecao" spy={true} smooth={true} duration={1000}>Coleção</Link>
                        </li>
                        <li>
                            <Link to="sobre" spy={true} smooth={true} duration={1000}>Sobre nós</Link>
                        </li>
                        <li>
                            <Link to="contato" spy={true} smooth={true} duration={1000}>Contato</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}